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
declare var uiUserInfoObject: any;

@Component({
  selector: 'app-ui-userinfo',
  templateUrl: 'ui-userinfo.component.html',
  styles: [` 
    .user-info { display: inline; }
    #nav-user-info-menu {
      position: absolute; 
      width: 350px; 
      text-align: right; 
      top:45px; 
      margin-left: -80px;
    }
    hr.small-line {
      position: relative; 
      top: -15px;
    }
    .user-info-profile-button {
      position: relative; top: -30px;
    }
    .card-footer {
      background-color: #dddddd;
    }
    .footer-button {
      text-align: center;
    }
    .under {
      position: relative;
      top: 4px;
    }
  `]
})
export class UiUserInfoComponent implements OnInit {
  public toggleShowHide:boolean = false;  

  constructor() {
    console.log('userinfo constructor initialized');
  }

  init() {
    uiUserInfoObject.init();
  }

  ngOnInit(){
    this.init();
  }

}