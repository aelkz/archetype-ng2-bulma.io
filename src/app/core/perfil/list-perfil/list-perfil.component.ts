import { Component, OnInit } from '@angular/core';

import { PerfilService } from '../perfil.service';
import { MessageService } from '../../message/message.service';
/**
 * Component responsável pela 'Listagem' de 'Perfil'.
 */
@Component({
  selector: 'app-list-perfil',
  templateUrl: 'list-perfil.component.html'
})
export class ListPerfilComponent {

  private messageService: MessageService;
  private perfilService: PerfilService;

  public perfils: any[];

  /**
   * Construtor da classe.
   *
   * @param perfilService
   * @param messageService
   */
  constructor(perfilService: PerfilService, messageService: MessageService) {
    this.perfilService = perfilService;
    this.messageService = messageService;
  }

  /**
   * Inicializa as dependências do Component.
   */
  ngOnInit() {
    this.perfils = this.perfilService.getPerfils();
  }

  /**
   * Verifica se o 'Perfil' está 'Ativo'.
   *
   * @param perfil
   */
  public isAtivo(perfil: any): boolean {
    return this.perfilService.isAtivo(perfil);
  }

  /**
   * Verifica se o 'Perfil' está 'Inativo'.
   *
   * @param perfil
   */
  public isInativo(perfil: any): boolean {
    return this.perfilService.isInativo(perfil);
  }

  /**
   * Ativa o 'Perfil' informado.
   *
   * @param perfil
   */
  public ativar(perfil: any): void {
    let self = this;

    this.messageService.addConfirmYesNo('MSG_PERFIL_CONFIRM_ATIVACAO', function () {
      perfil.situacao.id = 1;
      perfil.situacao.descricao = 'Ativo';
      self.ngOnInit();
      self.messageService.addMsgInf('Perfil ativado com sucesso!');
    });
  }

  /**
   * Inativa o 'Perfil' informado.
   *
   * @param perfil
   */
  public inativar(perfil: any): void {
    let self = this;

    this.messageService.addConfirmYesNo('MSG_PERFIL_CONFIRM_INATIVACAO', function () {
      perfil.situacao.id = 2;
      perfil.situacao.descricao = 'Inativo';
      self.ngOnInit();
      self.messageService.addMsgInf('Perfil inativado com sucesso!');
    });
  }

}
