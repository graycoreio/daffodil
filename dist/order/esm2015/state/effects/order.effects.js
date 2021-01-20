var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DaffOrderDriver } from '@daffodil/order/driver';
import { DaffOrderActionTypes, DaffOrderLoadSuccess, DaffOrderLoadFailure, DaffOrderListSuccess, DaffOrderListFailure, } from '../actions/order.actions';
/**
 * @template T, V
 */
export class DaffOrderEffects {
    /**
     * @param {?} actions$
     * @param {?} driver
     */
    constructor(actions$, driver) {
        this.actions$ = actions$;
        this.driver = driver;
        /**
         * An effect for the loading of an order.
         */
        this.get$ = this.actions$.pipe(ofType(DaffOrderActionTypes.OrderLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.get(action.orderId, action.cartId).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => new DaffOrderLoadSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffOrderLoadFailure('Failed to load order'))))))));
        /**
         * An effect for the listing of orders.
         */
        this.list$ = this.actions$.pipe(ofType(DaffOrderActionTypes.OrderListAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.list(action.payload).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => new DaffOrderListSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffOrderListFailure('Failed to list the orders'))))))));
    }
}
DaffOrderEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffOrderEffects.ctorParameters = () => [
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [DaffOrderDriver,] }] }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffOrderEffects.prototype, "get$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffOrderEffects.prototype, "list$", void 0);
if (false) {
    /**
     * An effect for the loading of an order.
     * @type {?}
     */
    DaffOrderEffects.prototype.get$;
    /**
     * An effect for the listing of orders.
     * @type {?}
     */
    DaffOrderEffects.prototype.list$;
    /**
     * @type {?}
     * @private
     */
    DaffOrderEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffOrderEffects.prototype.driver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9zdGF0ZS8iLCJzb3VyY2VzIjpbImVmZmVjdHMvb3JkZXIuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFReEQsT0FBTyxFQUVMLGVBQWUsRUFDaEIsTUFBTSx3QkFBd0IsQ0FBQztBQUVoQyxPQUFPLEVBQ0wsb0JBQW9CLEVBRXBCLG9CQUFvQixFQUNwQixvQkFBb0IsRUFFcEIsb0JBQW9CLEVBQ3BCLG9CQUFvQixHQUNyQixNQUFNLDBCQUEwQixDQUFDOzs7O0FBR2xDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBSTNCLFlBQ1UsUUFBaUIsRUFDUSxNQUFvQztRQUQ3RCxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ1EsV0FBTSxHQUFOLE1BQU0sQ0FBOEI7Ozs7UUFPdkUsU0FBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN2QixNQUFNLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLEVBQzVDLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQTJCLEVBQUUsRUFBRSxDQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ2pELEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksb0JBQW9CLENBQUksSUFBSSxDQUFDLEVBQUMsRUFDOUMsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksb0JBQW9CLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxFQUFDLENBQzFFLEVBQ0YsQ0FDRixDQUFBOzs7O1FBTUQsVUFBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN4QixNQUFNLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLEVBQzVDLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQXFCLEVBQUUsRUFBRSxDQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNuQyxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLG9CQUFvQixDQUFJLElBQUksQ0FBQyxFQUFDLEVBQzlDLFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLDJCQUEyQixDQUFDLENBQUMsRUFBQyxDQUMvRSxFQUNGLENBQ0YsQ0FBQTtJQTVCRSxDQUFDOzs7WUFSTCxVQUFVOzs7O1lBdkJGLE9BQU87NENBOEJYLE1BQU0sU0FBQyxlQUFlOztBQU96QjtJQURDLE1BQU0sRUFBRTs7OENBU1I7QUFNRDtJQURDLE1BQU0sRUFBRTs7K0NBU1I7Ozs7OztJQXZCRCxnQ0FTQzs7Ozs7SUFLRCxpQ0FTQzs7Ozs7SUE5QkMsb0NBQXlCOzs7OztJQUN6QixrQ0FBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7XG4gIERhZmZDYXJ0XG59IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7XG4gIERhZmZPcmRlcixcbn0gZnJvbSAnQGRhZmZvZGlsL29yZGVyJztcbmltcG9ydCB7XG4gIERhZmZPcmRlclNlcnZpY2VJbnRlcmZhY2UsXG4gIERhZmZPcmRlckRyaXZlclxufSBmcm9tICdAZGFmZm9kaWwvb3JkZXIvZHJpdmVyJztcblxuaW1wb3J0IHtcbiAgRGFmZk9yZGVyQWN0aW9uVHlwZXMsXG4gIERhZmZPcmRlckxvYWQsXG4gIERhZmZPcmRlckxvYWRTdWNjZXNzLFxuICBEYWZmT3JkZXJMb2FkRmFpbHVyZSxcbiAgRGFmZk9yZGVyTGlzdCxcbiAgRGFmZk9yZGVyTGlzdFN1Y2Nlc3MsXG4gIERhZmZPcmRlckxpc3RGYWlsdXJlLFxufSBmcm9tICcuLi9hY3Rpb25zL29yZGVyLmFjdGlvbnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZk9yZGVyRWZmZWN0czxcbiAgVCBleHRlbmRzIERhZmZPcmRlciA9IERhZmZPcmRlcixcbiAgViBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnRcbj4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIEBJbmplY3QoRGFmZk9yZGVyRHJpdmVyKSBwcml2YXRlIGRyaXZlcjogRGFmZk9yZGVyU2VydmljZUludGVyZmFjZTxUPixcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBBbiBlZmZlY3QgZm9yIHRoZSBsb2FkaW5nIG9mIGFuIG9yZGVyLlxuICAgKi9cbiAgQEVmZmVjdCgpXG4gIGdldCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZPcmRlckFjdGlvblR5cGVzLk9yZGVyTG9hZEFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZPcmRlckxvYWQ8VCwgVj4pID0+XG4gICAgICB0aGlzLmRyaXZlci5nZXQoYWN0aW9uLm9yZGVySWQsIGFjdGlvbi5jYXJ0SWQpLnBpcGUoXG4gICAgICAgIG1hcChyZXNwID0+IG5ldyBEYWZmT3JkZXJMb2FkU3VjY2VzczxUPihyZXNwKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IERhZmZPcmRlckxvYWRGYWlsdXJlKCdGYWlsZWQgdG8gbG9hZCBvcmRlcicpKSlcbiAgICAgIClcbiAgICApLFxuICApXG5cbiAgLyoqXG4gICAqIEFuIGVmZmVjdCBmb3IgdGhlIGxpc3Rpbmcgb2Ygb3JkZXJzLlxuICAgKi9cbiAgQEVmZmVjdCgpXG4gIGxpc3QkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmT3JkZXJBY3Rpb25UeXBlcy5PcmRlckxpc3RBY3Rpb24pLFxuICAgIHN3aXRjaE1hcCgoYWN0aW9uOiBEYWZmT3JkZXJMaXN0KSA9PlxuICAgICAgdGhpcy5kcml2ZXIubGlzdChhY3Rpb24ucGF5bG9hZCkucGlwZShcbiAgICAgICAgbWFwKHJlc3AgPT4gbmV3IERhZmZPcmRlckxpc3RTdWNjZXNzPFQ+KHJlc3ApKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgRGFmZk9yZGVyTGlzdEZhaWx1cmUoJ0ZhaWxlZCB0byBsaXN0IHRoZSBvcmRlcnMnKSkpXG4gICAgICApXG4gICAgKSxcbiAgKVxufVxuIl19