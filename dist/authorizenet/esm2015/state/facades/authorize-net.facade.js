/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { daffAuthorizeNetSelectors } from '../selectors/authorize-net.selector';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
export class DaffAuthorizeNetFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        const { selectIsAcceptJsLoaded, selectLoading, selectPaymentError, selectAcceptJsLoadError } = daffAuthorizeNetSelectors();
        this.isAcceptJsLoaded$ = this.store.pipe(select(selectIsAcceptJsLoaded));
        this.loading$ = this.store.pipe(select(selectLoading));
        this.paymentError$ = this.store.pipe(select(selectPaymentError));
        this.acceptJsLoadError$ = this.store.pipe(select(selectAcceptJsLoadError));
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffAuthorizeNetFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffAuthorizeNetFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffAuthorizeNetFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffAuthorizeNetFacade_Factory() { return new DaffAuthorizeNetFacade(i0.ɵɵinject(i1.Store)); }, token: DaffAuthorizeNetFacade, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffAuthorizeNetFacade.prototype.isAcceptJsLoaded$;
    /** @type {?} */
    DaffAuthorizeNetFacade.prototype.loading$;
    /** @type {?} */
    DaffAuthorizeNetFacade.prototype.paymentError$;
    /** @type {?} */
    DaffAuthorizeNetFacade.prototype.acceptJsLoadError$;
    /**
     * @type {?}
     * @private
     */
    DaffAuthorizeNetFacade.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplLW5ldC5mYWNhZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aG9yaXplbmV0L3N0YXRlLyIsInNvdXJjZXMiOlsiZmFjYWRlcy9hdXRob3JpemUtbmV0LmZhY2FkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUtwRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7O0FBT2hGLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFPakMsWUFBb0IsS0FBMkM7UUFBM0MsVUFBSyxHQUFMLEtBQUssQ0FBc0M7Y0FDekQsRUFDTCxzQkFBc0IsRUFDdEIsYUFBYSxFQUNiLGtCQUFrQixFQUNsQix1QkFBdUIsRUFDdkIsR0FBRyx5QkFBeUIsRUFBRTtRQUU3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxNQUFjO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQTFCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFYZ0IsS0FBSzs7Ozs7SUFjckIsbURBQXVDOztJQUN0QywwQ0FBOEI7O0lBQzlCLCtDQUEwQzs7SUFDMUMsb0RBQStDOzs7OztJQUVuQyx1Q0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb24sIFN0b3JlLCBzZWxlY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZTdGF0ZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvc3RhdGUnO1xuXG5pbXBvcnQgeyBkYWZmQXV0aG9yaXplTmV0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc2VsZWN0b3JzL2F1dGhvcml6ZS1uZXQuc2VsZWN0b3InO1xuaW1wb3J0IHsgRGFmZkF1dGhvcml6ZU5ldFJlZHVjZXJzU3RhdGUgfSBmcm9tICcuLi9yZWR1Y2Vycy9hdXRob3JpemUtbmV0LXJlZHVjZXJzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYWZmQXV0aG9yaXplTmV0RmFjYWRlSW50ZXJmYWNlIH0gZnJvbSAnLi9hdXRob3JpemUtbmV0LWZhY2FkZS5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmQXV0aG9yaXplTmV0RmFjYWRlIGltcGxlbWVudHMgRGFmZkF1dGhvcml6ZU5ldEZhY2FkZUludGVyZmFjZSB7XG5cblx0aXNBY2NlcHRKc0xvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBwYXltZW50RXJyb3IkOiBPYnNlcnZhYmxlPERhZmZTdGF0ZUVycm9yPjtcbiAgYWNjZXB0SnNMb2FkRXJyb3IkOiBPYnNlcnZhYmxlPERhZmZTdGF0ZUVycm9yPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxEYWZmQXV0aG9yaXplTmV0UmVkdWNlcnNTdGF0ZT4pIHtcblx0XHRjb25zdCB7XG5cdFx0XHRzZWxlY3RJc0FjY2VwdEpzTG9hZGVkLFxuXHRcdFx0c2VsZWN0TG9hZGluZyxcblx0XHRcdHNlbGVjdFBheW1lbnRFcnJvcixcblx0XHRcdHNlbGVjdEFjY2VwdEpzTG9hZEVycm9yXG5cdFx0fSA9IGRhZmZBdXRob3JpemVOZXRTZWxlY3RvcnMoKTtcblxuICAgIHRoaXMuaXNBY2NlcHRKc0xvYWRlZCQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdElzQWNjZXB0SnNMb2FkZWQpKTtcbiAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RMb2FkaW5nKSk7XG4gICAgdGhpcy5wYXltZW50RXJyb3IkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RQYXltZW50RXJyb3IpKTtcbiAgICB0aGlzLmFjY2VwdEpzTG9hZEVycm9yJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0QWNjZXB0SnNMb2FkRXJyb3IpKTtcbiAgfVxuXG4gIGRpc3BhdGNoKGFjdGlvbjogQWN0aW9uKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICB9XG59XG4iXX0=