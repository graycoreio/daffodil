import { DaffFormFieldControl } from '../../form-field-control';

/**
 * A behavior interface for tracking the disabled state of a form field.
 */
export interface DaffDisableable {
  _control: DaffFormFieldControl;
  disabled: boolean;
}
