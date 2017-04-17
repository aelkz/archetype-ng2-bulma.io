import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MessageModule } from '../../shared/message/message.module';
import { ValidationModule } from '../../shared/validation/validation.module';
import { FormGrupoComponent } from './form-grupo/form-grupo.component';
import { ListGrupoComponent } from './list-grupo/list-grupo.component';

/**
 * Modulo responsável por prover a manipulação da entidade 'Grupo'.
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MessageModule,
    ValidationModule
  ],
  declarations: [FormGrupoComponent, ListGrupoComponent]
})
export class GrupoModule { }
