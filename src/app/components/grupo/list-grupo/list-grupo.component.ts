import { Component, OnInit } from '@angular/core';

import { GrupoService } from '../grupo.service';
import {MessageService, ConfirmListener} from '../../../shared/message/message.service';

/**
 * Component responsável pela Listagem de 'Grupo'.
 */
@Component({
  selector: 'app-list-grupo',
  templateUrl: 'list-grupo.component.html'
})
export class ListGrupoComponent implements OnInit {

  private messageService: MessageService;
  private grupoService: GrupoService;

  public grupos: any[];

  /**
   * Construtor da classe.
   *
   * @param grupoService
   * @param messageService
   */
  constructor(grupoService: GrupoService, messageService: MessageService) {
    this.grupoService = grupoService;
    this.messageService = messageService;
  }

  /**
   * Inicializa as dependências do Component.
   */
  ngOnInit() {
    this.grupos = this.grupoService.getGrupos();
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

    this.messageService.addConfirmYesNo('MSG_GRUPO_CONFIRM_ATIVACAO', (): ConfirmListener => {
      grupo.situacao.id = 1;
      grupo.situacao.descricao = 'Ativo';
      self.ngOnInit();
      self.messageService.addMsgInf('Grupo ativado com sucesso!');
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

    this.messageService.addConfirmYesNo('MSG_GRUPO_CONFIRM_INATIVACAO', (): ConfirmListener => {
      grupo.situacao.id = 2;
      grupo.situacao.descricao = 'Inativo';
      self.ngOnInit();
      self.messageService.addMsgInf('Grupo inativado com sucesso!');
      return;
    });
  }

  public inativar2(grupo: any): void {
    const self = this;

    grupo.situacao.id = 2;
    grupo.situacao.descricao = 'Inativo';
    self.ngOnInit();
    self.messageService.addMsgInf('Grupo inativado com sucesso!');
  }

}
