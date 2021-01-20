/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { DaffQueuedApollo } from '@daffodil/core/graphql';
import { getBillingAddress, updateBillingAddress, updateBillingAddressWithEmail } from './queries/public_api';
import { DaffMagentoBillingAddressInputTransformer } from './transforms/inputs/billing-address.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffMagentoBillingAddressTransformer } from './transforms/outputs/billing-address.service';
import { transformCartMagentoError } from './errors/transform';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';
import { DAFF_MAGENTO_CART_MUTATION_QUEUE } from './injection-tokens/cart-mutation-queue.token';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
import * as i2 from "./injection-tokens/cart-mutation-queue.token";
import * as i3 from "./injection-tokens/fragments/cart";
import * as i4 from "./transforms/outputs/cart.service";
import * as i5 from "./transforms/outputs/billing-address.service";
import * as i6 from "./transforms/inputs/billing-address.service";
/**
 * A service for making Magento GraphQL queries for carts.
 */
var DaffMagentoCartBillingAddressService = /** @class */ (function () {
    function DaffMagentoCartBillingAddressService(apollo, mutationQueue, extraCartFragments, cartTransformer, billingAddressTransformer, billingAddressInputTransformer) {
        this.apollo = apollo;
        this.mutationQueue = mutationQueue;
        this.extraCartFragments = extraCartFragments;
        this.cartTransformer = cartTransformer;
        this.billingAddressTransformer = billingAddressTransformer;
        this.billingAddressInputTransformer = billingAddressInputTransformer;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffMagentoCartBillingAddressService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        var _this = this;
        return this.apollo.query({
            query: getBillingAddress(this.extraCartFragments),
            variables: { cartId: cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.data.cart.billing_address
            ? _this.billingAddressTransformer.transform(tslib_1.__assign({}, result.data.cart.billing_address, { email: result.data.cart.email }))
            : null; })));
    };
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffMagentoCartBillingAddressService.prototype.update = /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        return address.email ? this.updateAddressWithEmail(cartId, address) : this.updateAddress(cartId, address);
    };
    /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffMagentoCartBillingAddressService.prototype.updateAddress = /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: updateBillingAddress(this.extraCartFragments),
            variables: {
                cartId: cartId,
                address: this.billingAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return _this.cartTransformer.transform(resp.data.setBillingAddressOnCart.cart); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(transformCartMagentoError(error)); })));
    };
    /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffMagentoCartBillingAddressService.prototype.updateAddressWithEmail = /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: updateBillingAddressWithEmail(this.extraCartFragments),
            variables: {
                cartId: cartId,
                email: address.email,
                address: this.billingAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return _this.cartTransformer.transform(tslib_1.__assign({}, resp.data.setBillingAddressOnCart.cart, { email: resp.data.setGuestEmailOnCart.cart.email })); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(transformCartMagentoError(error)); })));
    };
    DaffMagentoCartBillingAddressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartBillingAddressService.ctorParameters = function () { return [
        { type: Apollo },
        { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
        { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
        { type: DaffMagentoCartTransformer },
        { type: DaffMagentoBillingAddressTransformer },
        { type: DaffMagentoBillingAddressInputTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoCartBillingAddressService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartBillingAddressService_Factory() { return new DaffMagentoCartBillingAddressService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DAFF_MAGENTO_CART_MUTATION_QUEUE), i0.ɵɵinject(i3.DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), i0.ɵɵinject(i4.DaffMagentoCartTransformer), i0.ɵɵinject(i5.DaffMagentoBillingAddressTransformer), i0.ɵɵinject(i6.DaffMagentoBillingAddressInputTransformer)); }, token: DaffMagentoCartBillingAddressService, providedIn: "root" });
    return DaffMagentoCartBillingAddressService;
}());
export { DaffMagentoCartBillingAddressService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartBillingAddressService.prototype.apollo;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartBillingAddressService.prototype.mutationQueue;
    /** @type {?} */
    DaffMagentoCartBillingAddressService.prototype.extraCartFragments;
    /** @type {?} */
    DaffMagentoCartBillingAddressService.prototype.cartTransformer;
    /** @type {?} */
    DaffMagentoCartBillingAddressService.prototype.billingAddressTransformer;
    /** @type {?} */
    DaffMagentoCartBillingAddressService.prototype.billingAddressInputTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1iaWxsaW5nLWFkZHJlc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsiY2FydC1iaWxsaW5nLWFkZHJlc3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFJekQsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsNkJBQTZCLEVBQzlCLE1BQU0sc0JBQXNCLENBQUM7QUFNOUIsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDeEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDL0UsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDcEcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0QsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdkYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sOENBQThDLENBQUM7Ozs7Ozs7Ozs7O0FBS2hHO0lBSUUsOENBQ1UsTUFBYyxFQUM0QixhQUErQixFQUMxQixrQkFBa0MsRUFDbEYsZUFBMkMsRUFDM0MseUJBQStELEVBQy9ELDhCQUF5RTtRQUx4RSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQzRCLGtCQUFhLEdBQWIsYUFBYSxDQUFr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QUMsRUFDSCxVQUFVOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxVQUFVLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBNUMsQ0FBNEMsRUFBQyxDQUNsRSxDQUFBO0lBQ0gsQ0FBQzs7Z0JBNURGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBL0JRLE1BQU07Z0JBS04sZ0JBQWdCLHVCQThCcEIsTUFBTSxTQUFDLGdDQUFnQzs0Q0FDdkMsTUFBTSxTQUFDLHNDQUFzQztnQkFoQnpDLDBCQUEwQjtnQkFDMUIsb0NBQW9DO2dCQUZwQyx5Q0FBeUM7OzsrQ0FwQmxEO0NBMkZDLEFBN0RELElBNkRDO1NBMURZLG9DQUFvQzs7Ozs7O0lBRTdDLHNEQUFzQjs7Ozs7SUFDdEIsNkRBQWlGOztJQUNqRixrRUFBeUY7O0lBQ3pGLCtEQUFrRDs7SUFDbEQseUVBQXNFOztJQUN0RSw4RUFBZ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwb2xsbyB9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xuXG5pbXBvcnQgeyBEYWZmUXVldWVkQXBvbGxvIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvZ3JhcGhxbCdcbmltcG9ydCB7IERhZmZDYXJ0QWRkcmVzcywgRGFmZkNhcnQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmQ2FydEJpbGxpbmdBZGRyZXNzU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7XG4gIGdldEJpbGxpbmdBZGRyZXNzLFxuICB1cGRhdGVCaWxsaW5nQWRkcmVzcyxcbiAgdXBkYXRlQmlsbGluZ0FkZHJlc3NXaXRoRW1haWxcbn0gZnJvbSAnLi9xdWVyaWVzL3B1YmxpY19hcGknO1xuaW1wb3J0IHtcbiAgTWFnZW50b0dldEJpbGxpbmdBZGRyZXNzUmVzcG9uc2UsXG4gIE1hZ2VudG9VcGRhdGVCaWxsaW5nQWRkcmVzc1Jlc3BvbnNlLFxuICBNYWdlbnRvVXBkYXRlQmlsbGluZ0FkZHJlc3NXaXRoRW1haWxSZXNwb25zZVxufSBmcm9tICcuL3F1ZXJpZXMvcmVzcG9uc2VzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9CaWxsaW5nQWRkcmVzc0lucHV0VHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvaW5wdXRzL2JpbGxpbmctYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydFRyYW5zZm9ybWVyIH0gZnJvbSAnLi90cmFuc2Zvcm1zL291dHB1dHMvY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQmlsbGluZ0FkZHJlc3NUcmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3Jtcy9vdXRwdXRzL2JpbGxpbmctYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCB7IHRyYW5zZm9ybUNhcnRNYWdlbnRvRXJyb3IgfSBmcm9tICcuL2Vycm9ycy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgREFGRl9DQVJUX01BR0VOVE9fRVhUUkFfQ0FSVF9GUkFHTUVOVFMgfSBmcm9tICcuL2luamVjdGlvbi10b2tlbnMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEQUZGX01BR0VOVE9fQ0FSVF9NVVRBVElPTl9RVUVVRSB9IGZyb20gJy4vaW5qZWN0aW9uLXRva2Vucy9jYXJ0LW11dGF0aW9uLXF1ZXVlLnRva2VuJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgZm9yIG1ha2luZyBNYWdlbnRvIEdyYXBoUUwgcXVlcmllcyBmb3IgY2FydHMuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZNYWdlbnRvQ2FydEJpbGxpbmdBZGRyZXNzU2VydmljZSBpbXBsZW1lbnRzIERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhcG9sbG86IEFwb2xsbyxcbiAgICBASW5qZWN0KERBRkZfTUFHRU5UT19DQVJUX01VVEFUSU9OX1FVRVVFKSBwcml2YXRlIG11dGF0aW9uUXVldWU6IERhZmZRdWV1ZWRBcG9sbG8sXG4gICAgQEluamVjdChEQUZGX0NBUlRfTUFHRU5UT19FWFRSQV9DQVJUX0ZSQUdNRU5UUykgcHVibGljIGV4dHJhQ2FydEZyYWdtZW50czogRG9jdW1lbnROb2RlW10sXG4gICAgcHVibGljIGNhcnRUcmFuc2Zvcm1lcjogRGFmZk1hZ2VudG9DYXJ0VHJhbnNmb3JtZXIsXG4gICAgcHVibGljIGJpbGxpbmdBZGRyZXNzVHJhbnNmb3JtZXI6IERhZmZNYWdlbnRvQmlsbGluZ0FkZHJlc3NUcmFuc2Zvcm1lcixcbiAgICBwdWJsaWMgYmlsbGluZ0FkZHJlc3NJbnB1dFRyYW5zZm9ybWVyOiBEYWZmTWFnZW50b0JpbGxpbmdBZGRyZXNzSW5wdXRUcmFuc2Zvcm1lclxuICApIHt9XG5cbiAgZ2V0KGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxEYWZmQ2FydEFkZHJlc3M+IHtcbiAgICByZXR1cm4gdGhpcy5hcG9sbG8ucXVlcnk8TWFnZW50b0dldEJpbGxpbmdBZGRyZXNzUmVzcG9uc2U+KHtcbiAgICAgIHF1ZXJ5OiBnZXRCaWxsaW5nQWRkcmVzcyh0aGlzLmV4dHJhQ2FydEZyYWdtZW50cyksXG4gICAgICB2YXJpYWJsZXM6IHtjYXJ0SWR9XG4gICAgfSkucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4gcmVzdWx0LmRhdGEuY2FydC5iaWxsaW5nX2FkZHJlc3NcbiAgICAgICAgPyB0aGlzLmJpbGxpbmdBZGRyZXNzVHJhbnNmb3JtZXIudHJhbnNmb3JtKHtcbiAgICAgICAgICAuLi5yZXN1bHQuZGF0YS5jYXJ0LmJpbGxpbmdfYWRkcmVzcyxcbiAgICAgICAgICBlbWFpbDogcmVzdWx0LmRhdGEuY2FydC5lbWFpbFxuICAgICAgICB9KVxuICAgICAgICA6IG51bGxcbiAgICAgIClcbiAgICApXG4gIH1cblxuICB1cGRhdGUoY2FydElkOiBzdHJpbmcsIGFkZHJlc3M6IFBhcnRpYWw8RGFmZkNhcnRBZGRyZXNzPik6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcbiAgICByZXR1cm4gYWRkcmVzcy5lbWFpbCA/IHRoaXMudXBkYXRlQWRkcmVzc1dpdGhFbWFpbChjYXJ0SWQsIGFkZHJlc3MpIDogdGhpcy51cGRhdGVBZGRyZXNzKGNhcnRJZCwgYWRkcmVzcylcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQWRkcmVzcyhjYXJ0SWQ6IHN0cmluZywgYWRkcmVzczogUGFydGlhbDxEYWZmQ2FydEFkZHJlc3M+KTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiB0aGlzLm11dGF0aW9uUXVldWUubXV0YXRlPE1hZ2VudG9VcGRhdGVCaWxsaW5nQWRkcmVzc1Jlc3BvbnNlPih7XG4gICAgICBtdXRhdGlvbjogdXBkYXRlQmlsbGluZ0FkZHJlc3ModGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgYWRkcmVzczogdGhpcy5iaWxsaW5nQWRkcmVzc0lucHV0VHJhbnNmb3JtZXIudHJhbnNmb3JtKGFkZHJlc3MpXG4gICAgICB9XG4gICAgfSkucGlwZShcbiAgICAgIG1hcChyZXNwID0+IHRoaXMuY2FydFRyYW5zZm9ybWVyLnRyYW5zZm9ybShyZXNwLmRhdGEuc2V0QmlsbGluZ0FkZHJlc3NPbkNhcnQuY2FydCkpLFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB0aHJvd0Vycm9yKHRyYW5zZm9ybUNhcnRNYWdlbnRvRXJyb3IoZXJyb3IpKSksXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVBZGRyZXNzV2l0aEVtYWlsKGNhcnRJZDogc3RyaW5nLCBhZGRyZXNzOiBQYXJ0aWFsPERhZmZDYXJ0QWRkcmVzcz4pOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25RdWV1ZS5tdXRhdGU8TWFnZW50b1VwZGF0ZUJpbGxpbmdBZGRyZXNzV2l0aEVtYWlsUmVzcG9uc2U+KHtcbiAgICAgIG11dGF0aW9uOiB1cGRhdGVCaWxsaW5nQWRkcmVzc1dpdGhFbWFpbCh0aGlzLmV4dHJhQ2FydEZyYWdtZW50cyksXG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgY2FydElkLFxuICAgICAgICBlbWFpbDogYWRkcmVzcy5lbWFpbCxcbiAgICAgICAgYWRkcmVzczogdGhpcy5iaWxsaW5nQWRkcmVzc0lucHV0VHJhbnNmb3JtZXIudHJhbnNmb3JtKGFkZHJlc3MpXG4gICAgICB9XG4gICAgfSkucGlwZShcbiAgICAgIG1hcChyZXNwID0+IHRoaXMuY2FydFRyYW5zZm9ybWVyLnRyYW5zZm9ybSh7XG4gICAgICAgIC4uLnJlc3AuZGF0YS5zZXRCaWxsaW5nQWRkcmVzc09uQ2FydC5jYXJ0LFxuICAgICAgICBlbWFpbDogcmVzcC5kYXRhLnNldEd1ZXN0RW1haWxPbkNhcnQuY2FydC5lbWFpbFxuICAgICAgfSkpLFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB0aHJvd0Vycm9yKHRyYW5zZm9ybUNhcnRNYWdlbnRvRXJyb3IoZXJyb3IpKSksXG4gICAgKVxuICB9XG59XG4iXX0=