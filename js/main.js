const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
let L = "en", firstRender = true;
const tx = v => (v && typeof v === "object" && !Array.isArray(v)) ? (v[L] || v.en) : v;

/* images: try the given extension first, then the others; hide the <img> if none exists */
const IMG_EXT = ["jpg", "jpeg", "png", "webp"];
function imgNext(el) {
  const b = el.dataset.b; if (!b) { el.remove(); return; }
  const list = el.dataset.e.split(","), i = +el.dataset.i + 1;
  if (i < list.length) { el.dataset.i = i; el.src = b + "." + list[i]; } else el.remove();
}
const imgTag = src => {
  const m = src.match(/^(.*)\.(jpe?g|png|webp)$/i);
  const ex = m ? [m[2].toLowerCase(), ...IMG_EXT.filter(e => e !== m[2].toLowerCase())].join(",") : "";
  return `<img loading="lazy" src="${src}" ${m ? `data-b="${m[1]}" data-i="0" data-e="${ex}"` : ""} alt="" onerror="imgNext(this)">`;
};
const pad = n => String(n + 1).padStart(2, "0");

const card = (i, inner, cls) => `<div class="card spot rv ${cls}" style="--d:${(i % 4) * .07}s">${inner}</div>`;
const imgBox = (src, n) => `<div class="img"><em>${pad(n)}</em>${imgTag(src)}</div>`;

function render() {
  const t = T[L];
  document.documentElement.lang = L; document.documentElement.dir = L === "ar" ? "rtl" : "ltr";
  $$("[data-t]").forEach(e => e.textContent = t[e.dataset.t]);
  $("#lang").textContent = L === "ar" ? "English" : "العربية";
  $("#summary").textContent = t.summary;
  $("#exp").innerHTML = t.exp.map(x => `<li>${x}</li>`).join("");
  $("#langs").innerHTML = t.langs.map(l => `<div class="lg"><span>${l[0]}</span><i>${l[1]}</i></div>`).join("");
  document.title = t.name + " | " + t.role;

  const all = SKILLS.flatMap(s => tx(s.items));
  $("#mq").innerHTML = [...all, ...all].map(s => `<i>${s}</i>`).join("");
  $("#sk").innerHTML = SKILLS.map((s, i) => card(i, `<h3>${tx(s.h)}</h3><div class="chips">${tx(s.items).map(x => `<i>${x}</i>`).join("")}</div>`, "")).join("");

  renderProjects();

  $("#cg").innerHTML = CERTS.map((c, i) => card(i,
    `${imgBox(c.image || `img/certs/${i + 1}.jpeg`, i)}<div class="body"><h3>${tx(c.title)}</h3><p>${tx(c.issuer) || ""}${c.year ? " · " + c.year : ""}</p></div>`, "cert")).join("");

  $("#ct").innerHTML = [[t.email, LINKS.email, "mailto:" + LINKS.email], [t.phone, LINKS.phone, "tel:" + LINKS.phone], [t.linkedin, "LinkedIn", LINKS.linkedin], [t.code, "GitHub", LINKS.github]]
    .map(c => `<a class="card spot ct" href="${c[2]}" ${c[2].startsWith("http") ? 'target="_blank" rel="noopener"' : ""}><small>${c[0]}</small><b dir="ltr">${c[1]}</b></a>`).join("");

  $("#b-cv").href = LINKS.cv; $("#b-gh").href = LINKS.github;
  $("#st-cert").dataset.n = CERTS.length; $("#st-apps").dataset.n = LIST.length;
  const nm = $("#name"); nm.textContent = t.name;
  if (!firstRender) { nm.style.animation = "none"; void nm.offsetWidth; nm.style.animation = ""; nm.style.animationDelay = "0s,.8s"; }
  firstRender = false;
  bind(); $$(".rv").forEach(e => io.observe(e));
}

/* photo (falls back to initials) */
(() => { const i = new Image(); i.alt = "Ahmed Ayman Kamal"; i.onload = () => $("#photo").replaceChildren(i); i.src = PHOTO; })();

/* effects: spotlight, magnetic buttons, hero tilt */
function bind() {
  $$(".spot").forEach(el => el.onmousemove = e => { const r = el.getBoundingClientRect(); el.style.setProperty("--x", e.clientX - r.left + "px"); el.style.setProperty("--y", e.clientY - r.top + "px"); });
  $$(".mag").forEach(el => {
    el.onmousemove = e => { const r = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px,${(e.clientY - r.top - r.height / 2) * .35}px)`; };
    el.onmouseleave = () => el.style.transform = "";
  });
}
const pent = $("#pent");
$("#hero").addEventListener("mousemove", e => { const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5; pent.style.transform = `rotateY(${x * 22}deg) rotateX(${-y * 22}deg)`; });
$("#hero").addEventListener("mouseleave", () => pent.style.transform = "");

/* reveal + counters */
function count(el) { const n = +el.dataset.n, t0 = performance.now(); (function s(t) { const k = Math.min((t - t0) / 1400, 1); el.textContent = Math.round(n * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(s); })(t0); }
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("on"); $$("[data-n]", e.target).forEach(count); io.unobserve(e.target); } }), { threshold: .1 });

/* lightbox */
const lb = $("#lb");
document.addEventListener("click", e => { const b = e.target.closest(".img"); if (!b) return; const im = $("img", b); if (im) { lb.innerHTML = `<img src="${im.src}" alt="">`; lb.classList.add("on"); } });
lb.onclick = () => lb.classList.remove("on");
addEventListener("keydown", e => { if (e.key === "Escape") lb.classList.remove("on"); });

initProjects();
$("#lang").onclick = () => { L = L === "en" ? "ar" : "en"; render(); };
render();
