

if (window.matchMedia('(max-width: 768px)').matches) {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1/* この行を追加 */,
    // ページネーションが必要なら追加
    pagination: {
      el: ".swiper-pagination"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
});
} 
else if (window.matchMedia('(min-width:768px)').matches) {
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
    }
  });
}