import { __extends } from 'tslib';
import { Injectable, ɵɵdefineInjectable } from '@angular/core';
import { random } from 'faker/locale/en_US';
import { DaffCartTotalTypeEnum, DaffCartItemInputType } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProductImageFactory } from '@daffodil/product/testing';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockCart = /** @class */ (function () {
    function MockCart() {
        this.id = random.number({ min: 1, max: 1000 });
        this.subtotal = 10000;
        this.grand_total = 15000;
        this.coupons = [];
        this.items = [];
        this.billing_address = null;
        this.shipping_address = null;
        this.shipping_information = null;
        this.totals = [
            {
                name: DaffCartTotalTypeEnum.grandTotal,
                value: 1050,
                label: 'Grand Total'
            },
            {
                name: DaffCartTotalTypeEnum.subtotalExcludingTax,
                value: 900,
                label: 'Subtotal Excluding Tax'
            },
            {
                name: DaffCartTotalTypeEnum.subtotalIncludingTax,
                value: 950,
                label: 'Subtotal Including Tax'
            },
            {
                name: DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax,
                value: 850,
                label: ''
            },
            {
                name: DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax,
                value: 900,
                label: ''
            },
            {
                name: DaffCartTotalTypeEnum.tax,
                value: 50,
                label: ''
            },
            {
                name: DaffCartTotalTypeEnum.discount,
                value: 50,
                label: ''
            },
            {
                name: DaffCartTotalTypeEnum.shipping,
                value: 50,
                label: 'Shipping'
            }
        ];
        this.payment = null;
        this.available_shipping_methods = [];
        this.available_payment_methods = [];
        this.extra_attributes = {};
    }
    return MockCart;
}());
if (false) {
    /** @type {?} */
    MockCart.prototype.id;
    /** @type {?} */
    MockCart.prototype.subtotal;
    /** @type {?} */
    MockCart.prototype.grand_total;
    /** @type {?} */
    MockCart.prototype.coupons;
    /** @type {?} */
    MockCart.prototype.items;
    /** @type {?} */
    MockCart.prototype.billing_address;
    /** @type {?} */
    MockCart.prototype.shipping_address;
    /** @type {?} */
    MockCart.prototype.shipping_information;
    /** @type {?} */
    MockCart.prototype.totals;
    /** @type {?} */
    MockCart.prototype.payment;
    /** @type {?} */
    MockCart.prototype.available_shipping_methods;
    /** @type {?} */
    MockCart.prototype.available_payment_methods;
    /** @type {?} */
    MockCart.prototype.extra_attributes;
}
;
var DaffCartFactory = /** @class */ (function (_super) {
    __extends(DaffCartFactory, _super);
    function DaffCartFactory() {
        return _super.call(this, MockCart) || this;
    }
    DaffCartFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCartFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffCartFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCartFactory_Factory() { return new DaffCartFactory(); }, token: DaffCartFactory, providedIn: "root" });
    return DaffCartFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffMockCartItem = /** @class */ (function () {
    function DaffMockCartItem() {
        this.item_id = random.number({ min: 1, max: 1000 });
        this.type = DaffCartItemInputType.Simple;
        this.product_id = String(random.number({ min: 1, max: 1000 }));
        this.parent_item_id = random.number({ min: 1, max: 1000 });
        this.image = (/** @type {?} */ (new DaffProductImageFactory().create()));
        this.sku = 'sku';
        this.name = 'Product Name';
        this.qty = random.number({ min: 1, max: 100 });
        this.price = random.number({ min: 1, max: 1500 });
        this.row_total = this.qty * this.price;
        this.total_discount = random.number({ min: 0, max: this.price - 1 });
        this.in_stock = true;
    }
    return DaffMockCartItem;
}());
if (false) {
    /** @type {?} */
    DaffMockCartItem.prototype.item_id;
    /** @type {?} */
    DaffMockCartItem.prototype.type;
    /** @type {?} */
    DaffMockCartItem.prototype.product_id;
    /** @type {?} */
    DaffMockCartItem.prototype.parent_item_id;
    /** @type {?} */
    DaffMockCartItem.prototype.image;
    /** @type {?} */
    DaffMockCartItem.prototype.sku;
    /** @type {?} */
    DaffMockCartItem.prototype.name;
    /** @type {?} */
    DaffMockCartItem.prototype.qty;
    /** @type {?} */
    DaffMockCartItem.prototype.price;
    /** @type {?} */
    DaffMockCartItem.prototype.row_total;
    /** @type {?} */
    DaffMockCartItem.prototype.total_discount;
    /** @type {?} */
    DaffMockCartItem.prototype.in_stock;
}
var DaffCartItemFactory = /** @class */ (function (_super) {
    __extends(DaffCartItemFactory, _super);
    function DaffCartItemFactory() {
        return _super.call(this, DaffMockCartItem) || this;
    }
    DaffCartItemFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCartItemFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffCartItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCartItemFactory_Factory() { return new DaffCartItemFactory(); }, token: DaffCartItemFactory, providedIn: "root" });
    return DaffCartItemFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffMockConfigurableCartItem = /** @class */ (function (_super) {
    __extends(DaffMockConfigurableCartItem, _super);
    function DaffMockConfigurableCartItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = DaffCartItemInputType.Configurable;
        _this.attributes = [
            {
                attribute_label: 'Color',
                value_label: 'Red'
            },
            {
                attribute_label: 'Size',
                value_label: 'M'
            }
        ];
        return _this;
    }
    return DaffMockConfigurableCartItem;
}(DaffMockCartItem));
if (false) {
    /** @type {?} */
    DaffMockConfigurableCartItem.prototype.type;
    /** @type {?} */
    DaffMockConfigurableCartItem.prototype.attributes;
}
var DaffConfigurableCartItemFactory = /** @class */ (function (_super) {
    __extends(DaffConfigurableCartItemFactory, _super);
    function DaffConfigurableCartItemFactory() {
        return _super.call(this, DaffMockConfigurableCartItem) || this;
    }
    DaffConfigurableCartItemFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffConfigurableCartItemFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffConfigurableCartItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffConfigurableCartItemFactory_Factory() { return new DaffConfigurableCartItemFactory(); }, token: DaffConfigurableCartItemFactory, providedIn: "root" });
    return DaffConfigurableCartItemFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffMockCompositeCartItem = /** @class */ (function (_super) {
    __extends(DaffMockCompositeCartItem, _super);
    function DaffMockCompositeCartItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = DaffCartItemInputType.Composite;
        _this.options = [
            {
                option_id: random.number(1000).toString(),
                option_label: random.word(),
                value_label: random.word()
            },
            {
                option_id: random.number(1000).toString(),
                option_label: random.word(),
                value_label: random.word()
            }
        ];
        return _this;
    }
    return DaffMockCompositeCartItem;
}(DaffMockCartItem));
if (false) {
    /** @type {?} */
    DaffMockCompositeCartItem.prototype.type;
    /** @type {?} */
    DaffMockCompositeCartItem.prototype.options;
}
var DaffCompositeCartItemFactory = /** @class */ (function (_super) {
    __extends(DaffCompositeCartItemFactory, _super);
    function DaffCompositeCartItemFactory() {
        return _super.call(this, DaffMockCompositeCartItem) || this;
    }
    DaffCompositeCartItemFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCompositeCartItemFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffCompositeCartItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCompositeCartItemFactory_Factory() { return new DaffCompositeCartItemFactory(); }, token: DaffCompositeCartItemFactory, providedIn: "root" });
    return DaffCompositeCartItemFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockCartAddress = /** @class */ (function () {
    function MockCartAddress() {
        this.address_id = random.number({ min: 1, max: 1000 });
        this.address_type = 'apartment';
        this.email = 'email@email.com';
        this.prefix = 'prefix';
        this.firstname = 'first';
        this.middlename = 'middle';
        this.lastname = 'last';
        this.suffix = 'suffix';
        this.company = 'company';
        this.street = 'street';
        this.city = 'city';
        this.state = 'state';
        this.region = 'region';
        this.postcode = 'postcode';
        this.country_id = 'ISO';
        this.telephone = '+1 (123)-123-1234';
    }
    return MockCartAddress;
}());
if (false) {
    /** @type {?} */
    MockCartAddress.prototype.address_id;
    /** @type {?} */
    MockCartAddress.prototype.address_type;
    /** @type {?} */
    MockCartAddress.prototype.email;
    /** @type {?} */
    MockCartAddress.prototype.prefix;
    /** @type {?} */
    MockCartAddress.prototype.firstname;
    /** @type {?} */
    MockCartAddress.prototype.middlename;
    /** @type {?} */
    MockCartAddress.prototype.lastname;
    /** @type {?} */
    MockCartAddress.prototype.suffix;
    /** @type {?} */
    MockCartAddress.prototype.company;
    /** @type {?} */
    MockCartAddress.prototype.street;
    /** @type {?} */
    MockCartAddress.prototype.city;
    /** @type {?} */
    MockCartAddress.prototype.state;
    /** @type {?} */
    MockCartAddress.prototype.region;
    /** @type {?} */
    MockCartAddress.prototype.postcode;
    /** @type {?} */
    MockCartAddress.prototype.country_id;
    /** @type {?} */
    MockCartAddress.prototype.telephone;
}
var DaffCartAddressFactory = /** @class */ (function (_super) {
    __extends(DaffCartAddressFactory, _super);
    function DaffCartAddressFactory() {
        return _super.call(this, MockCartAddress) || this;
    }
    DaffCartAddressFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCartAddressFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffCartAddressFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCartAddressFactory_Factory() { return new DaffCartAddressFactory(); }, token: DaffCartAddressFactory, providedIn: "root" });
    return DaffCartAddressFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockCartPayment = /** @class */ (function () {
    function MockCartPayment() {
        this.method = 'credit-card';
    }
    return MockCartPayment;
}());
if (false) {
    /** @type {?} */
    MockCartPayment.prototype.method;
}
var DaffCartPaymentFactory = /** @class */ (function (_super) {
    __extends(DaffCartPaymentFactory, _super);
    function DaffCartPaymentFactory() {
        return _super.call(this, MockCartPayment) || this;
    }
    DaffCartPaymentFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    DaffCartPaymentFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffCartPaymentFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCartPaymentFactory_Factory() { return new DaffCartPaymentFactory(); }, token: DaffCartPaymentFactory, providedIn: "root" });
    return DaffCartPaymentFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockCartShippingRate = /** @class */ (function () {
    function MockCartShippingRate() {
        this.id = random.number({ min: 1, max: 1000 });
        this.carrier = 'Birds Inc.';
        this.carrier_title = 'laden';
        this.method_code = random.word();
        this.method_title = 'swallow';
        this.method_description = 'efficient';
        this.price = random.number({ min: 1, max: 1500 });
    }
    return MockCartShippingRate;
}());
if (false) {
    /** @type {?} */
    MockCartShippingRate.prototype.id;
    /** @type {?} */
    MockCartShippingRate.prototype.carrier;
    /** @type {?} */
    MockCartShippingRate.prototype.carrier_title;
    /** @type {?} */
    MockCartShippingRate.prototype.method_code;
    /** @type {?} */
    MockCartShippingRate.prototype.method_title;
    /** @type {?} */
    MockCartShippingRate.prototype.method_description;
    /** @type {?} */
    MockCartShippingRate.prototype.price;
}
var DaffCartShippingRateFactory = /** @class */ (function (_super) {
    __extends(DaffCartShippingRateFactory, _super);
    function DaffCartShippingRateFactory() {
        return _super.call(this, MockCartShippingRate) || this;
    }
    DaffCartShippingRateFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCartShippingRateFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffCartShippingRateFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCartShippingRateFactory_Factory() { return new DaffCartShippingRateFactory(); }, token: DaffCartShippingRateFactory, providedIn: "root" });
    return DaffCartShippingRateFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockDaffCartCoupon = /** @class */ (function () {
    function MockDaffCartCoupon() {
        this.coupon_id = random.number({ min: 1, max: 1000 });
        this.code = random.alphaNumeric(20);
        this.description = random.words(5);
    }
    return MockDaffCartCoupon;
}());
if (false) {
    /** @type {?} */
    MockDaffCartCoupon.prototype.coupon_id;
    /** @type {?} */
    MockDaffCartCoupon.prototype.code;
    /** @type {?} */
    MockDaffCartCoupon.prototype.description;
}
;
var DaffCartCouponFactory = /** @class */ (function (_super) {
    __extends(DaffCartCouponFactory, _super);
    function DaffCartCouponFactory() {
        return _super.call(this, MockDaffCartCoupon) || this;
    }
    DaffCartCouponFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCartCouponFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffCartCouponFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCartCouponFactory_Factory() { return new DaffCartCouponFactory(); }, token: DaffCartCouponFactory, providedIn: "root" });
    return DaffCartCouponFactory;
}(DaffModelFactory));

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

export { DaffCartAddressFactory, DaffCartCouponFactory, DaffCartFactory, DaffCartItemFactory, DaffCartPaymentFactory, DaffCartShippingRateFactory, DaffCompositeCartItemFactory, DaffConfigurableCartItemFactory, DaffMockCartItem, DaffMockCompositeCartItem, DaffMockConfigurableCartItem };
//# sourceMappingURL=daffodil-cart-testing.js.map
