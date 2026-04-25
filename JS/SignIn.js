const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmError.textContent = "";

  if (nameInput.value.trim().length < 3) {
    nameError.textContent = "Name must be at least 3 characters";
    isValid = false;
  }

  if (!emailInput.value.includes("@")) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  }

  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  }

  if (confirmInput.value !== passwordInput.value) {
    confirmError.textContent = "Passwords do not match";
    isValid = false;
  }

  if (isValid) {
    const user = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };

    window.location.href = "./Login.html";
  }
});
