/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DaffCartStorageService, DAFF_CART_ERROR_MATCHER } from '@daffodil/cart';
import { DaffCartShippingInformationDriver } from '@daffodil/cart/driver';
import { DaffCartShippingInformationActionTypes, DaffCartShippingInformationLoadSuccess, DaffCartShippingInformationLoadFailure, DaffCartShippingInformationDeleteSuccess, DaffCartShippingInformationDeleteFailure, DaffCartShippingInformationUpdateSuccess, DaffCartShippingInformationUpdateFailure, } from '../actions/public_api';
/**
 * @template T, V
 */
var DaffCartShippingInformationEffects = /** @class */ (function () {
    function DaffCartShippingInformationEffects(actions$, errorMatcher, driver, storage) {
        var _this = this;
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.get$ = this.actions$.pipe(ofType(DaffCartShippingInformationActionTypes.CartShippingInformationLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.get(_this.storage.getCartId()).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartShippingInformationLoadSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartShippingInformationLoadFailure(_this.errorMatcher(error))); })));
        })));
        this.update$ = this.actions$.pipe(ofType(DaffCartShippingInformationActionTypes.CartShippingInformationUpdateAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.update(_this.storage.getCartId(), action.payload).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartShippingInformationUpdateSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartShippingInformationUpdateFailure(_this.errorMatcher(error))); })));
        })));
        this.delete$ = this.actions$.pipe(ofType(DaffCartShippingInformationActionTypes.CartShippingInformationDeleteAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.delete(_this.storage.getCartId()).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartShippingInformationDeleteSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartShippingInformationDeleteFailure(_this.errorMatcher(error))); })));
        })));
    }
    DaffCartShippingInformationEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCartShippingInformationEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartShippingInformationDriver,] }] },
        { type: DaffCartStorageService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartShippingInformationEffects.prototype, "get$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartShippingInformationEffects.prototype, "update$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], DaffCartShippingInformationEffects.prototype, "delete$", void 0);
    return DaffCartShippingInformationEffects;
}());
export { DaffCartShippingInformationEffects };
if (false) {
    /** @type {?} */
    DaffCartShippingInformationEffects.prototype.get$;
    /** @type {?} */
    DaffCartShippingInformationEffects.prototype.update$;
    /** @type {?} */
    DaffCartShippingInformationEffects.prototype.delete$;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingInformationEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingInformationEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingInformationEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingInformationEffects.prototype.storage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJlZmZlY3RzL2NhcnQtc2hpcHBpbmctaW5mb3JtYXRpb24uZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBeUMsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4SCxPQUFPLEVBQUUsaUNBQWlDLEVBQStDLE1BQU0sdUJBQXVCLENBQUM7QUFFdkgsT0FBTyxFQUNMLHNDQUFzQyxFQUV0QyxzQ0FBc0MsRUFDdEMsc0NBQXNDLEVBRXRDLHdDQUF3QyxFQUN4Qyx3Q0FBd0MsRUFFeEMsd0NBQXdDLEVBQ3hDLHdDQUF3QyxHQUN6QyxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRS9CO0lBRUUsNENBQ1UsUUFBaUIsRUFDZ0IsWUFBc0IsRUFDWixNQUF5RCxFQUNwRyxPQUErQjtRQUp6QyxpQkFLSTtRQUpNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDZ0IsaUJBQVksR0FBWixZQUFZLENBQVU7UUFDWixXQUFNLEdBQU4sTUFBTSxDQUFtRDtRQUNwRyxZQUFPLEdBQVAsT0FBTyxDQUF3QjtRQUl6QyxTQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3ZCLE1BQU0sQ0FBQyxzQ0FBc0MsQ0FBQyxpQ0FBaUMsQ0FBQyxFQUNoRixTQUFTOzs7O1FBQUMsVUFBQyxNQUF1QztZQUNoRCxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzVDLEdBQUc7Ozs7WUFBQyxVQUFDLElBQU8sSUFBSyxPQUFBLElBQUksc0NBQXNDLENBQUMsSUFBSSxDQUFDLEVBQWhELENBQWdELEVBQUMsRUFDbEUsVUFBVTs7OztZQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksc0NBQXNDLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQXhFLENBQXdFLEVBQUMsQ0FDOUY7UUFIRCxDQUdDLEVBQ0YsQ0FDRixDQUFBO1FBR0QsWUFBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMxQixNQUFNLENBQUMsc0NBQXNDLENBQUMsbUNBQW1DLENBQUMsRUFDbEYsU0FBUzs7OztRQUFDLFVBQUMsTUFBNEM7WUFDckQsT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQy9ELEdBQUc7Ozs7WUFBQyxVQUFDLElBQU8sSUFBSyxPQUFBLElBQUksd0NBQXdDLENBQUMsSUFBSSxDQUFDLEVBQWxELENBQWtELEVBQUMsRUFDcEUsVUFBVTs7OztZQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksd0NBQXdDLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQTFFLENBQTBFLEVBQUMsQ0FDaEc7UUFIRCxDQUdDLEVBQ0YsQ0FDRixDQUFBO1FBR0QsWUFBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMxQixNQUFNLENBQUMsc0NBQXNDLENBQUMsbUNBQW1DLENBQUMsRUFDbEYsU0FBUzs7OztRQUFDLFVBQUMsTUFBb0U7WUFDN0UsT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUMvQyxHQUFHOzs7O1lBQUMsVUFBQyxJQUFPLElBQUssT0FBQSxJQUFJLHdDQUF3QyxDQUFDLElBQUksQ0FBQyxFQUFsRCxDQUFrRCxFQUFDLEVBQ3BFLFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLHdDQUF3QyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUExRSxDQUEwRSxFQUFDLENBQ2hHO1FBSEQsQ0FHQyxFQUNGLENBQ0YsQ0FBQTtJQWpDRSxDQUFDOztnQkFQTCxVQUFVOzs7O2dCQWxCRixPQUFPO2dCQXNCMkMsUUFBUSx1QkFBOUQsTUFBTSxTQUFDLHVCQUF1QjtnREFDOUIsTUFBTSxTQUFDLGlDQUFpQztnQkFyQkcsc0JBQXNCOztJQTBCcEU7UUFEQyxNQUFNLEVBQUU7O29FQVNSO0lBR0Q7UUFEQyxNQUFNLEVBQUU7O3VFQVNSO0lBR0Q7UUFEQyxNQUFNLEVBQUU7O3VFQVNSO0lBQ0gseUNBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQXhDWSxrQ0FBa0M7OztJQVE3QyxrREFTQzs7SUFFRCxxREFTQzs7SUFFRCxxREFTQzs7Ozs7SUFyQ0Msc0RBQXlCOzs7OztJQUN6QiwwREFBK0Q7Ozs7O0lBQy9ELG9EQUE0Rzs7Ozs7SUFDNUcscURBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb24sIERhZmZDYXJ0LCBEYWZmQ2FydFN0b3JhZ2VTZXJ2aWNlLCBEQUZGX0NBUlRfRVJST1JfTUFUQ0hFUiB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkRyaXZlciwgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7XG4gIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkFjdGlvblR5cGVzLFxuICBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25Mb2FkLFxuICBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25Mb2FkU3VjY2VzcyxcbiAgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uTG9hZEZhaWx1cmUsXG4gIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkRlbGV0ZSxcbiAgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uRGVsZXRlU3VjY2VzcyxcbiAgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uRGVsZXRlRmFpbHVyZSxcbiAgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uVXBkYXRlLFxuICBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25VcGRhdGVTdWNjZXNzLFxuICBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25VcGRhdGVGYWlsdXJlLFxufSBmcm9tICcuLi9hY3Rpb25zL3B1YmxpY19hcGknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uRWZmZWN0czxUIGV4dGVuZHMgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uLCBWIGV4dGVuZHMgRGFmZkNhcnQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBASW5qZWN0KERBRkZfQ0FSVF9FUlJPUl9NQVRDSEVSKSBwcml2YXRlIGVycm9yTWF0Y2hlcjogRnVuY3Rpb24sXG4gICAgQEluamVjdChEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25Ecml2ZXIpIHByaXZhdGUgZHJpdmVyOiBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25TZXJ2aWNlSW50ZXJmYWNlPFQsIFY+LFxuICAgIHByaXZhdGUgc3RvcmFnZTogRGFmZkNhcnRTdG9yYWdlU2VydmljZVxuICApIHt9XG5cbiAgQEVmZmVjdCgpXG4gIGdldCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkFjdGlvblR5cGVzLkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uTG9hZEFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkxvYWQpID0+XG4gICAgICB0aGlzLmRyaXZlci5nZXQodGhpcy5zdG9yYWdlLmdldENhcnRJZCgpKS5waXBlKFxuICAgICAgICBtYXAoKHJlc3A6IFQpID0+IG5ldyBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25Mb2FkU3VjY2VzcyhyZXNwKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkxvYWRGYWlsdXJlKHRoaXMuZXJyb3JNYXRjaGVyKGVycm9yKSkpKVxuICAgICAgKVxuICAgIClcbiAgKVxuXG4gIEBFZmZlY3QoKVxuICB1cGRhdGUkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25BY3Rpb25UeXBlcy5DYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblVwZGF0ZUFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblVwZGF0ZTxUPikgPT5cbiAgICAgIHRoaXMuZHJpdmVyLnVwZGF0ZSh0aGlzLnN0b3JhZ2UuZ2V0Q2FydElkKCksIGFjdGlvbi5wYXlsb2FkKS5waXBlKFxuICAgICAgICBtYXAoKHJlc3A6IFYpID0+IG5ldyBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25VcGRhdGVTdWNjZXNzKHJlc3ApKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uVXBkYXRlRmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpKSlcbiAgICAgIClcbiAgICApXG4gIClcblxuICBARWZmZWN0KClcbiAgZGVsZXRlJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uQWN0aW9uVHlwZXMuQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25EZWxldGVBY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25EZWxldGU8Vlsnc2hpcHBpbmdfaW5mb3JtYXRpb24nXT4pID0+XG4gICAgICB0aGlzLmRyaXZlci5kZWxldGUodGhpcy5zdG9yYWdlLmdldENhcnRJZCgpKS5waXBlKFxuICAgICAgICBtYXAoKHJlc3A6IFYpID0+IG5ldyBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25EZWxldGVTdWNjZXNzKHJlc3ApKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uRGVsZXRlRmFpbHVyZSh0aGlzLmVycm9yTWF0Y2hlcihlcnJvcikpKSlcbiAgICAgIClcbiAgICApXG4gIClcbn1cbiJdfQ==