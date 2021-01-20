/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Renderer2, Output, EventEmitter } from '@angular/core';
export class DaffQtyDropdownComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.dropdownRange = 9;
        this.qtyChanged = new EventEmitter();
        /**
         * \@docs-private
         */
        this.onChange = (/**
         * @param {?} qty
         * @return {?}
         */
        (qty) => { });
        /**
         * \@docs-private
         */
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * \@docs-private
     * @return {?}
     */
    ngOnInit() {
        this.dropdownItemCounter = Array.from(Array(this.dropdownRange), (/**
         * @param {?} x
         * @param {?} i
         * @return {?}
         */
        (x, i) => i));
        if (!this.qty) {
            this.qty = 1;
        }
    }
    /**
     * \@docs-private
     * @param {?} qty
     * @return {?}
     */
    writeValue(qty) {
        this.qty = qty;
        this.onChange(this.qty);
    }
    /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * \@docs-private
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        if (this.inputHasBeenShown) {
            this.renderer.setProperty(document.getElementById('input_' + this.id), 'disabled', isDisabled);
        }
        else {
            this.renderer.setProperty(document.getElementById('select_' + this.id), 'disabled', isDisabled);
        }
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get showQtyInputField() {
        if (!this.isQtyOutsideDropdownRange() && !this.inputHasBeenShown) {
            return false;
        }
        else {
            this.inputHasBeenShown = true;
            return true;
        }
    }
    /**
     * \@docs-private
     * @param {?} value
     * @return {?}
     */
    onChangedWrapper(value) {
        value = parseInt(value, 10);
        if (value === 10) {
            this.selectInput();
        }
        this.qtyChanged.emit(value);
        this.onChange(value);
    }
    /**
     * @private
     * @return {?}
     */
    isQtyOutsideDropdownRange() {
        return this.qty > this.dropdownRange;
    }
    /**
     * @private
     * @return {?}
     */
    selectInput() {
        /** @type {?} */
        const that = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            const input = (/** @type {?} */ (document.getElementById('input_' + that.id)));
            input.select();
        }));
    }
}
DaffQtyDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-qty-dropdown',
                template: "<daff-form-field class=\"daff-qty-dropdown\">\n  <select daff-native-select *ngIf=\"!showQtyInputField\" id=\"select_{{id}}\" [(ngModel)]=\"qty\" (ngModelChange)=\"onChangedWrapper(qty)\" (blur)=\"onTouched()\">\n    <option *ngFor=\"let item of dropdownItemCounter\" [value]=\"item+1\">{{ item+1 }}</option>\n    <option value=\"10\">10+</option>\n  </select>\n  <input daff-input id=\"input_{{id}}\" class=\"daff-qty-dropdown__input\" [(ngModel)]=\"qty\" (ngModelChange)=\"onChangedWrapper(qty)\" (blur)=\"onTouched()\" *ngIf=\"showQtyInputField\">\n</daff-form-field>",
                styles: [".daff-qty-dropdown__input{width:50px}"]
            }] }
];
/** @nocollapse */
DaffQtyDropdownComponent.ctorParameters = () => [
    { type: Renderer2 }
];
DaffQtyDropdownComponent.propDecorators = {
    qty: [{ type: Input }],
    id: [{ type: Input }],
    qtyChanged: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffQtyDropdownComponent.prototype.dropdownRange;
    /** @type {?} */
    DaffQtyDropdownComponent.prototype.qty;
    /** @type {?} */
    DaffQtyDropdownComponent.prototype.id;
    /** @type {?} */
    DaffQtyDropdownComponent.prototype.qtyChanged;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffQtyDropdownComponent.prototype.dropdownItemCounter;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffQtyDropdownComponent.prototype.inputHasBeenShown;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffQtyDropdownComponent.prototype.onChange;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffQtyDropdownComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    DaffQtyDropdownComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXR5LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJtb2xlY3VsZXMvcXR5LWRyb3Bkb3duL3F0eS1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzFGLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUF5Qm5DLFlBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUF2QnRCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBSXpCLGVBQVUsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQzs7OztRQWF6RSxhQUFROzs7O1FBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRSxHQUFFLENBQUMsRUFBQzs7OztRQUk5QixjQUFTOzs7UUFBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQUM7SUFFc0IsQ0FBQzs7Ozs7SUFLNUMsUUFBUTtRQUNOLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDOzs7OztRQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLENBQUEsQ0FBQyxFQUFDLENBQUM7UUFFMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDYixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7Ozs7O0lBS0QsVUFBVSxDQUFDLEdBQVc7UUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7Ozs7SUFLRCxnQkFBZ0IsQ0FBQyxFQUF5QjtRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7Ozs7SUFLRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQUtELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDaEc7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDakc7SUFDSCxDQUFDOzs7OztJQUtELElBQUksaUJBQWlCO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUNoRSxPQUFPLEtBQUssQ0FBQTtTQUNiO2FBQU07WUFDTCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1lBQzlCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDOzs7Ozs7SUFLRCxnQkFBZ0IsQ0FBQyxLQUFVO1FBQ3pCLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRU8seUJBQXlCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRU8sV0FBVzs7Y0FDWCxJQUFJLEdBQUcsSUFBSTtRQUNqQixVQUFVOzs7UUFBQzs7a0JBQ0gsS0FBSyxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBb0I7WUFDN0UsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBOUdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUU3Qixza0JBQTRDOzthQUM3Qzs7OztZQU5rQyxTQUFTOzs7a0JBV3pDLEtBQUs7aUJBQ0wsS0FBSzt5QkFDTCxNQUFNOzs7Ozs7O0lBSlAsaURBQW1DOztJQUVuQyx1Q0FBcUI7O0lBQ3JCLHNDQUE2Qjs7SUFDN0IsOENBQXdFOzs7OztJQUt6RSx1REFBOEI7Ozs7O0lBSTlCLHFEQUEyQjs7Ozs7SUFJM0IsNENBQStCOzs7OztJQUk5Qiw2Q0FBcUI7Ozs7O0lBRVQsNENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBSZW5kZXJlcjIsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhZmYtcXR5LWRyb3Bkb3duJyxcbiAgc3R5bGVVcmxzOiBbJy4vcXR5LWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9xdHktZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZRdHlEcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICBwcml2YXRlIHJlYWRvbmx5IGRyb3Bkb3duUmFuZ2UgPSA5O1xuXG4gIEBJbnB1dCgpIHF0eTogbnVtYmVyO1xuICBASW5wdXQoKSBpZDogbnVtYmVyIHwgc3RyaW5nO1xuICBAT3V0cHV0KCkgcXR5Q2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cblx0ZHJvcGRvd25JdGVtQ291bnRlcjogbnVtYmVyW107XG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuXHRpbnB1dEhhc0JlZW5TaG93bjogYm9vbGVhbjtcblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG5cdG9uQ2hhbmdlID0gKHF0eTogbnVtYmVyKSA9PiB7fTtcblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZHJvcGRvd25JdGVtQ291bnRlciA9IEFycmF5LmZyb20oQXJyYXkodGhpcy5kcm9wZG93blJhbmdlKSwoeCxpKT0+aSk7XG5cbiAgICBpZiAoIXRoaXMucXR5KSB7XG4gICAgICB0aGlzLnF0eSA9IDE7XG4gICAgfVxuICB9XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIHdyaXRlVmFsdWUocXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnF0eSA9IHF0eTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMucXR5KTtcbiAgfVxuXG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAocXR5OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5wdXRIYXNCZWVuU2hvd24pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0XycgKyB0aGlzLmlkKSwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdF8nICsgdGhpcy5pZCksICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICAgIH1cbiAgfVxuXG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuICBnZXQgc2hvd1F0eUlucHV0RmllbGQoKSA6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5pc1F0eU91dHNpZGVEcm9wZG93blJhbmdlKCkgJiYgIXRoaXMuaW5wdXRIYXNCZWVuU2hvd24pIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0SGFzQmVlblNob3duID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuICBvbkNoYW5nZWRXcmFwcGVyKHZhbHVlOiBhbnkpIHtcbiAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgaWYgKHZhbHVlID09PSAxMCkge1xuICAgICAgdGhpcy5zZWxlY3RJbnB1dCgpO1xuICAgIH1cbiAgICB0aGlzLnF0eUNoYW5nZWQuZW1pdCh2YWx1ZSk7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGlzUXR5T3V0c2lkZURyb3Bkb3duUmFuZ2UoKSB7ICAgIFxuICAgIHJldHVybiB0aGlzLnF0eSA+IHRoaXMuZHJvcGRvd25SYW5nZTtcbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0SW5wdXQoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0XycgKyB0aGF0LmlkKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgaW5wdXQuc2VsZWN0KCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==