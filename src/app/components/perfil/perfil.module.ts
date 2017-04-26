// /-------------------------------------------------\
// | Componentes angular                             |
// \-------------------------------------------------/
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// /-------------------------------------------------\
// | Componentes compartilhados do projeto           |
// \-------------------------------------------------/
import { MessageModule } from '../../shared/message/message.module';
import { ValidationModule } from '../../shared/validation/validation.module';

// /-------------------------------------------------\
// | Componentes do módulo/projeto                   |
// \-------------------------------------------------/
import { ListPerfilComponent } from './list-perfil/list-perfil.component';
import { FormPerfilComponent } from './form-perfil/form-perfil.component';

/**
 * Modulo responsável por prover a manipulação da entidade 'Perfil'.
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MessageModule,
    ValidationModule
  ],
  declarations: [ListPerfilComponent, FormPerfilComponent]
})
export class PerfilModule { }
