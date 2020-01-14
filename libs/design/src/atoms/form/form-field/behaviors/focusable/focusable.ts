import { DaffFocusable } from './focusable-interface';

import { DaffCanManageFormFieldControls } from '../can-manage-form-field-controls/can-manage-form-field-controls';
import { Constructor } from '../../../../../core/public_api';

/**
 * A mixin for giving a form control component a tracked focus state.
 *
 * This should be a trait, but typescript only supports mixins.
 * See: https://github.com/Microsoft/TypeScript/issues/311
 */
export function daffFocusableMixin<T extends Constructor<DaffCanManageFormFieldControls>>(Base: T):
  T & Constructor<DaffFocusable> {
  class Focusable extends Base implements DaffFocusable {

    constructor(...args: any[]) {
      super(...args);
    }

    get isFocused(): boolean {
      return this._control.focused;
    }
  }

  return Focusable;
}
