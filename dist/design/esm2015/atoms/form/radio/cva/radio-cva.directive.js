/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Self, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DaffRadioComponent } from '../radio.component';
import { DaffRadioRegistry } from '../registry/radio-registry';
/**
 * ControlValueAccessor functionality for the DaffRadio
 */
export class DaffRadioControlValueAccessorDirective {
    /**
     * @param {?} _control
     * @param {?} _registry
     * @param {?} _radio
     */
    constructor(_control, _registry, _radio) {
        this._control = _control;
        this._registry = _registry;
        this._radio = _radio;
        if (this._control != null) {
            this._control.valueAccessor = this;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.writeValue(this._control.value);
        this._registry.add(this._control, this);
        this._radio.selectionChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => value ? this._onChange() : null));
    }
    /**
     *
     * writeValue function from the CVA interface
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (this.value === value) {
            this._onChange();
            this.fireSelect();
        }
    }
    /**
     * registerOnChange implemented from the CVA interface
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = (/**
         * @return {?}
         */
        () => {
            fn(this.value);
            this._registry.select(this);
        });
    }
    /**
     * registerOnTouch implemented from the CVA interface
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * sets the disabled state.
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._radio.disabled = isDisabled;
    }
    /**
     * calls select function for the radio
     * @return {?}
     */
    fireSelect() {
        this._radio.select();
    }
    /**
     * calls deselect function for the radio
     * @return {?}
     */
    fireDeselect() {
        this._radio.deselect();
    }
}
DaffRadioControlValueAccessorDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line: directive-selector
                selector: 'daff-radio[ngModel], daff-radio[formControl], daff-radio[formControlName]'
            },] }
];
/** @nocollapse */
DaffRadioControlValueAccessorDirective.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: DaffRadioRegistry },
    { type: DaffRadioComponent }
];
DaffRadioControlValueAccessorDirective.propDecorators = {
    value: [{ type: Input }],
    name: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DaffRadioControlValueAccessorDirective.prototype._onChange;
    /** @type {?} */
    DaffRadioControlValueAccessorDirective.prototype._onTouched;
    /**
     * The value of the ControlValueAccessor
     * @type {?}
     */
    DaffRadioControlValueAccessorDirective.prototype.value;
    /**
     * The name of the ControlValueAccessor
     * @type {?}
     */
    DaffRadioControlValueAccessorDirective.prototype.name;
    /** @type {?} */
    DaffRadioControlValueAccessorDirective.prototype._control;
    /**
     * @type {?}
     * @private
     */
    DaffRadioControlValueAccessorDirective.prototype._registry;
    /**
     * @type {?}
     * @private
     */
    DaffRadioControlValueAccessorDirective.prototype._radio;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tY3ZhLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJhdG9tcy9mb3JtL3JhZGlvL2N2YS9yYWRpby1jdmEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxJQUFJLEVBQUUsUUFBUSxFQUFjLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxTQUFTLEVBQTJDLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFTL0QsTUFBTSxPQUFPLHNDQUFzQzs7Ozs7O0lBY2pELFlBQzZCLFFBQW1CLEVBQ3RDLFNBQTRCLEVBQzVCLE1BQTBCO1FBRlAsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUN0QyxjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFvQjtRQUVsQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUNwQztJQUNILENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsU0FBUzs7OztRQUNuQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ3pDLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBS0QsVUFBVSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtZQUN4QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7Ozs7O0lBS0QsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsU0FBUzs7O1FBQUcsR0FBRyxFQUFFO1lBQ3BCLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUEsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUtELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBS0QsZ0JBQWdCLENBQUUsVUFBbUI7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBS0QsVUFBVTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFLRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUFuRkYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsMkVBQTJFO2FBQ3RGOzs7O1lBVlEsU0FBUyx1QkEwQmIsUUFBUSxZQUFJLElBQUk7WUF4QlosaUJBQWlCO1lBRGpCLGtCQUFrQjs7O29CQWlCeEIsS0FBSzttQkFLTCxLQUFLOzs7O0lBWE4sMkRBQXNCOztJQUN0Qiw0REFBdUI7Ozs7O0lBS3ZCLHVEQUFvQjs7Ozs7SUFLcEIsc0RBQXNCOztJQUdwQiwwREFBOEM7Ozs7O0lBQzlDLDJEQUFvQzs7Ozs7SUFDcEMsd0RBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBTZWxmLCBPcHRpb25hbCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEYWZmUmFkaW9Db21wb25lbnQgfSBmcm9tICcuLi9yYWRpby5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGFmZlJhZGlvUmVnaXN0cnkgfSBmcm9tICcuLi9yZWdpc3RyeS9yYWRpby1yZWdpc3RyeSc7XG5cbi8qKlxuICogQ29udHJvbFZhbHVlQWNjZXNzb3IgZnVuY3Rpb25hbGl0eSBmb3IgdGhlIERhZmZSYWRpb1xuICovXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkYWZmLXJhZGlvW25nTW9kZWxdLCBkYWZmLXJhZGlvW2Zvcm1Db250cm9sXSwgZGFmZi1yYWRpb1tmb3JtQ29udHJvbE5hbWVdJ1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBfb25DaGFuZ2U6ICgpID0+IHZvaWQ7XG4gIF9vblRvdWNoZWQ6ICgpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgQ29udHJvbFZhbHVlQWNjZXNzb3JcbiAgICovXG4gIEBJbnB1dCgpIHZhbHVlOiBhbnk7XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBDb250cm9sVmFsdWVBY2Nlc3NvclxuICAgKi9cbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIF9jb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgcHJpdmF0ZSBfcmVnaXN0cnk6IERhZmZSYWRpb1JlZ2lzdHJ5LFxuICAgIHByaXZhdGUgX3JhZGlvOiBEYWZmUmFkaW9Db21wb25lbnRcbiAgKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRyb2wgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fY29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5fY29udHJvbC52YWx1ZSk7XG4gICAgdGhpcy5fcmVnaXN0cnkuYWRkKHRoaXMuX2NvbnRyb2wsIHRoaXMpO1xuXG4gICAgdGhpcy5fcmFkaW8uc2VsZWN0aW9uQ2hhbmdlLnN1YnNjcmliZShcbiAgICAgIHZhbHVlID0+IHZhbHVlID8gdGhpcy5fb25DaGFuZ2UoKSA6IG51bGxcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogd3JpdGVWYWx1ZSBmdW5jdGlvbiBmcm9tIHRoZSBDVkEgaW50ZXJmYWNlXG4gICAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX29uQ2hhbmdlKCk7XG4gICAgICB0aGlzLmZpcmVTZWxlY3QoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXJPbkNoYW5nZSBpbXBsZW1lbnRlZCBmcm9tIHRoZSBDVkEgaW50ZXJmYWNlXG4gICAqL1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGZuKHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5fcmVnaXN0cnkuc2VsZWN0KHRoaXMpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXJPblRvdWNoIGltcGxlbWVudGVkIGZyb20gdGhlIENWQSBpbnRlcmZhY2VcbiAgICovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRzIHRoZSBkaXNhYmxlZCBzdGF0ZS5cbiAgICovXG4gIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9yYWRpby5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICBjYWxscyBzZWxlY3QgZnVuY3Rpb24gZm9yIHRoZSByYWRpb1xuICAqL1xuICBmaXJlU2VsZWN0KCkge1xuICAgIHRoaXMuX3JhZGlvLnNlbGVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAgY2FsbHMgZGVzZWxlY3QgZnVuY3Rpb24gZm9yIHRoZSByYWRpb1xuICAgKi9cbiAgZmlyZURlc2VsZWN0KCkge1xuICAgIHRoaXMuX3JhZGlvLmRlc2VsZWN0KCk7XG4gIH1cbn1cbiJdfQ==