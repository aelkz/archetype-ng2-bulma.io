// /-------------------------------------------------\
// | artefatos da biblioteca angular 2.x             |
// \-------------------------------------------------/
import { Component } from '@angular/core';
import { NgZone } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';

// /--------------------------------------------------\
// | form-grupo.component.ts                          |
// |--------------------------------------------------|
// | Componente para inclusão de grupos               |
// \--------------------------------------------------/
declare var $: any;

@Component({
  selector: 'app-ui-sidenav',
  templateUrl: 'ui-sidenav.component.html',
  styleUrls: ['ui-sidenav.component.scss']
})
export class UiSidenavComponent implements AfterViewInit, OnInit {

  constructor(private _ngZone: NgZone) {
    console.log('sidenav constructor initialized');
  }

  init() { }

  ngOnInit() { }

  public ngAfterViewInit(): void {

    this._ngZone.runOutsideAngular(() => {

      function _initSideNav() {
        function openNav(main, sidenav) {
          console.log('ui-sidenav.openNav() called');
          var width = $.IsAwesome.options.sideBarWidth;

          $(sidenav).css('width', width);
          $(main).addClass('overlay');
        }

        function closeNav(main, sidenav) {
          console.log('ui-sidenav.closeNav() called');

          $(sidenav).css('width', '0px');
          $(main).removeClass('overlay');
        }

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

        $.IsAwesome.tree = function (menu) {
          var _this = this;
          var animationSpeed = $.IsAwesome.options.animationSpeed;
          $(document).on('click', menu + ' li a', function (e) {
            //Get the clicked link and the next element
            var $this = $(this);
            var checkElement = $this.next();

            if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible'))) {
              //Close the menu
              checkElement.slideUp(animationSpeed, function () {
                checkElement.removeClass('menu-open');
              });
              checkElement.parent("li").removeClass("active");
            }
            //If the menu is not visible
            else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
              var parent = $this.parents('ul').first();
              //Close all open menus within the parent
              var ul = parent.find('ul:visible').slideUp(animationSpeed);
              //Remove the menu-open class from the parent
              ul.removeClass('menu-open');
              var parent_li = $this.parent("li");

              //Open the target menu and add the menu-open class
              checkElement.slideDown(animationSpeed, function () {
                //Add the class active to the parent li
                checkElement.addClass('menu-open');
                parent.find('li.active').removeClass('active');
                parent_li.addClass('active');
              });
            }
            //if this isn't a link, prevent the page from being redirected
            if (checkElement.is('.treeview-menu')) {
              e.preventDefault();
            }
          });
        };

      }

      $(function () {
        "use strict";

        _initSideNav();

        $.IsAwesome.sidebar(
          '#menu',
          '#main',
          '#side-nav'
        );

        $.IsAwesome.scrolling('.scrollable-items', '180px');
        $.IsAwesome.tree('.menu-list');
      });

      $.IsAwesome = {};

      //IsAwesome options
      $.IsAwesome.options = {
        animationSpeed: 300,
        sideBarWidth: '260px',
        sreenSize: $( window ).width(),
        //icons
        closeSideBarIcon: 'fa-close',
        openSideBarIcon: 'fa-bars',
        starEmptyIcon: 'fa-star-o',
        starIcon: 'fa-star'
      };

    });

  }

}
