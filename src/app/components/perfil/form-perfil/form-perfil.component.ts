// /-------------------------------------------------\
// | Componentes angular                             |
// \-------------------------------------------------/
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

// /-------------------------------------------------\
// | Componentes compartilhados do projeto           |
// \-------------------------------------------------/
import { AcaoSistema } from '../../../app.acao';
import { MessageService } from '../../../shared/message/message.service';
import { MessageResource, MessageResourceProvider } from './../../../shared/message/message.resource';

// /-------------------------------------------------\
// | Componentes do módulo/projeto                   |
// \-------------------------------------------------/
import { PerfilService } from '../perfil.service';

/**
 * Component responsável pela Inclusão e Alteração de 'Perfil'.
 */
@Component({
  selector: 'app-form-perfil',
  templateUrl: './form-perfil.component.html',
  styleUrls: ['form-perfil.component.scss']
})
export class FormPerfilComponent {
  private messageService: MessageService;
  private perfilService: PerfilService;
  private messageResource: MessageResource;
  private router: Router;

  public acao: AcaoSistema;
  public perfil: any = {};
  public toggleShowHide = true;

  /** array da lista de funcionalidades **/
  public funcionalidades: any = {};

  /**
   * Construtor da classe.
   *
   * @param perfilService
   * @param messageService
   * @param router
   * @param route
   */
  constructor(perfilService: PerfilService, messageService: MessageService, router: Router, route: ActivatedRoute, MessageResource: MessageResourceProvider) {
    this.router = router;
    this.perfilService = perfilService;
    this.acao = new AcaoSistema(route);
    this.messageService = messageService;
    this.messageResource = new MessageResource();

    let id = route.snapshot.params['id'];
    this.inicializarPerfil(id);

    /**
     * Carrega a lista de funcionalidades vindas do service
     */
    this.funcionalidades = this.perfilService.getFuncionalidades();
  }

  /**
   * Inicializa a instância de 'Perfil'.
   *
   * @param id
   */
  private inicializarPerfil(id: any): void {
    if (id !== undefined) {
      this.perfil = this.perfilService.getPerfil(id);
    }
  }

  /**
   * Salva a entidade 'Perfil' conforme os dados informados pelo 'Usuário'.
   *
   * @param perfil
   */
  public salvar(perfil: any, form: FormControl): void {
    if (form.valid) {
      const msg = perfil.id === undefined ? 'MSG_INCLUSAO' : 'MSG_ALTERACAO';

      this.perfilService.salvar(perfil);
      this.router.navigate(['/perfil/listar']);
      this.messageService.addMsgInf(msg, this.messageResource.getDescription('LABEL_PERFIL'));
    }
  }

  /**
   * Adiciona a funcionalidade escolhida a gride do formulario perfil
   */
  public addFuncionalidade(funcionalidade: any = {}) {
    funcionalidade = this.perfil.funcionalidade;
        alert(funcionalidade);
  }

 }
