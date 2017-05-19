// /-------------------------------------------------\
// | artefatos da biblioteca angular 2.x             |
// \-------------------------------------------------/
import {Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

// /-------------------------------------------------\
// | artefatos compartilhados do projeto             |
// \-------------------------------------------------/
import { MessageService } from '../../../shared/message/message.service';
import { MessageResource, MessageResourceProvider } from './../../../shared/message/message.resource';
import { IMyDpOptions } from 'mydatepicker';

// /-------------------------------------------------\
// | artefatos do módulo/projeto                     |
// \-------------------------------------------------/
import { AcaoSistema } from '../../../app.acao';
import { GrupoService } from '../grupo.service';

// /--------------------------------------------------\
// | form-grupo.component.ts                          |
// |--------------------------------------------------|
// | Componente para inclusão de grupos               |
// \--------------------------------------------------/
@Component({
  selector: 'app-form-grupo',
  templateUrl: 'form-grupo.component.html',
  styleUrls: ['form-grupo.component.scss']
})
export class FormGrupoComponent {
  private messageService: MessageService;
  private grupoService: GrupoService;
  private messageResource: MessageResource;
  private router: Router;

  // https://github.com/kekeh/mydatepicker
  private myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
    sunHighlight: true,
    markCurrentDay: true,
    minYear: 1990,
    maxYear: 2100,
    showClearDateBtn: true,
    showSelectorArrow: false
  };

  public toggleShowHide = true;
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
  constructor(grupoService: GrupoService, messageService: MessageService, router: Router, route: ActivatedRoute, MessageResource: MessageResourceProvider) {
    this.router = router;
    this.grupoService = grupoService;
    this.acao = new AcaoSistema(route);
    this.messageService = messageService;
    this.messageResource = new MessageResource();
    this.inicializarGrupo(route.snapshot.params['id']);
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
      const msg = grupo.id === undefined ? 'MSG_INCLUSAO' : 'MSG_ALTERACAO';

      this.grupoService.salvar(grupo);
      this.router.navigate(['/grupo/listar']);
      this.messageService.addMsgInf(msg, this.messageResource.getDescription('LABEL_GRUPO'));
    }
  }

}
