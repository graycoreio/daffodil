/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DaffBillingModule } from '../billing.module';
import { selectBillingAddress, selectBillingAddressIsShippingAddress, selectPaymentInfo } from '../selectors/billing.selector';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../billing.module";
/**
 * A facade for accessing state for the billing information of a customer
 */
export class DaffBillingFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.billingAddress$ = this.store.pipe(select(selectBillingAddress));
        this.billingAddressIsShippingAddress$ = this.store.pipe(select(selectBillingAddressIsShippingAddress));
        this.paymentInfo$ = this.store.pipe(select(selectPaymentInfo));
    }
    /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffBillingFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: DaffBillingModule
            },] }
];
/** @nocollapse */
DaffBillingFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffBillingFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffBillingFacade_Factory() { return new DaffBillingFacade(i0.ɵɵinject(i1.Store)); }, token: DaffBillingFacade, providedIn: i2.DaffBillingModule });
if (false) {
    /**
     * The billing address for a customer.
     * @type {?}
     */
    DaffBillingFacade.prototype.billingAddress$;
    /**
     * Whether or not the billing address is the same as the shipping address.
     * @type {?}
     */
    DaffBillingFacade.prototype.billingAddressIsShippingAddress$;
    /**
     * The payment information for a customer.
     * @type {?}
     */
    DaffBillingFacade.prototype.paymentInfo$;
    /**
     * @type {?}
     * @private
     */
    DaffBillingFacade.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy5mYWNhZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2hlY2tvdXQvIiwic291cmNlcyI6WyJiaWxsaW5nL2ZhY2FkZXMvYmlsbGluZy5mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsTUFBTSxhQUFhLENBQUM7QUFLcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFdEQsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixxQ0FBcUMsRUFDckMsaUJBQWlCLEVBQ2xCLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7QUFTdkMsTUFBTSxPQUFPLGlCQUFpQjs7OztJQWM1QixZQUFvQixLQUFzQztRQUF0QyxVQUFLLEdBQUwsS0FBSyxDQUFpQztRQUN4RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUM7UUFDdkcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7OztJQU1ELFFBQVEsQ0FBQyxNQUFjO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQTdCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLGlCQUFpQjthQUM5Qjs7OztZQW5CUSxLQUFLOzs7Ozs7OztJQXdCWiw0Q0FBeUM7Ozs7O0lBSXpDLDZEQUFzRDs7Ozs7SUFJdEQseUNBQXNDOzs7OztJQUUxQixrQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0LCBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZBZGRyZXNzIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuaW1wb3J0IHsgRGFmZlN0b3JlRmFjYWRlIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvc3RhdGUnO1xuXG5pbXBvcnQgeyBEYWZmQmlsbGluZ01vZHVsZSB9IGZyb20gJy4uL2JpbGxpbmcubW9kdWxlJztcbmltcG9ydCB7IERhZmZCaWxsaW5nUmVkdWNlcnNTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXJzL2JpbGxpbmctcmVkdWNlcnMuaW50ZXJmYWNlJztcbmltcG9ydCB7XG4gIHNlbGVjdEJpbGxpbmdBZGRyZXNzLFxuICBzZWxlY3RCaWxsaW5nQWRkcmVzc0lzU2hpcHBpbmdBZGRyZXNzLFxuICBzZWxlY3RQYXltZW50SW5mb1xufSBmcm9tICcuLi9zZWxlY3RvcnMvYmlsbGluZy5zZWxlY3Rvcic7XG5pbXBvcnQgeyBQYXltZW50SW5mbyB9IGZyb20gJy4uLy4uL21vZGVscy9wYXltZW50L3BheW1lbnQtaW5mbyc7XG5cbi8qKlxuICogQSBmYWNhZGUgZm9yIGFjY2Vzc2luZyBzdGF0ZSBmb3IgdGhlIGJpbGxpbmcgaW5mb3JtYXRpb24gb2YgYSBjdXN0b21lclxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IERhZmZCaWxsaW5nTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIERhZmZCaWxsaW5nRmFjYWRlIGltcGxlbWVudHMgRGFmZlN0b3JlRmFjYWRlPEFjdGlvbj4ge1xuICAvKipcbiAgICogVGhlIGJpbGxpbmcgYWRkcmVzcyBmb3IgYSBjdXN0b21lci5cbiAgICovXG4gIGJpbGxpbmdBZGRyZXNzJDogT2JzZXJ2YWJsZTxEYWZmQWRkcmVzcz47XG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgYmlsbGluZyBhZGRyZXNzIGlzIHRoZSBzYW1lIGFzIHRoZSBzaGlwcGluZyBhZGRyZXNzLlxuICAgKi9cbiAgYmlsbGluZ0FkZHJlc3NJc1NoaXBwaW5nQWRkcmVzcyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIC8qKlxuICAgKiBUaGUgcGF5bWVudCBpbmZvcm1hdGlvbiBmb3IgYSBjdXN0b21lci5cbiAgICovXG4gIHBheW1lbnRJbmZvJDogT2JzZXJ2YWJsZTxQYXltZW50SW5mbz47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RGFmZkJpbGxpbmdSZWR1Y2Vyc1N0YXRlPikge1xuICAgIHRoaXMuYmlsbGluZ0FkZHJlc3MkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RCaWxsaW5nQWRkcmVzcykpO1xuICAgIHRoaXMuYmlsbGluZ0FkZHJlc3NJc1NoaXBwaW5nQWRkcmVzcyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdEJpbGxpbmdBZGRyZXNzSXNTaGlwcGluZ0FkZHJlc3MpKTtcbiAgICB0aGlzLnBheW1lbnRJbmZvJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0UGF5bWVudEluZm8pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIHRoZSBnaXZlbiBhY3Rpb24uXG4gICAqIEBwYXJhbSBhY3Rpb24gYWN0aW9uIHRvIGRpc3BhdGNoLlxuICAgKi9cbiAgZGlzcGF0Y2goYWN0aW9uOiBBY3Rpb24pIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gIH1cbn1cbiJdfQ==