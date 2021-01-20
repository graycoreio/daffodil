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
class MockMagentoCartAddress {
    constructor() {
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
}
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
class MagentoCartAddressFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoCartAddress);
    }
}
MagentoCartAddressFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MagentoCartAddressFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoCartAddressFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoCartAddressFactory_Factory() { return new MagentoCartAddressFactory(); }, token: MagentoCartAddressFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockMagentoCartAddressInput {
    constructor() {
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
}
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
class MagentoCartAddressInputFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoCartAddressInput);
    }
}
MagentoCartAddressInputFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MagentoCartAddressInputFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoCartAddressInputFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoCartAddressInputFactory_Factory() { return new MagentoCartAddressInputFactory(); }, token: MagentoCartAddressInputFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockMagentoCartCoupon {
    constructor() {
        this.code = random.alphaNumeric(20);
    }
}
if (false) {
    /** @type {?} */
    MockMagentoCartCoupon.prototype.code;
}
;
class MagentoCartCouponFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoCartCoupon);
    }
}
MagentoCartCouponFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MagentoCartCouponFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoCartCouponFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoCartCouponFactory_Factory() { return new MagentoCartCouponFactory(); }, token: MagentoCartCouponFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockMagentoCartPaymentMethod {
    constructor() {
        this.code = random.word();
        this.title = random.word();
        this.purchase_order_number = random.word();
    }
}
if (false) {
    /** @type {?} */
    MockMagentoCartPaymentMethod.prototype.code;
    /** @type {?} */
    MockMagentoCartPaymentMethod.prototype.title;
    /** @type {?} */
    MockMagentoCartPaymentMethod.prototype.purchase_order_number;
}
class MagentoCartPaymentMethodFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoCartPaymentMethod);
    }
}
MagentoCartPaymentMethodFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
MagentoCartPaymentMethodFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoCartPaymentMethodFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoCartPaymentMethodFactory_Factory() { return new MagentoCartPaymentMethodFactory(); }, token: MagentoCartPaymentMethodFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockCartShippingMethod {
    constructor() {
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
    money() {
        return (new MagentoMoneyFactory()).create();
    }
}
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
class MagentoCartShippingMethodFactory extends DaffModelFactory {
    constructor() {
        super(MockCartShippingMethod);
    }
}
MagentoCartShippingMethodFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MagentoCartShippingMethodFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoCartShippingMethodFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoCartShippingMethodFactory_Factory() { return new MagentoCartShippingMethodFactory(); }, token: MagentoCartShippingMethodFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockMagentoCart {
    constructor() {
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
    money() {
        return (new MagentoMoneyFactory()).create();
    }
}
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
class MagentoCartFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoCart);
    }
}
MagentoCartFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MagentoCartFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoCartFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoCartFactory_Factory() { return new MagentoCartFactory(); }, token: MagentoCartFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockMagentoCartItem {
    constructor() {
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
    createProduct() {
        return (new MagentoProductFactory()).create();
    }
    /**
     * @private
     * @return {?}
     */
    money() {
        return (new MagentoMoneyFactory()).create();
    }
}
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
class MagentoCartItemFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoCartItem);
    }
}
MagentoCartItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MagentoCartItemFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoCartItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoCartItemFactory_Factory() { return new MagentoCartItemFactory(); }, token: MagentoCartItemFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockMagentoBundleCartItem extends MockMagentoCartItem {
    constructor() {
        super(...arguments);
        this.__typename = MagentoCartItemTypeEnum.Bundle;
        this.bundle_options = [
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
    }
}
if (false) {
    /** @type {?} */
    MockMagentoBundleCartItem.prototype.__typename;
    /** @type {?} */
    MockMagentoBundleCartItem.prototype.bundle_options;
}
class MagentoBundleCartItemFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoBundleCartItem);
    }
}
MagentoBundleCartItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MagentoBundleCartItemFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoBundleCartItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoBundleCartItemFactory_Factory() { return new MagentoBundleCartItemFactory(); }, token: MagentoBundleCartItemFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockMagentoConfigurableCartItem extends MockMagentoCartItem {
    constructor() {
        super(...arguments);
        this.__typename = MagentoCartItemTypeEnum.Configurable;
        this.configurable_options = [
            {
                option_label: 'Color',
                value_label: 'Red'
            },
            {
                option_label: 'Size',
                value_label: 'M'
            },
        ];
    }
}
if (false) {
    /** @type {?} */
    MockMagentoConfigurableCartItem.prototype.__typename;
    /** @type {?} */
    MockMagentoConfigurableCartItem.prototype.configurable_options;
}
class MagentoConfigurableCartItemFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoConfigurableCartItem);
    }
}
MagentoConfigurableCartItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MagentoConfigurableCartItemFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoConfigurableCartItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoConfigurableCartItemFactory_Factory() { return new MagentoConfigurableCartItemFactory(); }, token: MagentoConfigurableCartItemFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockMagentoShippingAddress extends MockMagentoCartAddress {
    constructor() {
        super(...arguments);
        this.__typename = 'ShippingCartAddress';
        this.available_shipping_methods = [];
        this.selected_shipping_method = null;
    }
}
if (false) {
    /** @type {?} */
    MockMagentoShippingAddress.prototype.__typename;
    /** @type {?} */
    MockMagentoShippingAddress.prototype.available_shipping_methods;
    /** @type {?} */
    MockMagentoShippingAddress.prototype.selected_shipping_method;
}
class MagentoShippingAddressFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoShippingAddress);
    }
}
MagentoShippingAddressFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MagentoShippingAddressFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoShippingAddressFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MagentoShippingAddressFactory_Factory() { return new MagentoShippingAddressFactory(); }, token: MagentoShippingAddressFactory, providedIn: "root" });

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
