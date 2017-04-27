import { Injectable } from '@angular/core';

/**
 * Classe service responsável por prover os recursos associadas a entidade 'Perfil'.
 */
@Injectable()
export class PerfilService {
  private perfis: any[];

  /**
   * Array para funcionalidades
   */
  private funcionalidades: any[];

  /**
   * Construtor da classe.
   */
  constructor() {
    this.perfis = [
      {
        'id': 1,
        'nome': 'Perfil 1',
        'descricao': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus, quam at faucibus tempus, metus turpis' +
                     ' eleifend enim, in fringilla felis dui non dolor.',
        'situacao': {
          'id': 1,
          'descricao': 'Ativo'
        }
      },
      {
        'id': 2,
        'nome': 'Perfil 2',
        'descricao': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus, quam at faucibus tempus, metus turpis' +
                     ' eleifend enim, in fringilla felis dui non dolor.',
        'situacao': {
          'id': 2,
          'descricao': 'Inativo'
        }
      },
      {
        'id': 3,
        'nome': 'Perfil 3',
        'descricao': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus, quam at faucibus tempus, metus turpis' +
                     'eleifend enim, in fringilla felis dui non dolor.',
        'situacao': {
          'id': 1,
          'descricao': 'Ativo'
        }
      },
      {
        'id': 4,
        'nome': 'Perfil 4',
        'descricao': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus, quam at faucibus tempus, metus turpis' +
                     'eleifend enim, in fringilla felis dui non dolor.',
        'situacao': {
          'id': 2,
          'descricao': 'Inativo'
        }
      }
    ];

/**
 * lista de funcionalidades para simulação no form perfil
 */
    this.funcionalidades = [
      {
        'id': 1,
        'nome': 'Funcionalidade 1',
        'acao': {
          'id': 2,
          'descricao': 'Alterar',
        },
        'descricao': 'funcionalidade teste 1',
      },
      {
        'id': 2,
        'nome': 'Funcionalidade 2',
        'acao': {
          'id': 1,
          'descricao': 'Consultar',
        },
        'descricao': 'funcionalidade teste 2',
      },
      {
        'id': 3,
        'nome': 'Funcionalidade 3',
        'acao': {
          'id': 3,
          'descricao': 'Excluir',
        },
        'descricao': 'funcionalidade teste 2',
      },
    ];
  }

  /**
   * Salva o 'Perfil' na base de dados.
   *
   * @param perfil
   */
  public salvar(perfil: any) {
    perfil.id = Math.floor(Math.random() * 100) + 5;
    perfil.descricao = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus, quam at faucibus tempus, metus turpis eleifend enim, in fringilla felis dui non dolor.';
    perfil.situacao = { 'id': 1, 'descricao': 'Ativo' };

    this.perfis.push(perfil);
  }

  /**
   * Retorna o array de 'perfis'.
   *
   * @returns any[]
   */
  public getPerfis(): any[] {
    return this.perfis;
  }

  /**
   * Retorna a instância de 'Perfil'.
   */
  public getPerfil(id: any): any {
    // TODO - verificar predicado de comparação com ===
    return this.getPerfis().filter(e => e.id == id)[0];
  }

 /**
   * Retorna o array de funcionalidades
   * @returns any[]
   */
  public getFuncionalidades(): any[] {
    return this.funcionalidades;
  }

  /**
   * Verifica se o 'Perfil' está 'Ativo'.
   *
   * @param perfil
   */
  public isAtivo(perfil: any): boolean {
    return perfil.situacao.id === 1;
  }

  /**
   * Verifica se o 'Perfil' está 'Inativo'.
   *
   * @param perfil
   */
  public isInativo(perfil: any): boolean {
    return perfil.situacao.id === 2;
  }

}
