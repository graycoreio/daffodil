import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DaffCartNotFoundError, DaffCartDriver, DaffCartAddressDriver, DaffCartBillingAddressDriver, DaffCartItemDriver, DaffCartPaymentDriver, DaffCartPaymentMethodsDriver, DaffCartShippingAddressDriver, DaffCartShippingInformationDriver, DaffCartShippingMethodsDriver, DaffCartOrderDriver, DaffCartCouponDriver } from '@daffodil/cart/driver';
import { CommonModule } from '@angular/common';
import { STATUS } from 'angular-in-memory-web-api';
import { DaffCartFactory, DaffCartItemFactory } from '@daffodil/cart/testing';
import { __assign } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryCartService = /** @class */ (function () {
    function DaffInMemoryCartService(http) {
        this.http = http;
        this.url = '/api/cart';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCartService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.get(this.url + "/" + cartId).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(DaffCartNotFoundError); })), map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result; })));
    };
    /**
     * @param {?} productId
     * @param {?} qty
     * @return {?}
     */
    DaffInMemoryCartService.prototype.addToCart = /**
     * @param {?} productId
     * @param {?} qty
     * @return {?}
     */
    function (productId, qty) {
        return this.http.post(this.url + '/addToCart', { productId: productId, qty: qty });
    };
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCartService.prototype.clear = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.post(this.url + "/" + cartId + "/clear", {});
    };
    /**
     * @return {?}
     */
    DaffInMemoryCartService.prototype.create = /**
     * @return {?}
     */
    function () {
        return this.http.post(this.url, {});
    };
    DaffInMemoryCartService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCartService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCartService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCartService_Factory() { return new DaffInMemoryCartService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCartService, providedIn: "root" });
    return DaffInMemoryCartService;
}());
if (false) {
    /** @type {?} */
    DaffInMemoryCartService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryCartItemService = /** @class */ (function () {
    function DaffInMemoryCartItemService(http) {
        this.http = http;
        this.url = '/api/cart-items';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCartItemService.prototype.list = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.get(this.url + "/" + cartId + "/");
    };
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    DaffInMemoryCartItemService.prototype.get = /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    function (cartId, itemId) {
        return this.http.get(this.url + "/" + cartId + "/" + itemId);
    };
    /**
     * @param {?} cartId
     * @param {?} input
     * @return {?}
     */
    DaffInMemoryCartItemService.prototype.add = /**
     * @param {?} cartId
     * @param {?} input
     * @return {?}
     */
    function (cartId, input) {
        return this.http.post(this.url + "/" + cartId + "/", input);
    };
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @param {?} item
     * @return {?}
     */
    DaffInMemoryCartItemService.prototype.update = /**
     * @param {?} cartId
     * @param {?} itemId
     * @param {?} item
     * @return {?}
     */
    function (cartId, itemId, item) {
        return this.http.put(this.url + "/" + cartId + "/" + itemId, item);
    };
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    DaffInMemoryCartItemService.prototype.delete = /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    function (cartId, itemId) {
        return this.http.delete(this.url + "/" + cartId + "/" + itemId);
    };
    DaffInMemoryCartItemService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCartItemService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCartItemService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCartItemService_Factory() { return new DaffInMemoryCartItemService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCartItemService, providedIn: "root" });
    return DaffInMemoryCartItemService;
}());
if (false) {
    /** @type {?} */
    DaffInMemoryCartItemService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartItemService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryCartBillingAddressService = /** @class */ (function () {
    function DaffInMemoryCartBillingAddressService(http) {
        this.http = http;
        this.url = '/api/cart-billing-address';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCartBillingAddressService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.get(this.url + "/" + cartId);
    };
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffInMemoryCartBillingAddressService.prototype.update = /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        return this.http.put(this.url + "/" + cartId, address);
    };
    DaffInMemoryCartBillingAddressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCartBillingAddressService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCartBillingAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCartBillingAddressService_Factory() { return new DaffInMemoryCartBillingAddressService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCartBillingAddressService, providedIn: "root" });
    return DaffInMemoryCartBillingAddressService;
}());
if (false) {
    /** @type {?} */
    DaffInMemoryCartBillingAddressService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartBillingAddressService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryCartPaymentService = /** @class */ (function () {
    function DaffInMemoryCartPaymentService(http) {
        this.http = http;
        this.url = '/api/cart-payment';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCartPaymentService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.get(this.url + "/" + cartId);
    };
    /**
     * @param {?} cartId
     * @param {?} payment
     * @return {?}
     */
    DaffInMemoryCartPaymentService.prototype.update = /**
     * @param {?} cartId
     * @param {?} payment
     * @return {?}
     */
    function (cartId, payment) {
        return this.http.put(this.url + "/" + cartId, { payment: payment });
    };
    /**
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    DaffInMemoryCartPaymentService.prototype.updateWithBilling = /**
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    function (cartId, payment, address) {
        return this.http.put(this.url + "/" + cartId, { payment: payment, address: address });
    };
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCartPaymentService.prototype.remove = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.delete(this.url + "/" + cartId);
    };
    DaffInMemoryCartPaymentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCartPaymentService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCartPaymentService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCartPaymentService_Factory() { return new DaffInMemoryCartPaymentService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCartPaymentService, providedIn: "root" });
    return DaffInMemoryCartPaymentService;
}());
if (false) {
    /** @type {?} */
    DaffInMemoryCartPaymentService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartPaymentService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryCartPaymentMethodsService = /** @class */ (function () {
    function DaffInMemoryCartPaymentMethodsService(http) {
        this.http = http;
        this.url = '/api/cart-payment-methods';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCartPaymentMethodsService.prototype.list = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.get(this.url + "/" + cartId);
    };
    DaffInMemoryCartPaymentMethodsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCartPaymentMethodsService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCartPaymentMethodsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCartPaymentMethodsService_Factory() { return new DaffInMemoryCartPaymentMethodsService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCartPaymentMethodsService, providedIn: "root" });
    return DaffInMemoryCartPaymentMethodsService;
}());
if (false) {
    /** @type {?} */
    DaffInMemoryCartPaymentMethodsService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartPaymentMethodsService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryCartShippingAddressService = /** @class */ (function () {
    function DaffInMemoryCartShippingAddressService(http) {
        this.http = http;
        this.url = '/api/cart-shipping-address';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCartShippingAddressService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.get(this.url + "/" + cartId);
    };
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffInMemoryCartShippingAddressService.prototype.update = /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        return this.http.put(this.url + "/" + cartId, address);
    };
    DaffInMemoryCartShippingAddressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCartShippingAddressService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCartShippingAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCartShippingAddressService_Factory() { return new DaffInMemoryCartShippingAddressService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCartShippingAddressService, providedIn: "root" });
    return DaffInMemoryCartShippingAddressService;
}());
if (false) {
    /** @type {?} */
    DaffInMemoryCartShippingAddressService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartShippingAddressService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryCartShippingInformationService = /** @class */ (function () {
    function DaffInMemoryCartShippingInformationService(http) {
        this.http = http;
        this.url = '/api/cart-shipping-information';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCartShippingInformationService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.get(this.url + "/" + cartId);
    };
    /**
     * @param {?} cartId
     * @param {?} info
     * @return {?}
     */
    DaffInMemoryCartShippingInformationService.prototype.update = /**
     * @param {?} cartId
     * @param {?} info
     * @return {?}
     */
    function (cartId, info) {
        return this.http.put(this.url + "/" + cartId, info);
    };
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCartShippingInformationService.prototype.delete = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.delete(this.url + "/" + cartId);
    };
    DaffInMemoryCartShippingInformationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCartShippingInformationService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCartShippingInformationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCartShippingInformationService_Factory() { return new DaffInMemoryCartShippingInformationService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCartShippingInformationService, providedIn: "root" });
    return DaffInMemoryCartShippingInformationService;
}());
if (false) {
    /** @type {?} */
    DaffInMemoryCartShippingInformationService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartShippingInformationService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryCartShippingMethodsService = /** @class */ (function () {
    function DaffInMemoryCartShippingMethodsService(http) {
        this.http = http;
        this.url = '/api/cart-shipping-methods';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCartShippingMethodsService.prototype.list = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.get(this.url + "/" + cartId);
    };
    DaffInMemoryCartShippingMethodsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCartShippingMethodsService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCartShippingMethodsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCartShippingMethodsService_Factory() { return new DaffInMemoryCartShippingMethodsService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCartShippingMethodsService, providedIn: "root" });
    return DaffInMemoryCartShippingMethodsService;
}());
if (false) {
    /** @type {?} */
    DaffInMemoryCartShippingMethodsService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartShippingMethodsService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryCartOrderService = /** @class */ (function () {
    function DaffInMemoryCartOrderService(http) {
        this.http = http;
        this.url = '/api/cart-order';
    }
    /**
     * @param {?} cartId
     * @param {?=} payment
     * @return {?}
     */
    DaffInMemoryCartOrderService.prototype.placeOrder = /**
     * @param {?} cartId
     * @param {?=} payment
     * @return {?}
     */
    function (cartId, payment) {
        return this.http.post(this.url + "/" + cartId + "/", { payment: payment });
    };
    DaffInMemoryCartOrderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCartOrderService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCartOrderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCartOrderService_Factory() { return new DaffInMemoryCartOrderService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCartOrderService, providedIn: "root" });
    return DaffInMemoryCartOrderService;
}());
if (false) {
    /** @type {?} */
    DaffInMemoryCartOrderService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartOrderService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryCartCouponService = /** @class */ (function () {
    function DaffInMemoryCartCouponService(http) {
        this.http = http;
        this.url = '/api/cart-coupon';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCartCouponService.prototype.list = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.get(this.url + "/" + cartId + "/");
    };
    /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    DaffInMemoryCartCouponService.prototype.apply = /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    function (cartId, coupon) {
        return this.http.post(this.url + "/" + cartId + "/", coupon);
    };
    /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    DaffInMemoryCartCouponService.prototype.remove = /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    function (cartId, coupon) {
        return this.http.delete(this.url + "/" + cartId + "/" + coupon.code);
    };
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCartCouponService.prototype.removeAll = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.delete(this.url + "/" + cartId + "/");
    };
    DaffInMemoryCartCouponService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCartCouponService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCartCouponService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCartCouponService_Factory() { return new DaffInMemoryCartCouponService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCartCouponService, providedIn: "root" });
    return DaffInMemoryCartCouponService;
}());
if (false) {
    /** @type {?} */
    DaffInMemoryCartCouponService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartCouponService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryCartAddressService = /** @class */ (function () {
    function DaffInMemoryCartAddressService(http) {
        this.http = http;
        this.url = '/api/cart-address';
    }
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffInMemoryCartAddressService.prototype.update = /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        return this.http.put(this.url + "/" + cartId, address);
    };
    DaffInMemoryCartAddressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCartAddressService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCartAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCartAddressService_Factory() { return new DaffInMemoryCartAddressService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCartAddressService, providedIn: "root" });
    return DaffInMemoryCartAddressService;
}());
if (false) {
    /** @type {?} */
    DaffInMemoryCartAddressService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCartAddressService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffCartInMemoryDriverModule = /** @class */ (function () {
    function DaffCartInMemoryDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffCartInMemoryDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffCartInMemoryDriverModule,
            providers: [
                {
                    provide: DaffCartDriver,
                    useExisting: DaffInMemoryCartService
                },
                {
                    provide: DaffCartAddressDriver,
                    useExisting: DaffInMemoryCartAddressService
                },
                {
                    provide: DaffCartBillingAddressDriver,
                    useExisting: DaffInMemoryCartBillingAddressService
                },
                {
                    provide: DaffCartItemDriver,
                    useExisting: DaffInMemoryCartItemService
                },
                {
                    provide: DaffCartPaymentDriver,
                    useExisting: DaffInMemoryCartPaymentService
                },
                {
                    provide: DaffCartPaymentMethodsDriver,
                    useExisting: DaffInMemoryCartPaymentMethodsService
                },
                {
                    provide: DaffCartShippingAddressDriver,
                    useExisting: DaffInMemoryCartShippingAddressService
                },
                {
                    provide: DaffCartShippingInformationDriver,
                    useExisting: DaffInMemoryCartShippingInformationService
                },
                {
                    provide: DaffCartShippingMethodsDriver,
                    useExisting: DaffInMemoryCartShippingMethodsService
                },
                {
                    provide: DaffCartOrderDriver,
                    useExisting: DaffInMemoryCartOrderService
                },
                {
                    provide: DaffCartCouponDriver,
                    useExisting: DaffInMemoryCartCouponService
                }
            ]
        };
    };
    DaffCartInMemoryDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffCartInMemoryDriverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryBackendCartService = /** @class */ (function () {
    function DaffInMemoryBackendCartService(cartFactory) {
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartService.prototype.get = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: cart,
            status: cart ? STATUS.OK : STATUS.NOT_FOUND
        }); }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartService.prototype.post = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var body;
            /** @type {?} */
            var action = _this.getAction(reqInfo);
            if (reqInfo.id === 'addToCart') {
                // deprecated
                body = {};
            }
            else if (action === 'clear') {
                body = _this.clear(reqInfo);
            }
            else {
                body = _this.create(reqInfo);
            }
            return {
                body: body,
                status: STATUS.OK
            };
        }));
    };
    /**
     * Gets whatever follows the cart ID section of the request URL.
     */
    /**
     * Gets whatever follows the cart ID section of the request URL.
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartService.prototype.getAction = /**
     * Gets whatever follows the cart ID section of the request URL.
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.url.replace("/" + reqInfo.resourceUrl + reqInfo.id + "/", '');
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartService.prototype.clear = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        cart.items = [];
        return cart;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartService.prototype.create = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.cartFactory.create();
        reqInfo.collection.push(cart);
        return {
            id: cart.id
        };
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartService.prototype.getCart = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, reqInfo.id);
    };
    DaffInMemoryBackendCartService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryBackendCartService.ctorParameters = function () { return [
        { type: DaffCartFactory }
    ]; };
    /** @nocollapse */ DaffInMemoryBackendCartService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartService_Factory() { return new DaffInMemoryBackendCartService(ɵɵinject(DaffCartFactory)); }, token: DaffInMemoryBackendCartService, providedIn: "root" });
    return DaffInMemoryBackendCartService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCartService.prototype.cartFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryBackendCartItemsService = /** @class */ (function () {
    function DaffInMemoryBackendCartItemsService(cartItemFactory) {
        this.cartItemFactory = cartItemFactory;
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.get = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var body;
            /** @type {?} */
            var action = _this.getAction(reqInfo);
            if (action) {
                body = _this.getItem(reqInfo, action);
            }
            else {
                body = _this.listItems(reqInfo);
            }
            return {
                body: body,
                status: STATUS.OK
            };
        }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.put = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.updateItem(reqInfo, _this.getAction(reqInfo)),
            status: STATUS.OK
        }); }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.post = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.addItem(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.delete = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.deleteItem(reqInfo, _this.getAction(reqInfo)),
            status: STATUS.OK
        }); }));
    };
    /**
     * Gets whatever follows the cart ID section of the request URL.
     */
    /**
     * Gets whatever follows the cart ID section of the request URL.
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.getAction = /**
     * Gets whatever follows the cart ID section of the request URL.
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.url.replace("/" + reqInfo.resourceUrl + reqInfo.id + "/", '');
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.getCart = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
    };
    /**
     * @private
     * @param {?} itemInput
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.transformItemInput = /**
     * @private
     * @param {?} itemInput
     * @return {?}
     */
    function (itemInput) {
        return __assign({}, this.cartItemFactory.create(), itemInput, { product_id: itemInput.productId });
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.listItems = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return this.getCart(reqInfo).items;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @param {?} itemId
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.getItem = /**
     * @private
     * @param {?} reqInfo
     * @param {?} itemId
     * @return {?}
     */
    function (reqInfo, itemId) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        return cart.items.find((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var item_id = _a.item_id;
            return String(item_id) === String(itemId);
        }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @param {?} itemId
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.updateItem = /**
     * @private
     * @param {?} reqInfo
     * @param {?} itemId
     * @return {?}
     */
    function (reqInfo, itemId) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        /** @type {?} */
        var item = reqInfo.utils.getJsonBody(reqInfo.req);
        /** @type {?} */
        var itemIndex = cart.items.findIndex((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var item_id = _a.item_id;
            return String(itemId) === String(item_id);
        }));
        cart.items[itemIndex] = __assign({}, cart.items[itemIndex], item);
        cart.items = Object.assign([], cart.items);
        return cart;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.addItem = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        /** @type {?} */
        var itemInput = reqInfo.utils.getJsonBody(reqInfo.req);
        /** @type {?} */
        var existingCartItemIndex = cart.items.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.product_id === itemInput.productId; }));
        if (existingCartItemIndex > -1) {
            cart.items[existingCartItemIndex].qty = cart.items[existingCartItemIndex].qty + itemInput.qty;
        }
        else {
            cart.items.push(this.transformItemInput(itemInput));
        }
        cart.items = Object.assign([], cart.items);
        return cart;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @param {?} itemId
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.deleteItem = /**
     * @private
     * @param {?} reqInfo
     * @param {?} itemId
     * @return {?}
     */
    function (reqInfo, itemId) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        /** @type {?} */
        var itemIndex = cart.items.findIndex((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var item_id = _a.item_id;
            return String(itemId) === String(item_id);
        }));
        cart.items.splice(itemIndex, 1);
        cart.items = Object.assign([], cart.items);
        return cart;
    };
    DaffInMemoryBackendCartItemsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryBackendCartItemsService.ctorParameters = function () { return [
        { type: DaffCartItemFactory }
    ]; };
    /** @nocollapse */ DaffInMemoryBackendCartItemsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartItemsService_Factory() { return new DaffInMemoryBackendCartItemsService(ɵɵinject(DaffCartItemFactory)); }, token: DaffInMemoryBackendCartItemsService, providedIn: "root" });
    return DaffInMemoryBackendCartItemsService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCartItemsService.prototype.cartItemFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryBackendCartOrderService = /** @class */ (function () {
    function DaffInMemoryBackendCartOrderService() {
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartOrderService.prototype.post = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.placeOrder(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartOrderService.prototype.placeOrder = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return {
            id: '8235422034',
            cartId: '89fdsa8sadf',
            orderId: '8235422034',
        };
    };
    DaffInMemoryBackendCartOrderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffInMemoryBackendCartOrderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartOrderService_Factory() { return new DaffInMemoryBackendCartOrderService(); }, token: DaffInMemoryBackendCartOrderService, providedIn: "root" });
    return DaffInMemoryBackendCartOrderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryBackendCartCouponService = /** @class */ (function () {
    function DaffInMemoryBackendCartCouponService() {
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartCouponService.prototype.get = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.listCoupons(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartCouponService.prototype.post = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.applyCoupon(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartCouponService.prototype.delete = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var body;
            /** @type {?} */
            var action = _this.getAction(reqInfo);
            if (action) {
                body = _this.removeCoupon(reqInfo, action);
            }
            else {
                body = _this.removeAllCoupons(reqInfo);
            }
            return {
                body: body,
                status: STATUS.OK
            };
        }));
    };
    /**
     * Gets whatever follows the cart ID section of the request URL.
     */
    /**
     * Gets whatever follows the cart ID section of the request URL.
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartCouponService.prototype.getAction = /**
     * Gets whatever follows the cart ID section of the request URL.
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.url.replace("/" + reqInfo.resourceUrl + reqInfo.id + "/", '');
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartCouponService.prototype.getCart = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartCouponService.prototype.listCoupons = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return this.getCart(reqInfo).coupons;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartCouponService.prototype.applyCoupon = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        /** @type {?} */
        var coupon = reqInfo.utils.getJsonBody(reqInfo.req);
        cart.coupons.push(coupon);
        return cart;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @param {?} couponCode
     * @return {?}
     */
    DaffInMemoryBackendCartCouponService.prototype.removeCoupon = /**
     * @private
     * @param {?} reqInfo
     * @param {?} couponCode
     * @return {?}
     */
    function (reqInfo, couponCode) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        cart.coupons = cart.coupons.filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var code = _a.code;
            return code !== couponCode;
        }));
        return cart;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartCouponService.prototype.removeAllCoupons = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        cart.coupons = [];
        return cart;
    };
    DaffInMemoryBackendCartCouponService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffInMemoryBackendCartCouponService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartCouponService_Factory() { return new DaffInMemoryBackendCartCouponService(); }, token: DaffInMemoryBackendCartCouponService, providedIn: "root" });
    return DaffInMemoryBackendCartCouponService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryBackendCartAddressService = /** @class */ (function () {
    function DaffInMemoryBackendCartAddressService() {
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartAddressService.prototype.put = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.updateAddress(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartAddressService.prototype.getCart = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartAddressService.prototype.updateAddress = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        /** @type {?} */
        var address = reqInfo.utils.getJsonBody(reqInfo.req);
        cart.billing_address = address;
        cart.shipping_address = address;
        return cart;
    };
    DaffInMemoryBackendCartAddressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffInMemoryBackendCartAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartAddressService_Factory() { return new DaffInMemoryBackendCartAddressService(); }, token: DaffInMemoryBackendCartAddressService, providedIn: "root" });
    return DaffInMemoryBackendCartAddressService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryBackendCartShippingAddressService = /** @class */ (function () {
    function DaffInMemoryBackendCartShippingAddressService() {
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingAddressService.prototype.get = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.getShippingAddress(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingAddressService.prototype.put = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.updateShippingAddress(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingAddressService.prototype.getCart = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingAddressService.prototype.getShippingAddress = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return this.getCart(reqInfo).shipping_address;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingAddressService.prototype.updateShippingAddress = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        /** @type {?} */
        var address = reqInfo.utils.getJsonBody(reqInfo.req);
        cart.shipping_address = address;
        return cart;
    };
    DaffInMemoryBackendCartShippingAddressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffInMemoryBackendCartShippingAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartShippingAddressService_Factory() { return new DaffInMemoryBackendCartShippingAddressService(); }, token: DaffInMemoryBackendCartShippingAddressService, providedIn: "root" });
    return DaffInMemoryBackendCartShippingAddressService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryBackendCartBillingAddressService = /** @class */ (function () {
    function DaffInMemoryBackendCartBillingAddressService() {
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartBillingAddressService.prototype.get = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.getBillingAddress(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartBillingAddressService.prototype.put = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.updateBillingAddress(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartBillingAddressService.prototype.getCart = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartBillingAddressService.prototype.getBillingAddress = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return this.getCart(reqInfo).billing_address;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartBillingAddressService.prototype.updateBillingAddress = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        /** @type {?} */
        var address = reqInfo.utils.getJsonBody(reqInfo.req);
        cart.billing_address = address;
        return cart;
    };
    DaffInMemoryBackendCartBillingAddressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffInMemoryBackendCartBillingAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartBillingAddressService_Factory() { return new DaffInMemoryBackendCartBillingAddressService(); }, token: DaffInMemoryBackendCartBillingAddressService, providedIn: "root" });
    return DaffInMemoryBackendCartBillingAddressService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryBackendCartPaymentMethodsService = /** @class */ (function () {
    function DaffInMemoryBackendCartPaymentMethodsService() {
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartPaymentMethodsService.prototype.get = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.listPaymentMethods(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartPaymentMethodsService.prototype.getCart = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartPaymentMethodsService.prototype.listPaymentMethods = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return this.getCart(reqInfo).available_payment_methods;
    };
    DaffInMemoryBackendCartPaymentMethodsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffInMemoryBackendCartPaymentMethodsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartPaymentMethodsService_Factory() { return new DaffInMemoryBackendCartPaymentMethodsService(); }, token: DaffInMemoryBackendCartPaymentMethodsService, providedIn: "root" });
    return DaffInMemoryBackendCartPaymentMethodsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryBackendCartShippingMethodsService = /** @class */ (function () {
    function DaffInMemoryBackendCartShippingMethodsService() {
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingMethodsService.prototype.get = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.listShippingMethods(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingMethodsService.prototype.getCart = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingMethodsService.prototype.listShippingMethods = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return this.getCart(reqInfo).available_shipping_methods;
    };
    DaffInMemoryBackendCartShippingMethodsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffInMemoryBackendCartShippingMethodsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartShippingMethodsService_Factory() { return new DaffInMemoryBackendCartShippingMethodsService(); }, token: DaffInMemoryBackendCartShippingMethodsService, providedIn: "root" });
    return DaffInMemoryBackendCartShippingMethodsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryBackendCartPaymentService = /** @class */ (function () {
    function DaffInMemoryBackendCartPaymentService() {
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartPaymentService.prototype.get = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.getPayment(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartPaymentService.prototype.put = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.updatePayment(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartPaymentService.prototype.delete = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.removePayment(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartPaymentService.prototype.getCart = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartPaymentService.prototype.getPayment = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return this.getCart(reqInfo).payment;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartPaymentService.prototype.updatePayment = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        var _a = reqInfo.utils.getJsonBody(reqInfo.req), payment = _a.payment, address = _a.address;
        cart.payment = payment;
        if (address)
            cart.billing_address = address;
        return cart;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartPaymentService.prototype.removePayment = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        cart.payment = null;
        return cart;
    };
    DaffInMemoryBackendCartPaymentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffInMemoryBackendCartPaymentService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartPaymentService_Factory() { return new DaffInMemoryBackendCartPaymentService(); }, token: DaffInMemoryBackendCartPaymentService, providedIn: "root" });
    return DaffInMemoryBackendCartPaymentService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryBackendCartShippingInformationService = /** @class */ (function () {
    function DaffInMemoryBackendCartShippingInformationService() {
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingInformationService.prototype.get = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.getShippingInformation(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingInformationService.prototype.put = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.updateShippingInformation(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingInformationService.prototype.delete = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.removeShippingInformation(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingInformationService.prototype.getCart = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingInformationService.prototype.getShippingInformation = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return this.getCart(reqInfo).shipping_information;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingInformationService.prototype.updateShippingInformation = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        /** @type {?} */
        var shippingInformation = reqInfo.utils.getJsonBody(reqInfo.req);
        cart.shipping_information = shippingInformation;
        return cart;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartShippingInformationService.prototype.removeShippingInformation = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        cart.shipping_information = null;
        return cart;
    };
    DaffInMemoryBackendCartShippingInformationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffInMemoryBackendCartShippingInformationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartShippingInformationService_Factory() { return new DaffInMemoryBackendCartShippingInformationService(); }, token: DaffInMemoryBackendCartShippingInformationService, providedIn: "root" });
    return DaffInMemoryBackendCartShippingInformationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ DaffInMemoryBackendCartRootService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartRootService_Factory() { return new DaffInMemoryBackendCartRootService(ɵɵinject(DaffInMemoryBackendCartService), ɵɵinject(DaffInMemoryBackendCartItemsService), ɵɵinject(DaffInMemoryBackendCartOrderService), ɵɵinject(DaffInMemoryBackendCartCouponService), ɵɵinject(DaffInMemoryBackendCartAddressService), ɵɵinject(DaffInMemoryBackendCartShippingAddressService), ɵɵinject(DaffInMemoryBackendCartBillingAddressService), ɵɵinject(DaffInMemoryBackendCartPaymentMethodsService), ɵɵinject(DaffInMemoryBackendCartShippingMethodsService), ɵɵinject(DaffInMemoryBackendCartPaymentService), ɵɵinject(DaffInMemoryBackendCartShippingInformationService)); }, token: DaffInMemoryBackendCartRootService, providedIn: "root" });
    return DaffInMemoryBackendCartRootService;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffCartInMemoryDriverModule, DaffInMemoryBackendCartAddressService, DaffInMemoryBackendCartBillingAddressService, DaffInMemoryBackendCartCouponService, DaffInMemoryBackendCartItemsService, DaffInMemoryBackendCartOrderService, DaffInMemoryBackendCartPaymentMethodsService, DaffInMemoryBackendCartPaymentService, DaffInMemoryBackendCartRootService, DaffInMemoryBackendCartService, DaffInMemoryBackendCartShippingAddressService, DaffInMemoryBackendCartShippingInformationService, DaffInMemoryBackendCartShippingMethodsService, DaffInMemoryCartBillingAddressService, DaffInMemoryCartCouponService, DaffInMemoryCartItemService, DaffInMemoryCartOrderService, DaffInMemoryCartPaymentMethodsService, DaffInMemoryCartPaymentService, DaffInMemoryCartService, DaffInMemoryCartShippingAddressService, DaffInMemoryCartShippingInformationService, DaffInMemoryCartShippingMethodsService, DaffInMemoryCartAddressService as ɵa };
//# sourceMappingURL=daffodil-cart-driver-in-memory.js.map
