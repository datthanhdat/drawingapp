$('.collapse ul li:nth-child(1) a').click(function (e) { 
    e.preventDefault();
    console.log($('.chap-1').offset().top);
    $('html,body').animate({scrollTop:$('.chap-1').offset().top},1000)
  });

  $('.collapse ul li:nth-child(2) a').click(function (e) { 
    e.preventDefault();
    console.log($('.chap-1').offset().top);
    $('html,body').animate({scrollTop:$('.chap-2').offset().top},1000)
  });

  $('.collapse ul li:nth-child(3) a').click(function (e) { 
    e.preventDefault();
    console.log($('.chap-1').offset().top);
    $('html,body').animate({scrollTop:$('.chap-3').offset().top},1000)
  });