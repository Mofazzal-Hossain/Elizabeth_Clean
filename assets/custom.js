const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

// If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },

// Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

// // And if we need scrollbar
// scrollbar: {
// el: '.swiper-scrollbar',
// },
}); 



$(window).scroll(function(){
  var sticky = $(".navbar");
  var scroll = $(window).scrollTop();

  if (scroll >= 80) {
    sticky.addClass("fixed animated slideInDown"); 
    sticky.removeClass("slideOutUp");
  }
  else {
    sticky.removeClass("fixed animated slideInDown");
    sticky.addClass("slideOutUp");
  }
});