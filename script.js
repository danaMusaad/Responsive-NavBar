const navbar = document.querySelector(".navbar");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const meanu = document.querySelector(".meanu");

meanu.addEventListener("click", () => {
bars.classList.toggle("active");
xmark.classList.toggle("active");
navbar.classList.toggle("active");

})
