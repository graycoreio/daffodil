var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { DaffOrderNotFoundError } from '@daffodil/order/driver';
import { getGuestOrders } from './queries/public_api';
import { validateGetOrdersResponse } from './validators/public_api';
import { transformMagentoOrderError } from './errors/transform';
import { daffMagentoTransformOrder } from './transforms/responses/order';
import { DaffMagentoExtraOrderFragments } from './injection-tokens/public_api';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
import * as i2 from "./injection-tokens/fragments/order";
/**
 * A service for making Magento GraphQL queries for orders.
 */
var DaffOrderMagentoService = /** @class */ (function () {
    function DaffOrderMagentoService(apollo, extraOrderFragments) {
        this.apollo = apollo;
        this.extraOrderFragments = extraOrderFragments;
    }
    /**
     * @param {?=} cartId
     * @return {?}
     */
    DaffOrderMagentoService.prototype.list = /**
     * @param {?=} cartId
     * @return {?}
     */
    function (cartId) {
        return this.apollo.query({
            query: getGuestOrders(this.extraOrderFragments),
            variables: {
                cartId: cartId
            }
        }).pipe(map(validateGetOrdersResponse), map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.data.graycoreGuestOrders.orders.map(daffMagentoTransformOrder); })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return throwError(transformMagentoOrderError(err)); })));
    };
    /**
     * @param {?} orderId
     * @param {?=} cartId
     * @return {?}
     */
    DaffOrderMagentoService.prototype.get = /**
     * @param {?} orderId
     * @param {?=} cartId
     * @return {?}
     */
    function (orderId, cartId) {
        return this.list(cartId).pipe(map((/**
         * @param {?} orders
         * @return {?}
         */
        function (orders) {
            var e_1, _a;
            try {
                for (var orders_1 = __values(orders), orders_1_1 = orders_1.next(); !orders_1_1.done; orders_1_1 = orders_1.next()) {
                    var order = orders_1_1.value;
                    if (String(order.id) === String(orderId)) {
                        return order;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (orders_1_1 && !orders_1_1.done && (_a = orders_1.return)) _a.call(orders_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // order not found
            throw new DaffOrderNotFoundError("Could not find an order with ID " + orderId);
        })));
    };
    DaffOrderMagentoService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderMagentoService.ctorParameters = function () { return [
        { type: Apollo },
        { type: Array, decorators: [{ type: Inject, args: [DaffMagentoExtraOrderFragments,] }] }
    ]; };
    /** @nocollapse */ DaffOrderMagentoService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderMagentoService_Factory() { return new DaffOrderMagentoService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DaffMagentoExtraOrderFragments)); }, token: DaffOrderMagentoService, providedIn: "root" });
    return DaffOrderMagentoService;
}());
export { DaffOrderMagentoService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffOrderMagentoService.prototype.apollo;
    /** @type {?} */
    DaffOrderMagentoService.prototype.extraOrderFragments;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9kcml2ZXIvbWFnZW50by8yLjQuMC8iLCJzb3VyY2VzIjpbIm9yZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTWpELE9BQU8sRUFFTCxzQkFBc0IsRUFDdkIsTUFBTSx3QkFBd0IsQ0FBQztBQUVoQyxPQUFPLEVBQUUsY0FBYyxFQUFpQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3JGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7Ozs7O0FBSy9FO0lBSUUsaUNBQ1UsTUFBYyxFQUN5QixtQkFBbUM7UUFEMUUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN5Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQWdCO0lBQ2pGLENBQUM7Ozs7O0lBRUosc0NBQUk7Ozs7SUFBSixVQUFLLE1BQXVCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQWdDO1lBQ3RELEtBQUssRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQy9DLFNBQVMsRUFBRTtnQkFDVCxNQUFNLFFBQUE7YUFDUDtTQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRyxDQUFDLHlCQUF5QixDQUFDLEVBQzlCLEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFyRSxDQUFxRSxFQUFDLEVBQ3BGLFVBQVU7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUEzQyxDQUEyQyxFQUFDLENBQy9ELENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCxxQ0FBRzs7Ozs7SUFBSCxVQUFJLE9BQXdCLEVBQUUsTUFBdUI7UUFDbkQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDM0IsR0FBRzs7OztRQUFDLFVBQUEsTUFBTTs7O2dCQUNSLEtBQW9CLElBQUEsV0FBQSxTQUFBLE1BQU0sQ0FBQSw4QkFBQSxrREFBRTtvQkFBdkIsSUFBTSxLQUFLLG1CQUFBO29CQUNkLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7d0JBQ3hDLE9BQU8sS0FBSyxDQUFBO3FCQUNiO2lCQUNGOzs7Ozs7Ozs7WUFFRCxrQkFBa0I7WUFDbEIsTUFBTSxJQUFJLHNCQUFzQixDQUFDLHFDQUFtQyxPQUFTLENBQUMsQ0FBQztRQUNqRixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBbkNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBekJRLE1BQU07NENBNkJWLE1BQU0sU0FBQyw4QkFBOEI7OztrQ0EvQjFDO0NBNkRDLEFBcENELElBb0NDO1NBakNZLHVCQUF1Qjs7Ozs7O0lBRWhDLHlDQUFzQjs7SUFDdEIsc0RBQWtGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9jdW1lbnROb2RlIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwb2xsbyB9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7XG4gIERhZmZPcmRlcixcbn0gZnJvbSAnQGRhZmZvZGlsL29yZGVyJztcbmltcG9ydCB7XG4gIERhZmZPcmRlclNlcnZpY2VJbnRlcmZhY2UsXG4gIERhZmZPcmRlck5vdEZvdW5kRXJyb3Jcbn0gZnJvbSAnQGRhZmZvZGlsL29yZGVyL2RyaXZlcic7XG5cbmltcG9ydCB7IGdldEd1ZXN0T3JkZXJzLCBNYWdlbnRvR2V0R3Vlc3RPcmRlcnNSZXNwb25zZSB9IGZyb20gJy4vcXVlcmllcy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IHZhbGlkYXRlR2V0T3JkZXJzUmVzcG9uc2UgfSBmcm9tICcuL3ZhbGlkYXRvcnMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyB0cmFuc2Zvcm1NYWdlbnRvT3JkZXJFcnJvciB9IGZyb20gJy4vZXJyb3JzL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBkYWZmTWFnZW50b1RyYW5zZm9ybU9yZGVyIH0gZnJvbSAnLi90cmFuc2Zvcm1zL3Jlc3BvbnNlcy9vcmRlcic7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0V4dHJhT3JkZXJGcmFnbWVudHMgfSBmcm9tICcuL2luamVjdGlvbi10b2tlbnMvcHVibGljX2FwaSc7XG5cbi8qKlxuICogQSBzZXJ2aWNlIGZvciBtYWtpbmcgTWFnZW50byBHcmFwaFFMIHF1ZXJpZXMgZm9yIG9yZGVycy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk9yZGVyTWFnZW50b1NlcnZpY2UgaW1wbGVtZW50cyBEYWZmT3JkZXJTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhcG9sbG86IEFwb2xsbyxcbiAgICBASW5qZWN0KERhZmZNYWdlbnRvRXh0cmFPcmRlckZyYWdtZW50cykgcHVibGljIGV4dHJhT3JkZXJGcmFnbWVudHM6IERvY3VtZW50Tm9kZVtdLFxuICApIHt9XG5cbiAgbGlzdChjYXJ0SWQ/OiBEYWZmQ2FydFsnaWQnXSk6IE9ic2VydmFibGU8RGFmZk9yZGVyW10+IHtcbiAgICByZXR1cm4gdGhpcy5hcG9sbG8ucXVlcnk8TWFnZW50b0dldEd1ZXN0T3JkZXJzUmVzcG9uc2U+KHtcbiAgICAgIHF1ZXJ5OiBnZXRHdWVzdE9yZGVycyh0aGlzLmV4dHJhT3JkZXJGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGNhcnRJZFxuICAgICAgfVxuICAgIH0pLnBpcGUoXG4gICAgICBtYXAodmFsaWRhdGVHZXRPcmRlcnNSZXNwb25zZSksXG4gICAgICBtYXAocmVzdWx0ID0+IHJlc3VsdC5kYXRhLmdyYXljb3JlR3Vlc3RPcmRlcnMub3JkZXJzLm1hcChkYWZmTWFnZW50b1RyYW5zZm9ybU9yZGVyKSksXG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB0aHJvd0Vycm9yKHRyYW5zZm9ybU1hZ2VudG9PcmRlckVycm9yKGVycikpKVxuICAgICk7XG4gIH1cblxuICBnZXQob3JkZXJJZDogRGFmZk9yZGVyWydpZCddLCBjYXJ0SWQ/OiBEYWZmQ2FydFsnaWQnXSk6IE9ic2VydmFibGU8RGFmZk9yZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMubGlzdChjYXJ0SWQpLnBpcGUoXG4gICAgICBtYXAob3JkZXJzID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBvcmRlciBvZiBvcmRlcnMpIHtcbiAgICAgICAgICBpZiAoU3RyaW5nKG9yZGVyLmlkKSA9PT0gU3RyaW5nKG9yZGVySWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gb3JkZXJcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvcmRlciBub3QgZm91bmRcbiAgICAgICAgdGhyb3cgbmV3IERhZmZPcmRlck5vdEZvdW5kRXJyb3IoYENvdWxkIG5vdCBmaW5kIGFuIG9yZGVyIHdpdGggSUQgJHtvcmRlcklkfWApO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuIl19