
let username_input = document.getElementById("username");
let password_input = document.getElementById("password");
let signup_button = document.getElementById("signup");


signup_button.addEventListener("click", function flase () {
    console.log("username: " + username_input.value);
    console.log("password: " + password_input.value);
// nếu đúng sẽ chạy tiếp dòng bên dưới
    if (username_input.value == "" && password_input.value == "") {
        alert("Missing both parts ")
    }

    else if (username_input.value == "") {
        alert("Missing login section")
    }
    else if (password_input.value == "") {
        alert("Lack of Password")
    }
    else {
        localStorage.setItem("password", password_input.value);
        localStorage.setItem("username", username_input.value);

        // chuyển trang 
        window.location.href = "/Tlauncher/tlauncher.html";
    }
});
