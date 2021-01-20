/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { DaffQueuedApollo } from '@daffodil/core/graphql';
import { updateAddress, updateAddressWithEmail, } from './queries/public_api';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffMagentoShippingAddressTransformer } from './transforms/outputs/shipping-address.service';
import { transformCartMagentoError } from './errors/transform';
import { DaffMagentoCartAddressInputTransformer } from './transforms/inputs/cart-address.service';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';
import { DAFF_MAGENTO_CART_MUTATION_QUEUE } from './injection-tokens/cart-mutation-queue.token';
import * as i0 from "@angular/core";
import * as i1 from "./injection-tokens/cart-mutation-queue.token";
import * as i2 from "./injection-tokens/fragments/cart";
import * as i3 from "./transforms/outputs/cart.service";
import * as i4 from "./transforms/outputs/shipping-address.service";
import * as i5 from "./transforms/inputs/cart-address.service";
/**
 * A service for making Magento GraphQL queries for carts.
 */
export class DaffMagentoCartAddressService {
    /**
     * @param {?} mutationQueue
     * @param {?} extraCartFragments
     * @param {?} cartTransformer
     * @param {?} cartAddressTransformer
     * @param {?} cartAddressInputTransformer
     */
    constructor(mutationQueue, extraCartFragments, cartTransformer, cartAddressTransformer, cartAddressInputTransformer) {
        this.mutationQueue = mutationQueue;
        this.extraCartFragments = extraCartFragments;
        this.cartTransformer = cartTransformer;
        this.cartAddressTransformer = cartAddressTransformer;
        this.cartAddressInputTransformer = cartAddressInputTransformer;
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
            mutation: updateAddress(this.extraCartFragments),
            variables: {
                cartId,
                address: this.cartAddressInputTransformer.transform(address)
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
            mutation: updateAddressWithEmail(this.extraCartFragments),
            variables: {
                cartId,
                email: address.email,
                address: this.cartAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => this.cartTransformer.transform(resp.data.setGuestEmailOnCart.cart))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => throwError(transformCartMagentoError(error)))));
    }
}
DaffMagentoCartAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartAddressService.ctorParameters = () => [
    { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
    { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
    { type: DaffMagentoCartTransformer },
    { type: DaffMagentoShippingAddressTransformer },
    { type: DaffMagentoCartAddressInputTransformer }
];
/** @nocollapse */ DaffMagentoCartAddressService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartAddressService_Factory() { return new DaffMagentoCartAddressService(i0.ɵɵinject(i1.DAFF_MAGENTO_CART_MUTATION_QUEUE), i0.ɵɵinject(i2.DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), i0.ɵɵinject(i3.DaffMagentoCartTransformer), i0.ɵɵinject(i4.DaffMagentoShippingAddressTransformer), i0.ɵɵinject(i5.DaffMagentoCartAddressInputTransformer)); }, token: DaffMagentoCartAddressService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartAddressService.prototype.mutationQueue;
    /** @type {?} */
    DaffMagentoCartAddressService.prototype.extraCartFragments;
    /** @type {?} */
    DaffMagentoCartAddressService.prototype.cartTransformer;
    /** @type {?} */
    DaffMagentoCartAddressService.prototype.cartAddressTransformer;
    /** @type {?} */
    DaffMagentoCartAddressService.prototype.cartAddressInputTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbImNhcnQtYWRkcmVzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFJekQsT0FBTyxFQUNMLGFBQWEsRUFDYixzQkFBc0IsR0FDdkIsTUFBTSxzQkFBc0IsQ0FBQztBQUs5QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNsRyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7Ozs7Ozs7OztBQVFoRyxNQUFNLE9BQU8sNkJBQTZCOzs7Ozs7OztJQUN4QyxZQUNvRCxhQUErQixFQUMxQixrQkFBa0MsRUFDbEYsZUFBMkMsRUFDM0Msc0JBQTZELEVBQzdELDJCQUFtRTtRQUp4QixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDMUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFnQjtRQUNsRixvQkFBZSxHQUFmLGVBQWUsQ0FBNEI7UUFDM0MsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF1QztRQUM3RCxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQXdDO0lBQ3pFLENBQUM7Ozs7OztJQUVKLE1BQU0sQ0FBQyxNQUFjLEVBQUUsT0FBaUM7UUFDdEQsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUMzRyxDQUFDOzs7Ozs7O0lBRU8sYUFBYSxDQUFDLE1BQWMsRUFBRSxPQUFpQztRQUNyRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUErQjtZQUM3RCxRQUFRLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUNoRCxTQUFTLEVBQUU7Z0JBQ1QsTUFBTTtnQkFDTixPQUFPLEVBQUUsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7YUFDN0Q7U0FDRixDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFDdEYsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FDbEUsQ0FBQTtJQUNILENBQUM7Ozs7Ozs7SUFFTyxzQkFBc0IsQ0FBQyxNQUFjLEVBQUUsT0FBaUM7UUFDOUUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBd0M7WUFDdEUsUUFBUSxFQUFFLHNCQUFzQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUN6RCxTQUFTLEVBQUU7Z0JBQ1QsTUFBTTtnQkFDTixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7Z0JBQ3BCLE9BQU8sRUFBRSxJQUFJLENBQUMsMkJBQTJCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQzthQUM3RDtTQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUMvRSxVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUNsRSxDQUFBO0lBQ0gsQ0FBQzs7O1lBekNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQXhCUSxnQkFBZ0IsdUJBMkJwQixNQUFNLFNBQUMsZ0NBQWdDO3dDQUN2QyxNQUFNLFNBQUMsc0NBQXNDO1lBaEJ6QywwQkFBMEI7WUFDMUIscUNBQXFDO1lBRXJDLHNDQUFzQzs7Ozs7Ozs7SUFZM0Msc0RBQWlGOztJQUNqRiwyREFBeUY7O0lBQ3pGLHdEQUFrRDs7SUFDbEQsK0RBQW9FOztJQUNwRSxvRUFBMEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xuXG5pbXBvcnQgeyBEYWZmUXVldWVkQXBvbGxvIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvZ3JhcGhxbCdcbmltcG9ydCB7IERhZmZDYXJ0QWRkcmVzcywgRGFmZkNhcnQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmQ2FydEFkZHJlc3NTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyJztcblxuaW1wb3J0IHtcbiAgdXBkYXRlQWRkcmVzcyxcbiAgdXBkYXRlQWRkcmVzc1dpdGhFbWFpbCxcbn0gZnJvbSAnLi9xdWVyaWVzL3B1YmxpY19hcGknO1xuaW1wb3J0IHtcbiAgTWFnZW50b1VwZGF0ZUFkZHJlc3NSZXNwb25zZSxcbiAgTWFnZW50b1VwZGF0ZUFkZHJlc3NXaXRoRW1haWxSZXNwb25zZSxcbn0gZnJvbSAnLi9xdWVyaWVzL3Jlc3BvbnNlcy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydFRyYW5zZm9ybWVyIH0gZnJvbSAnLi90cmFuc2Zvcm1zL291dHB1dHMvY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvU2hpcHBpbmdBZGRyZXNzVHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvb3V0cHV0cy9zaGlwcGluZy1hZGRyZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgdHJhbnNmb3JtQ2FydE1hZ2VudG9FcnJvciB9IGZyb20gJy4vZXJyb3JzL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhcnRBZGRyZXNzSW5wdXRUcmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3Jtcy9pbnB1dHMvY2FydC1hZGRyZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgREFGRl9DQVJUX01BR0VOVE9fRVhUUkFfQ0FSVF9GUkFHTUVOVFMgfSBmcm9tICcuL2luamVjdGlvbi10b2tlbnMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEQUZGX01BR0VOVE9fQ0FSVF9NVVRBVElPTl9RVUVVRSB9IGZyb20gJy4vaW5qZWN0aW9uLXRva2Vucy9jYXJ0LW11dGF0aW9uLXF1ZXVlLnRva2VuJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgZm9yIG1ha2luZyBNYWdlbnRvIEdyYXBoUUwgcXVlcmllcyBmb3IgY2FydHMuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZNYWdlbnRvQ2FydEFkZHJlc3NTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkNhcnRBZGRyZXNzU2VydmljZUludGVyZmFjZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoREFGRl9NQUdFTlRPX0NBUlRfTVVUQVRJT05fUVVFVUUpIHByaXZhdGUgbXV0YXRpb25RdWV1ZTogRGFmZlF1ZXVlZEFwb2xsbyxcbiAgICBASW5qZWN0KERBRkZfQ0FSVF9NQUdFTlRPX0VYVFJBX0NBUlRfRlJBR01FTlRTKSBwdWJsaWMgZXh0cmFDYXJ0RnJhZ21lbnRzOiBEb2N1bWVudE5vZGVbXSxcbiAgICBwdWJsaWMgY2FydFRyYW5zZm9ybWVyOiBEYWZmTWFnZW50b0NhcnRUcmFuc2Zvcm1lcixcbiAgICBwdWJsaWMgY2FydEFkZHJlc3NUcmFuc2Zvcm1lcjogRGFmZk1hZ2VudG9TaGlwcGluZ0FkZHJlc3NUcmFuc2Zvcm1lcixcbiAgICBwdWJsaWMgY2FydEFkZHJlc3NJbnB1dFRyYW5zZm9ybWVyOiBEYWZmTWFnZW50b0NhcnRBZGRyZXNzSW5wdXRUcmFuc2Zvcm1lcixcbiAgKSB7fVxuXG4gIHVwZGF0ZShjYXJ0SWQ6IHN0cmluZywgYWRkcmVzczogUGFydGlhbDxEYWZmQ2FydEFkZHJlc3M+KTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiBhZGRyZXNzLmVtYWlsID8gdGhpcy51cGRhdGVBZGRyZXNzV2l0aEVtYWlsKGNhcnRJZCwgYWRkcmVzcykgOiB0aGlzLnVwZGF0ZUFkZHJlc3MoY2FydElkLCBhZGRyZXNzKVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVBZGRyZXNzKGNhcnRJZDogc3RyaW5nLCBhZGRyZXNzOiBQYXJ0aWFsPERhZmZDYXJ0QWRkcmVzcz4pOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25RdWV1ZS5tdXRhdGU8TWFnZW50b1VwZGF0ZUFkZHJlc3NSZXNwb25zZT4oe1xuICAgICAgbXV0YXRpb246IHVwZGF0ZUFkZHJlc3ModGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgYWRkcmVzczogdGhpcy5jYXJ0QWRkcmVzc0lucHV0VHJhbnNmb3JtZXIudHJhbnNmb3JtKGFkZHJlc3MpXG4gICAgICB9XG4gICAgfSkucGlwZShcbiAgICAgIG1hcChyZXNwID0+IHRoaXMuY2FydFRyYW5zZm9ybWVyLnRyYW5zZm9ybShyZXNwLmRhdGEuc2V0U2hpcHBpbmdBZGRyZXNzZXNPbkNhcnQuY2FydCkpLFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB0aHJvd0Vycm9yKHRyYW5zZm9ybUNhcnRNYWdlbnRvRXJyb3IoZXJyb3IpKSksXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVBZGRyZXNzV2l0aEVtYWlsKGNhcnRJZDogc3RyaW5nLCBhZGRyZXNzOiBQYXJ0aWFsPERhZmZDYXJ0QWRkcmVzcz4pOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25RdWV1ZS5tdXRhdGU8TWFnZW50b1VwZGF0ZUFkZHJlc3NXaXRoRW1haWxSZXNwb25zZT4oe1xuICAgICAgbXV0YXRpb246IHVwZGF0ZUFkZHJlc3NXaXRoRW1haWwodGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgZW1haWw6IGFkZHJlc3MuZW1haWwsXG4gICAgICAgIGFkZHJlc3M6IHRoaXMuY2FydEFkZHJlc3NJbnB1dFRyYW5zZm9ybWVyLnRyYW5zZm9ybShhZGRyZXNzKVxuICAgICAgfVxuICAgIH0pLnBpcGUoXG4gICAgICBtYXAocmVzcCA9PiB0aGlzLmNhcnRUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzcC5kYXRhLnNldEd1ZXN0RW1haWxPbkNhcnQuY2FydCkpLFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB0aHJvd0Vycm9yKHRyYW5zZm9ybUNhcnRNYWdlbnRvRXJyb3IoZXJyb3IpKSksXG4gICAgKVxuICB9XG59XG4iXX0=