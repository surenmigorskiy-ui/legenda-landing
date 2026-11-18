const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");
const desktopQuery = window.matchMedia("(min-width: 768px)");

if (menuBtn && drawer) {
  const setExpanded = (open) => {
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  };

  menuBtn.addEventListener("click", () => {
    if (desktopQuery.matches) return;
    const open = drawer.classList.toggle("is-open");
    setExpanded(open);
  });

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (desktopQuery.matches) return;
      drawer.classList.remove("is-open");
      setExpanded(false);
    });
  });

  desktopQuery.addEventListener("change", () => {
    if (desktopQuery.matches) {
      drawer.classList.remove("is-open");
      setExpanded(false);
    }
  });
}

// Uzbek copy only. Russian is the HTML source and is restored unchanged.
const UZ = {
  "meta.title": "Oʻzingni oʻzing qil — Legenda®",
  "meta.description":
    "Legenda® — siz qoʻllab-quvvatlashni, motivatsiyani va oʻzingizning yaxshiroq versiyangiz sari yoʻlni topadigan joy. Ташкент, ул. Махтумкули, 79.",
  "menu.label": "Menyu",
  "lang.label": "Til",
  "nav.why": "Nega biz",
  "nav.activities": "Yoʻnalishlar",
  "nav.plans": "Klub kartalari",
  "nav.about": "Klub haqida",
  "nav.contact": "Kontaktlar",
  "nav.call": "Qoʻngʻiroq qilish: +998 78 555 75 55",
  "hero.alt": "Legenda®dagi mashgʻulotlar",
  "hero.title": "Oʻzingni<br />oʻzing <span class=\"accent\">qil</span>",
  "hero.lead":
    "Legenda<span class=\"tm\">®</span> Fitness Maxtumquli — bu siz qoʻllab-quvvatlashni, motivatsiyani va oʻzingizning yaxshiroq versiyangiz sari yoʻlni topadigan joy",
  "cta.try": "Bepul sinab koʻrish",
  "cta.call": "Qoʻngʻiroq qilish",
  "cta.write": "Telegramga yozish",
  "cta.signup": "Telegramda yozilish",
  "cta.tour": "Prezentatsiyaga yozilish",
  "why.title": "Nega<br /><em>tanlashadi</em><br />Legenda<span class=\"tm\">®</span>",
  "why.l1": "1\u00A0700\u00A0m²",
  "why.d1": "Biznes markazining 10 va 11-qavatlari",
  "why.l2": "17 klub",
  "why.d2": "Birinchisi 2015-yilda ochilgan",
  "why.l3": "Matrix",
  "why.d3": "Hamkorning premium liniyasi",
  "why.l4": "Trenerlar",
  "why.d4": "Malakali o\u02BBqitilgan xodimlar",
  "why.l5": "100\u00A0000+",
  "why.d5": "Mamnun mijozlar",
  "why.l6": "Komfort+",
  "why.d6": "Yuqori xizmat standartlari",
  "act.title": "Yoʻnalishlar va faoliyatlar",
  "act.sub": "Legenda<span class=\"tm\">®</span> fitnes-klubi — bu:",
  "act.1.alt": "Legenda®da guruh mashgʻulotlari",
  "act.1": "Guruh mashgʻulotlari: yoga, pilates, saykling",
  "act.2.alt": "Yakka kurashlar zonasi",
  "act.2": "Yakka kurashlar zonasi: boks va jang sanʼatlari",
  "act.3.alt": "Shaxsiy mashgʻulotlar",
  "act.3": "Shaxsiy mashgʻulotlar",
  "act.4.alt": "Trenajyor zali",
  "act.4": "Kuch zali va zamonaviy uskunalar",
  "act.5.alt": "Step va aerobika",
  "act.5": "Step, aerobika va raqs yoʻnalishlari",
  "act.6.alt": "Funksional trening",
  "act.6": "Funksional trening",
  "act.7.alt": "Tiklanish dasturlari",
  "act.7": "Reabilitatsiya va tiklanish dasturlari",
  "act.8.alt": "Bolalar xonasi",
  "act.8": "Bolalar xonasi",
  "act.11.alt": "Saykling",
  "act.11": "Saykling",
  "act.9.alt": "Turk hammomi",
  "act.9": "Turk hammomi — nam bugʻxona",
  "act.10.alt": "Fin saunasi",
  "act.10": "Fin saunasi — quruq bugʻxona",
  "recovery.title": "Tiklanish zonalari",
  "plans.title": "Klub kartalari",
  "plan.timeLabel": "Tashrif vaqti",
  "plan.unlimited": "Cheksiz",
  "plan.unlimited.desc": "Kun boʻyi, soat boʻyicha cheklovsiz",
  "plan.value": "Foydali",
  "plan.value.desc": "Kunduzgi vaqt: ertalabdan 17:00 gacha",
  "plan.morning": "Ertalabki",
  "plan.morning.desc": "Ertalabki vaqt: 07:00 dan 13:00 gacha",
  "plans.shared": "Barcha kartalarga kiradi",
  "feat.1": "Trenajyor zali va guruh mashgʻulotlari",
  "feat.2": "Saykling va stol tennisi",
  "feat.3": "Yakka kurashlar zonasi",
  "feat.4": "Turk hammomi",
  "feat.5": "Fin saunasi",
  "feat.6": "Bolalar xonasi",
  "feat.7": "1 bepul muzlatish (Ramazon)",
  "help.title": "Qaysi klub kartasini tanlashni bilmayapsizmi?",
  "help.sub":
    "Qulay tashrif vaqtiga qarab tanlang — qolgani bir xil. Telegramga yozing yoki qoʻngʻiroq qiling",
  "promo.title": "Boshlang<br />eng <span class=\"accent\">yaxshi</span><br />shartlarda",
  "promo.site": "Saytimiz mehmonlari uchun barcha kartalarga",
  "promo.benefit": "foydalar",
  "promo.try": "Bepul sinab koʻring",
  "promo.gift1": "Birinchi mashgʻulot — sovgʻa",
  "promo.duo": "Juft klub kartalariga maxsus taklif",
  "promo.gift2": "Shartlarni sotuv boʻlimi menejerlaridan aniqlang",
  "about.alt": "Legenda® klubi interyeri",
  "about.eyebrow": "Ertaga emas. Hozir.",
  "about.ctaTitle": "Legendaga<span class=\"tm\">®</span> qoʻshiling",
  "about.ctaLead":
    "Klubning bepul prezentatsiyasi va mashgʻulot namoyishi. Ariza qoldiring — prezentatsiyaga yozamiz.",
  "footer.title": "Kontaktlar",
  "footer.hours": "Dush–Juma 07:00–00:00<br />Shan–Yak 09:00–22:00",
  "map.title": "Legenda® xaritada",
  "map.open": "Yandex Xaritalarda ochish",
  "social.channel": "Telegram kanal",
  "social.maps": "Yandex Xaritalar",
};

const LANG_KEY = "legenda-lang";
const originalText = new WeakMap();
const originalHtml = new WeakMap();
const originalAttr = new WeakMap();

function translated(key) {
  const value = UZ[key];
  return typeof value === "string" ? value : null;
}

function rememberText(el) {
  if (!originalText.has(el)) originalText.set(el, el.textContent);
  return originalText.get(el);
}

function rememberHtml(el) {
  if (!originalHtml.has(el)) originalHtml.set(el, el.innerHTML);
  return originalHtml.get(el);
}

function rememberAttr(el, name) {
  let stored = originalAttr.get(el);
  if (!stored) {
    stored = new Map();
    originalAttr.set(el, stored);
  }
  if (!stored.has(name)) stored.set(name, el.getAttribute(name));
  return stored.get(name);
}

const COUNT_FIGURES = [
  { key: "why.l1", to: 1700 },
  { key: "why.l2", to: 17 },
  { key: "why.l5", to: 100000 },
];

let countPhase = "hold";

function figuresStayPut() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    || !("IntersectionObserver" in window);
}

function groupedFigure(n) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
}

function figureText(key, value) {
  const uz = document.documentElement.lang === "uz";
  if (key === "why.l1") return groupedFigure(value) + "\u00A0" + (uz ? "m²" : "м²");
  if (key === "why.l2") return value + (uz ? " klub" : " клубов");
  return groupedFigure(value) + "+";
}

function writeFigures(valueFor) {
  COUNT_FIGURES.forEach((item) => {
    const el = document.querySelector('[data-i18n="' + item.key + '"]');
    if (!el) return;
    el.textContent = figureText(item.key, valueFor(item));
  });
}

function paintCounts() {
  if (figuresStayPut() || countPhase === "run") return;
  writeFigures(countPhase === "done" ? (item) => item.to : () => 0);
}

function startCounts() {
  if (countPhase !== "hold" || figuresStayPut()) return;
  countPhase = "run";
  const t0 = performance.now();
  const dur = 1600;
  function frame(now) {
    const t = Math.min(1, (now - t0) / dur);
    const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    writeFigures((item) => Math.round(item.to * eased));
    if (t < 1) requestAnimationFrame(frame);
    else countPhase = "done";
  }
  requestAnimationFrame(frame);
}

function applyLang(lang) {
  const uz = lang === "uz";
  document.documentElement.lang = uz ? "uz" : "ru";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const original = rememberText(el);
    const next = uz ? translated(el.getAttribute("data-i18n")) : null;
    el.textContent = next == null ? original : next;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const original = rememberHtml(el);
    const next = uz ? translated(el.getAttribute("data-i18n-html")) : null;
    el.innerHTML = next == null ? original : next;
  });

  [
    ["data-i18n-aria", "aria-label"],
    ["data-i18n-alt", "alt"],
    ["data-i18n-title", "title"],
    ["data-i18n-content", "content"],
  ].forEach(([dataName, attrName]) => {
    document.querySelectorAll("[" + dataName + "]").forEach((el) => {
      const original = rememberAttr(el, attrName);
      const next = uz ? translated(el.getAttribute(dataName)) : null;
      if (next == null) {
        if (original == null) el.removeAttribute(attrName);
        else el.setAttribute(attrName, original);
      } else {
        el.setAttribute(attrName, next);
      }
    });
  });

  document.querySelectorAll("[data-set-lang]").forEach((btn) => {
    const on = btn.getAttribute("data-set-lang") === (uz ? "uz" : "ru");
    btn.classList.toggle("is-active", on);
    btn.setAttribute("aria-pressed", on ? "true" : "false");
  });

  paintCounts();

  try {
    localStorage.setItem(LANG_KEY, uz ? "uz" : "ru");
  } catch (err) {
    /* private mode: keep the choice for this view only */
  }
}

document.querySelectorAll("[data-set-lang]").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLang(btn.getAttribute("data-set-lang"));
  });
});

let initialLang = "ru";
try {
  if (localStorage.getItem(LANG_KEY) === "uz") initialLang = "uz";
} catch (err) {
  initialLang = "ru";
}
applyLang(initialLang);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const phoneMotion = window.matchMedia("(max-width: 767px)").matches;

if (!reduceMotion && "IntersectionObserver" in window) {
  const STAGGER = phoneMotion ? 0.14 : 0.2;

  function arm(section, selectors) {
    let i = 0;
    selectors.forEach((sel) => {
      section.querySelectorAll(sel).forEach((el) => {
        el.classList.add("m");
        el.style.setProperty("--m-delay", (i * STAGGER).toFixed(2) + "s");
        i += 1;
      });
    });
  }

  const desktopSections = [
    [".why", [".why-cell"]],
    [".activities", [".section-title", ".section-sub", ".slide"]],
    [".recovery", [".section-title", ".zone"]],
    [".plans", [".section-title", ".plan", ".plans__shared"]],
    [".help", [".help__title", ".help__sub", ".mini-card", ".cta-stack"]],
    [".promos", [".promo-heading", ".promo-card"]],
    [".about", [".about__eyebrow", ".about__cta-title", ".about__cta-lead", ".cta-stack"]],
  ];

  const phoneSections = [
    [".hero", [".hero__title", ".hero__lead", ".hero__cta .btn"]],
    [".why", [".why-cell"]],
    [".activities", [".section-title", ".section-sub", ".slide"]],
    [".recovery", [".section-title", ".zone"]],
    [".plans", [".section-title", ".plan", ".plans__shared"]],
    [".help", [".help__title", ".help__sub", ".mini-card", ".help .cta-stack .btn"]],
    [".promos", [".promo-heading", ".promo-card"]],
    [".about", [".about__eyebrow", ".about__cta-title", ".about__cta-lead", ".about .cta-stack .btn"]],
  ];

  const nodes = [];
  (phoneMotion ? phoneSections : desktopSections).forEach(([secSel, childSels]) => {
    const section = document.querySelector(secSel);
    if (!section) return;
    arm(section, childSels);
    nodes.push(section);
  });

  function watch(node) {
    const vh = window.innerHeight || 800;
    const tall = node.getBoundingClientRect().height > vh * 0.9;
    const options = phoneMotion
      ? tall
        ? { threshold: 0, rootMargin: "0px 0px -40% 0px" }
        : { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
      : { threshold: 0.2, rootMargin: "0px 0px -10% 0px" };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        if (entry.target.classList.contains("why")) startCounts();
        io.unobserve(entry.target);
      });
    }, options);
    io.observe(node);
  }

  /* Offset is painted first. The transition turns on a frame later, then the block is watched. */
  requestAnimationFrame(() => {
    document.documentElement.classList.add("motion-on");
    if (phoneMotion) document.documentElement.classList.add("motion-ready");
    requestAnimationFrame(() => {
      nodes.forEach(watch);
    });
  });
}
