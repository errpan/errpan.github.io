(() => {
  "use strict";

  const root = document.documentElement;
  const header = document.querySelector(".site-header");
  const languageButton = document.querySelector("#lang-toggle");
  const themeButton = document.querySelector("#theme-toggle");
  const menuButton = document.querySelector("#menu-toggle");
  const copyButton = document.querySelector("#copy-email");
  const readPreference = (key) => {
    try { return localStorage.getItem(key); } catch { return null; }
  };
  const savePreference = (key, value) => {
    try { localStorage.setItem(key, value); } catch { /* Preferences remain usable for this visit. */ }
  };
  const translatable = [...document.querySelectorAll("[data-en]")];
  translatable.forEach((element) => { element.dataset.zh = element.textContent; });
  let language = readPreference("yierpani-language-v2") === "en" ? "en" : "zh";

  const updateControls = () => {
    const english = language === "en";
    const dark = root.dataset.theme === "dark";
    const open = header.classList.contains("menu-open");
    languageButton.textContent = english ? "中文" : "EN";
    languageButton.setAttribute("aria-label", english ? "切换到中文" : "Switch to English");
    document.querySelector("#theme-label").textContent = english ? (dark ? "Light" : "Dark") : (dark ? "浅色" : "深色");
    themeButton.setAttribute("aria-label", english ? `Switch to ${dark ? "light" : "dark"} mode` : `切换到${dark ? "浅色" : "深色"}模式`);
    themeButton.setAttribute("aria-pressed", String(dark));
    menuButton.setAttribute("aria-label", english ? (open ? "Close menu" : "Open menu") : (open ? "收起菜单" : "展开菜单"));
    menuButton.setAttribute("aria-expanded", String(open));
    document.querySelector("#site-nav").setAttribute("aria-label", english ? "Main navigation" : "主导航");
    document.querySelector(".profile-card").setAttribute("aria-label", english ? "Portrait" : "个人照片");
    document.querySelector(".portrait img").alt = english ? "Portrait of Yierpani Yimamu" : "依尔怕尼·依马木的个人照片";
    document.querySelector("meta[name='theme-color']").content = dark ? "#111718" : "#ffffff";
  };

  const applyLanguage = () => {
    root.lang = language === "en" ? "en" : "zh-CN";
    translatable.forEach((element) => { element.textContent = element.dataset[language]; });
    document.title = language === "en" ? "Yierpani Yimamu | Supply Chain & AI" : "依尔怕尼·依马木 | Yierpani Yimamu";
    document.querySelector("meta[name='description']").content = language === "en"
      ? "Yierpani Yimamu, master's candidate at Hefei University of Technology. Supply chain optimization, reinforcement learning and logistics. Research, open-source projects and bilingual CVs."
      : "依尔怕尼·依马木，合肥工业大学物流工程与管理硕士研究生。研究供应链优化、强化学习与物流决策。中英文简历、研究经历与开源项目。";
    updateControls();
  };
  applyLanguage();

  languageButton.addEventListener("click", () => {
    language = language === "zh" ? "en" : "zh";
    savePreference("yierpani-language-v2", language);
    applyLanguage();
  });
  themeButton.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    savePreference("yierpani-theme-v2", root.dataset.theme);
    updateControls();
  });
  const closeMenu = () => { header.classList.remove("menu-open"); updateControls(); };
  menuButton.addEventListener("click", () => { header.classList.toggle("menu-open"); updateControls(); });
  document.querySelectorAll("#site-nav a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("menu-open")) { closeMenu(); menuButton.focus(); }
  });

  let toastTimeout;
  copyButton.addEventListener("click", async () => {
    const toast = document.querySelector("#toast");
    try {
      await navigator.clipboard.writeText("pani415@126.com");
      toast.textContent = language === "en" ? "Email copied" : "邮箱已复制";
    } catch {
      toast.textContent = language === "en" ? "Please copy: pani415@126.com" : "请手动复制：pani415@126.com";
    }
    clearTimeout(toastTimeout);
    toast.classList.add("visible");
    toastTimeout = setTimeout(() => toast.classList.remove("visible"), 2800);
  });
  document.querySelector("#year").textContent = new Date().getFullYear();
  [languageButton, themeButton, menuButton, copyButton].forEach((button) => { button.hidden = false; });
  root.classList.add("enhanced");
})();