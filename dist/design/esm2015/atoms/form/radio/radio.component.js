/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, ChangeDetectionStrategy, forwardRef, Optional, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DaffRadioSetComponent } from '../radio-set/radio-set.component';
/** @type {?} */
let radioUniqueId = 0;
export class DaffRadioComponent {
    /**
     * @param {?} radioset
     */
    constructor(radioset) {
        this.radioset = radioset;
        /**
         * \@docs-private
         */
        this.role = 'radio';
        /**
         * \@docs-private
         */
        this._checked = false;
        /**
         * The id of the radio. It is uniquely generated but can be overwritten by the user. Must be unique.
         */
        this.id = 'daff-radio-' + radioUniqueId;
        /**
         * Used for aria-label. Default to name if user does not input a label.
         */
        //tslint:disable-next-line:no-input-rename
        this.label = name;
        /**
         * Output event of selection being changed
         */
        this.selectionChange = new EventEmitter();
        this.disabled = false;
        this.focused = false;
        radioUniqueId++;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get focusClass() {
        return this.focused === true;
    }
    ;
    /**
     * \@docs-private
     * @return {?}
     */
    get disabledClass() {
        return this.disabled === true;
    }
    ;
    /**
     * The checked property of the radio
     * @return {?}
     */
    get checked() {
        return this._checked;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set checked(value) {
        if (this._checked !== value) {
            this._checked = value;
            this.selectionChange.emit(this.value);
        }
    }
    /**
     * \@docs-private
     * @return {?}
     */
    ngOnInit() {
        this.name = this.radioset ? this.radioset.name : this.name;
    }
    /**
     * updates Focus styling
     * @return {?}
     */
    onFocus() {
        this.focused = true;
    }
    /**
     * updates Blur styling
     * @return {?}
     */
    onBlur() {
        this.focused = false;
    }
    /**
     * toggles checked attribute on
     * @return {?}
     */
    select() {
        this.checked = true;
    }
    /**
     * toggles checked attribute off
     * @return {?}
     */
    deselect() {
        this.checked = false;
    }
    /**
     * @return {?}
     */
    onChange() {
        this.select();
    }
    ;
}
DaffRadioComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'daff-radio',
                template: "<input type=\"radio\" \n[attr.checked]=\"checked ? '' : null\" \n[attr.id]=\"id\" \n[attr.name]=\"name\" \n[attr.aria-label]=\"label\"\n[attr.aria-labelledby]=\"labelledby\"\n[attr.value]=\"value\"\n[attr.disabled] = \"disabled ? '' : null\" \n(change)=\"onChange()\"\n(blur)=\"onBlur()\"\n(focus)=\"onFocus()\"/>\n<label [attr.for]=\"id\">\n  <ng-content></ng-content>\n</label>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => DaffRadioComponent)),
                        multi: true
                    }
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
DaffRadioComponent.ctorParameters = () => [
    { type: DaffRadioSetComponent, decorators: [{ type: Optional }] }
];
DaffRadioComponent.propDecorators = {
    role: [{ type: HostBinding, args: ['attr.role',] }],
    focusClass: [{ type: HostBinding, args: ['class.focused',] }],
    disabledClass: [{ type: HostBinding, args: ['class.disabled',] }],
    checked: [{ type: Input }],
    value: [{ type: Input }],
    id: [{ type: Input }],
    name: [{ type: Input }],
    label: [{ type: Input, args: ['aria-label',] }],
    labelledby: [{ type: Input, args: ['aria-labelledby',] }],
    selectionChange: [{ type: Output }]
};
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffRadioComponent.prototype.role;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffRadioComponent.prototype._checked;
    /**
     * The value of the radio
     * @type {?}
     */
    DaffRadioComponent.prototype.value;
    /**
     * The id of the radio. It is uniquely generated but can be overwritten by the user. Must be unique.
     * @type {?}
     */
    DaffRadioComponent.prototype.id;
    /**
     * Name of the Radio
     * @type {?}
     */
    DaffRadioComponent.prototype.name;
    /**
     * Used for aria-label. Default to name if user does not input a label.
     * @type {?}
     */
    DaffRadioComponent.prototype.label;
    /**
     * Used for aria-labelledby.
     * @type {?}
     */
    DaffRadioComponent.prototype.labelledby;
    /**
     * Output event of selection being changed
     * @type {?}
     */
    DaffRadioComponent.prototype.selectionChange;
    /** @type {?} */
    DaffRadioComponent.prototype.disabled;
    /** @type {?} */
    DaffRadioComponent.prototype.focused;
    /**
     * @type {?}
     * @private
     */
    DaffRadioComponent.prototype.radioset;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2Rlc2lnbi8iLCJzb3VyY2VzIjpbImF0b21zL2Zvcm0vcmFkaW8vcmFkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxXQUFXLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNJLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztJQUVyRSxhQUFhLEdBQUcsQ0FBQztBQWdCckIsTUFBTSxPQUFPLGtCQUFrQjs7OztJQW9FN0IsWUFBZ0MsUUFBK0I7UUFBL0IsYUFBUSxHQUFSLFFBQVEsQ0FBdUI7Ozs7UUEvRHRDLFNBQUksR0FBRyxPQUFPLENBQUM7Ozs7UUFpQnpDLGFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7UUFxQlIsT0FBRSxHQUFXLGFBQWEsR0FBRyxhQUFhLENBQUM7Ozs7O1FBVTlCLFVBQUssR0FBRyxJQUFJLENBQUM7Ozs7UUFVekIsb0JBQWUsR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHZCxhQUFhLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7OztJQTdEQSxJQUFrQyxVQUFVO1FBQzFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUFBLENBQUM7Ozs7O0lBSUQsSUFBbUMsYUFBYTtRQUM5QyxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFBQSxDQUFDOzs7OztJQVNILElBQ0ksT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7OztJQUNELElBQUksT0FBTyxDQUFDLEtBQWM7UUFDekIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEM7SUFDRixDQUFDOzs7OztJQXdDQSxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQTtJQUM1RCxDQUFDOzs7OztJQUtELE9BQU87UUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDOzs7OztJQUlELE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7OztJQUlELE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDOzs7OztJQUlELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7O0lBQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBQUEsQ0FBQzs7O1lBeEhILFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLHVZQUEyQjtnQkFFM0IsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLEVBQUM7d0JBQ2pELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQWhCUSxxQkFBcUIsdUJBc0ZmLFFBQVE7OzttQkEvRHJCLFdBQVcsU0FBQyxXQUFXO3lCQUl0QixXQUFXLFNBQUMsZUFBZTs0QkFNM0IsV0FBVyxTQUFDLGdCQUFnQjtzQkFXN0IsS0FBSztvQkFhTCxLQUFLO2lCQUlMLEtBQUs7bUJBSUwsS0FBSztvQkFNSixLQUFLLFNBQUMsWUFBWTt5QkFLbEIsS0FBSyxTQUFDLGlCQUFpQjs4QkFLeEIsTUFBTTs7Ozs7OztJQTFEUCxrQ0FBeUM7Ozs7O0lBaUJ6QyxzQ0FBaUI7Ozs7O0lBaUJqQixtQ0FBb0I7Ozs7O0lBSXBCLGdDQUFvRDs7Ozs7SUFJcEQsa0NBQXNCOzs7OztJQU1yQixtQ0FBa0M7Ozs7O0lBS2xDLHdDQUFxQzs7Ozs7SUFLdEMsNkNBQXNFOztJQUVyRSxzQ0FBaUI7O0lBQ2pCLHFDQUFnQjs7Ozs7SUFFSixzQ0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgZm9yd2FyZFJlZiwgT3B0aW9uYWwsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERhZmZSYWRpb1NldENvbXBvbmVudCB9IGZyb20gJy4uL3JhZGlvLXNldC9yYWRpby1zZXQuY29tcG9uZW50JztcblxubGV0IHJhZGlvVW5pcXVlSWQgPSAwO1xuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZGFmZi1yYWRpbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRpby5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmFkaW8uc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhZmZSYWRpb0NvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBEYWZmUmFkaW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuXHRASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHJvbGUgPSAncmFkaW8nO1xuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mb2N1c2VkJykgZ2V0IGZvY3VzQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNlZCA9PT0gdHJ1ZTtcblx0fTtcblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGlzYWJsZWQnKSBnZXQgZGlzYWJsZWRDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCA9PT0gdHJ1ZTtcbiAgfTtcblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cblx0X2NoZWNrZWQgPSBmYWxzZTtcbiAgLyoqXG5cdCAqIFRoZSBjaGVja2VkIHByb3BlcnR5IG9mIHRoZSByYWRpb1xuICAgKi9cblx0QElucHV0KClcblx0Z2V0IGNoZWNrZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2NoZWNrZWQ7XG5cdH1cblx0c2V0IGNoZWNrZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHRpZiAodGhpcy5fY2hlY2tlZCAhPT0gdmFsdWUpIHtcblx0XHRcdHRoaXMuX2NoZWNrZWQgPSB2YWx1ZTtcblx0XHRcdHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG5cdFx0fVxuXHR9XG4gIC8qKlxuXHQgKiBUaGUgdmFsdWUgb2YgdGhlIHJhZGlvXG4gICAqL1xuXHRASW5wdXQoKSB2YWx1ZTogYW55O1xuICAvKipcblx0ICogVGhlIGlkIG9mIHRoZSByYWRpby4gSXQgaXMgdW5pcXVlbHkgZ2VuZXJhdGVkIGJ1dCBjYW4gYmUgb3ZlcndyaXR0ZW4gYnkgdGhlIHVzZXIuIE11c3QgYmUgdW5pcXVlLlxuICAgKi9cblx0QElucHV0KCkgaWQ6IHN0cmluZyA9ICdkYWZmLXJhZGlvLScgKyByYWRpb1VuaXF1ZUlkO1xuICAvKipcblx0ICogTmFtZSBvZiB0aGUgUmFkaW9cbiAgICovXG5cdEBJbnB1dCgpIG5hbWU6IHN0cmluZztcblx0XG4gIC8qKlxuXHQgKiBVc2VkIGZvciBhcmlhLWxhYmVsLiBEZWZhdWx0IHRvIG5hbWUgaWYgdXNlciBkb2VzIG5vdCBpbnB1dCBhIGxhYmVsLlxuICAgKi9cblx0Ly90c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnYXJpYS1sYWJlbCcpIGxhYmVsID0gbmFtZTtcbiAgLyoqXG5cdCAqIFVzZWQgZm9yIGFyaWEtbGFiZWxsZWRieS4gXG4gICAqL1xuXHQvL3RzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdhcmlhLWxhYmVsbGVkYnknKSBsYWJlbGxlZGJ5O1xuXHRcblx0LyoqXG5cdCAqIE91dHB1dCBldmVudCBvZiBzZWxlY3Rpb24gYmVpbmcgY2hhbmdlZFxuXHQgKi9cblx0QE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIGZvY3VzZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIHJhZGlvc2V0OiBEYWZmUmFkaW9TZXRDb21wb25lbnQpIHtcbiAgICByYWRpb1VuaXF1ZUlkKys7XG5cdH1cblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5uYW1lID0gdGhpcy5yYWRpb3NldCA/IHRoaXMucmFkaW9zZXQubmFtZSA6IHRoaXMubmFtZVxuICB9XG5cbiAgLyoqXG4gICAqIHVwZGF0ZXMgRm9jdXMgc3R5bGluZ1xuICAgKi9cbiAgb25Gb2N1cygpIHtcbiAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiB1cGRhdGVzIEJsdXIgc3R5bGluZ1xuICAgKi9cbiAgb25CbHVyKCkge1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICB9XG4gIC8qKlxuICAgKiB0b2dnbGVzIGNoZWNrZWQgYXR0cmlidXRlIG9uXG4gICAqL1xuICBzZWxlY3QoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogdG9nZ2xlcyBjaGVja2VkIGF0dHJpYnV0ZSBvZmZcbiAgICovXG4gIGRlc2VsZWN0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICB9XG4gIG9uQ2hhbmdlKCkge1xuICAgIHRoaXMuc2VsZWN0KCk7XG4gIH07XG59XG4iXX0=