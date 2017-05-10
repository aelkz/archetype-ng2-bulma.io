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
import { UiUserInfoComponent } from './ui-userinfo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [UiUserInfoComponent]
})
export class UiUserInfoModule { }