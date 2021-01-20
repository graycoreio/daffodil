/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, ChangeDetectionStrategy, ContentChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { FormArray } from '@angular/forms';
import { DaffCheckboxComponent } from '../checkbox/checkbox.component';
export class DaffCheckboxSetComponent {
    constructor() {
        /**
         * The role of the component. Set to "checkbox".
         * \@docs-private
         */
        this.role = 'group';
        this.valueList = new EventEmitter();
    }
    /**
     * @return {?}
     */
    getValues() {
        /** @type {?} */
        const checkboxes = this.checkboxes.toArray();
        return this.formArray.value.map((/**
         * @param {?} element
         * @param {?} index
         * @return {?}
         */
        (element, index) => {
            return element === true ? checkboxes[index].value : false;
        })).filter((/**
         * @param {?} element
         * @return {?}
         */
        element => element !== false));
    }
}
DaffCheckboxSetComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-checkbox-set',
                template: "<ng-content></ng-content>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
DaffCheckboxSetComponent.propDecorators = {
    formArray: [{ type: Input }],
    name: [{ type: Input }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    checkboxes: [{ type: ContentChildren, args: [DaffCheckboxComponent,] }],
    valueList: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DaffCheckboxSetComponent.prototype.formArray;
    /**
     * The name of the checkbox-set
     * @type {?}
     */
    DaffCheckboxSetComponent.prototype.name;
    /**
     * The role of the component. Set to "checkbox".
     * \@docs-private
     * @type {?}
     */
    DaffCheckboxSetComponent.prototype.role;
    /**
     * The list of checkboxes in the set.
     * \@docs-private
     * @type {?}
     */
    DaffCheckboxSetComponent.prototype.checkboxes;
    /** @type {?} */
    DaffCheckboxSetComponent.prototype.valueList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtc2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJhdG9tcy9mb3JtL2NoZWNrYm94LXNldC9jaGVja2JveC1zZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLGVBQWUsRUFDZixTQUFTLEVBQ1QsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFTdkUsTUFBTSxPQUFPLHdCQUF3QjtJQVByQzs7Ozs7UUFtQjRCLFNBQUksR0FBRyxPQUFPLENBQUM7UUFRL0IsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFRbEQsQ0FBQzs7OztJQU5DLFNBQVM7O2NBQ0QsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1FBQzVDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRzs7Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNqRCxPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM1RCxDQUFDLEVBQUMsQ0FBQyxNQUFNOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFDLENBQUM7SUFDMUMsQ0FBQzs7O1lBbENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixxQ0FBNEM7Z0JBRTVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUVoRDs7O3dCQUdFLEtBQUs7bUJBSUwsS0FBSzttQkFNTCxXQUFXLFNBQUMsV0FBVzt5QkFNdkIsZUFBZSxTQUFDLHFCQUFxQjt3QkFFckMsTUFBTTs7OztJQWxCUCw2Q0FBOEI7Ozs7O0lBSTlCLHdDQUFzQjs7Ozs7O0lBTXRCLHdDQUF5Qzs7Ozs7O0lBTXpDLDhDQUFxRjs7SUFFckYsNkNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgSG9zdEJpbmRpbmcsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEYWZmQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuLi9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYWZmLWNoZWNrYm94LXNldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC1zZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGVja2JveC1zZXQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcblxufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ2hlY2tib3hTZXRDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGZvcm1BcnJheTogRm9ybUFycmF5O1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGNoZWNrYm94LXNldFxuICAgKi9cbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcm9sZSBvZiB0aGUgY29tcG9uZW50LiBTZXQgdG8gXCJjaGVja2JveFwiLlxuXHQgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHJvbGUgPSAnZ3JvdXAnO1xuXG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiBjaGVja2JveGVzIGluIHRoZSBzZXQuXG5cdCAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIEBDb250ZW50Q2hpbGRyZW4oRGFmZkNoZWNrYm94Q29tcG9uZW50KSBjaGVja2JveGVzOiBRdWVyeUxpc3Q8RGFmZkNoZWNrYm94Q29tcG9uZW50PjtcblxuICBAT3V0cHV0KCkgdmFsdWVMaXN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcblxuICBnZXRWYWx1ZXMoKTogYW55W10ge1xuICAgIGNvbnN0IGNoZWNrYm94ZXMgPSB0aGlzLmNoZWNrYm94ZXMudG9BcnJheSgpO1xuICAgIHJldHVybiB0aGlzLmZvcm1BcnJheS52YWx1ZS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gZWxlbWVudCA9PT0gdHJ1ZSA/IGNoZWNrYm94ZXNbaW5kZXhdLnZhbHVlIDogZmFsc2U7XG4gICAgfSkuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudCAhPT0gZmFsc2UpO1xuICB9XG59Il19