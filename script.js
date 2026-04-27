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

/* DARK / LIGHT MODE */

const themeToggle = document.getElementById("themeToggle");

function setTheme(mode) {
  if (!themeToggle) return;

  if (mode === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "🌙";
    localStorage.setItem("portfolio-theme", "light");
  } else {
    document.body.classList.remove("light-mode");
    themeToggle.textContent = "☀️";
    localStorage.setItem("portfolio-theme", "dark");
  }
}

if (themeToggle) {
  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme === "light") {
    setTheme("light");
  } else {
    setTheme("dark");
  }

  themeToggle.addEventListener("click", () => {
    const isLight = document.body.classList.contains("light-mode");

    if (isLight) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  });
}

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
      "Problem: Landing pages needed stronger conversion flow and better lead capture visibility. Action: Developed and maintained 70+ conversion-focused landing pages with Salesforce forms, automated tracking, and CRO-focused UX. Result: Achieved a 20% improvement in lead capture efficiency and stronger landing page performance.",
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
      "Problem: Campaign performance needed stronger efficiency, clearer targeting, and better budget allocation. Action: Managed more than 60 multi-channel advertising campaigns across Google Ads, Meta Ads, LinkedIn Ads, and TikTok Ads with A/B testing and continuous optimization. Result: Improved ROAS by 17% and increased qualified leads by 25%.",
    role:
      "Campaign planning, targeting, budget optimization, A/B testing, and performance tracking.",
    tools:
      "Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, GA4, Google Tag Manager.",
    result:
      "17% higher ROAS and 25% increase in qualified leads."
  },

  project3: {
    title: "AI Chatbot Automation",
    subtitle: "Initiative 03",
    images: ["images/project-3.jpg"],
    overview:
      "Problem: Lead response and follow-up needed to be faster and more scalable. Action: Implemented a WhatsApp AI Agent automation system using SleekFlow to improve lead engagement, qualification flow, and response efficiency. Result: Increased lead engagement by 30% and reduced manual follow-up effort by 10 hours weekly.",
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
      "Problem: Lead nurturing needed stronger segmentation and automated follow-up communication. Action: Built segmented email marketing workflows with automation and A/B testing to improve lifecycle communication and engagement. Result: Improved email open rates by 15% and click-through rates by 10%.",
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
      "Problem: Campaign tracking and attribution visibility needed improvement for better decision-making. Action: Implemented end-to-end tracking infrastructure including GTM, GA4, Meta Pixel, conversion tracking, and reporting structures. Result: Improved attribution accuracy, reporting clarity, and campaign performance decision-making.",
    role:
      "Tracking setup, event configuration, conversion tracking, pixel implementation, and reporting structure.",
    tools:
      "Google Tag Manager, GA4, Meta Pixel, Google Ads Conversion Tracking, Conversion APIs, Google Search Console, Power BI.",
    result:
      "Improved attribution accuracy, better decision-making, and clearer campaign performance reporting."
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
