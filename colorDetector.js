
// let bodyHeight = body.getBoundingClientRect().top + git.scrollTop





$(window).scroll(function(){

  let gitIcon = document.querySelector(".vertical-links #git-Icon");
  
  let gitIconBottomPosition = gitIcon.getBoundingClientRect().bottom;

  let serviceSectionTop = document.querySelector(".my-services").getBoundingClientRect().top;
  let serviceSectionBottom = document.querySelector(".my-services").getBoundingClientRect().bottom;
  let differenceTop = serviceSectionTop - gitIconBottomPosition;
  let differenceBottom = serviceSectionBottom - gitIconBottomPosition;

  let footerSectionTop = document.querySelector(".footer").getBoundingClientRect().top;
  let differencefromFooter = (footerSectionTop - gitIconBottomPosition) * -1;

  
  if(differencefromFooter > 10){
    gitIcon.classList.add('light')
    gitIcon.classList.remove('dark')

  } else if(differenceTop > 0 && differenceBottom > 0){
    gitIcon.classList.remove('light')
    gitIcon.classList.add('dark')

  } else if (differenceBottom > 0){
    gitIcon.classList.add('light')
    gitIcon.classList.remove('dark')
  }  
  else {
    gitIcon.classList.remove('light')
    gitIcon.classList.add('dark')
  }
});



$(window).scroll(function(){

  let linkedInIcon = document.querySelector(".vertical-links #ln-Icon");
  
  let linkedInIconBottomPosition = linkedInIcon.getBoundingClientRect().bottom;

  let serviceSectionTop = document.querySelector(".my-services").getBoundingClientRect().top;
  let serviceSectionBottom = document.querySelector(".my-services").getBoundingClientRect().bottom;
  let differenceTop = serviceSectionTop - linkedInIconBottomPosition;
  let differenceBottom = serviceSectionBottom - linkedInIconBottomPosition;

  let footerSectionTop = document.querySelector(".footer").getBoundingClientRect().top;
  let differencefromFooter = (footerSectionTop - linkedInIconBottomPosition) * -1;

  
  if(differencefromFooter > 10){
    linkedInIcon.classList.add('light')
    linkedInIcon.classList.remove('dark')

  } else if(differenceTop > 0 && differenceBottom > 0){
    linkedInIcon.classList.remove('light')
    linkedInIcon.classList.add('dark')

  } else if (differenceBottom > 0){
    linkedInIcon.classList.add('light')
    linkedInIcon.classList.remove('dark')
  }  
  else {
    linkedInIcon.classList.remove('light')
    linkedInIcon.classList.add('dark')
  }
});




$(window).scroll(function(){

  let mailIcon = document.querySelector(".vertical-links #mail-Icon");
  
  let mailIconBottomPosition = mailIcon.getBoundingClientRect().bottom;

  let serviceSectionTop = document.querySelector(".my-services").getBoundingClientRect().top;
  let serviceSectionBottom = document.querySelector(".my-services").getBoundingClientRect().bottom;
  let differenceTop = serviceSectionTop - mailIconBottomPosition;
  let differenceBottom = serviceSectionBottom - mailIconBottomPosition;

  let footerSectionTop = document.querySelector(".footer").getBoundingClientRect().top;
  let differencefromFooter = (footerSectionTop - mailIconBottomPosition) * -1;

  
  if(differencefromFooter > 10){
    mailIcon.classList.add('light')
    mailIcon.classList.remove('dark')

  } else if(differenceTop > 0 && differenceBottom > 0){
    mailIcon.classList.remove('light')
    mailIcon.classList.add('dark')

  } else if (differenceBottom > 0){
    mailIcon.classList.add('light')
    mailIcon.classList.remove('dark')
  }  
  else {
    mailIcon.classList.remove('light')
    mailIcon.classList.add('dark')
  }
});






$(window).scroll(function(){

  let linkedInIcon = document.querySelector(".vertical-links #ln-Icon");
  
  let linkedInIconBottomPosition = linkedInIcon.getBoundingClientRect().bottom;

  let serviceSectionTop = document.querySelector(".my-services").getBoundingClientRect().top;
  let serviceSectionBottom = document.querySelector(".my-services").getBoundingClientRect().bottom;
  let differenceTop = serviceSectionTop - linkedInIconBottomPosition;
  let differenceBottom = serviceSectionBottom - linkedInIconBottomPosition;

  let footerSectionTop = document.querySelector(".footer").getBoundingClientRect().top;
  let differencefromFooter = (footerSectionTop - linkedInIconBottomPosition) * -1;

  
  if(differencefromFooter > 10){
    linkedInIcon.classList.add('light')
    linkedInIcon.classList.remove('dark')

  } else if(differenceTop > 0 && differenceBottom > 0){
    linkedInIcon.classList.remove('light')
    linkedInIcon.classList.add('dark')

  } else if (differenceBottom > 0){
    linkedInIcon.classList.add('light')
    linkedInIcon.classList.remove('dark')
  }  
  else {
    linkedInIcon.classList.remove('light')
    linkedInIcon.classList.add('dark')
  }
});





