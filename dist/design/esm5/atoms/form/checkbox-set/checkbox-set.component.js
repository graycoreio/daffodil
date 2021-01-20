/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, ChangeDetectionStrategy, ContentChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { FormArray } from '@angular/forms';
import { DaffCheckboxComponent } from '../checkbox/checkbox.component';
var DaffCheckboxSetComponent = /** @class */ (function () {
    function DaffCheckboxSetComponent() {
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
    DaffCheckboxSetComponent.prototype.getValues = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var checkboxes = this.checkboxes.toArray();
        return this.formArray.value.map((/**
         * @param {?} element
         * @param {?} index
         * @return {?}
         */
        function (element, index) {
            return element === true ? checkboxes[index].value : false;
        })).filter((/**
         * @param {?} element
         * @return {?}
         */
        function (element) { return element !== false; }));
    };
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
    return DaffCheckboxSetComponent;
}());
export { DaffCheckboxSetComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtc2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJhdG9tcy9mb3JtL2NoZWNrYm94LXNldC9jaGVja2JveC1zZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLGVBQWUsRUFDZixTQUFTLEVBQ1QsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFdkU7SUFBQTs7Ozs7UUFtQjRCLFNBQUksR0FBRyxPQUFPLENBQUM7UUFRL0IsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFRbEQsQ0FBQzs7OztJQU5DLDRDQUFTOzs7SUFBVDs7WUFDUSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7UUFDNUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHOzs7OztRQUFDLFVBQUMsT0FBTyxFQUFFLEtBQUs7WUFDN0MsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDNUQsQ0FBQyxFQUFDLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxLQUFLLEtBQUssRUFBakIsQ0FBaUIsRUFBQyxDQUFDO0lBQzFDLENBQUM7O2dCQWxDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IscUNBQTRDO29CQUU1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBRWhEOzs7NEJBR0UsS0FBSzt1QkFJTCxLQUFLO3VCQU1MLFdBQVcsU0FBQyxXQUFXOzZCQU12QixlQUFlLFNBQUMscUJBQXFCOzRCQUVyQyxNQUFNOztJQVFULCtCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0E1Qlksd0JBQXdCOzs7SUFFbkMsNkNBQThCOzs7OztJQUk5Qix3Q0FBc0I7Ozs7OztJQU10Qix3Q0FBeUM7Ozs7OztJQU16Qyw4Q0FBcUY7O0lBRXJGLDZDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGFmZkNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi4vY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGFmZi1jaGVja2JveC1zZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3gtc2V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hlY2tib3gtc2V0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG5cbn0pXG5leHBvcnQgY2xhc3MgRGFmZkNoZWNrYm94U2V0Q29tcG9uZW50IHtcblxuICBASW5wdXQoKSBmb3JtQXJyYXk6IEZvcm1BcnJheTtcbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBjaGVja2JveC1zZXRcbiAgICovXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHJvbGUgb2YgdGhlIGNvbXBvbmVudC4gU2V0IHRvIFwiY2hlY2tib3hcIi5cblx0ICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSByb2xlID0gJ2dyb3VwJztcblxuICAvKipcbiAgICogVGhlIGxpc3Qgb2YgY2hlY2tib3hlcyBpbiB0aGUgc2V0LlxuXHQgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBAQ29udGVudENoaWxkcmVuKERhZmZDaGVja2JveENvbXBvbmVudCkgY2hlY2tib3hlczogUXVlcnlMaXN0PERhZmZDaGVja2JveENvbXBvbmVudD47XG5cbiAgQE91dHB1dCgpIHZhbHVlTGlzdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XG5cbiAgZ2V0VmFsdWVzKCk6IGFueVtdIHtcbiAgICBjb25zdCBjaGVja2JveGVzID0gdGhpcy5jaGVja2JveGVzLnRvQXJyYXkoKTtcbiAgICByZXR1cm4gdGhpcy5mb3JtQXJyYXkudmFsdWUubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIGVsZW1lbnQgPT09IHRydWUgPyBjaGVja2JveGVzW2luZGV4XS52YWx1ZSA6IGZhbHNlO1xuICAgIH0pLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT09IGZhbHNlKTtcbiAgfVxufSJdfQ==