// /-------------------------------------------------\
// | artefatos da biblioteca angular 2.x             |
// \-------------------------------------------------/
import {Component, OnInit, Input, ElementRef, Renderer, AfterViewInit, ViewChild, forwardRef} from '@angular/core';
import {FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import { ValidationResourceProvider, ValidationResource } from '../validation.resource';


// /--------------------------------------------------\
// | validation-message.component.ts                  |
// |--------------------------------------------------|
// | Responsável por prover o recursos de visualização|
// | de mensagem de validação, interceptando o erro e |
// | tratando a mensagem a ser apresentada.           |
// \--------------------------------------------------/
@Component({
  selector: 'validation-message',
  template: '<span *ngIf="for.touched || form.submitted"><p class="validation-invalid" *ngFor="let error of errors()" >{{error}}</p></span>',
  styleUrls: ['validation-message.component.scss']
})
export class ValidationMessageComponent implements AfterViewInit {
  @Input() for: FormControl;
  @Input() form: FormGroup;

  private validationResource: ValidationResource;

  /**
   * Construtor da classe.
   * @param ValidationResource
   */
  constructor(private _elementRef: ElementRef, private _renderer: Renderer, private ValidationResource: ValidationResourceProvider) {
    this.validationResource = new ValidationResource();
  }

  ngAfterViewInit(): void { }

    /**
   * Retorna a mensagem conforme o erro detectado.
   */
  public errors(): string[] {
    const errors = [];

    // console.log(this._elementRef.nativeElement);

    if (this.for.errors !== null) {
      for (const error of Object.keys(this.for.errors)) {
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
