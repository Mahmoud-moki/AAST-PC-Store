let cart = JSON.parse(localStorage.getItem("cart")) || [];

const list = document.getElementById("orderList");
const totalEl = document.getElementById("totalPrice");

let total = 0;

function renderCart() {
  list.innerHTML = "";
  total = 0;

  cart.forEach((item) => {
    total += Number(item.ProductPrice);

    list.innerHTML += `
            <li class="list-group-item d-flex justify-content-between">
                <span>${item.ProductTitle}</span>
                <span>$${item.ProductPrice}</span>
            </li>
        `;
  });

  totalEl.textContent = "$" + total.toFixed(2);
}

renderCart();

// fake payment success
document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  localStorage.removeItem("cart");

  alert("Payment Successful 🎉");

  window.location.href = "./Confirmation.html";
});
