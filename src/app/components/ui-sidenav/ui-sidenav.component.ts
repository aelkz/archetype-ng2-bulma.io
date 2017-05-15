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
declare var uiSidenavObject: any;

@Component({
  selector: 'app-ui-sidenav',
  templateUrl: 'ui-sidenav.component.html',
  styleUrls: ['ui-sidenav.component.scss']
})
export class UiSidenavComponent implements OnInit {

  constructor() {
    console.log('sidenav constructor initialized');
  }

  init() {
    // uiSidenavObject.init();
  }

  ngOnInit() {
    this.init();
  }

}
