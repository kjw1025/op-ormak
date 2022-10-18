// html, css, js 로딩완료
$(document).ready(function () {
  // modal 기능
  let modalWrap = $(".modal-wrap");
  let modalClose = "modal-close-active";
  let modalCloseBt = $(".modal-close");
  modalCloseBt.click(() => {
    modalWrap.addClass(modalClose);
  });
});

// html, css, js, 멀티미디어까지 로딩완료
window.onload = function () {
  // visual 슬라이드
  new Swiper(".sw-visual", {
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 1000,
    effect: "fade",

    // pg
    pagination: {
      el: ".sw-visual-pg",
    },
  });

  // 메뉴 열기 기능
  $(".l-top-menu").click(function (e) {
    e.preventDefault();
    $(".maingnb").toggleClass("maingnb-open");
    $(".menu-dim").toggleClass("menu-dim-open");
  });

  // 메뉴 닫기 기능
  $(".close-bt").click(function (e) {
    e.preventDefault();
    $(".maingnb").removeClass("maingnb-open");
    $(".menu-dim").removeClass("menu-dim-open");
  });

  $(".menu-dim").click(function (e) {
    e.preventDefault();
    $(".maingnb").removeClass("maingnb-open");
    $(".menu-dim").removeClass("menu-dim-open");
  });

  // === 데이터 통신 ===
  let dataArr = [];

  // 데이터 받기
  function fetchData() {
    axios
      .get("data/foodList.json")
      .then((res) => {
        dataArr.push(res.data.bastFood);
        dataArr.push(res.data.newFood);

        makeFoodItem(0, "food-container1");
        makeFoodItem(1, "food-container2");
      })
      .catch((err) => console.log(err));
  }
  fetchData();

  // 데이터 출력
  function makeFoodItem(_index, _parentId) {
    let data = dataArr[_index];
    let tempHtml = "";

    for (i = 0; i < data.length; i++) {
      temp = `
              <div class="food-item">
                <a href="#">
                  <img src="images/${data[i].foodimg}" alt="음식사진" />
                  <p class="food-item-title">${data[i].foodTitle}</p>
                </a>
                <span class="food-item-price">${data[i].foodPrice}</span>
              </div>
      `;
      tempHtml += temp;
    }
    document.getElementById(_parentId).innerHTML = tempHtml;
  }
};
