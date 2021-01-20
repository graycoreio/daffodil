/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { listPaymentMethods } from './queries/public_api';
import { DaffMagentoCartPaymentTransformer } from './transforms/outputs/cart-payment.service';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
import * as i2 from "./injection-tokens/fragments/cart";
import * as i3 from "./transforms/outputs/cart-payment.service";
/**
 * A service for making Magento GraphQL queries for carts.
 */
var DaffMagentoCartPaymentMethodsService = /** @class */ (function () {
    function DaffMagentoCartPaymentMethodsService(apollo, extraCartFragments, paymentTransformer) {
        this.apollo = apollo;
        this.extraCartFragments = extraCartFragments;
        this.paymentTransformer = paymentTransformer;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffMagentoCartPaymentMethodsService.prototype.list = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        var _this = this;
        return this.apollo.query({
            query: listPaymentMethods(this.extraCartFragments),
            variables: { cartId: cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.data.cart.available_payment_methods.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.paymentTransformer.transform(item); })); })));
    };
    DaffMagentoCartPaymentMethodsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartPaymentMethodsService.ctorParameters = function () { return [
        { type: Apollo },
        { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
        { type: DaffMagentoCartPaymentTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoCartPaymentMethodsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartPaymentMethodsService_Factory() { return new DaffMagentoCartPaymentMethodsService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), i0.ɵɵinject(i3.DaffMagentoCartPaymentTransformer)); }, token: DaffMagentoCartPaymentMethodsService, providedIn: "root" });
    return DaffMagentoCartPaymentMethodsService;
}());
export { DaffMagentoCartPaymentMethodsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartPaymentMethodsService.prototype.apollo;
    /** @type {?} */
    DaffMagentoCartPaymentMethodsService.prototype.extraCartFragments;
    /** @type {?} */
    DaffMagentoCartPaymentMethodsService.prototype.paymentTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LW1ldGhvZHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsiY2FydC1wYXltZW50LW1ldGhvZHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUtyQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUU5RixPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7QUFLdkY7SUFJRSw4Q0FDVSxNQUFjLEVBQ2lDLGtCQUFrQyxFQUNsRixrQkFBcUQ7UUFGcEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNpQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWdCO1FBQ2xGLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUM7SUFDM0QsQ0FBQzs7Ozs7SUFFSixtREFBSTs7OztJQUFKLFVBQUssTUFBYztRQUFuQixpQkFPQztRQU5DLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQW9DO1lBQzFELEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDbEQsU0FBUyxFQUFFLEVBQUMsTUFBTSxRQUFBLEVBQUM7U0FDcEIsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUF2QyxDQUF1QyxFQUFDLEVBQS9GLENBQStGLEVBQUMsQ0FDL0csQ0FBQTtJQUNILENBQUM7O2dCQWpCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWxCUSxNQUFNOzRDQXNCVixNQUFNLFNBQUMsc0NBQXNDO2dCQWJ6QyxpQ0FBaUM7OzsrQ0FWMUM7Q0FtQ0MsQUFsQkQsSUFrQkM7U0FmWSxvQ0FBb0M7Ozs7OztJQUU3QyxzREFBc0I7O0lBQ3RCLGtFQUF5Rjs7SUFDekYsa0VBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcG9sbG8gfSBmcm9tICdhcG9sbG8tYW5ndWxhcic7XG5pbXBvcnQgeyBEb2N1bWVudE5vZGUgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGFmZkNhcnRQYXltZW50TWV0aG9kIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHsgRGFmZkNhcnRQYXltZW50TWV0aG9kc1NlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5pbXBvcnQgeyBsaXN0UGF5bWVudE1ldGhvZHMgfSBmcm9tICcuL3F1ZXJpZXMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhcnRQYXltZW50VHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LXBheW1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBNYWdlbnRvTGlzdFBheW1lbnRNZXRob2RzUmVzcG9uc2UgfSBmcm9tICcuL3F1ZXJpZXMvcmVzcG9uc2VzL2xpc3QtcGF5bWVudC1tZXRob2RzJztcbmltcG9ydCB7IERBRkZfQ0FSVF9NQUdFTlRPX0VYVFJBX0NBUlRfRlJBR01FTlRTIH0gZnJvbSAnLi9pbmplY3Rpb24tdG9rZW5zL3B1YmxpY19hcGknO1xuXG4vKipcbiAqIEEgc2VydmljZSBmb3IgbWFraW5nIE1hZ2VudG8gR3JhcGhRTCBxdWVyaWVzIGZvciBjYXJ0cy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9DYXJ0UGF5bWVudE1ldGhvZHNTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkNhcnRQYXltZW50TWV0aG9kc1NlcnZpY2VJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFwb2xsbzogQXBvbGxvLFxuICAgIEBJbmplY3QoREFGRl9DQVJUX01BR0VOVE9fRVhUUkFfQ0FSVF9GUkFHTUVOVFMpIHB1YmxpYyBleHRyYUNhcnRGcmFnbWVudHM6IERvY3VtZW50Tm9kZVtdLFxuICAgIHB1YmxpYyBwYXltZW50VHJhbnNmb3JtZXI6IERhZmZNYWdlbnRvQ2FydFBheW1lbnRUcmFuc2Zvcm1lclxuICApIHt9XG5cbiAgbGlzdChjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGFmZkNhcnRQYXltZW50TWV0aG9kW10+IHtcbiAgICByZXR1cm4gdGhpcy5hcG9sbG8ucXVlcnk8TWFnZW50b0xpc3RQYXltZW50TWV0aG9kc1Jlc3BvbnNlPih7XG4gICAgICBxdWVyeTogbGlzdFBheW1lbnRNZXRob2RzKHRoaXMuZXh0cmFDYXJ0RnJhZ21lbnRzKSxcbiAgICAgIHZhcmlhYmxlczoge2NhcnRJZH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiByZXN1bHQuZGF0YS5jYXJ0LmF2YWlsYWJsZV9wYXltZW50X21ldGhvZHMubWFwKGl0ZW0gPT4gdGhpcy5wYXltZW50VHJhbnNmb3JtZXIudHJhbnNmb3JtKGl0ZW0pKSlcbiAgICApXG4gIH1cbn1cbiJdfQ==