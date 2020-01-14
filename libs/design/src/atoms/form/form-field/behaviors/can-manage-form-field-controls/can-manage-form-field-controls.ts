import { DaffFormFieldControl } from '../../form-field-control';

/**
 * A generic descriptor for any component that can manage another component that
 * implements FormFieldControl. This interface is the basis for the other
 * FormField behaviors.
 */
export interface DaffCanManageFormFieldControls {
    _control: DaffFormFieldControl;
}
