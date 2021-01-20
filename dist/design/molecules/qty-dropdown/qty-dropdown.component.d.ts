import { OnInit, Renderer2, EventEmitter } from '@angular/core';
export declare class DaffQtyDropdownComponent implements OnInit {
    private renderer;
    private readonly dropdownRange;
    qty: number;
    id: number | string;
    qtyChanged: EventEmitter<number>;
    /**
     * @docs-private
     */
    dropdownItemCounter: number[];
    /**
     * @docs-private
     */
    inputHasBeenShown: boolean;
    /**
     * @docs-private
     */
    onChange: (qty: number) => void;
    /**
     * @docs-private
     */
    onTouched: () => void;
    constructor(renderer: Renderer2);
    /**
     * @docs-private
     */
    ngOnInit(): void;
    /**
     * @docs-private
     */
    writeValue(qty: number): void;
    /**
     * @docs-private
     */
    registerOnChange(fn: (qty: number) => void): void;
    /**
     * @docs-private
     */
    registerOnTouched(fn: any): void;
    /**
     * @docs-private
     */
    setDisabledState(isDisabled: boolean): void;
    /**
     * @docs-private
     */
    readonly showQtyInputField: boolean;
    /**
     * @docs-private
     */
    onChangedWrapper(value: any): void;
    private isQtyOutsideDropdownRange;
    private selectInput;
}
