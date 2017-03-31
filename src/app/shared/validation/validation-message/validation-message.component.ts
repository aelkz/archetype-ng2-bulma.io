import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidationResourceProvider, ValidationResource } from '../validation.resource'

/**
 * Component responsável por prover o recurso de visualização de mensagem de validação,
 * sendo capaz de detectando o erro e a mensagem a ser apresentada.
 */
@Component({
  selector: 'validation-message',
  template: '<span *ngIf="for.touched || form.submitted"><p class="validation-invalid" *ngFor="let error of errors()" >{{error}}</p></span>',
  styleUrls: ['validation-message.component.scss']
})
export class ValidationMessageComponent {

  @Input() for: FormControl;
  @Input() form: FormGroup;

  private validationResource: ValidationResource;

  /**
   * Construtor da classe.
   *
   * @param ValidationResource
   */
  constructor(ValidationResource: ValidationResourceProvider) {
    this.validationResource = new ValidationResource();
  }

  /**
   * Retorna a mensagem conforme o erro detectado.
   */
  public errors(): string[] {
    let errors = [];

    if (this.for.errors !== null) {
      for (let error of Object.keys(this.for.errors)) {
        if (this.for.hasError(error)) {
          let message = this.validationResource.getMessage(error);

          if (message === undefined) {
            message = error;
          }
          errors.push(message);
        }
      }
    }
    return errors;
  }
}
