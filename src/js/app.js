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
    $(".carousel-services").slick({
      infinite: true,
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      autoplayHoverPause: true
    });
  });
})(jQuery);
