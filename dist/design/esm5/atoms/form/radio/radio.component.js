/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, ChangeDetectionStrategy, forwardRef, Optional, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DaffRadioSetComponent } from '../radio-set/radio-set.component';
/** @type {?} */
var radioUniqueId = 0;
var DaffRadioComponent = /** @class */ (function () {
    function DaffRadioComponent(radioset) {
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
    Object.defineProperty(DaffRadioComponent.prototype, "focusClass", {
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
    Object.defineProperty(DaffRadioComponent.prototype, "disabledClass", {
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
    Object.defineProperty(DaffRadioComponent.prototype, "checked", {
        /**
           * The checked property of the radio
         */
        get: /**
         * The checked property of the radio
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
            if (this._checked !== value) {
                this._checked = value;
                this.selectionChange.emit(this.value);
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
     * @return {?}
     */
    DaffRadioComponent.prototype.ngOnInit = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this.name = this.radioset ? this.radioset.name : this.name;
    };
    /**
     * updates Focus styling
     */
    /**
     * updates Focus styling
     * @return {?}
     */
    DaffRadioComponent.prototype.onFocus = /**
     * updates Focus styling
     * @return {?}
     */
    function () {
        this.focused = true;
    };
    /**
     * updates Blur styling
     */
    /**
     * updates Blur styling
     * @return {?}
     */
    DaffRadioComponent.prototype.onBlur = /**
     * updates Blur styling
     * @return {?}
     */
    function () {
        this.focused = false;
    };
    /**
     * toggles checked attribute on
     */
    /**
     * toggles checked attribute on
     * @return {?}
     */
    DaffRadioComponent.prototype.select = /**
     * toggles checked attribute on
     * @return {?}
     */
    function () {
        this.checked = true;
    };
    /**
     * toggles checked attribute off
     */
    /**
     * toggles checked attribute off
     * @return {?}
     */
    DaffRadioComponent.prototype.deselect = /**
     * toggles checked attribute off
     * @return {?}
     */
    function () {
        this.checked = false;
    };
    /**
     * @return {?}
     */
    DaffRadioComponent.prototype.onChange = /**
     * @return {?}
     */
    function () {
        this.select();
    };
    ;
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
                            function () { return DaffRadioComponent; })),
                            multi: true
                        }
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DaffRadioComponent.ctorParameters = function () { return [
        { type: DaffRadioSetComponent, decorators: [{ type: Optional }] }
    ]; };
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
    return DaffRadioComponent;
}());
export { DaffRadioComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2Rlc2lnbi8iLCJzb3VyY2VzIjpbImF0b21zL2Zvcm0vcmFkaW8vcmFkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxXQUFXLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNJLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztJQUVyRSxhQUFhLEdBQUcsQ0FBQztBQUNyQjtJQW1GRSw0QkFBZ0MsUUFBK0I7UUFBL0IsYUFBUSxHQUFSLFFBQVEsQ0FBdUI7Ozs7UUEvRHRDLFNBQUksR0FBRyxPQUFPLENBQUM7Ozs7UUFpQnpDLGFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7UUFxQlIsT0FBRSxHQUFXLGFBQWEsR0FBRyxhQUFhLENBQUM7Ozs7O1FBVTlCLFVBQUssR0FBRyxJQUFJLENBQUM7Ozs7UUFVekIsb0JBQWUsR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHZCxhQUFhLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBN0RBLHNCQUFrQywwQ0FBVTtRQUg3Qzs7V0FFRzs7Ozs7UUFDRjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFBQSxDQUFDO0lBSUQsc0JBQW1DLDZDQUFhO1FBSGpEOztXQUVHOzs7OztRQUNGO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFTSCxzQkFDSSx1Q0FBTztRQUpWOztXQUVHOzs7OztRQUNKO1lBRUMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3RCLENBQUM7Ozs7O1FBQ0QsVUFBWSxLQUFjO1lBQ3pCLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxLQUFLLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdEM7UUFDRixDQUFDOzs7T0FOQTtJQTJDRDs7T0FFRzs7Ozs7SUFDRixxQ0FBUTs7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQTtJQUM1RCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsb0NBQU87Ozs7SUFBUDtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFDRDs7T0FFRzs7Ozs7SUFDSCxtQ0FBTTs7OztJQUFOO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNEOztPQUVHOzs7OztJQUNILG1DQUFNOzs7O0lBQU47UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBQ0Q7O09BRUc7Ozs7O0lBQ0gscUNBQVE7Ozs7SUFBUjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFDRCxxQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUFBLENBQUM7O2dCQXhISCxTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxZQUFZO29CQUN0Qix1WUFBMkI7b0JBRTNCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSxrQkFBa0IsRUFBbEIsQ0FBa0IsRUFBQzs0QkFDakQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFoQlEscUJBQXFCLHVCQXNGZixRQUFROzs7dUJBL0RyQixXQUFXLFNBQUMsV0FBVzs2QkFJdEIsV0FBVyxTQUFDLGVBQWU7Z0NBTTNCLFdBQVcsU0FBQyxnQkFBZ0I7MEJBVzdCLEtBQUs7d0JBYUwsS0FBSztxQkFJTCxLQUFLO3VCQUlMLEtBQUs7d0JBTUosS0FBSyxTQUFDLFlBQVk7NkJBS2xCLEtBQUssU0FBQyxpQkFBaUI7a0NBS3hCLE1BQU07O0lBMkNSLHlCQUFDO0NBQUEsQUF6SEQsSUF5SEM7U0ExR1ksa0JBQWtCOzs7Ozs7SUFLOUIsa0NBQXlDOzs7OztJQWlCekMsc0NBQWlCOzs7OztJQWlCakIsbUNBQW9COzs7OztJQUlwQixnQ0FBb0Q7Ozs7O0lBSXBELGtDQUFzQjs7Ozs7SUFNckIsbUNBQWtDOzs7OztJQUtsQyx3Q0FBcUM7Ozs7O0lBS3RDLDZDQUFzRTs7SUFFckUsc0NBQWlCOztJQUNqQixxQ0FBZ0I7Ozs7O0lBRUosc0NBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBIb3N0QmluZGluZywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIGZvcndhcmRSZWYsIE9wdGlvbmFsLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEYWZmUmFkaW9TZXRDb21wb25lbnQgfSBmcm9tICcuLi9yYWRpby1zZXQvcmFkaW8tc2V0LmNvbXBvbmVudCc7XG5cbmxldCByYWRpb1VuaXF1ZUlkID0gMDtcbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2RhZmYtcmFkaW8nLFxuICB0ZW1wbGF0ZVVybDogJy4vcmFkaW8uaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JhZGlvLnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEYWZmUmFkaW9Db21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MgRGFmZlJhZGlvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cblx0QEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSByb2xlID0gJ3JhZGlvJztcblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZm9jdXNlZCcpIGdldCBmb2N1c0NsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLmZvY3VzZWQgPT09IHRydWU7XG5cdH07XG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRpc2FibGVkJykgZ2V0IGRpc2FibGVkQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgPT09IHRydWU7XG4gIH07XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG5cdF9jaGVja2VkID0gZmFsc2U7XG4gIC8qKlxuXHQgKiBUaGUgY2hlY2tlZCBwcm9wZXJ0eSBvZiB0aGUgcmFkaW9cbiAgICovXG5cdEBJbnB1dCgpXG5cdGdldCBjaGVja2VkKCkge1xuXHRcdHJldHVybiB0aGlzLl9jaGVja2VkO1xuXHR9XG5cdHNldCBjaGVja2VkKHZhbHVlOiBib29sZWFuKSB7XG5cdFx0aWYgKHRoaXMuX2NoZWNrZWQgIT09IHZhbHVlKSB7XG5cdFx0XHR0aGlzLl9jaGVja2VkID0gdmFsdWU7XG5cdFx0XHR0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuXHRcdH1cblx0fVxuICAvKipcblx0ICogVGhlIHZhbHVlIG9mIHRoZSByYWRpb1xuICAgKi9cblx0QElucHV0KCkgdmFsdWU6IGFueTtcbiAgLyoqXG5cdCAqIFRoZSBpZCBvZiB0aGUgcmFkaW8uIEl0IGlzIHVuaXF1ZWx5IGdlbmVyYXRlZCBidXQgY2FuIGJlIG92ZXJ3cml0dGVuIGJ5IHRoZSB1c2VyLiBNdXN0IGJlIHVuaXF1ZS5cbiAgICovXG5cdEBJbnB1dCgpIGlkOiBzdHJpbmcgPSAnZGFmZi1yYWRpby0nICsgcmFkaW9VbmlxdWVJZDtcbiAgLyoqXG5cdCAqIE5hbWUgb2YgdGhlIFJhZGlvXG4gICAqL1xuXHRASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG5cdFxuICAvKipcblx0ICogVXNlZCBmb3IgYXJpYS1sYWJlbC4gRGVmYXVsdCB0byBuYW1lIGlmIHVzZXIgZG9lcyBub3QgaW5wdXQgYSBsYWJlbC5cbiAgICovXG5cdC8vdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ2FyaWEtbGFiZWwnKSBsYWJlbCA9IG5hbWU7XG4gIC8qKlxuXHQgKiBVc2VkIGZvciBhcmlhLWxhYmVsbGVkYnkuIFxuICAgKi9cblx0Ly90c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnYXJpYS1sYWJlbGxlZGJ5JykgbGFiZWxsZWRieTtcblx0XG5cdC8qKlxuXHQgKiBPdXRwdXQgZXZlbnQgb2Ygc2VsZWN0aW9uIGJlaW5nIGNoYW5nZWRcblx0ICovXG5cdEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBkaXNhYmxlZCA9IGZhbHNlO1xuICBmb2N1c2VkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSByYWRpb3NldDogRGFmZlJhZGlvU2V0Q29tcG9uZW50KSB7XG4gICAgcmFkaW9VbmlxdWVJZCsrO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubmFtZSA9IHRoaXMucmFkaW9zZXQgPyB0aGlzLnJhZGlvc2V0Lm5hbWUgOiB0aGlzLm5hbWVcbiAgfVxuXG4gIC8qKlxuICAgKiB1cGRhdGVzIEZvY3VzIHN0eWxpbmdcbiAgICovXG4gIG9uRm9jdXMoKSB7XG4gICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogdXBkYXRlcyBCbHVyIHN0eWxpbmdcbiAgICovXG4gIG9uQmx1cigpIHtcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgfVxuICAvKipcbiAgICogdG9nZ2xlcyBjaGVja2VkIGF0dHJpYnV0ZSBvblxuICAgKi9cbiAgc2VsZWN0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tlZCA9IHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIHRvZ2dsZXMgY2hlY2tlZCBhdHRyaWJ1dGUgb2ZmXG4gICAqL1xuICBkZXNlbGVjdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgfVxuICBvbkNoYW5nZSgpIHtcbiAgICB0aGlzLnNlbGVjdCgpO1xuICB9O1xufVxuIl19