let usernameRegister = document.getElementById("usernameRegister");
let passwordRegister = document.getElementById("passwordRegister");
let registerBtn = document.querySelector(".registerBtn")

registerBtn.addEventListener("click", function () {
    console.log(usernameRegister.value);
    console.log(passwordRegister.value);

    usernameRegister.value = "";
    passwordRegister.value = "";

});