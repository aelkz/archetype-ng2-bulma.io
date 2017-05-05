import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

import { AcaoSistema } from '../../../app.acao';
import { MessageService } from '../../../shared/message/message.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html'
})
export class FormUsuarioComponent implements OnInit {
  private messageService: MessageService;
  private router: Router;

  public acao: AcaoSistema;
  public usuario: any = {};

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
  constructor(messageService: MessageService, router: Router, route: ActivatedRoute) {
    this.router = router;
    this.acao = new AcaoSistema(route);
    this.messageService = messageService;
  }

  ngOnInit() { }

}
