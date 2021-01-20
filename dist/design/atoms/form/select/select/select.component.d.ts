import { ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DaffFormFieldControl } from '../../form-field/form-field-control';
export declare class DaffNativeSelectComponent implements DaffFormFieldControl {
    /**
     * @docs-private
     */
    ngControl: NgControl;
    private _elementRef;
    /**
     * @docs-private
     */
    controlType: string;
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
