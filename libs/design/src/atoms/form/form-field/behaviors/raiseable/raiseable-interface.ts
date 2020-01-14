import { DaffFormFieldControl } from '../../form-field-control';

/**
 * An interface enforcing a tracked raiseable state for a form field's label.
 */
export interface DaffRaiseable {
  _control: DaffFormFieldControl;
  isRaised: boolean;
}
