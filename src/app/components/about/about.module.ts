// /-------------------------------------------------\
// | Componentes angular                             |
// \-------------------------------------------------/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// /-------------------------------------------------\
// | Componentes do módulo/projeto                   |
// \-------------------------------------------------/
import { AboutComponent } from './about.component';

/**
 * Modulo responsável por prover a manipulação da entidade 'Perfil'.
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }