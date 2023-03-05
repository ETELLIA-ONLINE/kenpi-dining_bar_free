

  const swiper = new Swiper(".swiper", {
    slidesPerView: 4/* この行を追加 */,
    // ページネーションが必要なら追加
    pagination: {
      el: ".swiper-pagination"
    },
  
    // ナビボタンが必要なら追加
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      "@0.75": {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      "@1.00": {
        slidesPerView: 4,
        spaceBetween:45,
      },
    },


  });





