// /-------------------------------------------------\
// | Componentes angular                             |
// \-------------------------------------------------/
import { Component, OnInit } from '@angular/core';

// /-------------------------------------------------\
// | Componentes compartilhados do projeto           |
// \-------------------------------------------------/
import {MessageService, ConfirmListener} from '../../../shared/message/message.service';
import { MessageResource, MessageResourceProvider } from './../../../shared/message/message.resource';
import { Animations } from './../../../core/animations/animations';

// /-------------------------------------------------\
// | Componentes do módulo/projeto                   |
// \-------------------------------------------------/
import { GrupoService } from '../grupo.service';

/**
 * Component responsável pela Listagem de 'Grupo'.
 */
@Component({
  selector: 'app-list-grupo',
  templateUrl: 'list-grupo.component.html',
  animations: [ Animations.showHideFast ]
})
export class ListGrupoComponent implements OnInit {
  private messageService: MessageService;
  private grupoService: GrupoService;
  private messageResource: MessageResource;

  private collapsed: boolean;
  public grupos: any[];

  /**
   * Construtor da classe.
   *
   * @param grupoService
   * @param messageService
   */
  constructor(grupoService: GrupoService, messageService: MessageService, MessageResource: MessageResourceProvider) {
    this.grupoService = grupoService;
    this.messageService = messageService;
    this.messageResource = new MessageResource();
    this.collapsed = true;
  }

  /**
   * Inicializa as dependências do Component.
   */
  ngOnInit() {
    this.grupos = this.grupoService.getGrupos();
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

  /**
   * Verifica se o 'Grupo' está 'Ativo'.
   *
   * @param grupo
   */
  public isAtivo(grupo: any): boolean {
    return this.grupoService.isAtivo(grupo);
  }

  /**
   * Verifica se o 'Grupo' está 'Inativo'.
   *
   * @param grupo
   */
  public isInativo(grupo: any): boolean {
    return this.grupoService.isInativo(grupo);
  }

  /**
   * Ativa o 'Grupo' informado.
   *
   * @param grupo
   */
  public ativar(grupo: any): void {
    const self = this;

    this.messageService.addConfirmYesNo('MSG_CONFIRM_ATIVACAO', (): ConfirmListener => {
      grupo.situacao.id = 1;
      grupo.situacao.descricao = 'Ativo';
      self.ngOnInit();
      self.messageService.addMsgInf('MSG_ATIVACAO', this.messageResource.getDescription('LABEL_GRUPO'));
      return;
    });
  }

  /**
   * Inativa o 'Grupo' informado.
   *
   * @param grupo
   */
  public inativar(grupo: any): void {
    const self = this;

    this.messageService.addConfirmYesNo('MSG_CONFIRM_INATIVACAO', (): ConfirmListener => {
      grupo.situacao.id = 2;
      grupo.situacao.descricao = 'Inativo';
      self.ngOnInit();
      self.messageService.addMsgInf('MSG_INATIVACAO', this.messageResource.getDescription('LABEL_GRUPO'));
      return;
    });
  }

}
