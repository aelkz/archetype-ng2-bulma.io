import { Injectable } from '@angular/core';

/**
 * Classe service responsável por prover os recursos associadas a entidade 'Grupo'.
 */
@Injectable()
export class GrupoService {

  private grupos: any[];

  /**
   * Construtor da classe.
   */
  constructor() {
    this.grupos = [
      {
        "id": 1,
        "nome": "Grupo 1",
        "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus, quam at faucibus tempus, metus turpis eleifend enim, in fringilla felis dui non dolor.",
        "situacao": {
          "id": 1,
          "descricao": "Ativo"
        }
      },
      {
        "id": 2,
        "nome": "Grupo 2",
        "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus, quam at faucibus tempus, metus turpis eleifend enim, in fringilla felis dui non dolor.",
        "situacao": {
          "id": 2,
          "descricao": "Inativo"
        }
      },
      {
        "id": 3,
        "nome": "Grupo 3",
        "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus, quam at faucibus tempus, metus turpis eleifend enim, in fringilla felis dui non dolor.",
        "situacao": {
          "id": 1,
          "descricao": "Ativo"
        }
      },
      {
        "id": 4,
        "nome": "Grupo 4",
        "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus, quam at faucibus tempus, metus turpis eleifend enim, in fringilla felis dui non dolor.",
        "situacao": {
          "id": 2,
          "descricao": "Inativo"
        }
      }
    ];
  }

  /**
   * Salva o 'Grupo' na base de dados.
   *
   * @param grupo
   */
  public salvar(grupo: any) {
    grupo.id = Math.floor(Math.random() * 100) + 5;
    grupo.situacao = { "id": 1, "descricao": "Ativo" };
    this.grupos.push(grupo);
  }

  /**
   * Retorna o array de 'Grupos'.
   *
   * @returns any[]
   */
  public getGrupos(): any[] {
    return this.grupos;
  }

  /**
   * Retorna a instância de 'Grupo'.
   */
  public getGrupo(id: any): any {
    return this.grupos.filter(grupo => grupo.id == id)[0];
  }

  /**
   * Verifica se o 'Grupo' está 'Ativo'.
   *
   * @param grupo
   */
  public isAtivo(grupo: any): boolean {
    return grupo.situacao.id === 1;
  }

  /**
   * Verifica se o 'Grupo' está 'Inativo'.
   *
   * @param grupo
   */
  public isInativo(grupo: any): boolean {
    return grupo.situacao.id === 2;
  }

}
