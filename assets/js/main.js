(() => {
const S = SITE, B = BRANCHES, P = PRODUCTS, CATS = window.CATS, T = I18N, page = document.body.dataset.page;
let lang = localStorage.getItem("lang") === "ar" ? "ar" : "en", filter = null;
const t = k => T[lang][k] ?? T.en[k] ?? k;
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const smooth = () => matchMedia("(prefers-reduced-motion:reduce)").matches ? "auto" : "smooth";
const brand = () => S.brand[lang === "ar" ? 1 : 0];
const cat = id => CATS.find(c => c.id === id);

/* Image with designed fallback: the <img> covers the fallback; if it fails to load it removes itself. */
const src = id => (window.IMAGE_URLS && IMAGE_URLS[id]) || `assets/images/${id}.jpg`;
const pic = (path, emoji, label, alt, eager) => `<div class="pic"><span class="fb"><i>${emoji}</i><b>${esc(label)}</b></span><img src="${esc(path)}" alt="${esc(alt)}" ${eager ? "" : 'loading="lazy"'} onerror="this.remove()"></div>`;

const links = [["index.html", "home"], ["menu.html", "menu"], ["branches.html", "branches"], ["contact.html", "contact"]];
$("#hdr").innerHTML = `<div class="wrap bar"><a class="logo" href="index.html" id="logo"></a>
<button class="burger" id="burger" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button>
<nav id="nav">${links.map(([h, k]) => `<a href="${h}" data-i18n="nav_${k}" ${k === page ? 'aria-current="page"' : ""}></a>`).join("")}<button class="lang lang-btn" type="button"></button></nav></div>`;
$("#ftr").innerHTML = `<div class="wrap fgrid"><div><div class="logo" id="flogo"></div><p data-i18n="ft_p"></p><button class="lang lang-btn" type="button"></button></div>
<div><h3 data-i18n="ft_links"></h3>${links.map(([h, k]) => `<a href="${h}" data-i18n="nav_${k}"></a>`).join("")}</div>
<div><h3 data-i18n="ft_follow"></h3><div class="social" id="fsocial"></div><p class="fc" dir="ltr">${esc(S.phone)}<br>${esc(S.email)}</p></div></div>
<div class="wrap copy" id="copy"></div><button id="top" class="top" hidden data-i18n-aria="top">↑</button>`;
$("#burger").onclick = e => { const o = $("#nav").classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded", o); };
$("#nav").addEventListener("click", e => { if (e.target.tagName === "A") { $("#nav").classList.remove("open"); $("#burger").setAttribute("aria-expanded", "false"); } });
document.querySelectorAll(".lang-btn").forEach(b => b.onclick = () => { lang = lang === "en" ? "ar" : "en"; localStorage.setItem("lang", lang); render(); });
$("#top").onclick = () => scrollTo({ top: 0, behavior: smooth() });
addEventListener("scroll", () => { $("#top").hidden = scrollY < 600; }, { passive: true });

const money = n => "₪" + n;
const priceOf = p => Array.isArray(p.p) ? p.p.map((n, i) => `${t(p.z + (i + 1))} ${money(n)}`).join(" · ") : money(p.p);
const card = p => { const c = cat(p.cat), n = p[lang][0]; return `<article class="card">${p.tag ? `<span class="badge">${t(p.tag)}</span>` : ""}${pic(src(p.id), c.e, n, n)}<div class="cb"><h3>${esc(n)}</h3><p>${esc(p[lang][1])}</p><div class="price">${priceOf(p)}</div></div></article>`; };
const socials = () => Object.entries(S.social).filter(([, u]) => u).map(([n, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${n[0].toUpperCase() + n.slice(1)}</a>`).join("");
const L = a => a[lang === "ar" ? 1 : 0];
const mapsHref = (b, dir) => `https://www.google.com/maps/${dir ? "dir/?api=1&destination=" : "search/?api=1&query="}${encodeURIComponent(b.mapQuery)}`;

function branchFull(b, i) { return `<article class="bfull" id="${b.id}">${pic(b.img, i ? "☕" : "🏙️", L(b.name), L(b.name))}<div class="bi"><h2>${esc(L(b.name))}</h2>
<dl><dt>${t("addr")}</dt><dd>${esc(L(b.addr))}</dd><dt>${t("hours")}</dt><dd>${esc(L(b.hours))}</dd><dt>${t("phone")}</dt><dd dir="ltr">${esc(b.phone)}</dd></dl>
${b.mapQuery ? `<a class="btn" target="_blank" rel="noopener" href="${mapsHref(b, 1)}">${t("directions")}</a>` : `<button class="btn" type="button" data-demo="${b.id}">${t("directions")}</button><p class="note demo" id="demo-${b.id}" hidden>${t("demo_dir")}</p>`}</div>
<div class="map">${b.mapQuery ? `<iframe title="${esc(L(b.name))}" loading="lazy" src="https://maps.google.com/maps?q=${encodeURIComponent(b.mapQuery)}&output=embed"></iframe>` : `<div class="demomap"><span>📍</span><p>${t("demo_map")}</p></div>`}</div></article>`; }

function renderPage() {
  const first = id => P.find(p => p.id === id);
  if ($("#hero-pic")) {
    $("#hero-pic").innerHTML = pic(S.heroImage, "☕🥐", brand(), brand(), true);
    $("#hero-mini").innerHTML = ["cin-classic", "macaron-box"].map(id => { const p = first(id); return pic(src(id), cat(p.cat).e, p[lang][0], p[lang][0], true); }).join("");
    $("#about-pic").innerHTML = pic(S.aboutImage, "🍰", brand(), brand());
  }
  if ($("#cats")) $("#cats").innerHTML = CATS.map(c => { const p = P.find(x => x.cat === c.id); return `<a class="ccard" href="menu.html#${c.id}">${pic(src(p.id), c.e, c[lang], c[lang])}<span>${c[lang]}</span></a>`; }).join("");
  if ($("#best")) $("#best").innerHTML = BEST.map(id => card(first(id))).join("");
  if ($("#bprev")) $("#bprev").innerHTML = B.map((b, i) => `<a class="bcard" href="branches.html#${b.id}">${pic(b.img, i ? "☕" : "🏙️", L(b.name), L(b.name))}<div><h3>${esc(L(b.name))}</h3><p>${esc(L(b.addr))}</p><p>${esc(L(b.hours))}</p><span class="btn sm">${t("view_loc")}</span></div></a>`).join("");
  if ($("#menu")) {
    const f = filter || (CATS.some(c => c.id === location.hash.slice(1)) ? location.hash.slice(1) : "all");
    $("#filters").innerHTML = [{ id: "all", en: t("all"), ar: t("all") }, ...CATS].map(c => `<button type="button" data-f="${c.id}" aria-pressed="${c.id === f}">${c[lang]}</button>`).join("");
    $("#menu").innerHTML = CATS.filter(c => f === "all" || f === c.id).map(c => `<section class="msec" id="${c.id}"><h2>${c.e} ${c[lang]}</h2><div class="grid">${P.filter(p => p.cat === c.id).map(card).join("")}</div></section>`).join("");
  }
  if ($("#branches")) $("#branches").innerHTML = B.map(branchFull).join("");
  if ($("#icards")) {
    const wa = S.whatsapp ? `https://wa.me/${S.whatsapp}` : "";
    $("#icards").innerHTML = `<a class="icard" href="tel:${S.phone.replace(/\s/g, "")}"><i>📞</i><b>${t("call")}</b><span dir="ltr">${esc(S.phone)}</span></a><a class="icard" href="mailto:${esc(S.email)}"><i>✉️</i><b>${t("email_l")}</b><span dir="ltr">${esc(S.email)}</span></a><a class="icard wa" href="${wa}" target="_blank" rel="noopener"><i>💬</i><b>${t("wa")}</b><span>${t("wa_t")}</span></a><div class="icard"><i>ℹ️</i><b>${t("demo_tag")}</b><span></span></div>`;
    $("#social").innerHTML = socials();
  }
  $("#fsocial").innerHTML = socials();
}
const translateStatic = () => {
  document.querySelectorAll("[data-i18n]").forEach(e => e.textContent = t(e.dataset.i18n));
  document.querySelectorAll("[data-i18n-aria]").forEach(e => e.setAttribute("aria-label", t(e.dataset.i18nAria)));
};
function render() {
  const h = document.documentElement; h.lang = lang; h.dir = lang === "ar" ? "rtl" : "ltr";
  $("#logo").textContent = $("#flogo").textContent = brand();
  document.querySelectorAll(".lang-btn").forEach(b => { b.textContent = t("other_lang"); b.lang = lang === "en" ? "ar" : "en"; });
  $("#copy").textContent = `© ${new Date().getFullYear()} ${brand()}. ${t("rights")}`;
  document.title = `${t("t_" + page)} | ${brand()}`;
  $('meta[name="description"]').content = t("d_" + page);
  $("#burger").setAttribute("aria-label", t("menu_btn"));
  renderPage(); translateStatic();
  if (window.__validate) window.__validate(true);
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-f]");
  if (b) { filter = b.dataset.f; renderPage(); translateStatic(); if (filter !== "all") $("#" + filter)?.scrollIntoView({ behavior: smooth() }); return; }
  const d = e.target.closest("[data-demo]"); if (d) { const n = $("#demo-" + d.dataset.demo); n.hidden = !n.hidden; }
});
addEventListener("hashchange", () => { filter = null; renderPage(); translateStatic(); });

const form = $("#form");
if (form) {
  const rules = { name: v => v.trim().length >= 2 || "e_name", email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "e_email", message: v => v.trim().length >= 10 || "e_msg" };
  window.__validate = quiet => { let ok = true; Object.entries(rules).forEach(([n, fn]) => { const i = form[n], r = fn(i.value), bad = r !== true; if (bad) ok = false; const show = bad && (!quiet || i.dataset.touched); i.parentElement.querySelector(".err").textContent = show ? t(r) : ""; i.setAttribute("aria-invalid", !!show); }); return ok; };
  form.addEventListener("input", e => { e.target.dataset.touched = 1; __validate(true); });
  form.addEventListener("submit", async e => {
    e.preventDefault(); form.querySelectorAll("input,textarea").forEach(i => i.dataset.touched = 1);
    if (!__validate()) return;
    const st = $("#status");
    if (!S.formEndpoint) { st.textContent = t("ok"); return; }
    try { const r = await fetch(S.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) }); if (!r.ok) throw 0; st.textContent = t("sent"); form.reset(); } catch { st.textContent = t("fail"); }
  });
}
render();
})();
