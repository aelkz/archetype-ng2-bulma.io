// /-------------------------------------------------\
// | artefatos da biblioteca angular 2.x             |
// \-------------------------------------------------/
import { Injectable, EventEmitter } from '@angular/core';
import { InternacionalizacaoPipe } from './internacionalizacao.pipe';

// /--------------------------------------------------\
// | message.service.ts                               |
// |--------------------------------------------------|
// | Define os tipos de mensagem e alertas da         |
// | aplicação.                                       |
// \--------------------------------------------------/
export class MessageItem {

    public static ALERT_TYPE_INFO = 'alert-info';
    public static ALERT_TYPE_DANGER = 'alert-danger';
    public static ALERT_TYPE_SUCCES = 'alert-success';
    public static ALERT_TYPE_WARNING = 'alert-warning';

    public static CONFIRM_TYPE_OK = 'confirm_ok';
    public static CONFIRM_TYPE_YES_NO = 'confirm_yes_no';

    private msg: string;
    private type: string;
    private listenerNo: (() => ConfirmListener);
    private listenerYesOk: (() => ConfirmListener);

    /**
     * Construtor da classe.
     *
     * @param msg
     * @param type
     * @param listenerYesOk
     * @param listenerNo
     */
    constructor(msg: string, type: string, listenerYesOk?: (() => ConfirmListener), listenerNo?: (() => ConfirmListener)) {
        this.msg = msg;
        this.type = type;
        this.listenerNo = listenerNo;
        this.listenerYesOk = listenerYesOk;
    }

    /**
     * @returns msg
     */
    public getMsg(): string {
        return this.msg;
    }

    /**
     * @returns type
     */
    public getType(): string {
        return this.type;
    }

    /**
     * Executa o callback para as ações 'OK/YES'.
     */
    public executYesOk(): void {
        if (this.listenerYesOk !== null && this.listenerYesOk !== undefined) {
            this.listenerYesOk();
        }
    }

    /**
     * Executa o callback para a ação 'NO'.
     */
    public executNo(): void {
        if (this.listenerNo !== null && this.listenerNo !== undefined) {
            this.listenerNo();
        }
    }

    /**
     * Verifica se o item possui o 'type' é igual a 'CONFIRM_TYPE_OK'.
     *
     * @returns boolean
     */
    public isConfirmTypeOk(): boolean {
        return MessageItem.CONFIRM_TYPE_OK === this.type;
    }

    /**
     * Verifica se o item possui o 'type' é igual a 'CONFIRM_TYPE_YES_NO'.
     *
     * @returns boolean
     */
    public isConfirmTypeYesNo(): boolean {
        return MessageItem.CONFIRM_TYPE_YES_NO === this.type;
    }
}

/**
 * Interface 'Listener' que determina o contrato da função callback referente ao 'confirm'.
 */
export interface ConfirmListener {
  method: () => void;
}

/**
 * Classe 'service' responsável por prover o recurso de mensagem da aplicação.
 */
@Injectable()
export class MessageService {

    private i18nPipe: InternacionalizacaoPipe;
    private msgEmitter: EventEmitter<MessageItem>;
    private confirmEmitter: EventEmitter<MessageItem>;

    /**
     * Construtor da classe.
     *
     * @param i18nPipe
     */
    constructor(i18nPipe: InternacionalizacaoPipe) {
        this.i18nPipe = i18nPipe;
        this.msgEmitter = new EventEmitter();
        this.confirmEmitter = new EventEmitter();
    }

    /**
     * Retorna a descrição da mensagem conforme os parâmetros informados.
     *
     * @param msg
     */
    private getDescription(msg: string, params: any): string {
        let description = null;

        if (msg !== null && msg !== undefined && msg.trim().length !== 0) {
            description = this.i18nPipe.transform(msg, params);
            description = description === undefined ? msg : description;
        }
        return description;
    }

    /**
     * Adiciona o modal de confirmação segundo o type (confirm_ok, confirm_yes_no), informado.
     *
     * @param msg
     * @param type
     * @param params
     */
    private addConfirm(msg: string, type: string, params: any, listenerYesOk: (() => ConfirmListener), listenerNo?: (() => ConfirmListener)): void {
        const description = this.getDescription(msg, params);

        if (description !== null) {
            this.confirmEmitter.emit(new MessageItem(description, type, listenerYesOk, listenerNo));
        }
    }

    /**
     * Adiciona a mensagem segundo o type (alert-success, alert-info, alert-warning e alert-danger), informado.
     *
     * @param msg
     * @param type
     * @param params
     */
    private addMsg(msg: string, type: string, params?: any): void {
        const description = this.getDescription(msg, params);

        if (description !== null) {
            this.msgEmitter.emit(new MessageItem(description, type));
        }
    }

    /**
     * Adiciona o modal de confirmação OK.
     *
     * @param msg
     * @param listenerOk
     * @param params
     */
    public addConfirmOk(msg: string, listenerOk?: (() => ConfirmListener), params?: any): void {
        this.addConfirm(msg, MessageItem.CONFIRM_TYPE_OK, params, listenerOk);
    }

    /**
     * Adiciona o modal de confirmação YES/NO.
     *
     * @param msg
     * @param listenerYes
     * @param listenerNo
     * @param params
     */
    public addConfirmYesNo(msg: string, listenerYes?: (() => ConfirmListener), listenerNo?: (() => ConfirmListener), params?: any): void {
        this.addConfirm(msg, MessageItem.CONFIRM_TYPE_YES_NO, params, listenerYes, listenerNo);
    }

    /**
     * Adiciona mensagem de Sucesso.
     *
     * @param msg
     * @param params
     */
    public addMsgSuccess(msg: string, params?: any): void {
        this.addMsg(msg, MessageItem.ALERT_TYPE_SUCCES, params);
    }

    /**
     * Adiciona mensagem de Informação.
     *
     * @param msg
     * @param params
     */
    public addMsgInf(msg: string, params?: any): void {
        this.addMsg(msg, MessageItem.ALERT_TYPE_INFO, params);
    }

    /**
     * Adiciona mensagem de Alerta.
     *
     * @param msg
     * @param params
     */
    public addMsgWarning(msg: string, params?: any): void {
        this.addMsg(msg, MessageItem.ALERT_TYPE_WARNING, params);
    }

    /**
     * Adiciona mensagem de Erro.
     *
     * @param msg
     * @param params
     */
    public addMsgDanger(msg: string, params?: any): void {
        this.addMsg(msg, MessageItem.ALERT_TYPE_DANGER, params);
    }

    /**
     * @returns EventEmitter
     */
    public getMsgEmitter(): EventEmitter<MessageItem> {
        return this.msgEmitter;
    }

    /**
     * @returns EventEmitter
     */
    public getConfirmEmitter(): EventEmitter<MessageItem> {
        return this.confirmEmitter;
    }
}
