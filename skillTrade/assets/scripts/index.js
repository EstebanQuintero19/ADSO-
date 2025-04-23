document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-darkmode");

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            toggleButton.classList.remove("btn-light");
            toggleButton.classList.add("btn-dark");
            toggleButton.innerHTML = '<i class="bi bi-sun-fill"></i>';
        } else {
            toggleButton.classList.remove("btn-dark");
            toggleButton.classList.add("btn-light");
            toggleButton.innerHTML = '<i class="bi bi-moon-fill"></i>';
        }
    });

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!email || !password) {
            alert("Por favor completa todos los campos.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Ingresa un correo electrónico válido.");
            return;
        }

        if (email === "admin@gmail.com" && password === "admin123") {
            window.location.href = "adminpanel.html";
        } else {
            alert("Correo o contraseña incorrectos.");
        }
    });

    const googleBtn = document.querySelector(".google-btn");
    if (googleBtn) {
        googleBtn.addEventListener("click", () => {
            alert("Función de Google no implementada... aún");
        });
    }
});

window.addEventListener("scroll", () => {
    const scrollTopBtn = document.getElementById("btn-scroll-top");
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}