import { Constructor, daffSuffixableMixin, daffPrefixableMixin } from '../../../../../core/public_api';

import { daffRaiseableMixin } from '../raiseable/raiseable';
import { daffFocusableMixin } from '../focusable/focusable';
import { daffErrorableMixin } from '../errorable/errorable';
import { daffValidableMixin } from '../validable/validable';
import { DaffCanManageFormFieldControls } from '../can-manage-form-field-controls/can-manage-form-field-controls';

/**
 * A mixin for aggregating all FormField-related mixins.
 *
 * This should be a trait, but typescript only supports mixins.
 * See: https://github.com/Microsoft/TypeScript/issues/311
 */
export function daffFormFieldableMixin<T extends Constructor<DaffCanManageFormFieldControls>>(Base: T) {
  class FormFieldable extends Base {
  }

  return daffSuffixableMixin(
    daffPrefixableMixin(
    daffErrorableMixin(
    daffValidableMixin(
    daffRaiseableMixin(
    daffFocusableMixin(FormFieldable)
    )))));
}
