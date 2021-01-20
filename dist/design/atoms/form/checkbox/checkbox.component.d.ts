import { EventEmitter, ChangeDetectorRef, ElementRef } from '@angular/core';
export declare class DaffCheckboxComponent {
    private _cdRef;
    /**
     * @docs-private
     */
    nativeCheckbox: ElementRef<HTMLInputElement>;
    /**
     * The name of the checkbox.
     */
    name: string;
    /**
     * The value of the checkbox.
     */
    value: any;
    /**
     * Boolean value to determine whether or not the checkbox is checked.
     */
    private _checked;
    checked: boolean;
    /**
     * The id of the checkbox. Must be unique. If not entered by a user then it is generated.
     */
    id: string;
    /**
     * The aria-label of the checkbox. If not set by user then it defaults to the name of the checkbox.
     */
    label: never;
    /**
     * The aria-labeledby of the checkbox.
     */
    labeledBy: string;
    /**
     * Event on whether or not the selection has changed.
     */
    becameChecked: EventEmitter<boolean>;
    becameUnchecked: EventEmitter<void>;
    /**
     * Whether the checkbox is focused
     */
    focused: boolean;
    /**
     * Whether the checkbox is disabled.
    */
    disabled: boolean;
    /**
     * The role of the component. Set to "checkbox".
       * @docs-private
     */
    role: string;
    /**
     * @docs-private
     */
    _onChange(val: Event): void;
    /**
     * @docs-private
     */
    readonly focusClass: boolean;
    /**
     * @docs-private
     */
    readonly disabledClass: boolean;
    /**
     * Sets focused to false.
     */
    onBlur(): void;
    /**
     * Sets focused to true.
     */
    onFocus(): void;
    constructor(_cdRef: ChangeDetectorRef);
    /**
     * Sets checked to true.
    */
    select(): void;
    /**
     * Sets checked to false
    */
    deselect(): void;
}
