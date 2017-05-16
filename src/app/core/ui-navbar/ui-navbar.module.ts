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

import { UiNotificationModule } from './../ui-notification/ui-notification.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    UiNotificationModule
  ],
  declarations: [UiNavbarComponent]
})
export class UiNavbarModule { }
