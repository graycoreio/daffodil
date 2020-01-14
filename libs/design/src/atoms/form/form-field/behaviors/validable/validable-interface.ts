import { DaffFormFieldControl } from '../../form-field-control';

/**
 * An interface enforcing a tracked valid state for a form field.
 */
export interface DaffValidable {
  _control: DaffFormFieldControl;
  isValid: boolean;
}
