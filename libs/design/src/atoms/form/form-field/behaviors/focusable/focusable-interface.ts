import { DaffFormFieldControl } from '../../form-field-control';

/**
 * An interface enforcing a tracked focus state for a form field.
 */
export interface DaffFocusable {
  _control: DaffFormFieldControl;
  isFocused: boolean;
}
