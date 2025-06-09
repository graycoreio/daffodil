import {
  Directive,
  HostBinding,
} from '@angular/core';

/**
 * @deprecated in favor of the {@link DaffFormFieldLabelDirective}. It will be removed in v1.0.0. Deprecated in version 0.86.0. Will be removed in version 0.89.0.
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
