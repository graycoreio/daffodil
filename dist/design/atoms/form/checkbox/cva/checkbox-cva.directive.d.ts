import { OnInit } from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import { DaffCheckboxComponent } from '../checkbox.component';
/**
 * A directive for binding the DaffCheckboxComponent and the Control Value Accessor.
 */
export declare class DaffCheckboxControlValueAccessorDirective implements OnInit, ControlValueAccessor {
    _control: NgControl;
    private _checkbox;
    _onChange: (val: any) => void;
    _onTouched: () => void;
    /**
     * The value of the ControlValueAccessor
     */
    value: any;
    /**
     * The name of the ControlValueAccessor
     */
    name: string;
    constructor(_control: NgControl, _checkbox: DaffCheckboxComponent);
    /**
     * A lifecycle method called when the directive is initialized.
     */
    ngOnInit(): void;
    /**
     * writes a new value down into the component.
     */
    writeValue(value: any): void;
    /**
     * Registers the change handler
     */
    registerOnChange(fn: any): void;
    /**
     * Registers the touched handler
     */
    registerOnTouched(fn: any): void;
    /**
   
     * Sets the disabled state.
     */
    setDisabledState?(isDisabled: boolean): void;
    /**
     * calls the child checkbox's select function
     */
    fireSelect(): void;
    /**
     * calls the child checkbox's deselect function
     */
    fireDeselect(): void;
}
