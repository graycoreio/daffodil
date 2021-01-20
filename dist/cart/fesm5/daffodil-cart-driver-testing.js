import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { of } from 'rxjs';
import { DaffCartFactory, DaffCartItemFactory, DaffCartAddressFactory, DaffCartPaymentFactory, DaffCartShippingRateFactory, DaffCartCouponFactory } from '@daffodil/cart/testing';
import { random } from 'faker/locale/en_US';
import { CommonModule } from '@angular/common';
import { DaffCartDriver, DaffCartItemDriver, DaffCartAddressDriver, DaffCartBillingAddressDriver, DaffCartShippingAddressDriver, DaffCartCouponDriver, DaffCartOrderDriver, DaffCartPaymentDriver, DaffCartShippingInformationDriver, DaffCartShippingMethodsDriver, DaffCartPaymentMethodsDriver } from '@daffodil/cart/driver';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffTestingCartService = /** @class */ (function () {
    function DaffTestingCartService(cartFactory) {
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    DaffTestingCartService.prototype.get = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return of(this.cartFactory.create());
    };
    /**
     * @param {?} productId
     * @param {?} qty
     * @return {?}
     */
    DaffTestingCartService.prototype.addToCart = /**
     * @param {?} productId
     * @param {?} qty
     * @return {?}
     */
    function (productId, qty) {
        return of(this.cartFactory.create());
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DaffTestingCartService.prototype.clear = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return of(this.cartFactory.create());
    };
    /**
     * @return {?}
     */
    DaffTestingCartService.prototype.create = /**
     * @return {?}
     */
    function () {
        return of({
            id: this.cartFactory.create().id
        });
    };
    DaffTestingCartService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingCartService.ctorParameters = function () { return [
        { type: DaffCartFactory }
    ]; };
    /** @nocollapse */ DaffTestingCartService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCartService_Factory() { return new DaffTestingCartService(ɵɵinject(DaffCartFactory)); }, token: DaffTestingCartService, providedIn: "root" });
    return DaffTestingCartService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartService.prototype.cartFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffTestingCartItemService = /** @class */ (function () {
    function DaffTestingCartItemService(cartItemFactory, cartFactory) {
        this.cartItemFactory = cartItemFactory;
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffTestingCartItemService.prototype.list = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return of(this.cartItemFactory.createMany(3));
    };
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    DaffTestingCartItemService.prototype.get = /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    function (cartId, itemId) {
        return of(this.cartItemFactory.create());
    };
    /**
     * @param {?} cartId
     * @param {?} input
     * @return {?}
     */
    DaffTestingCartItemService.prototype.add = /**
     * @param {?} cartId
     * @param {?} input
     * @return {?}
     */
    function (cartId, input) {
        return of(this.cartFactory.create());
    };
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @param {?} item
     * @return {?}
     */
    DaffTestingCartItemService.prototype.update = /**
     * @param {?} cartId
     * @param {?} itemId
     * @param {?} item
     * @return {?}
     */
    function (cartId, itemId, item) {
        return of(this.cartFactory.create());
    };
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    DaffTestingCartItemService.prototype.delete = /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    function (cartId, itemId) {
        return of(this.cartFactory.create());
    };
    DaffTestingCartItemService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingCartItemService.ctorParameters = function () { return [
        { type: DaffCartItemFactory },
        { type: DaffCartFactory }
    ]; };
    /** @nocollapse */ DaffTestingCartItemService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCartItemService_Factory() { return new DaffTestingCartItemService(ɵɵinject(DaffCartItemFactory), ɵɵinject(DaffCartFactory)); }, token: DaffTestingCartItemService, providedIn: "root" });
    return DaffTestingCartItemService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartItemService.prototype.cartItemFactory;
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartItemService.prototype.cartFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffTestingCartAddressService = /** @class */ (function () {
    function DaffTestingCartAddressService(addressFactory, cartFactory) {
        this.addressFactory = addressFactory;
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffTestingCartAddressService.prototype.update = /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        return of(this.cartFactory.create());
    };
    DaffTestingCartAddressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingCartAddressService.ctorParameters = function () { return [
        { type: DaffCartAddressFactory },
        { type: DaffCartFactory }
    ]; };
    /** @nocollapse */ DaffTestingCartAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCartAddressService_Factory() { return new DaffTestingCartAddressService(ɵɵinject(DaffCartAddressFactory), ɵɵinject(DaffCartFactory)); }, token: DaffTestingCartAddressService, providedIn: "root" });
    return DaffTestingCartAddressService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartAddressService.prototype.addressFactory;
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartAddressService.prototype.cartFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffTestingCartBillingAddressService = /** @class */ (function () {
    function DaffTestingCartBillingAddressService(addressFactory, cartFactory) {
        this.addressFactory = addressFactory;
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffTestingCartBillingAddressService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return of(this.addressFactory.create());
    };
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffTestingCartBillingAddressService.prototype.update = /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        return of(this.cartFactory.create());
    };
    DaffTestingCartBillingAddressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingCartBillingAddressService.ctorParameters = function () { return [
        { type: DaffCartAddressFactory },
        { type: DaffCartFactory }
    ]; };
    /** @nocollapse */ DaffTestingCartBillingAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCartBillingAddressService_Factory() { return new DaffTestingCartBillingAddressService(ɵɵinject(DaffCartAddressFactory), ɵɵinject(DaffCartFactory)); }, token: DaffTestingCartBillingAddressService, providedIn: "root" });
    return DaffTestingCartBillingAddressService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartBillingAddressService.prototype.addressFactory;
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartBillingAddressService.prototype.cartFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffTestingCartPaymentService = /** @class */ (function () {
    function DaffTestingCartPaymentService(paymentFactory, cartFactory) {
        this.paymentFactory = paymentFactory;
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffTestingCartPaymentService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return of(this.paymentFactory.create());
    };
    /**
     * @param {?} cartId
     * @param {?} payment
     * @return {?}
     */
    DaffTestingCartPaymentService.prototype.update = /**
     * @param {?} cartId
     * @param {?} payment
     * @return {?}
     */
    function (cartId, payment) {
        return of(this.cartFactory.create());
    };
    /**
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    DaffTestingCartPaymentService.prototype.updateWithBilling = /**
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    function (cartId, payment, address) {
        return of(this.cartFactory.create());
    };
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffTestingCartPaymentService.prototype.remove = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return of(undefined);
    };
    DaffTestingCartPaymentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingCartPaymentService.ctorParameters = function () { return [
        { type: DaffCartPaymentFactory },
        { type: DaffCartFactory }
    ]; };
    /** @nocollapse */ DaffTestingCartPaymentService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCartPaymentService_Factory() { return new DaffTestingCartPaymentService(ɵɵinject(DaffCartPaymentFactory), ɵɵinject(DaffCartFactory)); }, token: DaffTestingCartPaymentService, providedIn: "root" });
    return DaffTestingCartPaymentService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartPaymentService.prototype.paymentFactory;
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartPaymentService.prototype.cartFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffTestingCartPaymentMethodsService = /** @class */ (function () {
    function DaffTestingCartPaymentMethodsService(paymentFactory) {
        this.paymentFactory = paymentFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffTestingCartPaymentMethodsService.prototype.list = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return of(this.paymentFactory.createMany(3));
    };
    DaffTestingCartPaymentMethodsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingCartPaymentMethodsService.ctorParameters = function () { return [
        { type: DaffCartPaymentFactory }
    ]; };
    /** @nocollapse */ DaffTestingCartPaymentMethodsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCartPaymentMethodsService_Factory() { return new DaffTestingCartPaymentMethodsService(ɵɵinject(DaffCartPaymentFactory)); }, token: DaffTestingCartPaymentMethodsService, providedIn: "root" });
    return DaffTestingCartPaymentMethodsService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartPaymentMethodsService.prototype.paymentFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffTestingCartShippingAddressService = /** @class */ (function () {
    function DaffTestingCartShippingAddressService(addressFactory, cartFactory) {
        this.addressFactory = addressFactory;
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffTestingCartShippingAddressService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return of(this.addressFactory.create());
    };
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffTestingCartShippingAddressService.prototype.update = /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        return of(this.cartFactory.create());
    };
    DaffTestingCartShippingAddressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingCartShippingAddressService.ctorParameters = function () { return [
        { type: DaffCartAddressFactory },
        { type: DaffCartFactory }
    ]; };
    /** @nocollapse */ DaffTestingCartShippingAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCartShippingAddressService_Factory() { return new DaffTestingCartShippingAddressService(ɵɵinject(DaffCartAddressFactory), ɵɵinject(DaffCartFactory)); }, token: DaffTestingCartShippingAddressService, providedIn: "root" });
    return DaffTestingCartShippingAddressService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartShippingAddressService.prototype.addressFactory;
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartShippingAddressService.prototype.cartFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffTestingCartShippingInformationService = /** @class */ (function () {
    function DaffTestingCartShippingInformationService(shippingInfoFactory, cartFactory) {
        this.shippingInfoFactory = shippingInfoFactory;
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffTestingCartShippingInformationService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return of(this.shippingInfoFactory.create());
    };
    /**
     * @param {?} cartId
     * @param {?} info
     * @return {?}
     */
    DaffTestingCartShippingInformationService.prototype.update = /**
     * @param {?} cartId
     * @param {?} info
     * @return {?}
     */
    function (cartId, info) {
        return of(this.cartFactory.create());
    };
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffTestingCartShippingInformationService.prototype.delete = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return of(this.cartFactory.create());
    };
    DaffTestingCartShippingInformationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingCartShippingInformationService.ctorParameters = function () { return [
        { type: DaffCartShippingRateFactory },
        { type: DaffCartFactory }
    ]; };
    /** @nocollapse */ DaffTestingCartShippingInformationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCartShippingInformationService_Factory() { return new DaffTestingCartShippingInformationService(ɵɵinject(DaffCartShippingRateFactory), ɵɵinject(DaffCartFactory)); }, token: DaffTestingCartShippingInformationService, providedIn: "root" });
    return DaffTestingCartShippingInformationService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartShippingInformationService.prototype.shippingInfoFactory;
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartShippingInformationService.prototype.cartFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffTestingCartShippingMethodsService = /** @class */ (function () {
    function DaffTestingCartShippingMethodsService(shippingInfoFactory) {
        this.shippingInfoFactory = shippingInfoFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffTestingCartShippingMethodsService.prototype.list = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return of(this.shippingInfoFactory.createMany(3));
    };
    DaffTestingCartShippingMethodsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingCartShippingMethodsService.ctorParameters = function () { return [
        { type: DaffCartShippingRateFactory }
    ]; };
    /** @nocollapse */ DaffTestingCartShippingMethodsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCartShippingMethodsService_Factory() { return new DaffTestingCartShippingMethodsService(ɵɵinject(DaffCartShippingRateFactory)); }, token: DaffTestingCartShippingMethodsService, providedIn: "root" });
    return DaffTestingCartShippingMethodsService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartShippingMethodsService.prototype.shippingInfoFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffTestingCartOrderService = /** @class */ (function () {
    function DaffTestingCartOrderService() {
    }
    /**
     * @param {?} cartId
     * @param {?=} payment
     * @return {?}
     */
    DaffTestingCartOrderService.prototype.placeOrder = /**
     * @param {?} cartId
     * @param {?=} payment
     * @return {?}
     */
    function (cartId, payment) {
        return of({
            id: random.number(999999),
            orderId: random.number(999999),
            cartId: cartId,
        });
    };
    DaffTestingCartOrderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffTestingCartOrderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCartOrderService_Factory() { return new DaffTestingCartOrderService(); }, token: DaffTestingCartOrderService, providedIn: "root" });
    return DaffTestingCartOrderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffTestingCartCouponService = /** @class */ (function () {
    function DaffTestingCartCouponService(couponFactory, cartFactory) {
        this.couponFactory = couponFactory;
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffTestingCartCouponService.prototype.list = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return of(this.couponFactory.createMany(3));
    };
    /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    DaffTestingCartCouponService.prototype.apply = /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    function (cartId, coupon) {
        return of(this.cartFactory.create());
    };
    /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    DaffTestingCartCouponService.prototype.remove = /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    function (cartId, coupon) {
        return of(this.cartFactory.create());
    };
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffTestingCartCouponService.prototype.removeAll = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return of(this.cartFactory.create());
    };
    DaffTestingCartCouponService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingCartCouponService.ctorParameters = function () { return [
        { type: DaffCartCouponFactory },
        { type: DaffCartFactory }
    ]; };
    /** @nocollapse */ DaffTestingCartCouponService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCartCouponService_Factory() { return new DaffTestingCartCouponService(ɵɵinject(DaffCartCouponFactory), ɵɵinject(DaffCartFactory)); }, token: DaffTestingCartCouponService, providedIn: "root" });
    return DaffTestingCartCouponService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartCouponService.prototype.couponFactory;
    /**
     * @type {?}
     * @private
     */
    DaffTestingCartCouponService.prototype.cartFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffTestingCartDriverModule = /** @class */ (function () {
    function DaffTestingCartDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffTestingCartDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffTestingCartDriverModule,
            providers: [
                {
                    provide: DaffCartDriver,
                    useExisting: DaffTestingCartService
                },
                {
                    provide: DaffCartItemDriver,
                    useExisting: DaffTestingCartItemService
                },
                {
                    provide: DaffCartAddressDriver,
                    useExisting: DaffTestingCartAddressService
                },
                {
                    provide: DaffCartBillingAddressDriver,
                    useExisting: DaffTestingCartBillingAddressService
                },
                {
                    provide: DaffCartShippingAddressDriver,
                    useExisting: DaffTestingCartShippingAddressService
                },
                {
                    provide: DaffCartCouponDriver,
                    useExisting: DaffTestingCartCouponService
                },
                {
                    provide: DaffCartOrderDriver,
                    useExisting: DaffTestingCartOrderService
                },
                {
                    provide: DaffCartPaymentDriver,
                    useExisting: DaffTestingCartPaymentService
                },
                {
                    provide: DaffCartShippingInformationDriver,
                    useExisting: DaffTestingCartShippingInformationService
                },
                {
                    provide: DaffCartShippingMethodsDriver,
                    useExisting: DaffTestingCartShippingMethodsService
                },
                {
                    provide: DaffCartPaymentMethodsDriver,
                    useExisting: DaffTestingCartPaymentMethodsService
                },
            ]
        };
    };
    DaffTestingCartDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffTestingCartDriverModule;
}());

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

export { DaffTestingCartAddressService, DaffTestingCartBillingAddressService, DaffTestingCartCouponService, DaffTestingCartDriverModule, DaffTestingCartItemService, DaffTestingCartOrderService, DaffTestingCartPaymentMethodsService, DaffTestingCartPaymentService, DaffTestingCartService, DaffTestingCartShippingAddressService, DaffTestingCartShippingInformationService, DaffTestingCartShippingMethodsService };
//# sourceMappingURL=daffodil-cart-driver-testing.js.map
