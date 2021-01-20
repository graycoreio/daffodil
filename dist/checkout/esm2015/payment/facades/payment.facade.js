/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DaffPaymentModule } from '../payment.module';
import { selectPaymentInfo } from '../selectors/payment.selector';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../payment.module";
/**
 * A facade for accessing state for customer payment information.
 */
export class DaffPaymentFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
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
DaffPaymentFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: DaffPaymentModule
            },] }
];
/** @nocollapse */
DaffPaymentFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffPaymentFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffPaymentFacade_Factory() { return new DaffPaymentFacade(i0.ɵɵinject(i1.Store)); }, token: DaffPaymentFacade, providedIn: i2.DaffPaymentModule });
if (false) {
    /**
     * The payment information for a customer.
     * @type {?}
     */
    DaffPaymentFacade.prototype.paymentInfo$;
    /**
     * @type {?}
     * @private
     */
    DaffPaymentFacade.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5mYWNhZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2hlY2tvdXQvIiwic291cmNlcyI6WyJwYXltZW50L2ZhY2FkZXMvcGF5bWVudC5mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsTUFBTSxhQUFhLENBQUM7QUFJcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7QUFRbEUsTUFBTSxPQUFPLGlCQUFpQjs7OztJQU01QixZQUFvQixLQUFzQztRQUF0QyxVQUFLLEdBQUwsS0FBSyxDQUFpQztRQUN4RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7O0lBTUQsUUFBUSxDQUFDLE1BQWM7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBbkJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsaUJBQWlCO2FBQzlCOzs7O1lBZFEsS0FBSzs7Ozs7Ozs7SUFtQloseUNBQXNDOzs7OztJQUUxQixrQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0LCBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZTdG9yZUZhY2FkZSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3N0YXRlJztcblxuaW1wb3J0IHsgRGFmZlBheW1lbnRNb2R1bGUgfSBmcm9tICcuLi9wYXltZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBEYWZmUGF5bWVudFJlZHVjZXJzU3RhdGUgfSBmcm9tICcuLi9yZWR1Y2Vycy9wYXltZW50LXJlZHVjZXJzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBQYXltZW50SW5mbyB9IGZyb20gJy4uLy4uL21vZGVscy9wYXltZW50L3BheW1lbnQtaW5mbyc7XG5pbXBvcnQgeyBzZWxlY3RQYXltZW50SW5mbyB9IGZyb20gJy4uL3NlbGVjdG9ycy9wYXltZW50LnNlbGVjdG9yJztcblxuLyoqXG4gKiBBIGZhY2FkZSBmb3IgYWNjZXNzaW5nIHN0YXRlIGZvciBjdXN0b21lciBwYXltZW50IGluZm9ybWF0aW9uLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IERhZmZQYXltZW50TW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIERhZmZQYXltZW50RmFjYWRlIGltcGxlbWVudHMgRGFmZlN0b3JlRmFjYWRlPEFjdGlvbj4ge1xuICAvKipcbiAgICogVGhlIHBheW1lbnQgaW5mb3JtYXRpb24gZm9yIGEgY3VzdG9tZXIuXG4gICAqL1xuICBwYXltZW50SW5mbyQ6IE9ic2VydmFibGU8UGF5bWVudEluZm8+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPERhZmZQYXltZW50UmVkdWNlcnNTdGF0ZT4pIHtcbiAgICB0aGlzLnBheW1lbnRJbmZvJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0UGF5bWVudEluZm8pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIHRoZSBnaXZlbiBhY3Rpb24uXG4gICAqIEBwYXJhbSBhY3Rpb24gYWN0aW9uIHRvIGRpc3BhdGNoLlxuICAgKi9cbiAgZGlzcGF0Y2goYWN0aW9uOiBBY3Rpb24pIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gIH1cbn1cbiJdfQ==