const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const revealItems = document.querySelectorAll(".reveal");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

function revealOnScroll() {
  revealItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemTop < windowHeight - 80) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);



/* PROJECT SLIDER */

const slider = document.getElementById("projectSlider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let autoSlide;
let isDown = false;
let startX = 0;
let scrollLeft = 0;
let userStoppedAuto = false;

function getSlideMoveAmount() {
  const slide = slider.querySelector(".premium-slide");
  const gap = 28;
  return slide.offsetWidth + gap;
}

function updateActiveSlide() {
  const slides = document.querySelectorAll(".premium-slide");
  const sliderCenter = slider.scrollLeft + slider.offsetWidth / 2;

  slides.forEach((slide) => {
    const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
    const distance = Math.abs(sliderCenter - slideCenter);
    slide.classList.toggle("active", distance < slide.offsetWidth / 2);
  });
}

function slideNext() {
  const moveAmount = getSlideMoveAmount();

  if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 30) {
    slider.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    slider.scrollBy({ left: moveAmount, behavior: "smooth" });
  }

  setTimeout(updateActiveSlide, 400);
}

function slidePrev() {
  const moveAmount = getSlideMoveAmount();

  if (slider.scrollLeft <= 30) {
    slider.scrollTo({ left: slider.scrollWidth, behavior: "smooth" });
  } else {
    slider.scrollBy({ left: -moveAmount, behavior: "smooth" });
  }

  setTimeout(updateActiveSlide, 400);
}

function startAutoSlide() {
  if (userStoppedAuto) return;
  stopAutoSlide();
  autoSlide = setInterval(slideNext, 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

function stopAutoForever() {
  userStoppedAuto = true;
  stopAutoSlide();
}

if (slider && prevBtn && nextBtn) {
  nextBtn.addEventListener("click", () => {
    stopAutoForever();
    slideNext();
  });

  prevBtn.addEventListener("click", () => {
    stopAutoForever();
    slidePrev();
  });

  slider.addEventListener("scroll", updateActiveSlide);

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.classList.add("dragging");
    stopAutoForever();
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("dragging");
    updateActiveSlide();
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("dragging");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;

    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.4;
    slider.scrollLeft = scrollLeft - walk;
  });

  slider.addEventListener("touchstart", () => {
    stopAutoForever();
  });

  updateActiveSlide();
  startAutoSlide();
}
/* PROJECT MODAL */

const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
const openModalButtons = document.querySelectorAll(".open-modal");

const projectData = {
  project1: {
    title: "Landing Page Development",
    subtitle: "Initiative 01",
    images: ["images/project-1.jpg"],
    overview:
      "Developed and maintained 70+ high-converting landing pages to support student lead generation campaigns. The pages were built with conversion-focused UX, Salesforce form integration, and automated tracking.",
    role:
      "Landing page development, UX improvement, Salesforce form integration, tracking setup, and lead capture optimization.",
    tools:
      "WordPress, Oxygen, Elementor, Salesforce CRM, Google Tag Manager, GA4.",
    result:
      "20% improvement in lead capture efficiency and stronger landing page conversion performance."
  },

project2: {
  title: "Campaign Management",
  subtitle: "Initiative 02",
  images: [
    "images/project-2-1.jpg",
    "images/project-2-2.jpg",
    "images/project-2-3.jpg"
  ],
  overview:
    "Managed more than 60 multi-channel advertising campaigns across Google Ads, Meta Ads, LinkedIn Ads, and TikTok Ads.",
  role:
    "Campaign planning, targeting, budget optimization, A/B testing, and performance tracking.",
  tools:
    "Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, GA4, Google Tag Manager.",
  result:
    "18% higher ROAS and 25% increase in qualified leads."
  },

  project3: {
    title: "AI Chatbot Automation",
    subtitle: "Initiative 03",
    images: ["images/project-3.jpg"],
    overview:
      "Implemented a WhatsApp AI Agent automation system using SleekFlow to improve lead engagement, qualification flow, and response efficiency.",
    role:
      "Automation workflow planning, chatbot logic setup, lead response mapping, and performance monitoring.",
    tools:
      "SleekFlow, WhatsApp automation, AI chatbot workflows.",
    result:
      "30% increase in lead engagement and reduced manual follow-up effort by 10 hours weekly."
  },

  project4: {
    title: "Email Automation Integration",
    subtitle: "Initiative 04",
    images: ["images/project-4.jpg"],
    overview:
      "Built segmented email marketing workflows with automation and A/B testing to improve nurturing, campaign engagement, and follow-up communication.",
    role:
      "Email campaign setup, segmentation, automation planning, content testing, and performance tracking.",
    tools:
      "MailerLite, Constant Contact, email automation, A/B testing.",
    result:
      "15% higher open rates and 10% higher click-through rates."
  },

  project5: {
    title: "Marketing Analytics Infrastructure",
    subtitle: "Initiative 05",
    images: ["images/project-5.jpg"],
    overview:
      "Implemented end-to-end marketing tracking infrastructure to improve campaign visibility, attribution accuracy, and reporting clarity.",
    role:
      "Tracking setup, event configuration, conversion tracking, pixel implementation, and reporting structure.",
    tools:
      "Google Tag Manager, GA4, Meta Pixel, Google Ads Conversion Tracking, Conversion APIs, Google Search Console, Power BI.",
    result:
      "Improved attribution accuracy, better decision-making, and clearer campaign performance reporting."
  },

project6: {
  title: "SEO Performance Optimization",
  subtitle: "Initiative 06",
  images: ["images/project-6.jpg", "images/project-6-1.jpg"],

  overview:
    "Analyzed and optimized non-branded keyword performance to improve organic visibility across high-intent education search terms. The project focused on keyword ranking movement, search volume analysis, SERP changes, and ongoing SEO performance monitoring.",
  role:
    "SEO performance analysis, keyword tracking, ranking movement review, search intent evaluation, on-page SEO recommendations, and monthly reporting insights.",
  tools:
    "Google Search Console, SEMrush, GA4, keyword ranking reports, and SEO performance dashboards.",
  result:
    "Tracked 76 keywords ranking in the Top 10, maintained strong visibility for high-volume terms such as MBA, and identified ranking gains across diploma and postgraduate-related keywords."
}
};

function openProjectModal(projectKey) {
  const project = projectData[projectKey];

  if (!project) return;

  const imagesHtml =
    project.images.length > 1
      ? `
        <div class="modal-gallery">
          ${project.images
            .map(
              (image) =>
                `<img src="${image}" alt="${project.title} evidence image" />`
            )
            .join("")}
        </div>
      `
      : `<img class="modal-image-large" src="${project.images[0]}" alt="${project.title} evidence image" />`;

  modalBody.innerHTML = `
    <div class="modal-project">
      <p class="project-number">${project.subtitle}</p>
      <h2>${project.title}</h2>
      ${imagesHtml}

      <p>${project.overview}</p>

      <div class="modal-info-grid">
        <div class="modal-info-card">
          <h4>My Role</h4>
          <p>${project.role}</p>
        </div>

        <div class="modal-info-card">
          <h4>Tools Used</h4>
          <p>${project.tools}</p>
        </div>

        <div class="modal-info-card">
          <h4>Result</h4>
          <p>${project.result}</p>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("show");
  document.body.classList.add("modal-open");
}

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const projectKey = button.getAttribute("data-project");
    openProjectModal(projectKey);
  });
});

function closeModal() {
  modal.classList.remove("show");
  document.body.classList.remove("modal-open");
}

if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}

if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

/* EXPERIENCE TIMELINE SCROLL PROGRESS */

const experienceTimeline = document.getElementById("experienceTimeline");
const experienceLineProgress = document.getElementById("experienceLineProgress");
const experienceItems = document.querySelectorAll(".experience-scroll-item");

function updateExperienceTimeline() {
  if (!experienceTimeline || !experienceLineProgress) return;

  const rect = experienceTimeline.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const start = windowHeight * 0.75;
  const end = rect.height - windowHeight * 0.25;

  let progress = (start - rect.top) / end;
  progress = Math.max(0, Math.min(progress, 1));

  experienceLineProgress.style.height = `${progress * 100}%`;

  experienceItems.forEach((item) => {
    const itemRect = item.getBoundingClientRect();
    const itemCenter = itemRect.top + itemRect.height / 2;

    if (itemCenter < windowHeight * 0.65) {
      item.classList.add("is-active");
    } else {
      item.classList.remove("is-active");
    }
  });
}

window.addEventListener("scroll", updateExperienceTimeline);
window.addEventListener("load", updateExperienceTimeline);
window.addEventListener("resize", updateExperienceTimeline);


// your existing code above...



/* =========================
   KPI COUNT-UP ANIMATION
========================= */

const kpiCounters = document.querySelectorAll(".kpi-number");
let kpiAnimated = false;

function animateKpiCounters() {
  kpiCounters.forEach((counter) => {
    const target = parseFloat(counter.getAttribute("data-target"));
    let current = 0;
    const duration = 1400;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      current = target * easedProgress;

      if (target % 1 !== 0) {
        counter.innerText = current.toFixed(1);
      } else {
        counter.innerText = Math.round(current);
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target % 1 !== 0 ? target.toFixed(1) : target;
      }
    }

    requestAnimationFrame(updateCounter);
  });
}

function triggerKpiCounters() {
  const section = document.getElementById("achievements");
  if (!section || kpiAnimated) return;

  const rect = section.getBoundingClientRect();

  if (rect.top < window.innerHeight - 120) {
    animateKpiCounters();
    kpiAnimated = true;
  }
}

window.addEventListener("scroll", triggerKpiCounters);
window.addEventListener("load", triggerKpiCounters);


/* =========================
   HERO BACKGROUND + TEXT GLOW
========================= */

/* Background glow */
const hero = document.querySelector(".premium-video-hero");

if (hero) {
  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    hero.style.setProperty("--mouse-x", `${x}px`);
    hero.style.setProperty("--mouse-y", `${y}px`);
  });
}

/* Heading text glow */
const heroHeading = document.querySelector(".hero-highlight-heading");

if (heroHeading) {
  heroHeading.addEventListener("mousemove", (e) => {
    const rect = heroHeading.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    heroHeading.style.setProperty("--text-x", `${x}%`);
    heroHeading.style.setProperty("--text-y", `${y}%`);
  });
}


/* =========================
   FLOATING AI CHATBOT
========================= */

const aiChatToggle = document.getElementById("aiChatToggle");
const aiChatPanel = document.getElementById("aiChatPanel");
const aiChatClose = document.getElementById("aiChatClose");
const aiChatBody = document.getElementById("aiChatBody");
const aiChatInput = document.getElementById("aiChatInput");
const aiSendBtn = document.getElementById("aiSendBtn");
const aiSuggestionBox = document.getElementById("aiSuggestionBox");

let lastAiIntent = null;

const aiResponses = {
  experience:
    `Kunalan is a Senior Digital Marketing Executive with experience in:

• Paid media across Google, Meta, TikTok, and LinkedIn
• Lead generation funnel strategy
• Landing page optimization and CRO
• Marketing automation and CRM workflows
• Analytics, tracking, and campaign reporting
• Managed 60+ campaigns and RM1.8M+ ad budget`,

  projects:
    `Key projects include:

• Landing page development
• Multi-channel campaign management
• AI WhatsApp automation
• Email automation integration
• Marketing analytics infrastructure
• SEO performance optimization

You can view more under the Projects section.`,

  results:
    `Key performance impact:

• +21.5% YoY lead growth
• -10% lower CPL
• +8% conversion rate improvement
• +17% ROAS improvement
• +30% lead engagement through automation`,

  skills:
    `Kunalan works with:

• Google Ads, Meta Ads, TikTok Ads, LinkedIn Ads
• GA4, Google Tag Manager, Meta Pixel, Conversion API
• Salesforce, SleekFlow, WhatsApp AI automation
• WordPress, Elementor, Oxygen
• SEMrush, Power BI, Canva, AI tools`,

  cv:
    `You can download Kunalan’s CV here:

[Download CV](assets/CV-2026.pdf)`,

  contact:
    `You can contact Kunalan through:

[Email](mailto:kunalan517@gmail.com)
[LinkedIn](https://www.linkedin.com/in/kunalan-mahendran/)
[WhatsApp](https://wa.me/60123456789?text=Hi%20Kunalan%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.)`
};

function addAiMessage(text, sender = "bot") {
  if (!aiChatBody) return;

  const message = document.createElement("div");
  message.className = `ai-message ${sender}`;

  if (sender === "bot") {
    message.innerHTML = text
      .replace(/\n/g, "<br>")
      .replace(/\[Download CV\]\((.*?)\)/g, '<a class="ai-message-btn" href="$1" download>Download CV</a>')
      .replace(/\[Email\]\((.*?)\)/g, '<a class="ai-message-btn" href="$1">Email</a>')
      .replace(/\[LinkedIn\]\((.*?)\)/g, '<a class="ai-message-btn" href="$1" target="_blank">LinkedIn</a>')
      .replace(/\[WhatsApp\]\((.*?)\)/g, '<a class="ai-message-btn" href="$1" target="_blank">WhatsApp</a>');
  } else {
    message.innerText = text;
  }

  aiChatBody.appendChild(message);
  aiChatBody.scrollTop = aiChatBody.scrollHeight;
}

function getFollowUpResponse(intent) {
  const followUps = {
    experience:
      `More about Kunalan’s experience:

• Focuses on full-funnel digital marketing
• Works across paid media, automation, CRO, and analytics
• Has experience in education and lead generation campaigns
• Builds landing pages, reporting systems, and campaign workflows`,

    projects:
      `More project details:

• Landing pages connected with Salesforce forms
• Multi-channel paid ads across Google, Meta, TikTok, and LinkedIn
• WhatsApp AI automation using SleekFlow
• GA4, GTM, Meta Pixel, and Conversion API tracking setup
• SEO keyword tracking and ranking performance reports`,

    results:
      `Additional performance highlights:

• Managed RM1.8M+ ad budget
• Supported 5 institution websites
• Managed 60+ campaigns
• Improved lead quality and tracking visibility
• Strengthened reporting for better marketing decisions`,

    skills:
      `More skills include:

• Paid media planning and optimization
• Landing page UX and CRO
• Email automation and CRM workflows
• Analytics dashboards and campaign reporting
• SEO visibility and keyword performance tracking`,

    cv:
      aiResponses.cv,

    contact:
      aiResponses.contact
  };

  return followUps[intent] || "Tell me which area you want to know more about: experience, projects, results, skills, CV, or contact.";
}

function getAiResponse(input) {
  const text = input.toLowerCase();

  const followUpWords = [
    "tell me more",
    "more",
    "details",
    "show more",
    "explain",
    "what else",
    "continue"
  ];

  if (followUpWords.some((word) => text.includes(word)) && lastAiIntent) {
    return getFollowUpResponse(lastAiIntent);
  }

  const intentMap = [
    {
      intent: "experience",
      keys: [
        "experience",
        "background",
        "work",
        "career",
        "what does he do",
        "who is",
        "about him"
      ],
      response: aiResponses.experience
    },
    {
      intent: "projects",
      keys: [
        "project",
        "projects",
        "case study",
        "portfolio",
        "what has he built",
        "what did he do"
      ],
      response: aiResponses.projects
    },
    {
      intent: "results",
      keys: [
        "result",
        "results",
        "achievement",
        "performance",
        "kpi",
        "growth",
        "roas",
        "conversion",
        "leads",
        "cpl"
      ],
      response: aiResponses.results
    },
    {
      intent: "skills",
      keys: [
        "skill",
        "skills",
        "tools",
        "platform",
        "software",
        "google ads",
        "meta ads",
        "tiktok ads",
        "linkedin ads",
        "analytics",
        "ga4",
        "gtm",
        "seo",
        "automation",
        "crm"
      ],
      response: aiResponses.skills
    },
    {
      intent: "cv",
      keys: [
        "cv",
        "resume",
        "download cv",
        "download resume"
      ],
      response: aiResponses.cv
    },
    {
      intent: "contact",
      keys: [
        "contact",
        "email",
        "reach",
        "hire",
        "whatsapp",
        "linkedin",
        "how to contact",
        "how to reach"
      ],
      response: aiResponses.contact
    }
  ];

  for (let intent of intentMap) {
    for (let key of intent.keys) {
      if (text.includes(key)) {
        lastAiIntent = intent.intent;
        return intent.response;
      }
    }
  }

  return `I can help with:

• Experience
• Projects
• Results
• Skills
• CV
• Contact

Try asking: "what results did he achieve?" or "what tools does he use?"`;
}

function sendAiMessage() {
  if (!aiChatInput) return;

  const value = aiChatInput.value.trim();
  if (!value) return;

  addAiMessage(value, "user");
  aiChatInput.value = "";

  if (aiSuggestionBox) {
    aiSuggestionBox.classList.remove("show");
    aiSuggestionBox.innerHTML = "";
  }

  setTimeout(() => {
    addAiMessage(getAiResponse(value), "bot");
  }, 300);
}

const aiSuggestions = [
  "What results did he achieve?",
  "What projects has he done?",
  "What tools does he use?",
  "Can he manage Google Ads?",
  "Tell me about automation",
  "How can I contact him?",
  "Download CV"
];

function updateAiSuggestions(value) {
  if (!aiSuggestionBox) return;

  const text = value.toLowerCase().trim();

  if (!text) {
    aiSuggestionBox.classList.remove("show");
    aiSuggestionBox.innerHTML = "";
    return;
  }

  const filtered = aiSuggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(text) ||
    (text.includes("ad") && suggestion.toLowerCase().includes("google ads")) ||
    (text.includes("tool") && suggestion.toLowerCase().includes("tools")) ||
    (text.includes("contact") && suggestion.toLowerCase().includes("contact")) ||
    (text.includes("cv") && suggestion.toLowerCase().includes("cv"))
  );

  aiSuggestionBox.innerHTML = "";

  filtered.slice(0, 3).forEach((suggestion) => {
    const button = document.createElement("button");
    button.type = "button";
    button.innerText = suggestion;

    button.addEventListener("click", () => {
      if (!aiChatInput) return;

      aiChatInput.value = suggestion;
      aiSuggestionBox.classList.remove("show");
      aiSuggestionBox.innerHTML = "";
      sendAiMessage();
    });

    aiSuggestionBox.appendChild(button);
  });

  if (filtered.length > 0) {
    aiSuggestionBox.classList.add("show");
  } else {
    aiSuggestionBox.classList.remove("show");
  }
}

if (aiChatToggle && aiChatPanel) {
  aiChatToggle.addEventListener("click", () => {
    aiChatPanel.classList.toggle("show");

    if (aiChatPanel.classList.contains("show")) {
      document.body.classList.add("ai-chat-open");
    } else {
      document.body.classList.remove("ai-chat-open");
    }
  });
}

if (aiChatClose && aiChatPanel) {
  aiChatClose.addEventListener("click", () => {
    aiChatPanel.classList.remove("show");
    document.body.classList.remove("ai-chat-open");
  });
}

document.querySelectorAll("[data-ai]").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.getAttribute("data-ai");
    const label = button.innerText;

    if (!aiResponses[key]) return;

    lastAiIntent = key;

    addAiMessage(label, "user");

    setTimeout(() => {
      addAiMessage(aiResponses[key], "bot");
    }, 300);
  });
});

if (aiSendBtn) {
  aiSendBtn.addEventListener("click", sendAiMessage);
}

if (aiChatInput) {
  aiChatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      sendAiMessage();
    }
  });

  aiChatInput.addEventListener("input", () => {
    updateAiSuggestions(aiChatInput.value);
  });
}

/* Prevent whole page scrolling when scrolling inside chatbot */
if (aiChatBody) {
  aiChatBody.addEventListener(
    "wheel",
    (event) => {
      const atTop = aiChatBody.scrollTop === 0;
      const atBottom =
        Math.ceil(aiChatBody.scrollTop + aiChatBody.clientHeight) >=
        aiChatBody.scrollHeight;

      if ((event.deltaY < 0 && atTop) || (event.deltaY > 0 && atBottom)) {
        event.preventDefault();
      }

      event.stopPropagation();
    },
    { passive: false }
  );

  aiChatBody.addEventListener(
    "touchmove",
    (event) => {
      event.stopPropagation();
    },
    { passive: false }
  );
}
