import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ValidationMessageComponent } from './validation-message/validation-message.component';

/**
 * Modulo responsável por prover recursos para simplificar a validação de campos no formulário do sistema.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ValidationMessageComponent],
  exports: [ValidationMessageComponent]
})
export class ValidationModule { }
