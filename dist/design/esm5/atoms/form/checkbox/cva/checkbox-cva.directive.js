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
var DaffCheckboxControlValueAccessorDirective = /** @class */ (function () {
    function DaffCheckboxControlValueAccessorDirective(_control, _checkbox) {
        this._control = _control;
        this._checkbox = _checkbox;
        if (this._control != null) {
            this._control.valueAccessor = this;
        }
    }
    /**
     * A lifecycle method called when the directive is initialized.
     */
    /**
     * A lifecycle method called when the directive is initialized.
     * @return {?}
     */
    DaffCheckboxControlValueAccessorDirective.prototype.ngOnInit = /**
     * A lifecycle method called when the directive is initialized.
     * @return {?}
     */
    function () {
        var _this = this;
        // See the note about `writeValue` usage.
        this.writeValue(this._control.value);
        // Watch for user events on the component to update the state
        this._checkbox.becameChecked.subscribe((/**
         * @return {?}
         */
        function () {
            _this._onChange(true);
        }));
        this._checkbox.becameUnchecked.subscribe((/**
         * @return {?}
         */
        function () {
            _this._onChange(false);
        }));
    };
    /**
     * writes a new value down into the component.
     */
    /**
     * writes a new value down into the component.
     * @param {?} value
     * @return {?}
     */
    DaffCheckboxControlValueAccessorDirective.prototype.writeValue = /**
     * writes a new value down into the component.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = !!value;
        value === true ? this.fireSelect() : this.fireDeselect();
    };
    /**
     * Registers the change handler
     */
    /**
     * Registers the change handler
     * @param {?} fn
     * @return {?}
     */
    DaffCheckboxControlValueAccessorDirective.prototype.registerOnChange = /**
     * Registers the change handler
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = (/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            fn(val);
        });
    };
    /**
     * Registers the touched handler
     */
    /**
     * Registers the touched handler
     * @param {?} fn
     * @return {?}
     */
    DaffCheckboxControlValueAccessorDirective.prototype.registerOnTouched = /**
     * Registers the touched handler
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
   
     * Sets the disabled state.
     */
    /**
     * Sets the disabled state.
     * @param {?} isDisabled
     * @return {?}
     */
    DaffCheckboxControlValueAccessorDirective.prototype.setDisabledState = /**
     * Sets the disabled state.
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._checkbox.disabled = isDisabled;
    };
    /**
     * calls the child checkbox's select function
     */
    /**
     * calls the child checkbox's select function
     * @return {?}
     */
    DaffCheckboxControlValueAccessorDirective.prototype.fireSelect = /**
     * calls the child checkbox's select function
     * @return {?}
     */
    function () {
        this._checkbox.select();
    };
    /**
     * calls the child checkbox's deselect function
     */
    /**
     * calls the child checkbox's deselect function
     * @return {?}
     */
    DaffCheckboxControlValueAccessorDirective.prototype.fireDeselect = /**
     * calls the child checkbox's deselect function
     * @return {?}
     */
    function () {
        this._checkbox.deselect();
    };
    DaffCheckboxControlValueAccessorDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: 'daff-checkbox[ngModel], daff-checkbox[formControl], daff-checkbox[formControlName]',
                },] }
    ];
    /** @nocollapse */
    DaffCheckboxControlValueAccessorDirective.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: DaffCheckboxComponent }
    ]; };
    DaffCheckboxControlValueAccessorDirective.propDecorators = {
        value: [{ type: Input }],
        name: [{ type: Input }]
    };
    return DaffCheckboxControlValueAccessorDirective;
}());
export { DaffCheckboxControlValueAccessorDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtY3ZhLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJhdG9tcy9mb3JtL2NoZWNrYm94L2N2YS9jaGVja2JveC1jdmEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxJQUFJLEVBQUUsUUFBUSxFQUFjLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxTQUFTLEVBQTJDLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFLOUQ7SUFrQkUsbURBQzZCLFFBQW1CLEVBQ3RDLFNBQWdDO1FBRGIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUN0QyxjQUFTLEdBQVQsU0FBUyxDQUF1QjtRQUV4QyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUNwQztJQUNILENBQUM7SUFHRDs7T0FFRzs7Ozs7SUFDSCw0REFBUTs7OztJQUFSO1FBQUEsaUJBZUM7UUFkQyx5Q0FBeUM7UUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJDLDZEQUE2RDtRQUM3RCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7UUFDcEM7WUFDRSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsRUFDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsU0FBUzs7O1FBQ3RDO1lBQ0UsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsOERBQVU7Ozs7O0lBQVYsVUFBVyxLQUFVO1FBQ25CLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2hCLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNELENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsb0VBQWdCOzs7OztJQUFoQixVQUFpQixFQUFPO1FBQ3RCLElBQUksQ0FBQyxTQUFTOzs7O1FBQUcsVUFBQyxHQUFHO1lBQ25CLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQSxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCxxRUFBaUI7Ozs7O0lBQWpCLFVBQWtCLEVBQU87UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsb0VBQWdCOzs7OztJQUFoQixVQUFrQixVQUFtQjtRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDdkMsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDhEQUFVOzs7O0lBQVY7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxnRUFBWTs7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QixDQUFDOztnQkE1RkYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsb0ZBQW9GO2lCQUMvRjs7OztnQkFUUSxTQUFTLHVCQXlCYixRQUFRLFlBQUksSUFBSTtnQkF4QloscUJBQXFCOzs7d0JBZ0IzQixLQUFLO3VCQUtMLEtBQUs7O0lBOEVSLGdEQUFDO0NBQUEsQUE5RkQsSUE4RkM7U0ExRlkseUNBQXlDOzs7SUFDcEQsOERBQStCOztJQUMvQiwrREFBd0I7Ozs7O0lBS3hCLDBEQUFvQjs7Ozs7SUFLcEIseURBQXNCOztJQUdwQiw2REFBOEM7Ozs7O0lBQzlDLDhEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgU2VsZiwgT3B0aW9uYWwsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGFmZkNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi4vY2hlY2tib3guY29tcG9uZW50JztcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSBmb3IgYmluZGluZyB0aGUgRGFmZkNoZWNrYm94Q29tcG9uZW50IGFuZCB0aGUgQ29udHJvbCBWYWx1ZSBBY2Nlc3Nvci5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZGFmZi1jaGVja2JveFtuZ01vZGVsXSwgZGFmZi1jaGVja2JveFtmb3JtQ29udHJvbF0sIGRhZmYtY2hlY2tib3hbZm9ybUNvbnRyb2xOYW1lXScsXG59KVxuZXhwb3J0IGNsYXNzIERhZmZDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIF9vbkNoYW5nZSA6ICh2YWw6IGFueSkgPT4gdm9pZDtcbiAgX29uVG91Y2hlZCA6ICgpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgQ29udHJvbFZhbHVlQWNjZXNzb3JcbiAgICovXG4gIEBJbnB1dCgpIHZhbHVlOiBhbnk7XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBDb250cm9sVmFsdWVBY2Nlc3NvclxuICAgKi9cbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIF9jb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgcHJpdmF0ZSBfY2hlY2tib3g6IERhZmZDaGVja2JveENvbXBvbmVudFxuICApIHtcbiAgICBpZiAodGhpcy5fY29udHJvbCAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9jb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIEEgbGlmZWN5Y2xlIG1ldGhvZCBjYWxsZWQgd2hlbiB0aGUgZGlyZWN0aXZlIGlzIGluaXRpYWxpemVkLlxuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gU2VlIHRoZSBub3RlIGFib3V0IGB3cml0ZVZhbHVlYCB1c2FnZS5cbiAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5fY29udHJvbC52YWx1ZSk7XG5cbiAgICAvLyBXYXRjaCBmb3IgdXNlciBldmVudHMgb24gdGhlIGNvbXBvbmVudCB0byB1cGRhdGUgdGhlIHN0YXRlXG4gICAgdGhpcy5fY2hlY2tib3guYmVjYW1lQ2hlY2tlZC5zdWJzY3JpYmUoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuX29uQ2hhbmdlKHRydWUpO1xuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy5fY2hlY2tib3guYmVjYW1lVW5jaGVja2VkLnN1YnNjcmliZShcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2UoZmFsc2UpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogd3JpdGVzIGEgbmV3IHZhbHVlIGRvd24gaW50byB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdmFsdWUgPSAhIXZhbHVlO1xuICAgIHZhbHVlID09PSB0cnVlID8gdGhpcy5maXJlU2VsZWN0KCkgOiB0aGlzLmZpcmVEZXNlbGVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyB0aGUgY2hhbmdlIGhhbmRsZXJcbiAgICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gKHZhbCkgPT4ge1xuICAgICAgZm4odmFsKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyB0aGUgdG91Y2hlZCBoYW5kbGVyXG4gICAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvKipcbiBcbiAgICogU2V0cyB0aGUgZGlzYWJsZWQgc3RhdGUuXG4gICAqL1xuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fY2hlY2tib3guZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIGNhbGxzIHRoZSBjaGlsZCBjaGVja2JveCdzIHNlbGVjdCBmdW5jdGlvblxuICAgKi9cbiAgZmlyZVNlbGVjdCgpIHtcbiAgICB0aGlzLl9jaGVja2JveC5zZWxlY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjYWxscyB0aGUgY2hpbGQgY2hlY2tib3gncyBkZXNlbGVjdCBmdW5jdGlvblxuICAgKi9cbiAgZmlyZURlc2VsZWN0KCkge1xuICAgIHRoaXMuX2NoZWNrYm94LmRlc2VsZWN0KCk7XG4gIH1cblxufSJdfQ==