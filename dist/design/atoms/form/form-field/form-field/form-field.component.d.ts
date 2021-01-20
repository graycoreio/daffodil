import { DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';
import { DaffFormFieldControl } from '../form-field-control';
export declare class DaffFormFieldComponent implements DoCheck, AfterContentInit, AfterContentChecked {
    /**
     * @docs-private
     */
    faChevronDown: import("@fortawesome/fontawesome-common-types").IconDefinition;
    /**
     * The tracking property used to determine if the parent form has been submitted,
     * and thus show an error message (even if the field hasn't been touched).
     *
     * @deprecated
     */
    formSubmitted: boolean;
    /**
     * The child form control that the form-field manages
       * @docs-private
     */
    _control: DaffFormFieldControl;
    /**
     * Tracking property to keep a record of whether or not the
     * form field should be marked as error.
     */
    isError: boolean;
    /**
     * Tracking property to keep a record of whether or not the
     * form field should be marked as valid.
     */
    isValid: boolean;
    /**
     * Keeps the state of the form field consistent with its child DaffFormControl
     *
     * TODO: consider whether or not this can be refactored to some kind of
     * observable to remove unnecessary change detection.
       *
       * @docs-private
     */
    ngDoCheck(): void;
    /**
     * Validate whether or not the FormField is in
     * a "usable" state.
     */
    private _validateFormControl;
    /**
     * Life cycle hook to verify that the form field has an acceptable
     * child control instance. Mostly useful for development-time
     * validation of usage.
       *
       * @docs-private
     */
    ngAfterContentInit(): void;
    /**
     * Life cycle hook to verify that the form field has an acceptable
     * child control instance. Mostly useful for development-time
     * validation of usage.
       *
       * @docs-private
     */
    ngAfterContentChecked(): void;
}
