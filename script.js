// Duplicate tool icons for infinite carousel
document.querySelectorAll(".tool-track").forEach((track) => {
  const firstSet = track.querySelector(".tool-set:first-child");
  const secondSet = track.querySelector(".tool-set:nth-child(2)");

  if (firstSet && secondSet && secondSet.children.length === 0) {
    secondSet.innerHTML = firstSet.innerHTML;
  }
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
