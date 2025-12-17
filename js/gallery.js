// Array of 24 products
const products = [
  { img: "https://i.imgur.com/oqSOkvG.jpeg", name: "3Kings Royal Heritage Shoe – Legacy Edition", price: "$150", link: "https://wa.me/8613631461664?text=I want to order 3Kings Royal Heritage Shoe" },
  { img: "https://i.imgur.com/btrDI0g.jpeg", name: "3Kings Royal Heritage Shoe – Legacy Edition", price: "$150", link: "https://wa.me/8613631461664?text=I want to order 3Kings Royal Heritage Shoe" },
  { img: "https://i.imgur.com/kX5WWVh.jpeg", name: "3Kings Executive Supreme – All-Day Comfort Edition", price: "$140", link: "https://wa.me/8613631461664?text=I want to order 3Kings Executive Supreme" },
  { img: "https://i.imgur.com/qBJ5B4y.jpeg", name: "3Kings Elite Pathfinder – Outdoor Travel Edition", price: "$130", link: "https://wa.me/8613631461664?text=I want to order 3Kings Elite Pathfinder" },
  { img: "https://i.imgur.com/6qu6iAL.jpeg", name: "3Kings Classic Monarch – Premium Office Edition", price: "$145", link: "https://wa.me/8613631461664?text=I want to order 3Kings Classic Monarch" },
  { img: "https://i.imgur.com/QGru2pM.jpeg", name: "3Kings Urban Runner – Street Style Edition", price: "$110", link: "https://wa.me/8613631461664?text=I want to order 3Kings Urban Runner" },
  { img: "https://i.imgur.com/d6GeQLo.jpeg", name: "3Kings Luxe Derby – Evening Formal Edition", price: "$155", link: "https://wa.me/8613631461664?text=I want to order 3Kings Luxe Derby" },
  { img: "https://i.imgur.com/aqhNFVA.jpeg", name: "3Kings Summer Breeze Sandal – Comfort Edition", price: "$75", link: "https://wa.me/8613631461664?text=I want to order 3Kings Summer Breeze Sandal" },
  { img: "https://i.imgur.com/4E9dHJL.jpeg", name: "3Kings All-Terrain Boot – Rugged Edition", price: "$160", link: "https://wa.me/8613631461664?text=I want to order 3Kings All-Terrain Boot" },
  { img: "https://i.imgur.com/TbE4dOM.jpeg", name: "3Kings Minimalist Slip-On – Everyday Edition", price: "$90", link: "https://wa.me/8613631461664?text=I want to order 3Kings Minimalist Slip-On" },
  { img: "https://i.imgur.com/oI5te73.jpeg", name: "3Kings Classic Loafer – Heritage Edition", price: "$135", link: "https://wa.me/8613631461664?text=I want to order 3Kings Classic Loafer" },
  { img: "https://i.imgur.com/kGJD7Ib.jpeg", name: "3Kings Nightfall Oxford – Executive Edition", price: "$150", link: "https://wa.me/8613631461664?text=I want to order 3Kings Nightfall Oxford" },
  { img: "https://i.imgur.com/Q8bDtTp.jpeg", name: "3Kings Coastal Loafer – Summer Edition", price: "$95", link: "https://wa.me/8613631461664?text=I want to order 3Kings Coastal Loafer" },
  { img: "https://i.imgur.com/RgpUeHS.jpeg", name: "3Kings Coastal Loafer – Summer Edition", price: "$95", link: "https://wa.me/8613631461664?text=I want to order 3Kings Coastal Loafer" },
  { img: "https://i.imgur.com/ApD9C17.jpeg", name: "3Kings Mountain Trek – Hiking Boot Edition", price: "$165", link: "https://wa.me/8613631461664?text=I want to order 3Kings Mountain Trek" },
  { img: "https://i.imgur.com/IPRmPuA.jpeg", name: "3Kings Regal Loafer – Premium Comfort Edition", price: "$140", link: "https://wa.me/8613631461664?text=I want to order 3Kings Regal Loafer" },
  { img: "https://i.imgur.com/n48gmZS.jpeg", name: "3Kings Regal Loafer – Premium Comfort Edition", price: "$140", link: "https://wa.me/8613631461664?text=I want to order 3Kings Regal Loafer" },
  { img: "https://i.imgur.com/JOoz1dI.jpeg", name: "3Kings Street Runner – Modern Sneaker Edition", price: "$120", link: "https://wa.me/8613631461664?text=I want to order 3Kings Street Runner" },
  { img: "https://i.imgur.com/cYtHpQ9.jpeg", name: "3Kings Heritage Monkstrap – Formal Edition", price: "$150", link: "https://wa.me/8613631461664?text=I want to order 3Kings Heritage Monkstrap" },
  { img: "https://i.imgur.com/EWIC78J.jpeg", name: "3Kings Voyager Sneaker – Travel Edition", price: "$115", link: "https://wa.me/8613631461664?text=I want to order 3Kings Voyager Sneaker" },
  { img: "https://i.imgur.com/iRxY6Jt.jpeg", name: "3Kings Voyager Sneaker – Travel Edition", price: "$115", link: "https://wa.me/8613631461664?text=I want to order 3Kings Voyager Sneaker" },
  { img: "https://i.imgur.com/OQtlivL.jpeg", name: "3Kings Royale Sandal – Summer Premium Edition", price: "$80", link: "https://wa.me/8613631461664?text=I want to order 3Kings Royale Sandal" },
  { img: "https://i.imgur.com/oFyWzya.jpeg", name: "3Kings Monarch Derby – Executive Office Edition", price: "$155", link: "https://wa.me/8613631461664?text=I want to order 3Kings Monarch Derby" }
];

// Generate gallery HTML
const gallery = document.getElementById("gallery");

products.forEach(product => {
  const div = document.createElement("div");
  div.classList.add("product");
  
  div.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <a href="${product.link}" target="_blank">Order</a>
  `;
  
  gallery.appendChild(div);
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.product img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
