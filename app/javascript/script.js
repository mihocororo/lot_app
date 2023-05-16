

  // 画像をクリックしたら発動
  // $('div.kuji_btn').on('click', function() {
// var random = Math.floor(Math.random() * $('.kuji').length);
// $('.kuji').hide().eq(random).show();
// });

    // Swiperのオプションを定数化
const opt = {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
}

// Swiperを実行(初期化)
$(document).on('turbolinks:load', function() {
    let swiper = new Swiper('.swiper',opt);
});

