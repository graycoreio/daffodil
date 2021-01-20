import { OnInit, EventEmitter } from '@angular/core';
import { DaffRadioSetComponent } from '../radio-set/radio-set.component';
export declare class DaffRadioComponent implements OnInit {
    private radioset;
    /**
     * @docs-private
     */
    role: string;
    /**
     * @docs-private
     */
    readonly focusClass: boolean;
    /**
     * @docs-private
     */
    readonly disabledClass: boolean;
    /**
     * @docs-private
     */
    _checked: boolean;
    /**
       * The checked property of the radio
     */
    checked: boolean;
    /**
       * The value of the radio
     */
    value: any;
    /**
       * The id of the radio. It is uniquely generated but can be overwritten by the user. Must be unique.
     */
    id: string;
    /**
       * Name of the Radio
     */
    name: string;
    /**
       * Used for aria-label. Default to name if user does not input a label.
     */
    label: never;
    /**
       * Used for aria-labelledby.
     */
    labelledby: any;
    /**
     * Output event of selection being changed
     */
    selectionChange: EventEmitter<boolean>;
    disabled: boolean;
    focused: boolean;
    constructor(radioset: DaffRadioSetComponent);
    /**
     * @docs-private
     */
    ngOnInit(): void;
    /**
     * updates Focus styling
     */
    onFocus(): void;
    /**
     * updates Blur styling
     */
    onBlur(): void;
    /**
     * toggles checked attribute on
     */
    select(): void;
    /**
     * toggles checked attribute off
     */
    deselect(): void;
    onChange(): void;
}
