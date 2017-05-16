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
declare var uiNavbarObject: any;

@Component({
  selector: 'app-ui-navbar',
  templateUrl: 'ui-navbar.component.html',
  styleUrls: ['ui-navbar.component.scss']
})
export class UiNavbarComponent implements OnInit {

  constructor() {
    console.log('ui-navbar.component.ts constructor initialized');
  }

  init() {
    uiNavbarObject.init();
  }

  ngOnInit(){
    this.init();
  }

}
