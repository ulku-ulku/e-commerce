const filter = document.getElementById("projectFilter");
const cards = document.querySelectorAll(".card");

filter.addEventListener("change", (event) => {
  const value = event.target.value;

  cards.forEach((card) => {
    const type = card.dataset.type;
    const show = value === "all" || type === value;
    card.style.display = show ? "block" : "none";
  });
});

const contactForm = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent =
    "Teşekkürler! Mesajın alındı. En kısa sürede seninle iletişime geçeceğim.";
  contactForm.reset();
});
