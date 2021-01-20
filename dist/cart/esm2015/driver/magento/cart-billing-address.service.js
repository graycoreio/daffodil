/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class DaffMagentoCartBillingAddressService {
    /**
     * @param {?} apollo
     * @param {?} mutationQueue
     * @param {?} extraCartFragments
     * @param {?} cartTransformer
     * @param {?} billingAddressTransformer
     * @param {?} billingAddressInputTransformer
     */
    constructor(apollo, mutationQueue, extraCartFragments, cartTransformer, billingAddressTransformer, billingAddressInputTransformer) {
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
    get(cartId) {
        return this.apollo.query({
            query: getBillingAddress(this.extraCartFragments),
            variables: { cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => result.data.cart.billing_address
            ? this.billingAddressTransformer.transform(Object.assign({}, result.data.cart.billing_address, { email: result.data.cart.email }))
            : null)));
    }
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    update(cartId, address) {
        return address.email ? this.updateAddressWithEmail(cartId, address) : this.updateAddress(cartId, address);
    }
    /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    updateAddress(cartId, address) {
        return this.mutationQueue.mutate({
            mutation: updateBillingAddress(this.extraCartFragments),
            variables: {
                cartId,
                address: this.billingAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => this.cartTransformer.transform(resp.data.setBillingAddressOnCart.cart))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => throwError(transformCartMagentoError(error)))));
    }
    /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    updateAddressWithEmail(cartId, address) {
        return this.mutationQueue.mutate({
            mutation: updateBillingAddressWithEmail(this.extraCartFragments),
            variables: {
                cartId,
                email: address.email,
                address: this.billingAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => this.cartTransformer.transform(Object.assign({}, resp.data.setBillingAddressOnCart.cart, { email: resp.data.setGuestEmailOnCart.cart.email })))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => throwError(transformCartMagentoError(error)))));
    }
}
DaffMagentoCartBillingAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartBillingAddressService.ctorParameters = () => [
    { type: Apollo },
    { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
    { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
    { type: DaffMagentoCartTransformer },
    { type: DaffMagentoBillingAddressTransformer },
    { type: DaffMagentoBillingAddressInputTransformer }
];
/** @nocollapse */ DaffMagentoCartBillingAddressService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartBillingAddressService_Factory() { return new DaffMagentoCartBillingAddressService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DAFF_MAGENTO_CART_MUTATION_QUEUE), i0.ɵɵinject(i3.DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), i0.ɵɵinject(i4.DaffMagentoCartTransformer), i0.ɵɵinject(i5.DaffMagentoBillingAddressTransformer), i0.ɵɵinject(i6.DaffMagentoBillingAddressInputTransformer)); }, token: DaffMagentoCartBillingAddressService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1iaWxsaW5nLWFkZHJlc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsiY2FydC1iaWxsaW5nLWFkZHJlc3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQUl6RCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQiw2QkFBNkIsRUFDOUIsTUFBTSxzQkFBc0IsQ0FBQztBQU05QixPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN4RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNwRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7Ozs7Ozs7Ozs7QUFRaEcsTUFBTSxPQUFPLG9DQUFvQzs7Ozs7Ozs7O0lBQy9DLFlBQ1UsTUFBYyxFQUM0QixhQUErQixFQUMxQixrQkFBa0MsRUFDbEYsZUFBMkMsRUFDM0MseUJBQStELEVBQy9ELDhCQUF5RTtRQUx4RSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FB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VUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBL0JRLE1BQU07WUFLTixnQkFBZ0IsdUJBOEJwQixNQUFNLFNBQUMsZ0NBQWdDO3dDQUN2QyxNQUFNLFNBQUMsc0NBQXNDO1lBaEJ6QywwQkFBMEI7WUFDMUIsb0NBQW9DO1lBRnBDLHlDQUF5Qzs7Ozs7Ozs7SUFlOUMsc0RBQXNCOzs7OztJQUN0Qiw2REFBaUY7O0lBQ2pGLGtFQUF5Rjs7SUFDekYsK0RBQWtEOztJQUNsRCx5RUFBc0U7O0lBQ3RFLDhFQUFnRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBvbGxvIH0gZnJvbSAnYXBvbGxvLWFuZ3VsYXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRG9jdW1lbnROb2RlIH0gZnJvbSAnZ3JhcGhxbCc7XG5cbmltcG9ydCB7IERhZmZRdWV1ZWRBcG9sbG8gfSBmcm9tICdAZGFmZm9kaWwvY29yZS9ncmFwaHFsJ1xuaW1wb3J0IHsgRGFmZkNhcnRBZGRyZXNzLCBEYWZmQ2FydCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7IERhZmZDYXJ0QmlsbGluZ0FkZHJlc3NTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyJztcblxuaW1wb3J0IHtcbiAgZ2V0QmlsbGluZ0FkZHJlc3MsXG4gIHVwZGF0ZUJpbGxpbmdBZGRyZXNzLFxuICB1cGRhdGVCaWxsaW5nQWRkcmVzc1dpdGhFbWFpbFxufSBmcm9tICcuL3F1ZXJpZXMvcHVibGljX2FwaSc7XG5pbXBvcnQge1xuICBNYWdlbnRvR2V0QmlsbGluZ0FkZHJlc3NSZXNwb25zZSxcbiAgTWFnZW50b1VwZGF0ZUJpbGxpbmdBZGRyZXNzUmVzcG9uc2UsXG4gIE1hZ2VudG9VcGRhdGVCaWxsaW5nQWRkcmVzc1dpdGhFbWFpbFJlc3BvbnNlXG59IGZyb20gJy4vcXVlcmllcy9yZXNwb25zZXMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0JpbGxpbmdBZGRyZXNzSW5wdXRUcmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3Jtcy9pbnB1dHMvYmlsbGluZy1hZGRyZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0VHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9CaWxsaW5nQWRkcmVzc1RyYW5zZm9ybWVyIH0gZnJvbSAnLi90cmFuc2Zvcm1zL291dHB1dHMvYmlsbGluZy1hZGRyZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgdHJhbnNmb3JtQ2FydE1hZ2VudG9FcnJvciB9IGZyb20gJy4vZXJyb3JzL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBEQUZGX0NBUlRfTUFHRU5UT19FWFRSQV9DQVJUX0ZSQUdNRU5UUyB9IGZyb20gJy4vaW5qZWN0aW9uLXRva2Vucy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERBRkZfTUFHRU5UT19DQVJUX01VVEFUSU9OX1FVRVVFIH0gZnJvbSAnLi9pbmplY3Rpb24tdG9rZW5zL2NhcnQtbXV0YXRpb24tcXVldWUudG9rZW4nO1xuXG4vKipcbiAqIEEgc2VydmljZSBmb3IgbWFraW5nIE1hZ2VudG8gR3JhcGhRTCBxdWVyaWVzIGZvciBjYXJ0cy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9DYXJ0QmlsbGluZ0FkZHJlc3NTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkNhcnRCaWxsaW5nQWRkcmVzc1NlcnZpY2VJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFwb2xsbzogQXBvbGxvLFxuICAgIEBJbmplY3QoREFGRl9NQUdFTlRPX0NBUlRfTVVUQVRJT05fUVVFVUUpIHByaXZhdGUgbXV0YXRpb25RdWV1ZTogRGFmZlF1ZXVlZEFwb2xsbyxcbiAgICBASW5qZWN0KERBRkZfQ0FSVF9NQUdFTlRPX0VYVFJBX0NBUlRfRlJBR01FTlRTKSBwdWJsaWMgZXh0cmFDYXJ0RnJhZ21lbnRzOiBEb2N1bWVudE5vZGVbXSxcbiAgICBwdWJsaWMgY2FydFRyYW5zZm9ybWVyOiBEYWZmTWFnZW50b0NhcnRUcmFuc2Zvcm1lcixcbiAgICBwdWJsaWMgYmlsbGluZ0FkZHJlc3NUcmFuc2Zvcm1lcjogRGFmZk1hZ2VudG9CaWxsaW5nQWRkcmVzc1RyYW5zZm9ybWVyLFxuICAgIHB1YmxpYyBiaWxsaW5nQWRkcmVzc0lucHV0VHJhbnNmb3JtZXI6IERhZmZNYWdlbnRvQmlsbGluZ0FkZHJlc3NJbnB1dFRyYW5zZm9ybWVyXG4gICkge31cblxuICBnZXQoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERhZmZDYXJ0QWRkcmVzcz4ge1xuICAgIHJldHVybiB0aGlzLmFwb2xsby5xdWVyeTxNYWdlbnRvR2V0QmlsbGluZ0FkZHJlc3NSZXNwb25zZT4oe1xuICAgICAgcXVlcnk6IGdldEJpbGxpbmdBZGRyZXNzKHRoaXMuZXh0cmFDYXJ0RnJhZ21lbnRzKSxcbiAgICAgIHZhcmlhYmxlczoge2NhcnRJZH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiByZXN1bHQuZGF0YS5jYXJ0LmJpbGxpbmdfYWRkcmVzc1xuICAgICAgICA/IHRoaXMuYmlsbGluZ0FkZHJlc3NUcmFuc2Zvcm1lci50cmFuc2Zvcm0oe1xuICAgICAgICAgIC4uLnJlc3VsdC5kYXRhLmNhcnQuYmlsbGluZ19hZGRyZXNzLFxuICAgICAgICAgIGVtYWlsOiByZXN1bHQuZGF0YS5jYXJ0LmVtYWlsXG4gICAgICAgIH0pXG4gICAgICAgIDogbnVsbFxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHVwZGF0ZShjYXJ0SWQ6IHN0cmluZywgYWRkcmVzczogUGFydGlhbDxEYWZmQ2FydEFkZHJlc3M+KTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiBhZGRyZXNzLmVtYWlsID8gdGhpcy51cGRhdGVBZGRyZXNzV2l0aEVtYWlsKGNhcnRJZCwgYWRkcmVzcykgOiB0aGlzLnVwZGF0ZUFkZHJlc3MoY2FydElkLCBhZGRyZXNzKVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVBZGRyZXNzKGNhcnRJZDogc3RyaW5nLCBhZGRyZXNzOiBQYXJ0aWFsPERhZmZDYXJ0QWRkcmVzcz4pOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25RdWV1ZS5tdXRhdGU8TWFnZW50b1VwZGF0ZUJpbGxpbmdBZGRyZXNzUmVzcG9uc2U+KHtcbiAgICAgIG11dGF0aW9uOiB1cGRhdGVCaWxsaW5nQWRkcmVzcyh0aGlzLmV4dHJhQ2FydEZyYWdtZW50cyksXG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgY2FydElkLFxuICAgICAgICBhZGRyZXNzOiB0aGlzLmJpbGxpbmdBZGRyZXNzSW5wdXRUcmFuc2Zvcm1lci50cmFuc2Zvcm0oYWRkcmVzcylcbiAgICAgIH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHJlc3AgPT4gdGhpcy5jYXJ0VHJhbnNmb3JtZXIudHJhbnNmb3JtKHJlc3AuZGF0YS5zZXRCaWxsaW5nQWRkcmVzc09uQ2FydC5jYXJ0KSksXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRocm93RXJyb3IodHJhbnNmb3JtQ2FydE1hZ2VudG9FcnJvcihlcnJvcikpKSxcbiAgICApXG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUFkZHJlc3NXaXRoRW1haWwoY2FydElkOiBzdHJpbmcsIGFkZHJlc3M6IFBhcnRpYWw8RGFmZkNhcnRBZGRyZXNzPik6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcbiAgICByZXR1cm4gdGhpcy5tdXRhdGlvblF1ZXVlLm11dGF0ZTxNYWdlbnRvVXBkYXRlQmlsbGluZ0FkZHJlc3NXaXRoRW1haWxSZXNwb25zZT4oe1xuICAgICAgbXV0YXRpb246IHVwZGF0ZUJpbGxpbmdBZGRyZXNzV2l0aEVtYWlsKHRoaXMuZXh0cmFDYXJ0RnJhZ21lbnRzKSxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIGVtYWlsOiBhZGRyZXNzLmVtYWlsLFxuICAgICAgICBhZGRyZXNzOiB0aGlzLmJpbGxpbmdBZGRyZXNzSW5wdXRUcmFuc2Zvcm1lci50cmFuc2Zvcm0oYWRkcmVzcylcbiAgICAgIH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHJlc3AgPT4gdGhpcy5jYXJ0VHJhbnNmb3JtZXIudHJhbnNmb3JtKHtcbiAgICAgICAgLi4ucmVzcC5kYXRhLnNldEJpbGxpbmdBZGRyZXNzT25DYXJ0LmNhcnQsXG4gICAgICAgIGVtYWlsOiByZXNwLmRhdGEuc2V0R3Vlc3RFbWFpbE9uQ2FydC5jYXJ0LmVtYWlsXG4gICAgICB9KSksXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRocm93RXJyb3IodHJhbnNmb3JtQ2FydE1hZ2VudG9FcnJvcihlcnJvcikpKSxcbiAgICApXG4gIH1cbn1cbiJdfQ==