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
export class DaffOrderMagentoService {
    /**
     * @param {?} apollo
     * @param {?} extraOrderFragments
     */
    constructor(apollo, extraOrderFragments) {
        this.apollo = apollo;
        this.extraOrderFragments = extraOrderFragments;
    }
    /**
     * @param {?=} cartId
     * @return {?}
     */
    list(cartId) {
        return this.apollo.query({
            query: getGuestOrders(this.extraOrderFragments),
            variables: {
                cartId
            }
        }).pipe(map(validateGetOrdersResponse), map((/**
         * @param {?} result
         * @return {?}
         */
        result => result.data.graycoreGuestOrders.items.map(daffMagentoTransformOrder))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => throwError(transformMagentoOrderError(err)))));
    }
    /**
     * @param {?} orderId
     * @param {?=} cartId
     * @return {?}
     */
    get(orderId, cartId) {
        return this.list(cartId).pipe(map((/**
         * @param {?} orders
         * @return {?}
         */
        orders => {
            for (const order of orders) {
                if (String(order.id) === String(orderId)) {
                    return order;
                }
            }
            // order not found
            throw new DaffOrderNotFoundError(`Could not find an order with ID ${orderId}`);
        })));
    }
}
DaffOrderMagentoService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderMagentoService.ctorParameters = () => [
    { type: Apollo },
    { type: Array, decorators: [{ type: Inject, args: [DaffMagentoExtraOrderFragments,] }] }
];
/** @nocollapse */ DaffOrderMagentoService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderMagentoService_Factory() { return new DaffOrderMagentoService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DaffMagentoExtraOrderFragments)); }, token: DaffOrderMagentoService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffOrderMagentoService.prototype.apollo;
    /** @type {?} */
    DaffOrderMagentoService.prototype.extraOrderFragments;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9kcml2ZXIvbWFnZW50by8yLjQuMS8iLCJzb3VyY2VzIjpbIm9yZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNakQsT0FBTyxFQUVMLHNCQUFzQixFQUN2QixNQUFNLHdCQUF3QixDQUFDO0FBRWhDLE9BQU8sRUFBRSxjQUFjLEVBQWlDLE1BQU0sc0JBQXNCLENBQUM7QUFDckYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDekUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7QUFRL0UsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFDbEMsWUFDVSxNQUFjLEVBQ3lCLG1CQUFtQztRQUQxRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3lCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBZ0I7SUFDakYsQ0FBQzs7Ozs7SUFFSixJQUFJLENBQUMsTUFBdUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBZ0M7WUFDdEQsS0FBSyxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDL0MsU0FBUyxFQUFFO2dCQUNULE1BQU07YUFDUDtTQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRyxDQUFDLHlCQUF5QixDQUFDLEVBQzlCLEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFDLEVBQ25GLFVBQVU7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQy9ELENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCxHQUFHLENBQUMsT0FBd0IsRUFBRSxNQUF1QjtRQUNuRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUMzQixHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDWCxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtnQkFDMUIsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDeEMsT0FBTyxLQUFLLENBQUE7aUJBQ2I7YUFDRjtZQUVELGtCQUFrQjtZQUNsQixNQUFNLElBQUksc0JBQXNCLENBQUMsbUNBQW1DLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDakYsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7OztZQW5DRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUF6QlEsTUFBTTt3Q0E2QlYsTUFBTSxTQUFDLDhCQUE4Qjs7Ozs7Ozs7SUFEdEMseUNBQXNCOztJQUN0QixzREFBa0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2N1bWVudE5vZGUgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBvbGxvIH0gZnJvbSAnYXBvbGxvLWFuZ3VsYXInO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERhZmZDYXJ0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHtcbiAgRGFmZk9yZGVyLFxufSBmcm9tICdAZGFmZm9kaWwvb3JkZXInO1xuaW1wb3J0IHtcbiAgRGFmZk9yZGVyU2VydmljZUludGVyZmFjZSxcbiAgRGFmZk9yZGVyTm90Rm91bmRFcnJvclxufSBmcm9tICdAZGFmZm9kaWwvb3JkZXIvZHJpdmVyJztcblxuaW1wb3J0IHsgZ2V0R3Vlc3RPcmRlcnMsIE1hZ2VudG9HZXRHdWVzdE9yZGVyc1Jlc3BvbnNlIH0gZnJvbSAnLi9xdWVyaWVzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgdmFsaWRhdGVHZXRPcmRlcnNSZXNwb25zZSB9IGZyb20gJy4vdmFsaWRhdG9ycy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IHRyYW5zZm9ybU1hZ2VudG9PcmRlckVycm9yIH0gZnJvbSAnLi9lcnJvcnMvdHJhbnNmb3JtJztcbmltcG9ydCB7IGRhZmZNYWdlbnRvVHJhbnNmb3JtT3JkZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvcmVzcG9uc2VzL29yZGVyJztcbmltcG9ydCB7IERhZmZNYWdlbnRvRXh0cmFPcmRlckZyYWdtZW50cyB9IGZyb20gJy4vaW5qZWN0aW9uLXRva2Vucy9wdWJsaWNfYXBpJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgZm9yIG1ha2luZyBNYWdlbnRvIEdyYXBoUUwgcXVlcmllcyBmb3Igb3JkZXJzLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmT3JkZXJNYWdlbnRvU2VydmljZSBpbXBsZW1lbnRzIERhZmZPcmRlclNlcnZpY2VJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFwb2xsbzogQXBvbGxvLFxuICAgIEBJbmplY3QoRGFmZk1hZ2VudG9FeHRyYU9yZGVyRnJhZ21lbnRzKSBwdWJsaWMgZXh0cmFPcmRlckZyYWdtZW50czogRG9jdW1lbnROb2RlW10sXG4gICkge31cblxuICBsaXN0KGNhcnRJZD86IERhZmZDYXJ0WydpZCddKTogT2JzZXJ2YWJsZTxEYWZmT3JkZXJbXT4ge1xuICAgIHJldHVybiB0aGlzLmFwb2xsby5xdWVyeTxNYWdlbnRvR2V0R3Vlc3RPcmRlcnNSZXNwb25zZT4oe1xuICAgICAgcXVlcnk6IGdldEd1ZXN0T3JkZXJzKHRoaXMuZXh0cmFPcmRlckZyYWdtZW50cyksXG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgY2FydElkXG4gICAgICB9XG4gICAgfSkucGlwZShcbiAgICAgIG1hcCh2YWxpZGF0ZUdldE9yZGVyc1Jlc3BvbnNlKSxcbiAgICAgIG1hcChyZXN1bHQgPT4gcmVzdWx0LmRhdGEuZ3JheWNvcmVHdWVzdE9yZGVycy5pdGVtcy5tYXAoZGFmZk1hZ2VudG9UcmFuc2Zvcm1PcmRlcikpLFxuICAgICAgY2F0Y2hFcnJvcihlcnIgPT4gdGhyb3dFcnJvcih0cmFuc2Zvcm1NYWdlbnRvT3JkZXJFcnJvcihlcnIpKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0KG9yZGVySWQ6IERhZmZPcmRlclsnaWQnXSwgY2FydElkPzogRGFmZkNhcnRbJ2lkJ10pOiBPYnNlcnZhYmxlPERhZmZPcmRlcj4ge1xuICAgIHJldHVybiB0aGlzLmxpc3QoY2FydElkKS5waXBlKFxuICAgICAgbWFwKG9yZGVycyA9PiB7XG4gICAgICAgIGZvciAoY29uc3Qgb3JkZXIgb2Ygb3JkZXJzKSB7XG4gICAgICAgICAgaWYgKFN0cmluZyhvcmRlci5pZCkgPT09IFN0cmluZyhvcmRlcklkKSkge1xuICAgICAgICAgICAgcmV0dXJuIG9yZGVyXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gb3JkZXIgbm90IGZvdW5kXG4gICAgICAgIHRocm93IG5ldyBEYWZmT3JkZXJOb3RGb3VuZEVycm9yKGBDb3VsZCBub3QgZmluZCBhbiBvcmRlciB3aXRoIElEICR7b3JkZXJJZH1gKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cbiJdfQ==