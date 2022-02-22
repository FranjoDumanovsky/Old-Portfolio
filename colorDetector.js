$(window).scroll(function(){
	if($(window).scrollTop() >= 0 && $(window).scrollTop() < 520){
  	$(".vertical-links #git-Icon").addClass('dark');
      $(".vertical-links #git-Icon").removeClass('light');
  } else if ($(window).scrollTop() > 520 && $(window).scrollTop() < 1400)  {
    $(".vertical-links #git-Icon").addClass('light');
    $(".vertical-links #git-Icon").removeClass('dark');
  } else if ($(window).scrollTop() > 1401 && $(window).scrollTop() < 1600) {
    $(".vertical-links #git-Icon").addClass('dark');
    $(".vertical-links #git-Icon").removeClass('light');  
  } else {
    $(".vertical-links #git-Icon").addClass('light)');  
    $(".vertical-links #git-Icon").removeClass('dark');
  }
});


$(window).scroll(function(){
	if($(window).scrollTop() >= 0 && $(window).scrollTop() < 460){
  	$(".vertical-links #ln-Icon").addClass('dark');
      $(".vertical-links #ln-Icon").removeClass('light');
  } else if ($(window).scrollTop() > 460 && $(window).scrollTop() < 1400)  {
    $(".vertical-links #ln-Icon").addClass('light');
    $(".vertical-links #ln-Icon").removeClass('dark');
  } else if ($(window).scrollTop() > 1401 && $(window).scrollTop() < 1600) {
    $(".vertical-links #ln-Icon").addClass('dark');
    $(".vertical-links #ln-Icon").removeClass('light');  
  } else {
    $(".vertical-links #ln-Icon").addClass('light)');  
    $(".vertical-links #ln-Icon").removeClass('dark');
  }
});


$(window).scroll(function(){
	if($(window).scrollTop() >= 0 && $(window).scrollTop() < 400){
  	$(".vertical-links #mail-Icon").addClass('dark');
      $(".vertical-links #mail-Icon").removeClass('light');
  } else if ($(window).scrollTop() > 400 && $(window).scrollTop() < 1400)  {
    $(".vertical-links #mail-Icon").addClass('light');
    $(".vertical-links #mail-Icon").removeClass('dark');
  } else if ($(window).scrollTop() > 1401 && $(window).scrollTop() < 1600) {
    $(".vertical-links #mail-Icon").addClass('dark');
    $(".vertical-links #mail-Icon").removeClass('light');  
  } else {
    $(".vertical-links #mail-Icon").addClass('light)');  
    $(".vertical-links #mail-Icon").removeClass('dark');
  }
});

