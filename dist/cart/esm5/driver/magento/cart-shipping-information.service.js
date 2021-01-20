/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var DaffMagentoCartShippingInformationService = /** @class */ (function () {
    function DaffMagentoCartShippingInformationService(apollo, mutationQueue, extraCartFragments, cartTransformer, shippingRateTransformer, shippingMethodInputTransformer) {
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
    DaffMagentoCartShippingInformationService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        var _this = this;
        return this.apollo.query({
            query: getSelectedShippingMethod(this.extraCartFragments),
            variables: { cartId: cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.data.cart.shipping_addresses[0]
            ? _this.shippingRateTransformer.transform(result.data.cart.shipping_addresses[0].selected_shipping_method)
            : null; })));
    };
    /**
     * @param {?} cartId
     * @param {?} shippingInfo
     * @return {?}
     */
    DaffMagentoCartShippingInformationService.prototype.update = /**
     * @param {?} cartId
     * @param {?} shippingInfo
     * @return {?}
     */
    function (cartId, shippingInfo) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: setSelectedShippingMethod(this.extraCartFragments),
            variables: {
                cartId: cartId,
                method: this.shippingMethodInputTransformer.transform(shippingInfo)
            }
        }).pipe(switchMap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            // because Magento only returns the selected shipping method for the mutation
            // we have to manually refetch the available shipping methods
            // with fetchPolicy: 'network-only' in order to skip the cache
            return _this.apollo.query({
                query: listShippingMethods(_this.extraCartFragments),
                variables: { cartId: cartId },
                fetchPolicy: 'network-only'
            }).pipe(map((/**
             * @param {?} shippingMethods
             * @return {?}
             */
            function (shippingMethods) { return (tslib_1.__assign({}, _this.cartTransformer.transform(result.data.setShippingMethodsOnCart.cart), { available_shipping_methods: shippingMethods.data.cart.shipping_addresses[0].available_shipping_methods.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    return _this.shippingRateTransformer.transform(item);
                })) })); })));
        })));
    };
    /**
     * @param {?} cartId
     * @param {?=} id
     * @return {?}
     */
    DaffMagentoCartShippingInformationService.prototype.delete = /**
     * @param {?} cartId
     * @param {?=} id
     * @return {?}
     */
    function (cartId, id) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: setSelectedShippingMethod(this.extraCartFragments),
            variables: {
                cartId: cartId,
                method: {
                    carrier_code: '',
                    method_code: ''
                }
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.cartTransformer.transform(result.data.setShippingMethodsOnCart.cart); })));
    };
    DaffMagentoCartShippingInformationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartShippingInformationService.ctorParameters = function () { return [
        { type: Apollo },
        { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
        { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
        { type: DaffMagentoCartTransformer },
        { type: DaffMagentoCartShippingRateTransformer },
        { type: DaffMagentoShippingMethodInputTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoCartShippingInformationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartShippingInformationService_Factory() { return new DaffMagentoCartShippingInformationService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DAFF_MAGENTO_CART_MUTATION_QUEUE), i0.ɵɵinject(i3.DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), i0.ɵɵinject(i4.DaffMagentoCartTransformer), i0.ɵɵinject(i5.DaffMagentoCartShippingRateTransformer), i0.ɵɵinject(i6.DaffMagentoShippingMethodInputTransformer)); }, token: DaffMagentoCartShippingInformationService, providedIn: "root" });
    return DaffMagentoCartShippingInformationService;
}());
export { DaffMagentoCartShippingInformationService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJjYXJ0LXNoaXBwaW5nLWluZm9ybWF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQUl6RCxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN6RyxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLHlCQUF5QixFQUN6QixtQkFBbUIsRUFDcEIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN4RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7Ozs7Ozs7Ozs7QUFLaEc7SUFJRSxtREFDVSxNQUFjLEVBQzRCLGFBQStCLEVBQzFCLGtCQUFrQyxFQUNsRixlQUEyQyxFQUMzQyx1QkFBK0QsRUFDL0QsOEJBQXlFO1FBTHhFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDNEIsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQzFCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBZ0I7UUFDbEYsb0JBQWUsR0FBZixlQUFlLENBQTRCO1FBQzNDLDRCQUF1QixH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LENBQUM7O2dCQWxFRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQTFCUSxNQUFNO2dCQUtOLGdCQUFnQix1QkF5QnBCLE1BQU0sU0FBQyxnQ0FBZ0M7NENBQ3ZDLE1BQU0sU0FBQyxzQ0FBc0M7Z0JBZnpDLDBCQUEwQjtnQkFQMUIsc0NBQXNDO2dCQU10Qyx5Q0FBeUM7OztvREFoQmxEO0NBNEZDLEFBbkVELElBbUVDO1NBaEVZLHlDQUF5Qzs7Ozs7O0lBRWxELDJEQUFzQjs7Ozs7SUFDdEIsa0VBQWlGOztJQUNqRix1RUFBeUY7O0lBQ3pGLG9FQUFrRDs7SUFDbEQsNEVBQXNFOztJQUN0RSxtRkFBZ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwb2xsbyB9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcbmltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERhZmZRdWV1ZWRBcG9sbG8gfSBmcm9tICdAZGFmZm9kaWwvY29yZS9ncmFwaHFsJ1xuaW1wb3J0IHsgRGFmZkNhcnRTaGlwcGluZ1JhdGUsIERhZmZDYXJ0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHsgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydFNoaXBwaW5nUmF0ZVRyYW5zZm9ybWVyIH0gZnJvbSAnLi90cmFuc2Zvcm1zL291dHB1dHMvY2FydC1zaGlwcGluZy1yYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgZ2V0U2VsZWN0ZWRTaGlwcGluZ01ldGhvZCxcbiAgc2V0U2VsZWN0ZWRTaGlwcGluZ01ldGhvZCxcbiAgbGlzdFNoaXBwaW5nTWV0aG9kc1xufSBmcm9tICcuL3F1ZXJpZXMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b1NoaXBwaW5nTWV0aG9kSW5wdXRUcmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3Jtcy9pbnB1dHMvc2hpcHBpbmctbWV0aG9kLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0VHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFnZW50b0dldFNlbGVjdGVkU2hpcHBpbmdNZXRob2RSZXNwb25zZSwgTWFnZW50b1NldFNlbGVjdGVkU2hpcHBpbmdNZXRob2RSZXNwb25zZSwgTWFnZW50b0xpc3RTaGlwcGluZ01ldGhvZHNSZXNwb25zZSB9IGZyb20gJy4vcXVlcmllcy9yZXNwb25zZXMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEQUZGX0NBUlRfTUFHRU5UT19FWFRSQV9DQVJUX0ZSQUdNRU5UUyB9IGZyb20gJy4vaW5qZWN0aW9uLXRva2Vucy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERBRkZfTUFHRU5UT19DQVJUX01VVEFUSU9OX1FVRVVFIH0gZnJvbSAnLi9pbmplY3Rpb24tdG9rZW5zL2NhcnQtbXV0YXRpb24tcXVldWUudG9rZW4nO1xuXG4vKipcbiAqIEEgc2VydmljZSBmb3IgbWFraW5nIE1hZ2VudG8gR3JhcGhRTCBxdWVyaWVzIGZvciBjYXJ0cy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9DYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25TZXJ2aWNlSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhcG9sbG86IEFwb2xsbyxcbiAgICBASW5qZWN0KERBRkZfTUFHRU5UT19DQVJUX01VVEFUSU9OX1FVRVVFKSBwcml2YXRlIG11dGF0aW9uUXVldWU6IERhZmZRdWV1ZWRBcG9sbG8sXG4gICAgQEluamVjdChEQUZGX0NBUlRfTUFHRU5UT19FWFRSQV9DQVJUX0ZSQUdNRU5UUykgcHVibGljIGV4dHJhQ2FydEZyYWdtZW50czogRG9jdW1lbnROb2RlW10sXG4gICAgcHVibGljIGNhcnRUcmFuc2Zvcm1lcjogRGFmZk1hZ2VudG9DYXJ0VHJhbnNmb3JtZXIsXG4gICAgcHVibGljIHNoaXBwaW5nUmF0ZVRyYW5zZm9ybWVyOiBEYWZmTWFnZW50b0NhcnRTaGlwcGluZ1JhdGVUcmFuc2Zvcm1lcixcbiAgICBwdWJsaWMgc2hpcHBpbmdNZXRob2RJbnB1dFRyYW5zZm9ybWVyOiBEYWZmTWFnZW50b1NoaXBwaW5nTWV0aG9kSW5wdXRUcmFuc2Zvcm1lcixcbiAgKSB7fVxuXG4gIGdldChjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGFmZkNhcnRTaGlwcGluZ1JhdGU+IHtcbiAgICByZXR1cm4gdGhpcy5hcG9sbG8ucXVlcnk8TWFnZW50b0dldFNlbGVjdGVkU2hpcHBpbmdNZXRob2RSZXNwb25zZT4oe1xuICAgICAgcXVlcnk6IGdldFNlbGVjdGVkU2hpcHBpbmdNZXRob2QodGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7Y2FydElkfVxuICAgIH0pLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+IHJlc3VsdC5kYXRhLmNhcnQuc2hpcHBpbmdfYWRkcmVzc2VzWzBdXG4gICAgICAgID8gdGhpcy5zaGlwcGluZ1JhdGVUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzdWx0LmRhdGEuY2FydC5zaGlwcGluZ19hZGRyZXNzZXNbMF0uc2VsZWN0ZWRfc2hpcHBpbmdfbWV0aG9kKVxuICAgICAgICA6IG51bGxcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlKGNhcnRJZDogc3RyaW5nLCBzaGlwcGluZ0luZm86IFBhcnRpYWw8RGFmZkNhcnRTaGlwcGluZ1JhdGU+KTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiB0aGlzLm11dGF0aW9uUXVldWUubXV0YXRlPE1hZ2VudG9TZXRTZWxlY3RlZFNoaXBwaW5nTWV0aG9kUmVzcG9uc2U+KHtcbiAgICAgIG11dGF0aW9uOiBzZXRTZWxlY3RlZFNoaXBwaW5nTWV0aG9kKHRoaXMuZXh0cmFDYXJ0RnJhZ21lbnRzKSxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIG1ldGhvZDogdGhpcy5zaGlwcGluZ01ldGhvZElucHV0VHJhbnNmb3JtZXIudHJhbnNmb3JtKHNoaXBwaW5nSW5mbylcbiAgICAgIH1cbiAgICB9KS5waXBlKFxuICAgICAgc3dpdGNoTWFwKHJlc3VsdCA9PlxuICAgICAgICAvLyBiZWNhdXNlIE1hZ2VudG8gb25seSByZXR1cm5zIHRoZSBzZWxlY3RlZCBzaGlwcGluZyBtZXRob2QgZm9yIHRoZSBtdXRhdGlvblxuICAgICAgICAvLyB3ZSBoYXZlIHRvIG1hbnVhbGx5IHJlZmV0Y2ggdGhlIGF2YWlsYWJsZSBzaGlwcGluZyBtZXRob2RzXG4gICAgICAgIC8vIHdpdGggZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknIGluIG9yZGVyIHRvIHNraXAgdGhlIGNhY2hlXG4gICAgICAgIHRoaXMuYXBvbGxvLnF1ZXJ5PE1hZ2VudG9MaXN0U2hpcHBpbmdNZXRob2RzUmVzcG9uc2U+KHtcbiAgICAgICAgICBxdWVyeTogbGlzdFNoaXBwaW5nTWV0aG9kcyh0aGlzLmV4dHJhQ2FydEZyYWdtZW50cyksXG4gICAgICAgICAgdmFyaWFibGVzOiB7Y2FydElkfSxcbiAgICAgICAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seSdcbiAgICAgICAgfSkucGlwZShcbiAgICAgICAgICBtYXAoc2hpcHBpbmdNZXRob2RzID0+ICh7XG4gICAgICAgICAgICAuLi50aGlzLmNhcnRUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzdWx0LmRhdGEuc2V0U2hpcHBpbmdNZXRob2RzT25DYXJ0LmNhcnQpLFxuICAgICAgICAgICAgYXZhaWxhYmxlX3NoaXBwaW5nX21ldGhvZHM6IHNoaXBwaW5nTWV0aG9kcy5kYXRhLmNhcnQuc2hpcHBpbmdfYWRkcmVzc2VzWzBdLmF2YWlsYWJsZV9zaGlwcGluZ19tZXRob2RzLm1hcChpdGVtID0+XG4gICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdSYXRlVHJhbnNmb3JtZXIudHJhbnNmb3JtKGl0ZW0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIH1cblxuICBkZWxldGUoY2FydElkOiBzdHJpbmcsIGlkPzogc3RyaW5nIHwgbnVtYmVyKTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiB0aGlzLm11dGF0aW9uUXVldWUubXV0YXRlPE1hZ2VudG9TZXRTZWxlY3RlZFNoaXBwaW5nTWV0aG9kUmVzcG9uc2U+KHtcbiAgICAgIG11dGF0aW9uOiBzZXRTZWxlY3RlZFNoaXBwaW5nTWV0aG9kKHRoaXMuZXh0cmFDYXJ0RnJhZ21lbnRzKSxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIG1ldGhvZDoge1xuICAgICAgICAgIGNhcnJpZXJfY29kZTogJycsXG4gICAgICAgICAgbWV0aG9kX2NvZGU6ICcnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiB0aGlzLmNhcnRUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzdWx0LmRhdGEuc2V0U2hpcHBpbmdNZXRob2RzT25DYXJ0LmNhcnQpKVxuICAgIClcbiAgfVxufVxuIl19