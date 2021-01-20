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
import { getShippingAddress, updateShippingAddress, updateShippingAddressWithEmail, } from './queries/public_api';
import { DaffMagentoShippingAddressInputTransformer } from './transforms/inputs/shipping-address.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffMagentoShippingAddressTransformer } from './transforms/outputs/shipping-address.service';
import { transformCartMagentoError } from './errors/transform';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';
import { DAFF_MAGENTO_CART_MUTATION_QUEUE } from './injection-tokens/cart-mutation-queue.token';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
import * as i2 from "./injection-tokens/cart-mutation-queue.token";
import * as i3 from "./injection-tokens/fragments/cart";
import * as i4 from "./transforms/outputs/cart.service";
import * as i5 from "./transforms/outputs/shipping-address.service";
import * as i6 from "./transforms/inputs/shipping-address.service";
/**
 * A service for making Magento GraphQL queries for a cart's shipping address.
 */
var DaffMagentoCartShippingAddressService = /** @class */ (function () {
    function DaffMagentoCartShippingAddressService(apollo, mutationQueue, extraCartFragments, cartTransformer, shippingAddressTransformer, shippingAddressInputTransformer) {
        this.apollo = apollo;
        this.mutationQueue = mutationQueue;
        this.extraCartFragments = extraCartFragments;
        this.cartTransformer = cartTransformer;
        this.shippingAddressTransformer = shippingAddressTransformer;
        this.shippingAddressInputTransformer = shippingAddressInputTransformer;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffMagentoCartShippingAddressService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        var _this = this;
        return this.apollo.query({
            query: getShippingAddress(this.extraCartFragments),
            variables: { cartId: cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.data.cart.shipping_addresses[0]
            ? _this.shippingAddressTransformer.transform(tslib_1.__assign({}, result.data.cart.shipping_addresses[0], { email: result.data.cart.email }))
            : null; })));
    };
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffMagentoCartShippingAddressService.prototype.update = /**
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
    DaffMagentoCartShippingAddressService.prototype.updateAddress = /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: updateShippingAddress(this.extraCartFragments),
            variables: {
                cartId: cartId,
                address: this.shippingAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return _this.cartTransformer.transform(resp.data.setShippingAddressesOnCart.cart); })), catchError((/**
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
    DaffMagentoCartShippingAddressService.prototype.updateAddressWithEmail = /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: updateShippingAddressWithEmail(this.extraCartFragments),
            variables: {
                cartId: cartId,
                email: address.email,
                address: this.shippingAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return _this.cartTransformer.transform(tslib_1.__assign({}, resp.data.setShippingAddressesOnCart.cart, { email: resp.data.setGuestEmailOnCart.cart.email })); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(transformCartMagentoError(error)); })));
    };
    DaffMagentoCartShippingAddressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartShippingAddressService.ctorParameters = function () { return [
        { type: Apollo },
        { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
        { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
        { type: DaffMagentoCartTransformer },
        { type: DaffMagentoShippingAddressTransformer },
        { type: DaffMagentoShippingAddressInputTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoCartShippingAddressService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartShippingAddressService_Factory() { return new DaffMagentoCartShippingAddressService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DAFF_MAGENTO_CART_MUTATION_QUEUE), i0.ɵɵinject(i3.DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), i0.ɵɵinject(i4.DaffMagentoCartTransformer), i0.ɵɵinject(i5.DaffMagentoShippingAddressTransformer), i0.ɵɵinject(i6.DaffMagentoShippingAddressInputTransformer)); }, token: DaffMagentoCartShippingAddressService, providedIn: "root" });
    return DaffMagentoCartShippingAddressService;
}());
export { DaffMagentoCartShippingAddressService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartShippingAddressService.prototype.apollo;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartShippingAddressService.prototype.mutationQueue;
    /** @type {?} */
    DaffMagentoCartShippingAddressService.prototype.extraCartFragments;
    /** @type {?} */
    DaffMagentoCartShippingAddressService.prototype.cartTransformer;
    /** @type {?} */
    DaffMagentoCartShippingAddressService.prototype.shippingAddressTransformer;
    /** @type {?} */
    DaffMagentoCartShippingAddressService.prototype.shippingAddressInputTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbImNhcnQtc2hpcHBpbmctYWRkcmVzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQUl6RCxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLHFCQUFxQixFQUNyQiw4QkFBOEIsR0FDL0IsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsMENBQTBDLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMxRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQU10RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7Ozs7Ozs7Ozs7QUFLaEc7SUFJRSwrQ0FDVSxNQUFjLEVBQzRCLGFBQStCLEVBQzFCLGtCQUFrQyxFQUNsRixlQUEyQyxFQUMzQywwQkFBaUUsRUFDakUsK0JBQTJFO1FBTDFFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDNEIsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQzFCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBZ0I7UUFDbEYsb0JBQWUsR0FBZixlQUFlLENBQTRCO1FBQzNDLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBdUM7UUFDakUsb0NBQStCLEdBQS9CLCtCQUErQixDQUE0QztJQUNqRixDQUFDOzs7OztJQUVKLG1EQUFHOzs7O0lBQUgsVUFBSSxNQUFjO1FBQWxCLGlCQWFDO1FBWkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBb0M7WUFDMUQsS0FBSyxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUNsRCxTQUFTLEVBQUUsRUFBQyxNQUFNLFFBQUEsRUFBQztTQUNwQixDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUNsRCxDQUFDLENBQUMsS0FBSSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsc0JBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUN6QyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUM3QjtZQUNGLENBQUMsQ0FBQyxJQUFJLEVBTE0sQ0FLTixFQUNQLENBQ0YsQ0FBQTtJQUNILENBQUM7Ozs7OztJQUVELHNEQUFNOzs7OztJQUFOLFVBQU8sTUFBYyxFQUFFLE9BQWlDO1FBQ3RELE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDM0csQ0FBQzs7Ozs7OztJQUVPLDZEQUFhOzs7Ozs7SUFBckIsVUFBc0IsTUFBYyxFQUFFLE9BQWlDO1FBQXZFLGlCQVdDO1FBVkMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBdUM7WUFDckUsUUFBUSxFQUFFLHFCQUFxQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUN4RCxTQUFTLEVBQUU7Z0JBQ1QsTUFBTSxRQUFBO2dCQUNOLE9BQU8sRUFBRSxJQUFJLENBQUMsK0JBQStCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQzthQUNqRTtTQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRzs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsRUFBekUsQ0FBeUUsRUFBQyxFQUN0RixVQUFVOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxVQUFVLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBNUMsQ0FBNEMsRUFBQyxDQUNsRSxDQUFBO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLHNFQUFzQjs7Ozs7O0lBQTlCLFVBQStCLE1BQWMsRUFBRSxPQUFpQztRQUFoRixpQkFlQztRQWRDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQWdEO1lBQzlFLFFBQVEsRUFBRSw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDakUsU0FBUyxFQUFFO2dCQUNULE1BQU0sUUFBQTtnQkFDTixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7Z0JBQ3BCLE9BQU8sRUFBRSxJQUFJLENBQUMsK0JBQStCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQzthQUNqRTtTQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRzs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLHNCQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksSUFDNUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssSUFDL0MsRUFIVSxDQUdWLEVBQUMsRUFDSCxVQUFVOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxVQUFVLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBNUMsQ0FBNEMsRUFBQyxDQUNsRSxDQUFBO0lBQ0gsQ0FBQzs7Z0JBNURGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBL0JRLE1BQU07Z0JBS04sZ0JBQWdCLHVCQThCcEIsTUFBTSxTQUFDLGdDQUFnQzs0Q0FDdkMsTUFBTSxTQUFDLHNDQUFzQztnQkFyQnpDLDBCQUEwQjtnQkFDMUIscUNBQXFDO2dCQUZyQywwQ0FBMEM7OztnREFmbkQ7Q0EyRkMsQUE3REQsSUE2REM7U0ExRFkscUNBQXFDOzs7Ozs7SUFFOUMsdURBQXNCOzs7OztJQUN0Qiw4REFBaUY7O0lBQ2pGLG1FQUF5Rjs7SUFDekYsZ0VBQWtEOztJQUNsRCwyRUFBd0U7O0lBQ3hFLGdGQUFrRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBvbGxvIH0gZnJvbSAnYXBvbGxvLWFuZ3VsYXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRG9jdW1lbnROb2RlIH0gZnJvbSAnZ3JhcGhxbCc7XG5cbmltcG9ydCB7IERhZmZRdWV1ZWRBcG9sbG8gfSBmcm9tICdAZGFmZm9kaWwvY29yZS9ncmFwaHFsJ1xuaW1wb3J0IHsgRGFmZkNhcnRBZGRyZXNzLCBEYWZmQ2FydCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7IERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7XG4gIGdldFNoaXBwaW5nQWRkcmVzcyxcbiAgdXBkYXRlU2hpcHBpbmdBZGRyZXNzLFxuICB1cGRhdGVTaGlwcGluZ0FkZHJlc3NXaXRoRW1haWwsXG59IGZyb20gJy4vcXVlcmllcy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERhZmZNYWdlbnRvU2hpcHBpbmdBZGRyZXNzSW5wdXRUcmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3Jtcy9pbnB1dHMvc2hpcHBpbmctYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydFRyYW5zZm9ybWVyIH0gZnJvbSAnLi90cmFuc2Zvcm1zL291dHB1dHMvY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvU2hpcHBpbmdBZGRyZXNzVHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvb3V0cHV0cy9zaGlwcGluZy1hZGRyZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgTWFnZW50b0dldFNoaXBwaW5nQWRkcmVzc1Jlc3BvbnNlLFxuICBNYWdlbnRvVXBkYXRlU2hpcHBpbmdBZGRyZXNzUmVzcG9uc2UsXG4gIE1hZ2VudG9VcGRhdGVTaGlwcGluZ0FkZHJlc3NXaXRoRW1haWxSZXNwb25zZSxcbn0gZnJvbSAnLi9xdWVyaWVzL3Jlc3BvbnNlcy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IHRyYW5zZm9ybUNhcnRNYWdlbnRvRXJyb3IgfSBmcm9tICcuL2Vycm9ycy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgREFGRl9DQVJUX01BR0VOVE9fRVhUUkFfQ0FSVF9GUkFHTUVOVFMgfSBmcm9tICcuL2luamVjdGlvbi10b2tlbnMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEQUZGX01BR0VOVE9fQ0FSVF9NVVRBVElPTl9RVUVVRSB9IGZyb20gJy4vaW5qZWN0aW9uLXRva2Vucy9jYXJ0LW11dGF0aW9uLXF1ZXVlLnRva2VuJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgZm9yIG1ha2luZyBNYWdlbnRvIEdyYXBoUUwgcXVlcmllcyBmb3IgYSBjYXJ0J3Mgc2hpcHBpbmcgYWRkcmVzcy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9DYXJ0U2hpcHBpbmdBZGRyZXNzU2VydmljZSBpbXBsZW1lbnRzIERhZmZDYXJ0U2hpcHBpbmdBZGRyZXNzU2VydmljZUludGVyZmFjZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXBvbGxvOiBBcG9sbG8sXG4gICAgQEluamVjdChEQUZGX01BR0VOVE9fQ0FSVF9NVVRBVElPTl9RVUVVRSkgcHJpdmF0ZSBtdXRhdGlvblF1ZXVlOiBEYWZmUXVldWVkQXBvbGxvLFxuICAgIEBJbmplY3QoREFGRl9DQVJUX01BR0VOVE9fRVhUUkFfQ0FSVF9GUkFHTUVOVFMpIHB1YmxpYyBleHRyYUNhcnRGcmFnbWVudHM6IERvY3VtZW50Tm9kZVtdLFxuICAgIHB1YmxpYyBjYXJ0VHJhbnNmb3JtZXI6IERhZmZNYWdlbnRvQ2FydFRyYW5zZm9ybWVyLFxuICAgIHB1YmxpYyBzaGlwcGluZ0FkZHJlc3NUcmFuc2Zvcm1lcjogRGFmZk1hZ2VudG9TaGlwcGluZ0FkZHJlc3NUcmFuc2Zvcm1lcixcbiAgICBwdWJsaWMgc2hpcHBpbmdBZGRyZXNzSW5wdXRUcmFuc2Zvcm1lcjogRGFmZk1hZ2VudG9TaGlwcGluZ0FkZHJlc3NJbnB1dFRyYW5zZm9ybWVyXG4gICkge31cblxuICBnZXQoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERhZmZDYXJ0QWRkcmVzcz4ge1xuICAgIHJldHVybiB0aGlzLmFwb2xsby5xdWVyeTxNYWdlbnRvR2V0U2hpcHBpbmdBZGRyZXNzUmVzcG9uc2U+KHtcbiAgICAgIHF1ZXJ5OiBnZXRTaGlwcGluZ0FkZHJlc3ModGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7Y2FydElkfVxuICAgIH0pLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+IHJlc3VsdC5kYXRhLmNhcnQuc2hpcHBpbmdfYWRkcmVzc2VzWzBdXG4gICAgICAgID8gdGhpcy5zaGlwcGluZ0FkZHJlc3NUcmFuc2Zvcm1lci50cmFuc2Zvcm0oe1xuICAgICAgICAgIC4uLnJlc3VsdC5kYXRhLmNhcnQuc2hpcHBpbmdfYWRkcmVzc2VzWzBdLFxuICAgICAgICAgIGVtYWlsOiByZXN1bHQuZGF0YS5jYXJ0LmVtYWlsXG4gICAgICAgIH0pXG4gICAgICAgIDogbnVsbFxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHVwZGF0ZShjYXJ0SWQ6IHN0cmluZywgYWRkcmVzczogUGFydGlhbDxEYWZmQ2FydEFkZHJlc3M+KTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiBhZGRyZXNzLmVtYWlsID8gdGhpcy51cGRhdGVBZGRyZXNzV2l0aEVtYWlsKGNhcnRJZCwgYWRkcmVzcykgOiB0aGlzLnVwZGF0ZUFkZHJlc3MoY2FydElkLCBhZGRyZXNzKVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVBZGRyZXNzKGNhcnRJZDogc3RyaW5nLCBhZGRyZXNzOiBQYXJ0aWFsPERhZmZDYXJ0QWRkcmVzcz4pOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25RdWV1ZS5tdXRhdGU8TWFnZW50b1VwZGF0ZVNoaXBwaW5nQWRkcmVzc1Jlc3BvbnNlPih7XG4gICAgICBtdXRhdGlvbjogdXBkYXRlU2hpcHBpbmdBZGRyZXNzKHRoaXMuZXh0cmFDYXJ0RnJhZ21lbnRzKSxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIGFkZHJlc3M6IHRoaXMuc2hpcHBpbmdBZGRyZXNzSW5wdXRUcmFuc2Zvcm1lci50cmFuc2Zvcm0oYWRkcmVzcylcbiAgICAgIH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHJlc3AgPT4gdGhpcy5jYXJ0VHJhbnNmb3JtZXIudHJhbnNmb3JtKHJlc3AuZGF0YS5zZXRTaGlwcGluZ0FkZHJlc3Nlc09uQ2FydC5jYXJ0KSksXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRocm93RXJyb3IodHJhbnNmb3JtQ2FydE1hZ2VudG9FcnJvcihlcnJvcikpKSxcbiAgICApXG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUFkZHJlc3NXaXRoRW1haWwoY2FydElkOiBzdHJpbmcsIGFkZHJlc3M6IFBhcnRpYWw8RGFmZkNhcnRBZGRyZXNzPik6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcbiAgICByZXR1cm4gdGhpcy5tdXRhdGlvblF1ZXVlLm11dGF0ZTxNYWdlbnRvVXBkYXRlU2hpcHBpbmdBZGRyZXNzV2l0aEVtYWlsUmVzcG9uc2U+KHtcbiAgICAgIG11dGF0aW9uOiB1cGRhdGVTaGlwcGluZ0FkZHJlc3NXaXRoRW1haWwodGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgZW1haWw6IGFkZHJlc3MuZW1haWwsXG4gICAgICAgIGFkZHJlc3M6IHRoaXMuc2hpcHBpbmdBZGRyZXNzSW5wdXRUcmFuc2Zvcm1lci50cmFuc2Zvcm0oYWRkcmVzcylcbiAgICAgIH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHJlc3AgPT4gdGhpcy5jYXJ0VHJhbnNmb3JtZXIudHJhbnNmb3JtKHtcbiAgICAgICAgLi4ucmVzcC5kYXRhLnNldFNoaXBwaW5nQWRkcmVzc2VzT25DYXJ0LmNhcnQsXG4gICAgICAgIGVtYWlsOiByZXNwLmRhdGEuc2V0R3Vlc3RFbWFpbE9uQ2FydC5jYXJ0LmVtYWlsXG4gICAgICB9KSksXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRocm93RXJyb3IodHJhbnNmb3JtQ2FydE1hZ2VudG9FcnJvcihlcnJvcikpKSxcbiAgICApXG4gIH1cbn1cbiJdfQ==