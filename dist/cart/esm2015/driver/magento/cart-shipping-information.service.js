/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, switchMap } from 'rxjs/operators';
import { DaffQueuedApollo } from '@daffodil/core/graphql';
import { DaffMagentoCartShippingRateTransformer } from './transforms/outputs/cart-shipping-rate.service';
import { getSelectedShippingMethod, setSelectedShippingMethod, listShippingMethods } from './queries/public_api';
import { DaffMagentoShippingMethodInputTransformer } from './transforms/inputs/shipping-method.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';
import { DAFF_MAGENTO_CART_MUTATION_QUEUE } from './injection-tokens/cart-mutation-queue.token';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
import * as i2 from "./injection-tokens/cart-mutation-queue.token";
import * as i3 from "./injection-tokens/fragments/cart";
import * as i4 from "./transforms/outputs/cart.service";
import * as i5 from "./transforms/outputs/cart-shipping-rate.service";
import * as i6 from "./transforms/inputs/shipping-method.service";
/**
 * A service for making Magento GraphQL queries for carts.
 */
export class DaffMagentoCartShippingInformationService {
    /**
     * @param {?} apollo
     * @param {?} mutationQueue
     * @param {?} extraCartFragments
     * @param {?} cartTransformer
     * @param {?} shippingRateTransformer
     * @param {?} shippingMethodInputTransformer
     */
    constructor(apollo, mutationQueue, extraCartFragments, cartTransformer, shippingRateTransformer, shippingMethodInputTransformer) {
        this.apollo = apollo;
        this.mutationQueue = mutationQueue;
        this.extraCartFragments = extraCartFragments;
        this.cartTransformer = cartTransformer;
        this.shippingRateTransformer = shippingRateTransformer;
        this.shippingMethodInputTransformer = shippingMethodInputTransformer;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    get(cartId) {
        return this.apollo.query({
            query: getSelectedShippingMethod(this.extraCartFragments),
            variables: { cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => result.data.cart.shipping_addresses[0]
            ? this.shippingRateTransformer.transform(result.data.cart.shipping_addresses[0].selected_shipping_method)
            : null)));
    }
    /**
     * @param {?} cartId
     * @param {?} shippingInfo
     * @return {?}
     */
    update(cartId, shippingInfo) {
        return this.mutationQueue.mutate({
            mutation: setSelectedShippingMethod(this.extraCartFragments),
            variables: {
                cartId,
                method: this.shippingMethodInputTransformer.transform(shippingInfo)
            }
        }).pipe(switchMap((/**
         * @param {?} result
         * @return {?}
         */
        result => 
        // because Magento only returns the selected shipping method for the mutation
        // we have to manually refetch the available shipping methods
        // with fetchPolicy: 'network-only' in order to skip the cache
        this.apollo.query({
            query: listShippingMethods(this.extraCartFragments),
            variables: { cartId },
            fetchPolicy: 'network-only'
        }).pipe(map((/**
         * @param {?} shippingMethods
         * @return {?}
         */
        shippingMethods => (Object.assign({}, this.cartTransformer.transform(result.data.setShippingMethodsOnCart.cart), { available_shipping_methods: shippingMethods.data.cart.shipping_addresses[0].available_shipping_methods.map((/**
             * @param {?} item
             * @return {?}
             */
            item => this.shippingRateTransformer.transform(item))) }))))))));
    }
    /**
     * @param {?} cartId
     * @param {?=} id
     * @return {?}
     */
    delete(cartId, id) {
        return this.mutationQueue.mutate({
            mutation: setSelectedShippingMethod(this.extraCartFragments),
            variables: {
                cartId,
                method: {
                    carrier_code: '',
                    method_code: ''
                }
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.cartTransformer.transform(result.data.setShippingMethodsOnCart.cart))));
    }
}
DaffMagentoCartShippingInformationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartShippingInformationService.ctorParameters = () => [
    { type: Apollo },
    { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
    { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
    { type: DaffMagentoCartTransformer },
    { type: DaffMagentoCartShippingRateTransformer },
    { type: DaffMagentoShippingMethodInputTransformer }
];
/** @nocollapse */ DaffMagentoCartShippingInformationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartShippingInformationService_Factory() { return new DaffMagentoCartShippingInformationService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DAFF_MAGENTO_CART_MUTATION_QUEUE), i0.ɵɵinject(i3.DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), i0.ɵɵinject(i4.DaffMagentoCartTransformer), i0.ɵɵinject(i5.DaffMagentoCartShippingRateTransformer), i0.ɵɵinject(i6.DaffMagentoShippingMethodInputTransformer)); }, token: DaffMagentoCartShippingInformationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartShippingInformationService.prototype.apollo;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartShippingInformationService.prototype.mutationQueue;
    /** @type {?} */
    DaffMagentoCartShippingInformationService.prototype.extraCartFragments;
    /** @type {?} */
    DaffMagentoCartShippingInformationService.prototype.cartTransformer;
    /** @type {?} */
    DaffMagentoCartShippingInformationService.prototype.shippingRateTransformer;
    /** @type {?} */
    DaffMagentoCartShippingInformationService.prototype.shippingMethodInputTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJjYXJ0LXNoaXBwaW5nLWluZm9ybWF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBSXpELE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3pHLE9BQU8sRUFDTCx5QkFBeUIsRUFDekIseUJBQXlCLEVBQ3pCLG1CQUFtQixFQUNwQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3hHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRS9FLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7Ozs7Ozs7OztBQVFoRyxNQUFNLE9BQU8seUNBQXlDOzs7Ozs7Ozs7SUFDcEQsWUFDVSxNQUFjLEVBQzRCLGFBQStCLEVBQzFCLGtCQUFrQyxFQUNsRixlQUEyQyxFQUMzQyx1QkFBK0QsRUFDL0QsOEJBQXlFO1FBTHhFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDNEIsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQzFCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBZ0I7UUFDbEYsb0JBQWUsR0FBZixl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QUFzQztZQWZ6QywwQkFBMEI7WUFQMUIsc0NBQXNDO1lBTXRDLHlDQUF5Qzs7Ozs7Ozs7SUFjOUMsMkRBQXNCOzs7OztJQUN0QixrRUFBaUY7O0lBQ2pGLHVFQUF5Rjs7SUFDekYsb0VBQWtEOztJQUNsRCw0RUFBc0U7O0lBQ3RFLG1GQUFnRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBvbGxvIH0gZnJvbSAnYXBvbGxvLWFuZ3VsYXInO1xuaW1wb3J0IHsgRG9jdW1lbnROb2RlIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGFmZlF1ZXVlZEFwb2xsbyB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL2dyYXBocWwnXG5pbXBvcnQgeyBEYWZmQ2FydFNoaXBwaW5nUmF0ZSwgRGFmZkNhcnQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25TZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyJztcblxuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0U2hpcHBpbmdSYXRlVHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LXNoaXBwaW5nLXJhdGUuc2VydmljZSc7XG5pbXBvcnQge1xuICBnZXRTZWxlY3RlZFNoaXBwaW5nTWV0aG9kLFxuICBzZXRTZWxlY3RlZFNoaXBwaW5nTWV0aG9kLFxuICBsaXN0U2hpcHBpbmdNZXRob2RzXG59IGZyb20gJy4vcXVlcmllcy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERhZmZNYWdlbnRvU2hpcHBpbmdNZXRob2RJbnB1dFRyYW5zZm9ybWVyIH0gZnJvbSAnLi90cmFuc2Zvcm1zL2lucHV0cy9zaGlwcGluZy1tZXRob2Quc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhcnRUcmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3Jtcy9vdXRwdXRzL2NhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBNYWdlbnRvR2V0U2VsZWN0ZWRTaGlwcGluZ01ldGhvZFJlc3BvbnNlLCBNYWdlbnRvU2V0U2VsZWN0ZWRTaGlwcGluZ01ldGhvZFJlc3BvbnNlLCBNYWdlbnRvTGlzdFNoaXBwaW5nTWV0aG9kc1Jlc3BvbnNlIH0gZnJvbSAnLi9xdWVyaWVzL3Jlc3BvbnNlcy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERBRkZfQ0FSVF9NQUdFTlRPX0VYVFJBX0NBUlRfRlJBR01FTlRTIH0gZnJvbSAnLi9pbmplY3Rpb24tdG9rZW5zL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgREFGRl9NQUdFTlRPX0NBUlRfTVVUQVRJT05fUVVFVUUgfSBmcm9tICcuL2luamVjdGlvbi10b2tlbnMvY2FydC1tdXRhdGlvbi1xdWV1ZS50b2tlbic7XG5cbi8qKlxuICogQSBzZXJ2aWNlIGZvciBtYWtpbmcgTWFnZW50byBHcmFwaFFMIHF1ZXJpZXMgZm9yIGNhcnRzLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmTWFnZW50b0NhcnRTaGlwcGluZ0luZm9ybWF0aW9uU2VydmljZSBpbXBsZW1lbnRzIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblNlcnZpY2VJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFwb2xsbzogQXBvbGxvLFxuICAgIEBJbmplY3QoREFGRl9NQUdFTlRPX0NBUlRfTVVUQVRJT05fUVVFVUUpIHByaXZhdGUgbXV0YXRpb25RdWV1ZTogRGFmZlF1ZXVlZEFwb2xsbyxcbiAgICBASW5qZWN0KERBRkZfQ0FSVF9NQUdFTlRPX0VYVFJBX0NBUlRfRlJBR01FTlRTKSBwdWJsaWMgZXh0cmFDYXJ0RnJhZ21lbnRzOiBEb2N1bWVudE5vZGVbXSxcbiAgICBwdWJsaWMgY2FydFRyYW5zZm9ybWVyOiBEYWZmTWFnZW50b0NhcnRUcmFuc2Zvcm1lcixcbiAgICBwdWJsaWMgc2hpcHBpbmdSYXRlVHJhbnNmb3JtZXI6IERhZmZNYWdlbnRvQ2FydFNoaXBwaW5nUmF0ZVRyYW5zZm9ybWVyLFxuICAgIHB1YmxpYyBzaGlwcGluZ01ldGhvZElucHV0VHJhbnNmb3JtZXI6IERhZmZNYWdlbnRvU2hpcHBpbmdNZXRob2RJbnB1dFRyYW5zZm9ybWVyLFxuICApIHt9XG5cbiAgZ2V0KGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxEYWZmQ2FydFNoaXBwaW5nUmF0ZT4ge1xuICAgIHJldHVybiB0aGlzLmFwb2xsby5xdWVyeTxNYWdlbnRvR2V0U2VsZWN0ZWRTaGlwcGluZ01ldGhvZFJlc3BvbnNlPih7XG4gICAgICBxdWVyeTogZ2V0U2VsZWN0ZWRTaGlwcGluZ01ldGhvZCh0aGlzLmV4dHJhQ2FydEZyYWdtZW50cyksXG4gICAgICB2YXJpYWJsZXM6IHtjYXJ0SWR9XG4gICAgfSkucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4gcmVzdWx0LmRhdGEuY2FydC5zaGlwcGluZ19hZGRyZXNzZXNbMF1cbiAgICAgICAgPyB0aGlzLnNoaXBwaW5nUmF0ZVRyYW5zZm9ybWVyLnRyYW5zZm9ybShyZXN1bHQuZGF0YS5jYXJ0LnNoaXBwaW5nX2FkZHJlc3Nlc1swXS5zZWxlY3RlZF9zaGlwcGluZ19tZXRob2QpXG4gICAgICAgIDogbnVsbFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICB1cGRhdGUoY2FydElkOiBzdHJpbmcsIHNoaXBwaW5nSW5mbzogUGFydGlhbDxEYWZmQ2FydFNoaXBwaW5nUmF0ZT4pOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25RdWV1ZS5tdXRhdGU8TWFnZW50b1NldFNlbGVjdGVkU2hpcHBpbmdNZXRob2RSZXNwb25zZT4oe1xuICAgICAgbXV0YXRpb246IHNldFNlbGVjdGVkU2hpcHBpbmdNZXRob2QodGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgbWV0aG9kOiB0aGlzLnNoaXBwaW5nTWV0aG9kSW5wdXRUcmFuc2Zvcm1lci50cmFuc2Zvcm0oc2hpcHBpbmdJbmZvKVxuICAgICAgfVxuICAgIH0pLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAocmVzdWx0ID0+XG4gICAgICAgIC8vIGJlY2F1c2UgTWFnZW50byBvbmx5IHJldHVybnMgdGhlIHNlbGVjdGVkIHNoaXBwaW5nIG1ldGhvZCBmb3IgdGhlIG11dGF0aW9uXG4gICAgICAgIC8vIHdlIGhhdmUgdG8gbWFudWFsbHkgcmVmZXRjaCB0aGUgYXZhaWxhYmxlIHNoaXBwaW5nIG1ldGhvZHNcbiAgICAgICAgLy8gd2l0aCBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seScgaW4gb3JkZXIgdG8gc2tpcCB0aGUgY2FjaGVcbiAgICAgICAgdGhpcy5hcG9sbG8ucXVlcnk8TWFnZW50b0xpc3RTaGlwcGluZ01ldGhvZHNSZXNwb25zZT4oe1xuICAgICAgICAgIHF1ZXJ5OiBsaXN0U2hpcHBpbmdNZXRob2RzKHRoaXMuZXh0cmFDYXJ0RnJhZ21lbnRzKSxcbiAgICAgICAgICB2YXJpYWJsZXM6IHtjYXJ0SWR9LFxuICAgICAgICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5J1xuICAgICAgICB9KS5waXBlKFxuICAgICAgICAgIG1hcChzaGlwcGluZ01ldGhvZHMgPT4gKHtcbiAgICAgICAgICAgIC4uLnRoaXMuY2FydFRyYW5zZm9ybWVyLnRyYW5zZm9ybShyZXN1bHQuZGF0YS5zZXRTaGlwcGluZ01ldGhvZHNPbkNhcnQuY2FydCksXG4gICAgICAgICAgICBhdmFpbGFibGVfc2hpcHBpbmdfbWV0aG9kczogc2hpcHBpbmdNZXRob2RzLmRhdGEuY2FydC5zaGlwcGluZ19hZGRyZXNzZXNbMF0uYXZhaWxhYmxlX3NoaXBwaW5nX21ldGhvZHMubWFwKGl0ZW0gPT5cbiAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1JhdGVUcmFuc2Zvcm1lci50cmFuc2Zvcm0oaXRlbSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIGRlbGV0ZShjYXJ0SWQ6IHN0cmluZywgaWQ/OiBzdHJpbmcgfCBudW1iZXIpOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25RdWV1ZS5tdXRhdGU8TWFnZW50b1NldFNlbGVjdGVkU2hpcHBpbmdNZXRob2RSZXNwb25zZT4oe1xuICAgICAgbXV0YXRpb246IHNldFNlbGVjdGVkU2hpcHBpbmdNZXRob2QodGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgbWV0aG9kOiB7XG4gICAgICAgICAgY2Fycmllcl9jb2RlOiAnJyxcbiAgICAgICAgICBtZXRob2RfY29kZTogJydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+IHRoaXMuY2FydFRyYW5zZm9ybWVyLnRyYW5zZm9ybShyZXN1bHQuZGF0YS5zZXRTaGlwcGluZ01ldGhvZHNPbkNhcnQuY2FydCkpXG4gICAgKVxuICB9XG59XG4iXX0=