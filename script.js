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

if (slider && prevBtn && nextBtn) {
  nextBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: 460,
      behavior: "smooth"
    });
  });

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: -460,
      behavior: "smooth"
    });
  });
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
