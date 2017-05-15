// /-------------------------------------------------\
// | artefatos da biblioteca angular 2.x             |
// \-------------------------------------------------/
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

// /--------------------------------------------------\
// | form-grupo.component.ts                          |
// |--------------------------------------------------|
// | Componente para inclusão de grupos               |
// \--------------------------------------------------/
declare var uiUpdatesObject: any;

@Component({
  selector: 'app-ui-calendar',
  templateUrl: 'ui-calendar.component.html'
})
export class UiCalendarComponent implements OnInit {

  constructor() {
    console.log('notification.updates constructor initialized');
  }

  init() {
    // uiUpdatesObject.init();
  }

  ngOnInit() {
    this.init();
  }

}
