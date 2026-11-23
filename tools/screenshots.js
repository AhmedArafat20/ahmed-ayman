/* Auto-capture a screenshot of every live project into img/projects/
   Usage:  npm install   (once)   then   npm run shots
   Options:  npm run shots -- --force          redo all, even existing images
             npm run shots -- alafdal curax    only these projects            */
const fs = require("fs"), path = require("path"), puppeteer = require("puppeteer");
const root = path.join(__dirname, "..");
const { PROJECTS } = new Function(fs.readFileSync(path.join(root, "js/data.js"), "utf8") + ";return {PROJECTS}")();
const out = path.join(root, "img/projects"); fs.mkdirSync(out, { recursive: true });
const args = process.argv.slice(2), FORCE = args.includes("--force"), ONLY = args.filter(a => !a.startsWith("--"));
const has = p => ["jpg", "png", "webp", "jpeg"].some(e => fs.existsSync(path.join(out, p.slug.toLowerCase() + "." + e)));
const todo = PROJECTS.filter(p => (!ONLY.length || ONLY.includes(p.slug)) && (FORCE || !has(p)));
const failed = [], total = todo.length; let done = 0;


/* uses puppeteer's own Chrome if present, otherwise your installed Chrome / Edge */
async function launch() {
  const paths = [process.env.CHROME_PATH,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe", "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", "/usr/bin/google-chrome"].filter(p => p && fs.existsSync(p));
  try { return await puppeteer.launch({ headless: "new" }); }
  catch (e) {
    if (!paths.length) throw e;
    console.log("Using installed browser: " + paths[0]);
    return puppeteer.launch({ headless: "new", executablePath: paths[0] });
  }
}

(async () => {
  console.log(`Capturing ${total} projects...`);
  const browser = await launch();
  async function worker() {
    while (todo.length) {
      const p = todo.shift(), page = await browser.newPage();
      try {
        await page.setViewport({ width: 1280, height: 800 });
        try { await page.goto(p.url, { waitUntil: "networkidle2", timeout: 40000 }); }
        catch (e1) { await page.goto(p.url, { waitUntil: "domcontentloaded", timeout: 60000 }); await new Promise(r => setTimeout(r, 4000)); } // slow sites: retry gentler
        await new Promise(r => setTimeout(r, 1500));
        await page.screenshot({ path: path.join(out, p.slug.toLowerCase() + ".jpg"), type: "jpeg", quality: 80 });
        console.log(`[${++done}/${total}] ok    ${p.slug}`);
      } catch (e) { failed.push(p.slug); console.log(`[${++done}/${total}] FAIL  ${p.slug}  (${e.message.split("\n")[0]})`); }
      finally { await page.close(); }
    }
  }
  await Promise.all([worker(), worker(), worker(), worker()]);
  await browser.close();
  require("./manifest.js").run();
  console.log(failed.length ? `\nFailed: ${failed.join(" ")}\nRetry with: npm run shots -- ${failed.join(" ")}` : "\nAll done.");
})();
