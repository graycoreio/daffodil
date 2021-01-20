/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DaffUpdateBillingAddress, DaffUpdatePaymentInfo, DaffToggleBillingAddressIsShippingAddress } from '../actions/billing.actions';
import { selectBillingAddress, selectBillingAddressIsShippingAddress, selectPaymentInfo } from '../selectors/billing.selector';
export class BillingContainer {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.billingAddress$ = this.store.pipe(select(selectBillingAddress));
        this.billingAddressIsShippingAddress$ = this.store.pipe(select(selectBillingAddressIsShippingAddress));
        this.paymentInfo$ = this.store.pipe(select(selectPaymentInfo));
    }
    /**
     * @param {?} address
     * @return {?}
     */
    updateBillingAddress(address) {
        this.store.dispatch(new DaffUpdateBillingAddress(address));
    }
    /**
     * @return {?}
     */
    toggleBillingAddressIsShippingAddress() {
        this.store.dispatch(new DaffToggleBillingAddressIsShippingAddress());
    }
    /**
     * @param {?} info
     * @return {?}
     */
    updatePaymentInfo(info) {
        this.store.dispatch(new DaffUpdatePaymentInfo(info));
    }
}
BillingContainer.decorators = [
    { type: Component, args: [{
                selector: '[billing-container]',
                template: '<ng-content></ng-content>',
                exportAs: 'BillingContainer'
            }] }
];
/** @nocollapse */
BillingContainer.ctorParameters = () => [
    { type: Store }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2hlY2tvdXQvIiwic291cmNlcyI6WyJiaWxsaW5nL2NvbnRhaW5lcnMvYmlsbGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJNUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFLHlDQUF5QyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFeEksT0FBTyxFQUFFLG9CQUFvQixFQUFFLHFDQUFxQyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFRL0gsTUFBTSxPQUFPLGdCQUFnQjs7OztJQU0zQixZQUNVLEtBQXNDO1FBQXRDLFVBQUssR0FBTCxLQUFLLENBQWlDO0lBQzVDLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUVELG9CQUFvQixDQUFDLE9BQW9CO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksd0JBQXdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7O0lBRUQscUNBQXFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUkseUNBQXlDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsSUFBaUI7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7OztZQWJRLEtBQUs7Ozs7SUFnQlosMkNBQXlDOztJQUN6Qyw0REFBc0Q7O0lBQ3RELHdDQUFzQzs7Ozs7SUFHcEMsaUNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN0b3JlLCBzZWxlY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZBZGRyZXNzIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmVXBkYXRlQmlsbGluZ0FkZHJlc3MsIERhZmZVcGRhdGVQYXltZW50SW5mbywgRGFmZlRvZ2dsZUJpbGxpbmdBZGRyZXNzSXNTaGlwcGluZ0FkZHJlc3MgfSBmcm9tICcuLi9hY3Rpb25zL2JpbGxpbmcuYWN0aW9ucyc7XG5pbXBvcnQgeyBQYXltZW50SW5mbyB9IGZyb20gJy4uLy4uL21vZGVscy9wYXltZW50L3BheW1lbnQtaW5mbyc7XG5pbXBvcnQgeyBzZWxlY3RCaWxsaW5nQWRkcmVzcywgc2VsZWN0QmlsbGluZ0FkZHJlc3NJc1NoaXBwaW5nQWRkcmVzcywgc2VsZWN0UGF5bWVudEluZm8gfSBmcm9tICcuLi9zZWxlY3RvcnMvYmlsbGluZy5zZWxlY3Rvcic7XG5pbXBvcnQgeyBEYWZmQmlsbGluZ1JlZHVjZXJzU3RhdGUgfSBmcm9tICcuLi9yZWR1Y2Vycy9iaWxsaW5nLXJlZHVjZXJzLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tiaWxsaW5nLWNvbnRhaW5lcl0nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBleHBvcnRBczogJ0JpbGxpbmdDb250YWluZXInXG59KVxuZXhwb3J0IGNsYXNzIEJpbGxpbmdDb250YWluZXIgaW1wbGVtZW50cyBPbkluaXQge1xuICBcbiAgYmlsbGluZ0FkZHJlc3MkOiBPYnNlcnZhYmxlPERhZmZBZGRyZXNzPjtcbiAgYmlsbGluZ0FkZHJlc3NJc1NoaXBwaW5nQWRkcmVzcyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHBheW1lbnRJbmZvJDogT2JzZXJ2YWJsZTxQYXltZW50SW5mbz47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8RGFmZkJpbGxpbmdSZWR1Y2Vyc1N0YXRlPlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYmlsbGluZ0FkZHJlc3MkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RCaWxsaW5nQWRkcmVzcykpO1xuICAgIHRoaXMuYmlsbGluZ0FkZHJlc3NJc1NoaXBwaW5nQWRkcmVzcyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdEJpbGxpbmdBZGRyZXNzSXNTaGlwcGluZ0FkZHJlc3MpKTtcbiAgICB0aGlzLnBheW1lbnRJbmZvJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0UGF5bWVudEluZm8pKTtcbiAgfVxuXG4gIHVwZGF0ZUJpbGxpbmdBZGRyZXNzKGFkZHJlc3M6IERhZmZBZGRyZXNzKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGFmZlVwZGF0ZUJpbGxpbmdBZGRyZXNzKGFkZHJlc3MpKTtcbiAgfVxuXG4gIHRvZ2dsZUJpbGxpbmdBZGRyZXNzSXNTaGlwcGluZ0FkZHJlc3MoKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGFmZlRvZ2dsZUJpbGxpbmdBZGRyZXNzSXNTaGlwcGluZ0FkZHJlc3MoKSk7XG4gIH1cblxuICB1cGRhdGVQYXltZW50SW5mbyhpbmZvOiBQYXltZW50SW5mbykge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERhZmZVcGRhdGVQYXltZW50SW5mbyhpbmZvKSk7XG4gIH1cbn1cbiJdfQ==