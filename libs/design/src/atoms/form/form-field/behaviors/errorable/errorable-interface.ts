import { DaffFormFieldControl } from '../../form-field-control';

/**
 * An interface for tracking the error state of
 * DaffFormControl.
 */
export interface DaffErrorable {
  _control: DaffFormFieldControl;
  isError: boolean;
}
