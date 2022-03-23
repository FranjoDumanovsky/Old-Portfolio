const menuBtn = document.querySelector ('.menu-btn');
const mobileMenu = document.querySelector('.nav__mobile--list');
const htmlEl = document.querySelector('html');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        mobileMenu.classList.add("active");

        htmlEl.style.overflow = "hidden"
        htmlEl.style.height = "100%"
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        htmlEl.style.overflow = "initial"
        htmlEl.style.height = "initial"
        mobileMenu.classList.remove("active");
    }
})




  // After e-mail copy button is clicked, this coppies the email
  const mailCopyButton = document.getElementById("copy-email-button");
  const coppiedEmailMessage = document.querySelector(".coppied-email-message")

  mailCopyButton.addEventListener("click", async (event) =>  {
    const content = "franjodumanovsky@gmail.com";
    await navigator.clipboard.writeText(content);
    coppiedEmailMessage.classList.add("animated")

    setTimeout(function(){
        coppiedEmailMessage.classList.remove("animated")
    }, 2500)
  })


  
// Close mobile menu

  var mobileLinks = document.querySelectorAll(".nav__desktop--item");

  for (i = 0; i < mobileLinks.length; i++) {
      mobileLinks[i].addEventListener("click", function() {
        menuBtn.classList.remove('open');
        menuOpen = false;
        mobileMenu.classList.remove("active");
        htmlEl.style.overflow = "initial"
        htmlEl.style.height = "initial"
    })
  }