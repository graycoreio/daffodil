import { DaffErrorable } from './errorable-interface';
import { Constructor } from '../../../../../core/public_api';
import { DaffCanManageFormFieldControls } from '../can-manage-form-field-controls/can-manage-form-field-controls';

/**
 * A mixin for giving a form control component tracking for whether or not it
 * should be marked as error.
 *
 * This should be a trait, but typescript only supports mixins.
 * See: https://github.com/Microsoft/TypeScript/issues/311
 */
export function daffErrorableMixin<T extends Constructor<DaffCanManageFormFieldControls>>(Base: T):
  T & Constructor<DaffErrorable> {
  class Errorable extends Base implements DaffErrorable {

    constructor(...args: any[]) {
      super(...args);
    }

    get isError(): boolean {
      return this._control.ngControl.errors && (this._control.ngControl.touched || this._control.ngControl.dirty);
    }
  }

  return Errorable;
}
