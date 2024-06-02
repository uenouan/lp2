// カルーセル
$('.voice__slick').slick({
  infinite: true,
  // autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  dots: true,
  // centerMode: true,
  // centerPadding: '0',
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
