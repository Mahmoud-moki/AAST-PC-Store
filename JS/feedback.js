function showCartPopup() {
  const popup = document.getElementById("cartPopup");
  popup.classList.add("show");
  setTimeout(() => {
    popup.classList.remove("show");
  }, 3000);
  console.log("Test");
}
