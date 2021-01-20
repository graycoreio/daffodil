import { NgControl } from '@angular/forms';
import { DaffRadioControlValueAccessorDirective } from '../cva/radio-cva.directive';
export interface ControlAccessorPair {
    control: NgControl;
    accessor: DaffRadioControlValueAccessorDirective;
}
export declare class DaffRadioRegistry {
    private _accessors;
    /**
     * @description
     * Adds a control to the internal registry.
     */
    add(control: NgControl, accessor: DaffRadioControlValueAccessorDirective): void;
    /**
     * @description
     * Removes a control from the internal registry.
     */
    remove(accessor: DaffRadioControlValueAccessorDirective): void;
    /**
     * @description
     * Selects a radio button.
     */
    select(accessor: DaffRadioControlValueAccessorDirective): void;
    private _isSameGroup;
}
