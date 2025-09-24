import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffFormFieldAction]',
})
export class DaffFormFieldActionDirective {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-form-field-action') class = true;
}
