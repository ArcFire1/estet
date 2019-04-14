;
$(document).foundation();

(function ($) {
  "use strict";
  $(function () {

    /** fix bug equalizer */
    if ($('[data-equalizer]').length) {
      Foundation.reInit('equalizer');
    }

    /** menus positions */

    function calcMenuPos(elem) {
      const menu = $(elem);
      let width = $(window).width();
      let calcTop = $('.header').outerHeight() + $('.top-line').outerHeight();

      menu.css({'width': width, top: calcTop});
    }

    $(window).on('load', function() {
      calcMenuPos('.catalog');
    });

    $(window).on('resize', function() {
      calcMenuPos('.catalog');
    });

    const breakpoint = $(window).width() < 1920;

    if (breakpoint) {
      $(window).on('load', function() {
        calcMenuPos('.header-menu');
      });

      $(window).on('resize', function() {
        calcMenuPos('.header-menu');
      });
    }

    /** close catalog */
    $('.catalog-close').click(function() {
      $('.catalog').addClass('catalog_hidden');
    });

    /** .quant input activity */
    $('.quant').each(function () {
      const $input = $(this).find('.quant__input');
      let initNum = 1;
      $(this).find('.quant__plus').on('click', function () {
        $input.val(++initNum + 'шт');
      });

      $(this).find('.quant__minus').on('click', function () {
        if (initNum >= 2) {
          $input.val(--initNum + 'шт');
        }
      });
    });

    /** fav button toggler */
    $('.product-card__fav').click(function() {
      $(this).toggleClass('product-card__fav_active');
    })

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
      autoplayHoverPause: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
          }
        }
      ]
    });

    $(".products-carousel").slick({
      infinite: true,
      dots: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><img class="slick-arrows" src="./images/product-arrow.svg" alt="arrow"></button>',
      nextArrow: '<button type="button" class="slick-next"><img class="slick-arrows" src="./images/product-arrow.svg" alt="arrow"></button>',
      appendArrows: $(".products-carousel-wrapper"),
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      autoplayHoverPause: true,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        }
      ]
    });
  });
})(jQuery);
