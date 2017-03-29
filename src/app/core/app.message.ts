
import { MessageResource } from './message/message.resource';
import { ValidationResource } from './validation/validation.resource';

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

          'LABEL_CONFIRM_TITLE': 'Confirmação',
          'LABEL_CONFIRM_OK': 'Ok',
          'LABEL_CONFIRM_YES': 'Sim',
          'LABEL_CONFIRM_NO': 'Não',

          'LABEL_NOME': 'Nome',
          'LABEL_ACAO': 'Ações',
          'LABEL_GRUPO': 'Grupo',
          'LABEL_PERFIL': 'Perfil',
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
          'LABEL_GRUPO_INCLUIR': 'Incluir Grupo',

          'TITLE_SIGLA_SISTEMA': 'SISTEMA',
          'TITLE_GRUPO_LISTAR': 'LISTAR GRUPO',
          'TITLE_GRUPO_INCLUIR': 'INCLUIR GRUPO',
          'TITLE_GRUPO_ALTERAR': 'ALTERAR GRUPO',
          'TITLE_GRUPO_VISUALIZAR': 'VISUALIZAR GRUPO',

          'TITLE_PERFIL_LISTAR': 'LISTAR PERFIL',
          'TITLE_PERFIL_INCLUIR': 'INCLUIR PERFIL',
          'TITLE_PERFIL_ALTERAR': 'ALTERAR PERFIL',
          'TITLE_PERFIL_VISUALIZAR': 'VISUALIZAR PERFIL',

          'MSG_GRUPO_INCLUSAO': 'Grupo incluído com sucesso!',
          'MSG_GRUPO_ALTERACAO': 'Grupo alterado com sucesso!',
          'MSG_GRUPO_CONFIRM_ATIVACAO': 'Deseja realmente ativar o grupo selecionado?',
          'MSG_GRUPO_CONFIRM_INATIVACAO': 'Deseja realmente inativar o grupo selecionado?',

          'MSG_PERFIL_INCLUSAO': 'Perfil incluído com sucesso!',
          'MSG_PERFIL_ALTERACAO': 'Perfil alterado com sucesso!',
          'MSG_PERFIL_CONFIRM_ATIVACAO': 'Deseja realmente ativar o perfil selecionado?',
          'MSG_PERFIL_CONFIRM_INATIVACAO': 'Deseja realmente inativar o perfil selecionado?'
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
