let Products = JSON.parse(localStorage.getItem("products")) || [
  {
    id: 1,
    CardImage: "IMG/69497bad4ee17796e702dd11.jpg",
    ProductTitle: "Intel Core i7-12700K",
    ProductInfo:
      "12-Core processor with high-performance gaming and multitasking support.",
    ProductLink: "./Pages/IntelProductPage.html",
    ProductPrice: 200,
  },
  {
    id: 2,
    CardImage: "IMG/71liIYrRmkL._AC_UF894,1000_QL80_.jpg",
    ProductTitle: "NVIDIA RTX 4070",
    ProductInfo: "Powerful GPU with ray tracing and DLSS for modern gaming.",
    ProductLink: "./Pages/RTX-ProductPage.html",
    ProductPrice: 300,
  },
  {
    id: 3,
    CardImage: "IMG/1g5mj5n342k-w1920.JPG",
    ProductTitle: "Corsair 16GB DDR4 RAM",
    ProductInfo: "High-speed memory ideal for gaming and productivity.",
    ProductLink: "./Pages/RamProductPage.html",
    ProductPrice: 500,
  },
];

function displayProducts() {
  const container = document.getElementById("ProductCard");

  if (!container) return;

  container.innerHTML = "";

  Products.forEach((product) => {
    container.innerHTML += `
      <div class="card shadow-sm" style="width: 18rem;">
        <div class="product-img-wrapper">
          <img src="${product.CardImage}" alt="${product.ProductTitle}">
        </div>

        <div class="card-body d-flex flex-column">
          <h5>${product.ProductTitle}</h5>
          <p class="text-muted">${product.ProductInfo}</p>
          <a href="./Pages/productpage.html?id=${product.id}" class="btn btn-primary w-100">
            View Product
          </a>
        </div>
      </div>
    `;
  });
}

function addProduct(image, title, info, link, price) {
  const newProduct = {
    id: Date.now(),
    CardImage: image,
    ProductTitle: title,
    ProductInfo: info,
    ProductLink: link,
    ProductPrice: Number(price),
  };

  Products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(Products));
  displayProducts();
}

function handleAddProduct() {
  const imageInput = document.getElementById("productImage");
  const title = document.getElementById("productTitle").value;
  const info = document.getElementById("productInfo").value;
  const price = document.getElementById("ProductPrice").value;
  const file = imageInput.files[0];

  if (!file) {
    alert("Please select an image");
    return;
  }

  const reader = new FileReader();

  reader.onload = function () {
    const imageBase64 = reader.result;

    addProduct(imageBase64, title, info, "", price);
    imageInput.value = "";
    document.getElementById("productTitle").value = "";
    document.getElementById("productInfo").value = "";
    document.getElementById("ProductPrice").value = "";

    const modal = bootstrap.Modal.getInstance(
      document.getElementById("addProductModal"),
    );

    modal.hide();
  };

  reader.readAsDataURL(file);
}

displayProducts();

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("change", () => {
  document.documentElement.setAttribute(
    "data-bs-theme",
    toggle.checked ? "dark" : "light",
  );
});
