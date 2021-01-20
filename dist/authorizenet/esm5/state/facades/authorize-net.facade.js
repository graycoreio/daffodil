/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { daffAuthorizeNetSelectors } from '../selectors/authorize-net.selector';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
var DaffAuthorizeNetFacade = /** @class */ (function () {
    function DaffAuthorizeNetFacade(store) {
        this.store = store;
        var _a = daffAuthorizeNetSelectors(), selectIsAcceptJsLoaded = _a.selectIsAcceptJsLoaded, selectLoading = _a.selectLoading, selectPaymentError = _a.selectPaymentError, selectAcceptJsLoadError = _a.selectAcceptJsLoadError;
        this.isAcceptJsLoaded$ = this.store.pipe(select(selectIsAcceptJsLoaded));
        this.loading$ = this.store.pipe(select(selectLoading));
        this.paymentError$ = this.store.pipe(select(selectPaymentError));
        this.acceptJsLoadError$ = this.store.pipe(select(selectAcceptJsLoadError));
    }
    /**
     * @param {?} action
     * @return {?}
     */
    DaffAuthorizeNetFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffAuthorizeNetFacade.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffAuthorizeNetFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffAuthorizeNetFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffAuthorizeNetFacade_Factory() { return new DaffAuthorizeNetFacade(i0.ɵɵinject(i1.Store)); }, token: DaffAuthorizeNetFacade, providedIn: "root" });
    return DaffAuthorizeNetFacade;
}());
export { DaffAuthorizeNetFacade };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplLW5ldC5mYWNhZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aG9yaXplbmV0L3N0YXRlLyIsInNvdXJjZXMiOlsiZmFjYWRlcy9hdXRob3JpemUtbmV0LmZhY2FkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUtwRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7O0FBSWhGO0lBVUUsZ0NBQW9CLEtBQTJDO1FBQTNDLFVBQUssR0FBTCxLQUFLLENBQXNDO1FBQ3pELElBQUEsZ0NBS3lCLEVBSjlCLGtEQUFzQixFQUN0QixnQ0FBYSxFQUNiLDBDQUFrQixFQUNsQixvREFDOEI7UUFFN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Ozs7SUFFRCx5Q0FBUTs7OztJQUFSLFVBQVMsTUFBYztRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkExQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFYZ0IsS0FBSzs7O2lDQUR0QjtDQXFDQyxBQTNCRCxJQTJCQztTQXhCWSxzQkFBc0I7OztJQUVsQyxtREFBdUM7O0lBQ3RDLDBDQUE4Qjs7SUFDOUIsK0NBQTBDOztJQUMxQyxvREFBK0M7Ozs7O0lBRW5DLHVDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbiwgU3RvcmUsIHNlbGVjdCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGFmZlN0YXRlRXJyb3IgfSBmcm9tICdAZGFmZm9kaWwvY29yZS9zdGF0ZSc7XG5cbmltcG9ydCB7IGRhZmZBdXRob3JpemVOZXRTZWxlY3RvcnMgfSBmcm9tICcuLi9zZWxlY3RvcnMvYXV0aG9yaXplLW5ldC5zZWxlY3Rvcic7XG5pbXBvcnQgeyBEYWZmQXV0aG9yaXplTmV0UmVkdWNlcnNTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXJzL2F1dGhvcml6ZS1uZXQtcmVkdWNlcnMuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZBdXRob3JpemVOZXRGYWNhZGVJbnRlcmZhY2UgfSBmcm9tICcuL2F1dGhvcml6ZS1uZXQtZmFjYWRlLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZBdXRob3JpemVOZXRGYWNhZGUgaW1wbGVtZW50cyBEYWZmQXV0aG9yaXplTmV0RmFjYWRlSW50ZXJmYWNlIHtcblxuXHRpc0FjY2VwdEpzTG9hZGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHBheW1lbnRFcnJvciQ6IE9ic2VydmFibGU8RGFmZlN0YXRlRXJyb3I+O1xuICBhY2NlcHRKc0xvYWRFcnJvciQ6IE9ic2VydmFibGU8RGFmZlN0YXRlRXJyb3I+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPERhZmZBdXRob3JpemVOZXRSZWR1Y2Vyc1N0YXRlPikge1xuXHRcdGNvbnN0IHtcblx0XHRcdHNlbGVjdElzQWNjZXB0SnNMb2FkZWQsXG5cdFx0XHRzZWxlY3RMb2FkaW5nLFxuXHRcdFx0c2VsZWN0UGF5bWVudEVycm9yLFxuXHRcdFx0c2VsZWN0QWNjZXB0SnNMb2FkRXJyb3Jcblx0XHR9ID0gZGFmZkF1dGhvcml6ZU5ldFNlbGVjdG9ycygpO1xuXG4gICAgdGhpcy5pc0FjY2VwdEpzTG9hZGVkJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0SXNBY2NlcHRKc0xvYWRlZCkpO1xuICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdExvYWRpbmcpKTtcbiAgICB0aGlzLnBheW1lbnRFcnJvciQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdFBheW1lbnRFcnJvcikpO1xuICAgIHRoaXMuYWNjZXB0SnNMb2FkRXJyb3IkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RBY2NlcHRKc0xvYWRFcnJvcikpO1xuICB9XG5cbiAgZGlzcGF0Y2goYWN0aW9uOiBBY3Rpb24pIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gIH1cbn1cbiJdfQ==