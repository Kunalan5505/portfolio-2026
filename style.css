:root {
  --bg: #07111f;
  --bg2: #0b1730;
  --text: #f5f8ff;
  --muted: #bfd0ef;
  --line: rgba(255, 255, 255, 0.12);
  --primary: #79d8ff;
  --primary2: #7b8cff;
  --shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
  --radius: 24px;
  --container: 1180px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html { scroll-behavior: smooth; }

body {
  font-family: "Inter", sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(79, 229, 255, 0.18), transparent 28%),
    radial-gradient(circle at top right, rgba(123, 140, 255, 0.18), transparent 30%),
    linear-gradient(135deg, var(--bg), var(--bg2));
  min-height: 100vh;
  overflow-x: hidden;
}

body.modal-open {
  overflow: hidden;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: min(92%, var(--container));
  margin: 0 auto;
}

.section { padding: 90px 0; }

.eyebrow {
  color: #a9e9ff;
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  margin-bottom: 12px;
}

.section-title { margin-bottom: 30px; }

.section-title h2 {
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 1.15;
  max-width: 850px;
}

.glass {
  background: linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.05));
  border: 1px solid var(--line);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: var(--shadow);
}

.bg-orb {
  position: fixed;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
}

.orb-1 {
  width: 300px;
  height: 300px;
  background: rgba(78, 224, 255, 0.25);
  top: 40px;
  left: -70px;
}

.orb-2 {
  width: 320px;
  height: 320px;
  background: rgba(123, 140, 255, 0.25);
  top: 20%;
  right: -100px;
}

.orb-3 {
  width: 260px;
  height: 260px;
  background: rgba(97, 219, 255, 0.18);
  bottom: 40px;
  left: 20%;
}

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 20px 0;
}

.navbar {
  border-radius: 999px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-weight: 800;
  letter-spacing: 0.1em;
  font-size: 0.95rem;
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-links a {
  color: var(--muted);
  font-weight: 500;
  transition: 0.25s ease;
}

.nav-links a:hover { color: var(--text); }

.menu-btn {
  display: none;
  border: none;
  background: transparent;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;
  align-items: stretch;
}

.hero-left,
.hero-right,
.card,
.timeline-item,
.skill-item,
.contact-box,
.footer-box,
.project-slide,
.modal-content {
  border-radius: var(--radius);
}

.hero-left { padding: 42px; }

.hero-left h1 {
  font-size: clamp(2.5rem, 5vw, 4.8rem);
  line-height: 1.03;
  letter-spacing: -0.04em;
  margin-bottom: 18px;
}

.hero-left h1 span {
  background: linear-gradient(135deg, #c0f4ff, #8ba0ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-text {
  color: var(--muted);
  line-height: 1.8;
  font-size: 1.05rem;
  max-width: 680px;
}

.hero-buttons {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.btn {
  padding: 14px 22px;
  border-radius: 999px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 0.25s ease;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

.btn:hover { transform: translateY(-2px); }

.btn-primary {
  background: linear-gradient(135deg, #9cecff, #8092ff);
  color: #081220;
}

.btn-secondary {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.14);
  color: white;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 30px;
}

.stat-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  padding: 18px;
  border-radius: 18px;
}

.stat-card h3 {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.stat-card p {
  color: var(--muted);
  line-height: 1.5;
  font-size: 0.92rem;
}

.hero-right {
  padding: 26px;
  display: flex;
  align-items: center;
}

.profile-wrap { width: 100%; }

.profile-image {
  width: 180px;
  height: 180px;
  margin: 0 auto 22px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(135deg, #8ce8ff, #7b8cff);
}

.profile-image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #091220;
}

.profile-content { text-align: center; }

.profile-content h2 {
  font-size: 1.6rem;
  margin-bottom: 8px;
}

.role {
  color: var(--muted);
  margin-bottom: 18px;
}

.contact-mini {
  list-style: none;
  display: grid;
  gap: 12px;
}

.contact-mini li {
  padding: 12px 14px;
  border-radius: 14px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  color: var(--muted);
}

.contact-mini a { color: #bce9ff; }

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.card { padding: 28px; }

.card h3 {
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.card p {
  color: var(--muted);
  line-height: 1.8;
}

.timeline {
  display: grid;
  gap: 22px;
}

.timeline-item { padding: 28px; }

.timeline-item h3 {
  font-size: 1.3rem;
  margin-bottom: 6px;
}

.timeline-item h4 {
  color: #cfe9ff;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.timeline-item span {
  display: inline-block;
  margin-bottom: 16px;
  color: #9fdfff;
  font-size: 0.92rem;
  font-weight: 600;
}

.timeline-item ul {
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.8;
}

/* NETFLIX STYLE PROJECT SLIDER */

.slider-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 22px;
  margin-bottom: 22px;
}

.slider-header p {
  color: var(--muted);
  line-height: 1.7;
}

.slider-controls {
  display: flex;
  gap: 10px;
}

.slider-btn {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.16);
  background: rgba(255,255,255,0.08);
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.25s ease;
}

.slider-btn:hover {
  background: rgba(255,255,255,0.16);
  transform: scale(1.05);
}

.project-slider {
  display: flex;
  gap: 22px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 10px 4px 26px;
  scroll-snap-type: x mandatory;
}

.project-slider::-webkit-scrollbar {
  height: 10px;
}

.project-slider::-webkit-scrollbar-track {
  background: rgba(255,255,255,0.06);
  border-radius: 999px;
}

.project-slider::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #9cecff, #8092ff);
  border-radius: 999px;
}

.project-slide {
  min-width: 430px;
  overflow: hidden;
  scroll-snap-align: start;
  transition: 0.3s ease;
}

.project-slide:hover {
  transform: translateY(-8px) scale(1.01);
}

.project-slide img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  background: rgba(255,255,255,0.04);
}

.project-slide-content {
  padding: 24px;
}

.project-number {
  color: #a9e9ff;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  margin-bottom: 10px;
}

.project-slide-content h3 {
  font-size: 1.45rem;
  margin-bottom: 12px;
}

.project-slide-content p {
  color: var(--muted);
  line-height: 1.75;
  margin-bottom: 18px;
}

/* MODAL */

.modal {
  position: fixed;
  inset: 0;
  background: rgba(2, 8, 18, 0.78);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  z-index: 999;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.modal.show {
  display: flex;
}

.modal-content {
  width: min(1100px, 96vw);
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  padding: 28px;
}

.modal-close {
  position: sticky;
  top: 0;
  margin-left: auto;
  display: block;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.16);
  background: rgba(255,255,255,0.1);
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 10;
}

.modal-project h2 {
  font-size: clamp(2rem, 4vw, 3.5rem);
  margin-bottom: 14px;
}

.modal-project p {
  color: var(--muted);
  line-height: 1.8;
  margin-bottom: 16px;
}

.modal-image-large {
  width: 100%;
  max-height: 620px;
  object-fit: contain;
  border-radius: 22px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  margin: 22px 0;
}

.modal-gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: 22px;
  margin: 22px 0;
}

.modal-gallery img {
  width: 100%;
  max-height: 620px;
  object-fit: contain;
  border-radius: 22px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
}

.modal-info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 24px;
}

.modal-info-card {
  padding: 20px;
  border-radius: 18px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
}

.modal-info-card h4 {
  margin-bottom: 8px;
}

.modal-info-card p {
  margin-bottom: 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}

.skill-item {
  padding: 18px;
  text-align: center;
  font-weight: 700;
}

.contact-box {
  padding: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.contact-box p {
  color: var(--muted);
  line-height: 1.8;
  max-width: 700px;
}

.contact-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.footer { padding: 0 0 40px; }

.footer-box {
  padding: 22px 24px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: var(--muted);
}

.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: all 0.7s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 1100px) {
  .hero-grid,
  .grid-3 {
    grid-template-columns: 1fr;
  }

  .hero-stats { grid-template-columns: 1fr; }

  .contact-box,
  .footer-box {
    flex-direction: column;
    align-items: flex-start;
  }

  .modal-info-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .section { padding: 70px 0; }

  .nav-links {
    display: none;
    position: absolute;
    top: 78px;
    left: 4%;
    width: 92%;
    flex-direction: column;
    padding: 20px;
    border-radius: 24px;
    background: rgba(10, 16, 30, 0.92);
    border: 1px solid rgba(255,255,255,0.12);
  }

  .nav-links.show { display: flex; }

  .menu-btn { display: block; }

  .hero-left { padding: 28px; }

  .slider-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .project-slide {
    min-width: 82vw;
  }

  .project-slide img {
    height: 260px;
  }

  .modal-content {
    padding: 20px;
  }
}

@media (max-width: 520px) {
  .hero-buttons,
  .contact-actions {
    flex-direction: column;
  }

  .btn { width: 100%; }

  .hero-left h1 { font-size: 2.2rem; }

  .project-slide {
    min-width: 88vw;
  }

  .project-slide img {
    height: 230px;
  }
}
