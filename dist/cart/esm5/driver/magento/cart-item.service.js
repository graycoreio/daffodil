/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { DaffQueuedApollo } from '@daffodil/core/graphql';
import { DaffCartItemInputType } from '@daffodil/cart';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { listCartItems, addConfigurableCartItem, addBundleCartItem, addSimpleCartItem, removeCartItem, updateCartItem } from './queries/public_api';
import { transformCompositeCartItem, transformSimpleCartItem, transformConfigurableCartItem } from './transforms/inputs/cart-item-input-transformers';
import { DaffMagentoCartItemUpdateInputTransformer } from './transforms/inputs/cart-item-update.service';
import { transformMagentoCartItem } from './transforms/outputs/cart-item/cart-item-transformer';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';
import { DAFF_MAGENTO_CART_MUTATION_QUEUE } from './injection-tokens/cart-mutation-queue.token';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
import * as i2 from "./injection-tokens/cart-mutation-queue.token";
import * as i3 from "./injection-tokens/fragments/cart";
import * as i4 from "./transforms/outputs/cart.service";
import * as i5 from "./transforms/inputs/cart-item-update.service";
/**
 * A service for making Magento GraphQL queries for carts.
 */
var DaffMagentoCartItemService = /** @class */ (function () {
    function DaffMagentoCartItemService(apollo, mutationQueue, extraCartFragments, cartTransformer, cartItemUpdateInputTransformer) {
        this.apollo = apollo;
        this.mutationQueue = mutationQueue;
        this.extraCartFragments = extraCartFragments;
        this.cartTransformer = cartTransformer;
        this.cartItemUpdateInputTransformer = cartItemUpdateInputTransformer;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffMagentoCartItemService.prototype.list = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.apollo.query({
            query: listCartItems(this.extraCartFragments),
            variables: { cartId: cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.data.cart.items.map(transformMagentoCartItem); })));
    };
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    DaffMagentoCartItemService.prototype.get = /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    function (cartId, itemId) {
        return this.list(cartId).pipe(map((/**
         * @param {?} items
         * @return {?}
         */
        function (items) { return items.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return Number(item.item_id) === itemId; })); })));
    };
    /**
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    DaffMagentoCartItemService.prototype.add = /**
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    function (cartId, cartItemInput) {
        switch (cartItemInput.type) {
            case (DaffCartItemInputType.Composite):
                return this.addBundledProduct(cartId, (/** @type {?} */ (cartItemInput)));
            case (DaffCartItemInputType.Configurable):
                return this.addConfigurableProduct(cartId, (/** @type {?} */ (cartItemInput)));
            default:
                return this.addSimpleProduct(cartId, cartItemInput);
        }
    };
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @param {?} changes
     * @return {?}
     */
    DaffMagentoCartItemService.prototype.update = /**
     * @param {?} cartId
     * @param {?} itemId
     * @param {?} changes
     * @return {?}
     */
    function (cartId, itemId, changes) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: updateCartItem(this.extraCartFragments),
            variables: {
                cartId: cartId,
                input: this.cartItemUpdateInputTransformer.transform(tslib_1.__assign({}, changes, { item_id: itemId }))
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.cartTransformer.transform(result.data.updateCartItems.cart); })));
    };
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    DaffMagentoCartItemService.prototype.delete = /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    function (cartId, itemId) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: removeCartItem(this.extraCartFragments),
            variables: {
                cartId: cartId,
                itemId: itemId
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.cartTransformer.transform(result.data.removeItemFromCart.cart); })));
    };
    /**
     * @private
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    DaffMagentoCartItemService.prototype.addBundledProduct = /**
     * @private
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    function (cartId, cartItemInput) {
        var _this = this;
        /** @type {?} */
        var bundleInput = transformCompositeCartItem(cartItemInput);
        return this.mutationQueue.mutate({
            mutation: addBundleCartItem(this.extraCartFragments),
            variables: {
                cartId: cartId,
                input: bundleInput.input,
                options: bundleInput.options
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.cartTransformer.transform(result.data.addBundleProductsToCart.cart); })));
    };
    /**
     * @private
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    DaffMagentoCartItemService.prototype.addConfigurableProduct = /**
     * @private
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    function (cartId, cartItemInput) {
        var _this = this;
        /** @type {?} */
        var configurableInput = transformConfigurableCartItem(cartItemInput);
        return this.mutationQueue.mutate({
            mutation: addConfigurableCartItem(this.extraCartFragments),
            variables: {
                cartId: cartId,
                parentSku: configurableInput.parentSku,
                data: configurableInput.data
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.cartTransformer.transform(result.data.addConfigurableProductsToCart.cart); })));
    };
    /**
     * @private
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    DaffMagentoCartItemService.prototype.addSimpleProduct = /**
     * @private
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    function (cartId, cartItemInput) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: addSimpleCartItem(this.extraCartFragments),
            variables: {
                cartId: cartId,
                input: transformSimpleCartItem(cartItemInput)
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.cartTransformer.transform(result.data.addSimpleProductsToCart.cart); })));
    };
    DaffMagentoCartItemService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartItemService.ctorParameters = function () { return [
        { type: Apollo },
        { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
        { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
        { type: DaffMagentoCartTransformer },
        { type: DaffMagentoCartItemUpdateInputTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoCartItemService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartItemService_Factory() { return new DaffMagentoCartItemService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DAFF_MAGENTO_CART_MUTATION_QUEUE), i0.ɵɵinject(i3.DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), i0.ɵɵinject(i4.DaffMagentoCartTransformer), i0.ɵɵinject(i5.DaffMagentoCartItemUpdateInputTransformer)); }, token: DaffMagentoCartItemService, providedIn: "root" });
    return DaffMagentoCartItemService;
}());
export { DaffMagentoCartItemService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartItemService.prototype.apollo;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartItemService.prototype.mutationQueue;
    /** @type {?} */
    DaffMagentoCartItemService.prototype.extraCartFragments;
    /** @type {?} */
    DaffMagentoCartItemService.prototype.cartTransformer;
    /** @type {?} */
    DaffMagentoCartItemService.prototype.cartItemUpdateInputTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbImNhcnQtaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQUN6RCxPQUFPLEVBQTZDLHFCQUFxQixFQUE2RCxNQUFNLGdCQUFnQixDQUFDO0FBRzdKLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQy9FLE9BQU8sRUFDTixhQUFhLEVBQ2IsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDaEIsY0FBYyxFQUNkLGNBQWMsRUFDZixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSx1QkFBdUIsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBSXRKLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRXpHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7Ozs7Ozs7O0FBS2hHO0lBSUUsb0NBQ1UsTUFBYyxFQUM0QixhQUErQixFQUMxQixrQkFBa0MsRUFDbEYsZUFBMkMsRUFDM0MsOEJBQXlFO1FBSnhFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDNEIsa0JBQWEs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TUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsRUFBOUUsQ0FBOEUsRUFBQyxDQUM5RixDQUFBO0lBQ0osQ0FBQzs7Ozs7OztJQUVPLHFEQUFnQjs7Ozs7O0lBQXhCLFVBQXlCLE1BQWMsRUFBRSxhQUFnQztRQUF6RSxpQkFVQztRQVRBLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQW1DO1lBQy9ELFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDcEQsU0FBUyxFQUFFO2dCQUNULE1BQU0sUUFBQTtnQkFDTixLQUFLLEVBQUUsdUJBQXVCLENBQUMsYUFBYSxDQUFDO2FBQzlDO1NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxFQUF4RSxDQUF3RSxFQUFDLENBQ3hGLENBQUE7SUFDSixDQUFDOztnQkF2R0QsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFsQ1EsTUFBTTtnQkFLTixnQkFBZ0IsdUJBaUNwQixNQUFNLFNBQUMsZ0NBQWdDOzRDQUN2QyxNQUFNLFNBQUMsc0NBQXNDO2dCQTlCekMsMEJBQTBCO2dCQWMxQix5Q0FBeUM7OztxQ0F4QmxEO0NBeUlDLEFBeEdELElBd0dDO1NBckdZLDBCQUEwQjs7Ozs7O0lBRW5DLDRDQUFzQjs7Ozs7SUFDdEIsbURBQWlGOztJQUNqRix3REFBeUY7O0lBQ3pGLHFEQUFrRDs7SUFDbEQsb0VBQWdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcG9sbG8gfSBmcm9tICdhcG9sbG8tYW5ndWxhcic7XG5pbXBvcnQgeyBEb2N1bWVudE5vZGUgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGFmZlF1ZXVlZEFwb2xsbyB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL2dyYXBocWwnXG5pbXBvcnQgeyBEYWZmQ2FydEl0ZW0sIERhZmZDYXJ0SXRlbUlucHV0LCBEYWZmQ2FydCwgRGFmZkNhcnRJdGVtSW5wdXRUeXBlLCBEYWZmQ29tcG9zaXRlQ2FydEl0ZW1JbnB1dCwgRGFmZkNvbmZpZ3VyYWJsZUNhcnRJdGVtSW5wdXQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmQ2FydEl0ZW1TZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyJztcblxuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0VHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHtcblx0bGlzdENhcnRJdGVtcyxcblx0YWRkQ29uZmlndXJhYmxlQ2FydEl0ZW0sXG5cdGFkZEJ1bmRsZUNhcnRJdGVtLFxuXHRhZGRTaW1wbGVDYXJ0SXRlbSxcbiAgcmVtb3ZlQ2FydEl0ZW0sXG4gIHVwZGF0ZUNhcnRJdGVtXG59IGZyb20gJy4vcXVlcmllcy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IE1hZ2VudG9Db25maWd1cmFibGVDYXJ0SXRlbUlucHV0IH0gZnJvbSAnLi9tb2RlbHMvcmVxdWVzdHMvY2FydC1pdGVtJztcbmltcG9ydCB7IHRyYW5zZm9ybUNvbXBvc2l0ZUNhcnRJdGVtLCB0cmFuc2Zvcm1TaW1wbGVDYXJ0SXRlbSwgdHJhbnNmb3JtQ29uZmlndXJhYmxlQ2FydEl0ZW0gfSBmcm9tICcuL3RyYW5zZm9ybXMvaW5wdXRzL2NhcnQtaXRlbS1pbnB1dC10cmFuc2Zvcm1lcnMnO1xuaW1wb3J0IHsgTWFnZW50b0xpc3RDYXJ0SXRlbXNSZXNwb25zZSB9IGZyb20gJy4vcXVlcmllcy9yZXNwb25zZXMvbGlzdC1jYXJ0LWl0ZW1zJztcbmltcG9ydCB7IE1hZ2VudG9BZGRTaW1wbGVDYXJ0SXRlbVJlc3BvbnNlLCBNYWdlbnRvQWRkQnVuZGxlQ2FydEl0ZW1SZXNwb25zZSwgTWFnZW50b0FkZENvbmZpZ3VyYWJsZUNhcnRJdGVtUmVzcG9uc2UgfSBmcm9tICcuL3F1ZXJpZXMvcmVzcG9uc2VzL2FkZC1jYXJ0LWl0ZW0nO1xuaW1wb3J0IHsgTWFnZW50b1JlbW92ZUNhcnRJdGVtUmVzcG9uc2UgfSBmcm9tICcuL3F1ZXJpZXMvcmVzcG9uc2VzL3JlbW92ZS1jYXJ0LWl0ZW0nO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0SXRlbVVwZGF0ZUlucHV0VHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvaW5wdXRzL2NhcnQtaXRlbS11cGRhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBNYWdlbnRvVXBkYXRlQ2FydEl0ZW1SZXNwb25zZSB9IGZyb20gJy4vcXVlcmllcy9yZXNwb25zZXMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyB0cmFuc2Zvcm1NYWdlbnRvQ2FydEl0ZW0gfSBmcm9tICcuL3RyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LWl0ZW0vY2FydC1pdGVtLXRyYW5zZm9ybWVyJztcbmltcG9ydCB7IERBRkZfQ0FSVF9NQUdFTlRPX0VYVFJBX0NBUlRfRlJBR01FTlRTIH0gZnJvbSAnLi9pbmplY3Rpb24tdG9rZW5zL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgREFGRl9NQUdFTlRPX0NBUlRfTVVUQVRJT05fUVVFVUUgfSBmcm9tICcuL2luamVjdGlvbi10b2tlbnMvY2FydC1tdXRhdGlvbi1xdWV1ZS50b2tlbic7XG5cbi8qKlxuICogQSBzZXJ2aWNlIGZvciBtYWtpbmcgTWFnZW50byBHcmFwaFFMIHF1ZXJpZXMgZm9yIGNhcnRzLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmTWFnZW50b0NhcnRJdGVtU2VydmljZSBpbXBsZW1lbnRzIERhZmZDYXJ0SXRlbVNlcnZpY2VJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFwb2xsbzogQXBvbGxvLFxuICAgIEBJbmplY3QoREFGRl9NQUdFTlRPX0NBUlRfTVVUQVRJT05fUVVFVUUpIHByaXZhdGUgbXV0YXRpb25RdWV1ZTogRGFmZlF1ZXVlZEFwb2xsbyxcbiAgICBASW5qZWN0KERBRkZfQ0FSVF9NQUdFTlRPX0VYVFJBX0NBUlRfRlJBR01FTlRTKSBwdWJsaWMgZXh0cmFDYXJ0RnJhZ21lbnRzOiBEb2N1bWVudE5vZGVbXSxcbiAgICBwdWJsaWMgY2FydFRyYW5zZm9ybWVyOiBEYWZmTWFnZW50b0NhcnRUcmFuc2Zvcm1lcixcbiAgICBwdWJsaWMgY2FydEl0ZW1VcGRhdGVJbnB1dFRyYW5zZm9ybWVyOiBEYWZmTWFnZW50b0NhcnRJdGVtVXBkYXRlSW5wdXRUcmFuc2Zvcm1lclxuICApIHt9XG5cbiAgbGlzdChjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGFmZkNhcnRJdGVtW10+IHtcbiAgICByZXR1cm4gdGhpcy5hcG9sbG8ucXVlcnk8TWFnZW50b0xpc3RDYXJ0SXRlbXNSZXNwb25zZT4oe1xuICAgICAgcXVlcnk6IGxpc3RDYXJ0SXRlbXModGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7Y2FydElkfVxuICAgIH0pLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+IHJlc3VsdC5kYXRhLmNhcnQuaXRlbXMubWFwKHRyYW5zZm9ybU1hZ2VudG9DYXJ0SXRlbSkpXG4gICAgKVxuICB9XG5cbiAgZ2V0KGNhcnRJZDogc3RyaW5nLCBpdGVtSWQ6IG51bWJlcik6IE9ic2VydmFibGU8RGFmZkNhcnRJdGVtPiB7XG4gICAgcmV0dXJuIHRoaXMubGlzdChjYXJ0SWQpLnBpcGUoXG4gICAgICBtYXAoaXRlbXMgPT4gaXRlbXMuZmluZChpdGVtID0+IE51bWJlcihpdGVtLml0ZW1faWQpID09PSBpdGVtSWQpKVxuICAgIClcbiAgfVxuXG4gIGFkZChjYXJ0SWQ6IHN0cmluZywgY2FydEl0ZW1JbnB1dDogRGFmZkNhcnRJdGVtSW5wdXQpOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG5cdFx0c3dpdGNoKGNhcnRJdGVtSW5wdXQudHlwZSkge1xuXHRcdFx0Y2FzZSAoRGFmZkNhcnRJdGVtSW5wdXRUeXBlLkNvbXBvc2l0ZSk6XG5cdFx0XHRcdHJldHVybiB0aGlzLmFkZEJ1bmRsZWRQcm9kdWN0KGNhcnRJZCwgPERhZmZDb21wb3NpdGVDYXJ0SXRlbUlucHV0PmNhcnRJdGVtSW5wdXQpO1xuXHRcdFx0Y2FzZSAoRGFmZkNhcnRJdGVtSW5wdXRUeXBlLkNvbmZpZ3VyYWJsZSk6XG5cdFx0XHRcdHJldHVybiB0aGlzLmFkZENvbmZpZ3VyYWJsZVByb2R1Y3QoY2FydElkLCA8RGFmZkNvbmZpZ3VyYWJsZUNhcnRJdGVtSW5wdXQ+Y2FydEl0ZW1JbnB1dCk7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5hZGRTaW1wbGVQcm9kdWN0KGNhcnRJZCwgY2FydEl0ZW1JbnB1dCk7XG5cdFx0fVxuICB9XG5cbiAgdXBkYXRlKGNhcnRJZDogc3RyaW5nLCBpdGVtSWQ6IG51bWJlciwgY2hhbmdlczogUGFydGlhbDxEYWZmQ2FydEl0ZW0+KTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiB0aGlzLm11dGF0aW9uUXVldWUubXV0YXRlPE1hZ2VudG9VcGRhdGVDYXJ0SXRlbVJlc3BvbnNlPih7XG4gICAgICBtdXRhdGlvbjogdXBkYXRlQ2FydEl0ZW0odGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgaW5wdXQ6IHRoaXMuY2FydEl0ZW1VcGRhdGVJbnB1dFRyYW5zZm9ybWVyLnRyYW5zZm9ybSh7XG4gICAgICAgICAgLi4uY2hhbmdlcyxcbiAgICAgICAgICBpdGVtX2lkOiBpdGVtSWRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiB0aGlzLmNhcnRUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzdWx0LmRhdGEudXBkYXRlQ2FydEl0ZW1zLmNhcnQpKVxuICAgIClcbiAgfVxuXG4gIGRlbGV0ZShjYXJ0SWQ6IHN0cmluZywgaXRlbUlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25RdWV1ZS5tdXRhdGU8TWFnZW50b1JlbW92ZUNhcnRJdGVtUmVzcG9uc2U+KHtcbiAgICAgIG11dGF0aW9uOiByZW1vdmVDYXJ0SXRlbSh0aGlzLmV4dHJhQ2FydEZyYWdtZW50cyksXG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgY2FydElkLFxuICAgICAgICBpdGVtSWRcbiAgICAgIH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiB0aGlzLmNhcnRUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzdWx0LmRhdGEucmVtb3ZlSXRlbUZyb21DYXJ0LmNhcnQpKVxuICAgIClcbiAgfVxuXG5cdHByaXZhdGUgYWRkQnVuZGxlZFByb2R1Y3QoY2FydElkOiBzdHJpbmcsIGNhcnRJdGVtSW5wdXQ6IERhZmZDb21wb3NpdGVDYXJ0SXRlbUlucHV0KTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuXHRcdGNvbnN0IGJ1bmRsZUlucHV0ID0gdHJhbnNmb3JtQ29tcG9zaXRlQ2FydEl0ZW0oY2FydEl0ZW1JbnB1dCk7XG5cdFx0cmV0dXJuIHRoaXMubXV0YXRpb25RdWV1ZS5tdXRhdGU8TWFnZW50b0FkZEJ1bmRsZUNhcnRJdGVtUmVzcG9uc2U+KHtcbiAgICAgIG11dGF0aW9uOiBhZGRCdW5kbGVDYXJ0SXRlbSh0aGlzLmV4dHJhQ2FydEZyYWdtZW50cyksXG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgY2FydElkLFxuXHRcdFx0XHRpbnB1dDogYnVuZGxlSW5wdXQuaW5wdXQsXG5cdFx0XHRcdG9wdGlvbnM6IGJ1bmRsZUlucHV0Lm9wdGlvbnNcbiAgICAgIH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiB0aGlzLmNhcnRUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzdWx0LmRhdGEuYWRkQnVuZGxlUHJvZHVjdHNUb0NhcnQuY2FydCkpXG4gICAgKVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRDb25maWd1cmFibGVQcm9kdWN0KGNhcnRJZDogc3RyaW5nLCBjYXJ0SXRlbUlucHV0OiBEYWZmQ29uZmlndXJhYmxlQ2FydEl0ZW1JbnB1dCk6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcblx0XHRjb25zdCBjb25maWd1cmFibGVJbnB1dDogTWFnZW50b0NvbmZpZ3VyYWJsZUNhcnRJdGVtSW5wdXQgPSB0cmFuc2Zvcm1Db25maWd1cmFibGVDYXJ0SXRlbShjYXJ0SXRlbUlucHV0KTtcblx0XHRyZXR1cm4gdGhpcy5tdXRhdGlvblF1ZXVlLm11dGF0ZTxNYWdlbnRvQWRkQ29uZmlndXJhYmxlQ2FydEl0ZW1SZXNwb25zZT4oe1xuICAgICAgbXV0YXRpb246IGFkZENvbmZpZ3VyYWJsZUNhcnRJdGVtKHRoaXMuZXh0cmFDYXJ0RnJhZ21lbnRzKSxcbiAgICAgIHZhcmlhYmxlczoge1xuXHRcdFx0XHRjYXJ0SWQsXG5cdFx0XHRcdHBhcmVudFNrdTogY29uZmlndXJhYmxlSW5wdXQucGFyZW50U2t1LFxuXHRcdFx0XHRkYXRhOiBjb25maWd1cmFibGVJbnB1dC5kYXRhXG4gICAgICB9XG4gICAgfSkucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4gdGhpcy5jYXJ0VHJhbnNmb3JtZXIudHJhbnNmb3JtKHJlc3VsdC5kYXRhLmFkZENvbmZpZ3VyYWJsZVByb2R1Y3RzVG9DYXJ0LmNhcnQpKVxuICAgIClcblx0fVxuXG5cdHByaXZhdGUgYWRkU2ltcGxlUHJvZHVjdChjYXJ0SWQ6IHN0cmluZywgY2FydEl0ZW1JbnB1dDogRGFmZkNhcnRJdGVtSW5wdXQpOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG5cdFx0cmV0dXJuIHRoaXMubXV0YXRpb25RdWV1ZS5tdXRhdGU8TWFnZW50b0FkZFNpbXBsZUNhcnRJdGVtUmVzcG9uc2U+KHtcbiAgICAgIG11dGF0aW9uOiBhZGRTaW1wbGVDYXJ0SXRlbSh0aGlzLmV4dHJhQ2FydEZyYWdtZW50cyksXG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgY2FydElkLFxuICAgICAgICBpbnB1dDogdHJhbnNmb3JtU2ltcGxlQ2FydEl0ZW0oY2FydEl0ZW1JbnB1dClcbiAgICAgIH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiB0aGlzLmNhcnRUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzdWx0LmRhdGEuYWRkU2ltcGxlUHJvZHVjdHNUb0NhcnQuY2FydCkpXG4gICAgKVxuXHR9XG59XG4iXX0=