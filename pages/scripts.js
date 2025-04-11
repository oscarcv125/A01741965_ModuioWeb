
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const validUsername = "admin";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
        alert("Login successful! Redirecting to the homepage...");
        window.location.href = "homepage.html";
    } else {
        alert("Error: Invalid username or password. Please try again.");
    }
}

function handleButtonClick(buttonId) {
    alert(`Button with ID '${buttonId}' was clicked!`);
}

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            validateLogin();   
        });
    }

    const otherButtons = document.querySelectorAll('.otherButton');
    otherButtons.forEach(button => {
        button.addEventListener('click', () => handleButtonClick(button.id));
    });
});
