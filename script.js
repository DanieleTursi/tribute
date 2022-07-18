const hamburger= document.querySelector(".hamburger");
const navMenu= document.querySelector(".links");

hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=>{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

window.addEventListener("hashchange", function () {
  window.scrollTo(window.scrollX, window.scrollY - 150);
});