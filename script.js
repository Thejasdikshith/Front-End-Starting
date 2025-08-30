document.addEventListener("DOMContentLoaded", () => {
  let total = 0;
  const totalAmount = document.getElementById("total-amount");
  const checkoutBtn = document.getElementById("checkout-btn");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const price = parseFloat(btn.getAttribute("data-price"));
      total += price;
      totalAmount.textContent = "Total: $" + total.toFixed(2);
    });
  });

  checkoutBtn.addEventListener("click", () => {
    total = 0;
    totalAmount.textContent = "Total: $0.00";
    alert("Checkout successful!");
  });
});
