


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

$(function() {
  $('#back a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});


// $(function() {
//     $('#roll').on('click',function(event){
//       $('').animate({

//       })
//     })
// })


$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});


// お天気
// （API_KEY には、"取得したAPIキー" を記述）
const API_KEY = "314821146a59f73dd669c2aff523e59a";

$(function(){
  $('#btn').on('click', function() {
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    }).done(function (data){
      //通信成功
      // 位置
      $('#place').text(data.name);
      // 最高気温
      $('#temp_max').text(data.main.temp_max);
      // 最低気温
      $('#temp_min').text(data.main.temp_min);
      //湿度
      $('#humidity').text(data.main.humidity);
      //風速
      $('#speed').text(data.wind.speed);
      // 天気
      $('#weather').text(data.weather[0].main);
      // 天気アイコン
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);    }).fail(function (data) {
      //通信失敗
      alert('通信に失敗しました。');
    });
  });
});


$(function(){
    var boxArea = $('.box'),
    show = 150;

    boxArea.css({display:'block',opacity:'0'});

    $(window).on('scroll',function(){
        boxArea.each(function(){
            var set = $(this),
            areaTop = set.offset().top;

            if ($(window).scrollTop() >= (areaTop + show) - $(window).height()){
                set.stop().animate({opacity:'1'},300);
            } else {
                set.stop().animate({opacity:'0'},300);
            }
        });
    });
});


$(function() {
  var width = $(window).width();
  $(".demo").css({height: width / 4.5});
  $(window).on("resize", function() {
    width = $(window).width();
    $(".demo").css({height: width / 1.5});
  });
  var num = 0;
  var img = $(".demo img");
  var max = 8;
  var speed = 150;
  // 歩いているアニメ
  setInterval(function() {
    num++
    img.attr({src: 'img/' + num + '.png'});
    if(num == max) {num = 0;}
  }, speed);

  // カーソルで移動
  var len = 0;
  $(window).on('mousemove', function(e) {
    width = $(window).width();
    if(e.clientX / width * 100 < len ){
      // 体の向きを左へ
      img.css({transform: "translateX(-50%) scale(-1, 1)"});
    }else{
      // 体の向きを右へ
      img.css({transform: "translateX(-50%)"});
    }
    len = e.clientX / width * 100;
    if(len <= 100 && len >= 0) {
      // 0% ~ 100%までは移動可能
      $(".demo span, .demo img").css({left: len + "%"});
    }
  });
});