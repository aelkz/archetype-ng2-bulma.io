// /-------------------------------------------------\
// | Componentes angular                             |
// \-------------------------------------------------/
import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

// /-------------------------------------------------\
// | Componentes compartilhados do projeto           |
// \-------------------------------------------------/
import { MessageService, ConfirmListener } from '../../../shared/message/message.service';
import { MessageResource, MessageResourceProvider } from './../../../shared/message/message.resource';
import { Animations } from './../../../core/animations/animations';

// /-------------------------------------------------\
// | Componentes do módulo/projeto                   |
// \-------------------------------------------------/
import { PerfilService } from '../perfil.service';
/**
 * Component responsável pela 'Listagem' de 'Perfil'.
 */
@Component({
  selector: 'app-list-perfil',
  templateUrl: './list-perfil.component.html',
  animations: [ Animations.slideInOut ]
})
export class ListPerfilComponent implements OnInit {
  private messageService: MessageService;
  private perfilService: PerfilService;
  private messageResource: MessageResource;
  
  private collapsed: boolean;
  public perfis: any[];

  /**
   * Construtor da classe.
   *
   * @param perfilService
   * @param messageService
   */
  constructor(perfilService: PerfilService, messageService: MessageService, MessageResource: MessageResourceProvider) {
    this.perfilService = perfilService;
    this.messageService = messageService;
    this.messageResource = new MessageResource();
     this.collapsed = true;
  }

  /**
   * Inicializa as dependências do Component.
   */
  ngOnInit() {
    this.perfis = this.perfilService.getPerfis();
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
    const self = this;

    this.messageService.addConfirmYesNo('MSG_CONFIRM_ATIVACAO', (): ConfirmListener => {
      perfil.situacao.id = 1;
      perfil.situacao.descricao = 'Ativo';
      self.ngOnInit();
      self.messageService.addMsgInf(this.messageResource.getDescription('MSG_ATIVACAO'), this.messageResource.getDescription('LABEL_PERFIL'));
      return;
    });
  }

  /**
   * Inativa o 'Perfil' informado.
   *
   * @param perfil
   */
  public inativar(perfil: any): void {
    const self = this;

    this.messageService.addConfirmYesNo('MSG_CONFIRM_INATIVACAO', (): ConfirmListener => {
      perfil.situacao.id = 2;
      perfil.situacao.descricao = 'Inativo';
      self.ngOnInit();
      self.messageService.addMsgInf(this.messageResource.getDescription('MSG_INATIVACAO'), this.messageResource.getDescription('LABEL_PERFIL'));
      return;
    });
  }

}
