/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, ChangeDetectionStrategy, EventEmitter, Output, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
/** @type {?} */
let checkboxIdNum = 0;
export class DaffCheckboxComponent {
    /**
     * @param {?} _cdRef
     */
    constructor(_cdRef) {
        this._cdRef = _cdRef;
        /**
         * Boolean value to determine whether or not the checkbox is checked.
         */
        this._checked = false;
        /**
         * The id of the checkbox. Must be unique. If not entered by a user then it is generated.
         */
        this.id = 'daff-checkbox-' + checkboxIdNum;
        /**
         * The aria-label of the checkbox. If not set by user then it defaults to the name of the checkbox.
         */
        //tslint:disable-next-line:no-input-rename
        this.label = name;
        /**
         * Event on whether or not the selection has changed.
         */
        this.becameChecked = new EventEmitter();
        this.becameUnchecked = new EventEmitter();
        /**
         * The role of the component. Set to "checkbox".
         * \@docs-private
         */
        this.role = 'checkbox';
        /**
         * Increments id number on new checkbox. Gurantees unique ID on generation.
         */
        checkboxIdNum++;
    }
    /**
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
        if (this._checked === value) {
            return;
        }
        if (value === true) {
            this.nativeCheckbox.nativeElement.checked = true;
            this.becameChecked.emit(this._checked);
        }
        else {
            this.nativeCheckbox.nativeElement.checked = false;
            this.becameUnchecked.emit();
        }
        this._checked = value;
    }
    /**
     * \@docs-private
     * @param {?} val
     * @return {?}
     */
    _onChange(val) {
        ((/** @type {?} */ (val.target))).checked ? this.select() : this.deselect();
    }
    ;
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
     * Sets focused to false.
     * @return {?}
     */
    onBlur() {
        this.focused = false;
    }
    /**
     * Sets focused to true.
     * @return {?}
     */
    onFocus() {
        this.focused = true;
    }
    /**
     * Sets checked to true.
     * @return {?}
     */
    select() {
        this.checked = true;
        this._cdRef.markForCheck();
    }
    /**
     * Sets checked to false
     * @return {?}
     */
    deselect() {
        this.checked = false;
        this._cdRef.markForCheck();
    }
}
DaffCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-checkbox',
                template: "<input #inputElement\ntype=\"checkbox\"\n[attr.aria-label]=\"label\"\n[attr.aria-labelledby]=\"labeledBy\"\n[attr.checked]=\"checked ? '' : null\"\n[attr.id] = \"id\"\n[attr.value]=\"value\"\n[attr.name]=\"name\"\n[attr.disabled] = \"disabled ? '' : null\" \n(change)=\"_onChange($event)\"\n(blur)=\"onBlur()\"\n(focus)=\"onFocus()\"\n/>\n<label [attr.for]=\"id\"><ng-content></ng-content></label>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
DaffCheckboxComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
DaffCheckboxComponent.propDecorators = {
    nativeCheckbox: [{ type: ViewChild, args: ['inputElement', { static: true, read: ElementRef },] }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    checked: [{ type: Input }],
    id: [{ type: Input }],
    label: [{ type: Input, args: ['aria-label',] }],
    labeledBy: [{ type: Input, args: ['aria-labelledby',] }],
    becameChecked: [{ type: Output }],
    becameUnchecked: [{ type: Output }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    focusClass: [{ type: HostBinding, args: ['class.focused',] }],
    disabledClass: [{ type: HostBinding, args: ['class.disabled',] }]
};
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffCheckboxComponent.prototype.nativeCheckbox;
    /**
     * The name of the checkbox.
     * @type {?}
     */
    DaffCheckboxComponent.prototype.name;
    /**
     * The value of the checkbox.
     * @type {?}
     */
    DaffCheckboxComponent.prototype.value;
    /**
     * Boolean value to determine whether or not the checkbox is checked.
     * @type {?}
     * @private
     */
    DaffCheckboxComponent.prototype._checked;
    /**
     * The id of the checkbox. Must be unique. If not entered by a user then it is generated.
     * @type {?}
     */
    DaffCheckboxComponent.prototype.id;
    /**
     * The aria-label of the checkbox. If not set by user then it defaults to the name of the checkbox.
     * @type {?}
     */
    DaffCheckboxComponent.prototype.label;
    /**
     * The aria-labeledby of the checkbox.
     * @type {?}
     */
    DaffCheckboxComponent.prototype.labeledBy;
    /**
     * Event on whether or not the selection has changed.
     * @type {?}
     */
    DaffCheckboxComponent.prototype.becameChecked;
    /** @type {?} */
    DaffCheckboxComponent.prototype.becameUnchecked;
    /**
     * Whether the checkbox is focused
     * @type {?}
     */
    DaffCheckboxComponent.prototype.focused;
    /**
     * Whether the checkbox is disabled.
     * @type {?}
     */
    DaffCheckboxComponent.prototype.disabled;
    /**
     * The role of the component. Set to "checkbox".
     * \@docs-private
     * @type {?}
     */
    DaffCheckboxComponent.prototype.role;
    /**
     * @type {?}
     * @private
     */
    DaffCheckboxComponent.prototype._cdRef;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2Rlc2lnbi8iLCJzb3VyY2VzIjpbImF0b21zL2Zvcm0vY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLFlBQVksRUFDWixNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7O0lBRW5CLGFBQWEsR0FBRyxDQUFDO0FBU3JCLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUF5R2hDLFlBQW9CLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1COzs7O1FBekZ0QyxhQUFRLEdBQUcsS0FBSyxDQUFDOzs7O1FBd0JmLE9BQUUsR0FBVyxnQkFBZ0IsR0FBRyxhQUFhLENBQUM7Ozs7O1FBS2xDLFVBQUssR0FBRyxJQUFJLENBQUM7Ozs7UUFVeEIsa0JBQWEsR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxRCxvQkFBZSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDOzs7OztRQWV6QyxTQUFJLEdBQUcsVUFBVSxDQUFDO1FBbUMxQzs7V0FFRztRQUNILGFBQWEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUE1RkQsSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBYztRQUN4QixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUFFO1lBQzNCLE9BQU87U0FDUjtRQUNELElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUNsQixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN4QzthQUNJO1lBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNsRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7Ozs7O0lBeUNELFNBQVMsQ0FBQyxHQUFVO1FBQ2xCLENBQUMsbUJBQUEsR0FBRyxDQUFDLE1BQU0sRUFBb0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUUsQ0FBQztJQUFBLENBQUM7Ozs7O0lBSUQsSUFBa0MsVUFBVTtRQUMxQyxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFBQSxDQUFDOzs7OztJQUlELElBQW1DLGFBQWE7UUFDOUMsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFJRixNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFJRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFXRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUlELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdCLENBQUM7OztZQW5JRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHlaQUF3QztnQkFFeEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBRWhEOzs7O1lBYkMsaUJBQWlCOzs7NkJBa0JoQixTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO21CQUkxRCxLQUFLO29CQUlMLEtBQUs7c0JBTUwsS0FBSztpQkFzQkwsS0FBSztvQkFLTCxLQUFLLFNBQUMsWUFBWTt3QkFLbEIsS0FBSyxTQUFDLGlCQUFpQjs0QkFLdkIsTUFBTTs4QkFDTixNQUFNO21CQWVOLFdBQVcsU0FBQyxXQUFXO3lCQVl2QixXQUFXLFNBQUMsZUFBZTs0QkFNM0IsV0FBVyxTQUFDLGdCQUFnQjs7Ozs7OztJQXJGN0IsK0NBQTBHOzs7OztJQUkxRyxxQ0FBc0I7Ozs7O0lBSXRCLHNDQUFvQjs7Ozs7O0lBSXJCLHlDQUF5Qjs7Ozs7SUF3QnhCLG1DQUF1RDs7Ozs7SUFLdkQsc0NBQWtDOzs7OztJQUtsQywwQ0FBNEM7Ozs7O0lBSzVDLDhDQUFvRTs7SUFDcEUsZ0RBQW1FOzs7OztJQUtuRSx3Q0FBaUI7Ozs7O0lBSWpCLHlDQUFrQjs7Ozs7O0lBTWxCLHFDQUE0Qzs7Ozs7SUFrQ2hDLHVDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmxldCBjaGVja2JveElkTnVtID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGFmZi1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoZWNrYm94LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXG59KVxuZXhwb3J0IGNsYXNzIERhZmZDaGVja2JveENvbXBvbmVudCB7XG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7c3RhdGljOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmfSkgbmF0aXZlQ2hlY2tib3g6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgY2hlY2tib3guXG4gICAqL1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIGNoZWNrYm94LlxuICAgKi9cbiAgQElucHV0KCkgdmFsdWU6IGFueTtcbiAgLyoqXG4gICAqIEJvb2xlYW4gdmFsdWUgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHRoZSBjaGVja2JveCBpcyBjaGVja2VkLlxuICAgKi9cblx0cHJpdmF0ZSBfY2hlY2tlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjaGVja2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9jaGVja2VkO1xuICB9XG4gIHNldCBjaGVja2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX2NoZWNrZWQgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5uYXRpdmVDaGVja2JveC5uYXRpdmVFbGVtZW50LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgdGhpcy5iZWNhbWVDaGVja2VkLmVtaXQodGhpcy5fY2hlY2tlZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5uYXRpdmVDaGVja2JveC5uYXRpdmVFbGVtZW50LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuYmVjYW1lVW5jaGVja2VkLmVtaXQoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jaGVja2VkID0gdmFsdWU7XG4gIH1cbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgY2hlY2tib3guIE11c3QgYmUgdW5pcXVlLiBJZiBub3QgZW50ZXJlZCBieSBhIHVzZXIgdGhlbiBpdCBpcyBnZW5lcmF0ZWQuXG4gICAqL1xuICBASW5wdXQoKSBpZDogc3RyaW5nID0gJ2RhZmYtY2hlY2tib3gtJyArIGNoZWNrYm94SWROdW07XG4gIC8qKlxuICAgKiBUaGUgYXJpYS1sYWJlbCBvZiB0aGUgY2hlY2tib3guIElmIG5vdCBzZXQgYnkgdXNlciB0aGVuIGl0IGRlZmF1bHRzIHRvIHRoZSBuYW1lIG9mIHRoZSBjaGVja2JveC5cbiAgICovXG4gIC8vdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ2FyaWEtbGFiZWwnKSBsYWJlbCA9IG5hbWU7XG4gIC8qKlxuICAgKiBUaGUgYXJpYS1sYWJlbGVkYnkgb2YgdGhlIGNoZWNrYm94LlxuICAgKi9cbiAgLy90c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnYXJpYS1sYWJlbGxlZGJ5JykgbGFiZWxlZEJ5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEV2ZW50IG9uIHdoZXRoZXIgb3Igbm90IHRoZSBzZWxlY3Rpb24gaGFzIGNoYW5nZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgYmVjYW1lQ2hlY2tlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYmVjYW1lVW5jaGVja2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGNoZWNrYm94IGlzIGZvY3VzZWRcbiAgICovXG4gIGZvY3VzZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBjaGVja2JveCBpcyBkaXNhYmxlZC5cbiAgKi9cbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSByb2xlIG9mIHRoZSBjb21wb25lbnQuIFNldCB0byBcImNoZWNrYm94XCIuXG5cdCAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcm9sZSA9ICdjaGVja2JveCc7XG5cblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgX29uQ2hhbmdlKHZhbDogRXZlbnQpIHtcbiAgICAodmFsLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkID8gdGhpcy5zZWxlY3QoKSA6IHRoaXMuZGVzZWxlY3QoKTtcblx0fTtcblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZm9jdXNlZCcpIGdldCBmb2N1c0NsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLmZvY3VzZWQgPT09IHRydWU7XG5cdH07XG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRpc2FibGVkJykgZ2V0IGRpc2FibGVkQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgPT09IHRydWU7XG4gIH07XG4gIC8qKlxuICAgKiBTZXRzIGZvY3VzZWQgdG8gZmFsc2UuXG4gICAqL1xuICBvbkJsdXIoKSB7XG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgZm9jdXNlZCB0byB0cnVlLlxuICAgKi9cbiAgb25Gb2N1cygpIHtcbiAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgLyoqXG4gICAgICogSW5jcmVtZW50cyBpZCBudW1iZXIgb24gbmV3IGNoZWNrYm94LiBHdXJhbnRlZXMgdW5pcXVlIElEIG9uIGdlbmVyYXRpb24uXG4gICAgICovXG4gICAgY2hlY2tib3hJZE51bSsrO1xuICB9XG4gIC8qKlxuICAgKiBTZXRzIGNoZWNrZWQgdG8gdHJ1ZS5cbiAgKi9cbiAgc2VsZWN0KCkge1xuICAgIHRoaXMuY2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgY2hlY2tlZCB0byBmYWxzZVxuICAqL1xuICBkZXNlbGVjdCgpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufSJdfQ==