class Megamenu {
  constructor(elem, params) {

    this.$element = $(elem);
    this.params = params || {};

    this.$items = this.$element.find('.JS-Megamenu-Item');
    this.$link = this.$items.find('.JS-Megamenu-Link');
    this.$submenu = this.$items.find('.js-Megamenu-Submenu');

    this.cssReadyClass = this.params.cssReadyClass || null;
    this.cssSubmenuClass = this.params.cssSubmenuClass || null;
    this.cssLinkActive = this.params.cssLinkActive || null;
    this.cssSubmenuActive = this.params.cssSubmenuActive || null;
    this.showOnHover = this.params.showOnHover || false;

    this.init();
  }

  init() {
    let _this = this;

    $(document).mouseup(function(e) {
      if(!_this.$items.is(e.target) && _this.$items.has(e.target).length === 0) {
        _this.closeSubmenu();
      }
    });

    this.toggle();
    this.ready();
  }

  ready() {
    this.$element
    .addClass('JS-Megamenu-Ready')
    .addClass(this.cssReadyClass);
  }

  toggle() {
    let _this = this;
    this.$items.each(function() {
      let $item = $(this);
      let $submenu = $(this).find('.JS-Megamenu-Submenu');
      let $link = $(this).find('.JS-Megamenu-Link');
      
      if ($submenu.length) {
        $link
          .addClass(_this.cssSubmenuClass)
          .addClass('JS-Megamenu-HasSubmenu');

        if (_this.showOnHover) {
          $item.mouseenter(function() {
            $link
              .addClass(_this.cssLinkActive)
              .addClass('JS-Megamenu-Link-active');
            $submenu
              .addClass(_this.cssSubmenuActive)
              .addClass('JS-Megamenu-Submenu-active'); 
          });

          $item.mouseleave(function() {
            $link
            .removeClass(_this.cssLinkActive)
            .removeClass('JS-Megamenu-Link-active');
            $submenu
              .removeClass(_this.cssSubmenuActive)
              .removeClass('JS-Megamenu-Submenu-active');  
          });
        } else {
          $link.on('click', function(event) {
            event.preventDefault();

            if ($link.hasClass('JS-Megamenu-Link-active')) {
              $link
                .removeClass(_this.cssLinkActive)
                .removeClass('JS-Megamenu-Link-active');
              $submenu
                .removeClass(_this.cssSubmenuActive)
                .removeClass('JS-Megamenu-Submenu-active');  
            } else {
              _this.closeSubmenu();
              
              $link
                .addClass(_this.cssLinkActive)
                .addClass('JS-Megamenu-Link-active');
              $submenu
                .addClass(_this.cssSubmenuActive)
                .addClass('JS-Megamenu-Submenu-active'); 
            }
          });
        }
      }
    })
  }

  closeSubmenu() {
    this.$element.find('.JS-Megamenu-Link-active')
      .removeClass(this.cssLinkActive)
      .removeClass('JS-Megamenu-Link-active');
    this.$element.find('.JS-Megamenu-Submenu-active')
      .removeClass(this.cssSubmenuActive)
      .removeClass('JS-Megamenu-Submenu-active');  
  }
}