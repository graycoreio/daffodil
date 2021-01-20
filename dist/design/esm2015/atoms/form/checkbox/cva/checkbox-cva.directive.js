/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Self, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DaffCheckboxComponent } from '../checkbox.component';
/**
 * A directive for binding the DaffCheckboxComponent and the Control Value Accessor.
 */
export class DaffCheckboxControlValueAccessorDirective {
    /**
     * @param {?} _control
     * @param {?} _checkbox
     */
    constructor(_control, _checkbox) {
        this._control = _control;
        this._checkbox = _checkbox;
        if (this._control != null) {
            this._control.valueAccessor = this;
        }
    }
    /**
     * A lifecycle method called when the directive is initialized.
     * @return {?}
     */
    ngOnInit() {
        // See the note about `writeValue` usage.
        this.writeValue(this._control.value);
        // Watch for user events on the component to update the state
        this._checkbox.becameChecked.subscribe((/**
         * @return {?}
         */
        () => {
            this._onChange(true);
        }));
        this._checkbox.becameUnchecked.subscribe((/**
         * @return {?}
         */
        () => {
            this._onChange(false);
        }));
    }
    /**
     * writes a new value down into the component.
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        value = !!value;
        value === true ? this.fireSelect() : this.fireDeselect();
    }
    /**
     * Registers the change handler
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = (/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            fn(val);
        });
    }
    /**
     * Registers the touched handler
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * Sets the disabled state.
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._checkbox.disabled = isDisabled;
    }
    /**
     * calls the child checkbox's select function
     * @return {?}
     */
    fireSelect() {
        this._checkbox.select();
    }
    /**
     * calls the child checkbox's deselect function
     * @return {?}
     */
    fireDeselect() {
        this._checkbox.deselect();
    }
}
DaffCheckboxControlValueAccessorDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line: directive-selector
                selector: 'daff-checkbox[ngModel], daff-checkbox[formControl], daff-checkbox[formControlName]',
            },] }
];
/** @nocollapse */
DaffCheckboxControlValueAccessorDirective.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: DaffCheckboxComponent }
];
DaffCheckboxControlValueAccessorDirective.propDecorators = {
    value: [{ type: Input }],
    name: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DaffCheckboxControlValueAccessorDirective.prototype._onChange;
    /** @type {?} */
    DaffCheckboxControlValueAccessorDirective.prototype._onTouched;
    /**
     * The value of the ControlValueAccessor
     * @type {?}
     */
    DaffCheckboxControlValueAccessorDirective.prototype.value;
    /**
     * The name of the ControlValueAccessor
     * @type {?}
     */
    DaffCheckboxControlValueAccessorDirective.prototype.name;
    /** @type {?} */
    DaffCheckboxControlValueAccessorDirective.prototype._control;
    /**
     * @type {?}
     * @private
     */
    DaffCheckboxControlValueAccessorDirective.prototype._checkbox;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtY3ZhLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJhdG9tcy9mb3JtL2NoZWNrYm94L2N2YS9jaGVja2JveC1jdmEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxJQUFJLEVBQUUsUUFBUSxFQUFjLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxTQUFTLEVBQTJDLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFTOUQsTUFBTSxPQUFPLHlDQUF5Qzs7Ozs7SUFjcEQsWUFDNkIsUUFBbUIsRUFDdEMsU0FBZ0M7UUFEYixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3RDLGNBQVMsR0FBVCxTQUFTLENBQXVCO1FBRXhDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7SUFNRCxRQUFRO1FBQ04seUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyQyw2REFBNkQ7UUFDN0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsU0FBUzs7O1FBQ3BDLEdBQUcsRUFBRTtZQUNILElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxFQUNGLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7UUFDdEMsR0FBRyxFQUFFO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUtELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2hCLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNELENBQUM7Ozs7OztJQUtELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLFNBQVM7Ozs7UUFBRyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3ZCLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQSxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBS0QsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFNRCxnQkFBZ0IsQ0FBRSxVQUFtQjtRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFLRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7OztJQUtELFlBQVk7UUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVCLENBQUM7OztZQTVGRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxvRkFBb0Y7YUFDL0Y7Ozs7WUFUUSxTQUFTLHVCQXlCYixRQUFRLFlBQUksSUFBSTtZQXhCWixxQkFBcUI7OztvQkFnQjNCLEtBQUs7bUJBS0wsS0FBSzs7OztJQVhOLDhEQUErQjs7SUFDL0IsK0RBQXdCOzs7OztJQUt4QiwwREFBb0I7Ozs7O0lBS3BCLHlEQUFzQjs7SUFHcEIsNkRBQThDOzs7OztJQUM5Qyw4REFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIFNlbGYsIE9wdGlvbmFsLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERhZmZDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4uL2NoZWNrYm94LmNvbXBvbmVudCc7XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgZm9yIGJpbmRpbmcgdGhlIERhZmZDaGVja2JveENvbXBvbmVudCBhbmQgdGhlIENvbnRyb2wgVmFsdWUgQWNjZXNzb3IuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2RhZmYtY2hlY2tib3hbbmdNb2RlbF0sIGRhZmYtY2hlY2tib3hbZm9ybUNvbnRyb2xdLCBkYWZmLWNoZWNrYm94W2Zvcm1Db250cm9sTmFtZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBfb25DaGFuZ2UgOiAodmFsOiBhbnkpID0+IHZvaWQ7XG4gIF9vblRvdWNoZWQgOiAoKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIENvbnRyb2xWYWx1ZUFjY2Vzc29yXG4gICAqL1xuICBASW5wdXQoKSB2YWx1ZTogYW55O1xuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgQ29udHJvbFZhbHVlQWNjZXNzb3JcbiAgICovXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBfY29udHJvbDogTmdDb250cm9sLFxuICAgIHByaXZhdGUgX2NoZWNrYm94OiBEYWZmQ2hlY2tib3hDb21wb25lbnRcbiAgKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRyb2wgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fY29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBBIGxpZmVjeWNsZSBtZXRob2QgY2FsbGVkIHdoZW4gdGhlIGRpcmVjdGl2ZSBpcyBpbml0aWFsaXplZC5cbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIFNlZSB0aGUgbm90ZSBhYm91dCBgd3JpdGVWYWx1ZWAgdXNhZ2UuXG4gICAgdGhpcy53cml0ZVZhbHVlKHRoaXMuX2NvbnRyb2wudmFsdWUpO1xuXG4gICAgLy8gV2F0Y2ggZm9yIHVzZXIgZXZlbnRzIG9uIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIHRoZSBzdGF0ZVxuICAgIHRoaXMuX2NoZWNrYm94LmJlY2FtZUNoZWNrZWQuc3Vic2NyaWJlKFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLl9vbkNoYW5nZSh0cnVlKTtcbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMuX2NoZWNrYm94LmJlY2FtZVVuY2hlY2tlZC5zdWJzY3JpYmUoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlKGZhbHNlKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIHdyaXRlcyBhIG5ldyB2YWx1ZSBkb3duIGludG8gdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHZhbHVlID0gISF2YWx1ZTtcbiAgICB2YWx1ZSA9PT0gdHJ1ZSA/IHRoaXMuZmlyZVNlbGVjdCgpIDogdGhpcy5maXJlRGVzZWxlY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgdGhlIGNoYW5nZSBoYW5kbGVyXG4gICAqL1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9ICh2YWwpID0+IHtcbiAgICAgIGZuKHZhbCk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgdGhlIHRvdWNoZWQgaGFuZGxlclxuICAgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLyoqXG4gXG4gICAqIFNldHMgdGhlIGRpc2FibGVkIHN0YXRlLlxuICAgKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX2NoZWNrYm94LmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBjYWxscyB0aGUgY2hpbGQgY2hlY2tib3gncyBzZWxlY3QgZnVuY3Rpb25cbiAgICovXG4gIGZpcmVTZWxlY3QoKSB7XG4gICAgdGhpcy5fY2hlY2tib3guc2VsZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogY2FsbHMgdGhlIGNoaWxkIGNoZWNrYm94J3MgZGVzZWxlY3QgZnVuY3Rpb25cbiAgICovXG4gIGZpcmVEZXNlbGVjdCgpIHtcbiAgICB0aGlzLl9jaGVja2JveC5kZXNlbGVjdCgpO1xuICB9XG5cbn0iXX0=