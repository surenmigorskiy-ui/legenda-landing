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
    "Legenda<span class=\"tm\">®</span> Fitness — bu siz qoʻllab-quvvatlashni, motivatsiyani va oʻzingizning yaxshiroq versiyangiz sari yoʻlni topadigan joy",
  "cta.try": "Bepul sinab koʻrish",
  "cta.call": "Qoʻngʻiroq qilish",
  "cta.write": "Telegramga yozish",
  "cta.signup": "Telegramda yozilish",
  "cta.tour": "Ekskursiyaga yozilish",
  "why.title": "Nega <em>tanlashadi</em> Legenda<span class=\"tm\">®</span>",
  "why.s1": "Har bir mehmonning natijasi va qulayligiga eʼtibor",
  "why.hours": "17 soat",
  "why.s2": "qulay jadval — erta tongdan kechki paytgacha",
  "why.s3": "mamnun mijozlar",
  "why.s4": "professional trenerlar va instruktorlar",
  "why.s5": "guruh dasturlari: yoga, pilates, saykling va boshqalar",
  "why.eq": "Zamonaviy trenajyor uskunalari:",
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
  "act.6": "Funksional trening, Bootcamp va boshqalar",
  "act.7.alt": "Tiklanish dasturlari",
  "act.7": "Reabilitatsiya va tiklanish dasturlari",
  "act.8.alt": "Bolalar xonasi",
  "act.8": "Bolalar xonasi",
  "act.9.alt": "Turk hammomi",
  "act.9": "Turk hammomi",
  "act.10.alt": "Fin saunasi",
  "act.10": "Fin saunasi",
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
  "promo.half": "Yarim narx — toʻliq foyda",
  "promo.try": "Bepul sinab koʻring",
  "promo.gift1": "Birinchi mashgʻulot — sovgʻa",
  "promo.duo": "Ikki karta — bitta narx",
  "promo.gift2": "Ikkinchi karta — sovgʻa",
  "about.alt": "Legenda® klubi interyeri",
  "about.title": "Legenda<span class=\"tm\">®</span> klubi haqida",
  "about.missionLabel": "Bizning missiyamiz",
  "about.mission":
    "Sogʻlom turmush tarzini ommalashtirish hamda oila va doʻstlarga boʻlgan ishonchni mustahkamlash orqali haqiqiy maʼnaviy va vatanparvarlik qadriyatlarini tiklash.",
  "about.taskLabel": "Bizning vazifamiz",
  "about.task":
    "Har bir inson oʻzida ideallarga intilish va qoʻyilgan maqsadlarga erishishga yordam beradigan ruh kuchini tarbiyalay olishini oʻrgatish.",
  "about.note":
    "Klub taqdimotini oʻtkazamiz va ichkarida hammasi qanday tashkil etilganini koʻrsatamiz",
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

if (!reduceMotion && "IntersectionObserver" in window) {
  const motionNodes = document.querySelectorAll(".stat, .slide");
  const motionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        motionObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.05 }
  );

  motionNodes.forEach((node) => motionObserver.observe(node));
}
