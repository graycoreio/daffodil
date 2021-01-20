import { __extends } from 'tslib';
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
var /**
 * @deprecated
 */
MockOrderAddress = /** @class */ (function () {
    function MockOrderAddress() {
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
    return MockOrderAddress;
}());
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
var DaffOrderAddressFactory = /** @class */ (function (_super) {
    __extends(DaffOrderAddressFactory, _super);
    function DaffOrderAddressFactory() {
        return _super.call(this, MockOrderAddress) || this;
    }
    DaffOrderAddressFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderAddressFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderAddressFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderAddressFactory_Factory() { return new DaffOrderAddressFactory(); }, token: DaffOrderAddressFactory, providedIn: "root" });
    return DaffOrderAddressFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated
 */
var /**
 * @deprecated
 */
MockOrderItem = /** @class */ (function () {
    function MockOrderItem() {
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
    return MockOrderItem;
}());
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
var DaffOrderItemFactory = /** @class */ (function (_super) {
    __extends(DaffOrderItemFactory, _super);
    function DaffOrderItemFactory() {
        return _super.call(this, MockOrderItem) || this;
    }
    DaffOrderItemFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderItemFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderItemFactory_Factory() { return new DaffOrderItemFactory(); }, token: DaffOrderItemFactory, providedIn: "root" });
    return DaffOrderItemFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated
 */
var /**
 * @deprecated
 */
MockOrderPayment = /** @class */ (function () {
    function MockOrderPayment() {
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
    return MockOrderPayment;
}());
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
var DaffOrderPaymentFactory = /** @class */ (function (_super) {
    __extends(DaffOrderPaymentFactory, _super);
    function DaffOrderPaymentFactory() {
        return _super.call(this, MockOrderPayment) || this;
    }
    DaffOrderPaymentFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderPaymentFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderPaymentFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderPaymentFactory_Factory() { return new DaffOrderPaymentFactory(); }, token: DaffOrderPaymentFactory, providedIn: "root" });
    return DaffOrderPaymentFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated
 */
var /**
 * @deprecated
 */
MockOrderShippingRate = /** @class */ (function () {
    function MockOrderShippingRate() {
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
    return MockOrderShippingRate;
}());
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
var DaffOrderShippingRateFactory = /** @class */ (function (_super) {
    __extends(DaffOrderShippingRateFactory, _super);
    function DaffOrderShippingRateFactory() {
        return _super.call(this, MockOrderShippingRate) || this;
    }
    DaffOrderShippingRateFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderShippingRateFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderShippingRateFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderShippingRateFactory_Factory() { return new DaffOrderShippingRateFactory(); }, token: DaffOrderShippingRateFactory, providedIn: "root" });
    return DaffOrderShippingRateFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated
 */
var /**
 * @deprecated
 */
MockOrder = /** @class */ (function () {
    function MockOrder() {
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
    return MockOrder;
}());
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
var DaffOrderFactory = /** @class */ (function (_super) {
    __extends(DaffOrderFactory, _super);
    function DaffOrderFactory() {
        return _super.call(this, MockOrder) || this;
    }
    DaffOrderFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffOrderFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderFactory_Factory() { return new DaffOrderFactory(); }, token: DaffOrderFactory, providedIn: "root" });
    return DaffOrderFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockPaymentInfo = /** @class */ (function () {
    function MockPaymentInfo() {
        this.name = 'name';
        this.cardnumber = 1234123412341234;
        this.month = 10;
        this.year = 2021;
        this.securitycode = 123;
    }
    return MockPaymentInfo;
}());
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
var DaffPaymentFactory = /** @class */ (function (_super) {
    __extends(DaffPaymentFactory, _super);
    function DaffPaymentFactory() {
        return _super.call(this, MockPaymentInfo) || this;
    }
    DaffPaymentFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffPaymentFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffPaymentFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffPaymentFactory_Factory() { return new DaffPaymentFactory(); }, token: DaffPaymentFactory, providedIn: "root" });
    return DaffPaymentFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockShippingOption = /** @class */ (function () {
    function MockShippingOption() {
        this.id = random.number().toString();
        this.text = company.companyName() + ' ' + commerce.productAdjective() + ' Shipping';
    }
    return MockShippingOption;
}());
if (false) {
    /** @type {?} */
    MockShippingOption.prototype.id;
    /** @type {?} */
    MockShippingOption.prototype.text;
}
var DaffShippingOptionFactory = /** @class */ (function (_super) {
    __extends(DaffShippingOptionFactory, _super);
    function DaffShippingOptionFactory() {
        return _super.call(this, MockShippingOption) || this;
    }
    DaffShippingOptionFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffShippingOptionFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffShippingOptionFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffShippingOptionFactory_Factory() { return new DaffShippingOptionFactory(); }, token: DaffShippingOptionFactory, providedIn: "root" });
    return DaffShippingOptionFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockShippingRate = /** @class */ (function () {
    function MockShippingRate() {
        this.rate_id = random.number({ min: 1, max: 1000 });
        this.price = random.number({ min: 1, max: 1000 });
        this.carrier = 'Birds Inc.';
        this.code = 'code';
        this.method = 'swallow';
        this.method_description = 'efficient';
        this.method_title = 'laden';
    }
    return MockShippingRate;
}());
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
var DaffShippingRateFactory = /** @class */ (function (_super) {
    __extends(DaffShippingRateFactory, _super);
    function DaffShippingRateFactory() {
        return _super.call(this, MockShippingRate) || this;
    }
    DaffShippingRateFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffShippingRateFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffShippingRateFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffShippingRateFactory_Factory() { return new DaffShippingRateFactory(); }, token: DaffShippingRateFactory, providedIn: "root" });
    return DaffShippingRateFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffTestingCheckoutService = /** @class */ (function () {
    function DaffTestingCheckoutService(orderFactory, orderItemFactory) {
        this.orderFactory = orderFactory;
        this.orderItemFactory = orderItemFactory;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffTestingCheckoutService.prototype.placeOrder = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return of(this.orderFactory.create({ items: [this.orderItemFactory.createMany(2)] }));
    };
    DaffTestingCheckoutService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingCheckoutService.ctorParameters = function () { return [
        { type: DaffOrderFactory },
        { type: DaffOrderItemFactory }
    ]; };
    /** @nocollapse */ DaffTestingCheckoutService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingCheckoutService_Factory() { return new DaffTestingCheckoutService(ɵɵinject(DaffOrderFactory), ɵɵinject(DaffOrderItemFactory)); }, token: DaffTestingCheckoutService, providedIn: "root" });
    return DaffTestingCheckoutService;
}());
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
var DaffInMemoryCheckoutService = /** @class */ (function () {
    function DaffInMemoryCheckoutService(http) {
        this.http = http;
        this.url = '/api/checkout';
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffInMemoryCheckoutService.prototype.placeOrder = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.http.post(this.url + '/placeOrder', { cartId: cartId });
    };
    DaffInMemoryCheckoutService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryCheckoutService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DaffInMemoryCheckoutService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryCheckoutService_Factory() { return new DaffInMemoryCheckoutService(ɵɵinject(HttpClient)); }, token: DaffInMemoryCheckoutService, providedIn: "root" });
    return DaffInMemoryCheckoutService;
}());
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
var DaffCheckoutInMemoryDriverModule = /** @class */ (function () {
    function DaffCheckoutInMemoryDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffCheckoutInMemoryDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffCheckoutInMemoryDriverModule,
            providers: [
                {
                    provide: DaffCheckoutDriver,
                    useExisting: DaffInMemoryCheckoutService
                }
            ]
        };
    };
    DaffCheckoutInMemoryDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffCheckoutInMemoryDriverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffCheckoutTestingDriverModule = /** @class */ (function () {
    function DaffCheckoutTestingDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffCheckoutTestingDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffCheckoutTestingDriverModule,
            providers: [
                {
                    provide: DaffCheckoutDriver,
                    useExisting: DaffTestingCheckoutService
                }
            ]
        };
    };
    DaffCheckoutTestingDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffCheckoutTestingDriverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffInMemoryBackendCheckoutService = /** @class */ (function () {
    function DaffInMemoryBackendCheckoutService(orderFactory, orderItemFactory, productImageFactory) {
        this.orderFactory = orderFactory;
        this.orderItemFactory = orderItemFactory;
        this.productImageFactory = productImageFactory;
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCheckoutService.prototype.post = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () {
            if (reqInfo.id === 'placeOrder') {
                //should make a service call to clear cart here.
                // this.driver.cartService.clear(reqInfo.req.body.orderId).subscribe();
                _this.populateOrder();
            }
            return {
                body: _this.order,
                status: STATUS.OK
            };
        }));
    };
    /**
     * @return {?}
     */
    DaffInMemoryBackendCheckoutService.prototype.createDb = /**
     * @return {?}
     */
    function () {
        return {
            order: null
        };
    };
    /**
     * @private
     * @return {?}
     */
    DaffInMemoryBackendCheckoutService.prototype.populateOrder = /**
     * @private
     * @return {?}
     */
    function () {
        this.order = this.orderFactory.create({
            items: this.orderItemFactory.createMany(2, {
                image: this.productImageFactory.create()
            })
        });
    };
    DaffInMemoryBackendCheckoutService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryBackendCheckoutService.ctorParameters = function () { return [
        { type: DaffOrderFactory },
        { type: DaffOrderItemFactory },
        { type: DaffProductImageFactory }
    ]; };
    /** @nocollapse */ DaffInMemoryBackendCheckoutService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCheckoutService_Factory() { return new DaffInMemoryBackendCheckoutService(ɵɵinject(DaffOrderFactory), ɵɵinject(DaffOrderItemFactory), ɵɵinject(DaffProductImageFactory)); }, token: DaffInMemoryBackendCheckoutService, providedIn: "root" });
    return DaffInMemoryBackendCheckoutService;
}());
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
