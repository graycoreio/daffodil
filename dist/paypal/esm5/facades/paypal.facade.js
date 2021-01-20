/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DaffPaypalModule } from '../paypal.module';
import { getDaffPaypalSelectors } from '../selectors/paypal.selector';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../paypal.module";
/**
 * @template T
 */
var DaffPaypalFacade = /** @class */ (function () {
    function DaffPaypalFacade(store) {
        this.store = store;
        var _a = getDaffPaypalSelectors(), selectPaypalTokenResponse = _a.selectPaypalTokenResponse, selectPaypalToken = _a.selectPaypalToken, selectPaypalStartUrl = _a.selectPaypalStartUrl, selectPaypalEditUrl = _a.selectPaypalEditUrl, selectPaypalLoading = _a.selectPaypalLoading, selectPaypalError = _a.selectPaypalError;
        this.paypalTokenResponse$ = this.store.pipe(select(selectPaypalTokenResponse));
        this.paypalToken$ = this.store.pipe(select(selectPaypalToken));
        this.paypalStartUrl$ = this.store.pipe(select(selectPaypalStartUrl));
        this.paypalEditUrl$ = this.store.pipe(select(selectPaypalEditUrl));
        this.loading$ = this.store.pipe(select(selectPaypalLoading));
        this.error$ = this.store.pipe(select(selectPaypalError));
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
    DaffPaypalFacade.prototype.dispatch = /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffPaypalFacade.decorators = [
        { type: Injectable, args: [{
                    providedIn: DaffPaypalModule
                },] }
    ];
    /** @nocollapse */
    DaffPaypalFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffPaypalFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffPaypalFacade_Factory() { return new DaffPaypalFacade(i0.ɵɵinject(i1.Store)); }, token: DaffPaypalFacade, providedIn: i2.DaffPaypalModule });
    return DaffPaypalFacade;
}());
export { DaffPaypalFacade };
if (false) {
    /**
     * The entire DaffPaypalTokenResponse object.
     * @type {?}
     */
    DaffPaypalFacade.prototype.paypalTokenResponse$;
    /**
     * The paypal token nonce.
     * @type {?}
     */
    DaffPaypalFacade.prototype.paypalToken$;
    /**
     * A URL for the PayPal login page.
     * @type {?}
     */
    DaffPaypalFacade.prototype.paypalStartUrl$;
    /**
     * A PayPal URL that allows a customer to edit their checkout details.
     * @type {?}
     */
    DaffPaypalFacade.prototype.paypalEditUrl$;
    /**
     * The loading state for retrieving a single paypal.
     * @type {?}
     */
    DaffPaypalFacade.prototype.loading$;
    /**
     * Errors associated with retrieving a single paypal.
     * @type {?}
     */
    DaffPaypalFacade.prototype.error$;
    /**
     * @type {?}
     * @private
     */
    DaffPaypalFacade.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLmZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wYXlwYWwvIiwic291cmNlcyI6WyJmYWNhZGVzL3BheXBhbC5mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsTUFBTSxhQUFhLENBQUM7QUFFcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFJcEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7QUFFdEU7SUE2QkUsMEJBQW9CLEtBQXdDO1FBQXhDLFVBQUssR0FBTCxLQUFLLENBQW1DO1FBQ3RELElBQUEsNkJBT3lCLEVBTjlCLHdEQUF5QixFQUN6Qix3Q0FBaUIsRUFDakIsOENBQW9CLEVBQ3BCLDRDQUFtQixFQUNuQiw0Q0FBbUIsRUFDbkIsd0NBQzhCO1FBRTdCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsbUNBQVE7Ozs7O0lBQVIsVUFBUyxNQUFjO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQXJERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLGdCQUFnQjtpQkFDN0I7Ozs7Z0JBVlEsS0FBSzs7OzJCQUZkO0NBZ0VDLEFBdERELElBc0RDO1NBbkRZLGdCQUFnQjs7Ozs7O0lBSTVCLGdEQUFvQzs7Ozs7SUFJcEMsd0NBQWlDOzs7OztJQUlqQywyQ0FBb0M7Ozs7O0lBSXBDLDBDQUFtQzs7Ozs7SUFJbEMsb0NBQThCOzs7OztJQUk5QixrQ0FBMkI7Ozs7O0lBRWYsaUNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3RvcmUsIHNlbGVjdCwgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmUGF5cGFsTW9kdWxlIH0gZnJvbSAnLi4vcGF5cGFsLm1vZHVsZSc7XG5pbXBvcnQgeyBEYWZmUGF5cGFsUmVkdWNlcnNTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXJzL3BheXBhbC1yZWR1Y2Vycy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZlBheXBhbEZhY2FkZUludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvcGF5cGFsLWZhY2FkZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZlBheXBhbFRva2VuUmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbHMvcGF5cGFsLXRva2VuLXJlc3BvbnNlJztcbmltcG9ydCB7IGdldERhZmZQYXlwYWxTZWxlY3RvcnMgfSBmcm9tICcuLi9zZWxlY3RvcnMvcGF5cGFsLnNlbGVjdG9yJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBEYWZmUGF5cGFsTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIERhZmZQYXlwYWxGYWNhZGU8VCBleHRlbmRzIERhZmZQYXlwYWxUb2tlblJlc3BvbnNlID0gRGFmZlBheXBhbFRva2VuUmVzcG9uc2U+IGltcGxlbWVudHMgRGFmZlBheXBhbEZhY2FkZUludGVyZmFjZTxUPiB7XG4gIC8qKlxuICAgKiBUaGUgZW50aXJlIERhZmZQYXlwYWxUb2tlblJlc3BvbnNlIG9iamVjdC5cbiAgICovXG5cdHBheXBhbFRva2VuUmVzcG9uc2UkOiBPYnNlcnZhYmxlPFQ+O1xuXHQvKipcblx0ICogVGhlIHBheXBhbCB0b2tlbiBub25jZS5cblx0ICovXG5cdHBheXBhbFRva2VuJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXHQvKipcblx0ICogQSBVUkwgZm9yIHRoZSBQYXlQYWwgbG9naW4gcGFnZS5cblx0ICovXG5cdHBheXBhbFN0YXJ0VXJsJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXHQvKipcblx0ICogQSBQYXlQYWwgVVJMIHRoYXQgYWxsb3dzIGEgY3VzdG9tZXIgdG8gZWRpdCB0aGVpciBjaGVja291dCBkZXRhaWxzLlxuXHQgKi9cblx0cGF5cGFsRWRpdFVybCQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgLyoqXG4gICAqIFRoZSBsb2FkaW5nIHN0YXRlIGZvciByZXRyaWV2aW5nIGEgc2luZ2xlIHBheXBhbC5cbiAgICovXG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAvKipcbiAgICogRXJyb3JzIGFzc29jaWF0ZWQgd2l0aCByZXRyaWV2aW5nIGEgc2luZ2xlIHBheXBhbC5cbiAgICovXG4gIGVycm9yJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPERhZmZQYXlwYWxSZWR1Y2Vyc1N0YXRlPFQ+Pikge1xuXHRcdGNvbnN0IHtcblx0XHRcdHNlbGVjdFBheXBhbFRva2VuUmVzcG9uc2UsXG5cdFx0XHRzZWxlY3RQYXlwYWxUb2tlbixcblx0XHRcdHNlbGVjdFBheXBhbFN0YXJ0VXJsLFxuXHRcdFx0c2VsZWN0UGF5cGFsRWRpdFVybCxcblx0XHRcdHNlbGVjdFBheXBhbExvYWRpbmcsXG5cdFx0XHRzZWxlY3RQYXlwYWxFcnJvclxuXHRcdH0gPSBnZXREYWZmUGF5cGFsU2VsZWN0b3JzPFQ+KCk7XG5cbiAgICB0aGlzLnBheXBhbFRva2VuUmVzcG9uc2UkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RQYXlwYWxUb2tlblJlc3BvbnNlKSk7XG4gICAgdGhpcy5wYXlwYWxUb2tlbiQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdFBheXBhbFRva2VuKSk7XG4gICAgdGhpcy5wYXlwYWxTdGFydFVybCQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdFBheXBhbFN0YXJ0VXJsKSk7XG4gICAgdGhpcy5wYXlwYWxFZGl0VXJsJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0UGF5cGFsRWRpdFVybCkpO1xuICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdFBheXBhbExvYWRpbmcpKTtcbiAgICB0aGlzLmVycm9yJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0UGF5cGFsRXJyb3IpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIHRoZSBnaXZlbiBhY3Rpb24uXG4gICAqIEBwYXJhbSBhY3Rpb24gYWN0aW9uIHRvIGRpc3BhdGNoLlxuICAgKi9cbiAgZGlzcGF0Y2goYWN0aW9uOiBBY3Rpb24pIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gIH1cbn1cbiJdfQ==