// PARTICLES
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 50; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    dx: Math.random() - 0.5,
    dy: Math.random() - 0.5
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "#79d8ff";
    ctx.fill();
  });

  requestAnimationFrame(draw);
}

draw();

// SLIDER
const slider = document.getElementById("projectSlider");

document.getElementById("nextBtn").onclick = () => {
  slider.scrollBy({ left: 300, behavior: "smooth" });
};

document.getElementById("prevBtn").onclick = () => {
  slider.scrollBy({ left: -300, behavior: "smooth" });
};

// MODAL
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");

document.querySelectorAll(".open-modal").forEach(btn => {
  btn.onclick = () => {
    modal.style.display = "block";
    modalBody.innerHTML = "Project Details Here";
  };
});

document.getElementById("closeModal").onclick = () => {
  modal.style.display = "none";
};

// TILT EFFECT
document.querySelectorAll(".tilt-card").forEach(card => {
  card.onmousemove = e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.transform = `rotateX(${(y-rect.height/2)/20}deg) rotateY(${(x-rect.width/2)/20}deg)`;
  };

  card.onmouseleave = () => {
    card.style.transform = "rotate(0)";
  };
});
