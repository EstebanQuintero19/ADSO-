document.addEventListener("DOMContentLoaded", () => {
    const ctxEarnings = document.getElementById("earningsChart").getContext("2d");
    new Chart(ctxEarnings, {
        type: "line",
        data: {
            labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
            datasets: [{
                label: "Ganancias",
                data: [40000, 42000, 45000, 47000, 49000, 52000],
                borderColor: "#5a2d7b",
                backgroundColor: "rgba(90, 45, 123, 0.1)",
                tension: 0.3,
                fill: true,
                pointBackgroundColor: "#7c48a1",
                pointBorderColor: "#fff",
                pointHoverRadius: 6
            }]
        },
        options: {
            plugins: { legend: { labels: { color: "#5a2d7b", font: { weight: "bold" } } } },
            scales: {
                x: { ticks: { color: "#5a2d7b" } },
                y: { ticks: { color: "#5a2d7b" } }
            }
        }
    });

    const ctxRevenue = document.getElementById("revenueSourcesChart").getContext("2d");
    new Chart(ctxRevenue, {
        type: "bar",
        data: {
            labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
            datasets: [{
                label: "Intercambios",
                data: [30, 40, 35, 50, 60, 55],
                backgroundColor: "#7c48a1",
                borderRadius: 10,
                borderSkipped: false
            }]
        },
        options: {
            plugins: { legend: { labels: { color: "#7c48a1", font: { weight: "bold" } } } },
            scales: {
                x: { ticks: { color: "#7c48a1" } },
                y: { ticks: { color: "#7c48a1" } }
            }
        }
    });


    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll("#sidebar .nav-link");

    function showSectionFromHash() {
        const hash = window.location.hash || "#dashboard";
        const targetId = hash.substring(1);

        sections.forEach(section => {
            section.style.display = section.id === targetId ? "block" : "none";
            section.style.opacity = section.id === targetId ? "1" : "0";
        });

        navLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === hash);
        });

        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    }

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const hash = link.getAttribute("href");
            history.pushState(null, null, hash);
            showSectionFromHash();
        });
    });

    window.addEventListener("hashchange", showSectionFromHash);
    showSectionFromHash();


    const courseForm = document.getElementById("addCourseForm");
    const courseTable = document.querySelector("#courses-list");

    courseForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const newId = Date.now().toString().slice(-4);

        const nombre = document.getElementById("courseName").value;
        const descripcion = document.getElementById("courseDescription").value;
        const categoria = document.getElementById("courseCategory").value;
        const fecha = document.getElementById("courseDate").value;
        const hora = document.getElementById("courseTime").value;
        const sesiones = document.getElementById("courseSessions").value;
        const usuario = document.getElementById("courseUser").value;
        const estado = document.getElementById("courseState").value;
        const costo = document.getElementById("coursePrice").value;

        const badgeClass =
            estado === "Publicado" ? "badge bg-success" :
                estado === "Borrador" ? "badge bg-secondary" :
                    "badge bg-warning text-dark";

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
        <td>${newId}</td>
        <td>${nombre}</td>
        <td>${descripcion}</td>
        <td>${categoria}</td>
        <td>${fecha}</td>
        <td>${hora}</td>
        <td>${sesiones}</td>
        <td>${usuario}</td>
        <td><span class="${badgeClass}">${estado}</span></td>
        <td>$${costo}</td>
        <td>
            <button class="btn btn-sm btn-primary"><i class="bi bi-eye"></i></button>
            <button class="btn btn-sm btn-danger"><i class="bi bi-trash"></i></button>
            <button class="btn btn-sm btn-warning"><i class="bi bi-pencil"></i></button>
        </td>
    `;

        courseTable.appendChild(newRow);
        bootstrap.Modal.getInstance(document.getElementById("addCourseModal")).hide();
        courseForm.reset();
    });

    const userForm = document.getElementById("addUserForm");
    const userTable = document.querySelector("#usuarios table tbody");
    let userIdCounter = userTable.rows.length + 1;

    userForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("userName").value;
        const username = document.getElementById("userUsername").value;
        const email = document.getElementById("userEmail").value;
        const date = document.getElementById("userDate").value;
        const subscription = document.getElementById("userSubscription").value;

        const badgeClass = subscription === "Activa" ? "bg-success" : "bg-secondary";

        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${userIdCounter++}</td>
        <td>${name}</td>
        <td>${username}</td>
        <td>${email}</td>
        <td>${date}</td>
        <td>0</td>
        <td>0</td>
        <td><span class="badge ${badgeClass}">${subscription}</span></td>
        <td>
            <button class="btn btn-sm btn-primary"><i class="bi bi-eye"></i></button>
            <button class="btn btn-sm btn-warning"><i class="bi bi-pencil"></i></button>
            <button class="btn btn-sm btn-danger"><i class="bi bi-trash"></i></button>
        </td>
    `;

        userTable.appendChild(row);
        bootstrap.Modal.getInstance(document.getElementById("addUserModal")).hide();
        userForm.reset();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const logoutLink = document.getElementById("logoutLink");
    const confirmLogoutBtn = document.getElementById("confirmLogoutBtn");
    const logoutModal = new bootstrap.Modal(document.getElementById("logoutConfirmModal"));

    if (logoutLink) {
        logoutLink.addEventListener("click", (e) => {
            e.preventDefault();
            logoutModal.show();
        });
    }

    if (confirmLogoutBtn) {
        confirmLogoutBtn.addEventListener("click", () => {
            window.location.href = "../../index.html"; 
        });
    }
});
