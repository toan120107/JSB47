let username = localStorage.getItem("username");
let name = document.getElementById("name");
name.innerText = username;



const PRODUCTS = [
  {
    id: 1,
    title: 'Minecraft: Mob Squad Hardcover Book',
    price: '99.99',
    image: 'https://shop.minecraft.net/cdn/shop/products/MCRF-DMDSWD-3_1800x1800.jpg?v=1618538601',
    description: 'Come with the Mob Squad on an amazing adventure through the Overworld in this official Minecraft',
    p:'$'
  
  },
  {
    id: 2,
    title: 'Minecraft Creeper Plush - 8 Inches - Mattel',
    price: '12.09',
    image: 'https://shop.minecraft.net/cdn/shop/products/MCMATTEL-CREEPERPLUSH-1_1800x1800.png?v=1622666343',
    description: 'Made from a variety of fabrics and textiles',
    icon:'$'
  
  },
  {
    id: 3,
    title: 'Minecraft 15th Anniversary Vintage Summer Band Comfort Colors Adult T-Shirt',
    price: '1.99',
    image: 'https://shop.minecraft.net/cdn/shop/files/MC-VSB_50_101699_LAGOON-BLUE_MF_8d5005e5-a9f9-4d83-a97d-6f2b209722cf_1800x1800.jpg?v=1713970802',
    description: 'Garment-dyed, pre-shrunk fabric',
    icon:'$'
  
  },
  {
    id: 4,
    title: 'Minecraft 15th Anniversary Vintage Summer Band Comfort Colors Adult T-Shirt',
    price: '21.78',
    image: 'https://shop.minecraft.net/cdn/shop/files/MC-CRCH_50_100926_BLACK_MF_5acddacc-b2ad-4084-97f1-9259360fec37_1800x1800.jpg?v=1715779166',
    description: 'Garment-dyed, pre-shrunk fabric',
    icon:'$'
  
  },
  {
    id: 5,
    title: 'Minecraft: Minecraft Diamond Ore Table Lamp - 14 Inch',
    price: '241.78',
    image: 'https://shop.minecraft.net/cdn/shop/products/886388161065Minecraft-Multi-Diamond-Ore-Yanker-Table-Lamp-merch2-3_1800x1800.jpg?v=1612801565',
    description: 'Garment-dyed, pre-shrunk fabric',
    icon:'$'
  
  },
  {
    id: 6,
    title: 'Minecraft Enderman Big Face Personalized Black Mug',
    price: '11.78',
    image: 'https://shop.minecraft.net/cdn/shop/products/MC-PF-ENDER-100085-15-MF_34a8ffb2-3f81-4c37-96b1-668615c01c0a_1800x1800.png?v=1649884514',
    description: 'Garment-dyed, pre-shrunk fabric',
    icon:'$'
  
  },

]


const bt1AddCart = document.getElementById('addCart')

if (username == null) {
    window.location.href = "/Login/login.html";
}

let logout = document.getElementById("logout")
logout.addEventListener("click", function () {
    localStorage.clear()
    window.location.reload()
});



let container = document.getElementsByClassName("product")
console.log(container)

for (let i = 0; i <PRODUCTS.length; i++) {
    let product_box = document.createElement("div")
    product_box.className = "product_box"
    product_box.dataset.id = PRODUCTS.id
    product_box.innerHTML = `
    <img src="${PRODUCTS[i].image}">
    <div class="product_title">
        <h5 >${PRODUCTS[i].title}</h5>
    </div>
    <br><br>
    <span class="product_price">${PRODUCTS[i].price}$</span><br>
   <button class="product_buy">Buy</button>
    
    `
    container[0].appendChild(product_box)

}


function save_clicked_product_localStorage(product) {
    localStorage.setItem("currentProduct", JSON.stringify(product))
    window.location.href = "../Product/buy.html"
}




let viewdetail_button = document.getElementsByClassName("product_buy")
console.log(viewdetail_button);


for (let i = 0; i < viewdetail_button.length; i++) {
    viewdetail_button[i].addEventListener("click", function () {

        save_clicked_product_localStorage(PRODUCTS[i])
    })

}

console.log(PRODUCTS);