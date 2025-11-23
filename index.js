document.addEventListener("DOMContentLoaded", () => {
    // Sidebar toggle
    const arrows = document.querySelectorAll(".arrow");
    arrows.forEach(arrow => {
        arrow.addEventListener("click", (e) => {
            const arrowParent = e.target.parentElement.parentElement;
            arrowParent.classList.toggle("showMenu");
        });
    });

    const sidebar = document.querySelector(".sidebar");
    const sidebarBtn = document.querySelector(".bx-menu");
    if (sidebarBtn && sidebar) {
        sidebarBtn.addEventListener("click", () => {
            sidebar.classList.toggle("close");
        });
    }

    // Login form (only if it exists on this page)
    const form = document.getElementById("loginForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            console.log(`Email: ${email}, Password: ${password}`);
            window.location.href = "dashboard.html";
        });
    }

    // Submit button (if exists)
    const submitBtn = document.getElementById("submitButton");
    if (submitBtn) {
        submitBtn.addEventListener("click", () => {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            console.log(`Email: ${email}, Password: ${password}`);
        });
    }

    // Logout button (if exists)
    const logoutBtn = document.getElementById("goToLogin");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }
});
