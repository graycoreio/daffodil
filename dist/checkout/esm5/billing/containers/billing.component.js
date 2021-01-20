/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DaffUpdateBillingAddress, DaffUpdatePaymentInfo, DaffToggleBillingAddressIsShippingAddress } from '../actions/billing.actions';
import { selectBillingAddress, selectBillingAddressIsShippingAddress, selectPaymentInfo } from '../selectors/billing.selector';
var BillingContainer = /** @class */ (function () {
    function BillingContainer(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    BillingContainer.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.billingAddress$ = this.store.pipe(select(selectBillingAddress));
        this.billingAddressIsShippingAddress$ = this.store.pipe(select(selectBillingAddressIsShippingAddress));
        this.paymentInfo$ = this.store.pipe(select(selectPaymentInfo));
    };
    /**
     * @param {?} address
     * @return {?}
     */
    BillingContainer.prototype.updateBillingAddress = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        this.store.dispatch(new DaffUpdateBillingAddress(address));
    };
    /**
     * @return {?}
     */
    BillingContainer.prototype.toggleBillingAddressIsShippingAddress = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new DaffToggleBillingAddressIsShippingAddress());
    };
    /**
     * @param {?} info
     * @return {?}
     */
    BillingContainer.prototype.updatePaymentInfo = /**
     * @param {?} info
     * @return {?}
     */
    function (info) {
        this.store.dispatch(new DaffUpdatePaymentInfo(info));
    };
    BillingContainer.decorators = [
        { type: Component, args: [{
                    selector: '[billing-container]',
                    template: '<ng-content></ng-content>',
                    exportAs: 'BillingContainer'
                }] }
    ];
    /** @nocollapse */
    BillingContainer.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return BillingContainer;
}());
export { BillingContainer };
if (false) {
    /** @type {?} */
    BillingContainer.prototype.billingAddress$;
    /** @type {?} */
    BillingContainer.prototype.billingAddressIsShippingAddress$;
    /** @type {?} */
    BillingContainer.prototype.paymentInfo$;
    /**
     * @type {?}
     * @private
     */
    BillingContainer.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2hlY2tvdXQvIiwic291cmNlcyI6WyJiaWxsaW5nL2NvbnRhaW5lcnMvYmlsbGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJNUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFLHlDQUF5QyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFeEksT0FBTyxFQUFFLG9CQUFvQixFQUFFLHFDQUFxQyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHL0g7SUFXRSwwQkFDVSxLQUFzQztRQUF0QyxVQUFLLEdBQUwsS0FBSyxDQUFpQztJQUM1QyxDQUFDOzs7O0lBRUwsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUVELCtDQUFvQjs7OztJQUFwQixVQUFxQixPQUFvQjtRQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7OztJQUVELGdFQUFxQzs7O0lBQXJDO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSx5Q0FBeUMsRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7SUFFRCw0Q0FBaUI7Ozs7SUFBakIsVUFBa0IsSUFBaUI7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsUUFBUSxFQUFFLGtCQUFrQjtpQkFDN0I7Ozs7Z0JBYlEsS0FBSzs7SUF5Q2QsdUJBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQTNCWSxnQkFBZ0I7OztJQUUzQiwyQ0FBeUM7O0lBQ3pDLDREQUFzRDs7SUFDdEQsd0NBQXNDOzs7OztJQUdwQyxpQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3RvcmUsIHNlbGVjdCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZkFkZHJlc3MgfSBmcm9tICdAZGFmZm9kaWwvY29yZSc7XG5cbmltcG9ydCB7IERhZmZVcGRhdGVCaWxsaW5nQWRkcmVzcywgRGFmZlVwZGF0ZVBheW1lbnRJbmZvLCBEYWZmVG9nZ2xlQmlsbGluZ0FkZHJlc3NJc1NoaXBwaW5nQWRkcmVzcyB9IGZyb20gJy4uL2FjdGlvbnMvYmlsbGluZy5hY3Rpb25zJztcbmltcG9ydCB7IFBheW1lbnRJbmZvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BheW1lbnQvcGF5bWVudC1pbmZvJztcbmltcG9ydCB7IHNlbGVjdEJpbGxpbmdBZGRyZXNzLCBzZWxlY3RCaWxsaW5nQWRkcmVzc0lzU2hpcHBpbmdBZGRyZXNzLCBzZWxlY3RQYXltZW50SW5mbyB9IGZyb20gJy4uL3NlbGVjdG9ycy9iaWxsaW5nLnNlbGVjdG9yJztcbmltcG9ydCB7IERhZmZCaWxsaW5nUmVkdWNlcnNTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXJzL2JpbGxpbmctcmVkdWNlcnMuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2JpbGxpbmctY29udGFpbmVyXScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGV4cG9ydEFzOiAnQmlsbGluZ0NvbnRhaW5lcidcbn0pXG5leHBvcnQgY2xhc3MgQmlsbGluZ0NvbnRhaW5lciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICBiaWxsaW5nQWRkcmVzcyQ6IE9ic2VydmFibGU8RGFmZkFkZHJlc3M+O1xuICBiaWxsaW5nQWRkcmVzc0lzU2hpcHBpbmdBZGRyZXNzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcGF5bWVudEluZm8kOiBPYnNlcnZhYmxlPFBheW1lbnRJbmZvPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxEYWZmQmlsbGluZ1JlZHVjZXJzU3RhdGU+XG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5iaWxsaW5nQWRkcmVzcyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdEJpbGxpbmdBZGRyZXNzKSk7XG4gICAgdGhpcy5iaWxsaW5nQWRkcmVzc0lzU2hpcHBpbmdBZGRyZXNzJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0QmlsbGluZ0FkZHJlc3NJc1NoaXBwaW5nQWRkcmVzcykpO1xuICAgIHRoaXMucGF5bWVudEluZm8kID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RQYXltZW50SW5mbykpO1xuICB9XG5cbiAgdXBkYXRlQmlsbGluZ0FkZHJlc3MoYWRkcmVzczogRGFmZkFkZHJlc3MpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEYWZmVXBkYXRlQmlsbGluZ0FkZHJlc3MoYWRkcmVzcykpO1xuICB9XG5cbiAgdG9nZ2xlQmlsbGluZ0FkZHJlc3NJc1NoaXBwaW5nQWRkcmVzcygpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEYWZmVG9nZ2xlQmlsbGluZ0FkZHJlc3NJc1NoaXBwaW5nQWRkcmVzcygpKTtcbiAgfVxuXG4gIHVwZGF0ZVBheW1lbnRJbmZvKGluZm86IFBheW1lbnRJbmZvKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGFmZlVwZGF0ZVBheW1lbnRJbmZvKGluZm8pKTtcbiAgfVxufVxuIl19