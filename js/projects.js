/* Projects: highlights, category filters, search, pagination, live preview */
const PAGE = 12, PS = { cat: "all", q: "", shown: PAGE };

function filtered() {
  const q = PS.q.trim().toLowerCase();
  return LIST.filter(p => (PS.cat === "all" || p.cat === PS.cat) &&
    (!q || [p.t.en, p.t.ar, p.d.en, p.d.ar, p.slug, CATS[p.cat].en, CATS[p.cat].ar].join(" ").toLowerCase().includes(q)));
}

function pCard(p, i) {
  const t = T[L], c = CATS[p.cat];
  return `<article class="card spot rv proj" style="--d:${(i % 6) * .05}s;--h:${c.h}">
    <div class="img"><span class="ic">${c.ic}</span>${imgTag(p.img)}<span class="badge">${c[L]}</span></div>
    <div class="body"><h3>${p.t[L]}</h3><p>${p.d[L]}</p>
      <div class="acts"><button type="button" class="mini p" data-pv="${p.slug}">${t.preview}</button>
      <a class="mini" href="${p.url}" target="_blank" rel="noopener">${t.live} ↗</a>
      <a class="mini" href="${p.gh}" target="_blank" rel="noopener">GitHub</a></div></div></article>`;
}

function observe(root) { $$(".rv", root).forEach(e => io.observe(e)); }

function drawGrid(append) {
  const list = filtered(), vis = list.slice(0, PS.shown), t = T[L], g = $("#pg");
  if (append) { const from = g.children.length; g.insertAdjacentHTML("beforeend", vis.slice(from).map((p, i) => pCard(p, i)).join("")); }
  else g.innerHTML = vis.map(pCard).join("");
  observe(g);
  $("#shown").textContent = t.shown.replace("{a}", vis.length).replace("{b}", list.length);
  $("#more").hidden = vis.length >= list.length;
  $("#more").textContent = t.p_more + " (" + (list.length - vis.length) + ")";
  $("#none").hidden = list.length > 0;
}

function renderProjects() {
  const t = T[L], counts = {};
  LIST.forEach(p => counts[p.cat] = (counts[p.cat] || 0) + 1);
  $("#pcount").textContent = t.p_count.replace("{n}", LIST.length).replace("{c}", Object.keys(counts).length);
  $("#hl").innerHTML = FEATURED.map(s => LIST.find(p => p.slug === s)).filter(Boolean).map(pCard).join("");
  observe($("#hl"));
  $("#pills").innerHTML = [["all", t.p_all, LIST.length], ...Object.keys(CATS).filter(k => counts[k]).map(k => [k, CATS[k][L], counts[k]])]
    .map(([k, n, c]) => `<button type="button" class="pill${PS.cat === k ? " on" : ""}" data-cat="${k}">${n} <i>${c}</i></button>`).join("");
  $("#q").placeholder = t.p_search;
  drawGrid(false);
}

/* live preview modal */
function openPV(slug) {
  const p = LIST.find(x => x.slug === slug); if (!p) return;
  $("#pvt").textContent = p.t[L]; $("#pvo").href = p.url; $("#pvg").href = p.gh; $("#pvf").src = p.url;
  $("#pv").classList.add("on"); document.body.style.overflow = "hidden";
}
function closePV() { $("#pv").classList.remove("on"); $("#pvf").src = "about:blank"; document.body.style.overflow = ""; }

/* called once from main.js, after $ and io exist */
function initProjects() {
$("#pills").addEventListener("click", e => { const b = e.target.closest(".pill"); if (!b) return; PS.cat = b.dataset.cat; PS.shown = PAGE; renderProjects(); });
let qt; $("#q").addEventListener("input", e => { clearTimeout(qt); qt = setTimeout(() => { PS.q = e.target.value; PS.shown = PAGE; drawGrid(false); }, 200); });
$("#more").addEventListener("click", () => { PS.shown += PAGE; drawGrid(true); });
document.addEventListener("click", e => {
  const b = e.target.closest("[data-pv]"); if (b) openPV(b.dataset.pv);
  const dv = e.target.closest("[data-dev]"); if (dv) $("#pvframe").dataset.dev = dv.dataset.dev;
  if (e.target.closest("#pvx") || e.target.id === "pv") closePV();
});
addEventListener("keydown", e => { if (e.key === "Escape") closePV(); });
}
