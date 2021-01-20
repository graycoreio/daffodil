/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { DaffQueuedApollo } from '@daffodil/core/graphql';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { placeOrder } from './queries/public_api';
import { transformCartMagentoError } from './errors/transform';
import { DAFF_MAGENTO_CART_MUTATION_QUEUE } from './injection-tokens/cart-mutation-queue.token';
import * as i0 from "@angular/core";
import * as i1 from "./injection-tokens/cart-mutation-queue.token";
import * as i2 from "./transforms/outputs/cart.service";
/**
 * A service for making Magento GraphQL queries for carts.
 */
var DaffMagentoCartOrderService = /** @class */ (function () {
    function DaffMagentoCartOrderService(mutationQueue, cartTransformer) {
        this.mutationQueue = mutationQueue;
        this.cartTransformer = cartTransformer;
    }
    /**
     * @param {?} cartId
     * @param {?=} payment
     * @return {?}
     */
    DaffMagentoCartOrderService.prototype.placeOrder = /**
     * @param {?} cartId
     * @param {?=} payment
     * @return {?}
     */
    function (cartId, payment) {
        return this.mutationQueue.mutate({
            mutation: placeOrder,
            variables: {
                cartId: cartId
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return ({
            id: result.data.placeOrder.order.order_number,
            orderId: result.data.placeOrder.order.order_number,
            cartId: cartId
        }); })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return throwError(transformCartMagentoError(err)); })));
    };
    DaffMagentoCartOrderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartOrderService.ctorParameters = function () { return [
        { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
        { type: DaffMagentoCartTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoCartOrderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartOrderService_Factory() { return new DaffMagentoCartOrderService(i0.ɵɵinject(i1.DAFF_MAGENTO_CART_MUTATION_QUEUE), i0.ɵɵinject(i2.DaffMagentoCartTransformer)); }, token: DaffMagentoCartOrderService, providedIn: "root" });
    return DaffMagentoCartOrderService;
}());
export { DaffMagentoCartOrderService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartOrderService.prototype.mutationQueue;
    /** @type {?} */
    DaffMagentoCartOrderService.prototype.cartTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJjYXJ0LW9yZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQUl6RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0QsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sOENBQThDLENBQUM7Ozs7Ozs7QUFLaEc7SUFJRSxxQ0FDb0QsYUFBK0IsRUFDMUUsZUFBMkM7UUFEQSxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDMUUsb0JBQWUsR0FBZixlQUFlLENBQTRCO0lBQ2pELENBQUM7Ozs7OztJQUVKLGdEQUFVOzs7OztJQUFWLFVBQVcsTUFBc0IsRUFBRSxPQUFhO1FBQzlDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQTRCO1lBQzFELFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRTtnQkFDVCxNQUFNLFFBQUE7YUFDUDtTQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsQ0FBQztZQUNiLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWTtZQUM3QyxPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFlBQVk7WUFDbEQsTUFBTSxRQUFBO1NBQ1AsQ0FBQyxFQUpZLENBSVosRUFBQyxFQUNILFVBQVU7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUExQyxDQUEwQyxFQUFDLENBQzlELENBQUE7SUFDSCxDQUFDOztnQkF2QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFmUSxnQkFBZ0IsdUJBa0JwQixNQUFNLFNBQUMsZ0NBQWdDO2dCQWRuQywwQkFBMEI7OztzQ0FUbkM7Q0EwQ0MsQUF4QkQsSUF3QkM7U0FyQlksMkJBQTJCOzs7Ozs7SUFFcEMsb0RBQWlGOztJQUNqRixzREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdGhyb3dFcnJvciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYWZmUXVldWVkQXBvbGxvIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvZ3JhcGhxbCdcbmltcG9ydCB7IERhZmZDYXJ0LCBEYWZmQ2FydE9yZGVyUmVzdWx0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHsgRGFmZkNhcnRPcmRlclNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhcnRUcmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3Jtcy9vdXRwdXRzL2NhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBwbGFjZU9yZGVyIH0gZnJvbSAnLi9xdWVyaWVzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgdHJhbnNmb3JtQ2FydE1hZ2VudG9FcnJvciB9IGZyb20gJy4vZXJyb3JzL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBNYWdlbnRvUGxhY2VPcmRlclJlc3BvbnNlIH0gZnJvbSAnLi9xdWVyaWVzL3Jlc3BvbnNlcy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERBRkZfTUFHRU5UT19DQVJUX01VVEFUSU9OX1FVRVVFIH0gZnJvbSAnLi9pbmplY3Rpb24tdG9rZW5zL2NhcnQtbXV0YXRpb24tcXVldWUudG9rZW4nO1xuXG4vKipcbiAqIEEgc2VydmljZSBmb3IgbWFraW5nIE1hZ2VudG8gR3JhcGhRTCBxdWVyaWVzIGZvciBjYXJ0cy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9DYXJ0T3JkZXJTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkNhcnRPcmRlclNlcnZpY2VJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERBRkZfTUFHRU5UT19DQVJUX01VVEFUSU9OX1FVRVVFKSBwcml2YXRlIG11dGF0aW9uUXVldWU6IERhZmZRdWV1ZWRBcG9sbG8sXG4gICAgcHVibGljIGNhcnRUcmFuc2Zvcm1lcjogRGFmZk1hZ2VudG9DYXJ0VHJhbnNmb3JtZXIsXG4gICkge31cblxuICBwbGFjZU9yZGVyKGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10sIHBheW1lbnQ/OiBhbnkpOiBPYnNlcnZhYmxlPERhZmZDYXJ0T3JkZXJSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5tdXRhdGlvblF1ZXVlLm11dGF0ZTxNYWdlbnRvUGxhY2VPcmRlclJlc3BvbnNlPih7XG4gICAgICBtdXRhdGlvbjogcGxhY2VPcmRlcixcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBjYXJ0SWRcbiAgICAgIH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiAoe1xuICAgICAgICBpZDogcmVzdWx0LmRhdGEucGxhY2VPcmRlci5vcmRlci5vcmRlcl9udW1iZXIsXG4gICAgICAgIG9yZGVySWQ6IHJlc3VsdC5kYXRhLnBsYWNlT3JkZXIub3JkZXIub3JkZXJfbnVtYmVyLFxuICAgICAgICBjYXJ0SWRcbiAgICAgIH0pKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHRocm93RXJyb3IodHJhbnNmb3JtQ2FydE1hZ2VudG9FcnJvcihlcnIpKSksXG4gICAgKVxuICB9XG59XG4iXX0=