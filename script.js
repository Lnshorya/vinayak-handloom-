const products = [

{
name:"Premium Bedsheet",
price:"₹799",
image:"products/bedsheet.jpg",
desc:"Soft cotton bedsheets available in many designs."
},

{
name:"Designer Curtains",
price:"₹650",
image:"products/curtain.jpg",
desc:"Stylish curtains for living room & bedroom."
},

{
name:"Winter Blanket",
price:"₹1200",
image:"products/blanket.jpg",
desc:"Warm and comfortable blankets."
},

{
name:"Pillows",
price:"₹350",
image:"products/pillow.jpg",
desc:"Comfortable sleeping pillows."
},

{
name:"Soft Towels",
price:"₹250",
image:"products/towel.jpg",
desc:"High quality cotton towels."
}

]

const grid = document.getElementById("productGrid")

products.forEach(p=>{

grid.innerHTML += `

<div class="product">

<img src="${p.image}">

<h3>${p.name}</h3>

<p>${p.desc}</p>

<h4>${p.price}</h4>

<a class="order-btn"
href="https://wa.me/917014171755?text=Hello I want ${p.name}">
Order on WhatsApp </a>

</div>

`

})
