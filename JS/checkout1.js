const form = document.getElementById("checkoutForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const address = document.getElementById("address");
const city = document.getElementById("city");
const terms = document.getElementById("sameAddress");

// error fields
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const addressError = document.getElementById("addressError");
const cityError = document.getElementById("cityError");
const termsError = document.getElementById("termsError");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  // reset errors
  firstNameError.textContent = "";
  lastNameError.textContent = "";
  emailError.textContent = "";
  addressError.textContent = "";
  cityError.textContent = "";
  termsError.textContent = "";

  // FIRST NAME
  if (firstName.value.trim().length < 2) {
    firstNameError.textContent = "First name must be at least 2 characters";
    valid = false;
  }

  // LAST NAME
  if (lastName.value.trim().length < 2) {
    lastNameError.textContent = "Last name must be at least 2 characters";
    valid = false;
  }

  // EMAIL
  if (!email.value.includes("@")) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  }

  // ADDRESS
  if (address.value.trim().length < 5) {
    addressError.textContent = "Please enter a valid address";
    valid = false;
  }

  // CITY
  if (city.value.trim().length < 2) {
    cityError.textContent = "City is required";
    valid = false;
  }

  // TERMS CHECKBOX
  if (!terms.checked) {
    termsError.textContent = "You must agree to terms";
    valid = false;
  }

  // SUCCESS
  if (valid) {
    // optional: save order info
    const order = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      address: address.value,
      city: city.value,
    };

    localStorage.setItem("lastOrder", JSON.stringify(order));

    window.location.href = "./Payment.html";
  }
});
