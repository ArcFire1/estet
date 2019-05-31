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

    function calcMenuPos(elem, mode) {
      const menu = $(elem);
      let width = $(window).width();
      let calcTop;
      let modify = mode || false;
      let breakpointLarge = $(window).width() < 1920,
        breakpointSmall = $(window).width() < 768;

      if (breakpointSmall) {
        calcTop = $('.header').outerHeight();
      } else {
        calcTop = $('.header').outerHeight() + $('.top-line').outerHeight();
      }

      if (breakpointLarge) {
        menu.css({'width': width, top: calcTop});
      } else if (modify) {
        menu.css({'width': width, top: calcTop});
      } else {
        menu.css({'width': 'auto', top: 'initial'});
      }
    }

    let breakpointLarge = $(window).width() < 1920,
      breakpointSmall = $(window).width() < 768;

    $(window).on('load', function() {
      calcMenuPos('.header-menu');
    });

    $(window).on('resize', function() {
      calcMenuPos('.header-menu');
    });

    if (breakpointSmall) {
      $(window).on('load', function() {
        calcMenuPos('.header__search');
      });

      $(window).on('resize', function() {
        calcMenuPos('.header__search');
      });
    }


    /** calc elem height */
    function calcElemHeight(elem) {
      let height = 0;
      $(elem).css('height', 'auto');

      $(elem).each(function () {
        height = $(this).outerHeight();
        $(this).css('height', height);
      });
    }

    /** Search toggler on small */
    $('.js-search-toggler').click(function () {
      $('.header__search').toggleClass('header__search_active');
    });

    $(window).on('load', function() {
      calcElemHeight('.product-card');
    });

    $(window).on('resize', function() {
      calcElemHeight('.product-card');
    });

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
    $('.js-fav').click(function() {
      $(this).toggleClass('js-fav_active');
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
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            dots: false
          }
        }
      ]
    });

    $(".products-carousel").slick({
      infinite: true,
      dots: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.1 26.1" width="26.1px" height="26.1px"><path d="M25.5,13.5H0.4C0.2,13.5,0,13.3,0,13s0.2-0.5,0.4-0.5h25.1c0.2,0,0.4,0.2,0.4,0.5S25.7,13.5,25.5,13.5z"/><path d="M12.9,26.1c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7L24.7,13L12.5,0.9c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l12.5,12.5c0.1,0.1,0.1,0.2,0.1,0.4s-0.1,0.3-0.1,0.4L13.2,25.9C13.1,26,13,26.1,12.9,26.1z"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg version="1.1" class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.1 26.1" width="26.1px" height="26.1px"><path d="M25.5,13.5H0.4C0.2,13.5,0,13.3,0,13s0.2-0.5,0.4-0.5h25.1c0.2,0,0.4,0.2,0.4,0.5S25.7,13.5,25.5,13.5z"/><path d="M12.9,26.1c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7L24.7,13L12.5,0.9c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l12.5,12.5c0.1,0.1,0.1,0.2,0.1,0.4s-0.1,0.3-0.1,0.4L13.2,25.9C13.1,26,13,26.1,12.9,26.1z"/></svg></button>',
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
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            dots: true,
            slidesToShow: 1,
          }
        }
      ]
    });

    $(".js-carousel-viewed").slick({
      infinite: true,
      dots: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.1 26.1" width="26.1px" height="26.1px"><path d="M25.5,13.5H0.4C0.2,13.5,0,13.3,0,13s0.2-0.5,0.4-0.5h25.1c0.2,0,0.4,0.2,0.4,0.5S25.7,13.5,25.5,13.5z"/><path d="M12.9,26.1c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7L24.7,13L12.5,0.9c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l12.5,12.5c0.1,0.1,0.1,0.2,0.1,0.4s-0.1,0.3-0.1,0.4L13.2,25.9C13.1,26,13,26.1,12.9,26.1z"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg version="1.1" class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.1 26.1" width="26.1px" height="26.1px"><path d="M25.5,13.5H0.4C0.2,13.5,0,13.3,0,13s0.2-0.5,0.4-0.5h25.1c0.2,0,0.4,0.2,0.4,0.5S25.7,13.5,25.5,13.5z"/><path d="M12.9,26.1c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7L24.7,13L12.5,0.9c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l12.5,12.5c0.1,0.1,0.1,0.2,0.1,0.4s-0.1,0.3-0.1,0.4L13.2,25.9C13.1,26,13,26.1,12.9,26.1z"/></svg></button>',
      appendArrows: $(".js-carousel-viewed-wrapper"),
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
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            dots: true,
            slidesToShow: 1,
          }
        }
      ]
    });

    $(".news-carousel").slick({
      infinite: true,
      dots: false,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.1 26.1" width="26.1px" height="26.1px"><path d="M25.5,13.5H0.4C0.2,13.5,0,13.3,0,13s0.2-0.5,0.4-0.5h25.1c0.2,0,0.4,0.2,0.4,0.5S25.7,13.5,25.5,13.5z"/><path d="M12.9,26.1c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7L24.7,13L12.5,0.9c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l12.5,12.5c0.1,0.1,0.1,0.2,0.1,0.4s-0.1,0.3-0.1,0.4L13.2,25.9C13.1,26,13,26.1,12.9,26.1z"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg version="1.1" class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.1 26.1" width="26.1px" height="26.1px"><path d="M25.5,13.5H0.4C0.2,13.5,0,13.3,0,13s0.2-0.5,0.4-0.5h25.1c0.2,0,0.4,0.2,0.4,0.5S25.7,13.5,25.5,13.5z"/><path d="M12.9,26.1c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7L24.7,13L12.5,0.9c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l12.5,12.5c0.1,0.1,0.1,0.2,0.1,0.4s-0.1,0.3-0.1,0.4L13.2,25.9C13.1,26,13,26.1,12.9,26.1z"/></svg></button>',
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      autoplayHoverPause: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            slidesToShow: 1,
          }
        }
      ]
    });

    /** pdoduct carousel */
    $('.product-image').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.product-preview'
    });
    $('.product-preview').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.product-image',
      dots: false,
      arrows: true,
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="fas fa-angle-left"></i></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="fas fa-angle-right"></i></button>',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            slidesToShow: 2,
          }
        }
      ]
    });

    if ($('.news-carousel').length) {
      const container = $('.news-carousel'),
        wrapper = container.find('.slick-track'),
        item = container.find('.slick-slide');

      const calcNewsWidth = function() {
        let widthVar = 100 / 3;

        if ($(window).width() > 768) {
          wrapper.css('width', '100%');
          item.css('width', widthVar + '%');
        }
      };

      $(window).on('load', function() {
        calcNewsWidth()
      });

      $(window).on('resize', function() {
        calcNewsWidth()
      });
    }

    /** range slider */
    if ($('#slider-range').length) {
      $('#price-range-submit').hide();

      $("#min_price,#max_price").on('change', function () {

        $('#price-range-submit').show();

        var min_price_range = parseInt($("#min_price").val());

        var max_price_range = parseInt($("#max_price").val());

        if (min_price_range > max_price_range) {
          $('#max_price').val(min_price_range);
        }

        $("#slider-range").slider({
          values: [min_price_range, max_price_range]
        });

      });


      $("#min_price,#max_price").on("paste keyup", function () {

        $('#price-range-submit').show();

        var min_price_range = parseInt($("#min_price").val());

        var max_price_range = parseInt($("#max_price").val());

        if(min_price_range == max_price_range){

          max_price_range = min_price_range + 100;

          $("#min_price").val(min_price_range);
          $("#max_price").val(max_price_range);
        }

        $("#slider-range").slider({
          values: [min_price_range, max_price_range]
        });

      });


      $(function () {
        $("#slider-range").slider({
          range: true,
          orientation: "horizontal",
          min: 0,
          max: 9999,
          values: [0, 9999],
          step: 100,

          slide: function (event, ui) {
            if (ui.values[0] == ui.values[1]) {
              return false;
            }

            $("#min_price").val(ui.values[0]);
            $("#max_price").val(ui.values[1]);
          }
        });

        $("#min_price").val($("#slider-range").slider("values", 0));
        $("#max_price").val($("#slider-range").slider("values", 1));

      });
    }

    // colors filter
    function toggleList(container, elem, counter, toggler) {
      const mainContainer = $(container);
      const showItems = counter;
      const togglerButton = mainContainer.find(toggler);
      let containerElement = mainContainer.find(elem);
      let togglerValue = togglerButton.text();
      let elementsVisible = false;

      let toggleElems = function() {
        if (elementsVisible) {
          for (let i = 0,j = containerElement.length; i < j; i++) {
            $(containerElement[i]).show();
          }
        } else if (!elementsVisible) {
          for (let i = showItems,j = containerElement.length; i < j; i++) {
            $(containerElement[i]).hide();
          }
        }

      };

      toggleElems();

      togglerButton.click(function (){
        let togglerNewValue = $(this).text();
        let togglerDataValue = $(this).data('value');

        if (elementsVisible) {
          elementsVisible = false;
        } else {
          elementsVisible = true;
        }

        toggleElems();

        let buttonText = togglerValue === togglerNewValue ? togglerDataValue : togglerValue;
        $(this).text(buttonText);
      });
    }

    $('.js-filter').each(function() {
      toggleList($(this),'.filter-list__item', 3, '.filter-list-toggler');
    });

    function ToggleMenu(elem, menu, container) {
      const containerElements = $(container),
        link = containerElements.find(elem),
        toggledMenu = containerElements.find(menu);

      if (toggledMenu.length) {
        toggledMenu.slideUp();

        link.click(function (e) {
          e.preventDefault();
          toggledMenu.slideToggle();
        });
      }
    }

    $('.category-list__item').each(function () {
      new ToggleMenu('.category-list__link', '.subcategory-list', $(this));
    })

  });
})(jQuery);
