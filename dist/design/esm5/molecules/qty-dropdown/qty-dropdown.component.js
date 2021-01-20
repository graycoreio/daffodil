/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Renderer2, Output, EventEmitter } from '@angular/core';
var DaffQtyDropdownComponent = /** @class */ (function () {
    function DaffQtyDropdownComponent(renderer) {
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
        function (qty) { });
        /**
         * \@docs-private
         */
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @return {?}
     */
    DaffQtyDropdownComponent.prototype.ngOnInit = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this.dropdownItemCounter = Array.from(Array(this.dropdownRange), (/**
         * @param {?} x
         * @param {?} i
         * @return {?}
         */
        function (x, i) { return i; }));
        if (!this.qty) {
            this.qty = 1;
        }
    };
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @param {?} qty
     * @return {?}
     */
    DaffQtyDropdownComponent.prototype.writeValue = /**
     * \@docs-private
     * @param {?} qty
     * @return {?}
     */
    function (qty) {
        this.qty = qty;
        this.onChange(this.qty);
    };
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    DaffQtyDropdownComponent.prototype.registerOnChange = /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    DaffQtyDropdownComponent.prototype.registerOnTouched = /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @param {?} isDisabled
     * @return {?}
     */
    DaffQtyDropdownComponent.prototype.setDisabledState = /**
     * \@docs-private
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        if (this.inputHasBeenShown) {
            this.renderer.setProperty(document.getElementById('input_' + this.id), 'disabled', isDisabled);
        }
        else {
            this.renderer.setProperty(document.getElementById('select_' + this.id), 'disabled', isDisabled);
        }
    };
    Object.defineProperty(DaffQtyDropdownComponent.prototype, "showQtyInputField", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            if (!this.isQtyOutsideDropdownRange() && !this.inputHasBeenShown) {
                return false;
            }
            else {
                this.inputHasBeenShown = true;
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @param {?} value
     * @return {?}
     */
    DaffQtyDropdownComponent.prototype.onChangedWrapper = /**
     * \@docs-private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = parseInt(value, 10);
        if (value === 10) {
            this.selectInput();
        }
        this.qtyChanged.emit(value);
        this.onChange(value);
    };
    /**
     * @private
     * @return {?}
     */
    DaffQtyDropdownComponent.prototype.isQtyOutsideDropdownRange = /**
     * @private
     * @return {?}
     */
    function () {
        return this.qty > this.dropdownRange;
    };
    /**
     * @private
     * @return {?}
     */
    DaffQtyDropdownComponent.prototype.selectInput = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var that = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var input = (/** @type {?} */ (document.getElementById('input_' + that.id)));
            input.select();
        }));
    };
    DaffQtyDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-qty-dropdown',
                    template: "<daff-form-field class=\"daff-qty-dropdown\">\n  <select daff-native-select *ngIf=\"!showQtyInputField\" id=\"select_{{id}}\" [(ngModel)]=\"qty\" (ngModelChange)=\"onChangedWrapper(qty)\" (blur)=\"onTouched()\">\n    <option *ngFor=\"let item of dropdownItemCounter\" [value]=\"item+1\">{{ item+1 }}</option>\n    <option value=\"10\">10+</option>\n  </select>\n  <input daff-input id=\"input_{{id}}\" class=\"daff-qty-dropdown__input\" [(ngModel)]=\"qty\" (ngModelChange)=\"onChangedWrapper(qty)\" (blur)=\"onTouched()\" *ngIf=\"showQtyInputField\">\n</daff-form-field>",
                    styles: [".daff-qty-dropdown__input{width:50px}"]
                }] }
    ];
    /** @nocollapse */
    DaffQtyDropdownComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    DaffQtyDropdownComponent.propDecorators = {
        qty: [{ type: Input }],
        id: [{ type: Input }],
        qtyChanged: [{ type: Output }]
    };
    return DaffQtyDropdownComponent;
}());
export { DaffQtyDropdownComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXR5LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJtb2xlY3VsZXMvcXR5LWRyb3Bkb3duL3F0eS1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFGO0lBOEJFLGtDQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBdkJ0QixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUl6QixlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7Ozs7UUFhekUsYUFBUTs7OztRQUFHLFVBQUMsR0FBVyxJQUFNLENBQUMsRUFBQzs7OztRQUk5QixjQUFTOzs7UUFBRyxjQUFPLENBQUMsRUFBQztJQUVzQixDQUFDO0lBRTdDOztPQUVHOzs7OztJQUNGLDJDQUFROzs7O0lBQVI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzs7Ozs7UUFBQyxVQUFDLENBQUMsRUFBQyxDQUFDLElBQUcsT0FBQSxDQUFDLEVBQUQsQ0FBQyxFQUFDLENBQUM7UUFFMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDYixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVGOztPQUVHOzs7Ozs7SUFDRiw2Q0FBVTs7Ozs7SUFBVixVQUFXLEdBQVc7UUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUY7O09BRUc7Ozs7OztJQUNGLG1EQUFnQjs7Ozs7SUFBaEIsVUFBaUIsRUFBeUI7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVGOztPQUVHOzs7Ozs7SUFDRixvREFBaUI7Ozs7O0lBQWpCLFVBQWtCLEVBQU87UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVGOztPQUVHOzs7Ozs7SUFDRixtREFBZ0I7Ozs7O0lBQWhCLFVBQWlCLFVBQW1CO1FBQ2xDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDaEc7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDakc7SUFDSCxDQUFDO0lBS0Qsc0JBQUksdURBQWlCO1FBSHRCOztXQUVHOzs7OztRQUNGO1lBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO2dCQUNoRSxPQUFPLEtBQUssQ0FBQTthQUNiO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7Z0JBQzlCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7UUFDSCxDQUFDOzs7T0FBQTtJQUVGOztPQUVHOzs7Ozs7SUFDRixtREFBZ0I7Ozs7O0lBQWhCLFVBQWlCLEtBQVU7UUFDekIsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUIsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFTyw0REFBeUI7Ozs7SUFBakM7UUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVPLDhDQUFXOzs7O0lBQW5COztZQUNRLElBQUksR0FBRyxJQUFJO1FBQ2pCLFVBQVU7OztRQUFDOztnQkFDSCxLQUFLLEdBQUcsbUJBQUEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFvQjtZQUM3RSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDakIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkE5R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBRTdCLHNrQkFBNEM7O2lCQUM3Qzs7OztnQkFOa0MsU0FBUzs7O3NCQVd6QyxLQUFLO3FCQUNMLEtBQUs7NkJBQ0wsTUFBTTs7SUFvR1QsK0JBQUM7Q0FBQSxBQS9HRCxJQStHQztTQTFHWSx3QkFBd0I7Ozs7OztJQUVuQyxpREFBbUM7O0lBRW5DLHVDQUFxQjs7SUFDckIsc0NBQTZCOztJQUM3Qiw4Q0FBd0U7Ozs7O0lBS3pFLHVEQUE4Qjs7Ozs7SUFJOUIscURBQTJCOzs7OztJQUkzQiw0Q0FBK0I7Ozs7O0lBSTlCLDZDQUFxQjs7Ozs7SUFFVCw0Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFJlbmRlcmVyMiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGFmZi1xdHktZHJvcGRvd24nLFxuICBzdHlsZVVybHM6IFsnLi9xdHktZHJvcGRvd24uY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3F0eS1kcm9wZG93bi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlF0eURyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG4gIHByaXZhdGUgcmVhZG9ubHkgZHJvcGRvd25SYW5nZSA9IDk7XG5cbiAgQElucHV0KCkgcXR5OiBudW1iZXI7XG4gIEBJbnB1dCgpIGlkOiBudW1iZXIgfCBzdHJpbmc7XG4gIEBPdXRwdXQoKSBxdHlDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuXHRkcm9wZG93bkl0ZW1Db3VudGVyOiBudW1iZXJbXTtcblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG5cdGlucHV0SGFzQmVlblNob3duOiBib29sZWFuO1xuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cblx0b25DaGFuZ2UgPSAocXR5OiBudW1iZXIpID0+IHt9O1xuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kcm9wZG93bkl0ZW1Db3VudGVyID0gQXJyYXkuZnJvbShBcnJheSh0aGlzLmRyb3Bkb3duUmFuZ2UpLCh4LGkpPT5pKTtcblxuICAgIGlmICghdGhpcy5xdHkpIHtcbiAgICAgIHRoaXMucXR5ID0gMTtcbiAgICB9XG4gIH1cblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgd3JpdGVWYWx1ZShxdHk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucXR5ID0gcXR5O1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy5xdHkpO1xuICB9XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChxdHk6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnB1dEhhc0JlZW5TaG93bikge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRfJyArIHRoaXMuaWQpLCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0XycgKyB0aGlzLmlkKSwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gICAgfVxuICB9XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIGdldCBzaG93UXR5SW5wdXRGaWVsZCgpIDogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmlzUXR5T3V0c2lkZURyb3Bkb3duUmFuZ2UoKSAmJiAhdGhpcy5pbnB1dEhhc0JlZW5TaG93bikge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXRIYXNCZWVuU2hvd24gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIG9uQ2hhbmdlZFdyYXBwZXIodmFsdWU6IGFueSkge1xuICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICBpZiAodmFsdWUgPT09IDEwKSB7XG4gICAgICB0aGlzLnNlbGVjdElucHV0KCk7XG4gICAgfVxuICAgIHRoaXMucXR5Q2hhbmdlZC5lbWl0KHZhbHVlKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNRdHlPdXRzaWRlRHJvcGRvd25SYW5nZSgpIHsgICAgXG4gICAgcmV0dXJuIHRoaXMucXR5ID4gdGhpcy5kcm9wZG93blJhbmdlO1xuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RJbnB1dCgpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRfJyArIHRoYXQuaWQpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICBpbnB1dC5zZWxlY3QoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19