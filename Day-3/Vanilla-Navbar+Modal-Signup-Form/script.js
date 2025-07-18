// Constants
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const modalBtn = document.querySelector(".modal-btn button");
const modalSection = document.querySelector(".modal-section");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");

const form = document.querySelector(".form");
const inputs = document.querySelectorAll("input");
const submit = document.querySelector(".submit-btn");
const formSuccess = document.querySelector(".success-message");

let name = document.querySelector(".name");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let confirm = document.querySelector(".confirm");
let errorMessage = document.querySelector(".error-msg");
let inputText = inputs.textContent;

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
overlay.addEventListener("click", () => {
	modal.classList.remove("modal-visible");
	modalBtn.classList.remove("modal-btn-hide");
	overlay.classList.remove("active");
});

// Form Validation
function allInputsFilled() {
	for (let input of inputs) {
		if (input.value === "") {
			return false;
		}
	}
	return true;
}

function clearAllInputFields() {
	for (let input of inputs) {
		input.value = "";
	}
}

submit.addEventListener("click", () => {
	// Clear previous error styles
	for (let input of inputs) {
		input.removeAttribute("id");
	}

	let hasEmptyField = false;
	for (let input of inputs) {
		if (input.value.trim() === "") {
			input.setAttribute("id", "error-field");
			hasEmptyField = true;
		}
	}

	if (hasEmptyField) {
		errorMessage.textContent = "Please fill all the input fields.";
		return;
	}

	if (!email.value.includes("@") || !email.value.includes(".")) {
		errorMessage.textContent = "Please enter a valid email address.";
		email.setAttribute("id", "error-field");
		return;
	}

	if (password.value.length < 8) {
		password.setAttribute("id", "error-field");
		errorMessage.textContent = "Password is too short.";
		return;
	}

	if (password.value !== confirm.value) {
		confirm.setAttribute("id", "error-field");
		errorMessage.textContent = "Passwords must match.";
		return;
	}

	// All validations passed
	errorMessage.textContent = "";
	clearAllInputFields();
	modal.classList.remove("modal-visible");
	overlay.classList.remove("active");

	const successBox = document.querySelector(".form-success");
	const successText = document.querySelector(".success-message");
	successText.textContent = "Form Uploaded Successfully!";
	successBox.classList.add("form-success-show");

	setTimeout(() => {
		successBox.classList.remove("form-success-show");
		successText.textContent = "";
		modalBtn.classList.remove("modal-btn-hide"); // Show "Open Modal" again
	}, 1000);
});
