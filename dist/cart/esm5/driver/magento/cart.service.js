/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var DaffMagentoCartService = /** @class */ (function () {
    function DaffMagentoCartService(apollo, mutationQueue, cartTransformer, cartItemDriver, extraCartFragments) {
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
    DaffMagentoCartService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        var _this = this;
        return this.apollo.query({
            query: getCart(this.extraCartFragments),
            variables: { cartId: cartId }
        }).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(transformCartMagentoError(error)); })), map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.cartTransformer.transform(result.data.cart); })));
    };
    /**
     * @return {?}
     */
    DaffMagentoCartService.prototype.create = /**
     * @return {?}
     */
    function () {
        return this.mutationQueue.mutate({ mutation: createCart }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return ({ id: result.data.createEmptyCart }); })));
    };
    /**
     * @param {?} productId
     * @param {?} qty
     * @return {?}
     */
    DaffMagentoCartService.prototype.addToCart = /**
     * @param {?} productId
     * @param {?} qty
     * @return {?}
     */
    function (productId, qty) {
        throw new Error('Method is deprecated. Use DaffCartItemServiceInterface#add instead.');
    };
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffMagentoCartService.prototype.clear = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        var _this = this;
        return this.cartItemDriver.list(cartId).pipe(switchMap((/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            return forkJoin.apply(void 0, tslib_1.__spread(items.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return _this.cartItemDriver.delete(cartId, item.item_id);
            }))));
        })), switchMap((/**
         * @return {?}
         */
        function () { return _this.get(cartId); })));
    };
    DaffMagentoCartService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartService.ctorParameters = function () { return [
        { type: Apollo },
        { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
        { type: DaffMagentoCartTransformer },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartItemDriver,] }] },
        { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] }
    ]; };
    /** @nocollapse */ DaffMagentoCartService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartService_Factory() { return new DaffMagentoCartService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DAFF_MAGENTO_CART_MUTATION_QUEUE), i0.ɵɵinject(i3.DaffMagentoCartTransformer), i0.ɵɵinject(i4.DaffCartItemDriver), i0.ɵɵinject(i5.DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS)); }, token: DaffMagentoCartService, providedIn: "root" });
    return DaffMagentoCartService;
}());
export { DaffMagentoCartService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJjYXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFjLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFFekQsT0FBTyxFQUE0QixrQkFBa0IsRUFBZ0MsTUFBTSx1QkFBdUIsQ0FBQztBQUVuSCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRzNELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7Ozs7Ozs7O0FBS2hHO0lBSUUsZ0NBQ1UsTUFBYyxFQUM0QixhQUErQixFQUMxRSxlQUEyQyxFQUNkLGNBSW5DLEVBQ3NELGtCQUFrQztRQVJqRixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQzRCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUMxRSxvQkFBZSxHQUFmLGVBQWUsQ0FBNEI7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FJakQ7UUFDc0QsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFnQjtJQUN4RixDQUFDOzs7OztJQUVKLG9DQUFHOzs7O0lBQUgsVUFBSSxNQUFjO1FBQWxCLGlCQVFDO1FBUEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBeUI7WUFDL0MsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDdkMsU0FBUyxFQUFFLEVBQUMsTUFBTSxRQUFBLEVBQUM7U0FDcEIsQ0FBQyxDQUFDLElBQUksQ0FDTCxVQUFVOzs7O1FBQUMsVUFBQyxLQUFZLElBQUssT0FBQSxVQUFVLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBNUMsQ0FBNEMsRUFBQyxFQUMxRSxHQUFHOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFoRCxDQUFnRCxFQUFDLENBQ2hFLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsdUNBQU07OztJQUFOO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBNEIsRUFBQyxRQUFRLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQ3RGLEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLENBQUMsRUFBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUMsQ0FBQyxFQUFuQyxDQUFtQyxFQUFDLENBQ25ELENBQUE7SUFDSCxDQUFDOzs7Ozs7SUFFRCwwQ0FBUzs7Ozs7SUFBVCxVQUFVLFNBQWlCLEVBQUUsR0FBVztRQUN0QyxNQUFNLElBQUksS0FBSyxDQUFDLHFFQUFxRSxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Ozs7SUFFRCxzQ0FBSzs7OztJQUFMLFVBQU0sTUFBYztRQUFwQixpQkFTQTtRQVJFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUMxQyxTQUFTOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ2IsT0FBQSxRQUFRLGdDQUFJLEtBQUssQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxJQUFJO2dCQUN4QixPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQWhELENBQWdELEVBQ2pEO1FBRkQsQ0FFRSxFQUNILEVBQ0osU0FBUzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQWhCLENBQWdCLEVBQUMsQ0FDL0IsQ0FBQTtJQUNKLENBQUM7O2dCQTdDRCxVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQXRCUSxNQUFNO2dCQUtOLGdCQUFnQix1QkFxQnBCLE1BQU0sU0FBQyxnQ0FBZ0M7Z0JBakJuQywwQkFBMEI7Z0RBbUI5QixNQUFNLFNBQUMsa0JBQWtCOzRDQUt6QixNQUFNLFNBQUMsc0NBQXNDOzs7aUNBbENsRDtDQW1FQyxBQTlDRCxJQThDQztTQTNDWSxzQkFBc0I7Ozs7OztJQUUvQix3Q0FBc0I7Ozs7O0lBQ3RCLCtDQUFpRjs7SUFDakYsaURBQWtEOzs7OztJQUNsRCxnREFJQzs7SUFDRCxvREFBeUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwb2xsbyB9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcbmltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciwgZm9ya0pvaW4gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYWZmUXVldWVkQXBvbGxvIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvZ3JhcGhxbCdcbmltcG9ydCB7IERhZmZDYXJ0LCBEYWZmQ2FydEl0ZW0sIERhZmZDYXJ0SXRlbUlucHV0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHsgRGFmZkNhcnRTZXJ2aWNlSW50ZXJmYWNlLCBEYWZmQ2FydEl0ZW1Ecml2ZXIsIERhZmZDYXJ0SXRlbVNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5pbXBvcnQgeyBEYWZmTWFnZW50b0NhcnRUcmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3Jtcy9vdXRwdXRzL2NhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBnZXRDYXJ0LCBjcmVhdGVDYXJ0IH0gZnJvbSAnLi9xdWVyaWVzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgTWFnZW50b0dldENhcnRSZXNwb25zZSB9IGZyb20gJy4vcXVlcmllcy9yZXNwb25zZXMvZ2V0LWNhcnQnO1xuaW1wb3J0IHsgTWFnZW50b0NyZWF0ZUNhcnRSZXNwb25zZSB9IGZyb20gJy4vcXVlcmllcy9yZXNwb25zZXMvY3JlYXRlLWNhcnQnO1xuaW1wb3J0IHsgdHJhbnNmb3JtQ2FydE1hZ2VudG9FcnJvciB9IGZyb20gJy4vZXJyb3JzL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBEQUZGX0NBUlRfTUFHRU5UT19FWFRSQV9DQVJUX0ZSQUdNRU5UUyB9IGZyb20gJy4vaW5qZWN0aW9uLXRva2Vucy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERBRkZfTUFHRU5UT19DQVJUX01VVEFUSU9OX1FVRVVFIH0gZnJvbSAnLi9pbmplY3Rpb24tdG9rZW5zL2NhcnQtbXV0YXRpb24tcXVldWUudG9rZW4nO1xuXG4vKipcbiAqIEEgc2VydmljZSBmb3IgbWFraW5nIE1hZ2VudG8gR3JhcGhRTCBxdWVyaWVzIGZvciBjYXJ0cy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9DYXJ0U2VydmljZSBpbXBsZW1lbnRzIERhZmZDYXJ0U2VydmljZUludGVyZmFjZTxEYWZmQ2FydD4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFwb2xsbzogQXBvbGxvLFxuICAgIEBJbmplY3QoREFGRl9NQUdFTlRPX0NBUlRfTVVUQVRJT05fUVVFVUUpIHByaXZhdGUgbXV0YXRpb25RdWV1ZTogRGFmZlF1ZXVlZEFwb2xsbyxcbiAgICBwdWJsaWMgY2FydFRyYW5zZm9ybWVyOiBEYWZmTWFnZW50b0NhcnRUcmFuc2Zvcm1lcixcbiAgICBASW5qZWN0KERhZmZDYXJ0SXRlbURyaXZlcikgcHJpdmF0ZSBjYXJ0SXRlbURyaXZlcjogRGFmZkNhcnRJdGVtU2VydmljZUludGVyZmFjZTxcbiAgICAgIERhZmZDYXJ0SXRlbSxcbiAgICAgIERhZmZDYXJ0SXRlbUlucHV0LFxuICAgICAgRGFmZkNhcnRcbiAgICA+LFxuICAgIEBJbmplY3QoREFGRl9DQVJUX01BR0VOVE9fRVhUUkFfQ0FSVF9GUkFHTUVOVFMpIHB1YmxpYyBleHRyYUNhcnRGcmFnbWVudHM6IERvY3VtZW50Tm9kZVtdLFxuICApIHt9XG5cbiAgZ2V0KGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxEYWZmQ2FydD4ge1xuICAgIHJldHVybiB0aGlzLmFwb2xsby5xdWVyeTxNYWdlbnRvR2V0Q2FydFJlc3BvbnNlPih7XG4gICAgICBxdWVyeTogZ2V0Q2FydCh0aGlzLmV4dHJhQ2FydEZyYWdtZW50cyksXG4gICAgICB2YXJpYWJsZXM6IHtjYXJ0SWR9XG4gICAgfSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBFcnJvcikgPT4gdGhyb3dFcnJvcih0cmFuc2Zvcm1DYXJ0TWFnZW50b0Vycm9yKGVycm9yKSkpLFxuICAgICAgbWFwKHJlc3VsdCA9PiB0aGlzLmNhcnRUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzdWx0LmRhdGEuY2FydCkpXG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZSgpOiBPYnNlcnZhYmxlPHtpZDogc3RyaW5nfT4ge1xuICAgIHJldHVybiB0aGlzLm11dGF0aW9uUXVldWUubXV0YXRlPE1hZ2VudG9DcmVhdGVDYXJ0UmVzcG9uc2U+KHttdXRhdGlvbjogY3JlYXRlQ2FydH0pLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+ICh7aWQ6IHJlc3VsdC5kYXRhLmNyZWF0ZUVtcHR5Q2FydH0pKVxuICAgIClcbiAgfVxuXG4gIGFkZFRvQ2FydChwcm9kdWN0SWQ6IHN0cmluZywgcXR5OiBudW1iZXIpOiBPYnNlcnZhYmxlPERhZmZDYXJ0PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2QgaXMgZGVwcmVjYXRlZC4gVXNlIERhZmZDYXJ0SXRlbVNlcnZpY2VJbnRlcmZhY2UjYWRkIGluc3RlYWQuJyk7XG4gIH1cblxuICBjbGVhcihjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcbiAgICByZXR1cm4gdGhpcy5jYXJ0SXRlbURyaXZlci5saXN0KGNhcnRJZCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChpdGVtcyA9PlxuICAgICAgICBmb3JrSm9pbiguLi5pdGVtcy5tYXAoaXRlbSA9PlxuICAgICAgICAgIHRoaXMuY2FydEl0ZW1Ecml2ZXIuZGVsZXRlKGNhcnRJZCwgaXRlbS5pdGVtX2lkKVxuICAgICAgICApKVxuICAgICAgKSxcblx0XHRcdHN3aXRjaE1hcCgoKSA9PiB0aGlzLmdldChjYXJ0SWQpKVxuICAgIClcblx0fVxufVxuIl19