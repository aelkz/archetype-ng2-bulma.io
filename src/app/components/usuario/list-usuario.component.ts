// /-------------------------------------------------\
// | Componentes angular                             |
// \-------------------------------------------------/
import {Component, OnInit, Input} from '@angular/core';

// /-------------------------------------------------\
// | Componentes compartilhados do projeto           |
// \-------------------------------------------------/
import { Animations } from './../../core/animations/animations';

// /-------------------------------------------------\
// | Componentes do módulo/projeto                   |
// \-------------------------------------------------/

/**
 * Component responsável pela 'Listagem' de 'Usuario'.
 */
@Component({
  selector: 'app-list-usuario',
  templateUrl: 'list-usuario.component.html',
  animations: [ Animations.showHide ]
})
export class ListUsuarioComponent implements OnInit {
  private collapsed: boolean;

  @Input() appDataTable: any;

  constructor() {
    this.collapsed = true;
  }

  /**
   * Inicializa as dependências do Component.
   */
  ngOnInit() { }

  public isCollapsed(): boolean {
    return this.collapsed;
  }

  public setCollapsed(): void {
    this.collapsed = true;
  }

  public toggleMenu(): void {
    this.collapsed = !this.collapsed;
  }

}
