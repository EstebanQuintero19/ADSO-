document.addEventListener("DOMContentLoaded", () => {
  // — Toggle Dark Mode —
  const toggleButton = document.getElementById("toggle-darkmode");
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      toggleButton.classList.replace("btn-light", "btn-dark");
      toggleButton.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
      toggleButton.classList.replace("btn-dark", "btn-light");
      toggleButton.innerHTML = '<i class="bi bi-moon-fill"></i>';
    }
  });

  // — Login Form —
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    if (!email || !password) {
      return alert("Por favor completa todos los campos.");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return alert("Ingresa un correo electrónico válido.");
    }
    if (email === "admin@gmail.com" && password === "admin123") {
      return (window.location.href = "adminpanel.html");
    }
    alert("Correo o contraseña incorrectos.");
  });

  // — Google Button Placeholder —
  const googleBtn = document.querySelector(".google-btn");
  if (googleBtn) {
    googleBtn.addEventListener("click", () =>
      alert("Función de Google no implementada... aún")
    );
  }

  // — Carrito, Toast y Badge —
  const cart = [];
  const cartList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartModalEl = document.getElementById("cartModal");
  const badgeEl = document.getElementById("cart-count");
  const toastEl = document.getElementById("addedToast");

  document.querySelectorAll(".btn-cart").forEach((btn) => {
    btn.addEventListener("click", () => {
      // 1) Agregar al array
      const card = btn.closest(".card-course");
      const title = card
        .querySelector(".card-title-tittle h4")
        .innerText.trim();
      const priceText = card.querySelector(".btn-price").innerText.trim();
      const price = parseFloat(priceText.replace(/[^\d]/g, ""));
      cart.push({ title, price });

      // badge
      badgeEl.innerText = cart.length;
      badgeEl.classList.toggle("d-none", cart.length === 0);

      // toast
      new bootstrap.Toast(toastEl).show();
    });
  });

  // 4) Renderizar carrito
  cartModalEl.addEventListener("show.bs.modal", () => {
    cartList.innerHTML = "";
    cart.forEach((item) => {
      const li = document.createElement("li");
      li.className =
        "list-group-item d-flex justify-content-between align-items-center";
      li.innerHTML = `
        ${item.title}
        <span>${item.price.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
        })}</span>
      `;
      cartList.appendChild(li);
    });
    const total = cart.reduce((sum, itm) => sum + itm.price, 0);
    cartTotal.innerText = total.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
    });
  });
});

// — Scroll to Top Button —
window.addEventListener("scroll", () => {
  const btn = document.getElementById("btn-scroll-top");
  btn.style.display = window.scrollY > 300 ? "block" : "none";
});
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
