import { Constructor } from '../../../../../core/public_api';
import { DaffValidable } from './validable-interface';
import { DaffCanManageFormFieldControls } from '../can-manage-form-field-controls/can-manage-form-field-controls';
import { DaffFormFieldControl } from '../../form-field-control';


/**
 * A mixin for giving a form control component tracking for whether or not it
 * should be marked as valid.
 *
 * This should be a trait, but typescript only supports mixins.
 * See: https://github.com/Microsoft/TypeScript/issues/311
 */
export function daffValidableMixin<T extends Constructor<DaffCanManageFormFieldControls>>(Base: T): T & Constructor<DaffValidable> {
  class Validable extends Base implements DaffValidable {

    _control: DaffFormFieldControl;

    constructor(...args: any[]) {
      super(...args);
    }

    get isValid(): boolean {
      return !this._control.ngControl.errors && this._control.ngControl.touched;
    }
  }

  return Validable;
}
