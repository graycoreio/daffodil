import {
  Directive,
  HostBinding,
} from '@angular/core';

/**
 * @deprecated in favor of the {@link DaffFormFieldLabelDirective}. Deprecated in version 0.86.0. Will be removed in version 1.0.0.
 */
@Directive({
  selector: '[daffFormLabel]',
})
export class DaffFormLabelDirective {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-form-label') class = true;
}
