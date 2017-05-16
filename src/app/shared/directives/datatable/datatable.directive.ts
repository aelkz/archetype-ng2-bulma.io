import {
  Directive, HostListener, Input, ElementRef, NgZone, TemplateRef, ViewContainerRef,
  Renderer
} from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';

declare var $: any;

@Directive({
  selector: `[appDataTable]`,
})
export class UiDatatableDirective implements AfterViewInit, OnInit {
  // @HostListener('mouseenter') onMouseEnter() {
  //  console.log('zzz');
  // }

  public constructor(private el: ElementRef, private renderer: Renderer, private _ngZone: NgZone) {
    console.log('datatable.directive.ts initialized');
  }

  ngOnInit() {
    console.log('xxx');
  }

  public ngAfterViewInit(): void {
    console.log('yyy');

    // acquire the DOM element id
    const id = this.el.nativeElement.id;

    this._ngZone.runOutsideAngular(() => {
      $('#' + id).DataTable({
        'drawCallback': function( settings ) {
          if (!$('#' + id).parent().hasClass('table-is-responsive')) {
            $('#' + id).wrap('<div class="table-is-responsive"></div>');
          }
        }
      });

    });
  }

}