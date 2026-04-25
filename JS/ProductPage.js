const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const product = Products.find((p) => p.id === id);

if (product) {
  const titleEl = document.getElementById("ProductTitle");
  const imgEl = document.getElementById("productImage");
  const infoEl = document.getElementById("ProductInfo");
  const priceEl = document.getElementById("ProductPrice");

  if (titleEl) titleEl.textContent = product.ProductTitle;

  if (imgEl) {
    imgEl.src = product.CardImage.startsWith("data:")
      ? product.CardImage
      : "../" + product.CardImage;
  }

  if (infoEl) infoEl.textContent = product.ProductInfo;

  if (priceEl) {
    if (product.ProductPrice !== undefined) {
      priceEl.textContent = "$" + product.ProductPrice;
    } else {
      priceEl.textContent = "Price not available";
    }
  }
}

function showCartPopup() {
  const popup = document.getElementById("cartPopup");
  popup.classList.add("show");
  setTimeout(() => {
    popup.classList.remove("show");
  }, 3000);
}
