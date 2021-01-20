import { Injectable, ɵɵdefineInjectable } from '@angular/core';
import { random } from 'faker/locale/en_US';
import { DaffCartTotalTypeEnum, DaffCartItemInputType } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProductImageFactory } from '@daffodil/product/testing';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockCart {
    constructor() {
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
}
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
class DaffCartFactory extends DaffModelFactory {
    constructor() {
        super(MockCart);
    }
}
DaffCartFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCartFactory.ctorParameters = () => [];
/** @nocollapse */ DaffCartFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCartFactory_Factory() { return new DaffCartFactory(); }, token: DaffCartFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffMockCartItem {
    constructor() {
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
}
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
class DaffCartItemFactory extends DaffModelFactory {
    constructor() {
        super(DaffMockCartItem);
    }
}
DaffCartItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCartItemFactory.ctorParameters = () => [];
/** @nocollapse */ DaffCartItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCartItemFactory_Factory() { return new DaffCartItemFactory(); }, token: DaffCartItemFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffMockConfigurableCartItem extends DaffMockCartItem {
    constructor() {
        super(...arguments);
        this.type = DaffCartItemInputType.Configurable;
        this.attributes = [
            {
                attribute_label: 'Color',
                value_label: 'Red'
            },
            {
                attribute_label: 'Size',
                value_label: 'M'
            }
        ];
    }
}
if (false) {
    /** @type {?} */
    DaffMockConfigurableCartItem.prototype.type;
    /** @type {?} */
    DaffMockConfigurableCartItem.prototype.attributes;
}
class DaffConfigurableCartItemFactory extends DaffModelFactory {
    constructor() {
        super(DaffMockConfigurableCartItem);
    }
}
DaffConfigurableCartItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffConfigurableCartItemFactory.ctorParameters = () => [];
/** @nocollapse */ DaffConfigurableCartItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffConfigurableCartItemFactory_Factory() { return new DaffConfigurableCartItemFactory(); }, token: DaffConfigurableCartItemFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffMockCompositeCartItem extends DaffMockCartItem {
    constructor() {
        super(...arguments);
        this.type = DaffCartItemInputType.Composite;
        this.options = [
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
    }
}
if (false) {
    /** @type {?} */
    DaffMockCompositeCartItem.prototype.type;
    /** @type {?} */
    DaffMockCompositeCartItem.prototype.options;
}
class DaffCompositeCartItemFactory extends DaffModelFactory {
    constructor() {
        super(DaffMockCompositeCartItem);
    }
}
DaffCompositeCartItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCompositeCartItemFactory.ctorParameters = () => [];
/** @nocollapse */ DaffCompositeCartItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCompositeCartItemFactory_Factory() { return new DaffCompositeCartItemFactory(); }, token: DaffCompositeCartItemFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockCartAddress {
    constructor() {
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
}
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
class DaffCartAddressFactory extends DaffModelFactory {
    constructor() {
        super(MockCartAddress);
    }
}
DaffCartAddressFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCartAddressFactory.ctorParameters = () => [];
/** @nocollapse */ DaffCartAddressFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCartAddressFactory_Factory() { return new DaffCartAddressFactory(); }, token: DaffCartAddressFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockCartPayment {
    constructor() {
        this.method = 'credit-card';
    }
}
if (false) {
    /** @type {?} */
    MockCartPayment.prototype.method;
}
class DaffCartPaymentFactory extends DaffModelFactory {
    constructor() {
        super(MockCartPayment);
    }
}
DaffCartPaymentFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
DaffCartPaymentFactory.ctorParameters = () => [];
/** @nocollapse */ DaffCartPaymentFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCartPaymentFactory_Factory() { return new DaffCartPaymentFactory(); }, token: DaffCartPaymentFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockCartShippingRate {
    constructor() {
        this.id = random.number({ min: 1, max: 1000 });
        this.carrier = 'Birds Inc.';
        this.carrier_title = 'laden';
        this.method_code = random.word();
        this.method_title = 'swallow';
        this.method_description = 'efficient';
        this.price = random.number({ min: 1, max: 1500 });
    }
}
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
class DaffCartShippingRateFactory extends DaffModelFactory {
    constructor() {
        super(MockCartShippingRate);
    }
}
DaffCartShippingRateFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCartShippingRateFactory.ctorParameters = () => [];
/** @nocollapse */ DaffCartShippingRateFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCartShippingRateFactory_Factory() { return new DaffCartShippingRateFactory(); }, token: DaffCartShippingRateFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockDaffCartCoupon {
    constructor() {
        this.coupon_id = random.number({ min: 1, max: 1000 });
        this.code = random.alphaNumeric(20);
        this.description = random.words(5);
    }
}
if (false) {
    /** @type {?} */
    MockDaffCartCoupon.prototype.coupon_id;
    /** @type {?} */
    MockDaffCartCoupon.prototype.code;
    /** @type {?} */
    MockDaffCartCoupon.prototype.description;
}
;
class DaffCartCouponFactory extends DaffModelFactory {
    constructor() {
        super(MockDaffCartCoupon);
    }
}
DaffCartCouponFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCartCouponFactory.ctorParameters = () => [];
/** @nocollapse */ DaffCartCouponFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCartCouponFactory_Factory() { return new DaffCartCouponFactory(); }, token: DaffCartCouponFactory, providedIn: "root" });

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
