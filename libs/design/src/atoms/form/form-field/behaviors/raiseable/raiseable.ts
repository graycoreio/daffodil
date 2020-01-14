import { Constructor } from '../../../../../core/public_api';
import { DaffFormFieldControl } from '../../form-field-control';
import { DaffRaiseable } from './raiseable-interface';
import { DaffFocusable } from '../focusable/focusable-interface';

/**
/**
 * A mixin for giving a form control component tracking for whether or not the
 * label is raised when the control has a value or is focused.
 *
 * This should be a trait, but typescript only supports mixins.
 * See: https://github.com/Microsoft/TypeScript/issues/311
 */
export function daffRaiseableMixin<T extends Constructor<DaffFocusable>>(Base: T) {
  class Raiseable extends Base implements DaffRaiseable {

    _control: DaffFormFieldControl;

    constructor(...args: any[]) {
      super(...args);
    }

    get isRaised(): boolean {
      return (this._control.ngControl.value || this.isFocused);
    }
  }

  return Raiseable;
}
