/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { throwError, forkJoin } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { DaffQueuedApollo } from '@daffodil/core/graphql';
import { DaffCartItemDriver } from '@daffodil/cart/driver';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { getCart, createCart } from './queries/public_api';
import { transformCartMagentoError } from './errors/transform';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';
import { DAFF_MAGENTO_CART_MUTATION_QUEUE } from './injection-tokens/cart-mutation-queue.token';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
import * as i2 from "./injection-tokens/cart-mutation-queue.token";
import * as i3 from "./transforms/outputs/cart.service";
import * as i4 from "@daffodil/cart/driver";
import * as i5 from "./injection-tokens/fragments/cart";
/**
 * A service for making Magento GraphQL queries for carts.
 */
export class DaffMagentoCartService {
    /**
     * @param {?} apollo
     * @param {?} mutationQueue
     * @param {?} cartTransformer
     * @param {?} cartItemDriver
     * @param {?} extraCartFragments
     */
    constructor(apollo, mutationQueue, cartTransformer, cartItemDriver, extraCartFragments) {
        this.apollo = apollo;
        this.mutationQueue = mutationQueue;
        this.cartTransformer = cartTransformer;
        this.cartItemDriver = cartItemDriver;
        this.extraCartFragments = extraCartFragments;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    get(cartId) {
        return this.apollo.query({
            query: getCart(this.extraCartFragments),
            variables: { cartId }
        }).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(transformCartMagentoError(error)))), map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.cartTransformer.transform(result.data.cart))));
    }
    /**
     * @return {?}
     */
    create() {
        return this.mutationQueue.mutate({ mutation: createCart }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => ({ id: result.data.createEmptyCart }))));
    }
    /**
     * @param {?} productId
     * @param {?} qty
     * @return {?}
     */
    addToCart(productId, qty) {
        throw new Error('Method is deprecated. Use DaffCartItemServiceInterface#add instead.');
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    clear(cartId) {
        return this.cartItemDriver.list(cartId).pipe(switchMap((/**
         * @param {?} items
         * @return {?}
         */
        items => forkJoin(...items.map((/**
         * @param {?} item
         * @return {?}
         */
        item => this.cartItemDriver.delete(cartId, item.item_id)))))), switchMap((/**
         * @return {?}
         */
        () => this.get(cartId))));
    }
}
DaffMagentoCartService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartService.ctorParameters = () => [
    { type: Apollo },
    { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
    { type: DaffMagentoCartTransformer },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartItemDriver,] }] },
    { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] }
];
/** @nocollapse */ DaffMagentoCartService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartService_Factory() { return new DaffMagentoCartService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DAFF_MAGENTO_CART_MUTATION_QUEUE), i0.ɵɵinject(i3.DaffMagentoCartTransformer), i0.ɵɵinject(i4.DaffCartItemDriver), i0.ɵɵinject(i5.DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS)); }, token: DaffMagentoCartService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartService.prototype.apollo;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartService.prototype.mutationQueue;
    /** @type {?} */
    DaffMagentoCartService.prototype.cartTransformer;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartService.prototype.cartItemDriver;
    /** @type {?} */
    DaffMagentoCartService.prototype.extraCartFragments;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJjYXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQWMsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN4RCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQUV6RCxPQUFPLEVBQTRCLGtCQUFrQixFQUFnQyxNQUFNLHVCQUF1QixDQUFDO0FBRW5ILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHM0QsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0QsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdkYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sOENBQThDLENBQUM7Ozs7Ozs7Ozs7QUFRaEcsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7Ozs7SUFDakMsWUFDVSxNQUFjLEVBQzRCLGFBQStCLEVBQzFFLGVBQTJDLEVBQ2QsY0FJbkMsRUFDc0Qsa0JBQWtDO1FBUmpGLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDNEIsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQzFFLG9CQUFlLEdBQWYsZUFBZSxDQUE0QjtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUlqRDtRQUNzRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWdCO0lBQ3hGLENBQUM7Ozs7O0lBRUosR0FBRyxDQUFDLE1BQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBeUI7WUFDL0MsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDdkMsU0FBUyxFQUFFLEVBQUMsTUFBTSxFQUFDO1NBQ3BCLENBQUMsQ0FBQyxJQUFJLENBQ0wsVUFBVTs7OztRQUFDLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxFQUMxRSxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQ2hFLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQTRCLEVBQUMsUUFBUSxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUN0RixHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxDQUNuRCxDQUFBO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLFNBQWlCLEVBQUUsR0FBVztRQUN0QyxNQUFNLElBQUksS0FBSyxDQUFDLHFFQUFxRSxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsTUFBYztRQUNsQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDMUMsU0FBUzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2hCLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFDakQsQ0FBQyxFQUNILEVBQ0osU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUMvQixDQUFBO0lBQ0osQ0FBQzs7O1lBN0NELFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQXRCUSxNQUFNO1lBS04sZ0JBQWdCLHVCQXFCcEIsTUFBTSxTQUFDLGdDQUFnQztZQWpCbkMsMEJBQTBCOzRDQW1COUIsTUFBTSxTQUFDLGtCQUFrQjt3Q0FLekIsTUFBTSxTQUFDLHNDQUFzQzs7Ozs7Ozs7SUFSOUMsd0NBQXNCOzs7OztJQUN0QiwrQ0FBaUY7O0lBQ2pGLGlEQUFrRDs7Ozs7SUFDbEQsZ0RBSUM7O0lBQ0Qsb0RBQXlGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcG9sbG8gfSBmcm9tICdhcG9sbG8tYW5ndWxhcic7XG5pbXBvcnQgeyBEb2N1bWVudE5vZGUgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IsIGZvcmtKb2luIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGFmZlF1ZXVlZEFwb2xsbyB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL2dyYXBocWwnXG5pbXBvcnQgeyBEYWZmQ2FydCwgRGFmZkNhcnRJdGVtLCBEYWZmQ2FydEl0ZW1JbnB1dCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7IERhZmZDYXJ0U2VydmljZUludGVyZmFjZSwgRGFmZkNhcnRJdGVtRHJpdmVyLCBEYWZmQ2FydEl0ZW1TZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyJztcblxuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0VHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0Q2FydCwgY3JlYXRlQ2FydCB9IGZyb20gJy4vcXVlcmllcy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IE1hZ2VudG9HZXRDYXJ0UmVzcG9uc2UgfSBmcm9tICcuL3F1ZXJpZXMvcmVzcG9uc2VzL2dldC1jYXJ0JztcbmltcG9ydCB7IE1hZ2VudG9DcmVhdGVDYXJ0UmVzcG9uc2UgfSBmcm9tICcuL3F1ZXJpZXMvcmVzcG9uc2VzL2NyZWF0ZS1jYXJ0JztcbmltcG9ydCB7IHRyYW5zZm9ybUNhcnRNYWdlbnRvRXJyb3IgfSBmcm9tICcuL2Vycm9ycy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgREFGRl9DQVJUX01BR0VOVE9fRVhUUkFfQ0FSVF9GUkFHTUVOVFMgfSBmcm9tICcuL2luamVjdGlvbi10b2tlbnMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEQUZGX01BR0VOVE9fQ0FSVF9NVVRBVElPTl9RVUVVRSB9IGZyb20gJy4vaW5qZWN0aW9uLXRva2Vucy9jYXJ0LW11dGF0aW9uLXF1ZXVlLnRva2VuJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgZm9yIG1ha2luZyBNYWdlbnRvIEdyYXBoUUwgcXVlcmllcyBmb3IgY2FydHMuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZNYWdlbnRvQ2FydFNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydFNlcnZpY2VJbnRlcmZhY2U8RGFmZkNhcnQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhcG9sbG86IEFwb2xsbyxcbiAgICBASW5qZWN0KERBRkZfTUFHRU5UT19DQVJUX01VVEFUSU9OX1FVRVVFKSBwcml2YXRlIG11dGF0aW9uUXVldWU6IERhZmZRdWV1ZWRBcG9sbG8sXG4gICAgcHVibGljIGNhcnRUcmFuc2Zvcm1lcjogRGFmZk1hZ2VudG9DYXJ0VHJhbnNmb3JtZXIsXG4gICAgQEluamVjdChEYWZmQ2FydEl0ZW1Ecml2ZXIpIHByaXZhdGUgY2FydEl0ZW1Ecml2ZXI6IERhZmZDYXJ0SXRlbVNlcnZpY2VJbnRlcmZhY2U8XG4gICAgICBEYWZmQ2FydEl0ZW0sXG4gICAgICBEYWZmQ2FydEl0ZW1JbnB1dCxcbiAgICAgIERhZmZDYXJ0XG4gICAgPixcbiAgICBASW5qZWN0KERBRkZfQ0FSVF9NQUdFTlRPX0VYVFJBX0NBUlRfRlJBR01FTlRTKSBwdWJsaWMgZXh0cmFDYXJ0RnJhZ21lbnRzOiBEb2N1bWVudE5vZGVbXSxcbiAgKSB7fVxuXG4gIGdldChjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGFmZkNhcnQ+IHtcbiAgICByZXR1cm4gdGhpcy5hcG9sbG8ucXVlcnk8TWFnZW50b0dldENhcnRSZXNwb25zZT4oe1xuICAgICAgcXVlcnk6IGdldENhcnQodGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7Y2FydElkfVxuICAgIH0pLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogRXJyb3IpID0+IHRocm93RXJyb3IodHJhbnNmb3JtQ2FydE1hZ2VudG9FcnJvcihlcnJvcikpKSxcbiAgICAgIG1hcChyZXN1bHQgPT4gdGhpcy5jYXJ0VHJhbnNmb3JtZXIudHJhbnNmb3JtKHJlc3VsdC5kYXRhLmNhcnQpKVxuICAgICk7XG4gIH1cblxuICBjcmVhdGUoKTogT2JzZXJ2YWJsZTx7aWQ6IHN0cmluZ30+IHtcbiAgICByZXR1cm4gdGhpcy5tdXRhdGlvblF1ZXVlLm11dGF0ZTxNYWdlbnRvQ3JlYXRlQ2FydFJlc3BvbnNlPih7bXV0YXRpb246IGNyZWF0ZUNhcnR9KS5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiAoe2lkOiByZXN1bHQuZGF0YS5jcmVhdGVFbXB0eUNhcnR9KSlcbiAgICApXG4gIH1cblxuICBhZGRUb0NhcnQocHJvZHVjdElkOiBzdHJpbmcsIHF0eTogbnVtYmVyKTogT2JzZXJ2YWJsZTxEYWZmQ2FydD4ge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIGlzIGRlcHJlY2F0ZWQuIFVzZSBEYWZmQ2FydEl0ZW1TZXJ2aWNlSW50ZXJmYWNlI2FkZCBpbnN0ZWFkLicpO1xuICB9XG5cbiAgY2xlYXIoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuY2FydEl0ZW1Ecml2ZXIubGlzdChjYXJ0SWQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoaXRlbXMgPT5cbiAgICAgICAgZm9ya0pvaW4oLi4uaXRlbXMubWFwKGl0ZW0gPT5cbiAgICAgICAgICB0aGlzLmNhcnRJdGVtRHJpdmVyLmRlbGV0ZShjYXJ0SWQsIGl0ZW0uaXRlbV9pZClcbiAgICAgICAgKSlcbiAgICAgICksXG5cdFx0XHRzd2l0Y2hNYXAoKCkgPT4gdGhpcy5nZXQoY2FydElkKSlcbiAgICApXG5cdH1cbn1cbiJdfQ==