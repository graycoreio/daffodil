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
var DaffMagentoCartCouponService = /** @class */ (function () {
    function DaffMagentoCartCouponService(mutationQueue, extraCartFragments, cartTransformer) {
        this.mutationQueue = mutationQueue;
        this.extraCartFragments = extraCartFragments;
        this.cartTransformer = cartTransformer;
    }
    /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    DaffMagentoCartCouponService.prototype.apply = /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    function (cartId, coupon) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: applyCoupon(this.extraCartFragments),
            variables: {
                cartId: cartId,
                couponCode: coupon.code
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.cartTransformer.transform(result.data.applyCouponToCart.cart); })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return throwError(transformCartMagentoError(err)); })));
    };
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffMagentoCartCouponService.prototype.list = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.mutationQueue.mutate({
            mutation: listCartCoupons(this.extraCartFragments),
            variables: {
                cartId: cartId
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.data.cart.applied_coupons.map(daffMagentoCouponTransform); })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return throwError(transformCartMagentoError(err)); })));
    };
    /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    DaffMagentoCartCouponService.prototype.remove = /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    function (cartId, coupon) {
        return this.removeAll(cartId);
    };
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffMagentoCartCouponService.prototype.removeAll = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: removeAllCoupons(this.extraCartFragments),
            variables: {
                cartId: cartId
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.cartTransformer.transform(result.data.removeCouponFromCart.cart); })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return throwError(transformCartMagentoError(err)); })));
    };
    DaffMagentoCartCouponService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartCouponService.ctorParameters = function () { return [
        { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
        { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
        { type: DaffMagentoCartCouponResponseTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoCartCouponService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartCouponService_Factory() { return new DaffMagentoCartCouponService(i0.ɵɵinject(i1.DAFF_MAGENTO_CART_MUTATION_QUEUE), i0.ɵɵinject(i2.DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), i0.ɵɵinject(i3.DaffMagentoCartCouponResponseTransformer)); }, token: DaffMagentoCartCouponService, providedIn: "root" });
    return DaffMagentoCartCouponService;
}());
export { DaffMagentoCartCouponService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsiY2FydC1jb3Vwb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBSXpELE9BQU8sRUFDTCxlQUFlLEVBQ2YsV0FBVyxFQUNYLGdCQUFnQixFQUNqQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTS9ELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzdHLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7Ozs7OztBQUtoRztJQUlFLHNDQUNvRCxhQUErQixFQUMxQixrQkFBa0MsRUFDbEYsZUFBeUQ7UUFGZCxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDMUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFnQjtRQUNsRixvQkFBZSxHQUFmLGVBQWUsQ0FBMEM7SUFDL0QsQ0FBQzs7Ozs7O0lBRUosNENBQUs7Ozs7O0lBQUwsVUFBTSxNQUFzQixFQUFFLE1BQXNCO1FBQXBELGlCQVdDO1FBVkMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBNkI7WUFDM0QsUUFBUSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDOUMsU0FBUyxFQUFFO2dCQUNULE1BQU0sUUFBQTtnQkFDTixVQUFVLEVBQUUsTUFBTSxDQUFDLElBQUk7YUFDeEI7U0FDRixDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQWxFLENBQWtFLEVBQUMsRUFDakYsVUFBVTs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsVUFBVSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQTFDLENBQTBDLEVBQUMsQ0FDOUQsQ0FBQTtJQUNILENBQUM7Ozs7O0lBRUQsMkNBQUk7Ozs7SUFBSixVQUFLLE1BQXNCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQWlDO1lBQy9ELFFBQVEsRUFBRSxlQUFlLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQ2xELFNBQVMsRUFBRTtnQkFDVCxNQUFNLFFBQUE7YUFDUDtTQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxFQUFoRSxDQUFnRSxFQUFDLEVBQy9FLFVBQVU7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUExQyxDQUEwQyxFQUFDLENBQzlELENBQUE7SUFDSCxDQUFDOzs7Ozs7SUFFRCw2Q0FBTTs7Ozs7SUFBTixVQUFPLE1BQXNCLEVBQUUsTUFBc0I7UUFDbkQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQy9CLENBQUM7Ozs7O0lBRUQsZ0RBQVM7Ozs7SUFBVCxVQUFVLE1BQXNCO1FBQWhDLGlCQVVDO1FBVEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBa0M7WUFDaEUsUUFBUSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUNuRCxTQUFTLEVBQUU7Z0JBQ1QsTUFBTSxRQUFBO2FBQ1A7U0FDRixDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQXJFLENBQXFFLEVBQUMsRUFDcEYsVUFBVTs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsVUFBVSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQTFDLENBQTBDLEVBQUMsQ0FDOUQsQ0FBQTtJQUNILENBQUM7O2dCQWpERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQXpCUSxnQkFBZ0IsdUJBNEJwQixNQUFNLFNBQUMsZ0NBQWdDOzRDQUN2QyxNQUFNLFNBQUMsc0NBQXNDO2dCQWJ6Qyx3Q0FBd0M7Ozt1Q0FyQmpEO0NBOEVDLEFBbERELElBa0RDO1NBL0NZLDRCQUE0Qjs7Ozs7O0lBRXJDLHFEQUFpRjs7SUFDakYsMERBQXlGOztJQUN6Rix1REFBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgdGhyb3dFcnJvciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYWZmUXVldWVkQXBvbGxvIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvZ3JhcGhxbCdcbmltcG9ydCB7IERhZmZDYXJ0LCBEYWZmQ2FydENvdXBvbiB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7IERhZmZDYXJ0Q291cG9uU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7XG4gIGxpc3RDYXJ0Q291cG9ucyxcbiAgYXBwbHlDb3Vwb24sXG4gIHJlbW92ZUFsbENvdXBvbnNcbn0gZnJvbSAnLi9xdWVyaWVzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgdHJhbnNmb3JtQ2FydE1hZ2VudG9FcnJvciB9IGZyb20gJy4vZXJyb3JzL3RyYW5zZm9ybSc7XG5pbXBvcnQge1xuICBNYWdlbnRvTGlzdENhcnRDb3Vwb25zUmVzcG9uc2UsXG4gIE1hZ2VudG9BcHBseUNvdXBvblJlc3BvbnNlLFxuICBNYWdlbnRvUmVtb3ZlQWxsQ291cG9uc1Jlc3BvbnNlXG59IGZyb20gJy4vcXVlcmllcy9yZXNwb25zZXMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBkYWZmTWFnZW50b0NvdXBvblRyYW5zZm9ybSB9IGZyb20gJy4vdHJhbnNmb3Jtcy9vdXRwdXRzL2NhcnQtY291cG9uJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydENvdXBvblJlc3BvbnNlVHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LWNvdXBvbi1yZXNwb25zZS5zZXJ2aWNlJztcbmltcG9ydCB7IERBRkZfQ0FSVF9NQUdFTlRPX0VYVFJBX0NBUlRfRlJBR01FTlRTIH0gZnJvbSAnLi9pbmplY3Rpb24tdG9rZW5zL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgREFGRl9NQUdFTlRPX0NBUlRfTVVUQVRJT05fUVVFVUUgfSBmcm9tICcuL2luamVjdGlvbi10b2tlbnMvY2FydC1tdXRhdGlvbi1xdWV1ZS50b2tlbic7XG5cbi8qKlxuICogQSBzZXJ2aWNlIGZvciBtYWtpbmcgTWFnZW50byBHcmFwaFFMIHF1ZXJpZXMgZm9yIGNhcnRzLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmTWFnZW50b0NhcnRDb3Vwb25TZXJ2aWNlIGltcGxlbWVudHMgRGFmZkNhcnRDb3Vwb25TZXJ2aWNlSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChEQUZGX01BR0VOVE9fQ0FSVF9NVVRBVElPTl9RVUVVRSkgcHJpdmF0ZSBtdXRhdGlvblF1ZXVlOiBEYWZmUXVldWVkQXBvbGxvLFxuICAgIEBJbmplY3QoREFGRl9DQVJUX01BR0VOVE9fRVhUUkFfQ0FSVF9GUkFHTUVOVFMpIHB1YmxpYyBleHRyYUNhcnRGcmFnbWVudHM6IERvY3VtZW50Tm9kZVtdLFxuICAgIHB1YmxpYyBjYXJ0VHJhbnNmb3JtZXI6IERhZmZNYWdlbnRvQ2FydENvdXBvblJlc3BvbnNlVHJhbnNmb3JtZXIsXG4gICkge31cblxuICBhcHBseShjYXJ0SWQ6IERhZmZDYXJ0WydpZCddLCBjb3Vwb246IERhZmZDYXJ0Q291cG9uKTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiB0aGlzLm11dGF0aW9uUXVldWUubXV0YXRlPE1hZ2VudG9BcHBseUNvdXBvblJlc3BvbnNlPih7XG4gICAgICBtdXRhdGlvbjogYXBwbHlDb3Vwb24odGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgY291cG9uQ29kZTogY291cG9uLmNvZGVcbiAgICAgIH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiB0aGlzLmNhcnRUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzdWx0LmRhdGEuYXBwbHlDb3Vwb25Ub0NhcnQuY2FydCkpLFxuICAgICAgY2F0Y2hFcnJvcihlcnIgPT4gdGhyb3dFcnJvcih0cmFuc2Zvcm1DYXJ0TWFnZW50b0Vycm9yKGVycikpKSxcbiAgICApXG4gIH1cblxuICBsaXN0KGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10pOiBPYnNlcnZhYmxlPERhZmZDYXJ0Q291cG9uW10+IHtcbiAgICByZXR1cm4gdGhpcy5tdXRhdGlvblF1ZXVlLm11dGF0ZTxNYWdlbnRvTGlzdENhcnRDb3Vwb25zUmVzcG9uc2U+KHtcbiAgICAgIG11dGF0aW9uOiBsaXN0Q2FydENvdXBvbnModGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGNhcnRJZFxuICAgICAgfVxuICAgIH0pLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+IHJlc3VsdC5kYXRhLmNhcnQuYXBwbGllZF9jb3Vwb25zLm1hcChkYWZmTWFnZW50b0NvdXBvblRyYW5zZm9ybSkpLFxuICAgICAgY2F0Y2hFcnJvcihlcnIgPT4gdGhyb3dFcnJvcih0cmFuc2Zvcm1DYXJ0TWFnZW50b0Vycm9yKGVycikpKSxcbiAgICApXG4gIH1cblxuICByZW1vdmUoY2FydElkOiBEYWZmQ2FydFsnaWQnXSwgY291cG9uOiBEYWZmQ2FydENvdXBvbik6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVBbGwoY2FydElkKVxuICB9XG5cbiAgcmVtb3ZlQWxsKGNhcnRJZDogRGFmZkNhcnRbJ2lkJ10pOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25RdWV1ZS5tdXRhdGU8TWFnZW50b1JlbW92ZUFsbENvdXBvbnNSZXNwb25zZT4oe1xuICAgICAgbXV0YXRpb246IHJlbW92ZUFsbENvdXBvbnModGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGNhcnRJZFxuICAgICAgfVxuICAgIH0pLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+IHRoaXMuY2FydFRyYW5zZm9ybWVyLnRyYW5zZm9ybShyZXN1bHQuZGF0YS5yZW1vdmVDb3Vwb25Gcm9tQ2FydC5jYXJ0KSksXG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB0aHJvd0Vycm9yKHRyYW5zZm9ybUNhcnRNYWdlbnRvRXJyb3IoZXJyKSkpLFxuICAgIClcbiAgfVxufVxuIl19