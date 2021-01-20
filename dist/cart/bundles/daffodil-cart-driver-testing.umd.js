(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@daffodil/cart/testing'), require('faker/locale/en_US'), require('@angular/common'), require('@daffodil/cart/driver')) :
    typeof define === 'function' && define.amd ? define('@daffodil/cart/driver/testing', ['exports', '@angular/core', 'rxjs', '@daffodil/cart/testing', 'faker/locale/en_US', '@angular/common', '@daffodil/cart/driver'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.cart = global.daffodil.cart || {}, global.daffodil.cart.driver = global.daffodil.cart.driver || {}, global.daffodil.cart.driver.testing = {}), global.ng.core, global.rxjs, global.daffodil.cart.testing, global.en_US, global.ng.common, global.daffodil.cart.driver));
}(this, function (exports, core, rxjs, testing, en_US, common, driver) { 'use strict';

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
            return rxjs.of(this.cartFactory.create());
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
            return rxjs.of(this.cartFactory.create());
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
            return rxjs.of(this.cartFactory.create());
        };
        /**
         * @return {?}
         */
        DaffTestingCartService.prototype.create = /**
         * @return {?}
         */
        function () {
            return rxjs.of({
                id: this.cartFactory.create().id
            });
        };
        DaffTestingCartService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffTestingCartService.ctorParameters = function () { return [
            { type: testing.DaffCartFactory }
        ]; };
        /** @nocollapse */ DaffTestingCartService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffTestingCartService_Factory() { return new DaffTestingCartService(core.ɵɵinject(testing.DaffCartFactory)); }, token: DaffTestingCartService, providedIn: "root" });
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
            return rxjs.of(this.cartItemFactory.createMany(3));
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
            return rxjs.of(this.cartItemFactory.create());
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
            return rxjs.of(this.cartFactory.create());
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
            return rxjs.of(this.cartFactory.create());
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
            return rxjs.of(this.cartFactory.create());
        };
        DaffTestingCartItemService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffTestingCartItemService.ctorParameters = function () { return [
            { type: testing.DaffCartItemFactory },
            { type: testing.DaffCartFactory }
        ]; };
        /** @nocollapse */ DaffTestingCartItemService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffTestingCartItemService_Factory() { return new DaffTestingCartItemService(core.ɵɵinject(testing.DaffCartItemFactory), core.ɵɵinject(testing.DaffCartFactory)); }, token: DaffTestingCartItemService, providedIn: "root" });
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
            return rxjs.of(this.cartFactory.create());
        };
        DaffTestingCartAddressService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffTestingCartAddressService.ctorParameters = function () { return [
            { type: testing.DaffCartAddressFactory },
            { type: testing.DaffCartFactory }
        ]; };
        /** @nocollapse */ DaffTestingCartAddressService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffTestingCartAddressService_Factory() { return new DaffTestingCartAddressService(core.ɵɵinject(testing.DaffCartAddressFactory), core.ɵɵinject(testing.DaffCartFactory)); }, token: DaffTestingCartAddressService, providedIn: "root" });
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
            return rxjs.of(this.addressFactory.create());
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
            return rxjs.of(this.cartFactory.create());
        };
        DaffTestingCartBillingAddressService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffTestingCartBillingAddressService.ctorParameters = function () { return [
            { type: testing.DaffCartAddressFactory },
            { type: testing.DaffCartFactory }
        ]; };
        /** @nocollapse */ DaffTestingCartBillingAddressService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffTestingCartBillingAddressService_Factory() { return new DaffTestingCartBillingAddressService(core.ɵɵinject(testing.DaffCartAddressFactory), core.ɵɵinject(testing.DaffCartFactory)); }, token: DaffTestingCartBillingAddressService, providedIn: "root" });
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
            return rxjs.of(this.paymentFactory.create());
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
            return rxjs.of(this.cartFactory.create());
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
            return rxjs.of(this.cartFactory.create());
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
            return rxjs.of(undefined);
        };
        DaffTestingCartPaymentService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffTestingCartPaymentService.ctorParameters = function () { return [
            { type: testing.DaffCartPaymentFactory },
            { type: testing.DaffCartFactory }
        ]; };
        /** @nocollapse */ DaffTestingCartPaymentService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffTestingCartPaymentService_Factory() { return new DaffTestingCartPaymentService(core.ɵɵinject(testing.DaffCartPaymentFactory), core.ɵɵinject(testing.DaffCartFactory)); }, token: DaffTestingCartPaymentService, providedIn: "root" });
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
            return rxjs.of(this.paymentFactory.createMany(3));
        };
        DaffTestingCartPaymentMethodsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffTestingCartPaymentMethodsService.ctorParameters = function () { return [
            { type: testing.DaffCartPaymentFactory }
        ]; };
        /** @nocollapse */ DaffTestingCartPaymentMethodsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffTestingCartPaymentMethodsService_Factory() { return new DaffTestingCartPaymentMethodsService(core.ɵɵinject(testing.DaffCartPaymentFactory)); }, token: DaffTestingCartPaymentMethodsService, providedIn: "root" });
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
            return rxjs.of(this.addressFactory.create());
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
            return rxjs.of(this.cartFactory.create());
        };
        DaffTestingCartShippingAddressService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffTestingCartShippingAddressService.ctorParameters = function () { return [
            { type: testing.DaffCartAddressFactory },
            { type: testing.DaffCartFactory }
        ]; };
        /** @nocollapse */ DaffTestingCartShippingAddressService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffTestingCartShippingAddressService_Factory() { return new DaffTestingCartShippingAddressService(core.ɵɵinject(testing.DaffCartAddressFactory), core.ɵɵinject(testing.DaffCartFactory)); }, token: DaffTestingCartShippingAddressService, providedIn: "root" });
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
            return rxjs.of(this.shippingInfoFactory.create());
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
            return rxjs.of(this.cartFactory.create());
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
            return rxjs.of(this.cartFactory.create());
        };
        DaffTestingCartShippingInformationService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffTestingCartShippingInformationService.ctorParameters = function () { return [
            { type: testing.DaffCartShippingRateFactory },
            { type: testing.DaffCartFactory }
        ]; };
        /** @nocollapse */ DaffTestingCartShippingInformationService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffTestingCartShippingInformationService_Factory() { return new DaffTestingCartShippingInformationService(core.ɵɵinject(testing.DaffCartShippingRateFactory), core.ɵɵinject(testing.DaffCartFactory)); }, token: DaffTestingCartShippingInformationService, providedIn: "root" });
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
            return rxjs.of(this.shippingInfoFactory.createMany(3));
        };
        DaffTestingCartShippingMethodsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffTestingCartShippingMethodsService.ctorParameters = function () { return [
            { type: testing.DaffCartShippingRateFactory }
        ]; };
        /** @nocollapse */ DaffTestingCartShippingMethodsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffTestingCartShippingMethodsService_Factory() { return new DaffTestingCartShippingMethodsService(core.ɵɵinject(testing.DaffCartShippingRateFactory)); }, token: DaffTestingCartShippingMethodsService, providedIn: "root" });
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
            return rxjs.of({
                id: en_US.random.number(999999),
                orderId: en_US.random.number(999999),
                cartId: cartId,
            });
        };
        DaffTestingCartOrderService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DaffTestingCartOrderService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffTestingCartOrderService_Factory() { return new DaffTestingCartOrderService(); }, token: DaffTestingCartOrderService, providedIn: "root" });
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
            return rxjs.of(this.couponFactory.createMany(3));
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
            return rxjs.of(this.cartFactory.create());
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
            return rxjs.of(this.cartFactory.create());
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
            return rxjs.of(this.cartFactory.create());
        };
        DaffTestingCartCouponService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffTestingCartCouponService.ctorParameters = function () { return [
            { type: testing.DaffCartCouponFactory },
            { type: testing.DaffCartFactory }
        ]; };
        /** @nocollapse */ DaffTestingCartCouponService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffTestingCartCouponService_Factory() { return new DaffTestingCartCouponService(core.ɵɵinject(testing.DaffCartCouponFactory), core.ɵɵinject(testing.DaffCartFactory)); }, token: DaffTestingCartCouponService, providedIn: "root" });
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
                        provide: driver.DaffCartDriver,
                        useExisting: DaffTestingCartService
                    },
                    {
                        provide: driver.DaffCartItemDriver,
                        useExisting: DaffTestingCartItemService
                    },
                    {
                        provide: driver.DaffCartAddressDriver,
                        useExisting: DaffTestingCartAddressService
                    },
                    {
                        provide: driver.DaffCartBillingAddressDriver,
                        useExisting: DaffTestingCartBillingAddressService
                    },
                    {
                        provide: driver.DaffCartShippingAddressDriver,
                        useExisting: DaffTestingCartShippingAddressService
                    },
                    {
                        provide: driver.DaffCartCouponDriver,
                        useExisting: DaffTestingCartCouponService
                    },
                    {
                        provide: driver.DaffCartOrderDriver,
                        useExisting: DaffTestingCartOrderService
                    },
                    {
                        provide: driver.DaffCartPaymentDriver,
                        useExisting: DaffTestingCartPaymentService
                    },
                    {
                        provide: driver.DaffCartShippingInformationDriver,
                        useExisting: DaffTestingCartShippingInformationService
                    },
                    {
                        provide: driver.DaffCartShippingMethodsDriver,
                        useExisting: DaffTestingCartShippingMethodsService
                    },
                    {
                        provide: driver.DaffCartPaymentMethodsDriver,
                        useExisting: DaffTestingCartPaymentMethodsService
                    },
                ]
            };
        };
        DaffTestingCartDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DaffTestingCartDriverModule;
    }());

    exports.DaffTestingCartAddressService = DaffTestingCartAddressService;
    exports.DaffTestingCartBillingAddressService = DaffTestingCartBillingAddressService;
    exports.DaffTestingCartCouponService = DaffTestingCartCouponService;
    exports.DaffTestingCartDriverModule = DaffTestingCartDriverModule;
    exports.DaffTestingCartItemService = DaffTestingCartItemService;
    exports.DaffTestingCartOrderService = DaffTestingCartOrderService;
    exports.DaffTestingCartPaymentMethodsService = DaffTestingCartPaymentMethodsService;
    exports.DaffTestingCartPaymentService = DaffTestingCartPaymentService;
    exports.DaffTestingCartService = DaffTestingCartService;
    exports.DaffTestingCartShippingAddressService = DaffTestingCartShippingAddressService;
    exports.DaffTestingCartShippingInformationService = DaffTestingCartShippingInformationService;
    exports.DaffTestingCartShippingMethodsService = DaffTestingCartShippingMethodsService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-cart-driver-testing.umd.js.map
