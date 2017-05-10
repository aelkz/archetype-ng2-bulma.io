// /-------------------------------------------------\
// | Componentes angular                             |
// \-------------------------------------------------/
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// /-------------------------------------------------\
// | Componentes do módulo/projeto                   |
// \-------------------------------------------------/
import { UiNavbarComponent } from './ui-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [UiNavbarComponent]
})
export class UiNavbarModule { }