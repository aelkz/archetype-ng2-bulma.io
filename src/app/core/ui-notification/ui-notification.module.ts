import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { UiUpdatesComponent } from './ui-updates/ui-updates.component';
import { UiMailComponent } from './ui-mail/ui-mail.component';
import {UiCalendarComponent} from './ui-calendar/ui-calendar.component';

// /---------------------------------------------------\
// | UI Notification Module [ui-notification.module.ts]|
// |---------------------------------------------------|
// | Encapsulates all navbar notification components   |
// \---------------------------------------------------/

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  exports: [UiUpdatesComponent, UiMailComponent, UiCalendarComponent],
  declarations: [UiUpdatesComponent, UiMailComponent, UiCalendarComponent],
})
export class UiNotificationModule { }
