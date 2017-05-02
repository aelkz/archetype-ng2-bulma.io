// /-------------------------------------------------\
// | artefatos da biblioteca angular 2.x             |
// \-------------------------------------------------/
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// /--------------------------------------------------\
// | app.acao.ts                                      |
// |--------------------------------------------------|
// | Classe para injetar as rotas de ação             |
// \--------------------------------------------------/
export class AcaoSistema {

  private static ACAO_LISTAR = 'listar';
  private static ACAO_INCLUIR = 'incluir';
  private static ACAO_ALTERAR = 'alterar';
  private static ACAO_VISUALIZAR = 'visualizar';

  private acaoVigente: string;

  /**
   * Construtor da classe.
   *
   * @param route
   */
  constructor(route: ActivatedRoute) {
    if (route !== null && route !== undefined) {
      const data = route.snapshot.data;

      for (const index of Object.keys(data)) {
        const param = data[index];

        if (param !== null && typeof param === 'object' && param['acao'] !== undefined) {
          this.acaoVigente = param['acao'];
          break;
        }
      }
    }
  }

  /**
   * Verifica se ação é referente a 'Incluir'.
   *
   * @return boolean
   */
  public isAcaoIncluir(): boolean {
    return AcaoSistema.ACAO_INCLUIR === this.acaoVigente;
  };

  /**
   * Verifica se ação é referente a 'Alterar'.
   *
   * @return boolean
   */
  public isAcaoAlterar(): boolean {
    return AcaoSistema.ACAO_ALTERAR === this.acaoVigente;
  }

  /**
   * Verifica se ação é referente a 'Visualizar'.
   *
   * @return boolean
   */
  public isAcaoVisualizar(): boolean {
    return AcaoSistema.ACAO_VISUALIZAR === this.acaoVigente;
  }

  /**
   * Verifica se ação é referente a 'Listar'.
   *
   * @return boolean
   */
  public isAcaoListar(): boolean {
    return AcaoSistema.ACAO_LISTAR === this.acaoVigente;
  }
}
