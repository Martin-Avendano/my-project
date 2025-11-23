
let email;
let password;

document.getElementById("submitButton").onclick = function() {

       email =  document.getElementById("email").value;
       password = document.getElementById("password").value;
       console.log(`Email: ${email}, Password: ${password}`);
        
}



document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // stop default refresh

        console.log("Form submitted! Redirecting...");

        window.location.href = "dashboard.html";
    });
});
