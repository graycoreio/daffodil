import { OnInit } from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import { DaffRadioComponent } from '../radio.component';
import { DaffRadioRegistry } from '../registry/radio-registry';
/**
 * ControlValueAccessor functionality for the DaffRadio
 */
export declare class DaffRadioControlValueAccessorDirective implements OnInit, ControlValueAccessor {
    _control: NgControl;
    private _registry;
    private _radio;
    _onChange: () => void;
    _onTouched: () => void;
    /**
     * The value of the ControlValueAccessor
     */
    value: any;
    /**
     * The name of the ControlValueAccessor
     */
    name: string;
    constructor(_control: NgControl, _registry: DaffRadioRegistry, _radio: DaffRadioComponent);
    ngOnInit(): void;
    /**
     *
     * writeValue function from the CVA interface
     */
    writeValue(value: any): void;
    /**
     * registerOnChange implemented from the CVA interface
     */
    registerOnChange(fn: any): void;
    /**
     * registerOnTouch implemented from the CVA interface
     */
    registerOnTouched(fn: any): void;
    /**
     * sets the disabled state.
     */
    setDisabledState?(isDisabled: boolean): void;
    /**
      calls select function for the radio
    */
    fireSelect(): void;
    /**
      calls deselect function for the radio
     */
    fireDeselect(): void;
}
