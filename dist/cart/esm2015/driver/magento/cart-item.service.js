/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class DaffMagentoCartItemService {
    /**
     * @param {?} apollo
     * @param {?} mutationQueue
     * @param {?} extraCartFragments
     * @param {?} cartTransformer
     * @param {?} cartItemUpdateInputTransformer
     */
    constructor(apollo, mutationQueue, extraCartFragments, cartTransformer, cartItemUpdateInputTransformer) {
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
    list(cartId) {
        return this.apollo.query({
            query: listCartItems(this.extraCartFragments),
            variables: { cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => result.data.cart.items.map(transformMagentoCartItem))));
    }
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    get(cartId, itemId) {
        return this.list(cartId).pipe(map((/**
         * @param {?} items
         * @return {?}
         */
        items => items.find((/**
         * @param {?} item
         * @return {?}
         */
        item => Number(item.item_id) === itemId)))));
    }
    /**
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    add(cartId, cartItemInput) {
        switch (cartItemInput.type) {
            case (DaffCartItemInputType.Composite):
                return this.addBundledProduct(cartId, (/** @type {?} */ (cartItemInput)));
            case (DaffCartItemInputType.Configurable):
                return this.addConfigurableProduct(cartId, (/** @type {?} */ (cartItemInput)));
            default:
                return this.addSimpleProduct(cartId, cartItemInput);
        }
    }
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @param {?} changes
     * @return {?}
     */
    update(cartId, itemId, changes) {
        return this.mutationQueue.mutate({
            mutation: updateCartItem(this.extraCartFragments),
            variables: {
                cartId,
                input: this.cartItemUpdateInputTransformer.transform(Object.assign({}, changes, { item_id: itemId }))
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.cartTransformer.transform(result.data.updateCartItems.cart))));
    }
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    delete(cartId, itemId) {
        return this.mutationQueue.mutate({
            mutation: removeCartItem(this.extraCartFragments),
            variables: {
                cartId,
                itemId
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.cartTransformer.transform(result.data.removeItemFromCart.cart))));
    }
    /**
     * @private
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    addBundledProduct(cartId, cartItemInput) {
        /** @type {?} */
        const bundleInput = transformCompositeCartItem(cartItemInput);
        return this.mutationQueue.mutate({
            mutation: addBundleCartItem(this.extraCartFragments),
            variables: {
                cartId,
                input: bundleInput.input,
                options: bundleInput.options
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.cartTransformer.transform(result.data.addBundleProductsToCart.cart))));
    }
    /**
     * @private
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    addConfigurableProduct(cartId, cartItemInput) {
        /** @type {?} */
        const configurableInput = transformConfigurableCartItem(cartItemInput);
        return this.mutationQueue.mutate({
            mutation: addConfigurableCartItem(this.extraCartFragments),
            variables: {
                cartId,
                parentSku: configurableInput.parentSku,
                data: configurableInput.data
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.cartTransformer.transform(result.data.addConfigurableProductsToCart.cart))));
    }
    /**
     * @private
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    addSimpleProduct(cartId, cartItemInput) {
        return this.mutationQueue.mutate({
            mutation: addSimpleCartItem(this.extraCartFragments),
            variables: {
                cartId,
                input: transformSimpleCartItem(cartItemInput)
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.cartTransformer.transform(result.data.addSimpleProductsToCart.cart))));
    }
}
DaffMagentoCartItemService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartItemService.ctorParameters = () => [
    { type: Apollo },
    { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
    { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
    { type: DaffMagentoCartTransformer },
    { type: DaffMagentoCartItemUpdateInputTransformer }
];
/** @nocollapse */ DaffMagentoCartItemService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartItemService_Factory() { return new DaffMagentoCartItemService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DAFF_MAGENTO_CART_MUTATION_QUEUE), i0.ɵɵinject(i3.DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), i0.ɵɵinject(i4.DaffMagentoCartTransformer), i0.ɵɵinject(i5.DaffMagentoCartItemUpdateInputTransformer)); }, token: DaffMagentoCartItemService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbImNhcnQtaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBQ3pELE9BQU8sRUFBNkMscUJBQXFCLEVBQTZELE1BQU0sZ0JBQWdCLENBQUM7QUFHN0osT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDL0UsT0FBTyxFQUNOLGFBQWEsRUFDYix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNoQixjQUFjLEVBQ2QsY0FBYyxFQUNmLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLHVCQUF1QixFQUFFLDZCQUE2QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFJdEosT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFekcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDaEcsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdkYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sOENBQThDLENBQUM7Ozs7Ozs7Ozs7QUFRaEcsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7Ozs7SUFDckMsWUFDVSxNQUFjLEVBQzRCLGFBQStCLEVBQzFCLGtCQUFrQyxFQUNsRixlQUEyQyxFQUMzQyw4QkFBeUU7UUFKeEUsV0FBTSxHQUFO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L0QsUUFBUSxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUNwRCxTQUFTLEVBQUU7Z0JBQ1QsTUFBTTtnQkFDTixLQUFLLEVBQUUsdUJBQXVCLENBQUMsYUFBYSxDQUFDO2FBQzlDO1NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxFQUFDLENBQ3hGLENBQUE7SUFDSixDQUFDOzs7WUF2R0QsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBbENRLE1BQU07WUFLTixnQkFBZ0IsdUJBaUNwQixNQUFNLFNBQUMsZ0NBQWdDO3dDQUN2QyxNQUFNLFNBQUMsc0NBQXNDO1lBOUJ6QywwQkFBMEI7WUFjMUIseUNBQXlDOzs7Ozs7OztJQWM5Qyw0Q0FBc0I7Ozs7O0lBQ3RCLG1EQUFpRjs7SUFDakYsd0RBQXlGOztJQUN6RixxREFBa0Q7O0lBQ2xELG9FQUFnRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBvbGxvIH0gZnJvbSAnYXBvbGxvLWFuZ3VsYXInO1xuaW1wb3J0IHsgRG9jdW1lbnROb2RlIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERhZmZRdWV1ZWRBcG9sbG8gfSBmcm9tICdAZGFmZm9kaWwvY29yZS9ncmFwaHFsJ1xuaW1wb3J0IHsgRGFmZkNhcnRJdGVtLCBEYWZmQ2FydEl0ZW1JbnB1dCwgRGFmZkNhcnQsIERhZmZDYXJ0SXRlbUlucHV0VHlwZSwgRGFmZkNvbXBvc2l0ZUNhcnRJdGVtSW5wdXQsIERhZmZDb25maWd1cmFibGVDYXJ0SXRlbUlucHV0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHsgRGFmZkNhcnRJdGVtU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydFRyYW5zZm9ybWVyIH0gZnJvbSAnLi90cmFuc2Zvcm1zL291dHB1dHMvY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7XG5cdGxpc3RDYXJ0SXRlbXMsXG5cdGFkZENvbmZpZ3VyYWJsZUNhcnRJdGVtLFxuXHRhZGRCdW5kbGVDYXJ0SXRlbSxcblx0YWRkU2ltcGxlQ2FydEl0ZW0sXG4gIHJlbW92ZUNhcnRJdGVtLFxuICB1cGRhdGVDYXJ0SXRlbVxufSBmcm9tICcuL3F1ZXJpZXMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBNYWdlbnRvQ29uZmlndXJhYmxlQ2FydEl0ZW1JbnB1dCB9IGZyb20gJy4vbW9kZWxzL3JlcXVlc3RzL2NhcnQtaXRlbSc7XG5pbXBvcnQgeyB0cmFuc2Zvcm1Db21wb3NpdGVDYXJ0SXRlbSwgdHJhbnNmb3JtU2ltcGxlQ2FydEl0ZW0sIHRyYW5zZm9ybUNvbmZpZ3VyYWJsZUNhcnRJdGVtIH0gZnJvbSAnLi90cmFuc2Zvcm1zL2lucHV0cy9jYXJ0LWl0ZW0taW5wdXQtdHJhbnNmb3JtZXJzJztcbmltcG9ydCB7IE1hZ2VudG9MaXN0Q2FydEl0ZW1zUmVzcG9uc2UgfSBmcm9tICcuL3F1ZXJpZXMvcmVzcG9uc2VzL2xpc3QtY2FydC1pdGVtcyc7XG5pbXBvcnQgeyBNYWdlbnRvQWRkU2ltcGxlQ2FydEl0ZW1SZXNwb25zZSwgTWFnZW50b0FkZEJ1bmRsZUNhcnRJdGVtUmVzcG9uc2UsIE1hZ2VudG9BZGRDb25maWd1cmFibGVDYXJ0SXRlbVJlc3BvbnNlIH0gZnJvbSAnLi9xdWVyaWVzL3Jlc3BvbnNlcy9hZGQtY2FydC1pdGVtJztcbmltcG9ydCB7IE1hZ2VudG9SZW1vdmVDYXJ0SXRlbVJlc3BvbnNlIH0gZnJvbSAnLi9xdWVyaWVzL3Jlc3BvbnNlcy9yZW1vdmUtY2FydC1pdGVtJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydEl0ZW1VcGRhdGVJbnB1dFRyYW5zZm9ybWVyIH0gZnJvbSAnLi90cmFuc2Zvcm1zL2lucHV0cy9jYXJ0LWl0ZW0tdXBkYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFnZW50b1VwZGF0ZUNhcnRJdGVtUmVzcG9uc2UgfSBmcm9tICcuL3F1ZXJpZXMvcmVzcG9uc2VzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgdHJhbnNmb3JtTWFnZW50b0NhcnRJdGVtIH0gZnJvbSAnLi90cmFuc2Zvcm1zL291dHB1dHMvY2FydC1pdGVtL2NhcnQtaXRlbS10cmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBEQUZGX0NBUlRfTUFHRU5UT19FWFRSQV9DQVJUX0ZSQUdNRU5UUyB9IGZyb20gJy4vaW5qZWN0aW9uLXRva2Vucy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERBRkZfTUFHRU5UT19DQVJUX01VVEFUSU9OX1FVRVVFIH0gZnJvbSAnLi9pbmplY3Rpb24tdG9rZW5zL2NhcnQtbXV0YXRpb24tcXVldWUudG9rZW4nO1xuXG4vKipcbiAqIEEgc2VydmljZSBmb3IgbWFraW5nIE1hZ2VudG8gR3JhcGhRTCBxdWVyaWVzIGZvciBjYXJ0cy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9DYXJ0SXRlbVNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydEl0ZW1TZXJ2aWNlSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhcG9sbG86IEFwb2xsbyxcbiAgICBASW5qZWN0KERBRkZfTUFHRU5UT19DQVJUX01VVEFUSU9OX1FVRVVFKSBwcml2YXRlIG11dGF0aW9uUXVldWU6IERhZmZRdWV1ZWRBcG9sbG8sXG4gICAgQEluamVjdChEQUZGX0NBUlRfTUFHRU5UT19FWFRSQV9DQVJUX0ZSQUdNRU5UUykgcHVibGljIGV4dHJhQ2FydEZyYWdtZW50czogRG9jdW1lbnROb2RlW10sXG4gICAgcHVibGljIGNhcnRUcmFuc2Zvcm1lcjogRGFmZk1hZ2VudG9DYXJ0VHJhbnNmb3JtZXIsXG4gICAgcHVibGljIGNhcnRJdGVtVXBkYXRlSW5wdXRUcmFuc2Zvcm1lcjogRGFmZk1hZ2VudG9DYXJ0SXRlbVVwZGF0ZUlucHV0VHJhbnNmb3JtZXJcbiAgKSB7fVxuXG4gIGxpc3QoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERhZmZDYXJ0SXRlbVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYXBvbGxvLnF1ZXJ5PE1hZ2VudG9MaXN0Q2FydEl0ZW1zUmVzcG9uc2U+KHtcbiAgICAgIHF1ZXJ5OiBsaXN0Q2FydEl0ZW1zKHRoaXMuZXh0cmFDYXJ0RnJhZ21lbnRzKSxcbiAgICAgIHZhcmlhYmxlczoge2NhcnRJZH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiByZXN1bHQuZGF0YS5jYXJ0Lml0ZW1zLm1hcCh0cmFuc2Zvcm1NYWdlbnRvQ2FydEl0ZW0pKVxuICAgIClcbiAgfVxuXG4gIGdldChjYXJ0SWQ6IHN0cmluZywgaXRlbUlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPERhZmZDYXJ0SXRlbT4ge1xuICAgIHJldHVybiB0aGlzLmxpc3QoY2FydElkKS5waXBlKFxuICAgICAgbWFwKGl0ZW1zID0+IGl0ZW1zLmZpbmQoaXRlbSA9PiBOdW1iZXIoaXRlbS5pdGVtX2lkKSA9PT0gaXRlbUlkKSlcbiAgICApXG4gIH1cblxuICBhZGQoY2FydElkOiBzdHJpbmcsIGNhcnRJdGVtSW5wdXQ6IERhZmZDYXJ0SXRlbUlucHV0KTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuXHRcdHN3aXRjaChjYXJ0SXRlbUlucHV0LnR5cGUpIHtcblx0XHRcdGNhc2UgKERhZmZDYXJ0SXRlbUlucHV0VHlwZS5Db21wb3NpdGUpOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5hZGRCdW5kbGVkUHJvZHVjdChjYXJ0SWQsIDxEYWZmQ29tcG9zaXRlQ2FydEl0ZW1JbnB1dD5jYXJ0SXRlbUlucHV0KTtcblx0XHRcdGNhc2UgKERhZmZDYXJ0SXRlbUlucHV0VHlwZS5Db25maWd1cmFibGUpOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5hZGRDb25maWd1cmFibGVQcm9kdWN0KGNhcnRJZCwgPERhZmZDb25maWd1cmFibGVDYXJ0SXRlbUlucHV0PmNhcnRJdGVtSW5wdXQpO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuYWRkU2ltcGxlUHJvZHVjdChjYXJ0SWQsIGNhcnRJdGVtSW5wdXQpO1xuXHRcdH1cbiAgfVxuXG4gIHVwZGF0ZShjYXJ0SWQ6IHN0cmluZywgaXRlbUlkOiBudW1iZXIsIGNoYW5nZXM6IFBhcnRpYWw8RGFmZkNhcnRJdGVtPik6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcbiAgICByZXR1cm4gdGhpcy5tdXRhdGlvblF1ZXVlLm11dGF0ZTxNYWdlbnRvVXBkYXRlQ2FydEl0ZW1SZXNwb25zZT4oe1xuICAgICAgbXV0YXRpb246IHVwZGF0ZUNhcnRJdGVtKHRoaXMuZXh0cmFDYXJ0RnJhZ21lbnRzKSxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIGlucHV0OiB0aGlzLmNhcnRJdGVtVXBkYXRlSW5wdXRUcmFuc2Zvcm1lci50cmFuc2Zvcm0oe1xuICAgICAgICAgIC4uLmNoYW5nZXMsXG4gICAgICAgICAgaXRlbV9pZDogaXRlbUlkXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSkucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4gdGhpcy5jYXJ0VHJhbnNmb3JtZXIudHJhbnNmb3JtKHJlc3VsdC5kYXRhLnVwZGF0ZUNhcnRJdGVtcy5jYXJ0KSlcbiAgICApXG4gIH1cblxuICBkZWxldGUoY2FydElkOiBzdHJpbmcsIGl0ZW1JZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiB0aGlzLm11dGF0aW9uUXVldWUubXV0YXRlPE1hZ2VudG9SZW1vdmVDYXJ0SXRlbVJlc3BvbnNlPih7XG4gICAgICBtdXRhdGlvbjogcmVtb3ZlQ2FydEl0ZW0odGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgaXRlbUlkXG4gICAgICB9XG4gICAgfSkucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4gdGhpcy5jYXJ0VHJhbnNmb3JtZXIudHJhbnNmb3JtKHJlc3VsdC5kYXRhLnJlbW92ZUl0ZW1Gcm9tQ2FydC5jYXJ0KSlcbiAgICApXG4gIH1cblxuXHRwcml2YXRlIGFkZEJ1bmRsZWRQcm9kdWN0KGNhcnRJZDogc3RyaW5nLCBjYXJ0SXRlbUlucHV0OiBEYWZmQ29tcG9zaXRlQ2FydEl0ZW1JbnB1dCk6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcblx0XHRjb25zdCBidW5kbGVJbnB1dCA9IHRyYW5zZm9ybUNvbXBvc2l0ZUNhcnRJdGVtKGNhcnRJdGVtSW5wdXQpO1xuXHRcdHJldHVybiB0aGlzLm11dGF0aW9uUXVldWUubXV0YXRlPE1hZ2VudG9BZGRCdW5kbGVDYXJ0SXRlbVJlc3BvbnNlPih7XG4gICAgICBtdXRhdGlvbjogYWRkQnVuZGxlQ2FydEl0ZW0odGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGNhcnRJZCxcblx0XHRcdFx0aW5wdXQ6IGJ1bmRsZUlucHV0LmlucHV0LFxuXHRcdFx0XHRvcHRpb25zOiBidW5kbGVJbnB1dC5vcHRpb25zXG4gICAgICB9XG4gICAgfSkucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4gdGhpcy5jYXJ0VHJhbnNmb3JtZXIudHJhbnNmb3JtKHJlc3VsdC5kYXRhLmFkZEJ1bmRsZVByb2R1Y3RzVG9DYXJ0LmNhcnQpKVxuICAgIClcblx0fVxuXG5cdHByaXZhdGUgYWRkQ29uZmlndXJhYmxlUHJvZHVjdChjYXJ0SWQ6IHN0cmluZywgY2FydEl0ZW1JbnB1dDogRGFmZkNvbmZpZ3VyYWJsZUNhcnRJdGVtSW5wdXQpOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG5cdFx0Y29uc3QgY29uZmlndXJhYmxlSW5wdXQ6IE1hZ2VudG9Db25maWd1cmFibGVDYXJ0SXRlbUlucHV0ID0gdHJhbnNmb3JtQ29uZmlndXJhYmxlQ2FydEl0ZW0oY2FydEl0ZW1JbnB1dCk7XG5cdFx0cmV0dXJuIHRoaXMubXV0YXRpb25RdWV1ZS5tdXRhdGU8TWFnZW50b0FkZENvbmZpZ3VyYWJsZUNhcnRJdGVtUmVzcG9uc2U+KHtcbiAgICAgIG11dGF0aW9uOiBhZGRDb25maWd1cmFibGVDYXJ0SXRlbSh0aGlzLmV4dHJhQ2FydEZyYWdtZW50cyksXG4gICAgICB2YXJpYWJsZXM6IHtcblx0XHRcdFx0Y2FydElkLFxuXHRcdFx0XHRwYXJlbnRTa3U6IGNvbmZpZ3VyYWJsZUlucHV0LnBhcmVudFNrdSxcblx0XHRcdFx0ZGF0YTogY29uZmlndXJhYmxlSW5wdXQuZGF0YVxuICAgICAgfVxuICAgIH0pLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+IHRoaXMuY2FydFRyYW5zZm9ybWVyLnRyYW5zZm9ybShyZXN1bHQuZGF0YS5hZGRDb25maWd1cmFibGVQcm9kdWN0c1RvQ2FydC5jYXJ0KSlcbiAgICApXG5cdH1cblxuXHRwcml2YXRlIGFkZFNpbXBsZVByb2R1Y3QoY2FydElkOiBzdHJpbmcsIGNhcnRJdGVtSW5wdXQ6IERhZmZDYXJ0SXRlbUlucHV0KTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuXHRcdHJldHVybiB0aGlzLm11dGF0aW9uUXVldWUubXV0YXRlPE1hZ2VudG9BZGRTaW1wbGVDYXJ0SXRlbVJlc3BvbnNlPih7XG4gICAgICBtdXRhdGlvbjogYWRkU2ltcGxlQ2FydEl0ZW0odGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgaW5wdXQ6IHRyYW5zZm9ybVNpbXBsZUNhcnRJdGVtKGNhcnRJdGVtSW5wdXQpXG4gICAgICB9XG4gICAgfSkucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4gdGhpcy5jYXJ0VHJhbnNmb3JtZXIudHJhbnNmb3JtKHJlc3VsdC5kYXRhLmFkZFNpbXBsZVByb2R1Y3RzVG9DYXJ0LmNhcnQpKVxuICAgIClcblx0fVxufVxuIl19