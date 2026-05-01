import { Directive } from '@angular/core';

/**
 * DaffFormFieldActionDirective marks an element, typically a button, as an action attached to a form control inside `DaffFormFieldComponent`.
 */
@Directive({
  selector: '[daffFormFieldAction]',
  host: {
    class: 'daff-form-field-action',
  },
})
export class DaffFormFieldActionDirective {}
