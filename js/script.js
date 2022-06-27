// html, css, js 로딩완료
$(document).ready(function () {

});



// html, css, js, 멀티미디어까지 로딩완료
window.onload = function () {

  // visual 슬라이드
  new Swiper('.sw-visual', {
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 1000,
    effect: "fade",

    // pg
    pagination: {
      el: '.sw-visual-pg',
    }

  });


}