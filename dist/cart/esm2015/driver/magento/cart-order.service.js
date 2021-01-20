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
export class DaffMagentoCartOrderService {
    /**
     * @param {?} mutationQueue
     * @param {?} cartTransformer
     */
    constructor(mutationQueue, cartTransformer) {
        this.mutationQueue = mutationQueue;
        this.cartTransformer = cartTransformer;
    }
    /**
     * @param {?} cartId
     * @param {?=} payment
     * @return {?}
     */
    placeOrder(cartId, payment) {
        return this.mutationQueue.mutate({
            mutation: placeOrder,
            variables: {
                cartId
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => ({
            id: result.data.placeOrder.order.order_number,
            orderId: result.data.placeOrder.order.order_number,
            cartId
        }))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => throwError(transformCartMagentoError(err)))));
    }
}
DaffMagentoCartOrderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartOrderService.ctorParameters = () => [
    { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
    { type: DaffMagentoCartTransformer }
];
/** @nocollapse */ DaffMagentoCartOrderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartOrderService_Factory() { return new DaffMagentoCartOrderService(i0.ɵɵinject(i1.DAFF_MAGENTO_CART_MUTATION_QUEUE), i0.ɵɵinject(i2.DaffMagentoCartTransformer)); }, token: DaffMagentoCartOrderService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartOrderService.prototype.mutationQueue;
    /** @type {?} */
    DaffMagentoCartOrderService.prototype.cartTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJjYXJ0LW9yZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQUl6RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0QsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sOENBQThDLENBQUM7Ozs7Ozs7QUFRaEcsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7SUFDdEMsWUFDb0QsYUFBK0IsRUFDMUUsZUFBMkM7UUFEQSxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDMUUsb0JBQWUsR0FBZixlQUFlLENBQTRCO0lBQ2pELENBQUM7Ozs7OztJQUVKLFVBQVUsQ0FBQyxNQUFzQixFQUFFLE9BQWE7UUFDOUMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBNEI7WUFDMUQsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFO2dCQUNULE1BQU07YUFDUDtTQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNiLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWTtZQUM3QyxPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFlBQVk7WUFDbEQsTUFBTTtTQUNQLENBQUMsRUFBQyxFQUNILFVBQVU7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQzlELENBQUE7SUFDSCxDQUFDOzs7WUF2QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBZlEsZ0JBQWdCLHVCQWtCcEIsTUFBTSxTQUFDLGdDQUFnQztZQWRuQywwQkFBMEI7Ozs7Ozs7O0lBYy9CLG9EQUFpRjs7SUFDakYsc0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRocm93RXJyb3IsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGFmZlF1ZXVlZEFwb2xsbyB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL2dyYXBocWwnXG5pbXBvcnQgeyBEYWZmQ2FydCwgRGFmZkNhcnRPcmRlclJlc3VsdCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7IERhZmZDYXJ0T3JkZXJTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyJztcblxuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0VHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgcGxhY2VPcmRlciB9IGZyb20gJy4vcXVlcmllcy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IHRyYW5zZm9ybUNhcnRNYWdlbnRvRXJyb3IgfSBmcm9tICcuL2Vycm9ycy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgTWFnZW50b1BsYWNlT3JkZXJSZXNwb25zZSB9IGZyb20gJy4vcXVlcmllcy9yZXNwb25zZXMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEQUZGX01BR0VOVE9fQ0FSVF9NVVRBVElPTl9RVUVVRSB9IGZyb20gJy4vaW5qZWN0aW9uLXRva2Vucy9jYXJ0LW11dGF0aW9uLXF1ZXVlLnRva2VuJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgZm9yIG1ha2luZyBNYWdlbnRvIEdyYXBoUUwgcXVlcmllcyBmb3IgY2FydHMuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZNYWdlbnRvQ2FydE9yZGVyU2VydmljZSBpbXBsZW1lbnRzIERhZmZDYXJ0T3JkZXJTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChEQUZGX01BR0VOVE9fQ0FSVF9NVVRBVElPTl9RVUVVRSkgcHJpdmF0ZSBtdXRhdGlvblF1ZXVlOiBEYWZmUXVldWVkQXBvbGxvLFxuICAgIHB1YmxpYyBjYXJ0VHJhbnNmb3JtZXI6IERhZmZNYWdlbnRvQ2FydFRyYW5zZm9ybWVyLFxuICApIHt9XG5cbiAgcGxhY2VPcmRlcihjYXJ0SWQ6IERhZmZDYXJ0WydpZCddLCBwYXltZW50PzogYW55KTogT2JzZXJ2YWJsZTxEYWZmQ2FydE9yZGVyUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25RdWV1ZS5tdXRhdGU8TWFnZW50b1BsYWNlT3JkZXJSZXNwb25zZT4oe1xuICAgICAgbXV0YXRpb246IHBsYWNlT3JkZXIsXG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgY2FydElkXG4gICAgICB9XG4gICAgfSkucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4gKHtcbiAgICAgICAgaWQ6IHJlc3VsdC5kYXRhLnBsYWNlT3JkZXIub3JkZXIub3JkZXJfbnVtYmVyLFxuICAgICAgICBvcmRlcklkOiByZXN1bHQuZGF0YS5wbGFjZU9yZGVyLm9yZGVyLm9yZGVyX251bWJlcixcbiAgICAgICAgY2FydElkXG4gICAgICB9KSksXG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB0aHJvd0Vycm9yKHRyYW5zZm9ybUNhcnRNYWdlbnRvRXJyb3IoZXJyKSkpLFxuICAgIClcbiAgfVxufVxuIl19