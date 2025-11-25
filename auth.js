function registerUser(name, email, password) {
    let users = JSON.parse(localStorage.getItem("users")) || [];

   
    if (users.some(u => u.email === email)) {
        alert("Email already registered!");
        return false;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    return true;
}

function loginUser(email, password) {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        return true;
    }
    return false;
}


if (document.getElementById("registerForm")) {
    document.getElementById("registerForm").addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (registerUser(name, email, password)) {
            alert("Registration successful!");
            window.location.href = "login.html";
        }
    });
}


if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", function(e) {
        e.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (loginUser(email, password)) {
            alert("Login successful!");
            window.location.href = "index.html"; 
        } else {
            alert("Invalid email or password!");
        }
    });
}

function protectPage() {
    let user = localStorage.getItem("loggedInUser");
    if (!user) {
        alert("Please login first!");
        window.location.href = "login.html";
    }
}
