var CardImage;
var ProductTitile;
var ProductInfo;


const Products = [
    {
        CardImage: "IMG/69497bad4ee17796e702dd11.jpg",
        ProductTitle: "Intel Core i7-12700K",
        ProductInfo: "12-Core processor with high-performance gaming and multitasking support.",
        ProductLink: "./Pages/IntelProductPage.html"
    },
    {
        CardImage: "IMG/71liIYrRmkL._AC_UF894,1000_QL80_.jpg",
        ProductTitle: "NVIDIA RTX 4070",
        ProductInfo: "Powerful GPU with ray tracing and DLSS for modern gaming.",
        ProductLink: "./Pages/RTX-ProductPage.html"
    },
    {
        CardImage: "IMG/1g5mj5n342k-w1920.JPG",
        ProductTitle: "Corsair 16GB DDR4 RAM",
        ProductInfo: "High-speed memory ideal for gaming and productivity.",
        ProductLink: "./Pages/RamProductPage.html"
    },
    {
        CardImage: "IMG/69497bad4ee17796e702dd11.jpg",
        ProductTitle: "Intel Core i7-12700K",
        ProductInfo: "12-Core processor with high-performance gaming and multitasking support.",
        ProductLink: "./Pages/IntelProductPage.html"
    },
    {
        CardImage: "IMG/71liIYrRmkL._AC_UF894,1000_QL80_.jpg",
        ProductTitle: "NVIDIA RTX 4070",
        ProductInfo: "Powerful GPU with ray tracing and DLSS for modern gaming.",
        ProductLink: "./Pages/RTX-ProductPage.html"
    },
    {
        CardImage: "IMG/1g5mj5n342k-w1920.JPG",
        ProductTitle: "Corsair 16GB DDR4 RAM",
        ProductInfo: "High-speed memory ideal for gaming and productivity.",
        ProductLink: "./Pages/RamProductPage.html"
    },
    {
        CardImage: "IMG/69497bad4ee17796e702dd11.jpg",
        ProductTitle: "Intel Core i7-12700K",
        ProductInfo: "12-Core processor with high-performance gaming and multitasking support.",
        ProductLink: "./Pages/IntelProductPage.html"
    },
    {
        CardImage: "IMG/71liIYrRmkL._AC_UF894,1000_QL80_.jpg",
        ProductTitle: "NVIDIA RTX 4070",
        ProductInfo: "Powerful GPU with ray tracing and DLSS for modern gaming.",
        ProductLink: "./Pages/RTX-ProductPage.html"
    },
    {
        CardImage: "IMG/1g5mj5n342k-w1920.JPG",
        ProductTitle: "Corsair 16GB DDR4 RAM",
        ProductInfo: "High-speed memory ideal for gaming and productivity.",
        ProductLink: "./Pages/RamProductPage.html"
    },
    {
        CardImage: "IMG/69497bad4ee17796e702dd11.jpg",
        ProductTitle: "Intel Core i7-12700K",
        ProductInfo: "12-Core processor with high-performance gaming and multitasking support.",
        ProductLink: "./Pages/IntelProductPage.html"
    },
    {
        CardImage: "IMG/71liIYrRmkL._AC_UF894,1000_QL80_.jpg",
        ProductTitle: "NVIDIA RTX 4070",
        ProductInfo: "Powerful GPU with ray tracing and DLSS for modern gaming.",
        ProductLink: "./Pages/RTX-ProductPage.html"
    },
    {
        CardImage: "IMG/1g5mj5n342k-w1920.JPG",
        ProductTitle: "Corsair 16GB DDR4 RAM",
        ProductInfo: "High-speed memory ideal for gaming and productivity.",
        ProductLink: "./Pages/RamProductPage.html"
    },
    {
        CardImage: "IMG/69497bad4ee17796e702dd11.jpg",
        ProductTitle: "Intel Core i7-12700K",
        ProductInfo: "12-Core processor with high-performance gaming and multitasking support.",
        ProductLink: "./Pages/IntelProductPage.html"
    },
    {
        CardImage: "IMG/71liIYrRmkL._AC_UF894,1000_QL80_.jpg",
        ProductTitle: "NVIDIA RTX 4070",
        ProductInfo: "Powerful GPU with ray tracing and DLSS for modern gaming.",
        ProductLink: "./Pages/RTX-ProductPage.html"
    },
    {
        CardImage: "IMG/1g5mj5n342k-w1920.JPG",
        ProductTitle: "Corsair 16GB DDR4 RAM",
        ProductInfo: "High-speed memory ideal for gaming and productivity.",
        ProductLink: "./Pages/RamProductPage.html"
    },
    {
        CardImage: "IMG/69497bad4ee17796e702dd11.jpg",
        ProductTitle: "Intel Core i7-12700K",
        ProductInfo: "12-Core processor with high-performance gaming and multitasking support.",
        ProductLink: "./Pages/IntelProductPage.html"
    },
    {
        CardImage: "IMG/71liIYrRmkL._AC_UF894,1000_QL80_.jpg",
        ProductTitle: "NVIDIA RTX 4070",
        ProductInfo: "Powerful GPU with ray tracing and DLSS for modern gaming.",
        ProductLink: "./Pages/RTX-ProductPage.html"
    },
    {
        CardImage: "IMG/1g5mj5n342k-w1920.JPG",
        ProductTitle: "Corsair 16GB DDR4 RAM",
        ProductInfo: "High-speed memory ideal for gaming and productivity.",
        ProductLink: "./Pages/RamProductPage.html"
    },
    {
        CardImage: "IMG/69497bad4ee17796e702dd11.jpg",
        ProductTitle: "Intel Core i7-12700K",
        ProductInfo: "12-Core processor with high-performance gaming and multitasking support.",
        ProductLink: "./Pages/IntelProductPage.html"
    },
    {
        CardImage: "IMG/71liIYrRmkL._AC_UF894,1000_QL80_.jpg",
        ProductTitle: "NVIDIA RTX 4070",
        ProductInfo: "Powerful GPU with ray tracing and DLSS for modern gaming.",
        ProductLink: "./Pages/RTX-ProductPage.html"
    },
    {
        CardImage: "IMG/1g5mj5n342k-w1920.JPG",
        ProductTitle: "Corsair 16GB DDR4 RAM",
        ProductInfo: "High-speed memory ideal for gaming and productivity.",
        ProductLink: "./Pages/RamProductPage.html"
    },
    {
        CardImage: "IMG/69497bad4ee17796e702dd11.jpg",
        ProductTitle: "Intel Core i7-12700K",
        ProductInfo: "12-Core processor with high-performance gaming and multitasking support.",
        ProductLink: "./Pages/IntelProductPage.html"
    },
    {
        CardImage: "IMG/71liIYrRmkL._AC_UF894,1000_QL80_.jpg",
        ProductTitle: "NVIDIA RTX 4070",
        ProductInfo: "Powerful GPU with ray tracing and DLSS for modern gaming.",
        ProductLink: "./Pages/RTX-ProductPage.html"
    },
    {
        CardImage: "IMG/1g5mj5n342k-w1920.JPG",
        ProductTitle: "Corsair 16GB DDR4 RAM",
        ProductInfo: "High-speed memory ideal for gaming and productivity.",
        ProductLink: "./Pages/RamProductPage.html"
    },
    {
        CardImage: "IMG/69497bad4ee17796e702dd11.jpg",
        ProductTitle: "Intel Core i7-12700K",
        ProductInfo: "12-Core processor with high-performance gaming and multitasking support.",
        ProductLink: "./Pages/IntelProductPage.html"
    },
    {
        CardImage: "IMG/71liIYrRmkL._AC_UF894,1000_QL80_.jpg",
        ProductTitle: "NVIDIA RTX 4070",
        ProductInfo: "Powerful GPU with ray tracing and DLSS for modern gaming.",
        ProductLink: "./Pages/RTX-ProductPage.html"
    },
    {
        CardImage: "IMG/1g5mj5n342k-w1920.JPG",
        ProductTitle: "Corsair 16GB DDR4 RAM",
        ProductInfo: "High-speed memory ideal for gaming and productivity.",
        ProductLink: "./Pages/RamProductPage.html"
    },
    {
        CardImage: "IMG/69497bad4ee17796e702dd11.jpg",
        ProductTitle: "Intel Core i7-12700K",
        ProductInfo: "12-Core processor with high-performance gaming and multitasking support.",
        ProductLink: "./Pages/IntelProductPage.html"
    },
    {
        CardImage: "IMG/71liIYrRmkL._AC_UF894,1000_QL80_.jpg",
        ProductTitle: "NVIDIA RTX 4070",
        ProductInfo: "Powerful GPU with ray tracing and DLSS for modern gaming.",
        ProductLink: "./Pages/RTX-ProductPage.html"
    },
    {
        CardImage: "IMG/1g5mj5n342k-w1920.JPG",
        ProductTitle: "Corsair 16GB DDR4 RAM",
        ProductInfo: "High-speed memory ideal for gaming and productivity.",
        ProductLink: "./Pages/RamProductPage.html"
    },
    {
        CardImage: "IMG/69497bad4ee17796e702dd11.jpg",
        ProductTitle: "Intel Core i7-12700K",
        ProductInfo: "12-Core processor with high-performance gaming and multitasking support.",
        ProductLink: "./Pages/IntelProductPage.html"
    },
    {
        CardImage: "IMG/71liIYrRmkL._AC_UF894,1000_QL80_.jpg",
        ProductTitle: "NVIDIA RTX 4070",
        ProductInfo: "Powerful GPU with ray tracing and DLSS for modern gaming.",
        ProductLink: "./Pages/RTX-ProductPage.html"
    },
    {
        CardImage: "IMG/1g5mj5n342k-w1920.JPG",
        ProductTitle: "Corsair 16GB DDR4 RAM",
        ProductInfo: "High-speed memory ideal for gaming and productivity.",
        ProductLink: "./Pages/RamProductPage.html"
    },
    {
        CardImage: "IMG/69497bad4ee17796e702dd11.jpg",
        ProductTitle: "Intel Core i7-12700K",
        ProductInfo: "12-Core processor with high-performance gaming and multitasking support.",
        ProductLink: "./Pages/IntelProductPage.html"
    },
    {
        CardImage: "IMG/71liIYrRmkL._AC_UF894,1000_QL80_.jpg",
        ProductTitle: "NVIDIA RTX 4070",
        ProductInfo: "Powerful GPU with ray tracing and DLSS for modern gaming.",
        ProductLink: "./Pages/RTX-ProductPage.html"
    },
    {
        CardImage: "IMG/1g5mj5n342k-w1920.JPG",
        ProductTitle: "Corsair 16GB DDR4 RAM",
        ProductInfo: "High-speed memory ideal for gaming and productivity.",
        ProductLink: "./Pages/RamProductPage.html"
    }
];

function showProducts() {
    const container = document.getElementById("ProductCard");

    Products.forEach(product => {
        container.innerHTML += `
            <div class="card shadow-sm" style="width: 18rem;">
                <div class="product-img-wrapper">
                    <img src="${product.CardImage}" alt="${product.ProductTitle}">
                </div>

                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.ProductTitle}</h5>
                    <p class="card-text text-muted flex-grow-1">
                        ${product.ProductInfo}
                    </p>
                    <a href="${product.ProductLink}" class="btn btn-primary w-100">
                        View Product
                    </a>
                </div>
            </div>
        `;
    });
}

showProducts();

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("change", () => {
  document.documentElement.setAttribute(
    "data-bs-theme",
    toggle.checked ? "dark" : "light"
  );
});