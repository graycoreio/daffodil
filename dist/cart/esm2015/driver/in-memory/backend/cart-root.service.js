/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import { DaffInMemoryBackendCartService } from './cart/cart.service';
import { DaffInMemoryBackendCartItemsService } from './cart-items/cart-items.service';
import { DaffInMemoryBackendCartOrderService } from './cart-order/cart-order.service';
import { DaffInMemoryBackendCartCouponService } from './cart-coupon/cart-coupon.service';
import { DaffInMemoryBackendCartAddressService } from './cart-address/cart-address.service';
import { DaffInMemoryBackendCartShippingAddressService } from './cart-shipping-address/cart-shipping-address.service';
import { DaffInMemoryBackendCartBillingAddressService } from './cart-billing-address/cart-billing-address.service';
import { DaffInMemoryBackendCartPaymentMethodsService } from './cart-payment-methods/cart-payment-methods.service';
import { DaffInMemoryBackendCartShippingMethodsService } from './cart-shipping-methods/cart-shipping-methods.service';
import { DaffInMemoryBackendCartPaymentService } from './cart-payment/cart-payment.service';
import { DaffInMemoryBackendCartShippingInformationService } from './cart-shipping-information/cart-shipping-information.service';
import * as i0 from "@angular/core";
import * as i1 from "./cart/cart.service";
import * as i2 from "./cart-items/cart-items.service";
import * as i3 from "./cart-order/cart-order.service";
import * as i4 from "./cart-coupon/cart-coupon.service";
import * as i5 from "./cart-address/cart-address.service";
import * as i6 from "./cart-shipping-address/cart-shipping-address.service";
import * as i7 from "./cart-billing-address/cart-billing-address.service";
import * as i8 from "./cart-payment-methods/cart-payment-methods.service";
import * as i9 from "./cart-shipping-methods/cart-shipping-methods.service";
import * as i10 from "./cart-payment/cart-payment.service";
import * as i11 from "./cart-shipping-information/cart-shipping-information.service";
/**
 * The root cart in-memory backend.
 * Creates the database and delegates requests to child backends.
 */
export class DaffInMemoryBackendCartRootService {
    /**
     * @param {?} cartService
     * @param {?} cartItemsService
     * @param {?} cartOrderService
     * @param {?} cartCouponService
     * @param {?} cartAddressService
     * @param {?} cartShippingAddressService
     * @param {?} cartBillingAddressService
     * @param {?} cartPaymentMethodsService
     * @param {?} cartShippingMethodsService
     * @param {?} cartPaymentService
     * @param {?} cartShippingInformationService
     */
    constructor(cartService, cartItemsService, cartOrderService, cartCouponService, cartAddressService, cartShippingAddressService, cartBillingAddressService, cartPaymentMethodsService, cartShippingMethodsService, cartPaymentService, cartShippingInformationService) {
        this.cartService = cartService;
        this.cartItemsService = cartItemsService;
        this.cartOrderService = cartOrderService;
        this.cartCouponService = cartCouponService;
        this.cartAddressService = cartAddressService;
        this.cartShippingAddressService = cartShippingAddressService;
        this.cartBillingAddressService = cartBillingAddressService;
        this.cartPaymentMethodsService = cartPaymentMethodsService;
        this.cartShippingMethodsService = cartShippingMethodsService;
        this.cartPaymentService = cartPaymentService;
        this.cartShippingInformationService = cartShippingInformationService;
        this.carts = [];
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    createDb(reqInfo) {
        if (reqInfo) {
            /** @type {?} */
            const seedData = reqInfo.utils.getJsonBody(reqInfo.req).carts;
            if (seedData) {
                this.carts = seedData;
            }
        }
        return {
            cart: this.carts
        };
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    get(reqInfo) {
        return this.delegateRequest(reqInfo);
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    post(reqInfo) {
        return this.delegateRequest(reqInfo);
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    put(reqInfo) {
        return this.delegateRequest(reqInfo);
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    delete(reqInfo) {
        return this.delegateRequest(reqInfo);
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    delegateRequest(reqInfo) {
        reqInfo.collection = this.carts;
        switch (reqInfo.collectionName) {
            case 'cart':
                return this.cartService[reqInfo.method](reqInfo);
            case 'cart-items':
                return this.cartItemsService[reqInfo.method](reqInfo);
            case 'cart-order':
                return this.cartOrderService[reqInfo.method](reqInfo);
            case 'cart-coupon':
                return this.cartCouponService[reqInfo.method](reqInfo);
            case 'cart-address':
                return this.cartAddressService[reqInfo.method](reqInfo);
            case 'cart-shipping-address':
                return this.cartShippingAddressService[reqInfo.method](reqInfo);
            case 'cart-billing-address':
                return this.cartBillingAddressService[reqInfo.method](reqInfo);
            case 'cart-payment-methods':
                return this.cartPaymentMethodsService[reqInfo.method](reqInfo);
            case 'cart-shipping-methods':
                return this.cartShippingMethodsService[reqInfo.method](reqInfo);
            case 'cart-payment':
                return this.cartPaymentService[reqInfo.method](reqInfo);
            case 'cart-shipping-information':
                return this.cartShippingInformationService[reqInfo.method](reqInfo);
            default:
                return reqInfo.utils.createResponse$((/**
                 * @return {?}
                 */
                () => ({
                    body: {},
                    status: STATUS.OK
                })));
        }
    }
}
/**
 * The collections that the root service manages.
 * Useful for a higher-level backend that delegates to this one based on collection name.
 */
DaffInMemoryBackendCartRootService.COLLECTION_NAMES = [
    'cart',
    'cart-items',
    'cart-order',
    'cart-coupon',
    'cart-address',
    'cart-shipping-address',
    'cart-billing-address',
    'cart-payment-methods',
    'cart-shipping-methods',
    'cart-payment',
    'cart-shipping-information',
];
DaffInMemoryBackendCartRootService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryBackendCartRootService.ctorParameters = () => [
    { type: DaffInMemoryBackendCartService },
    { type: DaffInMemoryBackendCartItemsService },
    { type: DaffInMemoryBackendCartOrderService },
    { type: DaffInMemoryBackendCartCouponService },
    { type: DaffInMemoryBackendCartAddressService },
    { type: DaffInMemoryBackendCartShippingAddressService },
    { type: DaffInMemoryBackendCartBillingAddressService },
    { type: DaffInMemoryBackendCartPaymentMethodsService },
    { type: DaffInMemoryBackendCartShippingMethodsService },
    { type: DaffInMemoryBackendCartPaymentService },
    { type: DaffInMemoryBackendCartShippingInformationService }
];
/** @nocollapse */ DaffInMemoryBackendCartRootService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartRootService_Factory() { return new DaffInMemoryBackendCartRootService(i0.ɵɵinject(i1.DaffInMemoryBackendCartService), i0.ɵɵinject(i2.DaffInMemoryBackendCartItemsService), i0.ɵɵinject(i3.DaffInMemoryBackendCartOrderService), i0.ɵɵinject(i4.DaffInMemoryBackendCartCouponService), i0.ɵɵinject(i5.DaffInMemoryBackendCartAddressService), i0.ɵɵinject(i6.DaffInMemoryBackendCartShippingAddressService), i0.ɵɵinject(i7.DaffInMemoryBackendCartBillingAddressService), i0.ɵɵinject(i8.DaffInMemoryBackendCartPaymentMethodsService), i0.ɵɵinject(i9.DaffInMemoryBackendCartShippingMethodsService), i0.ɵɵinject(i10.DaffInMemoryBackendCartPaymentService), i0.ɵɵinject(i11.DaffInMemoryBackendCartShippingInformationService)); }, token: DaffInMemoryBackendCartRootService, providedIn: "root" });
if (false) {
    /**
     * The collections that the root service manages.
     * Useful for a higher-level backend that delegates to this one based on collection name.
     * @type {?}
     */
    DaffInMemoryBackendCartRootService.COLLECTION_NAMES;
    /** @type {?} */
    DaffInMemoryBackendCartRootService.prototype.carts;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCartRootService.prototype.cartService;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCartRootService.prototype.cartItemsService;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCartRootService.prototype.cartOrderService;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCartRootService.prototype.cartCouponService;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCartRootService.prototype.cartAddressService;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCartRootService.prototype.cartShippingAddressService;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCartRootService.prototype.cartBillingAddressService;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCartRootService.prototype.cartPaymentMethodsService;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCartRootService.prototype.cartShippingMethodsService;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCartRootService.prototype.cartPaymentService;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCartRootService.prototype.cartShippingInformationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1yb290LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvaW4tbWVtb3J5LyIsInNvdXJjZXMiOlsiYmFja2VuZC9jYXJ0LXJvb3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWtDLE1BQU0sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBS25GLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzVGLE9BQU8sRUFBRSw2Q0FBNkMsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3RILE9BQU8sRUFBRSw0Q0FBNEMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ25ILE9BQU8sRUFBRSw0Q0FBNEMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ25ILE9BQU8sRUFBRSw2Q0FBNkMsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3RILE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxpREFBaUQsRUFBRSxNQUFNLCtEQUErRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVNsSSxNQUFNLE9BQU8sa0NBQWtDOzs7Ozs7Ozs7Ozs7OztJQXFCN0MsWUFDVSxXQUEyQyxFQUMzQyxnQkFBcUQsRUFDckQsZ0JBQXFELEVBQ3JELGlCQUF1RCxFQUN2RCxrQkFBeUQsRUFDekQsMEJBQXlFLEVBQ3pFLHlCQUF1RSxFQUN2RSx5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RDs7Ozs7SUFDN0QsK0RBQStEOzs7OztJQUMvRCxnRUFBaUU7Ozs7O0lBQ2pFLHdFQUFpRjs7Ozs7SUFDakYsdUVBQStFOzs7OztJQUMvRSx1RUFBK0U7Ozs7O0lBQy9FLHdFQUFpRjs7Ozs7SUFDakYsZ0VBQWlFOzs7OztJQUNqRSw0RUFBeUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbk1lbW9yeURiU2VydmljZSwgUmVxdWVzdEluZm8sIFNUQVRVUyB9IGZyb20gJ2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGknO1xuXG5pbXBvcnQgeyBEYWZmQ2FydCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7IERhZmZJbk1lbW9yeURhdGFTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmltcG9ydCB7IERhZmZJbk1lbW9yeUJhY2tlbmRDYXJ0U2VydmljZSB9IGZyb20gJy4vY2FydC9jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZkluTWVtb3J5QmFja2VuZENhcnRJdGVtc1NlcnZpY2UgfSBmcm9tICcuL2NhcnQtaXRlbXMvY2FydC1pdGVtcy5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZJbk1lbW9yeUJhY2tlbmRDYXJ0T3JkZXJTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LW9yZGVyL2NhcnQtb3JkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydENvdXBvblNlcnZpY2UgfSBmcm9tICcuL2NhcnQtY291cG9uL2NhcnQtY291cG9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZkluTWVtb3J5QmFja2VuZENhcnRBZGRyZXNzU2VydmljZSB9IGZyb20gJy4vY2FydC1hZGRyZXNzL2NhcnQtYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZJbk1lbW9yeUJhY2tlbmRDYXJ0U2hpcHBpbmdBZGRyZXNzU2VydmljZSB9IGZyb20gJy4vY2FydC1zaGlwcGluZy1hZGRyZXNzL2NhcnQtc2hpcHBpbmctYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZJbk1lbW9yeUJhY2tlbmRDYXJ0QmlsbGluZ0FkZHJlc3NTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LWJpbGxpbmctYWRkcmVzcy9jYXJ0LWJpbGxpbmctYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZJbk1lbW9yeUJhY2tlbmRDYXJ0UGF5bWVudE1ldGhvZHNTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LXBheW1lbnQtbWV0aG9kcy9jYXJ0LXBheW1lbnQtbWV0aG9kcy5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZJbk1lbW9yeUJhY2tlbmRDYXJ0U2hpcHBpbmdNZXRob2RzU2VydmljZSB9IGZyb20gJy4vY2FydC1zaGlwcGluZy1tZXRob2RzL2NhcnQtc2hpcHBpbmctbWV0aG9kcy5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZJbk1lbW9yeUJhY2tlbmRDYXJ0UGF5bWVudFNlcnZpY2UgfSBmcm9tICcuL2NhcnQtcGF5bWVudC9jYXJ0LXBheW1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LXNoaXBwaW5nLWluZm9ybWF0aW9uL2NhcnQtc2hpcHBpbmctaW5mb3JtYXRpb24uc2VydmljZSc7XG5cbi8qKlxuICogVGhlIHJvb3QgY2FydCBpbi1tZW1vcnkgYmFja2VuZC5cbiAqIENyZWF0ZXMgdGhlIGRhdGFiYXNlIGFuZCBkZWxlZ2F0ZXMgcmVxdWVzdHMgdG8gY2hpbGQgYmFja2VuZHMuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUJhY2tlbmRDYXJ0Um9vdFNlcnZpY2UgaW1wbGVtZW50cyBJbk1lbW9yeURiU2VydmljZSwgRGFmZkluTWVtb3J5RGF0YVNlcnZpY2VJbnRlcmZhY2Uge1xuICAvKipcbiAgICogVGhlIGNvbGxlY3Rpb25zIHRoYXQgdGhlIHJvb3Qgc2VydmljZSBtYW5hZ2VzLlxuICAgKiBVc2VmdWwgZm9yIGEgaGlnaGVyLWxldmVsIGJhY2tlbmQgdGhhdCBkZWxlZ2F0ZXMgdG8gdGhpcyBvbmUgYmFzZWQgb24gY29sbGVjdGlvbiBuYW1lLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBDT0xMRUNUSU9OX05BTUVTID0gW1xuICAgICdjYXJ0JyxcbiAgICAnY2FydC1pdGVtcycsXG4gICAgJ2NhcnQtb3JkZXInLFxuICAgICdjYXJ0LWNvdXBvbicsXG4gICAgJ2NhcnQtYWRkcmVzcycsXG4gICAgJ2NhcnQtc2hpcHBpbmctYWRkcmVzcycsXG4gICAgJ2NhcnQtYmlsbGluZy1hZGRyZXNzJyxcbiAgICAnY2FydC1wYXltZW50LW1ldGhvZHMnLFxuICAgICdjYXJ0LXNoaXBwaW5nLW1ldGhvZHMnLFxuICAgICdjYXJ0LXBheW1lbnQnLFxuICAgICdjYXJ0LXNoaXBwaW5nLWluZm9ybWF0aW9uJyxcbiAgXVxuXG4gIHB1YmxpYyBjYXJ0czogRGFmZkNhcnRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2FydFNlcnZpY2U6IERhZmZJbk1lbW9yeUJhY2tlbmRDYXJ0U2VydmljZSxcbiAgICBwcml2YXRlIGNhcnRJdGVtc1NlcnZpY2U6IERhZmZJbk1lbW9yeUJhY2tlbmRDYXJ0SXRlbXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FydE9yZGVyU2VydmljZTogRGFmZkluTWVtb3J5QmFja2VuZENhcnRPcmRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYXJ0Q291cG9uU2VydmljZTogRGFmZkluTWVtb3J5QmFja2VuZENhcnRDb3Vwb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FydEFkZHJlc3NTZXJ2aWNlOiBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydEFkZHJlc3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FydFNoaXBwaW5nQWRkcmVzc1NlcnZpY2U6IERhZmZJbk1lbW9yeUJhY2tlbmRDYXJ0U2hpcHBpbmdBZGRyZXNzU2VydmljZSxcbiAgICBwcml2YXRlIGNhcnRCaWxsaW5nQWRkcmVzc1NlcnZpY2U6IERhZmZJbk1lbW9yeUJhY2tlbmRDYXJ0QmlsbGluZ0FkZHJlc3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FydFBheW1lbnRNZXRob2RzU2VydmljZTogRGFmZkluTWVtb3J5QmFja2VuZENhcnRQYXltZW50TWV0aG9kc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYXJ0U2hpcHBpbmdNZXRob2RzU2VydmljZTogRGFmZkluTWVtb3J5QmFja2VuZENhcnRTaGlwcGluZ01ldGhvZHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FydFBheW1lbnRTZXJ2aWNlOiBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydFBheW1lbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FydFNoaXBwaW5nSW5mb3JtYXRpb25TZXJ2aWNlOiBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25TZXJ2aWNlLFxuICApIHt9XG5cbiAgY3JlYXRlRGIocmVxSW5mbzogUmVxdWVzdEluZm8pIHtcbiAgICBpZiAocmVxSW5mbykge1xuICAgICAgY29uc3Qgc2VlZERhdGEgPSByZXFJbmZvLnV0aWxzLmdldEpzb25Cb2R5KHJlcUluZm8ucmVxKS5jYXJ0cztcbiAgICAgIGlmIChzZWVkRGF0YSkge1xuICAgICAgICB0aGlzLmNhcnRzID0gc2VlZERhdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcnQ6IHRoaXMuY2FydHNcbiAgICB9O1xuICB9XG5cbiAgZ2V0KHJlcUluZm86IFJlcXVlc3RJbmZvKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsZWdhdGVSZXF1ZXN0KHJlcUluZm8pXG4gIH1cblxuICBwb3N0KHJlcUluZm86IFJlcXVlc3RJbmZvKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsZWdhdGVSZXF1ZXN0KHJlcUluZm8pXG4gIH1cblxuICBwdXQocmVxSW5mbzogUmVxdWVzdEluZm8pIHtcbiAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZVJlcXVlc3QocmVxSW5mbylcbiAgfVxuXG4gIGRlbGV0ZShyZXFJbmZvOiBSZXF1ZXN0SW5mbykge1xuICAgIHJldHVybiB0aGlzLmRlbGVnYXRlUmVxdWVzdChyZXFJbmZvKVxuICB9XG5cbiAgcHJpdmF0ZSBkZWxlZ2F0ZVJlcXVlc3QocmVxSW5mbzogUmVxdWVzdEluZm8pIHtcbiAgICByZXFJbmZvLmNvbGxlY3Rpb24gPSB0aGlzLmNhcnRzO1xuXG4gICAgc3dpdGNoIChyZXFJbmZvLmNvbGxlY3Rpb25OYW1lKSB7XG4gICAgICBjYXNlICdjYXJ0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FydFNlcnZpY2VbcmVxSW5mby5tZXRob2RdKHJlcUluZm8pO1xuXG4gICAgICBjYXNlICdjYXJ0LWl0ZW1zJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FydEl0ZW1zU2VydmljZVtyZXFJbmZvLm1ldGhvZF0ocmVxSW5mbyk7XG5cbiAgICAgIGNhc2UgJ2NhcnQtb3JkZXInOlxuICAgICAgICByZXR1cm4gdGhpcy5jYXJ0T3JkZXJTZXJ2aWNlW3JlcUluZm8ubWV0aG9kXShyZXFJbmZvKTtcblxuICAgICAgY2FzZSAnY2FydC1jb3Vwb24nOlxuICAgICAgICByZXR1cm4gdGhpcy5jYXJ0Q291cG9uU2VydmljZVtyZXFJbmZvLm1ldGhvZF0ocmVxSW5mbyk7XG5cbiAgICAgIGNhc2UgJ2NhcnQtYWRkcmVzcyc6XG4gICAgICAgIHJldHVybiB0aGlzLmNhcnRBZGRyZXNzU2VydmljZVtyZXFJbmZvLm1ldGhvZF0ocmVxSW5mbyk7XG5cbiAgICAgIGNhc2UgJ2NhcnQtc2hpcHBpbmctYWRkcmVzcyc6XG4gICAgICAgIHJldHVybiB0aGlzLmNhcnRTaGlwcGluZ0FkZHJlc3NTZXJ2aWNlW3JlcUluZm8ubWV0aG9kXShyZXFJbmZvKTtcblxuICAgICAgY2FzZSAnY2FydC1iaWxsaW5nLWFkZHJlc3MnOlxuICAgICAgICByZXR1cm4gdGhpcy5jYXJ0QmlsbGluZ0FkZHJlc3NTZXJ2aWNlW3JlcUluZm8ubWV0aG9kXShyZXFJbmZvKTtcblxuICAgICAgY2FzZSAnY2FydC1wYXltZW50LW1ldGhvZHMnOlxuICAgICAgICByZXR1cm4gdGhpcy5jYXJ0UGF5bWVudE1ldGhvZHNTZXJ2aWNlW3JlcUluZm8ubWV0aG9kXShyZXFJbmZvKTtcblxuICAgICAgY2FzZSAnY2FydC1zaGlwcGluZy1tZXRob2RzJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FydFNoaXBwaW5nTWV0aG9kc1NlcnZpY2VbcmVxSW5mby5tZXRob2RdKHJlcUluZm8pO1xuXG4gICAgICBjYXNlICdjYXJ0LXBheW1lbnQnOlxuICAgICAgICByZXR1cm4gdGhpcy5jYXJ0UGF5bWVudFNlcnZpY2VbcmVxSW5mby5tZXRob2RdKHJlcUluZm8pO1xuXG4gICAgICBjYXNlICdjYXJ0LXNoaXBwaW5nLWluZm9ybWF0aW9uJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FydFNoaXBwaW5nSW5mb3JtYXRpb25TZXJ2aWNlW3JlcUluZm8ubWV0aG9kXShyZXFJbmZvKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHJlcUluZm8udXRpbHMuY3JlYXRlUmVzcG9uc2UkKCgpID0+ICh7XG4gICAgICAgICAgYm9keToge30sXG4gICAgICAgICAgc3RhdHVzOiBTVEFUVVMuT0tcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgfVxufVxuIl19