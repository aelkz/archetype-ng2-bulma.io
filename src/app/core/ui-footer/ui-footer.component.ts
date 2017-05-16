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
declare var uiFooterObject: any;

@Component({
  selector: 'app-ui-footer',
  templateUrl: 'ui-footer.component.html',
  styleUrls: ['ui-footer.component.scss']
})
export class UiFooterComponent implements OnInit {

  constructor() {
    console.log('footer constructor initialized');
  }

  init() {
    uiFooterObject.init();
  }

  ngOnInit(){
    this.init();
  }

}
