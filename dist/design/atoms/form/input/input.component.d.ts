import { ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DaffFormFieldControl } from '../form-field/form-field-control';
/**
 * DaffInputComponent provides the same functionality as a native `<input>` and contains custom styling and functionality.
 */
export declare class DaffInputComponent implements DaffFormFieldControl {
    /**
     * @docs-private
     */
    ngControl: NgControl;
    private _elementRef;
    /**
     * Has the form been submitted.
     */
    formSubmitted: boolean;
    focused: boolean;
    /**
     * @docs-private
     */
    focus(): void;
    /**
     * @docs-private
     */
    blur(): void;
    constructor(
    /**
     * @docs-private
     */
    ngControl: NgControl, _elementRef: ElementRef<HTMLInputElement>);
    onFocus(): void;
}
