
let name = document.getElementById("name")
let username = localStorage.getItem("username")
name.innerText = username;
if (username == null) {
    window.location.href = "/signup/signup.html"
}

let logout = document.getElementById("logout")
logout.addEventListener("click", function () {
    localStorage.clear()
    window.location.reload()

});


let currentProducts = JSON.parse(localStorage.getItem("currentProduct"))
console.log(currentProducts);

let product_title = document.getElementById("title1")
product_title.innerText = currentProducts.title

let product_price = document.getElementById("price1")
product_price.innerText = currentProducts.price

let image = document.getElementById("image1")
image.src = currentProducts.image






 let cart = JSON.parse(localStorage.getItem('cart')) || [];
 const exchangeRate = 24000;

 function updateCartUI() {
     const cartItems = document.getElementById('cartItems');
     const totalPrice = document.getElementById('totalPrice');
     cartItems.innerHTML = '';
     let total = 0;

     cart.forEach((item, index) => {
         total += item.price * item.quantity;


         const li = document.createElement('li');
         li.innerHTML = `
             <span>${item.name} (${item.quantity})</span>
             <span>${(item.price * item.quantity).toFixed(2)}đ</span>
             <button onclick="removeFromCart(${index})">Xóa</button>
         `;
         cartItems.appendChild(li);
       
     });



     totalPrice.textContent = total.toLocaleString();
     localStorage.setItem('cart', JSON.stringify(cart));
 }


 function addToCart(name, price) {
     const quantity = document.getElementById('productQuantity').value;
     if (quantity <= 0) return;


     const existingItem = cart.find(item => item.name === name);
     if (existingItem) {
         existingItem.quantity += parseInt(quantity);
     } else {
         cart.push({ name, price, quantity: parseInt(quantity) });
     }

     updateCartUI();
 }


 function removeFromCart(index) {
     cart.splice(index, 1);
     updateCartUI();
 }


 function clearCart() {
     cart = [];
     updateCartUI();
 }

 function toggleCart() {
     const cartPopup = document.getElementById('cartPopup');
     cartPopup.style.display = cartPopup.style.display === 'none' || cartPopup.style.display === '' ? 'block' : 'none';
 }


 document.addEventListener('DOMContentLoaded', updateCartUI);
    




