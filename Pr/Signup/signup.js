
let username_input = document.getElementById("username");
let password_input = document.getElementById("password");
let signup_button = document.getElementById("signup");


// Lấy phần listUser ra trước 
let listUserLocalStorage = JSON.parse(localStorage.getItem("listUser"))
// Nếu chưa có thì tạo mới
if (listUserLocalStorage === null) {
    localStorage.setItem("listUser", JSON.stringify([]));
    window.location.reload();
}



signup_button.addEventListener("click", function () {
    console.log("username" + username_input.value);
    console.log("password" + password_input.value);


// Check tài khoản 
    let isDuplicate = false 
    for(let i = 0; i< listUserLocalStorage.length ; i++){
        if (listUserLocalStorage[i].username === username_input.value){
            isDuplicate = true;
        }
    }
        if (isDuplicate === true){
            alert("Tài Khoản đã tồn tại");
        } else{
            listUserLocalStorage.push({
                username: username_input.value,
                password: password_input.value
            });
            window.location.href = "/Login/login.html";
        // Lưu lại mảng vừa update vào localStorage
            localStorage.setItem("listUser", JSON.stringify(listUserLocalStorage));
            
            alert("Tạo tài khoản thành công ")
        }

    username_input.value = "";
    password_input.value = "";


});
