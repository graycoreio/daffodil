import { __extends } from 'tslib';
import { Injectable, ɵɵdefineInjectable } from '@angular/core';
import { address, company, phone, name, internet, random } from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoMoneyFactory } from '@daffodil/driver/magento/testing';
import { MagentoCartItemTypeEnum } from '@daffodil/cart/driver/magento';
import { MagentoProductFactory } from '@daffodil/product/testing';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockMagentoCartAddress = /** @class */ (function () {
    function MockMagentoCartAddress() {
        this.__typename = 'BillingCartAddress';
        this.region = {
            __typename: 'CartAddressRegion',
            code: address.stateAbbr(),
            label: address.state()
        };
        this.country = {
            __typename: 'CartAddressCountry',
            code: address.countryCode(),
            label: address.country()
        };
        this.street = [address.streetAddress()];
        this.company = company.companyName();
        this.telephone = phone.phoneNumber();
        this.postcode = address.zipCode();
        this.city = address.city();
        this.firstname = name.firstName();
        this.lastname = name.lastName();
        this.email = internet.email();
    }
    return MockMagentoCartAddress;
}());
if (false) {
    /** @type {?} */
    MockMagentoCartAddress.prototype.__typename;
    /** @type {?} */
    MockMagentoCartAddress.prototype.region;
    /** @type {?} */
    MockMagentoCartAddress.prototype.country;
    /** @type {?} */
    MockMagentoCartAddress.prototype.street;
    /** @type {?} */
    MockMagentoCartAddress.prototype.company;
    /** @type {?} */
    MockMagentoCartAddress.prototype.telephone;
    /** @type {?} */
    MockMagentoCartAddress.prototype.postcode;
    /** @type {?} */
    MockMagentoCartAddress.prototype.city;
    /** @type {?} */
    MockMagentoCartAddress.prototype.firstname;
    /** @type {?} */
    MockMagentoCartAddress.prototype.lastname;
    /** @type {?} */
    MockMagentoCartAddress.prototype.email;
}
var MagentoCartAddressFactory = /** @class */ (function (_super) {
    __extends(MagentoCartAddressFactory, _super);
    function MagentoCartAddressFactory() {
        return _super.call(this, MockMagentoCartAddress) || this;
    }
    MagentoCartAddressFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MagentoCartAddressFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoCartAddressFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoCartAddressFactory_Factory() { return new MagentoCartAddressFactory(); }, token: MagentoCartAddressFactory, providedIn: "root" });
    return MagentoCartAddressFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockMagentoCartAddressInput = /** @class */ (function () {
    function MockMagentoCartAddressInput() {
        this.region = address.stateAbbr();
        this.country_code = address.countryCode();
        this.street = [address.streetAddress()];
        this.company = company.companyName();
        this.telephone = phone.phoneNumber();
        this.postcode = address.zipCode();
        this.city = address.city();
        this.firstname = name.firstName();
        this.lastname = name.lastName();
        this.save_in_address_book = random.boolean();
    }
    return MockMagentoCartAddressInput;
}());
if (false) {
    /** @type {?} */
    MockMagentoCartAddressInput.prototype.region;
    /** @type {?} */
    MockMagentoCartAddressInput.prototype.country_code;
    /** @type {?} */
    MockMagentoCartAddressInput.prototype.street;
    /** @type {?} */
    MockMagentoCartAddressInput.prototype.company;
    /** @type {?} */
    MockMagentoCartAddressInput.prototype.telephone;
    /** @type {?} */
    MockMagentoCartAddressInput.prototype.postcode;
    /** @type {?} */
    MockMagentoCartAddressInput.prototype.city;
    /** @type {?} */
    MockMagentoCartAddressInput.prototype.firstname;
    /** @type {?} */
    MockMagentoCartAddressInput.prototype.lastname;
    /** @type {?} */
    MockMagentoCartAddressInput.prototype.save_in_address_book;
}
var MagentoCartAddressInputFactory = /** @class */ (function (_super) {
    __extends(MagentoCartAddressInputFactory, _super);
    function MagentoCartAddressInputFactory() {
        return _super.call(this, MockMagentoCartAddressInput) || this;
    }
    MagentoCartAddressInputFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MagentoCartAddressInputFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoCartAddressInputFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoCartAddressInputFactory_Factory() { return new MagentoCartAddressInputFactory(); }, token: MagentoCartAddressInputFactory, providedIn: "root" });
    return MagentoCartAddressInputFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockMagentoCartCoupon = /** @class */ (function () {
    function MockMagentoCartCoupon() {
        this.code = random.alphaNumeric(20);
    }
    return MockMagentoCartCoupon;
}());
if (false) {
    /** @type {?} */
    MockMagentoCartCoupon.prototype.code;
}
;
var MagentoCartCouponFactory = /** @class */ (function (_super) {
    __extends(MagentoCartCouponFactory, _super);
    function MagentoCartCouponFactory() {
        return _super.call(this, MockMagentoCartCoupon) || this;
    }
    MagentoCartCouponFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MagentoCartCouponFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoCartCouponFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoCartCouponFactory_Factory() { return new MagentoCartCouponFactory(); }, token: MagentoCartCouponFactory, providedIn: "root" });
    return MagentoCartCouponFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockMagentoCartPaymentMethod = /** @class */ (function () {
    function MockMagentoCartPaymentMethod() {
        this.code = random.word();
        this.title = random.word();
        this.purchase_order_number = random.word();
    }
    return MockMagentoCartPaymentMethod;
}());
if (false) {
    /** @type {?} */
    MockMagentoCartPaymentMethod.prototype.code;
    /** @type {?} */
    MockMagentoCartPaymentMethod.prototype.title;
    /** @type {?} */
    MockMagentoCartPaymentMethod.prototype.purchase_order_number;
}
var MagentoCartPaymentMethodFactory = /** @class */ (function (_super) {
    __extends(MagentoCartPaymentMethodFactory, _super);
    function MagentoCartPaymentMethodFactory() {
        return _super.call(this, MockMagentoCartPaymentMethod) || this;
    }
    MagentoCartPaymentMethodFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    MagentoCartPaymentMethodFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoCartPaymentMethodFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoCartPaymentMethodFactory_Factory() { return new MagentoCartPaymentMethodFactory(); }, token: MagentoCartPaymentMethodFactory, providedIn: "root" });
    return MagentoCartPaymentMethodFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockCartShippingMethod = /** @class */ (function () {
    function MockCartShippingMethod() {
        this.carrier_code = random.word();
        this.carrier_title = random.words(2);
        this.method_title = random.words(2);
        this.method_code = random.word();
        this.amount = this.money();
    }
    /**
     * @private
     * @return {?}
     */
    MockCartShippingMethod.prototype.money = /**
     * @private
     * @return {?}
     */
    function () {
        return (new MagentoMoneyFactory()).create();
    };
    return MockCartShippingMethod;
}());
if (false) {
    /** @type {?} */
    MockCartShippingMethod.prototype.carrier_code;
    /** @type {?} */
    MockCartShippingMethod.prototype.carrier_title;
    /** @type {?} */
    MockCartShippingMethod.prototype.method_title;
    /** @type {?} */
    MockCartShippingMethod.prototype.method_code;
    /** @type {?} */
    MockCartShippingMethod.prototype.amount;
}
var MagentoCartShippingMethodFactory = /** @class */ (function (_super) {
    __extends(MagentoCartShippingMethodFactory, _super);
    function MagentoCartShippingMethodFactory() {
        return _super.call(this, MockCartShippingMethod) || this;
    }
    MagentoCartShippingMethodFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MagentoCartShippingMethodFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoCartShippingMethodFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoCartShippingMethodFactory_Factory() { return new MagentoCartShippingMethodFactory(); }, token: MagentoCartShippingMethodFactory, providedIn: "root" });
    return MagentoCartShippingMethodFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockMagentoCart = /** @class */ (function () {
    function MockMagentoCart() {
        this.__typename = 'Cart';
        this.id = random.number({ min: 1, max: 1000 });
        this.prices = {
            __typename: 'CartPrices',
            subtotal_excluding_tax: this.money(),
            grand_total: this.money(),
            subtotal_including_tax: this.money(),
            subtotal_with_discount_excluding_tax: this.money(),
            applied_taxes: [{
                    __typename: 'AppliedTax',
                    amount: this.money(),
                    label: 'tax'
                }],
            discounts: [{
                    __typename: 'Discount',
                    amount: this.money(),
                    label: 'discount'
                }]
        };
        this.applied_coupons = [];
        this.items = [];
        this.billing_address = null;
        this.shipping_addresses = [];
        this.available_payment_methods = [];
        this.selected_payment_method = null;
        this.email = internet.email();
    }
    /**
     * @private
     * @return {?}
     */
    MockMagentoCart.prototype.money = /**
     * @private
     * @return {?}
     */
    function () {
        return (new MagentoMoneyFactory()).create();
    };
    return MockMagentoCart;
}());
if (false) {
    /** @type {?} */
    MockMagentoCart.prototype.__typename;
    /** @type {?} */
    MockMagentoCart.prototype.id;
    /** @type {?} */
    MockMagentoCart.prototype.prices;
    /** @type {?} */
    MockMagentoCart.prototype.applied_coupons;
    /** @type {?} */
    MockMagentoCart.prototype.items;
    /** @type {?} */
    MockMagentoCart.prototype.billing_address;
    /** @type {?} */
    MockMagentoCart.prototype.shipping_addresses;
    /** @type {?} */
    MockMagentoCart.prototype.available_payment_methods;
    /** @type {?} */
    MockMagentoCart.prototype.selected_payment_method;
    /** @type {?} */
    MockMagentoCart.prototype.email;
}
;
var MagentoCartFactory = /** @class */ (function (_super) {
    __extends(MagentoCartFactory, _super);
    function MagentoCartFactory() {
        return _super.call(this, MockMagentoCart) || this;
    }
    MagentoCartFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MagentoCartFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoCartFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoCartFactory_Factory() { return new MagentoCartFactory(); }, token: MagentoCartFactory, providedIn: "root" });
    return MagentoCartFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockMagentoCartItem = /** @class */ (function () {
    function MockMagentoCartItem() {
        this.__typename = MagentoCartItemTypeEnum.Simple;
        this.id = random.number({ min: 1, max: 1000 });
        this.prices = {
            __typename: 'CartItemPrices',
            price: this.money(),
            row_total: this.money(),
            row_total_including_tax: this.money(),
            total_item_discount: this.money()
        };
        this.product = this.createProduct();
        this.quantity = random.number({ min: 1, max: 20 });
    }
    /**
     * @private
     * @return {?}
     */
    MockMagentoCartItem.prototype.createProduct = /**
     * @private
     * @return {?}
     */
    function () {
        return (new MagentoProductFactory()).create();
    };
    /**
     * @private
     * @return {?}
     */
    MockMagentoCartItem.prototype.money = /**
     * @private
     * @return {?}
     */
    function () {
        return (new MagentoMoneyFactory()).create();
    };
    return MockMagentoCartItem;
}());
if (false) {
    /** @type {?} */
    MockMagentoCartItem.prototype.__typename;
    /** @type {?} */
    MockMagentoCartItem.prototype.id;
    /** @type {?} */
    MockMagentoCartItem.prototype.prices;
    /** @type {?} */
    MockMagentoCartItem.prototype.product;
    /** @type {?} */
    MockMagentoCartItem.prototype.quantity;
}
var MagentoCartItemFactory = /** @class */ (function (_super) {
    __extends(MagentoCartItemFactory, _super);
    function MagentoCartItemFactory() {
        return _super.call(this, MockMagentoCartItem) || this;
    }
    MagentoCartItemFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MagentoCartItemFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoCartItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoCartItemFactory_Factory() { return new MagentoCartItemFactory(); }, token: MagentoCartItemFactory, providedIn: "root" });
    return MagentoCartItemFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockMagentoBundleCartItem = /** @class */ (function (_super) {
    __extends(MockMagentoBundleCartItem, _super);
    function MockMagentoBundleCartItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.__typename = MagentoCartItemTypeEnum.Bundle;
        _this.bundle_options = [
            {
                id: random.number({ min: 1, max: 1000 }),
                type: 'radio',
                label: random.word(),
                price: random.number({ min: 1, max: 99 }),
                quantity: 1,
                values: [{
                        id: random.number({ min: 1, max: 1000 }),
                        label: random.word(),
                        price: random.number({ min: 1, max: 99 }),
                        quantity: 1
                    }]
            }
        ];
        return _this;
    }
    return MockMagentoBundleCartItem;
}(MockMagentoCartItem));
if (false) {
    /** @type {?} */
    MockMagentoBundleCartItem.prototype.__typename;
    /** @type {?} */
    MockMagentoBundleCartItem.prototype.bundle_options;
}
var MagentoBundleCartItemFactory = /** @class */ (function (_super) {
    __extends(MagentoBundleCartItemFactory, _super);
    function MagentoBundleCartItemFactory() {
        return _super.call(this, MockMagentoBundleCartItem) || this;
    }
    MagentoBundleCartItemFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MagentoBundleCartItemFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoBundleCartItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoBundleCartItemFactory_Factory() { return new MagentoBundleCartItemFactory(); }, token: MagentoBundleCartItemFactory, providedIn: "root" });
    return MagentoBundleCartItemFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockMagentoConfigurableCartItem = /** @class */ (function (_super) {
    __extends(MockMagentoConfigurableCartItem, _super);
    function MockMagentoConfigurableCartItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.__typename = MagentoCartItemTypeEnum.Configurable;
        _this.configurable_options = [
            {
                option_label: 'Color',
                value_label: 'Red'
            },
            {
                option_label: 'Size',
                value_label: 'M'
            },
        ];
        return _this;
    }
    return MockMagentoConfigurableCartItem;
}(MockMagentoCartItem));
if (false) {
    /** @type {?} */
    MockMagentoConfigurableCartItem.prototype.__typename;
    /** @type {?} */
    MockMagentoConfigurableCartItem.prototype.configurable_options;
}
var MagentoConfigurableCartItemFactory = /** @class */ (function (_super) {
    __extends(MagentoConfigurableCartItemFactory, _super);
    function MagentoConfigurableCartItemFactory() {
        return _super.call(this, MockMagentoConfigurableCartItem) || this;
    }
    MagentoConfigurableCartItemFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MagentoConfigurableCartItemFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoConfigurableCartItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoConfigurableCartItemFactory_Factory() { return new MagentoConfigurableCartItemFactory(); }, token: MagentoConfigurableCartItemFactory, providedIn: "root" });
    return MagentoConfigurableCartItemFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockMagentoShippingAddress = /** @class */ (function (_super) {
    __extends(MockMagentoShippingAddress, _super);
    function MockMagentoShippingAddress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.__typename = 'ShippingCartAddress';
        _this.available_shipping_methods = [];
        _this.selected_shipping_method = null;
        return _this;
    }
    return MockMagentoShippingAddress;
}(MockMagentoCartAddress));
if (false) {
    /** @type {?} */
    MockMagentoShippingAddress.prototype.__typename;
    /** @type {?} */
    MockMagentoShippingAddress.prototype.available_shipping_methods;
    /** @type {?} */
    MockMagentoShippingAddress.prototype.selected_shipping_method;
}
var MagentoShippingAddressFactory = /** @class */ (function (_super) {
    __extends(MagentoShippingAddressFactory, _super);
    function MagentoShippingAddressFactory() {
        return _super.call(this, MockMagentoShippingAddress) || this;
    }
    MagentoShippingAddressFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MagentoShippingAddressFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ MagentoShippingAddressFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoShippingAddressFactory_Factory() { return new MagentoShippingAddressFactory(); }, token: MagentoShippingAddressFactory, providedIn: "root" });
    return MagentoShippingAddressFactory;
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

export { MagentoBundleCartItemFactory, MagentoCartAddressFactory, MagentoCartAddressInputFactory, MagentoCartCouponFactory, MagentoCartFactory, MagentoCartItemFactory, MagentoCartPaymentMethodFactory, MagentoCartShippingMethodFactory, MagentoConfigurableCartItemFactory, MagentoShippingAddressFactory };
//# sourceMappingURL=daffodil-cart-driver-magento-testing.js.map
