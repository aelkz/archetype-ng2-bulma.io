// /-------------------------------------------------\
// | artefatos da biblioteca angular 2.x             |
// \-------------------------------------------------/
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

// /-------------------------------------------------\
// | Componentes compartilhados do projeto           |
// \-------------------------------------------------/
import { Animations } from '../animations/animations';

// /--------------------------------------------------\
// | form-grupo.component.ts                          |
// |--------------------------------------------------|
// | Componente para inclusão de grupos               |
// \--------------------------------------------------/

@Component({
  selector: 'app-ui-userinfo',
  templateUrl: 'ui-userinfo.component.html',
  animations: [ Animations.showPopScale ],
  styleUrls: ['ui-userinfo.component.scss']
})
export class UiUserInfoComponent implements OnInit {
  private collapsed: boolean;

  constructor() {
    console.log('userinfo constructor initialized');
    this.collapsed = true;
  }

  public isCollapsed(): boolean {
    return this.collapsed;
  }

  public setCollapsed(): void {
    this.collapsed = true;
  }

  public toggleMenu(): void {
    this.collapsed = !this.collapsed;
  }

  init() { }

  ngOnInit(){ }

}
