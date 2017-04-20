import { Component, OnInit, trigger, transition, animate, state, style } from '@angular/core';

import { MessageService, MessageItem } from '../message.service';

/**
 * Implementação de componente responsável por gerar a estrutura 'html' onde os alertas serão gerados.
 */
@Component({
  selector: 'app-alert-message',
  templateUrl: 'alert-message.component.html',
  styleUrls: ['alert-message.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('void', style({
        '-webkit-transform': 'translate3d(0px, -100%, 0px)',
        '-moz-transform': 'translate3d(0px, -100%, 0px)',
        '-o-transform': 'translate3d(0px, -100%, 0px)',
        '-ms-transform': 'translate3d(0px, -100%, 0px)',
        'transform': 'translate3d(0px, -100%, 0px)'
      })),
      transition('* => *', animate('800ms ease-in-out'))
    ])
  ]
})
export class AlertMessageComponent {

  private static RUNTIME_MILLISECONDS = 5000;
  private messageService: MessageService;

  public items: MessageItem[];

  /**
   * Construtor da classe.
   *
   * @param messageService
   */
  constructor(messageService: MessageService) {
    this.items = [];
    this.messageService = messageService;
    this.messageService.getMsgEmitter().subscribe((item: any) => this.addMsgItem(item));
  }

  /**
   * Adiciona o item de mensagem a visualização.
   *
   * @param messageItem
   */
  private addMsgItem(messageItem: MessageItem): void {
    const count = this.items.filter(item => item.getMsg() === messageItem.getMsg()).length;

    if (count === 0) {
      this.items.push(messageItem);

      setTimeout(() => {
        this.removeMsg(messageItem);
      }, AlertMessageComponent.RUNTIME_MILLISECONDS);
    }
  }

  /**
   * Remove o item de mensagem da visualização.
   *
   * @param messageItem
   */
  public removeMsg(messageItem: MessageItem): void {
    this.items = this.items.filter(item => item.getMsg() !== messageItem.getMsg());
  }
}
