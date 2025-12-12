document.getElementById("year").textContent = new Date().getFullYear();

// AOS
if (window.AOS) {
  AOS.init({ duration: 900, once: true, offset: 90 });
}

// Typed (fallback safe)
if (window.Typed) {
  new Typed(".typing", {
    strings: ["Data Analyst", "Python Learner", "SQL Learner", "CSE Student"],
    typeSpeed: 55,
    backSpeed: 30,
    backDelay: 1200,
    loop: true
  });
}

// Mobile menu toggle (for small screens)
const nav = document.getElementById("nav");
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {
  if (nav.style.display === "grid") {
    nav.style.display = "none";
  } else {
    nav.style.display = "grid";
  }
});

// Contact form
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent successfully!");
  form.reset();
});
