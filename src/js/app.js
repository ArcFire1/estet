;
$(document).foundation();

(function ($) {
  "use strict";
  $(function () {

    /** fix bug equalizer */
    if ($('[data-equalizer]').length) {
      Foundation.reInit('equalizer');
    }

    /** .quant input activity */
    $('.quant').each(function () {
      const $input = $(this).find('.quant__input');
      let currentNum = Math.max(+$input.val(), 0);
      $(this).find('.quant__plus').on('click', function () {
        $input.val(++currentNum);
      });

      $(this).find('.quant__minus').on('click', function () {
        if (currentNum >= 2) {
          $input.val(--currentNum);
        }
      });
    });

    /** Carousel */
    $(".main-carousel").slick({
      infinite: true,
      dots: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><img class="slick-arrows" src="./images/slider-arrow.svg" alt="arrow"></button>',
      nextArrow: '<button type="button" class="slick-next"><img class="slick-arrows" src="./images/slider-arrow.svg" alt="arrow"></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      fade: true,
      autoplaySpeed: 5000,
      autoplayHoverPause: true
    });
  });
})(jQuery);
