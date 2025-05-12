import {
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[daffFormLabel]',
})
export class DaffFormLabelDirective {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-form-label') class = true;
}
