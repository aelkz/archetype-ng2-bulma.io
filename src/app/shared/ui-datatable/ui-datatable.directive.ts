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
  @HostListener('mouseenter') onMouseEnter() {
    console.log('zzz');
  }

  public constructor(private el: ElementRef, private renderer: Renderer, private _ngZone: NgZone) {
    console.log('appDataTable.directive initialized');
  }

  ngOnInit() {
    console.log('xxx');
  }

  public ngAfterViewInit(): void {
    console.log('yyy');

    this._ngZone.runOutsideAngular(() => {
      $('#fullfeatures').DataTable({
        'drawCallback': function( settings ) {
          if (!$('#fullfeatures').parent().hasClass('table-is-responsive')) {
            $('#fullfeatures').wrap('<div class="table-is-responsive"></div>');
          }
        }
      });

      // $(this.elRef.nativeElement).OurPluginName({});
    });
  }

}
