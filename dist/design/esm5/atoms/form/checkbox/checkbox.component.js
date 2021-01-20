/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, ChangeDetectionStrategy, EventEmitter, Output, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
/** @type {?} */
var checkboxIdNum = 0;
var DaffCheckboxComponent = /** @class */ (function () {
    function DaffCheckboxComponent(_cdRef) {
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
    Object.defineProperty(DaffCheckboxComponent.prototype, "checked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @param {?} val
     * @return {?}
     */
    DaffCheckboxComponent.prototype._onChange = /**
     * \@docs-private
     * @param {?} val
     * @return {?}
     */
    function (val) {
        ((/** @type {?} */ (val.target))).checked ? this.select() : this.deselect();
    };
    ;
    Object.defineProperty(DaffCheckboxComponent.prototype, "focusClass", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.focused === true;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(DaffCheckboxComponent.prototype, "disabledClass", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.disabled === true;
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * Sets focused to false.
     */
    /**
     * Sets focused to false.
     * @return {?}
     */
    DaffCheckboxComponent.prototype.onBlur = /**
     * Sets focused to false.
     * @return {?}
     */
    function () {
        this.focused = false;
    };
    /**
     * Sets focused to true.
     */
    /**
     * Sets focused to true.
     * @return {?}
     */
    DaffCheckboxComponent.prototype.onFocus = /**
     * Sets focused to true.
     * @return {?}
     */
    function () {
        this.focused = true;
    };
    /**
     * Sets checked to true.
    */
    /**
     * Sets checked to true.
     * @return {?}
     */
    DaffCheckboxComponent.prototype.select = /**
     * Sets checked to true.
     * @return {?}
     */
    function () {
        this.checked = true;
        this._cdRef.markForCheck();
    };
    /**
     * Sets checked to false
    */
    /**
     * Sets checked to false
     * @return {?}
     */
    DaffCheckboxComponent.prototype.deselect = /**
     * Sets checked to false
     * @return {?}
     */
    function () {
        this.checked = false;
        this._cdRef.markForCheck();
    };
    DaffCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-checkbox',
                    template: "<input #inputElement\ntype=\"checkbox\"\n[attr.aria-label]=\"label\"\n[attr.aria-labelledby]=\"labeledBy\"\n[attr.checked]=\"checked ? '' : null\"\n[attr.id] = \"id\"\n[attr.value]=\"value\"\n[attr.name]=\"name\"\n[attr.disabled] = \"disabled ? '' : null\" \n(change)=\"_onChange($event)\"\n(blur)=\"onBlur()\"\n(focus)=\"onFocus()\"\n/>\n<label [attr.for]=\"id\"><ng-content></ng-content></label>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DaffCheckboxComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
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
    return DaffCheckboxComponent;
}());
export { DaffCheckboxComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2Rlc2lnbi8iLCJzb3VyY2VzIjpbImF0b21zL2Zvcm0vY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLFlBQVksRUFDWixNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7O0lBRW5CLGFBQWEsR0FBRyxDQUFDO0FBRXJCO0lBZ0hFLCtCQUFvQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjs7OztRQXpGdEMsYUFBUSxHQUFHLEtBQUssQ0FBQzs7OztRQXdCZixPQUFFLEdBQVcsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDOzs7OztRQUtsQyxVQUFLLEdBQUcsSUFBSSxDQUFDOzs7O1FBVXhCLGtCQUFhLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUQsb0JBQWUsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7Ozs7UUFlekMsU0FBSSxHQUFHLFVBQVUsQ0FBQztRQW1DMUM7O1dBRUc7UUFDSCxhQUFhLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBNUZELHNCQUNJLDBDQUFPOzs7O1FBRFg7WUFFRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFDRCxVQUFZLEtBQWM7WUFDeEIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBRTtnQkFDM0IsT0FBTzthQUNSO1lBQ0QsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO2dCQUNsQixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDeEM7aUJBQ0k7Z0JBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDbEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUM3QjtZQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQWZBO0lBcURGOztPQUVHOzs7Ozs7SUFDRix5Q0FBUzs7Ozs7SUFBVCxVQUFVLEdBQVU7UUFDbEIsQ0FBQyxtQkFBQSxHQUFHLENBQUMsTUFBTSxFQUFvQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5RSxDQUFDO0lBQUEsQ0FBQztJQUlELHNCQUFrQyw2Q0FBVTtRQUg3Qzs7V0FFRzs7Ozs7UUFDRjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFBQSxDQUFDO0lBSUQsc0JBQW1DLGdEQUFhO1FBSGpEOztXQUVHOzs7OztRQUNGO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFDRjs7T0FFRzs7Ozs7SUFDSCxzQ0FBTTs7OztJQUFOO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNEOztPQUVHOzs7OztJQUNILHVDQUFPOzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBUUQ7O01BRUU7Ozs7O0lBQ0Ysc0NBQU07Ozs7SUFBTjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNEOztNQUVFOzs7OztJQUNGLHdDQUFROzs7O0lBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdCLENBQUM7O2dCQW5JRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLHlaQUF3QztvQkFFeEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUVoRDs7OztnQkFiQyxpQkFBaUI7OztpQ0FrQmhCLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7dUJBSTFELEtBQUs7d0JBSUwsS0FBSzswQkFNTCxLQUFLO3FCQXNCTCxLQUFLO3dCQUtMLEtBQUssU0FBQyxZQUFZOzRCQUtsQixLQUFLLFNBQUMsaUJBQWlCO2dDQUt2QixNQUFNO2tDQUNOLE1BQU07dUJBZU4sV0FBVyxTQUFDLFdBQVc7NkJBWXZCLFdBQVcsU0FBQyxlQUFlO2dDQU0zQixXQUFXLFNBQUMsZ0JBQWdCOztJQW9DL0IsNEJBQUM7Q0FBQSxBQXBJRCxJQW9JQztTQTdIWSxxQkFBcUI7Ozs7OztJQUloQywrQ0FBMEc7Ozs7O0lBSTFHLHFDQUFzQjs7Ozs7SUFJdEIsc0NBQW9COzs7Ozs7SUFJckIseUNBQXlCOzs7OztJQXdCeEIsbUNBQXVEOzs7OztJQUt2RCxzQ0FBa0M7Ozs7O0lBS2xDLDBDQUE0Qzs7Ozs7SUFLNUMsOENBQW9FOztJQUNwRSxnREFBbUU7Ozs7O0lBS25FLHdDQUFpQjs7Ozs7SUFJakIseUNBQWtCOzs7Ozs7SUFNbEIscUNBQTRDOzs7OztJQWtDaEMsdUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgSG9zdEJpbmRpbmcsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxubGV0IGNoZWNrYm94SWROdW0gPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYWZmLWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hlY2tib3guY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cbn0pXG5leHBvcnQgY2xhc3MgRGFmZkNoZWNrYm94Q29tcG9uZW50IHtcblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHtzdGF0aWM6IHRydWUsIHJlYWQ6IEVsZW1lbnRSZWZ9KSBuYXRpdmVDaGVja2JveDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBjaGVja2JveC5cbiAgICovXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgY2hlY2tib3guXG4gICAqL1xuICBASW5wdXQoKSB2YWx1ZTogYW55O1xuICAvKipcbiAgICogQm9vbGVhbiB2YWx1ZSB0byBkZXRlcm1pbmUgd2hldGhlciBvciBub3QgdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQuXG4gICAqL1xuXHRwcml2YXRlIF9jaGVja2VkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IGNoZWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7XG4gIH1cbiAgc2V0IGNoZWNrZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fY2hlY2tlZCA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLm5hdGl2ZUNoZWNrYm94Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCA9IHRydWU7XG4gICAgICB0aGlzLmJlY2FtZUNoZWNrZWQuZW1pdCh0aGlzLl9jaGVja2VkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLm5hdGl2ZUNoZWNrYm94Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5iZWNhbWVVbmNoZWNrZWQuZW1pdCgpO1xuICAgIH1cblxuICAgIHRoaXMuX2NoZWNrZWQgPSB2YWx1ZTtcbiAgfVxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBjaGVja2JveC4gTXVzdCBiZSB1bmlxdWUuIElmIG5vdCBlbnRlcmVkIGJ5IGEgdXNlciB0aGVuIGl0IGlzIGdlbmVyYXRlZC5cbiAgICovXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSAnZGFmZi1jaGVja2JveC0nICsgY2hlY2tib3hJZE51bTtcbiAgLyoqXG4gICAqIFRoZSBhcmlhLWxhYmVsIG9mIHRoZSBjaGVja2JveC4gSWYgbm90IHNldCBieSB1c2VyIHRoZW4gaXQgZGVmYXVsdHMgdG8gdGhlIG5hbWUgb2YgdGhlIGNoZWNrYm94LlxuICAgKi9cbiAgLy90c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnYXJpYS1sYWJlbCcpIGxhYmVsID0gbmFtZTtcbiAgLyoqXG4gICAqIFRoZSBhcmlhLWxhYmVsZWRieSBvZiB0aGUgY2hlY2tib3guXG4gICAqL1xuICAvL3RzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdhcmlhLWxhYmVsbGVkYnknKSBsYWJlbGVkQnk6IHN0cmluZztcblxuICAvKipcbiAgICogRXZlbnQgb24gd2hldGhlciBvciBub3QgdGhlIHNlbGVjdGlvbiBoYXMgY2hhbmdlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBiZWNhbWVDaGVja2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBiZWNhbWVVbmNoZWNrZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgY2hlY2tib3ggaXMgZm9jdXNlZFxuICAgKi9cbiAgZm9jdXNlZDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGNoZWNrYm94IGlzIGRpc2FibGVkLlxuICAqL1xuICBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIHJvbGUgb2YgdGhlIGNvbXBvbmVudC4gU2V0IHRvIFwiY2hlY2tib3hcIi5cblx0ICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSByb2xlID0gJ2NoZWNrYm94JztcblxuXG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuICBfb25DaGFuZ2UodmFsOiBFdmVudCkge1xuICAgICh2YWwudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQgPyB0aGlzLnNlbGVjdCgpIDogdGhpcy5kZXNlbGVjdCgpO1xuXHR9O1xuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mb2N1c2VkJykgZ2V0IGZvY3VzQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNlZCA9PT0gdHJ1ZTtcblx0fTtcblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGlzYWJsZWQnKSBnZXQgZGlzYWJsZWRDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCA9PT0gdHJ1ZTtcbiAgfTtcbiAgLyoqXG4gICAqIFNldHMgZm9jdXNlZCB0byBmYWxzZS5cbiAgICovXG4gIG9uQmx1cigpIHtcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgfVxuICAvKipcbiAgICogU2V0cyBmb2N1c2VkIHRvIHRydWUuXG4gICAqL1xuICBvbkZvY3VzKCkge1xuICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAvKipcbiAgICAgKiBJbmNyZW1lbnRzIGlkIG51bWJlciBvbiBuZXcgY2hlY2tib3guIEd1cmFudGVlcyB1bmlxdWUgSUQgb24gZ2VuZXJhdGlvbi5cbiAgICAgKi9cbiAgICBjaGVja2JveElkTnVtKys7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgY2hlY2tlZCB0byB0cnVlLlxuICAqL1xuICBzZWxlY3QoKSB7XG4gICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICAvKipcbiAgICogU2V0cyBjaGVja2VkIHRvIGZhbHNlXG4gICovXG4gIGRlc2VsZWN0KCkge1xuICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG59Il19