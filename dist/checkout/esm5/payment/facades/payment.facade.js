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
var DaffPaymentFacade = /** @class */ (function () {
    function DaffPaymentFacade(store) {
        this.store = store;
        this.paymentInfo$ = this.store.pipe(select(selectPaymentInfo));
    }
    /**
     * Dispatches the given action.
     * @param action action to dispatch.
     */
    /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    DaffPaymentFacade.prototype.dispatch = /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffPaymentFacade.decorators = [
        { type: Injectable, args: [{
                    providedIn: DaffPaymentModule
                },] }
    ];
    /** @nocollapse */
    DaffPaymentFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffPaymentFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffPaymentFacade_Factory() { return new DaffPaymentFacade(i0.ɵɵinject(i1.Store)); }, token: DaffPaymentFacade, providedIn: i2.DaffPaymentModule });
    return DaffPaymentFacade;
}());
export { DaffPaymentFacade };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5mYWNhZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2hlY2tvdXQvIiwic291cmNlcyI6WyJwYXltZW50L2ZhY2FkZXMvcGF5bWVudC5mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsTUFBTSxhQUFhLENBQUM7QUFJcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7QUFLbEU7SUFTRSwyQkFBb0IsS0FBc0M7UUFBdEMsVUFBSyxHQUFMLEtBQUssQ0FBaUM7UUFDeEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILG9DQUFROzs7OztJQUFSLFVBQVMsTUFBYztRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkFuQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxpQkFBaUI7aUJBQzlCOzs7O2dCQWRRLEtBQUs7Ozs0QkFGZDtDQWtDQyxBQXBCRCxJQW9CQztTQWpCWSxpQkFBaUI7Ozs7OztJQUk1Qix5Q0FBc0M7Ozs7O0lBRTFCLGtDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN0b3JlLCBzZWxlY3QsIEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZlN0b3JlRmFjYWRlIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvc3RhdGUnO1xuXG5pbXBvcnQgeyBEYWZmUGF5bWVudE1vZHVsZSB9IGZyb20gJy4uL3BheW1lbnQubW9kdWxlJztcbmltcG9ydCB7IERhZmZQYXltZW50UmVkdWNlcnNTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXJzL3BheW1lbnQtcmVkdWNlcnMuaW50ZXJmYWNlJztcbmltcG9ydCB7IFBheW1lbnRJbmZvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3BheW1lbnQvcGF5bWVudC1pbmZvJztcbmltcG9ydCB7IHNlbGVjdFBheW1lbnRJbmZvIH0gZnJvbSAnLi4vc2VsZWN0b3JzL3BheW1lbnQuc2VsZWN0b3InO1xuXG4vKipcbiAqIEEgZmFjYWRlIGZvciBhY2Nlc3Npbmcgc3RhdGUgZm9yIGN1c3RvbWVyIHBheW1lbnQgaW5mb3JtYXRpb24uXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogRGFmZlBheW1lbnRNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlBheW1lbnRGYWNhZGUgaW1wbGVtZW50cyBEYWZmU3RvcmVGYWNhZGU8QWN0aW9uPiB7XG4gIC8qKlxuICAgKiBUaGUgcGF5bWVudCBpbmZvcm1hdGlvbiBmb3IgYSBjdXN0b21lci5cbiAgICovXG4gIHBheW1lbnRJbmZvJDogT2JzZXJ2YWJsZTxQYXltZW50SW5mbz47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RGFmZlBheW1lbnRSZWR1Y2Vyc1N0YXRlPikge1xuICAgIHRoaXMucGF5bWVudEluZm8kID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RQYXltZW50SW5mbykpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgdGhlIGdpdmVuIGFjdGlvbi5cbiAgICogQHBhcmFtIGFjdGlvbiBhY3Rpb24gdG8gZGlzcGF0Y2guXG4gICAqL1xuICBkaXNwYXRjaChhY3Rpb246IEFjdGlvbikge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgfVxufVxuIl19