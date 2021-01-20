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
export class DaffPaypalFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        const { selectPaypalTokenResponse, selectPaypalToken, selectPaypalStartUrl, selectPaypalEditUrl, selectPaypalLoading, selectPaypalError } = getDaffPaypalSelectors();
        this.paypalTokenResponse$ = this.store.pipe(select(selectPaypalTokenResponse));
        this.paypalToken$ = this.store.pipe(select(selectPaypalToken));
        this.paypalStartUrl$ = this.store.pipe(select(selectPaypalStartUrl));
        this.paypalEditUrl$ = this.store.pipe(select(selectPaypalEditUrl));
        this.loading$ = this.store.pipe(select(selectPaypalLoading));
        this.error$ = this.store.pipe(select(selectPaypalError));
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
DaffPaypalFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: DaffPaypalModule
            },] }
];
/** @nocollapse */
DaffPaypalFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffPaypalFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffPaypalFacade_Factory() { return new DaffPaypalFacade(i0.ɵɵinject(i1.Store)); }, token: DaffPaypalFacade, providedIn: i2.DaffPaypalModule });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLmZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wYXlwYWwvIiwic291cmNlcyI6WyJmYWNhZGVzL3BheXBhbC5mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsTUFBTSxhQUFhLENBQUM7QUFFcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFJcEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7QUFLdEUsTUFBTSxPQUFPLGdCQUFnQjs7OztJQTBCM0IsWUFBb0IsS0FBd0M7UUFBeEMsVUFBSyxHQUFMLEtBQUssQ0FBbUM7Y0FDdEQsRUFDTCx5QkFBeUIsRUFDekIsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLGlCQUFpQixFQUNqQixHQUFHLHNCQUFzQixFQUFLO1FBRTdCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBTUQsUUFBUSxDQUFDLE1BQWM7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBckRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsZ0JBQWdCO2FBQzdCOzs7O1lBVlEsS0FBSzs7Ozs7Ozs7SUFlYixnREFBb0M7Ozs7O0lBSXBDLHdDQUFpQzs7Ozs7SUFJakMsMkNBQW9DOzs7OztJQUlwQywwQ0FBbUM7Ozs7O0lBSWxDLG9DQUE4Qjs7Ozs7SUFJOUIsa0NBQTJCOzs7OztJQUVmLGlDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN0b3JlLCBzZWxlY3QsIEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZlBheXBhbE1vZHVsZSB9IGZyb20gJy4uL3BheXBhbC5tb2R1bGUnO1xuaW1wb3J0IHsgRGFmZlBheXBhbFJlZHVjZXJzU3RhdGUgfSBmcm9tICcuLi9yZWR1Y2Vycy9wYXlwYWwtcmVkdWNlcnMuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZQYXlwYWxGYWNhZGVJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BheXBhbC1mYWNhZGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZQYXlwYWxUb2tlblJlc3BvbnNlIH0gZnJvbSAnLi4vbW9kZWxzL3BheXBhbC10b2tlbi1yZXNwb25zZSc7XG5pbXBvcnQgeyBnZXREYWZmUGF5cGFsU2VsZWN0b3JzIH0gZnJvbSAnLi4vc2VsZWN0b3JzL3BheXBhbC5zZWxlY3Rvcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogRGFmZlBheXBhbE1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmUGF5cGFsRmFjYWRlPFQgZXh0ZW5kcyBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZSA9IERhZmZQYXlwYWxUb2tlblJlc3BvbnNlPiBpbXBsZW1lbnRzIERhZmZQYXlwYWxGYWNhZGVJbnRlcmZhY2U8VD4ge1xuICAvKipcbiAgICogVGhlIGVudGlyZSBEYWZmUGF5cGFsVG9rZW5SZXNwb25zZSBvYmplY3QuXG4gICAqL1xuXHRwYXlwYWxUb2tlblJlc3BvbnNlJDogT2JzZXJ2YWJsZTxUPjtcblx0LyoqXG5cdCAqIFRoZSBwYXlwYWwgdG9rZW4gbm9uY2UuXG5cdCAqL1xuXHRwYXlwYWxUb2tlbiQ6IE9ic2VydmFibGU8c3RyaW5nPjtcblx0LyoqXG5cdCAqIEEgVVJMIGZvciB0aGUgUGF5UGFsIGxvZ2luIHBhZ2UuXG5cdCAqL1xuXHRwYXlwYWxTdGFydFVybCQ6IE9ic2VydmFibGU8c3RyaW5nPjtcblx0LyoqXG5cdCAqIEEgUGF5UGFsIFVSTCB0aGF0IGFsbG93cyBhIGN1c3RvbWVyIHRvIGVkaXQgdGhlaXIgY2hlY2tvdXQgZGV0YWlscy5cblx0ICovXG5cdHBheXBhbEVkaXRVcmwkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIC8qKlxuICAgKiBUaGUgbG9hZGluZyBzdGF0ZSBmb3IgcmV0cmlldmluZyBhIHNpbmdsZSBwYXlwYWwuXG4gICAqL1xuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgLyoqXG4gICAqIEVycm9ycyBhc3NvY2lhdGVkIHdpdGggcmV0cmlldmluZyBhIHNpbmdsZSBwYXlwYWwuXG4gICAqL1xuICBlcnJvciQ6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxEYWZmUGF5cGFsUmVkdWNlcnNTdGF0ZTxUPj4pIHtcblx0XHRjb25zdCB7XG5cdFx0XHRzZWxlY3RQYXlwYWxUb2tlblJlc3BvbnNlLFxuXHRcdFx0c2VsZWN0UGF5cGFsVG9rZW4sXG5cdFx0XHRzZWxlY3RQYXlwYWxTdGFydFVybCxcblx0XHRcdHNlbGVjdFBheXBhbEVkaXRVcmwsXG5cdFx0XHRzZWxlY3RQYXlwYWxMb2FkaW5nLFxuXHRcdFx0c2VsZWN0UGF5cGFsRXJyb3Jcblx0XHR9ID0gZ2V0RGFmZlBheXBhbFNlbGVjdG9yczxUPigpO1xuXG4gICAgdGhpcy5wYXlwYWxUb2tlblJlc3BvbnNlJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0UGF5cGFsVG9rZW5SZXNwb25zZSkpO1xuICAgIHRoaXMucGF5cGFsVG9rZW4kID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RQYXlwYWxUb2tlbikpO1xuICAgIHRoaXMucGF5cGFsU3RhcnRVcmwkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RQYXlwYWxTdGFydFVybCkpO1xuICAgIHRoaXMucGF5cGFsRWRpdFVybCQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdFBheXBhbEVkaXRVcmwpKTtcbiAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RQYXlwYWxMb2FkaW5nKSk7XG4gICAgdGhpcy5lcnJvciQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdFBheXBhbEVycm9yKSk7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyB0aGUgZ2l2ZW4gYWN0aW9uLlxuICAgKiBAcGFyYW0gYWN0aW9uIGFjdGlvbiB0byBkaXNwYXRjaC5cbiAgICovXG4gIGRpc3BhdGNoKGFjdGlvbjogQWN0aW9uKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICB9XG59XG4iXX0=