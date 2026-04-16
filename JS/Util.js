const toggle = document.getElementById("themeToggle");

toggle.addEventListener("change", () => {
  document.documentElement.setAttribute(
    "data-bs-theme",
    toggle.checked ? "dark" : "light"
  );
});