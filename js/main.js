const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
let L = "en", timer, firstRender = true;
const tx = v => (v && typeof v === "object" && !Array.isArray(v)) ? (v[L] || v.en) : v;
const pad = n => String(n + 1).padStart(2, "0");

/* name "decrypt" effect (English only; Arabic shows plainly) */
function decrypt(el, text) {
  clearInterval(timer);
  if (L === "ar") { el.textContent = text; return; }
  const set = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*<>/"; let i = 0;
  timer = setInterval(() => {
    el.textContent = [...text].map((c, k) => c === " " ? " " : k < i ? c : set[Math.random() * set.length | 0]).join("");
    i += .45; if (i >= text.length) { clearInterval(timer); el.textContent = text; }
  }, 35);
}

const card = (i, inner, cls) => `<div class="card spot rv ${cls}" style="--d:${(i % 4) * .07}s">${inner}</div>`;
const imgBox = (src, n) => `<div class="img"><em>${pad(n)}</em><img loading="lazy" src="${src}" alt="" onerror="this.remove()"></div>`;

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

  $("#pg").innerHTML = PROJECTS.map((p, i) => card(i,
    `${imgBox(p.image || `img/projects/${i + 1}.jpg`, i)}<div class="body"><h3>${p.title}</h3><p>${tx(p.desc) || ""}</p>
     <div class="tags">${(p.tags || []).map(x => `<i>${x}</i>`).join("")}</div>
     <div class="acts">${p.github ? `<a class="mini" href="${p.github}" target="_blank" rel="noopener">${t.code}</a>` : ""}${p.live ? `<a class="mini p" href="${p.live}" target="_blank" rel="noopener">${t.live}</a>` : ""}</div></div>`, "proj")).join("");

  $("#cg").innerHTML = CERTS.map((c, i) => card(i,
    `${imgBox(c.image || `img/certs/${i + 1}.jpg`, i)}<div class="body"><h3>${tx(c.title)}</h3><p>${tx(c.issuer) || ""}</p></div>`, "cert")).join("");

  $("#ct").innerHTML = [[t.email, LINKS.email, "mailto:" + LINKS.email], [t.phone, LINKS.phone, "tel:" + LINKS.phone], [t.linkedin, "LinkedIn", LINKS.linkedin], [t.code, "GitHub", LINKS.github]]
    .map(c => `<a class="card spot ct" href="${c[2]}" ${c[2].startsWith("http") ? 'target="_blank" rel="noopener"' : ""}><small>${c[0]}</small><b dir="ltr">${c[1]}</b></a>`).join("");

  $("#b-cv").href = LINKS.cv; $("#b-gh").href = LINKS.github;
  $("#st-cert").dataset.n = CERTS.length;
  if (firstRender) { firstRender = false; setTimeout(() => decrypt($("#name"), T[L].name), 1400); }
  else decrypt($("#name"), t.name);
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

$("#lang").onclick = () => { L = L === "en" ? "ar" : "en"; render(); };
render();
