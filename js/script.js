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


  // 메뉴 열기 기능
  $('.l-top-menu').click(function (e) {
    e.preventDefault();
    $('.maingnb').toggleClass('maingnb-open');
    $('.menu-dim').toggleClass('menu-dim-open');
  });

  // 메뉴 닫기 기능
  $('.close-bt').click(function (e) {
    e.preventDefault();
    $('.maingnb').removeClass('maingnb-open');
    $('.menu-dim').removeClass('menu-dim-open');
  });

  $('.menu-dim').click(function (e) {
    e.preventDefault();
    $('.maingnb').removeClass('maingnb-open');
    $('.menu-dim').removeClass('menu-dim-open');
  });
};




// 모바일 메뉴 기능
// .mb-bt 를 저장해서 활용하자.
// $('.mb-bt').click(function (e) {
//   e.preventDefault();
//   $(this).toggleClass('mb-bt-open');
//   $('.mb-dim').toggleClass('mb-dim-open');
//   $('.mb-wrap').toggleClass('mb-wrap-open');
// });

// $('.mb-bt').removeClass('mb-bt-open');