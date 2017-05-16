import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiDatatableDirective } from './directives/datatable/datatable.directive';

@NgModule({
  declarations: [ UiDatatableDirective ],
  imports: [
    CommonModule
  ],
  exports: [
    UiDatatableDirective
  ]
})
export class SharedModule { }

