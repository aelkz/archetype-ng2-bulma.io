import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessoComponent } from './acesso.component';

/**
 * Modulo responsável por prover o template padrão e as rotas para o mecanismo de acesso a aplicação. */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AcessoComponent]
})
export class AcessoModule { }
