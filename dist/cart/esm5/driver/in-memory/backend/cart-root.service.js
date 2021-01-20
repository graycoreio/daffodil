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
var DaffInMemoryBackendCartRootService = /** @class */ (function () {
    function DaffInMemoryBackendCartRootService(cartService, cartItemsService, cartOrderService, cartCouponService, cartAddressService, cartShippingAddressService, cartBillingAddressService, cartPaymentMethodsService, cartShippingMethodsService, cartPaymentService, cartShippingInformationService) {
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
    DaffInMemoryBackendCartRootService.prototype.createDb = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        if (reqInfo) {
            /** @type {?} */
            var seedData = reqInfo.utils.getJsonBody(reqInfo.req).carts;
            if (seedData) {
                this.carts = seedData;
            }
        }
        return {
            cart: this.carts
        };
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartRootService.prototype.get = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return this.delegateRequest(reqInfo);
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartRootService.prototype.post = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return this.delegateRequest(reqInfo);
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartRootService.prototype.put = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return this.delegateRequest(reqInfo);
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartRootService.prototype.delete = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return this.delegateRequest(reqInfo);
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartRootService.prototype.delegateRequest = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
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
                function () { return ({
                    body: {},
                    status: STATUS.OK
                }); }));
        }
    };
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
    DaffInMemoryBackendCartRootService.ctorParameters = function () { return [
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
    ]; };
    /** @nocollapse */ DaffInMemoryBackendCartRootService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartRootService_Factory() { return new DaffInMemoryBackendCartRootService(i0.ɵɵinject(i1.DaffInMemoryBackendCartService), i0.ɵɵinject(i2.DaffInMemoryBackendCartItemsService), i0.ɵɵinject(i3.DaffInMemoryBackendCartOrderService), i0.ɵɵinject(i4.DaffInMemoryBackendCartCouponService), i0.ɵɵinject(i5.DaffInMemoryBackendCartAddressService), i0.ɵɵinject(i6.DaffInMemoryBackendCartShippingAddressService), i0.ɵɵinject(i7.DaffInMemoryBackendCartBillingAddressService), i0.ɵɵinject(i8.DaffInMemoryBackendCartPaymentMethodsService), i0.ɵɵinject(i9.DaffInMemoryBackendCartShippingMethodsService), i0.ɵɵinject(i10.DaffInMemoryBackendCartPaymentService), i0.ɵɵinject(i11.DaffInMemoryBackendCartShippingInformationService)); }, token: DaffInMemoryBackendCartRootService, providedIn: "root" });
    return DaffInMemoryBackendCartRootService;
}());
export { DaffInMemoryBackendCartRootService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1yb290LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvaW4tbWVtb3J5LyIsInNvdXJjZXMiOlsiYmFja2VuZC9jYXJ0LXJvb3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWtDLE1BQU0sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBS25GLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzVGLE9BQU8sRUFBRSw2Q0FBNkMsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3RILE9BQU8sRUFBRSw0Q0FBNEMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ25ILE9BQU8sRUFBRSw0Q0FBNEMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ25ILE9BQU8sRUFBRSw2Q0FBNkMsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3RILE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxpREFBaUQsRUFBRSxNQUFNLCtEQUErRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1sSTtJQXdCRSw0Q0FDVSxXQUEyQyxFQUMzQyxnQkFBcUQsRUFDckQsZ0JBQXFELEVBQ3JELGlCQUF1RCxFQUN2RCxrQkFBeUQsRUFDekQsMEJBQXlFLEVBQ3pFLHlCQUF1RSxFQUN2RSx5QkFBdUUsRUFDdkUsMEJBQXlFLEVBQ3pFLGtCQUF5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QUFrQzs7Ozs7OztJQUs3QyxvREFZQzs7SUFFRCxtREFBOEI7Ozs7O0lBRzVCLHlEQUFtRDs7Ozs7SUFDbkQsOERBQTZEOzs7OztJQUM3RCw4REFBNkQ7Ozs7O0lBQzdELCtEQUErRDs7Ozs7SUFDL0QsZ0VBQWlFOzs7OztJQUNqRSx3RUFBaUY7Ozs7O0lBQ2pGLHVFQUErRTs7Ozs7SUFDL0UsdUVBQStFOzs7OztJQUMvRSx3RUFBaUY7Ozs7O0lBQ2pGLGdFQUFpRTs7Ozs7SUFDakUsNEVBQXlGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5NZW1vcnlEYlNlcnZpY2UsIFJlcXVlc3RJbmZvLCBTVEFUVVMgfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcblxuaW1wb3J0IHsgRGFmZkNhcnQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlEYXRhU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydFNlcnZpY2UgfSBmcm9tICcuL2NhcnQvY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZJbk1lbW9yeUJhY2tlbmRDYXJ0SXRlbXNTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LWl0ZW1zL2NhcnQtaXRlbXMuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydE9yZGVyU2VydmljZSB9IGZyb20gJy4vY2FydC1vcmRlci9jYXJ0LW9yZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZkluTWVtb3J5QmFja2VuZENhcnRDb3Vwb25TZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LWNvdXBvbi9jYXJ0LWNvdXBvbi5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZJbk1lbW9yeUJhY2tlbmRDYXJ0QWRkcmVzc1NlcnZpY2UgfSBmcm9tICcuL2NhcnQtYWRkcmVzcy9jYXJ0LWFkZHJlc3Muc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydFNoaXBwaW5nQWRkcmVzc1NlcnZpY2UgfSBmcm9tICcuL2NhcnQtc2hpcHBpbmctYWRkcmVzcy9jYXJ0LXNoaXBwaW5nLWFkZHJlc3Muc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydEJpbGxpbmdBZGRyZXNzU2VydmljZSB9IGZyb20gJy4vY2FydC1iaWxsaW5nLWFkZHJlc3MvY2FydC1iaWxsaW5nLWFkZHJlc3Muc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydFBheW1lbnRNZXRob2RzU2VydmljZSB9IGZyb20gJy4vY2FydC1wYXltZW50LW1ldGhvZHMvY2FydC1wYXltZW50LW1ldGhvZHMuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydFNoaXBwaW5nTWV0aG9kc1NlcnZpY2UgfSBmcm9tICcuL2NhcnQtc2hpcHBpbmctbWV0aG9kcy9jYXJ0LXNoaXBwaW5nLW1ldGhvZHMuc2VydmljZSc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9jYXJ0LXBheW1lbnQvY2FydC1wYXltZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZkluTWVtb3J5QmFja2VuZENhcnRTaGlwcGluZ0luZm9ybWF0aW9uU2VydmljZSB9IGZyb20gJy4vY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi9jYXJ0LXNoaXBwaW5nLWluZm9ybWF0aW9uLnNlcnZpY2UnO1xuXG4vKipcbiAqIFRoZSByb290IGNhcnQgaW4tbWVtb3J5IGJhY2tlbmQuXG4gKiBDcmVhdGVzIHRoZSBkYXRhYmFzZSBhbmQgZGVsZWdhdGVzIHJlcXVlc3RzIHRvIGNoaWxkIGJhY2tlbmRzLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydFJvb3RTZXJ2aWNlIGltcGxlbWVudHMgSW5NZW1vcnlEYlNlcnZpY2UsIERhZmZJbk1lbW9yeURhdGFTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIFRoZSBjb2xsZWN0aW9ucyB0aGF0IHRoZSByb290IHNlcnZpY2UgbWFuYWdlcy5cbiAgICogVXNlZnVsIGZvciBhIGhpZ2hlci1sZXZlbCBiYWNrZW5kIHRoYXQgZGVsZWdhdGVzIHRvIHRoaXMgb25lIGJhc2VkIG9uIGNvbGxlY3Rpb24gbmFtZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ09MTEVDVElPTl9OQU1FUyA9IFtcbiAgICAnY2FydCcsXG4gICAgJ2NhcnQtaXRlbXMnLFxuICAgICdjYXJ0LW9yZGVyJyxcbiAgICAnY2FydC1jb3Vwb24nLFxuICAgICdjYXJ0LWFkZHJlc3MnLFxuICAgICdjYXJ0LXNoaXBwaW5nLWFkZHJlc3MnLFxuICAgICdjYXJ0LWJpbGxpbmctYWRkcmVzcycsXG4gICAgJ2NhcnQtcGF5bWVudC1tZXRob2RzJyxcbiAgICAnY2FydC1zaGlwcGluZy1tZXRob2RzJyxcbiAgICAnY2FydC1wYXltZW50JyxcbiAgICAnY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbicsXG4gIF1cblxuICBwdWJsaWMgY2FydHM6IERhZmZDYXJ0W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYXJ0SXRlbXNTZXJ2aWNlOiBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydEl0ZW1zU2VydmljZSxcbiAgICBwcml2YXRlIGNhcnRPcmRlclNlcnZpY2U6IERhZmZJbk1lbW9yeUJhY2tlbmRDYXJ0T3JkZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FydENvdXBvblNlcnZpY2U6IERhZmZJbk1lbW9yeUJhY2tlbmRDYXJ0Q291cG9uU2VydmljZSxcbiAgICBwcml2YXRlIGNhcnRBZGRyZXNzU2VydmljZTogRGFmZkluTWVtb3J5QmFja2VuZENhcnRBZGRyZXNzU2VydmljZSxcbiAgICBwcml2YXRlIGNhcnRTaGlwcGluZ0FkZHJlc3NTZXJ2aWNlOiBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydFNoaXBwaW5nQWRkcmVzc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYXJ0QmlsbGluZ0FkZHJlc3NTZXJ2aWNlOiBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydEJpbGxpbmdBZGRyZXNzU2VydmljZSxcbiAgICBwcml2YXRlIGNhcnRQYXltZW50TWV0aG9kc1NlcnZpY2U6IERhZmZJbk1lbW9yeUJhY2tlbmRDYXJ0UGF5bWVudE1ldGhvZHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FydFNoaXBwaW5nTWV0aG9kc1NlcnZpY2U6IERhZmZJbk1lbW9yeUJhY2tlbmRDYXJ0U2hpcHBpbmdNZXRob2RzU2VydmljZSxcbiAgICBwcml2YXRlIGNhcnRQYXltZW50U2VydmljZTogRGFmZkluTWVtb3J5QmFja2VuZENhcnRQYXltZW50U2VydmljZSxcbiAgICBwcml2YXRlIGNhcnRTaGlwcGluZ0luZm9ybWF0aW9uU2VydmljZTogRGFmZkluTWVtb3J5QmFja2VuZENhcnRTaGlwcGluZ0luZm9ybWF0aW9uU2VydmljZSxcbiAgKSB7fVxuXG4gIGNyZWF0ZURiKHJlcUluZm86IFJlcXVlc3RJbmZvKSB7XG4gICAgaWYgKHJlcUluZm8pIHtcbiAgICAgIGNvbnN0IHNlZWREYXRhID0gcmVxSW5mby51dGlscy5nZXRKc29uQm9keShyZXFJbmZvLnJlcSkuY2FydHM7XG4gICAgICBpZiAoc2VlZERhdGEpIHtcbiAgICAgICAgdGhpcy5jYXJ0cyA9IHNlZWREYXRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjYXJ0OiB0aGlzLmNhcnRzXG4gICAgfTtcbiAgfVxuXG4gIGdldChyZXFJbmZvOiBSZXF1ZXN0SW5mbykge1xuICAgIHJldHVybiB0aGlzLmRlbGVnYXRlUmVxdWVzdChyZXFJbmZvKVxuICB9XG5cbiAgcG9zdChyZXFJbmZvOiBSZXF1ZXN0SW5mbykge1xuICAgIHJldHVybiB0aGlzLmRlbGVnYXRlUmVxdWVzdChyZXFJbmZvKVxuICB9XG5cbiAgcHV0KHJlcUluZm86IFJlcXVlc3RJbmZvKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsZWdhdGVSZXF1ZXN0KHJlcUluZm8pXG4gIH1cblxuICBkZWxldGUocmVxSW5mbzogUmVxdWVzdEluZm8pIHtcbiAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZVJlcXVlc3QocmVxSW5mbylcbiAgfVxuXG4gIHByaXZhdGUgZGVsZWdhdGVSZXF1ZXN0KHJlcUluZm86IFJlcXVlc3RJbmZvKSB7XG4gICAgcmVxSW5mby5jb2xsZWN0aW9uID0gdGhpcy5jYXJ0cztcblxuICAgIHN3aXRjaCAocmVxSW5mby5jb2xsZWN0aW9uTmFtZSkge1xuICAgICAgY2FzZSAnY2FydCc6XG4gICAgICAgIHJldHVybiB0aGlzLmNhcnRTZXJ2aWNlW3JlcUluZm8ubWV0aG9kXShyZXFJbmZvKTtcblxuICAgICAgY2FzZSAnY2FydC1pdGVtcyc6XG4gICAgICAgIHJldHVybiB0aGlzLmNhcnRJdGVtc1NlcnZpY2VbcmVxSW5mby5tZXRob2RdKHJlcUluZm8pO1xuXG4gICAgICBjYXNlICdjYXJ0LW9yZGVyJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FydE9yZGVyU2VydmljZVtyZXFJbmZvLm1ldGhvZF0ocmVxSW5mbyk7XG5cbiAgICAgIGNhc2UgJ2NhcnQtY291cG9uJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FydENvdXBvblNlcnZpY2VbcmVxSW5mby5tZXRob2RdKHJlcUluZm8pO1xuXG4gICAgICBjYXNlICdjYXJ0LWFkZHJlc3MnOlxuICAgICAgICByZXR1cm4gdGhpcy5jYXJ0QWRkcmVzc1NlcnZpY2VbcmVxSW5mby5tZXRob2RdKHJlcUluZm8pO1xuXG4gICAgICBjYXNlICdjYXJ0LXNoaXBwaW5nLWFkZHJlc3MnOlxuICAgICAgICByZXR1cm4gdGhpcy5jYXJ0U2hpcHBpbmdBZGRyZXNzU2VydmljZVtyZXFJbmZvLm1ldGhvZF0ocmVxSW5mbyk7XG5cbiAgICAgIGNhc2UgJ2NhcnQtYmlsbGluZy1hZGRyZXNzJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FydEJpbGxpbmdBZGRyZXNzU2VydmljZVtyZXFJbmZvLm1ldGhvZF0ocmVxSW5mbyk7XG5cbiAgICAgIGNhc2UgJ2NhcnQtcGF5bWVudC1tZXRob2RzJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FydFBheW1lbnRNZXRob2RzU2VydmljZVtyZXFJbmZvLm1ldGhvZF0ocmVxSW5mbyk7XG5cbiAgICAgIGNhc2UgJ2NhcnQtc2hpcHBpbmctbWV0aG9kcyc6XG4gICAgICAgIHJldHVybiB0aGlzLmNhcnRTaGlwcGluZ01ldGhvZHNTZXJ2aWNlW3JlcUluZm8ubWV0aG9kXShyZXFJbmZvKTtcblxuICAgICAgY2FzZSAnY2FydC1wYXltZW50JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FydFBheW1lbnRTZXJ2aWNlW3JlcUluZm8ubWV0aG9kXShyZXFJbmZvKTtcblxuICAgICAgY2FzZSAnY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbic6XG4gICAgICAgIHJldHVybiB0aGlzLmNhcnRTaGlwcGluZ0luZm9ybWF0aW9uU2VydmljZVtyZXFJbmZvLm1ldGhvZF0ocmVxSW5mbyk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiByZXFJbmZvLnV0aWxzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiAoe1xuICAgICAgICAgIGJvZHk6IHt9LFxuICAgICAgICAgIHN0YXR1czogU1RBVFVTLk9LXG4gICAgICAgIH0pKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==