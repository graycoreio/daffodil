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
class DaffTestingCartService {
    /**
     * @param {?} cartFactory
     */
    constructor(cartFactory) {
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    get(id) {
        return of(this.cartFactory.create());
    }
    /**
     * @param {?} productId
     * @param {?} qty
     * @return {?}
     */
    addToCart(productId, qty) {
        return of(this.cartFactory.create());
    }
    /**
     * @param {?} id
     * @return {?}
     */
    clear(id) {
        return of(this.cartFactory.create());
    }
    /**
     * @return {?}
     */
    create() {
        return of({
            id: this.cartFactory.create().id
        });
    }
}
DaffTestingCartService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingCartService.ctorParameters = () => [
    { type: DaffCartFactory }
];
/** @nocollapse */ DaffTestingCartService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCartService_Factory() { return new DaffTestingCartService(ɵɵinject(DaffCartFactory)); }, token: DaffTestingCartService, providedIn: "root" });
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
class DaffTestingCartItemService {
    /**
     * @param {?} cartItemFactory
     * @param {?} cartFactory
     */
    constructor(cartItemFactory, cartFactory) {
        this.cartItemFactory = cartItemFactory;
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    list(cartId) {
        return of(this.cartItemFactory.createMany(3));
    }
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    get(cartId, itemId) {
        return of(this.cartItemFactory.create());
    }
    /**
     * @param {?} cartId
     * @param {?} input
     * @return {?}
     */
    add(cartId, input) {
        return of(this.cartFactory.create());
    }
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @param {?} item
     * @return {?}
     */
    update(cartId, itemId, item) {
        return of(this.cartFactory.create());
    }
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    delete(cartId, itemId) {
        return of(this.cartFactory.create());
    }
}
DaffTestingCartItemService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingCartItemService.ctorParameters = () => [
    { type: DaffCartItemFactory },
    { type: DaffCartFactory }
];
/** @nocollapse */ DaffTestingCartItemService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCartItemService_Factory() { return new DaffTestingCartItemService(ɵɵinject(DaffCartItemFactory), ɵɵinject(DaffCartFactory)); }, token: DaffTestingCartItemService, providedIn: "root" });
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
class DaffTestingCartAddressService {
    /**
     * @param {?} addressFactory
     * @param {?} cartFactory
     */
    constructor(addressFactory, cartFactory) {
        this.addressFactory = addressFactory;
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    update(cartId, address) {
        return of(this.cartFactory.create());
    }
}
DaffTestingCartAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingCartAddressService.ctorParameters = () => [
    { type: DaffCartAddressFactory },
    { type: DaffCartFactory }
];
/** @nocollapse */ DaffTestingCartAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCartAddressService_Factory() { return new DaffTestingCartAddressService(ɵɵinject(DaffCartAddressFactory), ɵɵinject(DaffCartFactory)); }, token: DaffTestingCartAddressService, providedIn: "root" });
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
class DaffTestingCartBillingAddressService {
    /**
     * @param {?} addressFactory
     * @param {?} cartFactory
     */
    constructor(addressFactory, cartFactory) {
        this.addressFactory = addressFactory;
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    get(cartId) {
        return of(this.addressFactory.create());
    }
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    update(cartId, address) {
        return of(this.cartFactory.create());
    }
}
DaffTestingCartBillingAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingCartBillingAddressService.ctorParameters = () => [
    { type: DaffCartAddressFactory },
    { type: DaffCartFactory }
];
/** @nocollapse */ DaffTestingCartBillingAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCartBillingAddressService_Factory() { return new DaffTestingCartBillingAddressService(ɵɵinject(DaffCartAddressFactory), ɵɵinject(DaffCartFactory)); }, token: DaffTestingCartBillingAddressService, providedIn: "root" });
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
class DaffTestingCartPaymentService {
    /**
     * @param {?} paymentFactory
     * @param {?} cartFactory
     */
    constructor(paymentFactory, cartFactory) {
        this.paymentFactory = paymentFactory;
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    get(cartId) {
        return of(this.paymentFactory.create());
    }
    /**
     * @param {?} cartId
     * @param {?} payment
     * @return {?}
     */
    update(cartId, payment) {
        return of(this.cartFactory.create());
    }
    /**
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    updateWithBilling(cartId, payment, address) {
        return of(this.cartFactory.create());
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    remove(cartId) {
        return of(undefined);
    }
}
DaffTestingCartPaymentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingCartPaymentService.ctorParameters = () => [
    { type: DaffCartPaymentFactory },
    { type: DaffCartFactory }
];
/** @nocollapse */ DaffTestingCartPaymentService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCartPaymentService_Factory() { return new DaffTestingCartPaymentService(ɵɵinject(DaffCartPaymentFactory), ɵɵinject(DaffCartFactory)); }, token: DaffTestingCartPaymentService, providedIn: "root" });
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
class DaffTestingCartPaymentMethodsService {
    /**
     * @param {?} paymentFactory
     */
    constructor(paymentFactory) {
        this.paymentFactory = paymentFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    list(cartId) {
        return of(this.paymentFactory.createMany(3));
    }
}
DaffTestingCartPaymentMethodsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingCartPaymentMethodsService.ctorParameters = () => [
    { type: DaffCartPaymentFactory }
];
/** @nocollapse */ DaffTestingCartPaymentMethodsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCartPaymentMethodsService_Factory() { return new DaffTestingCartPaymentMethodsService(ɵɵinject(DaffCartPaymentFactory)); }, token: DaffTestingCartPaymentMethodsService, providedIn: "root" });
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
class DaffTestingCartShippingAddressService {
    /**
     * @param {?} addressFactory
     * @param {?} cartFactory
     */
    constructor(addressFactory, cartFactory) {
        this.addressFactory = addressFactory;
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    get(cartId) {
        return of(this.addressFactory.create());
    }
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    update(cartId, address) {
        return of(this.cartFactory.create());
    }
}
DaffTestingCartShippingAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingCartShippingAddressService.ctorParameters = () => [
    { type: DaffCartAddressFactory },
    { type: DaffCartFactory }
];
/** @nocollapse */ DaffTestingCartShippingAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCartShippingAddressService_Factory() { return new DaffTestingCartShippingAddressService(ɵɵinject(DaffCartAddressFactory), ɵɵinject(DaffCartFactory)); }, token: DaffTestingCartShippingAddressService, providedIn: "root" });
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
class DaffTestingCartShippingInformationService {
    /**
     * @param {?} shippingInfoFactory
     * @param {?} cartFactory
     */
    constructor(shippingInfoFactory, cartFactory) {
        this.shippingInfoFactory = shippingInfoFactory;
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    get(cartId) {
        return of(this.shippingInfoFactory.create());
    }
    /**
     * @param {?} cartId
     * @param {?} info
     * @return {?}
     */
    update(cartId, info) {
        return of(this.cartFactory.create());
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    delete(cartId) {
        return of(this.cartFactory.create());
    }
}
DaffTestingCartShippingInformationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingCartShippingInformationService.ctorParameters = () => [
    { type: DaffCartShippingRateFactory },
    { type: DaffCartFactory }
];
/** @nocollapse */ DaffTestingCartShippingInformationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCartShippingInformationService_Factory() { return new DaffTestingCartShippingInformationService(ɵɵinject(DaffCartShippingRateFactory), ɵɵinject(DaffCartFactory)); }, token: DaffTestingCartShippingInformationService, providedIn: "root" });
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
class DaffTestingCartShippingMethodsService {
    /**
     * @param {?} shippingInfoFactory
     */
    constructor(shippingInfoFactory) {
        this.shippingInfoFactory = shippingInfoFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    list(cartId) {
        return of(this.shippingInfoFactory.createMany(3));
    }
}
DaffTestingCartShippingMethodsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingCartShippingMethodsService.ctorParameters = () => [
    { type: DaffCartShippingRateFactory }
];
/** @nocollapse */ DaffTestingCartShippingMethodsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCartShippingMethodsService_Factory() { return new DaffTestingCartShippingMethodsService(ɵɵinject(DaffCartShippingRateFactory)); }, token: DaffTestingCartShippingMethodsService, providedIn: "root" });
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
class DaffTestingCartOrderService {
    /**
     * @param {?} cartId
     * @param {?=} payment
     * @return {?}
     */
    placeOrder(cartId, payment) {
        return of({
            id: random.number(999999),
            orderId: random.number(999999),
            cartId,
        });
    }
}
DaffTestingCartOrderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffTestingCartOrderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCartOrderService_Factory() { return new DaffTestingCartOrderService(); }, token: DaffTestingCartOrderService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffTestingCartCouponService {
    /**
     * @param {?} couponFactory
     * @param {?} cartFactory
     */
    constructor(couponFactory, cartFactory) {
        this.couponFactory = couponFactory;
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    list(cartId) {
        return of(this.couponFactory.createMany(3));
    }
    /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    apply(cartId, coupon) {
        return of(this.cartFactory.create());
    }
    /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    remove(cartId, coupon) {
        return of(this.cartFactory.create());
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    removeAll(cartId) {
        return of(this.cartFactory.create());
    }
}
DaffTestingCartCouponService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingCartCouponService.ctorParameters = () => [
    { type: DaffCartCouponFactory },
    { type: DaffCartFactory }
];
/** @nocollapse */ DaffTestingCartCouponService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCartCouponService_Factory() { return new DaffTestingCartCouponService(ɵɵinject(DaffCartCouponFactory), ɵɵinject(DaffCartFactory)); }, token: DaffTestingCartCouponService, providedIn: "root" });
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
class DaffTestingCartDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
    }
}
DaffTestingCartDriverModule.decorators = [
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
