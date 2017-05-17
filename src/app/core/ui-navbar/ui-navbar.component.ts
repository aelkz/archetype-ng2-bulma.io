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
  selector: 'app-ui-navbar',
  templateUrl: 'ui-navbar.component.html',
  styleUrls: ['ui-navbar.component.scss']
})
export class UiNavbarComponent implements AfterViewInit, OnInit {

  constructor(private _ngZone: NgZone) {
    console.log('ui-navbar.component.ts constructor initialized');
  }

  init() { }

  ngOnInit() { }

  public ngAfterViewInit(): void {

    this._ngZone.runOutsideAngular(() => {

      function _initNavBar() {
        var $toggle = $('#nav-toggle');
        var $menu = $('#nav-menu');
        var $highlights = $('.highlight');
        var $highlightButtons = $('.highlight .copy, .highlight .expand');

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

        $highlights.each(function() {
          var $el = $(this);
          var copy = '<button class="copy">Copy</button>';
          var expand = '<button class="expand">Expand</button>';
          $el.append(copy);

          if ($el.find('pre code').innerHeight() > 600) {
            $el.append(expand);
          }
        });

        $highlightButtons.hover(function() {
          $(this).parent().css('box-shadow', '0 0 0 1px #ed6c63');
        }, function() {
          $(this).parent().css('box-shadow', 'none');
        });

        $('.highlight .expand').click(function() {
          $(this).parent().children('pre').css('max-height', 'none');
        });

      }

      $(function () {
        "use strict";

        _initNavBar();
      });

    });

  }

}
