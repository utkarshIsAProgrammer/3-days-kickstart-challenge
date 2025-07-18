// Constants
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const modalBtn = document.querySelector(".modal-btn button");
const modalSection = document.querySelector(".modal-section");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");

// Hamburger Dropdown Menu
hamburger.addEventListener("click", () => {
	navLinks.classList.toggle("dropdown-open");
});

// Modal Button Event
modalBtn.addEventListener("click", () => {
	modal.classList.add("modal-visible");
	modalBtn.classList.add("modal-btn-hide");
	overlay.classList.add("active");
});

// Close Button Event
closeBtn.addEventListener("click", () => {
	modal.classList.remove("modal-visible");
	modalBtn.classList.remove("modal-btn-hide");
	overlay.classList.remove("active");
});

// Outside Model Click Event
modalSection.addEventListener("click", () => {
	modal.classList.remove("modal-visible");
	modalBtn.classList.remove("modal-btn-hide");
	overlay.classList.remove("active");
});
