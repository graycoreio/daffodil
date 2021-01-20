/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { DaffQueuedApollo } from '@daffodil/core/graphql';
import { listCartCoupons, applyCoupon, removeAllCoupons } from './queries/public_api';
import { transformCartMagentoError } from './errors/transform';
import { daffMagentoCouponTransform } from './transforms/outputs/cart-coupon';
import { DaffMagentoCartCouponResponseTransformer } from './transforms/outputs/cart-coupon-response.service';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';
import { DAFF_MAGENTO_CART_MUTATION_QUEUE } from './injection-tokens/cart-mutation-queue.token';
import * as i0 from "@angular/core";
import * as i1 from "./injection-tokens/cart-mutation-queue.token";
import * as i2 from "./injection-tokens/fragments/cart";
import * as i3 from "./transforms/outputs/cart-coupon-response.service";
/**
 * A service for making Magento GraphQL queries for carts.
 */
export class DaffMagentoCartCouponService {
    /**
     * @param {?} mutationQueue
     * @param {?} extraCartFragments
     * @param {?} cartTransformer
     */
    constructor(mutationQueue, extraCartFragments, cartTransformer) {
        this.mutationQueue = mutationQueue;
        this.extraCartFragments = extraCartFragments;
        this.cartTransformer = cartTransformer;
    }
    /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    apply(cartId, coupon) {
        return this.mutationQueue.mutate({
            mutation: applyCoupon(this.extraCartFragments),
            variables: {
                cartId,
                couponCode: coupon.code
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.cartTransformer.transform(result.data.applyCouponToCart.cart))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => throwError(transformCartMagentoError(err)))));
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    list(cartId) {
        return this.mutationQueue.mutate({
            mutation: listCartCoupons(this.extraCartFragments),
            variables: {
                cartId
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => result.data.cart.applied_coupons.map(daffMagentoCouponTransform))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => throwError(transformCartMagentoError(err)))));
    }
    /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    remove(cartId, coupon) {
        return this.removeAll(cartId);
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    removeAll(cartId) {
        return this.mutationQueue.mutate({
            mutation: removeAllCoupons(this.extraCartFragments),
            variables: {
                cartId
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.cartTransformer.transform(result.data.removeCouponFromCart.cart))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => throwError(transformCartMagentoError(err)))));
    }
}
DaffMagentoCartCouponService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartCouponService.ctorParameters = () => [
    { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
    { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
    { type: DaffMagentoCartCouponResponseTransformer }
];
/** @nocollapse */ DaffMagentoCartCouponService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartCouponService_Factory() { return new DaffMagentoCartCouponService(i0.ɵɵinject(i1.DAFF_MAGENTO_CART_MUTATION_QUEUE), i0.ɵɵinject(i2.DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), i0.ɵɵinject(i3.DaffMagentoCartCouponResponseTransformer)); }, token: DaffMagentoCartCouponService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartCouponService.prototype.mutationQueue;
    /** @type {?} */
    DaffMagentoCartCouponService.prototype.extraCartFragments;
    /** @type {?} */
    DaffMagentoCartCouponService.prototype.cartTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsiY2FydC1jb3Vwb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBSXpELE9BQU8sRUFDTCxlQUFlLEVBQ2YsV0FBVyxFQUNYLGdCQUFnQixFQUNqQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTS9ELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzdHLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7Ozs7OztBQVFoRyxNQUFNLE9BQU8sNEJBQTRCOzs7Ozs7SUFDdkMsWUFDb0QsYUFBK0IsRUFDMUIsa0JBQWtDLEVBQ2xGLGVBQXlEO1FBRmQsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQzFCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBZ0I7UUFDbEYsb0JBQWUsR0FBZixlQUFlLENBQTBDO0lBQy9ELENBQUM7Ozs7OztJQUVKLEtBQUssQ0FBQyxNQUFzQixFQUFFLE1BQXNCO1FBQ2xELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQTZCO1lBQzNELFFBQVEsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQzlDLFNBQVMsRUFBRTtnQkFDVCxNQUFNO2dCQUNOLFVBQVUsRUFBRSxNQUFNLENBQUMsSUFBSTthQUN4QjtTQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUNqRixVQUFVOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUM5RCxDQUFBO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsTUFBc0I7UUFDekIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBaUM7WUFDL0QsUUFBUSxFQUFFLGVBQWUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDbEQsU0FBUyxFQUFFO2dCQUNULE1BQU07YUFDUDtTQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxFQUFDLEVBQy9FLFVBQVU7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQzlELENBQUE7SUFDSCxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBc0IsRUFBRSxNQUFzQjtRQUNuRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBc0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBa0M7WUFDaEUsUUFBUSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUNuRCxTQUFTLEVBQUU7Z0JBQ1QsTUFBTTthQUNQO1NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFDLEVBQ3BGLFVBQVU7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQzlELENBQUE7SUFDSCxDQUFDOzs7WUFqREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBekJRLGdCQUFnQix1QkE0QnBCLE1BQU0sU0FBQyxnQ0FBZ0M7d0NBQ3ZDLE1BQU0sU0FBQyxzQ0FBc0M7WUFiekMsd0NBQXdDOzs7Ozs7OztJQVk3QyxxREFBaUY7O0lBQ2pGLDBEQUF5Rjs7SUFDekYsdURBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb2N1bWVudE5vZGUgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCB7IHRocm93RXJyb3IsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGFmZlF1ZXVlZEFwb2xsbyB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL2dyYXBocWwnXG5pbXBvcnQgeyBEYWZmQ2FydCwgRGFmZkNhcnRDb3Vwb24gfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmQ2FydENvdXBvblNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5pbXBvcnQge1xuICBsaXN0Q2FydENvdXBvbnMsXG4gIGFwcGx5Q291cG9uLFxuICByZW1vdmVBbGxDb3Vwb25zXG59IGZyb20gJy4vcXVlcmllcy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IHRyYW5zZm9ybUNhcnRNYWdlbnRvRXJyb3IgfSBmcm9tICcuL2Vycm9ycy90cmFuc2Zvcm0nO1xuaW1wb3J0IHtcbiAgTWFnZW50b0xpc3RDYXJ0Q291cG9uc1Jlc3BvbnNlLFxuICBNYWdlbnRvQXBwbHlDb3Vwb25SZXNwb25zZSxcbiAgTWFnZW50b1JlbW92ZUFsbENvdXBvbnNSZXNwb25zZVxufSBmcm9tICcuL3F1ZXJpZXMvcmVzcG9uc2VzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgZGFmZk1hZ2VudG9Db3Vwb25UcmFuc2Zvcm0gfSBmcm9tICcuL3RyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LWNvdXBvbic7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhcnRDb3Vwb25SZXNwb25zZVRyYW5zZm9ybWVyIH0gZnJvbSAnLi90cmFuc2Zvcm1zL291dHB1dHMvY2FydC1jb3Vwb24tcmVzcG9uc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBEQUZGX0NBUlRfTUFHRU5UT19FWFRSQV9DQVJUX0ZSQUdNRU5UUyB9IGZyb20gJy4vaW5qZWN0aW9uLXRva2Vucy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERBRkZfTUFHRU5UT19DQVJUX01VVEFUSU9OX1FVRVVFIH0gZnJvbSAnLi9pbmplY3Rpb24tdG9rZW5zL2NhcnQtbXV0YXRpb24tcXVldWUudG9rZW4nO1xuXG4vKipcbiAqIEEgc2VydmljZSBmb3IgbWFraW5nIE1hZ2VudG8gR3JhcGhRTCBxdWVyaWVzIGZvciBjYXJ0cy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9DYXJ0Q291cG9uU2VydmljZSBpbXBsZW1lbnRzIERhZmZDYXJ0Q291cG9uU2VydmljZUludGVyZmFjZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoREFGRl9NQUdFTlRPX0NBUlRfTVVUQVRJT05fUVVFVUUpIHByaXZhdGUgbXV0YXRpb25RdWV1ZTogRGFmZlF1ZXVlZEFwb2xsbyxcbiAgICBASW5qZWN0KERBRkZfQ0FSVF9NQUdFTlRPX0VYVFJBX0NBUlRfRlJBR01FTlRTKSBwdWJsaWMgZXh0cmFDYXJ0RnJhZ21lbnRzOiBEb2N1bWVudE5vZGVbXSxcbiAgICBwdWJsaWMgY2FydFRyYW5zZm9ybWVyOiBEYWZmTWFnZW50b0NhcnRDb3Vwb25SZXNwb25zZVRyYW5zZm9ybWVyLFxuICApIHt9XG5cbiAgYXBwbHkoY2FydElkOiBEYWZmQ2FydFsnaWQnXSwgY291cG9uOiBEYWZmQ2FydENvdXBvbik6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcbiAgICByZXR1cm4gdGhpcy5tdXRhdGlvblF1ZXVlLm11dGF0ZTxNYWdlbnRvQXBwbHlDb3Vwb25SZXNwb25zZT4oe1xuICAgICAgbXV0YXRpb246IGFwcGx5Q291cG9uKHRoaXMuZXh0cmFDYXJ0RnJhZ21lbnRzKSxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIGNvdXBvbkNvZGU6IGNvdXBvbi5jb2RlXG4gICAgICB9XG4gICAgfSkucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4gdGhpcy5jYXJ0VHJhbnNmb3JtZXIudHJhbnNmb3JtKHJlc3VsdC5kYXRhLmFwcGx5Q291cG9uVG9DYXJ0LmNhcnQpKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHRocm93RXJyb3IodHJhbnNmb3JtQ2FydE1hZ2VudG9FcnJvcihlcnIpKSksXG4gICAgKVxuICB9XG5cbiAgbGlzdChjYXJ0SWQ6IERhZmZDYXJ0WydpZCddKTogT2JzZXJ2YWJsZTxEYWZmQ2FydENvdXBvbltdPiB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25RdWV1ZS5tdXRhdGU8TWFnZW50b0xpc3RDYXJ0Q291cG9uc1Jlc3BvbnNlPih7XG4gICAgICBtdXRhdGlvbjogbGlzdENhcnRDb3Vwb25zKHRoaXMuZXh0cmFDYXJ0RnJhZ21lbnRzKSxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBjYXJ0SWRcbiAgICAgIH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiByZXN1bHQuZGF0YS5jYXJ0LmFwcGxpZWRfY291cG9ucy5tYXAoZGFmZk1hZ2VudG9Db3Vwb25UcmFuc2Zvcm0pKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHRocm93RXJyb3IodHJhbnNmb3JtQ2FydE1hZ2VudG9FcnJvcihlcnIpKSksXG4gICAgKVxuICB9XG5cbiAgcmVtb3ZlKGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10sIGNvdXBvbjogRGFmZkNhcnRDb3Vwb24pOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlQWxsKGNhcnRJZClcbiAgfVxuXG4gIHJlbW92ZUFsbChjYXJ0SWQ6IERhZmZDYXJ0WydpZCddKTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiB0aGlzLm11dGF0aW9uUXVldWUubXV0YXRlPE1hZ2VudG9SZW1vdmVBbGxDb3Vwb25zUmVzcG9uc2U+KHtcbiAgICAgIG11dGF0aW9uOiByZW1vdmVBbGxDb3Vwb25zKHRoaXMuZXh0cmFDYXJ0RnJhZ21lbnRzKSxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBjYXJ0SWRcbiAgICAgIH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiB0aGlzLmNhcnRUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzdWx0LmRhdGEucmVtb3ZlQ291cG9uRnJvbUNhcnQuY2FydCkpLFxuICAgICAgY2F0Y2hFcnJvcihlcnIgPT4gdGhyb3dFcnJvcih0cmFuc2Zvcm1DYXJ0TWFnZW50b0Vycm9yKGVycikpKSxcbiAgICApXG4gIH1cbn1cbiJdfQ==