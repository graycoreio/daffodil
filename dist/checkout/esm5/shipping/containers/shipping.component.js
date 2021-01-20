/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DaffUpdateShippingAddress, DaffSelectShippingOption } from '../actions/shipping.actions';
import { selectShippingAddress, selectShippingOptionId, selectIsShippingAddressValid } from '../selectors/shipping.selectors';
var ShippingContainer = /** @class */ (function () {
    function ShippingContainer(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    ShippingContainer.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.shippingAddress$ = this.store.pipe(select(selectShippingAddress));
        this.selectedShippingOptionId$ = this.store.pipe(select(selectShippingOptionId));
        this.isShippingAddressValid$ = this.store.pipe(select(selectIsShippingAddressValid));
    };
    /**
     * @param {?} address
     * @return {?}
     */
    ShippingContainer.prototype.updateShippingAddress = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        this.store.dispatch(new DaffUpdateShippingAddress(address));
    };
    /**
     * @param {?} optionId
     * @return {?}
     */
    ShippingContainer.prototype.selectShippingOption = /**
     * @param {?} optionId
     * @return {?}
     */
    function (optionId) {
        this.store.dispatch(new DaffSelectShippingOption(optionId));
    };
    ShippingContainer.decorators = [
        { type: Component, args: [{
                    selector: '[shipping-container]',
                    template: '<ng-content></ng-content>',
                    exportAs: 'ShippingContainer'
                }] }
    ];
    /** @nocollapse */
    ShippingContainer.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return ShippingContainer;
}());
export { ShippingContainer };
if (false) {
    /** @type {?} */
    ShippingContainer.prototype.shippingAddress$;
    /** @type {?} */
    ShippingContainer.prototype.selectedShippingOptionId$;
    /** @type {?} */
    ShippingContainer.prototype.isShippingAddressValid$;
    /** @type {?} */
    ShippingContainer.prototype.isShippingOptionSelected$;
    /**
     * @type {?}
     * @private
     */
    ShippingContainer.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0LyIsInNvdXJjZXMiOlsic2hpcHBpbmcvY29udGFpbmVycy9zaGlwcGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJNUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFbEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLHNCQUFzQixFQUFFLDRCQUE0QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFOUg7SUFZRSwyQkFDVSxLQUF1QztRQUF2QyxVQUFLLEdBQUwsS0FBSyxDQUFrQztJQUM3QyxDQUFDOzs7O0lBRUwsb0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7SUFDdkYsQ0FBQzs7Ozs7SUFFRCxpREFBcUI7Ozs7SUFBckIsVUFBc0IsT0FBb0I7UUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRUQsZ0RBQW9COzs7O0lBQXBCLFVBQXFCLFFBQWdCO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksd0JBQXdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDOztnQkE1QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSxtQkFBbUI7aUJBQzlCOzs7O2dCQVpRLEtBQUs7O0lBcUNkLHdCQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0F4QlksaUJBQWlCOzs7SUFFNUIsNkNBQTBDOztJQUMxQyxzREFBOEM7O0lBQzlDLG9EQUE2Qzs7SUFDN0Msc0RBQStDOzs7OztJQUc3QyxrQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3RvcmUsIHNlbGVjdCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZkFkZHJlc3MgfSBmcm9tICdAZGFmZm9kaWwvY29yZSc7XG5cbmltcG9ydCB7IERhZmZVcGRhdGVTaGlwcGluZ0FkZHJlc3MsIERhZmZTZWxlY3RTaGlwcGluZ09wdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMvc2hpcHBpbmcuYWN0aW9ucyc7XG5pbXBvcnQgeyBEYWZmU2hpcHBpbmdSZWR1Y2Vyc1N0YXRlIH0gZnJvbSAnLi4vcmVkdWNlcnMvc2hpcHBpbmctcmVkdWNlcnMuaW50ZXJmYWNlJztcbmltcG9ydCB7IHNlbGVjdFNoaXBwaW5nQWRkcmVzcywgc2VsZWN0U2hpcHBpbmdPcHRpb25JZCwgc2VsZWN0SXNTaGlwcGluZ0FkZHJlc3NWYWxpZCB9IGZyb20gJy4uL3NlbGVjdG9ycy9zaGlwcGluZy5zZWxlY3RvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbc2hpcHBpbmctY29udGFpbmVyXScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGV4cG9ydEFzOiAnU2hpcHBpbmdDb250YWluZXInXG59KVxuZXhwb3J0IGNsYXNzIFNoaXBwaW5nQ29udGFpbmVyIGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG4gIHNoaXBwaW5nQWRkcmVzcyQ6IE9ic2VydmFibGU8RGFmZkFkZHJlc3M+O1xuICBzZWxlY3RlZFNoaXBwaW5nT3B0aW9uSWQkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIGlzU2hpcHBpbmdBZGRyZXNzVmFsaWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBpc1NoaXBwaW5nT3B0aW9uU2VsZWN0ZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPERhZmZTaGlwcGluZ1JlZHVjZXJzU3RhdGU+XG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zaGlwcGluZ0FkZHJlc3MkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RTaGlwcGluZ0FkZHJlc3MpKTtcbiAgICB0aGlzLnNlbGVjdGVkU2hpcHBpbmdPcHRpb25JZCQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdFNoaXBwaW5nT3B0aW9uSWQpKTtcbiAgICB0aGlzLmlzU2hpcHBpbmdBZGRyZXNzVmFsaWQkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RJc1NoaXBwaW5nQWRkcmVzc1ZhbGlkKSk7XG4gIH1cblxuICB1cGRhdGVTaGlwcGluZ0FkZHJlc3MoYWRkcmVzczogRGFmZkFkZHJlc3MpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEYWZmVXBkYXRlU2hpcHBpbmdBZGRyZXNzKGFkZHJlc3MpKTtcbiAgfVxuXG4gIHNlbGVjdFNoaXBwaW5nT3B0aW9uKG9wdGlvbklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEYWZmU2VsZWN0U2hpcHBpbmdPcHRpb24ob3B0aW9uSWQpKTtcbiAgfVxufVxuIl19