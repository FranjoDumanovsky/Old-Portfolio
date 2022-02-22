const menuBtn = document.querySelector ('.menu-btn');
const mobileMenu = document.querySelector('.nav__mobile--list');
const htmlEl = document.querySelector('html');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        mobileMenu.style.display = "flex"
        htmlEl.style.overflow = "hidden"
        htmlEl.style.height = "100%"
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        mobileMenu.style.display = "none"
        htmlEl.style.overflow = "initial"
        htmlEl.style.height = "initial"
    }
})


const header = document.querySelector("header");
let lastKnownScrollPosition = 0;

function doSomething(scrollPos) {
    // Do something with the scroll position
  }
  
  document.addEventListener('scroll', function(e) {
    
  
    if (window.scrollY > 0) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
  });