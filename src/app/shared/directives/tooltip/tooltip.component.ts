import {Component, ViewEncapsulation, OnInit, AfterViewInit, ElementRef, Input, Renderer} from '@angular/core';

// https://admin.vuebulma.com/#/components/tooltip

@Component({
  selector: '[app-tooltip], [app-tooltip-bottom], [app-tooltip-left], [app-tooltip-right]', // Refer to it like an attribute directive
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  encapsulation: ViewEncapsulation.None // Tell Angular to not scope your styles
})
export class UiTooltipComponent implements OnInit, AfterViewInit {
  @Input('app-tooltip') _text_top;
  @Input('app-tooltip-bottom') _text_bottom;
  @Input('app-tooltip-left') _text_left;
  @Input('app-tooltip-right') _text_right;

  _isLeftPosition = this._hasAttributeWithPrefix('left');
  _isRightPosition = this._hasAttributeWithPrefix('right');
  _isBottomPosition = this._hasAttributeWithPrefix('bottom');
  _isTopPosition = (!this._isLeftPosition && !this._isRightPosition && !this._isBottomPosition);

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    console.log('tooltip constructor initialized');
  }

  init() { }

  ngAfterViewInit(): void {
    // const id = this._elementRef.nativeElement.id;

    console.log('top:' + this._isTopPosition);
    console.log('bottom:' + this._isBottomPosition);
    console.log('left:' + this._isLeftPosition);
    console.log('right:' + this._isRightPosition);
    console.log('text:' + this._getTooltipText());

    if (this._isBottomPosition) {
      // console.log(this._elementRef.nativeElement.getAttributeNode('app-tooltip-bottom').value);
      this._renderer.setElementClass(this._elementRef.nativeElement, 'tooltip', true);
      this._renderer.setElementClass(this._elementRef.nativeElement, 'tooltip-bottom', true);
    }else if (this._isLeftPosition) {
      this._renderer.setElementClass(this._elementRef.nativeElement, 'tooltip-left', true);
    }else if (this._isRightPosition) {
      this._renderer.setElementClass(this._elementRef.nativeElement, 'tooltip-right', true);
    }

  }

  ngOnInit() {
    this.init();
  }

  _getHostElement() {
    return this._elementRef.nativeElement;
  }

  _getTooltipText() {
    if (this._text_top != null) {
      return this._text_top;
    }else if (this._text_bottom != null) {
      return this._text_bottom;
    }else if (this._text_left != null) {
      return this._text_left;
    }else if (this._text_right != null) {
      return this._text_right;
    }
    return null;
  }

  /**
   * Gets whether the button has one of the given attributes
   * with either an 'app-' or 'app-tooltip' prefix.
   */
  _hasAttributeWithPrefix(...unprefixedAttributeNames: string[]) {
    return unprefixedAttributeNames.some(suffix => {
      const el = this._getHostElement();

      return el.hasAttribute('app-' + suffix) || el.hasAttribute('app-tooltip-' + suffix);
    });
  }
}
