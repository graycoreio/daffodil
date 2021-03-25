import { DaffFormFieldControl } from '../../form-field-control';

/**
 * A behavior interface for tracking the focused state of a form field.
 */
export interface DaffFocusable {
	_control: DaffFormFieldControl;
	focused: boolean;
}
