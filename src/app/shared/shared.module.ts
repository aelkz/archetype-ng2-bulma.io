import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiDatatableDirective } from './directives/datatable/datatable.directive';
import {UiTooltipComponent} from './directives/tooltip/tooltip.component';

@NgModule({
  declarations: [ UiDatatableDirective, UiTooltipComponent ],
  imports: [
    CommonModule
  ],
  exports: [
    UiDatatableDirective, UiTooltipComponent
  ]
})
export class SharedModule { }

