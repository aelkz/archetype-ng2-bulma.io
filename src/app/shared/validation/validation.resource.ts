/**
 * Interface provider responsável por permitir a centralização de mensagem de validação.
 */
export interface ValidationResource {

    /**
     * Retorna a 'mensagem' conforme a 'chave' informada.
     *
     * @param key
     * @returns
     */
    getMessage(key: string): string;
}

/**
 * Interface 'Provider' responsável por prover instâncias de 'ValidationResource'.
 */
export interface ValidationResourceProvider {

    /**
     * Fabrica de instância de ValidationResource.
     */
    new (): ValidationResource;
}

/**
 * Classe 'Provider' responsável por prover instâncias de 'ValidationResource'.
 */
export class ValidationResourceProvider implements ValidationResourceProvider { }
