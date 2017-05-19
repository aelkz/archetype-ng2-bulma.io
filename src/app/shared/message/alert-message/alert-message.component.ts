import {Component, OnInit, trigger, transition, animate, state, style, keyframes} from '@angular/core';

import { MessageService, MessageItem } from '../message.service';

/**
 * Implementação de componente responsável por gerar a estrutura 'html' onde os alertas serão gerados.
 */
@Component({
  selector: 'alert-message',
  templateUrl: 'alert-message.component.html',
  styleUrls: ['alert-message.component.scss'],
  animations: [
    trigger('slideLeftRight', [
      state('*', style({opacity: 1, display: 'block'})),
      state('void', style({opacity: 0.8, display: 'none'})),
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({opacity: 0.8, transform: 'translateX(+20px)'}),
          style({opacity: 0.8, transform: 'translateX(-150px)'}),
          style({opacity: 1, transform: 'scale(1)'}),
          style({opacity: 1, transform: 'translateX(100%)'})
        ]))
      ])
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
