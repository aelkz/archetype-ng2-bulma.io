import {Component, ViewEncapsulation, OnInit, ElementRef, Input} from '@angular/core';

@Component({
  selector: '[app-tooltip], [app-tooltip-top], [app-tooltip-left], [app-tooltip-right]', // Refer to it like an attribute directive
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  encapsulation: ViewEncapsulation.None // Tell Angular to not scope your styles
})
export class UiTooltipComponent implements OnInit {
  @Input() _tooltipText: string;

  /** tooltip position */
  _isTopPosition: boolean = this._hasAttributeWithPrefix('top');
  _isLeftPosition: boolean = this._hasAttributeWithPrefix('left');
  _isRightPosition: boolean = this._hasAttributeWithPrefix('right');
  _isBottomPosition: boolean = (!this._isTopPosition && !this._isLeftPosition && !this._isRightPosition);

  constructor(private _elementRef: ElementRef) {
    console.log('tooltip constructor initialized');
  }

  init() { }

  ngOnInit() {
    this.init();
  }

  _getHostElement() {
    return this._elementRef.nativeElement;
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
