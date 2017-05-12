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
  styles: [` 
    .user-info { display: inline; }
    ul.dropdown-menu li{width:100%}
    ul.dropdown-menu li a{height:auto;padding:4px;text-align:left}
    .dropdown-menu{padding:7px 10px;border-radius:0 0 4px 4px;border:0;margin-top:0;color:#333;z-index:87;min-width:100%}
    .dropdown-menu li{margin-bottom:5px;white-space:nowrap}
    .dropdown-menu{position:fixed;width:100%;top:80px}
    .dropdown-menu{font-size:1.2em!important}
    nav {
      background-color: #F5F5F5;
    }
  `]
})
export class UiNavbarComponent implements OnInit {

  constructor() {
    console.log('navbar constructor initialized');
  }

  init() {
    uiNavbarObject.init();
  }

  ngOnInit(){
    this.init();
  }

}