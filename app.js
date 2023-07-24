// for altering images

const images = [
  "https://imgd.aeplcdn.com/1056x594/n/zyqpqsa_1477521.jpg?q=75&wm=1",
  "https://imgd.aeplcdn.com/1056x594/n/e0npqsa_1477517.jpg?q=75&wm=1",
  "https://imgd.aeplcdn.com/1056x594/n/bqopqsa_1477518.jpg?q=75&wm=1",
];

const carImg = document.querySelector(".car_img");

console.log(carImg.src);

const btns = document.querySelectorAll(".clr-btn");
console.log(btns);

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const col = btn.getAttribute("id");

    console.log(images[col - 1]);
    carImg.src = images[col - 1];
  });
});

// for altering the content of the cart

const cart_btn = document.querySelector(".cart_btn");

cart_btn.addEventListener("click", () => {
  cart_btn.textContent = "Added to Cart";
});
