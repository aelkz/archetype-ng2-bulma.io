import { MessageResource } from './shared/message/message.resource';
import { ValidationResource } from './shared/validation/validation.resource';

/**
 * Implementação de provider responsável por prover as 'descrições' e 'mensagens' utilizadas na aplicação em um unico local.
 */
export class MessageResourceImpl implements MessageResource, ValidationResource {
    private resource: Object;

    /**
     * Construtor da classe.
     */
    constructor() {
        this.resource = {
          'required': 'Campo de preenchimento obrigatório.',

          'LABEL_CONFIRM_TITLE': 'CONFIRMAÇÃO',
          'LABEL_CONFIRM_OK': 'OK',
          'LABEL_CONFIRM_YES': 'Sim',
          'LABEL_CONFIRM_NO': 'Não',

          'LABEL_NOME': 'Nome',
          'LABEL_ACAO': 'Ações',
          'LABEL_GRUPO': 'Grupo',
          'LABEL_PERFIL': 'Perfil',
          'LABEL_USUARIO': 'Usuário',

          'LABEL_SITUACAO': 'Situação',
          'LABEL_DESCRICAO': 'Descrição',
          'LABEL_VISUALIZAR': 'Visualizar',
          'LABEL_FUNCIONALIDADE': 'Funcionalidade',

          'LABEL_ATIVAR': 'Ativar',
          'LABEL_INATIVAR': 'Inativar',
          'LABEL_ALTERAR': 'Alterar',
          'LABEL_SALVAR': 'Salvar',
          'LABEL_VOLTAR': 'Voltar',
          'LABEL_CANCELAR': 'Cancelar',

          'TITLE_SIGLA_SISTEMA': 'SISTEMA',

          'TITLE_LISTAR': 'LISTAR',
          'TITLE_INCLUIR': 'INCLUIR',
          'TITLE_ALTERAR': 'ALTERAR',
          'TITLE_VISUALIZAR': 'VISUALIZAR',

          'MSG_CONFIRM_ATIVACAO': 'Deseja realmente ativar o registro selecionado?',
          'MSG_CONFIRM_INATIVACAO': 'Deseja realmente inativar o registro selecionado?',

          'MSG_ATIVACAO': '{0} ativado com sucesso!',
          'MSG_INATIVACAO': '{0} inativado com sucesso!',

          'MSG_INCLUSAO': '{0} incluído com sucesso!',
          'MSG_ALTERACAO': '{0} alterado com sucesso!',
        };
    }

    /**
     * Retorna a 'descrição' conforme a 'chave' informada.
     *
     * @param key
     * @returns
     */
    getDescription(key: string): string {
        return this.resource[key];
    }

    /**
     * Retorna a 'mensagem' conforme a 'chave' informada.
     *
     * @param key
     * @returns
     */
    getMessage(key: string): string {
        return this.getDescription(key);
    }

}
