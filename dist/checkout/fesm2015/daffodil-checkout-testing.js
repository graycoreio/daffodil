import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { random, company, commerce } from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DaffCheckoutDriver } from '@daffodil/checkout';
import { STATUS } from 'angular-in-memory-web-api';
import { DaffProductImageFactory } from '@daffodil/product/testing';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated
 */
class MockOrderAddress {
    constructor() {
        this.address_id = random.number({ min: 1, max: 1000 });
        this.quote_id = random.number({ min: 1, max: 1000 });
        this.created_at = new Date();
        this.updated_at = new Date();
        this.customer_id = random.number({ min: 1, max: 1000 });
        this.customer_address_id = random.number({ min: 1, max: 1000 });
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
        this.region_id = random.number({ min: 1, max: 1000 });
        this.postcode = 'postcode';
        this.country_id = 'ISO';
        this.telephone = 'telephone';
        this.fax = 'fax';
        this.shipping_method = 'swallow';
        this.shipping_description = 'flight';
        this.shipping_rate = null;
    }
}
if (false) {
    /** @type {?} */
    MockOrderAddress.prototype.address_id;
    /** @type {?} */
    MockOrderAddress.prototype.quote_id;
    /** @type {?} */
    MockOrderAddress.prototype.created_at;
    /** @type {?} */
    MockOrderAddress.prototype.updated_at;
    /** @type {?} */
    MockOrderAddress.prototype.customer_id;
    /** @type {?} */
    MockOrderAddress.prototype.customer_address_id;
    /** @type {?} */
    MockOrderAddress.prototype.address_type;
    /** @type {?} */
    MockOrderAddress.prototype.email;
    /** @type {?} */
    MockOrderAddress.prototype.prefix;
    /** @type {?} */
    MockOrderAddress.prototype.firstname;
    /** @type {?} */
    MockOrderAddress.prototype.middlename;
    /** @type {?} */
    MockOrderAddress.prototype.lastname;
    /** @type {?} */
    MockOrderAddress.prototype.suffix;
    /** @type {?} */
    MockOrderAddress.prototype.company;
    /** @type {?} */
    MockOrderAddress.prototype.street;
    /** @type {?} */
    MockOrderAddress.prototype.city;
    /** @type {?} */
    MockOrderAddress.prototype.state;
    /** @type {?} */
    MockOrderAddress.prototype.region;
    /** @type {?} */
    MockOrderAddress.prototype.region_id;
    /** @type {?} */
    MockOrderAddress.prototype.postcode;
    /** @type {?} */
    MockOrderAddress.prototype.country_id;
    /** @type {?} */
    MockOrderAddress.prototype.telephone;
    /** @type {?} */
    MockOrderAddress.prototype.fax;
    /** @type {?} */
    MockOrderAddress.prototype.shipping_method;
    /** @type {?} */
    MockOrderAddress.prototype.shipping_description;
    /** @type {?} */
    MockOrderAddress.prototype.shipping_rate;
}
/**
 * @deprecated
 */
class DaffOrderAddressFactory extends DaffModelFactory {
    constructor() {
        super(MockOrderAddress);
    }
}
DaffOrderAddressFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderAddressFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderAddressFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderAddressFactory_Factory() { return new DaffOrderAddressFactory(); }, token: DaffOrderAddressFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated
 */
class MockOrderItem {
    constructor() {
        this.item_id = random.number({ min: 1, max: 1000 });
        this.image = null;
        this.quote_id = random.number({ min: 1, max: 1000 });
        this.created_at = new Date();
        this.updated_at = new Date();
        this.product_id = random.number({ min: 1, max: 1000 });
        this.parent_item_id = random.number({ min: 1, max: 1000 });
        this.sku = 'sku';
        this.name = 'Product Name';
        this.description = 'description';
        this.weight = random.number({ min: 1, max: 1000 });
        this.qty = random.number({ min: 1, max: 100 });
        this.price = random.number({ min: 1, max: 1000 });
        this.discount_percent = random.number({ min: 1, max: 10 });
        this.discount_amount = random.number({ min: 1, max: 100 });
        this.tax_percent = random.number({ min: 1, max: 10 });
        this.tax_amount = random.number({ min: 1, max: 10 });
        this.row_total = random.number({ min: 1, max: 1000 });
        this.row_total_with_discount = random.number({ min: 1, max: 1000 });
        this.row_weight = random.number({ min: 1, max: 100 });
        this.tax_before_discount = random.number({ min: 1, max: 100 });
    }
}
if (false) {
    /** @type {?} */
    MockOrderItem.prototype.item_id;
    /** @type {?} */
    MockOrderItem.prototype.image;
    /** @type {?} */
    MockOrderItem.prototype.quote_id;
    /** @type {?} */
    MockOrderItem.prototype.created_at;
    /** @type {?} */
    MockOrderItem.prototype.updated_at;
    /** @type {?} */
    MockOrderItem.prototype.product_id;
    /** @type {?} */
    MockOrderItem.prototype.parent_item_id;
    /** @type {?} */
    MockOrderItem.prototype.sku;
    /** @type {?} */
    MockOrderItem.prototype.name;
    /** @type {?} */
    MockOrderItem.prototype.description;
    /** @type {?} */
    MockOrderItem.prototype.weight;
    /** @type {?} */
    MockOrderItem.prototype.qty;
    /** @type {?} */
    MockOrderItem.prototype.price;
    /** @type {?} */
    MockOrderItem.prototype.discount_percent;
    /** @type {?} */
    MockOrderItem.prototype.discount_amount;
    /** @type {?} */
    MockOrderItem.prototype.tax_percent;
    /** @type {?} */
    MockOrderItem.prototype.tax_amount;
    /** @type {?} */
    MockOrderItem.prototype.row_total;
    /** @type {?} */
    MockOrderItem.prototype.row_total_with_discount;
    /** @type {?} */
    MockOrderItem.prototype.row_weight;
    /** @type {?} */
    MockOrderItem.prototype.tax_before_discount;
}
/**
 * @deprecated
 */
class DaffOrderItemFactory extends DaffModelFactory {
    constructor() {
        super(MockOrderItem);
    }
}
DaffOrderItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderItemFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderItemFactory_Factory() { return new DaffOrderItemFactory(); }, token: DaffOrderItemFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated
 */
class MockOrderPayment {
    constructor() {
        this.payment_id = random.number({ min: 1, max: 1000 });
        this.quote_id = random.number({ min: 1, max: 1000 });
        this.created_at = new Date();
        this.updated_at = new Date();
        this.method = 'card';
        this.cc_type = 'visa';
        this.cc_number_enc = random.number({ min: 1000, max: 9999 }).toString();
        this.cc_last4 = random.number({ min: 1000, max: 9999 }).toString();
        this.cc_cid_enc = random.number({ min: 1, max: 1000 }).toString();
        this.cc_owner = 'owner';
        this.cc_exp_month = 'month';
        this.cc_exp_year = 'year';
        this.cc_ss_owner = 'owner';
        this.cc_ss_start_month = 'start month';
        this.cc_ss_start_year = 'start year';
        this.po_number = 'po';
        this.cc_ss_issue = 'issue';
    }
}
if (false) {
    /** @type {?} */
    MockOrderPayment.prototype.payment_id;
    /** @type {?} */
    MockOrderPayment.prototype.quote_id;
    /** @type {?} */
    MockOrderPayment.prototype.created_at;
    /** @type {?} */
    MockOrderPayment.prototype.updated_at;
    /** @type {?} */
    MockOrderPayment.prototype.method;
    /** @type {?} */
    MockOrderPayment.prototype.cc_type;
    /** @type {?} */
    MockOrderPayment.prototype.cc_number_enc;
    /** @type {?} */
    MockOrderPayment.prototype.cc_last4;
    /** @type {?} */
    MockOrderPayment.prototype.cc_cid_enc;
    /** @type {?} */
    MockOrderPayment.prototype.cc_owner;
    /** @type {?} */
    MockOrderPayment.prototype.cc_exp_month;
    /** @type {?} */
    MockOrderPayment.prototype.cc_exp_year;
    /** @type {?} */
    MockOrderPayment.prototype.cc_ss_owner;
    /** @type {?} */
    MockOrderPayment.prototype.cc_ss_start_month;
    /** @type {?} */
    MockOrderPayment.prototype.cc_ss_start_year;
    /** @type {?} */
    MockOrderPayment.prototype.po_number;
    /** @type {?} */
    MockOrderPayment.prototype.cc_ss_issue;
}
/**
 * @deprecated
 */
class DaffOrderPaymentFactory extends DaffModelFactory {
    constructor() {
        super(MockOrderPayment);
    }
}
DaffOrderPaymentFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderPaymentFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderPaymentFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderPaymentFactory_Factory() { return new DaffOrderPaymentFactory(); }, token: DaffOrderPaymentFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated
 */
class MockOrderShippingRate {
    constructor() {
        this.rate_id = random.number({ min: 1, max: 1000 });
        this.address_id = random.number({ min: 1, max: 1000 });
        this.created_at = new Date();
        this.updated_at = new Date();
        this.carrier = 'Birds Inc.';
        this.carrier_title = 'laden';
        this.code = 'code';
        this.method = 'swallow';
        this.method_description = 'efficient';
        this.price = random.number({ min: 1, max: 1000 });
        this.error_message = 'error message';
        this.method_title = 'laden';
    }
}
if (false) {
    /** @type {?} */
    MockOrderShippingRate.prototype.rate_id;
    /** @type {?} */
    MockOrderShippingRate.prototype.address_id;
    /** @type {?} */
    MockOrderShippingRate.prototype.created_at;
    /** @type {?} */
    MockOrderShippingRate.prototype.updated_at;
    /** @type {?} */
    MockOrderShippingRate.prototype.carrier;
    /** @type {?} */
    MockOrderShippingRate.prototype.carrier_title;
    /** @type {?} */
    MockOrderShippingRate.prototype.code;
    /** @type {?} */
    MockOrderShippingRate.prototype.method;
    /** @type {?} */
    MockOrderShippingRate.prototype.method_description;
    /** @type {?} */
    MockOrderShippingRate.prototype.price;
    /** @type {?} */
    MockOrderShippingRate.prototype.error_message;
    /** @type {?} */
    MockOrderShippingRate.prototype.method_title;
}
/**
 * @deprecated
 */
class DaffOrderShippingRateFactory extends DaffModelFactory {
    constructor() {
        super(MockOrderShippingRate);
    }
}
DaffOrderShippingRateFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderShippingRateFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderShippingRateFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderShippingRateFactory_Factory() { return new DaffOrderShippingRateFactory(); }, token: DaffOrderShippingRateFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated
 */
class MockOrder {
    constructor() {
        this.id = random.number({ min: 1, max: 1000 });
        this.created_at = new Date();
        this.updated_at = new Date();
        this.store_to_base_rate = random.number({ min: 1, max: 1000 });
        this.grand_total = random.number({ min: 1, max: 1000 });
        this.checkout_method = 'card';
        this.customer_id = random.number({ min: 1, max: 1000 });
        this.coupon_code = random.number({ min: 1, max: 100000 }).toString();
        this.subtotal = random.number({ min: 1, max: 1000 });
        this.subtotal_with_discount = random.number({ min: 1, max: 1000 });
        this.items = [];
        this.addresses = [];
        this.payment = null;
    }
}
if (false) {
    /** @type {?} */
    MockOrder.prototype.id;
    /** @type {?} */
    MockOrder.prototype.created_at;
    /** @type {?} */
    MockOrder.prototype.updated_at;
    /** @type {?} */
    MockOrder.prototype.store_to_base_rate;
    /** @type {?} */
    MockOrder.prototype.grand_total;
    /** @type {?} */
    MockOrder.prototype.checkout_method;
    /** @type {?} */
    MockOrder.prototype.customer_id;
    /** @type {?} */
    MockOrder.prototype.coupon_code;
    /** @type {?} */
    MockOrder.prototype.subtotal;
    /** @type {?} */
    MockOrder.prototype.subtotal_with_discount;
    /** @type {?} */
    MockOrder.prototype.items;
    /** @type {?} */
    MockOrder.prototype.addresses;
    /** @type {?} */
    MockOrder.prototype.payment;
}
;
/**
 * @deprecated
 */
class DaffOrderFactory extends DaffModelFactory {
    constructor() {
        super(MockOrder);
    }
}
DaffOrderFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderFactory_Factory() { return new DaffOrderFactory(); }, token: DaffOrderFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockPaymentInfo {
    constructor() {
        this.name = 'name';
        this.cardnumber = 1234123412341234;
        this.month = 10;
        this.year = 2021;
        this.securitycode = 123;
    }
}
if (false) {
    /** @type {?} */
    MockPaymentInfo.prototype.name;
    /** @type {?} */
    MockPaymentInfo.prototype.cardnumber;
    /** @type {?} */
    MockPaymentInfo.prototype.month;
    /** @type {?} */
    MockPaymentInfo.prototype.year;
    /** @type {?} */
    MockPaymentInfo.prototype.securitycode;
}
class DaffPaymentFactory extends DaffModelFactory {
    constructor() {
        super(MockPaymentInfo);
    }
}
DaffPaymentFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffPaymentFactory.ctorParameters = () => [];
/** @nocollapse */ DaffPaymentFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffPaymentFactory_Factory() { return new DaffPaymentFactory(); }, token: DaffPaymentFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockShippingOption {
    constructor() {
        this.id = random.number().toString();
        this.text = company.companyName() + ' ' + commerce.productAdjective() + ' Shipping';
    }
}
if (false) {
    /** @type {?} */
    MockShippingOption.prototype.id;
    /** @type {?} */
    MockShippingOption.prototype.text;
}
class DaffShippingOptionFactory extends DaffModelFactory {
    constructor() {
        super(MockShippingOption);
    }
}
DaffShippingOptionFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffShippingOptionFactory.ctorParameters = () => [];
/** @nocollapse */ DaffShippingOptionFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffShippingOptionFactory_Factory() { return new DaffShippingOptionFactory(); }, token: DaffShippingOptionFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockShippingRate {
    constructor() {
        this.rate_id = random.number({ min: 1, max: 1000 });
        this.price = random.number({ min: 1, max: 1000 });
        this.carrier = 'Birds Inc.';
        this.code = 'code';
        this.method = 'swallow';
        this.method_description = 'efficient';
        this.method_title = 'laden';
    }
}
if (false) {
    /** @type {?} */
    MockShippingRate.prototype.rate_id;
    /** @type {?} */
    MockShippingRate.prototype.price;
    /** @type {?} */
    MockShippingRate.prototype.carrier;
    /** @type {?} */
    MockShippingRate.prototype.code;
    /** @type {?} */
    MockShippingRate.prototype.method;
    /** @type {?} */
    MockShippingRate.prototype.method_description;
    /** @type {?} */
    MockShippingRate.prototype.method_title;
}
class DaffShippingRateFactory extends DaffModelFactory {
    constructor() {
        super(MockShippingRate);
    }
}
DaffShippingRateFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffShippingRateFactory.ctorParameters = () => [];
/** @nocollapse */ DaffShippingRateFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffShippingRateFactory_Factory() { return new DaffShippingRateFactory(); }, token: DaffShippingRateFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffTestingCheckoutService {
    /**
     * @param {?} orderFactory
     * @param {?} orderItemFactory
     */
    constructor(orderFactory, orderItemFactory) {
        this.orderFactory = orderFactory;
        this.orderItemFactory = orderItemFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    placeOrder(cartId) {
        return of(this.orderFactory.create({ items: [this.orderItemFactory.createMany(2)] }));
    }
}
DaffTestingCheckoutService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffTestingCheckoutService.ctorParameters = () => [
    { type: DaffOrderFactory },
    { type: DaffOrderItemFactory }
];
/** @nocollapse */ DaffTestingCheckoutService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCheckoutService_Factory() { return new DaffTestingCheckoutService(ɵɵinject(DaffOrderFactory), ɵɵinject(DaffOrderItemFactory)); }, token: DaffTestingCheckoutService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingCheckoutService.prototype.orderFactory;
    /**
     * @type {?}
     * @private
     */
    DaffTestingCheckoutService.prototype.orderItemFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffInMemoryCheckoutService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/checkout';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    placeOrder(cartId) {
        return this.http.post(this.url + '/placeOrder', { cartId });
    }
}
DaffInMemoryCheckoutService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryCheckoutService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryCheckoutService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCheckoutService_Factory() { return new DaffInMemoryCheckoutService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCheckoutService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryCheckoutService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryCheckoutService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffCheckoutInMemoryDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffCheckoutInMemoryDriverModule,
            providers: [
                {
                    provide: DaffCheckoutDriver,
                    useExisting: DaffInMemoryCheckoutService
                }
            ]
        };
    }
}
DaffCheckoutInMemoryDriverModule.decorators = [
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
class DaffCheckoutTestingDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffCheckoutTestingDriverModule,
            providers: [
                {
                    provide: DaffCheckoutDriver,
                    useExisting: DaffTestingCheckoutService
                }
            ]
        };
    }
}
DaffCheckoutTestingDriverModule.decorators = [
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
class DaffInMemoryBackendCheckoutService {
    /**
     * @param {?} orderFactory
     * @param {?} orderItemFactory
     * @param {?} productImageFactory
     */
    constructor(orderFactory, orderItemFactory, productImageFactory) {
        this.orderFactory = orderFactory;
        this.orderItemFactory = orderItemFactory;
        this.productImageFactory = productImageFactory;
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
            if (reqInfo.id === 'placeOrder') {
                //should make a service call to clear cart here.
                // this.driver.cartService.clear(reqInfo.req.body.orderId).subscribe();
                this.populateOrder();
            }
            return {
                body: this.order,
                status: STATUS.OK
            };
        }));
    }
    /**
     * @return {?}
     */
    createDb() {
        return {
            order: null
        };
    }
    /**
     * @private
     * @return {?}
     */
    populateOrder() {
        this.order = this.orderFactory.create({
            items: this.orderItemFactory.createMany(2, {
                image: this.productImageFactory.create()
            })
        });
    }
}
DaffInMemoryBackendCheckoutService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryBackendCheckoutService.ctorParameters = () => [
    { type: DaffOrderFactory },
    { type: DaffOrderItemFactory },
    { type: DaffProductImageFactory }
];
/** @nocollapse */ DaffInMemoryBackendCheckoutService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCheckoutService_Factory() { return new DaffInMemoryBackendCheckoutService(ɵɵinject(DaffOrderFactory), ɵɵinject(DaffOrderItemFactory), ɵɵinject(DaffProductImageFactory)); }, token: DaffInMemoryBackendCheckoutService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCheckoutService.prototype.order;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCheckoutService.prototype.orderFactory;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCheckoutService.prototype.orderItemFactory;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCheckoutService.prototype.productImageFactory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffCheckoutInMemoryDriverModule, DaffCheckoutTestingDriverModule, DaffInMemoryBackendCheckoutService, DaffInMemoryCheckoutService, DaffOrderAddressFactory, DaffOrderFactory, DaffOrderItemFactory, DaffOrderPaymentFactory, DaffOrderShippingRateFactory, DaffPaymentFactory, DaffShippingOptionFactory, DaffShippingRateFactory, DaffTestingCheckoutService };
//# sourceMappingURL=daffodil-checkout-testing.js.map
