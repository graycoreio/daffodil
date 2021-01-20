import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DaffCartNotFoundError, DaffCartDriver, DaffCartAddressDriver, DaffCartBillingAddressDriver, DaffCartItemDriver, DaffCartPaymentDriver, DaffCartPaymentMethodsDriver, DaffCartShippingAddressDriver, DaffCartShippingInformationDriver, DaffCartShippingMethodsDriver, DaffCartOrderDriver, DaffCartCouponDriver } from '@daffodil/cart/driver';
import { CommonModule } from '@angular/common';
import { STATUS } from 'angular-in-memory-web-api';
import { DaffCartFactory, DaffCartItemFactory } from '@daffodil/cart/testing';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffInMemoryCartService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/cart';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    get(cartId) {
        return this.http.get(`${this.url}/${cartId}`).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(DaffCartNotFoundError))), map((/**
         * @param {?} result
         * @return {?}
         */
        result => result)));
    }
    /**
     * @param {?} productId
     * @param {?} qty
     * @return {?}
     */
    addToCart(productId, qty) {
        return this.http.post(this.url + '/addToCart', { productId, qty });
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    clear(cartId) {
        return this.http.post(`${this.url}/${cartId}/clear`, {});
    }
    /**
     * @return {?}
     */
    create() {
        return this.http.post(this.url, {});
    }
}
DaffInMemoryCartService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCartService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCartService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCartService_Factory() { return new DaffInMemoryCartService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCartService, providedIn: "root" });
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
class DaffInMemoryCartItemService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/cart-items';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    list(cartId) {
        return this.http.get(`${this.url}/${cartId}/`);
    }
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    get(cartId, itemId) {
        return this.http.get(`${this.url}/${cartId}/${itemId}`);
    }
    /**
     * @param {?} cartId
     * @param {?} input
     * @return {?}
     */
    add(cartId, input) {
        return this.http.post(`${this.url}/${cartId}/`, input);
    }
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @param {?} item
     * @return {?}
     */
    update(cartId, itemId, item) {
        return this.http.put(`${this.url}/${cartId}/${itemId}`, item);
    }
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    delete(cartId, itemId) {
        return this.http.delete(`${this.url}/${cartId}/${itemId}`);
    }
}
DaffInMemoryCartItemService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCartItemService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCartItemService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCartItemService_Factory() { return new DaffInMemoryCartItemService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCartItemService, providedIn: "root" });
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
class DaffInMemoryCartBillingAddressService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/cart-billing-address';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    get(cartId) {
        return this.http.get(`${this.url}/${cartId}`);
    }
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    update(cartId, address) {
        return this.http.put(`${this.url}/${cartId}`, address);
    }
}
DaffInMemoryCartBillingAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCartBillingAddressService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCartBillingAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCartBillingAddressService_Factory() { return new DaffInMemoryCartBillingAddressService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCartBillingAddressService, providedIn: "root" });
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
class DaffInMemoryCartPaymentService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/cart-payment';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    get(cartId) {
        return this.http.get(`${this.url}/${cartId}`);
    }
    /**
     * @param {?} cartId
     * @param {?} payment
     * @return {?}
     */
    update(cartId, payment) {
        return this.http.put(`${this.url}/${cartId}`, { payment });
    }
    /**
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    updateWithBilling(cartId, payment, address) {
        return this.http.put(`${this.url}/${cartId}`, { payment, address });
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    remove(cartId) {
        return this.http.delete(`${this.url}/${cartId}`);
    }
}
DaffInMemoryCartPaymentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCartPaymentService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCartPaymentService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCartPaymentService_Factory() { return new DaffInMemoryCartPaymentService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCartPaymentService, providedIn: "root" });
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
class DaffInMemoryCartPaymentMethodsService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/cart-payment-methods';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    list(cartId) {
        return this.http.get(`${this.url}/${cartId}`);
    }
}
DaffInMemoryCartPaymentMethodsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCartPaymentMethodsService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCartPaymentMethodsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCartPaymentMethodsService_Factory() { return new DaffInMemoryCartPaymentMethodsService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCartPaymentMethodsService, providedIn: "root" });
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
class DaffInMemoryCartShippingAddressService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/cart-shipping-address';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    get(cartId) {
        return this.http.get(`${this.url}/${cartId}`);
    }
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    update(cartId, address) {
        return this.http.put(`${this.url}/${cartId}`, address);
    }
}
DaffInMemoryCartShippingAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCartShippingAddressService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCartShippingAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCartShippingAddressService_Factory() { return new DaffInMemoryCartShippingAddressService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCartShippingAddressService, providedIn: "root" });
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
class DaffInMemoryCartShippingInformationService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/cart-shipping-information';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    get(cartId) {
        return this.http.get(`${this.url}/${cartId}`);
    }
    /**
     * @param {?} cartId
     * @param {?} info
     * @return {?}
     */
    update(cartId, info) {
        return this.http.put(`${this.url}/${cartId}`, info);
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    delete(cartId) {
        return this.http.delete(`${this.url}/${cartId}`);
    }
}
DaffInMemoryCartShippingInformationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCartShippingInformationService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCartShippingInformationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCartShippingInformationService_Factory() { return new DaffInMemoryCartShippingInformationService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCartShippingInformationService, providedIn: "root" });
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
class DaffInMemoryCartShippingMethodsService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/cart-shipping-methods';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    list(cartId) {
        return this.http.get(`${this.url}/${cartId}`);
    }
}
DaffInMemoryCartShippingMethodsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCartShippingMethodsService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCartShippingMethodsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCartShippingMethodsService_Factory() { return new DaffInMemoryCartShippingMethodsService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCartShippingMethodsService, providedIn: "root" });
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
class DaffInMemoryCartOrderService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/cart-order';
    }
    /**
     * @param {?} cartId
     * @param {?=} payment
     * @return {?}
     */
    placeOrder(cartId, payment) {
        return this.http.post(`${this.url}/${cartId}/`, { payment });
    }
}
DaffInMemoryCartOrderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCartOrderService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCartOrderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCartOrderService_Factory() { return new DaffInMemoryCartOrderService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCartOrderService, providedIn: "root" });
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
class DaffInMemoryCartCouponService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/cart-coupon';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    list(cartId) {
        return this.http.get(`${this.url}/${cartId}/`);
    }
    /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    apply(cartId, coupon) {
        return this.http.post(`${this.url}/${cartId}/`, coupon);
    }
    /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    remove(cartId, coupon) {
        return this.http.delete(`${this.url}/${cartId}/${coupon.code}`);
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    removeAll(cartId) {
        return this.http.delete(`${this.url}/${cartId}/`);
    }
}
DaffInMemoryCartCouponService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCartCouponService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCartCouponService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCartCouponService_Factory() { return new DaffInMemoryCartCouponService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCartCouponService, providedIn: "root" });
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
class DaffInMemoryCartAddressService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/cart-address';
    }
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    update(cartId, address) {
        return this.http.put(`${this.url}/${cartId}`, address);
    }
}
DaffInMemoryCartAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCartAddressService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCartAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCartAddressService_Factory() { return new DaffInMemoryCartAddressService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCartAddressService, providedIn: "root" });
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
class DaffCartInMemoryDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
    }
}
DaffCartInMemoryDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffInMemoryBackendCartService {
    /**
     * @param {?} cartFactory
     */
    constructor(cartFactory) {
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    get(reqInfo) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: cart,
            status: cart ? STATUS.OK : STATUS.NOT_FOUND
        })));
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    post(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let body;
            /** @type {?} */
            const action = this.getAction(reqInfo);
            if (reqInfo.id === 'addToCart') {
                // deprecated
                body = {};
            }
            else if (action === 'clear') {
                body = this.clear(reqInfo);
            }
            else {
                body = this.create(reqInfo);
            }
            return {
                body,
                status: STATUS.OK
            };
        }));
    }
    /**
     * Gets whatever follows the cart ID section of the request URL.
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getAction(reqInfo) {
        return reqInfo.url.replace(`/${reqInfo.resourceUrl}${reqInfo.id}/`, '');
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    clear(reqInfo) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        cart.items = [];
        return cart;
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    create(reqInfo) {
        /** @type {?} */
        const cart = this.cartFactory.create();
        reqInfo.collection.push(cart);
        return {
            id: cart.id
        };
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getCart(reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, reqInfo.id);
    }
}
DaffInMemoryBackendCartService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryBackendCartService.ctorParameters = () => [
    { type: DaffCartFactory }
];
/** @nocollapse */ DaffInMemoryBackendCartService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartService_Factory() { return new DaffInMemoryBackendCartService(ɵɵinject(DaffCartFactory)); }, token: DaffInMemoryBackendCartService, providedIn: "root" });
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
class DaffInMemoryBackendCartItemsService {
    /**
     * @param {?} cartItemFactory
     */
    constructor(cartItemFactory) {
        this.cartItemFactory = cartItemFactory;
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    get(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let body;
            /** @type {?} */
            const action = this.getAction(reqInfo);
            if (action) {
                body = this.getItem(reqInfo, action);
            }
            else {
                body = this.listItems(reqInfo);
            }
            return {
                body,
                status: STATUS.OK
            };
        }));
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    put(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.updateItem(reqInfo, this.getAction(reqInfo)),
            status: STATUS.OK
        })));
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    post(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.addItem(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    delete(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.deleteItem(reqInfo, this.getAction(reqInfo)),
            status: STATUS.OK
        })));
    }
    /**
     * Gets whatever follows the cart ID section of the request URL.
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getAction(reqInfo) {
        return reqInfo.url.replace(`/${reqInfo.resourceUrl}${reqInfo.id}/`, '');
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getCart(reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
    }
    /**
     * @private
     * @param {?} itemInput
     * @return {?}
     */
    transformItemInput(itemInput) {
        return Object.assign({}, this.cartItemFactory.create(), itemInput, { product_id: itemInput.productId });
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    listItems(reqInfo) {
        return this.getCart(reqInfo).items;
    }
    /**
     * @private
     * @param {?} reqInfo
     * @param {?} itemId
     * @return {?}
     */
    getItem(reqInfo, itemId) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        return cart.items.find((/**
         * @param {?} __0
         * @return {?}
         */
        ({ item_id }) => String(item_id) === String(itemId)));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @param {?} itemId
     * @return {?}
     */
    updateItem(reqInfo, itemId) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        /** @type {?} */
        const item = reqInfo.utils.getJsonBody(reqInfo.req);
        /** @type {?} */
        const itemIndex = cart.items.findIndex((/**
         * @param {?} __0
         * @return {?}
         */
        ({ item_id }) => String(itemId) === String(item_id)));
        cart.items[itemIndex] = Object.assign({}, cart.items[itemIndex], item);
        cart.items = Object.assign([], cart.items);
        return cart;
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    addItem(reqInfo) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        /** @type {?} */
        const itemInput = reqInfo.utils.getJsonBody(reqInfo.req);
        /** @type {?} */
        const existingCartItemIndex = cart.items.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        item => item.product_id === itemInput.productId));
        if (existingCartItemIndex > -1) {
            cart.items[existingCartItemIndex].qty = cart.items[existingCartItemIndex].qty + itemInput.qty;
        }
        else {
            cart.items.push(this.transformItemInput(itemInput));
        }
        cart.items = Object.assign([], cart.items);
        return cart;
    }
    /**
     * @private
     * @param {?} reqInfo
     * @param {?} itemId
     * @return {?}
     */
    deleteItem(reqInfo, itemId) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        /** @type {?} */
        const itemIndex = cart.items.findIndex((/**
         * @param {?} __0
         * @return {?}
         */
        ({ item_id }) => String(itemId) === String(item_id)));
        cart.items.splice(itemIndex, 1);
        cart.items = Object.assign([], cart.items);
        return cart;
    }
}
DaffInMemoryBackendCartItemsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryBackendCartItemsService.ctorParameters = () => [
    { type: DaffCartItemFactory }
];
/** @nocollapse */ DaffInMemoryBackendCartItemsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartItemsService_Factory() { return new DaffInMemoryBackendCartItemsService(ɵɵinject(DaffCartItemFactory)); }, token: DaffInMemoryBackendCartItemsService, providedIn: "root" });
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
class DaffInMemoryBackendCartOrderService {
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    post(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.placeOrder(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    placeOrder(reqInfo) {
        return {
            id: '8235422034',
            cartId: '89fdsa8sadf',
            orderId: '8235422034',
        };
    }
}
DaffInMemoryBackendCartOrderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffInMemoryBackendCartOrderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartOrderService_Factory() { return new DaffInMemoryBackendCartOrderService(); }, token: DaffInMemoryBackendCartOrderService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffInMemoryBackendCartCouponService {
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    get(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.listCoupons(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    post(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.applyCoupon(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    delete(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let body;
            /** @type {?} */
            const action = this.getAction(reqInfo);
            if (action) {
                body = this.removeCoupon(reqInfo, action);
            }
            else {
                body = this.removeAllCoupons(reqInfo);
            }
            return {
                body,
                status: STATUS.OK
            };
        }));
    }
    /**
     * Gets whatever follows the cart ID section of the request URL.
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getAction(reqInfo) {
        return reqInfo.url.replace(`/${reqInfo.resourceUrl}${reqInfo.id}/`, '');
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getCart(reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    listCoupons(reqInfo) {
        return this.getCart(reqInfo).coupons;
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    applyCoupon(reqInfo) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        /** @type {?} */
        const coupon = reqInfo.utils.getJsonBody(reqInfo.req);
        cart.coupons.push(coupon);
        return cart;
    }
    /**
     * @private
     * @param {?} reqInfo
     * @param {?} couponCode
     * @return {?}
     */
    removeCoupon(reqInfo, couponCode) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        cart.coupons = cart.coupons.filter((/**
         * @param {?} __0
         * @return {?}
         */
        ({ code }) => code !== couponCode));
        return cart;
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    removeAllCoupons(reqInfo) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        cart.coupons = [];
        return cart;
    }
}
DaffInMemoryBackendCartCouponService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffInMemoryBackendCartCouponService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartCouponService_Factory() { return new DaffInMemoryBackendCartCouponService(); }, token: DaffInMemoryBackendCartCouponService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffInMemoryBackendCartAddressService {
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    put(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.updateAddress(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getCart(reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    updateAddress(reqInfo) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        /** @type {?} */
        const address = reqInfo.utils.getJsonBody(reqInfo.req);
        cart.billing_address = address;
        cart.shipping_address = address;
        return cart;
    }
}
DaffInMemoryBackendCartAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffInMemoryBackendCartAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartAddressService_Factory() { return new DaffInMemoryBackendCartAddressService(); }, token: DaffInMemoryBackendCartAddressService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffInMemoryBackendCartShippingAddressService {
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    get(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.getShippingAddress(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    put(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.updateShippingAddress(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getCart(reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getShippingAddress(reqInfo) {
        return this.getCart(reqInfo).shipping_address;
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    updateShippingAddress(reqInfo) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        /** @type {?} */
        const address = reqInfo.utils.getJsonBody(reqInfo.req);
        cart.shipping_address = address;
        return cart;
    }
}
DaffInMemoryBackendCartShippingAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffInMemoryBackendCartShippingAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartShippingAddressService_Factory() { return new DaffInMemoryBackendCartShippingAddressService(); }, token: DaffInMemoryBackendCartShippingAddressService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffInMemoryBackendCartBillingAddressService {
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    get(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.getBillingAddress(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    put(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.updateBillingAddress(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getCart(reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getBillingAddress(reqInfo) {
        return this.getCart(reqInfo).billing_address;
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    updateBillingAddress(reqInfo) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        /** @type {?} */
        const address = reqInfo.utils.getJsonBody(reqInfo.req);
        cart.billing_address = address;
        return cart;
    }
}
DaffInMemoryBackendCartBillingAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffInMemoryBackendCartBillingAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartBillingAddressService_Factory() { return new DaffInMemoryBackendCartBillingAddressService(); }, token: DaffInMemoryBackendCartBillingAddressService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffInMemoryBackendCartPaymentMethodsService {
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    get(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.listPaymentMethods(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getCart(reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    listPaymentMethods(reqInfo) {
        return this.getCart(reqInfo).available_payment_methods;
    }
}
DaffInMemoryBackendCartPaymentMethodsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffInMemoryBackendCartPaymentMethodsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartPaymentMethodsService_Factory() { return new DaffInMemoryBackendCartPaymentMethodsService(); }, token: DaffInMemoryBackendCartPaymentMethodsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffInMemoryBackendCartShippingMethodsService {
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    get(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.listShippingMethods(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getCart(reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    listShippingMethods(reqInfo) {
        return this.getCart(reqInfo).available_shipping_methods;
    }
}
DaffInMemoryBackendCartShippingMethodsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffInMemoryBackendCartShippingMethodsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartShippingMethodsService_Factory() { return new DaffInMemoryBackendCartShippingMethodsService(); }, token: DaffInMemoryBackendCartShippingMethodsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffInMemoryBackendCartPaymentService {
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    get(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.getPayment(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    put(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.updatePayment(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    delete(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.removePayment(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getCart(reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getPayment(reqInfo) {
        return this.getCart(reqInfo).payment;
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    updatePayment(reqInfo) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        const { payment, address } = reqInfo.utils.getJsonBody(reqInfo.req);
        cart.payment = payment;
        if (address)
            cart.billing_address = address;
        return cart;
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    removePayment(reqInfo) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        cart.payment = null;
        return cart;
    }
}
DaffInMemoryBackendCartPaymentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffInMemoryBackendCartPaymentService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartPaymentService_Factory() { return new DaffInMemoryBackendCartPaymentService(); }, token: DaffInMemoryBackendCartPaymentService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffInMemoryBackendCartShippingInformationService {
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    get(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.getShippingInformation(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    put(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.updateShippingInformation(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    delete(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.removeShippingInformation(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getCart(reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getShippingInformation(reqInfo) {
        return this.getCart(reqInfo).shipping_information;
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    updateShippingInformation(reqInfo) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        /** @type {?} */
        const shippingInformation = reqInfo.utils.getJsonBody(reqInfo.req);
        cart.shipping_information = shippingInformation;
        return cart;
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    removeShippingInformation(reqInfo) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        cart.shipping_information = null;
        return cart;
    }
}
DaffInMemoryBackendCartShippingInformationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffInMemoryBackendCartShippingInformationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartShippingInformationService_Factory() { return new DaffInMemoryBackendCartShippingInformationService(); }, token: DaffInMemoryBackendCartShippingInformationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The root cart in-memory backend.
 * Creates the database and delegates requests to child backends.
 */
class DaffInMemoryBackendCartRootService {
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
/** @nocollapse */ DaffInMemoryBackendCartRootService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartRootService_Factory() { return new DaffInMemoryBackendCartRootService(ɵɵinject(DaffInMemoryBackendCartService), ɵɵinject(DaffInMemoryBackendCartItemsService), ɵɵinject(DaffInMemoryBackendCartOrderService), ɵɵinject(DaffInMemoryBackendCartCouponService), ɵɵinject(DaffInMemoryBackendCartAddressService), ɵɵinject(DaffInMemoryBackendCartShippingAddressService), ɵɵinject(DaffInMemoryBackendCartBillingAddressService), ɵɵinject(DaffInMemoryBackendCartPaymentMethodsService), ɵɵinject(DaffInMemoryBackendCartShippingMethodsService), ɵɵinject(DaffInMemoryBackendCartPaymentService), ɵɵinject(DaffInMemoryBackendCartShippingInformationService)); }, token: DaffInMemoryBackendCartRootService, providedIn: "root" });
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
