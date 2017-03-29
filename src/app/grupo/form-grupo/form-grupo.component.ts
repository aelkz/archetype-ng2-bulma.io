import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

import { AcaoSistema } from '../../core/app.acao';
import { GrupoService } from '../grupo.service';
import { MessageService } from '../../core/message/message.service';

/**
 * Component responsável pela Inclusão, Alteração e Visualização de 'Grupo'.
 */
@Component({
  selector: 'app-form-grupo',
  templateUrl: './form-grupo.component.html'
})
export class FormGrupoComponent {

  private messageService: MessageService;
  private grupoService: GrupoService;
  private router: Router;

  public acao: AcaoSistema;
  public grupo: any = {};

  /**
   * Construtor da classe.
   *
   * @param grupoService
   * @param messageService
   * @param router
   * @param route
   */
  constructor(grupoService: GrupoService, messageService: MessageService, router: Router, route: ActivatedRoute) {
    this.router = router;
    this.grupoService = grupoService;
    this.acao = new AcaoSistema(route);
    this.messageService = messageService;

    let id = route.snapshot.params['id'];
    this.inicializarGrupo(id);
  }

  /**
   * Inicializa a instância de 'Grupo'.
   *
   * @param id
   */
  private inicializarGrupo(id: any): void {

    if (id !== undefined) {
      this.grupo = this.grupoService.getGrupo(id);
    }
  }

  /**
   * Salva a entidade 'Grupo' conforme os dados informados pelo 'Usuário'.
   *
   * @param grupo
   */
  public salvar(grupo: any, form: FormControl): void {

    if (form.valid) {
      let msg = grupo.id === undefined ? 'MSG_GRUPO_INCLUSAO' : 'MSG_GRUPO_ALTERACAO';

      this.grupoService.salvar(grupo);
      this.router.navigate(['/grupo/listar']);
      this.messageService.addMsgInf(msg);
    }
  }

}
