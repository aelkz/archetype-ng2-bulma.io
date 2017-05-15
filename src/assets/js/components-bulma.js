// /-------------------------------------------\
// | custom jquery component objects           |
// \-------------------------------------------/
if (typeof jQuery === "undefined") {
  throw new Error("this application requires jQuery");
}

var uiNavbarObject = (function() {
  console.log('ui-calendar.component.ts initialization');
  return {
    init: function() {
      console.log('ui-calendar.component.ts:init() called.');

      var $toggle = $('#nav-toggle');
      var $menu = $('#nav-menu');

      $toggle.click(function() {
        $(this).toggleClass('is-active');
        $menu.toggleClass('is-active');
      });

      $('.modal-button').click(function() {
        var target = $(this).data('target');
        $('html').addClass('is-clipped');
        $(target).addClass('is-active');
      });

      $('.modal-background, .modal-close').click(function() {
        $('html').removeClass('is-clipped');
        $(this).parent().removeClass('is-active');
      });

      $('.modal-card-head .delete, .modal-card-foot .button').click(function() {
        $('html').removeClass('is-clipped');
        $('#modal-ter').removeClass('is-active');
      });

      var $highlights = $('.highlight');

      $highlights.each(function() {
        var $el = $(this);
        var copy = '<button class="copy">Copy</button>';
        var expand = '<button class="expand">Expand</button>';
        $el.append(copy);

        if ($el.find('pre code').innerHeight() > 600) {
          $el.append(expand);
        }
      });

      var $highlightButtons = $('.highlight .copy, .highlight .expand');

      $highlightButtons.hover(function() {
        $(this).parent().css('box-shadow', '0 0 0 1px #ed6c63');
      }, function() {
        $(this).parent().css('box-shadow', 'none');
      });

      $('.highlight .expand').click(function() {
        $(this).parent().children('pre').css('max-height', 'none');
      });

    }
  }
})(uiNavbarObject||{})

var uiUserInfoObject = (function() {
  console.log('ui-userinfo.component.ts initialization');
  return {
    init: function() {
      console.log('ui-userinfo.component.ts:init() called.');
    }
  }
})(uiUserInfoObject||{})

var uiFooterObject = (function() {
  console.log('ui-footer.component.ts initialization');
  return {
    init: function() {
      console.log('ui-footer.component.ts:init() called.');
    }
  }
})(uiFooterObject||{})

// /-------------------------------------------\
// | general jquery component objects          |
// \-------------------------------------------/

$( document ).ready(function() {
  //
});

// /-------------------------------------------\
// | is-awesome github project functions       |
// \-------------------------------------------/
$(function () {
  "use strict";

  _init();

  $.IsAwesome.scrolling('.scrollable-items', '180px');
  $.IsAwesome.tree('.menu-list');
  $.IsAwesome.tabs('.tabs');
  $.IsAwesome.modals(
    '.modal-button',
    '.modal-background',
    '.modal-close'
  );
  $('.notification button').click(function(){
    $(this).parent().hide();
  });
});

$.IsAwesome = {};

//IsAwesome options
$.IsAwesome.options = {
  animationSpeed: 500,
  sideBarWidth: '260px',
  sreenSize: $( window ).width(),
  //icons
  closeSideBarIcon: 'fa-close',
  openSideBarIcon: 'fa-bars',
  starEmptyIcon: 'fa-star-o',
  starIcon: 'fa-star'
};

function _init() {
  $.IsAwesome.sidebar = function(menu, main, sidenav) {
    var $icon = $(menu).find('i');
    var openIcon = $.IsAwesome.options.openSideBarIcon;
    var closeIcon = $.IsAwesome.options.closeSideBarIcon;

    $(menu).on('click', function (e) {
      if($icon.hasClass(openIcon)){
        openNav(main, sidenav);
      }
      if($icon.hasClass(closeIcon)){
        closeNav(main, sidenav);
      }
      $icon.toggleClass(closeIcon);
      $icon.toggleClass(openIcon);
    });

    $(main).click(function(){
      if($icon.hasClass(closeIcon)){
        closeNav(main, sidenav);
        $icon.removeClass(closeIcon);
        $icon.addClass(openIcon);
      }
    });
  };

  $.IsAwesome.scrolling = function(id, h){
    $(id).slimScroll({
      height: h,
      size: '3px'
    });
  };

  function openNav(main, sidenav) {
    var width = $.IsAwesome.options.sideBarWidth;
    $(sidenav).css('width', width);
    $(main).addClass('overlay');
  }

  function closeNav(main, sidenav) {
    $(sidenav).css('width', '0px');
    $(main).removeClass('overlay');
  }

};
