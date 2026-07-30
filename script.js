const revealSections = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const publicationCards = document.querySelectorAll(".publication-card");

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealSections.forEach((section) => section.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealSections.forEach((section) => revealObserver.observe(section));
}

publicationCards.forEach((card) => {
  const toggle = card.querySelector(".publication-toggle");
  const detail = card.querySelector(".publication-detail");

  if (!toggle || !detail) {
    return;
  }

  const setOpen = (isOpen) => {
    card.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  };

  toggle.addEventListener("click", () => {
    setOpen(!card.classList.contains("is-open"));
  });
});
