const products = document.querySelectorAll(".product");
const totalElement = document.getElementById("total");

products.forEach(product => {

  let qty = 1;
  const price = parseFloat(product.dataset.price);

  const plusBtn = product.querySelector(".plus");
  const minusBtn = product.querySelector(".minus");

  const qtyText = product.querySelector(".qty");
  const priceText = product.querySelector(".price");

  plusBtn.addEventListener("click", () => {
    qty++;
    updateProduct();
    console.log("click");
    
  });

  minusBtn.addEventListener("click", () => {
    if (qty > 1) {
      qty--;
      updateProduct();
    }
  });

  function updateProduct() {
    qtyText.textContent = qty;
    priceText.textContent = "$" + (price * qty).toFixed(2);
    updateTotal();
  }

});

function updateTotal() {
  let total = 0;

  document.querySelectorAll(".product").forEach(product => {
    const priceText = product.querySelector(".price").textContent;
    const price = parseFloat(priceText.replace("$", ""));
    total += price;
  });

  totalElement.textContent = "$" + total.toFixed(2);
}