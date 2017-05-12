// /-------------------------------------------\
// | custom jquery component objects           |
// \-------------------------------------------/

var uiNavbarObject = (function() {
  console.log('ui-navbar.component.ts initialization');
  return {
    init: function() {
      console.log('ui-navbar.component.ts:init() called.');

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

      var $toggle = $('#nav-user-info');
      var $menu = $('#nav-user-info-menu');
      var $photo = $('#nav-user-info-photo');

      $photo.find('img').css('border','1px solid #bbbbbb');
      $photo.find('img').css('width','96px');
      $photo.find('img').css('height','96px');

      $toggle.click(function() {
        console.log('xxx-001');
        $toggle.find('i').toggleClass('fa fa-caret-up fa fa-caret-down');
      });

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