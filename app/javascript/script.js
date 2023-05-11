$(function() {
 function omikuji() {
  const cont = Math.ceil(Math.random()*3);
  if(cont == 1){
    $(".omikuji_name").html("大吉が出ました");
    $(".omikuji_text").html("大吉が出ました！おめでとうございます！テキストテキストテキストテキストテキストテキストテキストテキスト");
    $(".omikuji_img").attr("src","https://f.uploader.xzy.pw/eu-prd/upload/20191108160744_61514c415a.jpg");
}
    if(cont == 2){
    $(".omikuji_name").html("中吉が出ました");
    $(".omikuji_text").html("中吉が出ました！やったね！テキストテキストテキストテキストテキストテキストテキストテキスト");
    $(".omikuji_img").attr("src","https://f.uploader.xzy.pw/eu-prd/upload/20191108160418_5165755153.jpg");
}
    if(cont == 3){
    $(".omikuji_name").html("小吉が出ました");
    $(".omikuji_text").html("小吉が出ました！もうひとふんばり！テキストテキストテキストテキストテキストテキストテキストテキスト");
    $(".omikuji_img").attr("src","https://f.uploader.xzy.pw/eu-prd/upload/20191108160447_6f6d664c4f.jpg");
}
 }


    $(".omiguji_btn").on("click",function () {
        omikuji();
    });
    });

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