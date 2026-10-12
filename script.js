(() => {
  "use strict";

  const root = document.documentElement;
  const main = document.querySelector("#main");
  const readPreference = (key) => {
    try { return localStorage.getItem(key); } catch { return null; }
  };
  const savePreference = (key, value) => {
    try { localStorage.setItem(key, value); } catch { /* Keep controls usable without storage. */ }
  };
  ["#home", ".signal-strip", "#journey", "#credentials", "#about", "#projects", "#research", "#contact"].forEach((selector) => {
    const section = document.querySelector(selector);
    if (section) main.appendChild(section);
  });

  const translations = {
    zh: {
      skip: "跳到主要内容", navAbout: "关于", navResearch: "实验台", navProjects: "项目", navJourney: "简历", navContact: "联系我", quickNav: "快捷导航",
      availability: "开放学术交流与研究合作", hello: "你好，我是", name: "依尔怕尼·依马木", heroRole: "物流工程与管理硕士研究生",
      heroLead: "研究强化学习与供应链优化，关注库存、定价和物流决策。", viewWork: "查看项目", viewCv: "查看简历", downloadCv: "下载简历 PDF", location: "中国 · 合肥",
      statSchools: "所高校经历", statRepos: "个公开仓库", statCerts: "项技能证书", statFocus: "让算法回应真实运营问题",
      aboutTitle: "责任感、学习力<br /><em>与团队协作。</em>", aboutLead: "重视责任、学习和沟通，愿意与团队一起解决实际问题。",
      researchProfile: "自我评价", researchQuestion: "认真做事，持续学习，把问题推进到结果。", researchAnswer: "具备物流与外贸实践经验，擅长用编程、数据分析和仿真支持决策。",
      now: "现在", hfut: "合肥工业大学", hfutDegree: "硕士研究生 · 物流工程与管理", toolkit: "工具箱", language: "语言", cetScore: "大学英语六级", languageDesc: "可在学习、研究与日常交流中使用英语。",
      researchTitle: "研究兴趣与实验台", researchLead: "从库存、定价到物流，探索算法如何改善决策。", labTitle: "供应链策略实验台", labStatus: "交互示意", volatility: "需求波动", perishability: "易腐程度", coordination: "多智能体协同", low: "低", medium: "中等", high: "高", labNote: "这是交互示意模型，不代表真实研究结果。点击不同水平，观察策略变化。", baseline: "基准策略", adaptive: "自适应策略", serviceLevel: "服务水平", wasteRate: "损耗率", stability: "系统稳定性", policyAdvice: "建议采用协同补货与动态安全库存策略。", topic1: "深度强化学习", topic1Desc: "面向随机环境的序贯决策、多目标优化与仿真驱动策略学习。",
      topic2: "多智能体系统", topic2Desc: "研究供应链节点间的协同、竞争、信息共享与分布式决策。", topic3: "易腐品供应链", topic3Desc: "关注库存控制、损耗降低、需求预测和不确定条件下的供需平衡。",
      projectsTitle: "精选项目", allRepos: "全部仓库", paperDesc: "论文 PDF 重命名工具。结合元数据、Crossref、arXiv 和 BibTeX，按自定义规则整理文献。", sourceCode: "查看源代码",
      packingDesc: "用 C++ 复现递归分区、Five-block 和 L-Algorithm，研究二维矩形装箱。", exploreProject: "探索项目", supplyProject: "随机供应链智能决策", supplyDesc: "搭建分龄库存仿真，以 DQN / PPO 联合优化补货与折价，研究利润与损耗的权衡。", discuss: "交流研究方向",
      journeyTitle: "个人<br /><em>简历</em>", journeyLead: "教育、研究与工作经历，记录我的学习和实践。", present: "至今", education: "教育", experience: "经历", internship: "实习", educationBackground: "教育背景", internshipExperience: "工作与实习", campusExperience: "校园经历", erpProject: "ERP 沙盘模拟", erpDesc: "在 SAP / ERP 仿真中负责采购订单、仓储管理和补货提前期核定。", ecommerceProject: "电子商务模拟", ecommerceDesc: "参与特产店铺运营，完成订单管理与物流流程仿真，练习贸易单证处理。", studentRole: "学生工作", studentRoleDesc: "曾任体育委员、辅导员助理，组织体育、读书分享与迎新活动。", socialPractice: "社会实践", socialPracticeDesc: "参与行政志愿服务，2019 年参加无偿献血。",
      hfutDesc: "学习库存管理、优化方法、物流建模与仿真，预计 2027 年 6 月毕业。", sangye: "上海桑野纺织有限公司", tradeRole: "外贸业务员", tradeDesc: "跟进外贸询盘、订单与交付，核对运输单据，协同跨境供应链履约。",
      shou: "上海海洋大学", shouDegree: "本科 · 物流管理", shouDesc: "学习供应链管理、国际物流、运营管理、物流系统优化与 SAP / ERP。", hufang: "上海沪防建筑设计有限公司喀什分公司", opsRole: "运营助理", opsDesc: "整理经营报表与文档，汇总运营数据，协助处理客户诉求。",
      credentialsTitle: "技能证书", credentialsLead: "技术能力、业务理解与沟通协作的组合。", technical: "技术与分析", certifications: "证书", cert1: "CSCMP 供应链管理师", cert2: "计算机二级 Python", cert3: "Power BI 商业智能数据可视化", cert4: "大学英语六级 CET-6", cert5: "普通话二级甲等",
      contactTitle: "欢迎交流，<br /><em>一起探索。</em>", contactLead: "欢迎交流供应链优化、强化学习与研究合作。", sendEmail: "发送邮件", copy: "复制", copied: "邮箱已复制", backTop: "回到顶部 ↑", commandPlaceholder: "搜索页面或操作…", commandTitle: "快速前往", move: "选择", enter: "打开",
      downloadCvZh: "中文简历",
      downloadCvEn: "英文简历",
      footerNote: "研究、实践与持续学习。",
      researchExperience: "研究经历",
      researchLabel: "研究",
      perishableResearch: "易腐品分龄库存优化",
      perishableContext: "国家自然科学基金专项 · 72542001",
      perishableDesc: "用 Python / PyTorch 搭建库存仿真，研究 DQN、偏好条件 PPO 与补货、折价联合决策。",
      pricingResearch: "供应链算法合谋",
      pricingContext: "国家自然科学基金面上项目 · 72571084",
      pricingDesc: "开展动态定价与库存联合决策实验，整理博弈仿真数据与论文图表。",
      tobaccoResearch: "烟草物流优化",
      tobaccoContext: "行业项目 · 车辆路径与装载",
      tobaccoDesc: "分析销售与运输数据，建立车辆路径和装箱模型，支持配送规划。",
      cheryResearch: "奇瑞循环取货优化",
      cheryContext: "产学研项目",
      summer2025: "2025 年暑期",
      cheryDesc: "用 C++ 复现装箱算法，开发 Python 工具，展示路径、时间窗、成本与迭代结果。",
      patentTitle: "专利申请",
      patentDesc: "共同发明人：数据驱动的易腐品分龄库存优化方法及系统。申请号 202611386809.1，已受理，尚未授权。",
      honorsTitle: "奖学金",
      honorsDesc: "2026—2027 学年研究生二等奖学金；2024—2025 学年研究生三等奖学金。",
      cert6: "C1 驾照",
      focusInventory: "库存",
      focusPricing: "定价",
      focusLogistics: "物流",
      focusInventoryNote: "补货与折价 · DQN / PPO",
      focusPricingNote: "动态定价与库存 · 博弈仿真",
      focusLogisticsNote: "循环取货与装箱 · 运筹优化",
      presetStable: "平稳需求",
      presetPerishable: "易腐品压力",
      presetCoordinated: "高波动协同",
      resetLab: "重置"
    },
    en: {
      skip: "Skip to main content", navAbout: "About", navResearch: "Lab", navProjects: "Projects", navJourney: "CV", navContact: "Contact", quickNav: "Quick nav",
      availability: "Open to academic exchange & collaboration", hello: "Hi, I am", name: "Yierpani Yimamu", heroRole: "Master's Candidate in Logistics Engineering & Management",
      heroLead: "Studying reinforcement learning for supply chain optimization, with a focus on inventory, pricing and logistics decisions.", viewWork: "View projects", viewCv: "View CV", downloadCv: "Download CV PDF", location: "Hefei · China",
      statSchools: "universities", statRepos: "public repositories", statCerts: "certifications", statFocus: "Algorithms grounded in real operations",
      aboutTitle: "Responsibility, learning<br /><em>and teamwork.</em>", aboutLead: "I adapt quickly to new responsibilities, communicate clearly, learn continuously, solve problems, and value working with others toward shared goals.",
      researchProfile: "SELF ASSESSMENT", researchQuestion: "Turn responsibilities into results through reliable execution, continuous learning, and clear communication.", researchAnswer: "I understand product supply, international trade, and logistics practice, with solid computing and English skills. I learn new business contexts quickly and actively seek practical solutions.",
      now: "NOW", hfut: "Hefei University of Technology", hfutDegree: "Master's Candidate · Logistics Engineering & Management", toolkit: "TOOLKIT", language: "LANGUAGE", cetScore: "CET-6 English", languageDesc: "Working proficiency for study, research, and everyday communication.",
      researchTitle: "Research Interests & Lab", researchLead: "Explore how algorithms improve inventory, pricing and logistics decisions.", labTitle: "Supply Chain Decision Lab", labStatus: "ILLUSTRATIVE DEMO", volatility: "Demand volatility", perishability: "Perishability", coordination: "Multi-agent coordination", low: "Low", medium: "Medium", high: "High", labNote: "This illustrative model is not a research result. Select levels to explore policy changes.", baseline: "Baseline", adaptive: "Adaptive policy", serviceLevel: "Service level", wasteRate: "Waste rate", stability: "System stability", policyAdvice: "Recommended: coordinated replenishment with dynamic safety stock.", topic1: "Deep Reinforcement Learning", topic1Desc: "Sequential decisions, multi-objective optimization, and simulation-driven policy learning under uncertainty.",
      topic2: "Multi-Agent Systems", topic2Desc: "Coordination, competition, information sharing, and distributed decisions across supply-chain nodes.", topic3: "Perishable Supply Chains", topic3Desc: "Inventory control, waste reduction, demand forecasting, and supply-demand balance under uncertainty.",
      projectsTitle: "Selected work", allRepos: "All repositories", paperDesc: "An intelligent PDF renaming tool for academic papers. It combines embedded metadata, DOI, Crossref, arXiv, and BibTeX data in a customizable GUI workflow.", sourceCode: "View source",
      packingDesc: "A C++ reproduction of Recursive Partitioning, Five-block and L-Algorithm for packing identical rectangles.", exploreProject: "Explore project", supplyProject: "Intelligent Decisions for Stochastic Supply Chains", supplyDesc: "Build age-stratified inventory simulations and use DQN/PPO for replenishment and markdown decisions, evaluating profit–waste trade-offs.", discuss: "Discuss the research",
      journeyTitle: "Curriculum<br /><em>Vitae</em>", journeyLead: "My education, research and professional experience.", present: "Present", education: "Education", experience: "Experience", internship: "Internship", educationBackground: "Education", internshipExperience: "Work & Internships", campusExperience: "Campus Experience", erpProject: "ERP Sand-table Simulation", erpDesc: "Managed procurement, material orders, warehouse inventory, and raw-material lead times in a team-based business simulation.", ecommerceProject: "E-commerce Simulation", ecommerceDesc: "Helped operate the Xinjiang specialty shop and simulated distribution, transport, and procurement on the Changfeng platform.", studentRole: "Student Leadership", studentRoleDesc: "Served as sports representative and counselor assistant, organizing sports events, reading sessions, site visits, and welcome programs.", socialPractice: "Community Service", socialPracticeDesc: "Participated in administrative volunteer service and donated blood in 2019.",
      hfutDesc: "Coursework in inventory management, optimization, logistics modeling and simulation. Expected graduation: June 2027.", sangye: "Shanghai Sangye Textile Co., Ltd.", tradeRole: "Foreign Trade Specialist", tradeDesc: "Managed order follow-up and client inquiries, tracked shipment data, verified documents, and coordinated fulfillment across internal teams.",
      shou: "Shanghai Ocean University", shouDegree: "Undergraduate · Logistics Management", shouDesc: "Studied supply-chain management, operations, international logistics, logistics system optimization, ERP, and business analysis.", hufang: "Shanghai Hufang Architectural Design, Kashgar Branch", opsRole: "Operations Assistant", opsDesc: "Supported client services, issue handling, report checks, operating-data summaries, and document administration.",
      credentialsTitle: "Skills & Certificates", credentialsLead: "Technical skill, business context, and collaborative execution.", technical: "TECH & ANALYTICS", certifications: "CERTIFICATIONS", cert1: "CSCMP Supply Chain Management", cert2: "NCRE Level 2 - Python", cert3: "Power BI Business Intelligence", cert4: "College English Test Band 6", cert5: "Mandarin Proficiency Level 2-A",
      contactTitle: "Let’s connect<br /><em>and explore.</em>", contactLead: "Open to conversations on supply chain optimization, reinforcement learning and research collaboration.", sendEmail: "Send an email", copy: "Copy", copied: "Email copied", backTop: "Back to top ↑", commandPlaceholder: "Search pages or actions…", commandTitle: "QUICK NAVIGATION", move: "move", enter: "open",
      downloadCvZh: "Chinese CV",
      downloadCvEn: "English CV",
      footerNote: "Research, practice & continuous learning.",
      researchExperience: "Research Experience",
      researchLabel: "Research",
      perishableResearch: "Age-Stratified Perishable Inventory",
      perishableContext: "NSFC Special Project · No. 72542001",
      perishableDesc: "Build inventory simulations in Python/PyTorch; study DQN and preference-conditioned PPO for joint replenishment and markdown decisions.",
      pricingResearch: "Algorithmic Collusion in Supply Chains",
      pricingContext: "NSFC General Program · No. 72571084",
      pricingDesc: "Run joint pricing and inventory experiments; prepare game-theoretic simulation data and figures for a working paper.",
      tobaccoResearch: "Tobacco Logistics Optimization",
      tobaccoContext: "Industry project · routing & loading",
      tobaccoDesc: "Analyze sales and transport data; develop VRP and bin-packing models for delivery planning.",
      cheryResearch: "Chery Group Milk-Run Optimization",
      cheryContext: "Industry–university research project",
      summer2025: "Summer 2025",
      cheryDesc: "Reproduce packing algorithms in C++ and build a Python tool for routes, time windows, costs and iteration tracking.",
      patentTitle: "Patent Application",
      patentDesc: "Co-inventor: a data-driven age-stratified inventory optimization method and system for perishable products. Application No. 202611386809.1; accepted, not granted.",
      honorsTitle: "Scholarships",
      honorsDesc: "Second-Class Graduate Academic Scholarship (2026–2027); Third-Class Graduate Academic Scholarship (2024–2025).",
      cert6: "C1 driver's license",
      focusInventory: "Inventory",
      focusPricing: "Pricing",
      focusLogistics: "Logistics",
      focusInventoryNote: "Replenishment + markdown · DQN / PPO",
      focusPricingNote: "Dynamic pricing + inventory · game simulations",
      focusLogisticsNote: "Milk-run + bin packing · operations research",
      presetStable: "Stable demand",
      presetPerishable: "Perishable pressure",
      presetCoordinated: "Volatile + coordinated",
      resetLab: "Reset"
    }
  };

  const systemTheme = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  let themeMode = readPreference("cv-theme-original") || "system";
  if (!["system", "light", "dark"].includes(themeMode)) themeMode = "system";
  let activeFocus = "inventory";
  const focusOptions = {
    inventory: { caption: "DRL × Inventory", code: "π(a|s) → max R", method: "agent.learn()", note: "focusInventoryNote" },
    pricing: { caption: "Game Theory × Pricing", code: "price × inventory → payoff", method: "market.simulate()", note: "focusPricingNote" },
    logistics: { caption: "OR × Logistics", code: "route + packing → min cost", method: "route.optimize()", note: "focusLogisticsNote" }
  };
  let language = readPreference("cv-language-original") === "zh" ? "zh" : "en";
  const setLanguage = (lang) => {
    language = lang;
    root.lang = lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = translations[lang][element.dataset.i18n];
      if (value) element.textContent = value;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = translations[lang][element.dataset.i18nHtml];
      if (value) element.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const value = translations[lang][element.dataset.i18nPlaceholder];
      if (value) element.placeholder = value;
    });
    document.querySelectorAll("[data-svg-zh]").forEach((element) => {
      element.textContent = lang === "zh" ? element.dataset.svgZh : element.dataset.svgEn;
    });
    document.querySelector("#lang-toggle").textContent = lang === "zh" ? "EN" : "中";
    document.title = lang === "zh" ? "依尔怕尼·依马木 · Supply Chain × AI" : "Yierpani Yimamu · Supply Chain × AI";
    savePreference("cv-language-original", lang);
    syncThemeControl();
    updateFocus();
    document.querySelector("#lang-toggle").setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切换到中文");
    document.querySelector("#menu-toggle").setAttribute("aria-label", lang === "zh" ? "导航菜单" : "Navigation menu");
    document.querySelector("#command-open").setAttribute("aria-label", lang === "zh" ? "打开快捷导航" : "Open quick navigation");
    document.querySelectorAll(".param-group").forEach((group) => group.querySelector(".param-tabs").setAttribute("aria-label", translations[lang][group.dataset.param]));
    document.querySelector(".focus-switch").setAttribute("aria-label", lang === "zh" ? "切换研究方向" : "Explore research directions");
    document.querySelector(".lab-presets").setAttribute("aria-label", lang === "zh" ? "实验场景" : "Simulation scenarios");
    document.querySelector(".portrait-frame img").alt = lang === "zh" ? "依尔怕尼·依马木的职业照片" : "Portrait of Yierpani Yimamu";
  };

  document.querySelector("#lang-toggle").addEventListener("click", () => setLanguage(language === "zh" ? "en" : "zh"));
  setLanguage(language);

  function syncThemeControl() {
    const modes = ["system", "light", "dark"];
    const next = modes[(modes.indexOf(themeMode) + 1) % modes.length];
    const names = language === "zh" ? {system: "跟随系统", light: "浅色", dark: "深色"} : {system: "system", light: "light", dark: "dark"};
    const button = document.querySelector("#theme-toggle");
    const label = language === "zh" ? `当前：${names[themeMode]}；切换为${names[next]}` : `Theme: ${names[themeMode]}; switch to ${names[next]}`;
    button.setAttribute("aria-label", label);
    button.title = label;
    root.dataset.themeMode = themeMode;
    document.querySelector('meta[name="theme-color"]').content = root.dataset.theme === "dark" ? "#07100d" : "#ffffff";
  }
  function applyTheme(redraw = false) {
    root.dataset.theme = themeMode === "dark" || (themeMode === "system" && systemTheme && systemTheme.matches) ? "dark" : "light";
    syncThemeControl();
    if (redraw) updateLab();
  }
  applyTheme();
  document.querySelector("#theme-toggle").addEventListener("click", () => {
    const modes = ["system", "light", "dark"];
    themeMode = modes[(modes.indexOf(themeMode) + 1) % modes.length];
    savePreference("cv-theme-original", themeMode);
    applyTheme(true);
  });
  const followSystem = () => { if (themeMode === "system") applyTheme(true); };
  if (systemTheme && systemTheme.addEventListener) systemTheme.addEventListener("change", followSystem);
  else if (systemTheme && systemTheme.addListener) systemTheme.addListener(followSystem);

  function updateFocus() {
    const focus = focusOptions[activeFocus];
    document.querySelector("#home").dataset.focusSelected = activeFocus;
    document.querySelector(".portrait-caption strong").textContent = focus.caption;
    document.querySelector(".code-one").textContent = focus.method;
    document.querySelector(".code-two").textContent = focus.code;
    const note = document.querySelector("#focus-note");
    note.dataset.i18n = focus.note;
    note.textContent = translations[language][focus.note];
    document.querySelectorAll(".focus-switch button").forEach((button) => {
      const active = button.dataset.focus === activeFocus;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }
  document.querySelectorAll(".focus-switch button").forEach((button) => button.addEventListener("click", () => {
    activeFocus = button.dataset.focus;
    updateFocus();
  }));

  const header = document.querySelector("#site-header");
  const progress = document.querySelector("#scroll-progress");
  const navLinks = [...document.querySelectorAll(".nav-links a")];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 24);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
    let active = "";
    sections.forEach((section) => { if (section.offsetTop - 160 <= y) active = `#${section.id}`; });
    navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === active));
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const menuButton = document.querySelector("#menu-toggle");
  const navPanel = document.querySelector("#nav-panel");
  menuButton.addEventListener("click", () => {
    const open = !navPanel.classList.contains("open");
    navPanel.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", String(open));
  });
  navPanel.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      navPanel.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.11, rootMargin: "0px 0px -45px" });
  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

  const emailButton = document.querySelector("#email-copy");
  const toast = document.querySelector("#toast");
  emailButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(emailButton.dataset.email);
      toast.classList.add("visible");
      window.setTimeout(() => toast.classList.remove("visible"), 1800);
    } catch {
      window.location.href = `mailto:${emailButton.dataset.email}`;
    }
  });

  document.querySelector("#year").textContent = new Date().getFullYear();

  const labState = { volatility: 50, perishability: 50, coordination: 80 };
  const labTabs = [...document.querySelectorAll(".param-tabs button")];
  const labCanvas = document.querySelector("#lab-chart");
  const labContext = labCanvas.getContext("2d");
  const updateLab = () => {
    const { volatility, perishability, coordination } = labState;
    const service = Math.max(68, Math.min(98, 88 - volatility * .12 - perishability * .04 + coordination * .19));
    const waste = Math.max(3.2, Math.min(27, 8 + perishability * .18 + volatility * .05 - coordination * .17));
    const stability = Math.max(45, Math.min(98, 73 - volatility * .25 - perishability * .06 + coordination * .36));
    document.querySelector("#service-result").textContent = `${service.toFixed(1)}%`;
    document.querySelector("#waste-result").textContent = `${waste.toFixed(1)}%`;
    document.querySelector("#stability-result").textContent = Math.round(stability);
    document.querySelector("#service-delta").textContent = `+${Math.max(2.1, coordination * .12 - volatility * .025).toFixed(1)}%`;
    document.querySelector("#waste-delta").textContent = `-${Math.max(1.2, coordination * .09 - perishability * .018).toFixed(1)}%`;

    const width = labCanvas.width;
    const height = labCanvas.height;
    const pad = 28;
    labContext.clearRect(0, 0, width, height);
    labContext.strokeStyle = "rgba(145,164,155,.16)";
    labContext.lineWidth = 1;
    for (let y = pad; y < height - pad; y += 48) {
      labContext.beginPath(); labContext.moveTo(pad, y); labContext.lineTo(width - pad, y); labContext.stroke();
    }
    const base = Array.from({ length: 18 }, (_, i) => 53 + Math.sin(i * .9) * (12 + volatility * .12) + (i % 3) * 3);
    const adaptive = Array.from({ length: 18 }, (_, i) => 58 + Math.sin(i * .72) * (9 + volatility * .035) + coordination * .13 - perishability * .04);
    const draw = (values, color, glow = false) => {
      labContext.save(); labContext.beginPath();
      values.forEach((value, i) => {
        const x = pad + i * ((width - pad * 2) / (values.length - 1));
        const y = height - pad - value * 2.75;
        i ? labContext.lineTo(x, y) : labContext.moveTo(x, y);
      });
      labContext.strokeStyle = color; labContext.lineWidth = glow ? 3 : 2; labContext.shadowColor = glow ? color : "transparent"; labContext.shadowBlur = glow ? 10 : 0; labContext.stroke(); labContext.restore();
    };
    draw(base, "rgba(145,164,155,.65)");
    draw(adaptive, getComputedStyle(root).getPropertyValue("--lime").trim(), true);
  };
  labTabs.forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll(".lab-presets button[aria-pressed]").forEach((preset) => {
      preset.classList.remove("active"); preset.setAttribute("aria-pressed", "false");
    });
    const group = button.closest(".param-group");
    const parameter = group.dataset.param;
    group.querySelectorAll("button").forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    labState[parameter] = Number(button.dataset.value);
    const output = document.querySelector(`#${parameter}-value`);
    output.dataset.i18n = button.dataset.level;
    output.textContent = button.textContent;
    updateLab();
  }));
  updateLab();
  const labPresets = {
    stable: { volatility: 20, perishability: 20, coordination: 50 },
    perishable: { volatility: 50, perishability: 80, coordination: 50 },
    coordinated: { volatility: 80, perishability: 80, coordination: 80 },
    reset: { volatility: 50, perishability: 50, coordination: 80 }
  };
  document.querySelectorAll(".lab-presets button").forEach((button) => button.addEventListener("click", () => {
    Object.entries(labPresets[button.dataset.labPreset]).forEach(([parameter, value]) => {
      document.querySelector(`.param-group[data-param="${parameter}"] button[data-value="${value}"]`).click();
    });
    if (button.hasAttribute("aria-pressed")) { button.classList.add("active"); button.setAttribute("aria-pressed", "true"); }
  }));

  const commandOverlay = document.querySelector("#command-overlay");
  const commandInput = document.querySelector("#command-input");
  const commandButtons = [...document.querySelectorAll("#command-list button")];
  let commandIndex = 0;
  const selectCommand = (index) => {
    const visible = commandButtons.filter((button) => !button.hidden);
    if (!visible.length) return;
    commandIndex = (index + visible.length) % visible.length;
    visible.forEach((button, i) => button.classList.toggle("selected", i === commandIndex));
    visible[commandIndex].scrollIntoView({ block: "nearest" });
  };
  const openCommands = () => {
    commandOverlay.classList.add("open"); commandOverlay.setAttribute("aria-hidden", "false"); commandInput.value = "";
    commandButtons.forEach((button) => { button.hidden = false; }); selectCommand(0); window.setTimeout(() => commandInput.focus(), 80);
  };
  const closeCommands = () => { commandOverlay.classList.remove("open"); commandOverlay.setAttribute("aria-hidden", "true"); };
  const runCommand = (button) => { closeCommands(); document.querySelector(button.dataset.target)?.scrollIntoView({ behavior: "smooth" }); };
  document.querySelector("#command-open").addEventListener("click", openCommands);
  commandOverlay.addEventListener("click", (event) => { if (event.target === commandOverlay) closeCommands(); });
  commandButtons.forEach((button) => button.addEventListener("click", () => runCommand(button)));
  commandInput.addEventListener("input", () => {
    const query = commandInput.value.trim().toLowerCase();
    commandButtons.forEach((button) => { button.hidden = !`${button.dataset.command} ${button.textContent}`.toLowerCase().includes(query); });
    selectCommand(0);
  });
  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault(); commandOverlay.classList.contains("open") ? closeCommands() : openCommands();
    }
    if (!commandOverlay.classList.contains("open")) return;
    if (event.key === "Escape") closeCommands();
    if (event.key === "ArrowDown") { event.preventDefault(); selectCommand(commandIndex + 1); }
    if (event.key === "ArrowUp") { event.preventDefault(); selectCommand(commandIndex - 1); }
    if (event.key === "Enter") {
      const visible = commandButtons.filter((button) => !button.hidden);
      if (visible[commandIndex]) runCommand(visible[commandIndex]);
    }
  });

  fetch("https://api.github.com/users/errpan/repos?per_page=100&sort=updated")
    .then((response) => response.ok ? response.json() : Promise.reject(new Error("GitHub API unavailable")))
    .then((repositories) => {
      document.querySelector("#repo-count").textContent = String(repositories.length).padStart(2, "0");
      const paper = repositories.find((repo) => repo.name === "PapperRenamer-PDF-");
      if (paper) document.querySelector("#paper-stars").textContent = paper.stargazers_count;
    })
    .catch(() => {});

  if (window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".tilt-card").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `rotateX(${-y * 3.5}deg) rotateY(${x * 4}deg) translateY(-3px)`;
      });
      card.addEventListener("pointerleave", () => { card.style.transform = ""; });
    });
  }

  const canvas = document.querySelector("#network-canvas");
  const context = canvas.getContext("2d");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let nodes = [];
  let pointer = { x: -1000, y: -1000 };
  const resizeCanvas = () => {
    const scale = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * scale;
    canvas.height = rect.height * scale;
    context.setTransform(scale, 0, 0, scale, 0, 0);
    const count = Math.max(30, Math.floor(rect.width / 28));
    nodes = Array.from({ length: count }, () => ({ x: Math.random() * rect.width, y: Math.random() * rect.height, vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18, r: Math.random() * 1.5 + .6 }));
  };
  const drawNetwork = () => {
    const rect = canvas.getBoundingClientRect();
    context.clearRect(0, 0, rect.width, rect.height);
    nodes.forEach((node, index) => {
      node.x += node.vx; node.y += node.vy;
      if (node.x < 0 || node.x > rect.width) node.vx *= -1;
      if (node.y < 0 || node.y > rect.height) node.vy *= -1;
      const pd = Math.hypot(node.x - pointer.x, node.y - pointer.y);
      if (pd < 130) { node.x += (node.x - pointer.x) * .002; node.y += (node.y - pointer.y) * .002; }
      context.beginPath(); context.arc(node.x, node.y, node.r, 0, Math.PI * 2); context.fillStyle = "rgba(140,255,189,.52)"; context.fill();
      for (let j = index + 1; j < nodes.length; j += 1) {
        const other = nodes[j]; const distance = Math.hypot(node.x - other.x, node.y - other.y);
        if (distance < 115) { context.beginPath(); context.moveTo(node.x, node.y); context.lineTo(other.x, other.y); context.strokeStyle = `rgba(140,255,189,${(1 - distance / 115) * .12})`; context.stroke(); }
      }
    });
    requestAnimationFrame(drawNetwork);
  };
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("pointermove", (event) => { pointer = { x: event.clientX, y: event.clientY }; }, { passive: true });
  resizeCanvas();
  if (!reducedMotion) drawNetwork();
})();
