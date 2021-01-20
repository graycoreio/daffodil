/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class DaffMagentoCartShippingAddressService {
    /**
     * @param {?} apollo
     * @param {?} mutationQueue
     * @param {?} extraCartFragments
     * @param {?} cartTransformer
     * @param {?} shippingAddressTransformer
     * @param {?} shippingAddressInputTransformer
     */
    constructor(apollo, mutationQueue, extraCartFragments, cartTransformer, shippingAddressTransformer, shippingAddressInputTransformer) {
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
    get(cartId) {
        return this.apollo.query({
            query: getShippingAddress(this.extraCartFragments),
            variables: { cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => result.data.cart.shipping_addresses[0]
            ? this.shippingAddressTransformer.transform(Object.assign({}, result.data.cart.shipping_addresses[0], { email: result.data.cart.email }))
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
            mutation: updateShippingAddress(this.extraCartFragments),
            variables: {
                cartId,
                address: this.shippingAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => this.cartTransformer.transform(resp.data.setShippingAddressesOnCart.cart))), catchError((/**
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
            mutation: updateShippingAddressWithEmail(this.extraCartFragments),
            variables: {
                cartId,
                email: address.email,
                address: this.shippingAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => this.cartTransformer.transform(Object.assign({}, resp.data.setShippingAddressesOnCart.cart, { email: resp.data.setGuestEmailOnCart.cart.email })))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => throwError(transformCartMagentoError(error)))));
    }
}
DaffMagentoCartShippingAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartShippingAddressService.ctorParameters = () => [
    { type: Apollo },
    { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
    { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
    { type: DaffMagentoCartTransformer },
    { type: DaffMagentoShippingAddressTransformer },
    { type: DaffMagentoShippingAddressInputTransformer }
];
/** @nocollapse */ DaffMagentoCartShippingAddressService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartShippingAddressService_Factory() { return new DaffMagentoCartShippingAddressService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DAFF_MAGENTO_CART_MUTATION_QUEUE), i0.ɵɵinject(i3.DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), i0.ɵɵinject(i4.DaffMagentoCartTransformer), i0.ɵɵinject(i5.DaffMagentoShippingAddressTransformer), i0.ɵɵinject(i6.DaffMagentoShippingAddressInputTransformer)); }, token: DaffMagentoCartShippingAddressService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbImNhcnQtc2hpcHBpbmctYWRkcmVzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBSXpELE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIscUJBQXFCLEVBQ3JCLDhCQUE4QixHQUMvQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzFHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBTXRHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7Ozs7Ozs7OztBQVFoRyxNQUFNLE9BQU8scUNBQXFDOzs7Ozs7Ozs7SUFDaEQsWUFDVSxNQUFjLEVBQzRCLGFBQStCLEVBQzFCLGtCQUFrQyxFQUNsRixlQUEyQyxFQUMzQywwQkFBaUUsRUFDakUsK0JBQTJFO1FBTDFFLFdBQU0sR0FBTixNQUFNLENBQVE7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QyxFQUFDLENBQ2xFLENBQUE7SUFDSCxDQUFDOzs7WUE1REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBL0JRLE1BQU07WUFLTixnQkFBZ0IsdUJBOEJwQixNQUFNLFNBQUMsZ0NBQWdDO3dDQUN2QyxNQUFNLFNBQUMsc0NBQXNDO1lBckJ6QywwQkFBMEI7WUFDMUIscUNBQXFDO1lBRnJDLDBDQUEwQzs7Ozs7Ozs7SUFvQi9DLHVEQUFzQjs7Ozs7SUFDdEIsOERBQWlGOztJQUNqRixtRUFBeUY7O0lBQ3pGLGdFQUFrRDs7SUFDbEQsMkVBQXdFOztJQUN4RSxnRkFBa0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwb2xsbyB9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xuXG5pbXBvcnQgeyBEYWZmUXVldWVkQXBvbGxvIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvZ3JhcGhxbCdcbmltcG9ydCB7IERhZmZDYXJ0QWRkcmVzcywgRGFmZkNhcnQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc1NlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5pbXBvcnQge1xuICBnZXRTaGlwcGluZ0FkZHJlc3MsXG4gIHVwZGF0ZVNoaXBwaW5nQWRkcmVzcyxcbiAgdXBkYXRlU2hpcHBpbmdBZGRyZXNzV2l0aEVtYWlsLFxufSBmcm9tICcuL3F1ZXJpZXMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b1NoaXBwaW5nQWRkcmVzc0lucHV0VHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvaW5wdXRzL3NoaXBwaW5nLWFkZHJlc3Muc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhcnRUcmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3Jtcy9vdXRwdXRzL2NhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b1NoaXBwaW5nQWRkcmVzc1RyYW5zZm9ybWVyIH0gZnJvbSAnLi90cmFuc2Zvcm1zL291dHB1dHMvc2hpcHBpbmctYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIE1hZ2VudG9HZXRTaGlwcGluZ0FkZHJlc3NSZXNwb25zZSxcbiAgTWFnZW50b1VwZGF0ZVNoaXBwaW5nQWRkcmVzc1Jlc3BvbnNlLFxuICBNYWdlbnRvVXBkYXRlU2hpcHBpbmdBZGRyZXNzV2l0aEVtYWlsUmVzcG9uc2UsXG59IGZyb20gJy4vcXVlcmllcy9yZXNwb25zZXMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyB0cmFuc2Zvcm1DYXJ0TWFnZW50b0Vycm9yIH0gZnJvbSAnLi9lcnJvcnMvdHJhbnNmb3JtJztcbmltcG9ydCB7IERBRkZfQ0FSVF9NQUdFTlRPX0VYVFJBX0NBUlRfRlJBR01FTlRTIH0gZnJvbSAnLi9pbmplY3Rpb24tdG9rZW5zL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgREFGRl9NQUdFTlRPX0NBUlRfTVVUQVRJT05fUVVFVUUgfSBmcm9tICcuL2luamVjdGlvbi10b2tlbnMvY2FydC1tdXRhdGlvbi1xdWV1ZS50b2tlbic7XG5cbi8qKlxuICogQSBzZXJ2aWNlIGZvciBtYWtpbmcgTWFnZW50byBHcmFwaFFMIHF1ZXJpZXMgZm9yIGEgY2FydCdzIHNoaXBwaW5nIGFkZHJlc3MuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZNYWdlbnRvQ2FydFNoaXBwaW5nQWRkcmVzc1NlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydFNoaXBwaW5nQWRkcmVzc1NlcnZpY2VJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFwb2xsbzogQXBvbGxvLFxuICAgIEBJbmplY3QoREFGRl9NQUdFTlRPX0NBUlRfTVVUQVRJT05fUVVFVUUpIHByaXZhdGUgbXV0YXRpb25RdWV1ZTogRGFmZlF1ZXVlZEFwb2xsbyxcbiAgICBASW5qZWN0KERBRkZfQ0FSVF9NQUdFTlRPX0VYVFJBX0NBUlRfRlJBR01FTlRTKSBwdWJsaWMgZXh0cmFDYXJ0RnJhZ21lbnRzOiBEb2N1bWVudE5vZGVbXSxcbiAgICBwdWJsaWMgY2FydFRyYW5zZm9ybWVyOiBEYWZmTWFnZW50b0NhcnRUcmFuc2Zvcm1lcixcbiAgICBwdWJsaWMgc2hpcHBpbmdBZGRyZXNzVHJhbnNmb3JtZXI6IERhZmZNYWdlbnRvU2hpcHBpbmdBZGRyZXNzVHJhbnNmb3JtZXIsXG4gICAgcHVibGljIHNoaXBwaW5nQWRkcmVzc0lucHV0VHJhbnNmb3JtZXI6IERhZmZNYWdlbnRvU2hpcHBpbmdBZGRyZXNzSW5wdXRUcmFuc2Zvcm1lclxuICApIHt9XG5cbiAgZ2V0KGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxEYWZmQ2FydEFkZHJlc3M+IHtcbiAgICByZXR1cm4gdGhpcy5hcG9sbG8ucXVlcnk8TWFnZW50b0dldFNoaXBwaW5nQWRkcmVzc1Jlc3BvbnNlPih7XG4gICAgICBxdWVyeTogZ2V0U2hpcHBpbmdBZGRyZXNzKHRoaXMuZXh0cmFDYXJ0RnJhZ21lbnRzKSxcbiAgICAgIHZhcmlhYmxlczoge2NhcnRJZH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiByZXN1bHQuZGF0YS5jYXJ0LnNoaXBwaW5nX2FkZHJlc3Nlc1swXVxuICAgICAgICA/IHRoaXMuc2hpcHBpbmdBZGRyZXNzVHJhbnNmb3JtZXIudHJhbnNmb3JtKHtcbiAgICAgICAgICAuLi5yZXN1bHQuZGF0YS5jYXJ0LnNoaXBwaW5nX2FkZHJlc3Nlc1swXSxcbiAgICAgICAgICBlbWFpbDogcmVzdWx0LmRhdGEuY2FydC5lbWFpbFxuICAgICAgICB9KVxuICAgICAgICA6IG51bGxcbiAgICAgIClcbiAgICApXG4gIH1cblxuICB1cGRhdGUoY2FydElkOiBzdHJpbmcsIGFkZHJlc3M6IFBhcnRpYWw8RGFmZkNhcnRBZGRyZXNzPik6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcbiAgICByZXR1cm4gYWRkcmVzcy5lbWFpbCA/IHRoaXMudXBkYXRlQWRkcmVzc1dpdGhFbWFpbChjYXJ0SWQsIGFkZHJlc3MpIDogdGhpcy51cGRhdGVBZGRyZXNzKGNhcnRJZCwgYWRkcmVzcylcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQWRkcmVzcyhjYXJ0SWQ6IHN0cmluZywgYWRkcmVzczogUGFydGlhbDxEYWZmQ2FydEFkZHJlc3M+KTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiB0aGlzLm11dGF0aW9uUXVldWUubXV0YXRlPE1hZ2VudG9VcGRhdGVTaGlwcGluZ0FkZHJlc3NSZXNwb25zZT4oe1xuICAgICAgbXV0YXRpb246IHVwZGF0ZVNoaXBwaW5nQWRkcmVzcyh0aGlzLmV4dHJhQ2FydEZyYWdtZW50cyksXG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgY2FydElkLFxuICAgICAgICBhZGRyZXNzOiB0aGlzLnNoaXBwaW5nQWRkcmVzc0lucHV0VHJhbnNmb3JtZXIudHJhbnNmb3JtKGFkZHJlc3MpXG4gICAgICB9XG4gICAgfSkucGlwZShcbiAgICAgIG1hcChyZXNwID0+IHRoaXMuY2FydFRyYW5zZm9ybWVyLnRyYW5zZm9ybShyZXNwLmRhdGEuc2V0U2hpcHBpbmdBZGRyZXNzZXNPbkNhcnQuY2FydCkpLFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB0aHJvd0Vycm9yKHRyYW5zZm9ybUNhcnRNYWdlbnRvRXJyb3IoZXJyb3IpKSksXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVBZGRyZXNzV2l0aEVtYWlsKGNhcnRJZDogc3RyaW5nLCBhZGRyZXNzOiBQYXJ0aWFsPERhZmZDYXJ0QWRkcmVzcz4pOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25RdWV1ZS5tdXRhdGU8TWFnZW50b1VwZGF0ZVNoaXBwaW5nQWRkcmVzc1dpdGhFbWFpbFJlc3BvbnNlPih7XG4gICAgICBtdXRhdGlvbjogdXBkYXRlU2hpcHBpbmdBZGRyZXNzV2l0aEVtYWlsKHRoaXMuZXh0cmFDYXJ0RnJhZ21lbnRzKSxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIGVtYWlsOiBhZGRyZXNzLmVtYWlsLFxuICAgICAgICBhZGRyZXNzOiB0aGlzLnNoaXBwaW5nQWRkcmVzc0lucHV0VHJhbnNmb3JtZXIudHJhbnNmb3JtKGFkZHJlc3MpXG4gICAgICB9XG4gICAgfSkucGlwZShcbiAgICAgIG1hcChyZXNwID0+IHRoaXMuY2FydFRyYW5zZm9ybWVyLnRyYW5zZm9ybSh7XG4gICAgICAgIC4uLnJlc3AuZGF0YS5zZXRTaGlwcGluZ0FkZHJlc3Nlc09uQ2FydC5jYXJ0LFxuICAgICAgICBlbWFpbDogcmVzcC5kYXRhLnNldEd1ZXN0RW1haWxPbkNhcnQuY2FydC5lbWFpbFxuICAgICAgfSkpLFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB0aHJvd0Vycm9yKHRyYW5zZm9ybUNhcnRNYWdlbnRvRXJyb3IoZXJyb3IpKSksXG4gICAgKVxuICB9XG59XG4iXX0=