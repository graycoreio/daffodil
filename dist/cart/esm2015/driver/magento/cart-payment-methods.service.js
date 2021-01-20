/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { listPaymentMethods } from './queries/public_api';
import { DaffMagentoCartPaymentTransformer } from './transforms/outputs/cart-payment.service';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
import * as i2 from "./injection-tokens/fragments/cart";
import * as i3 from "./transforms/outputs/cart-payment.service";
/**
 * A service for making Magento GraphQL queries for carts.
 */
export class DaffMagentoCartPaymentMethodsService {
    /**
     * @param {?} apollo
     * @param {?} extraCartFragments
     * @param {?} paymentTransformer
     */
    constructor(apollo, extraCartFragments, paymentTransformer) {
        this.apollo = apollo;
        this.extraCartFragments = extraCartFragments;
        this.paymentTransformer = paymentTransformer;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    list(cartId) {
        return this.apollo.query({
            query: listPaymentMethods(this.extraCartFragments),
            variables: { cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => result.data.cart.available_payment_methods.map((/**
         * @param {?} item
         * @return {?}
         */
        item => this.paymentTransformer.transform(item))))));
    }
}
DaffMagentoCartPaymentMethodsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartPaymentMethodsService.ctorParameters = () => [
    { type: Apollo },
    { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
    { type: DaffMagentoCartPaymentTransformer }
];
/** @nocollapse */ DaffMagentoCartPaymentMethodsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartPaymentMethodsService_Factory() { return new DaffMagentoCartPaymentMethodsService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), i0.ɵɵinject(i3.DaffMagentoCartPaymentTransformer)); }, token: DaffMagentoCartPaymentMethodsService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartPaymentMethodsService.prototype.apollo;
    /** @type {?} */
    DaffMagentoCartPaymentMethodsService.prototype.extraCartFragments;
    /** @type {?} */
    DaffMagentoCartPaymentMethodsService.prototype.paymentTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LW1ldGhvZHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsiY2FydC1wYXltZW50LW1ldGhvZHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUtyQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUU5RixPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7QUFRdkYsTUFBTSxPQUFPLG9DQUFvQzs7Ozs7O0lBQy9DLFlBQ1UsTUFBYyxFQUNpQyxrQkFBa0MsRUFDbEYsa0JBQXFEO1FBRnBELFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaUMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFnQjtRQUNsRix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1DO0lBQzNELENBQUM7Ozs7O0lBRUosSUFBSSxDQUFDLE1BQWM7UUFDakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBb0M7WUFDMUQsS0FBSyxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUNsRCxTQUFTLEVBQUUsRUFBQyxNQUFNLEVBQUM7U0FDcEIsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUMsQ0FDL0csQ0FBQTtJQUNILENBQUM7OztZQWpCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFsQlEsTUFBTTt3Q0FzQlYsTUFBTSxTQUFDLHNDQUFzQztZQWJ6QyxpQ0FBaUM7Ozs7Ozs7O0lBWXRDLHNEQUFzQjs7SUFDdEIsa0VBQXlGOztJQUN6RixrRUFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwb2xsbyB9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcbmltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydFBheW1lbnRNZXRob2QgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmQ2FydFBheW1lbnRNZXRob2RzU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7IGxpc3RQYXltZW50TWV0aG9kcyB9IGZyb20gJy4vcXVlcmllcy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydFBheW1lbnRUcmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3Jtcy9vdXRwdXRzL2NhcnQtcGF5bWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IE1hZ2VudG9MaXN0UGF5bWVudE1ldGhvZHNSZXNwb25zZSB9IGZyb20gJy4vcXVlcmllcy9yZXNwb25zZXMvbGlzdC1wYXltZW50LW1ldGhvZHMnO1xuaW1wb3J0IHsgREFGRl9DQVJUX01BR0VOVE9fRVhUUkFfQ0FSVF9GUkFHTUVOVFMgfSBmcm9tICcuL2luamVjdGlvbi10b2tlbnMvcHVibGljX2FwaSc7XG5cbi8qKlxuICogQSBzZXJ2aWNlIGZvciBtYWtpbmcgTWFnZW50byBHcmFwaFFMIHF1ZXJpZXMgZm9yIGNhcnRzLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmTWFnZW50b0NhcnRQYXltZW50TWV0aG9kc1NlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydFBheW1lbnRNZXRob2RzU2VydmljZUludGVyZmFjZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXBvbGxvOiBBcG9sbG8sXG4gICAgQEluamVjdChEQUZGX0NBUlRfTUFHRU5UT19FWFRSQV9DQVJUX0ZSQUdNRU5UUykgcHVibGljIGV4dHJhQ2FydEZyYWdtZW50czogRG9jdW1lbnROb2RlW10sXG4gICAgcHVibGljIHBheW1lbnRUcmFuc2Zvcm1lcjogRGFmZk1hZ2VudG9DYXJ0UGF5bWVudFRyYW5zZm9ybWVyXG4gICkge31cblxuICBsaXN0KGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxEYWZmQ2FydFBheW1lbnRNZXRob2RbXT4ge1xuICAgIHJldHVybiB0aGlzLmFwb2xsby5xdWVyeTxNYWdlbnRvTGlzdFBheW1lbnRNZXRob2RzUmVzcG9uc2U+KHtcbiAgICAgIHF1ZXJ5OiBsaXN0UGF5bWVudE1ldGhvZHModGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7Y2FydElkfVxuICAgIH0pLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+IHJlc3VsdC5kYXRhLmNhcnQuYXZhaWxhYmxlX3BheW1lbnRfbWV0aG9kcy5tYXAoaXRlbSA9PiB0aGlzLnBheW1lbnRUcmFuc2Zvcm1lci50cmFuc2Zvcm0oaXRlbSkpKVxuICAgIClcbiAgfVxufVxuIl19