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
declare var uiMailObject: any;

@Component({
  selector: 'app-ui-mail',
  templateUrl: 'ui-mail.component.html'
})
export class UiMailComponent implements OnInit {

  constructor() {
    console.log('notification.mail constructor initialized');
  }

  init() {
    // uiUpdatesObject.init();
  }

  ngOnInit() {
    this.init();
  }

}
