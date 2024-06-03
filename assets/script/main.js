// カルーセル
$('.voice__slick').slick({
  infinite: true,
  // autoplay: true,
  // autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  dots: true,
  prevArrow: '<img src="assets/image/arrow_left_pc_01.png" class="slide-arrow prev-arrow">',
  nextArrow: '<img src="assets/image/arrow_right_pc_01.png" class="slide-arrow next-arrow">',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img src="assets/image/arrow_left_sp_01.png" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="assets/image/arrow_right_sp_01.png" class="slide-arrow next-arrow">',
      }
    }
  ]
});

// アコーディオン
$('.faq__answer').hide();
$('.faq__question .faq__arrow .faq__arrowUp').hide();
$('.faq__question').on('click', function (e) {

  var content = $(this).next();
  var arrowup = $(this).children().children('.faq__arrowUp');
  var arrowdown = $(this).children().children('.faq__arrowDown');

  content.slideToggle();
  arrowup.slideToggle(0);
  arrowdown.slideToggle(0);

});

// ページトップへ戻る
var buttonToTop = $('.footer__arrow');
var position = 0;
var speed = 600;

// ページトップへ戻るボタンをクリックしたら
buttonToTop.on('click', function() {
  // console.log('click');
  console.log(position);

  // アニメーションをしながらページトップに移動
  $("html, body").animate({
    scrollTop: position
  }, speed, "swing");
  return false;

});
