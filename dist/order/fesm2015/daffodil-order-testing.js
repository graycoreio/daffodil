import { Injectable, ɵɵdefineInjectable } from '@angular/core';
import { random, date, image, internet } from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MockDaffPersonalAddress } from '@daffodil/geography/testing';
import { DaffOrderItemType, DaffOrderTotalTypeEnum } from '@daffodil/order';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockOrderAddress extends MockDaffPersonalAddress {
    constructor() {
        super(...arguments);
        this.order_id = random.number({ min: 1, max: 1000 });
    }
}
if (false) {
    /** @type {?} */
    MockOrderAddress.prototype.order_id;
}
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
class MockOrderCoupon {
    constructor() {
        this.code = random.alphaNumeric(10);
    }
}
if (false) {
    /** @type {?} */
    MockOrderCoupon.prototype.code;
}
;
class DaffOrderCouponFactory extends DaffModelFactory {
    constructor() {
        super(MockOrderCoupon);
    }
}
DaffOrderCouponFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderCouponFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderCouponFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderCouponFactory_Factory() { return new DaffOrderCouponFactory(); }, token: DaffOrderCouponFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockOrderInvoice {
    constructor() {
        this.items = [];
        this.totals = [];
        this.billing_address = null;
        this.shipping_address = null;
        this.payment = null;
        this.shipping_method = null;
    }
}
if (false) {
    /** @type {?} */
    MockOrderInvoice.prototype.items;
    /** @type {?} */
    MockOrderInvoice.prototype.totals;
    /** @type {?} */
    MockOrderInvoice.prototype.billing_address;
    /** @type {?} */
    MockOrderInvoice.prototype.shipping_address;
    /** @type {?} */
    MockOrderInvoice.prototype.payment;
    /** @type {?} */
    MockOrderInvoice.prototype.shipping_method;
}
;
class DaffOrderInvoiceFactory extends DaffModelFactory {
    constructor() {
        super(MockOrderInvoice);
    }
}
DaffOrderInvoiceFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderInvoiceFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderInvoiceFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderInvoiceFactory_Factory() { return new DaffOrderInvoiceFactory(); }, token: DaffOrderInvoiceFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockOrderPayment {
    constructor() {
        this.payment_id = random.number({ min: 1, max: 1000 });
        this.order_id = random.number({ min: 1, max: 1000 });
        this.created_at = date.past().toString();
        this.updated_at = date.past().toString();
        this.method = 'card';
        this.cc_type = 'visa';
        this.cc_last4 = random.number({ min: 1000, max: 9999 }).toString();
        this.cc_owner = 'owner';
        this.cc_exp_month = 'month';
        this.cc_exp_year = 'year';
    }
}
if (false) {
    /** @type {?} */
    MockOrderPayment.prototype.payment_id;
    /** @type {?} */
    MockOrderPayment.prototype.order_id;
    /** @type {?} */
    MockOrderPayment.prototype.created_at;
    /** @type {?} */
    MockOrderPayment.prototype.updated_at;
    /** @type {?} */
    MockOrderPayment.prototype.method;
    /** @type {?} */
    MockOrderPayment.prototype.cc_type;
    /** @type {?} */
    MockOrderPayment.prototype.cc_last4;
    /** @type {?} */
    MockOrderPayment.prototype.cc_owner;
    /** @type {?} */
    MockOrderPayment.prototype.cc_exp_month;
    /** @type {?} */
    MockOrderPayment.prototype.cc_exp_year;
}
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
class MockOrderItem {
    constructor() {
        this.item_id = random.number({ min: 1, max: 1000 });
        this.image = {
            url: image.imageUrl(),
            id: String(random.number({ min: 1, max: 1000 })),
            label: random.word()
        };
        this.order_id = random.number({ min: 1, max: 1000 });
        this.qty_ordered = random.number({ min: 1, max: 1000 });
        this.qty_canceled = random.number({ min: 1, max: 1000 });
        this.qty_fulfilled = random.number({ min: 1, max: 1000 });
        this.created_at = date.past().toString();
        this.updated_at = date.past().toString();
        this.product_id = random.number({ min: 1, max: 1000 });
        this.parent_item_id = random.number({ min: 1, max: 1000 });
        this.sku = random.alphaNumeric(20);
        this.name = random.word();
        this.weight = random.number({ min: 1, max: 1000 });
        this.qty = random.number({ min: 1, max: 10 });
        this.price = random.number({ min: 1, max: 1000 });
        this.discount_amount = random.number({ min: 1, max: this.price });
        this.discount_percent = Math.floor(this.discount_amount / this.price * 100);
        this.tax_percent = random.number({ min: 1, max: 10 });
        this.tax_amount = random.number({ min: 1, max: 10 });
        this.row_total = this.price * this.qty;
        this.row_total_with_discount = (this.price - this.discount_amount) * this.qty;
        this.row_weight = random.number({ min: 1, max: 100 });
        this.tax_before_discount = random.number({ min: 1, max: 100 });
        this.type = DaffOrderItemType.Simple;
    }
}
if (false) {
    /** @type {?} */
    MockOrderItem.prototype.item_id;
    /** @type {?} */
    MockOrderItem.prototype.image;
    /** @type {?} */
    MockOrderItem.prototype.order_id;
    /** @type {?} */
    MockOrderItem.prototype.qty_ordered;
    /** @type {?} */
    MockOrderItem.prototype.qty_canceled;
    /** @type {?} */
    MockOrderItem.prototype.qty_fulfilled;
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
    MockOrderItem.prototype.weight;
    /** @type {?} */
    MockOrderItem.prototype.qty;
    /** @type {?} */
    MockOrderItem.prototype.price;
    /** @type {?} */
    MockOrderItem.prototype.discount_amount;
    /** @type {?} */
    MockOrderItem.prototype.discount_percent;
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
    /** @type {?} */
    MockOrderItem.prototype.type;
}
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
class MockCompositeOrderItem extends MockOrderItem {
    constructor() {
        super(...arguments);
        this.type = DaffOrderItemType.Composite;
        this.options = [
            {
                option_label: random.word(),
                value_label: random.word()
            },
            {
                option_label: random.word(),
                value_label: random.word()
            }
        ];
    }
}
if (false) {
    /** @type {?} */
    MockCompositeOrderItem.prototype.type;
    /** @type {?} */
    MockCompositeOrderItem.prototype.options;
}
class DaffCompositeOrderItemFactory extends DaffModelFactory {
    constructor() {
        super(MockCompositeOrderItem);
    }
}
DaffCompositeOrderItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCompositeOrderItemFactory.ctorParameters = () => [];
/** @nocollapse */ DaffCompositeOrderItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCompositeOrderItemFactory_Factory() { return new DaffCompositeOrderItemFactory(); }, token: DaffCompositeOrderItemFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockConfigurableOrderItem extends MockOrderItem {
    constructor() {
        super(...arguments);
        this.type = DaffOrderItemType.Configurable;
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
    MockConfigurableOrderItem.prototype.type;
    /** @type {?} */
    MockConfigurableOrderItem.prototype.attributes;
}
class DaffConfigurableOrderItemFactory extends DaffModelFactory {
    constructor() {
        super(MockConfigurableOrderItem);
    }
}
DaffConfigurableOrderItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffConfigurableOrderItemFactory.ctorParameters = () => [];
/** @nocollapse */ DaffConfigurableOrderItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffConfigurableOrderItemFactory_Factory() { return new DaffConfigurableOrderItemFactory(); }, token: DaffConfigurableOrderItemFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockOrderShipmentItem {
    constructor() {
        this.item = null;
        this.qty = random.number({ min: 1, max: 100 });
    }
}
if (false) {
    /** @type {?} */
    MockOrderShipmentItem.prototype.item;
    /** @type {?} */
    MockOrderShipmentItem.prototype.qty;
}
;
class DaffOrderShipmentItemFactory extends DaffModelFactory {
    constructor() {
        super(MockOrderShipmentItem);
    }
}
DaffOrderShipmentItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderShipmentItemFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderShipmentItemFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderShipmentItemFactory_Factory() { return new DaffOrderShipmentItemFactory(); }, token: DaffOrderShipmentItemFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockOrderShipmentTracking {
    constructor() {
        this.tracking_number = random.alphaNumeric(16);
        this.tracking_url = internet.url();
        this.carrier = random.word();
        this.carrier_logo = internet.url();
        this.title = random.word();
    }
}
if (false) {
    /** @type {?} */
    MockOrderShipmentTracking.prototype.tracking_number;
    /** @type {?} */
    MockOrderShipmentTracking.prototype.tracking_url;
    /** @type {?} */
    MockOrderShipmentTracking.prototype.carrier;
    /** @type {?} */
    MockOrderShipmentTracking.prototype.carrier_logo;
    /** @type {?} */
    MockOrderShipmentTracking.prototype.title;
}
;
class DaffOrderShipmentTrackingFactory extends DaffModelFactory {
    constructor() {
        super(MockOrderShipmentTracking);
    }
}
DaffOrderShipmentTrackingFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderShipmentTrackingFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderShipmentTrackingFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderShipmentTrackingFactory_Factory() { return new DaffOrderShipmentTrackingFactory(); }, token: DaffOrderShipmentTrackingFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockOrderShipment {
    constructor() {
        this.tracking = [];
        this.items = [];
        this.carrier = random.word();
        this.carrier_title = random.word();
        this.code = random.word();
        this.method = random.word();
        this.method_description = random.word();
    }
}
if (false) {
    /** @type {?} */
    MockOrderShipment.prototype.tracking;
    /** @type {?} */
    MockOrderShipment.prototype.items;
    /** @type {?} */
    MockOrderShipment.prototype.carrier;
    /** @type {?} */
    MockOrderShipment.prototype.carrier_title;
    /** @type {?} */
    MockOrderShipment.prototype.code;
    /** @type {?} */
    MockOrderShipment.prototype.method;
    /** @type {?} */
    MockOrderShipment.prototype.method_description;
}
;
class DaffOrderShipmentFactory extends DaffModelFactory {
    constructor() {
        super(MockOrderShipment);
    }
}
DaffOrderShipmentFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderShipmentFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderShipmentFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderShipmentFactory_Factory() { return new DaffOrderShipmentFactory(); }, token: DaffOrderShipmentFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockOrderShippingMethod {
    constructor() {
        this.rate_id = random.number({ min: 1, max: 1000 });
        this.address_id = random.number({ min: 1, max: 1000 });
        this.order_id = random.number({ min: 1, max: 1000 });
        this.created_at = date.past().toString();
        this.updated_at = date.past().toString();
        this.carrier = random.word();
        this.carrier_title = random.word();
        this.code = random.word();
        this.method = random.word();
        this.method_description = random.word();
        this.price = random.number({ min: 1, max: 1000 });
        this.error_message = random.word();
        this.method_title = random.word();
    }
}
if (false) {
    /** @type {?} */
    MockOrderShippingMethod.prototype.rate_id;
    /** @type {?} */
    MockOrderShippingMethod.prototype.address_id;
    /** @type {?} */
    MockOrderShippingMethod.prototype.order_id;
    /** @type {?} */
    MockOrderShippingMethod.prototype.created_at;
    /** @type {?} */
    MockOrderShippingMethod.prototype.updated_at;
    /** @type {?} */
    MockOrderShippingMethod.prototype.carrier;
    /** @type {?} */
    MockOrderShippingMethod.prototype.carrier_title;
    /** @type {?} */
    MockOrderShippingMethod.prototype.code;
    /** @type {?} */
    MockOrderShippingMethod.prototype.method;
    /** @type {?} */
    MockOrderShippingMethod.prototype.method_description;
    /** @type {?} */
    MockOrderShippingMethod.prototype.price;
    /** @type {?} */
    MockOrderShippingMethod.prototype.error_message;
    /** @type {?} */
    MockOrderShippingMethod.prototype.method_title;
}
class DaffOrderShippingMethodFactory extends DaffModelFactory {
    constructor() {
        super(MockOrderShippingMethod);
    }
}
DaffOrderShippingMethodFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderShippingMethodFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderShippingMethodFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderShippingMethodFactory_Factory() { return new DaffOrderShippingMethodFactory(); }, token: DaffOrderShippingMethodFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockOrderTotal {
    constructor() {
        this.label = random.word();
        this.value = random.number({ min: 1, max: 100 });
        this.sort_order = random.number({ min: 1, max: 100 });
        this.type = DaffOrderTotalTypeEnum.GrandTotal;
    }
}
if (false) {
    /** @type {?} */
    MockOrderTotal.prototype.label;
    /** @type {?} */
    MockOrderTotal.prototype.value;
    /** @type {?} */
    MockOrderTotal.prototype.sort_order;
    /** @type {?} */
    MockOrderTotal.prototype.type;
}
;
class DaffOrderTotalFactory extends DaffModelFactory {
    constructor() {
        super(MockOrderTotal);
    }
}
DaffOrderTotalFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderTotalFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderTotalFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderTotalFactory_Factory() { return new DaffOrderTotalFactory(); }, token: DaffOrderTotalFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockOrder {
    constructor() {
        this.id = random.number({ min: 1, max: 1000 });
        this.customer_id = random.number({ min: 1, max: 1000 });
        this.created_at = date.past().toString();
        this.updated_at = date.past().toString();
        this.status = random.word();
        this.totals = [];
        this.applied_codes = [];
        this.items = [];
        this.billing_addresses = [];
        this.shipping_addresses = [];
        this.shipments = [];
        this.payment = null;
        this.invoices = [];
        this.credits = [];
    }
}
if (false) {
    /** @type {?} */
    MockOrder.prototype.id;
    /** @type {?} */
    MockOrder.prototype.customer_id;
    /** @type {?} */
    MockOrder.prototype.created_at;
    /** @type {?} */
    MockOrder.prototype.updated_at;
    /** @type {?} */
    MockOrder.prototype.status;
    /** @type {?} */
    MockOrder.prototype.totals;
    /** @type {?} */
    MockOrder.prototype.applied_codes;
    /** @type {?} */
    MockOrder.prototype.items;
    /** @type {?} */
    MockOrder.prototype.billing_addresses;
    /** @type {?} */
    MockOrder.prototype.shipping_addresses;
    /** @type {?} */
    MockOrder.prototype.shipments;
    /** @type {?} */
    MockOrder.prototype.payment;
    /** @type {?} */
    MockOrder.prototype.invoices;
    /** @type {?} */
    MockOrder.prototype.credits;
}
;
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A helper function to verify that a model is a Order.
 * @param {?} order
 * @return {?}
 */
function isOrder(order) {
    return !!order.id
        && !!order.customer_id
        && !!order.created_at
        && !!order.updated_at
        && !!order.status
        && !!order.applied_codes
        && !!order.totals;
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

export { DaffCompositeOrderItemFactory, DaffConfigurableOrderItemFactory, DaffOrderAddressFactory, DaffOrderCouponFactory, DaffOrderFactory, DaffOrderInvoiceFactory, DaffOrderItemFactory, DaffOrderPaymentFactory, DaffOrderShipmentFactory, DaffOrderShipmentItemFactory, DaffOrderShipmentTrackingFactory, DaffOrderShippingMethodFactory, DaffOrderTotalFactory, isOrder };
//# sourceMappingURL=daffodil-order-testing.js.map
