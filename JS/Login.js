const form = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  emailError.textContent = "";
  passwordError.textContent = "";

  if (email.value.trim() === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!email.value.includes("@gmail.com")) {
    emailError.textContent = "Enter a valid gmail.com email";
    isValid = false;
  }

  if (password.value.trim() === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
  } else if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  }

  if (isValid) {
    localStorage.setItem("loggedIn", "true");

    window.location.href = "./../index.html";
  }
});
