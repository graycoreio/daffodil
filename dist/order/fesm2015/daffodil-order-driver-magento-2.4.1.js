import { daffAdd, daffSubtract } from '@daffodil/core';
import { DaffOrderTotalTypeEnum, DaffOrderItemType } from '@daffodil/order';
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { DaffOrderInvalidAPIResponseError, DaffOrderNotFoundError, DaffOrderDriver } from '@daffodil/order/driver';
import { daffTransformMagentoError } from '@daffodil/driver/magento';
import { DaffCartNotFoundError } from '@daffodil/cart/driver';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const MagentoOrderItemType = {
    Simple: 'simple',
    Configurable: 'configurable',
    Bundle: 'bundle',
};
;
/**
 * @record
 */
function MagentoOrderItemOption() { }
if (false) {
    /** @type {?} */
    MagentoOrderItemOption.prototype.label;
    /** @type {?} */
    MagentoOrderItemOption.prototype.value;
}
;
/**
 * @record
 */
function MagentoOrderItem() { }
if (false) {
    /** @type {?} */
    MagentoOrderItem.prototype.id;
    /** @type {?} */
    MagentoOrderItem.prototype.discounts;
    /** @type {?} */
    MagentoOrderItem.prototype.product_name;
    /** @type {?} */
    MagentoOrderItem.prototype.product_sale_price;
    /** @type {?} */
    MagentoOrderItem.prototype.product_sku;
    /** @type {?} */
    MagentoOrderItem.prototype.product_type;
    /** @type {?} */
    MagentoOrderItem.prototype.product_url_key;
    /** @type {?} */
    MagentoOrderItem.prototype.quantity_canceled;
    /** @type {?} */
    MagentoOrderItem.prototype.quantity_invoiced;
    /** @type {?} */
    MagentoOrderItem.prototype.quantity_ordered;
    /** @type {?} */
    MagentoOrderItem.prototype.quantity_refunded;
    /** @type {?} */
    MagentoOrderItem.prototype.quantity_returned;
    /** @type {?} */
    MagentoOrderItem.prototype.quantity_shipped;
    /** @type {?} */
    MagentoOrderItem.prototype.selected_options;
    /** @type {?} */
    MagentoOrderItem.prototype.entered_options;
    /** @type {?} */
    MagentoOrderItem.prototype.status;
}
/**
 * @record
 */
function MagentoOrderBundleItemSelectedOption() { }
if (false) {
    /** @type {?} */
    MagentoOrderBundleItemSelectedOption.prototype.id;
    /** @type {?} */
    MagentoOrderBundleItemSelectedOption.prototype.label;
    /** @type {?} */
    MagentoOrderBundleItemSelectedOption.prototype.values;
}
;
/**
 * @record
 */
function MagentoOrderBundleItemSelectedOptionValue() { }
if (false) {
    /** @type {?} */
    MagentoOrderBundleItemSelectedOptionValue.prototype.id;
    /** @type {?} */
    MagentoOrderBundleItemSelectedOptionValue.prototype.price;
    /** @type {?} */
    MagentoOrderBundleItemSelectedOptionValue.prototype.product_name;
    /** @type {?} */
    MagentoOrderBundleItemSelectedOptionValue.prototype.product_sku;
    /** @type {?} */
    MagentoOrderBundleItemSelectedOptionValue.prototype.quantity;
}
;
/**
 * @record
 */
function MagentoOrderBundleItem() { }
if (false) {
    /** @type {?} */
    MagentoOrderBundleItem.prototype.bundle_options;
}
;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} totals
 * @return {?}
 */
function transformTotals(totals) {
    return [
        {
            label: 'Grand Total',
            type: DaffOrderTotalTypeEnum.GrandTotal,
            value: totals.grand_total.value,
            sort_order: 1
        },
        {
            label: 'Subtotal',
            type: DaffOrderTotalTypeEnum.Subtotal,
            value: totals.subtotal.value,
            sort_order: 0
        },
        {
            label: 'Shipping',
            type: DaffOrderTotalTypeEnum.Shipping,
            value: totals.total_shipping.value,
            sort_order: 2
        },
        {
            label: 'Tax',
            type: DaffOrderTotalTypeEnum.Tax,
            value: totals.total_tax.value,
            sort_order: 3
        },
        {
            label: 'Discount',
            type: DaffOrderTotalTypeEnum.Discount,
            value: totals.discounts.reduce((/**
             * @param {?} acc
             * @param {?} discount
             * @return {?}
             */
            (acc, discount) => daffAdd(acc, discount.amount.value)), 0),
            sort_order: 4
        }
    ];
}
/**
 * @param {?} discount
 * @return {?}
 */
function transformCouponDiscount(discount) {
    return {
        code: discount.label,
    };
}
/**
 * @param {?} option
 * @return {?}
 */
function transformConfigurableOption(option) {
    return {
        attribute_label: option.label,
        value_label: option.value
    };
}
/**
 * @param {?} option
 * @return {?}
 */
function transformBundleOption(option) {
    return {
        option_label: option.label,
        value_label: option.values && option.values[0] && option.values[0].product_name
    };
}
/**
 * @param {?} item
 * @return {?}
 */
function transformAdditionalItemFields(item) {
    switch (item.product_type) {
        case MagentoOrderItemType.Bundle:
            return {
                type: DaffOrderItemType.Composite,
                options: ((/** @type {?} */ (item))).bundle_options.map(transformBundleOption)
            };
        case MagentoOrderItemType.Configurable:
            return {
                type: DaffOrderItemType.Configurable,
                attributes: item.selected_options.map(transformConfigurableOption)
            };
        case MagentoOrderItemType.Simple:
            return {
                type: DaffOrderItemType.Simple
            };
        default:
            return {};
    }
}
/**
 * @param {?} item
 * @param {?} order
 * @param {?} qty
 * @return {?}
 */
function transformItem(item, order, qty) {
    /** @type {?} */
    const discount = item.discounts.reduce((/**
     * @param {?} acc
     * @param {?} d
     * @return {?}
     */
    (acc, d) => daffAdd(acc, d.amount.value)), 0);
    /** @type {?} */
    const rowTotal = qty * item.product_sale_price.value;
    /** @type {?} */
    const rowTotalWithDiscount = qty * daffSubtract(item.product_sale_price.value, discount);
    return Object.assign({ type: DaffOrderItemType.Simple, item_id: null, qty_ordered: item.quantity_ordered, qty_canceled: item.quantity_canceled, qty_fulfilled: item.quantity_shipped, qty, image: {
            url: item.product_url_key,
            id: null,
            label: null
        }, order_id: order.id, created_at: null, updated_at: null, product_id: null, parent_item_id: null, sku: item.product_sku, name: item.product_name, weight: null, price: item.product_sale_price.value, discount_percent: Math.floor(discount / item.product_sale_price.value * 100), discount_amount: discount, tax_percent: null, tax_amount: null, row_total: rowTotal, row_total_with_discount: rowTotalWithDiscount, row_weight: null, tax_before_discount: null }, transformAdditionalItemFields(item));
}
/**
 * @param {?} address
 * @param {?} order
 * @return {?}
 */
function transformAddress(address, order) {
    return {
        order_id: order.id,
        prefix: address.prefix,
        suffix: address.suffix,
        firstname: address.firstname,
        middlename: address.middlename,
        lastname: address.lastname,
        telephone: address.telephone,
        email: null,
        street: address.street[0],
        street2: address.street[1],
        city: address.city,
        region: address.region_id,
        country: address.country_code,
        postcode: address.postcode
    };
}
/**
 * @param {?} shipmentItem
 * @param {?} order
 * @return {?}
 */
function transformShipmentItem(shipmentItem, order) {
    return {
        item: transformItem(shipmentItem.order_item, order, shipmentItem.quantity_shipped),
        qty: shipmentItem.quantity_shipped
    };
}
/**
 * @param {?} tracking
 * @return {?}
 */
function transformShipmentTracking(tracking) {
    return {
        tracking_number: tracking.number,
        tracking_url: null,
        carrier: tracking.carrier,
        title: tracking.title,
        carrier_logo: null,
    };
}
/**
 * @param {?} shipment
 * @param {?} order
 * @return {?}
 */
function transformShipment(shipment, order) {
    return {
        carrier: order.carrier,
        carrier_title: null,
        code: null,
        method: order.shipping_method,
        method_description: null,
        tracking: shipment.tracking.map(transformShipmentTracking),
        items: shipment.items.map((/**
         * @param {?} item
         * @return {?}
         */
        item => transformShipmentItem(item, order)))
    };
}
/**
 * @param {?} payment
 * @param {?} order
 * @return {?}
 */
function transformPayment(payment, order) {
    /** @type {?} */
    const findAdditionalData = (/**
     * @param {?} key
     * @return {?}
     */
    key => {
        /** @type {?} */
        const index = payment.additional_data.findIndex((/**
         * @param {?} __0
         * @return {?}
         */
        ({ name }) => name === key));
        return index > -1 ? payment.additional_data[index].value : null;
    });
    return {
        payment_id: null,
        order_id: order.id,
        created_at: null,
        updated_at: null,
        method: payment.type,
        cc_type: findAdditionalData('cc_type'),
        cc_last4: findAdditionalData('cc_last4'),
        cc_owner: findAdditionalData('cc_owner'),
        cc_exp_month: findAdditionalData('cc_exp_month'),
        cc_exp_year: findAdditionalData('cc_exp_year')
    };
}
/**
 * @param {?} invoiceItem
 * @param {?} order
 * @return {?}
 */
function transformInvoiceItem(invoiceItem, order) {
    return {
        item: transformItem(invoiceItem.order_item, order, invoiceItem.quantity_invoiced),
        qty: invoiceItem.quantity_invoiced
    };
}
/**
 * @param {?} invoice
 * @param {?} order
 * @param {?} payment
 * @return {?}
 */
function transformInvoice(invoice, order, payment) {
    return {
        totals: transformTotals(invoice.total),
        billing_address: transformAddress(order.billing_address, order),
        shipping_address: transformAddress(order.shipping_address, order),
        payment: transformPayment(payment, order),
        items: invoice.items.map((/**
         * @param {?} item
         * @return {?}
         */
        item => transformInvoiceItem(item, order))),
        shipping_method: null
    };
}
/**
 * @param {?} creditItem
 * @param {?} order
 * @return {?}
 */
function transformCreditItem(creditItem, order) {
    return {
        item: transformItem(creditItem.order_item, order, creditItem.quantity_refunded),
        qty: creditItem.quantity_refunded
    };
}
/**
 * @param {?} credit
 * @param {?} order
 * @return {?}
 */
function transformCredit(credit, order) {
    return {
        totals: transformTotals(credit.total),
        billing_address: transformAddress(order.billing_address, order),
        shipping_address: transformAddress(order.shipping_address, order),
        payment: transformPayment(order.payment_methods[0], order),
        items: credit.items.map((/**
         * @param {?} item
         * @return {?}
         */
        item => transformCreditItem(item, order))),
        shipping_method: null
    };
}
/**
 * Transforms the MagentoOrder from the magento order query into a DaffOrder.
 * @param {?} order
 * @return {?}
 */
function daffMagentoTransformOrder(order) {
    return {
        extra_attributes: order,
        id: order.number,
        customer_id: null,
        updated_at: null,
        created_at: order.order_date,
        status: order.status,
        totals: transformTotals(order.total),
        applied_codes: order.total.discounts.map(transformCouponDiscount),
        items: order.items.map((/**
         * @param {?} item
         * @return {?}
         */
        item => transformItem(item, order, item.quantity_ordered))),
        billing_addresses: [
            transformAddress(order.billing_address, order)
        ],
        shipping_addresses: [
            transformAddress(order.shipping_address, order)
        ],
        shipments: order.shipments.map((/**
         * @param {?} shipment
         * @return {?}
         */
        shipment => transformShipment(shipment, order))),
        payment: transformPayment(order.payment_methods[0], order),
        // TODO: find out if the index is the correct payment for invoice
        invoices: order.invoices.map((/**
         * @param {?} invoice
         * @param {?} index
         * @return {?}
         */
        (invoice, index) => transformInvoice(invoice, order, order.payment_methods[index]))),
        credits: order.credit_memos.map((/**
         * @param {?} credit
         * @return {?}
         */
        credit => transformCredit(credit, order))),
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MagentoOrderInvoiceItem() { }
if (false) {
    /** @type {?} */
    MagentoOrderInvoiceItem.prototype.order_item;
    /** @type {?} */
    MagentoOrderInvoiceItem.prototype.quantity_invoiced;
}
;
/**
 * @record
 */
function MagentoOrderInvoiceBundleItem() { }
if (false) {
    /** @type {?} */
    MagentoOrderInvoiceBundleItem.prototype.bundle_options;
}
;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MagentoOrderShipmentItem() { }
if (false) {
    /** @type {?} */
    MagentoOrderShipmentItem.prototype.order_item;
    /** @type {?} */
    MagentoOrderShipmentItem.prototype.quantity_shipped;
}
;
/**
 * @record
 */
function MagentoOrderShipmentBundleItem() { }
if (false) {
    /** @type {?} */
    MagentoOrderShipmentBundleItem.prototype.bundle_options;
}
;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderBundleItemSelectedOptionFragment = gql `
  fragment orderBundleItemSelectedOption on ItemSelectedBundleOption {
    __typename
    id
    label
    values {
      __typename
      id
      product_name
    }
  }
`;
/** @type {?} */
const orderItemFragment = gql `
  fragment orderItem on OrderItemInterface {
    __typename
    id
    quantity_ordered
    quantity_canceled
    quantity_shipped
    quantity_invoiced
    product_url_key
    product_sku
    product_name
    product_type
    product_sale_price {
      value
    }
    discounts {
      amount {
        value
      }
    }
    selected_options {
      label
      value
    }
    ... on BundleOrderItem {
      bundle_options {
        ...orderBundleItemSelectedOption
      }
    }
  }
  ${orderBundleItemSelectedOptionFragment}
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderAddressFragment = gql `
  fragment orderAddress on OrderAddress {
    __typename
    city
    company
    country_code
    fax
    firstname
    middlename
    lastname
    postcode
    prefix
    region
    region_id
    street
    suffix
    telephone
  }
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderShipmentItemFragment = gql `
  fragment orderShipmentItem on ShipmentItemInterface {
    __typename
    id
    quantity_shipped
    order_item {
      ...orderItem
    }
  }
  ${orderItemFragment}
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderShipmentTrackingFragment = gql `
  fragment orderShipmentTracking on ShipmentTracking {
    __typename
    number
    carrier
    title
  }
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderShipmentFragment = gql `
  fragment orderShipment on OrderShipment {
    __typename
    id
    tracking {
      ...orderShipmentTracking
    }
    items {
      ...orderShipmentItem
    }
  }
  ${orderShipmentItemFragment}
  ${orderShipmentTrackingFragment}
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderPaymentFragment = gql `
  fragment orderPayment on OrderPaymentMethod {
    __typename
    name
    type
    additional_data {
      name
      value
    }
  }
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderInvoiceItemFragment = gql `
  fragment orderInvoiceItem on InvoiceItemInterface {
    __typename
    id
    quantity_invoiced
    order_item {
      ...orderItem
    }
  }
  ${orderItemFragment}
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderInvoiceTotalFragment = gql `
  fragment orderInvoiceTotal on InvoiceTotal {
    __typename
    discounts {
      amount {
        value
      }
      label
    }
    grand_total {
      value
    }
    subtotal {
      value
    }
    total_tax {
      value
    }
    total_shipping {
      value
    }
  }
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderInvoiceFragment = gql `
  fragment orderInvoice on Invoice {
    __typename
    id
    items {
      ...orderInvoiceItem
    }
    total {
      ...orderInvoiceTotal
    }
  }
  ${orderInvoiceItemFragment}
  ${orderInvoiceTotalFragment}
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderCreditItemFragment = gql `
  fragment orderCreditItem on CreditMemoItemInterface {
    __typename
    id
    quantity_refunded
    order_item {
      ...orderItem
    }
  }
  ${orderItemFragment}
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderCreditTotalFragment = gql `
  fragment orderCreditTotal on CreditMemoTotal {
    __typename
    discounts {
      amount {
        value
      }
      label
    }
    grand_total {
      value
    }
    subtotal {
      value
    }
    total_tax {
      value
    }
    total_shipping {
      value
    }
  }
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderCreditFragment = gql `
  fragment orderCredit on CreditMemo {
    __typename
    id
    items {
      ...orderCreditItem
    }
    total {
      ...orderCreditTotal
    }
  }
  ${orderCreditItemFragment}
  ${orderCreditTotalFragment}
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderTotalFragment = gql `
  fragment orderTotal on OrderTotal {
    __typename
    discounts {
      amount {
        value
      }
      label
    }
    grand_total {
      value
    }
    subtotal {
      value
    }
    total_tax {
      value
    }
    total_shipping {
      value
    }
  }
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderFragment = gql `
  fragment order on GraycoreGuestOrder {
    __typename
    id
    order_date
    status
    carrier
    number
    shipping_method
    items {
      ...orderItem
    }
    billing_address {
      ...orderAddress
    }
    shipping_address {
      ...orderAddress
    }
    shipments {
      ...orderShipment
    }
    payment_methods {
      ...orderPayment
    }
    invoices {
      ...orderInvoice
    }
    credit_memos {
      ...orderCredit
    }
    total {
      ...orderTotal
    }
  }
  ${orderItemFragment}
  ${orderShipmentFragment}
  ${orderPaymentFragment}
  ${orderInvoiceFragment}
  ${orderCreditFragment}
  ${orderAddressFragment}
  ${orderTotalFragment}
`;

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
/** @type {?} */
const getGuestOrders = (/**
 * @param {?=} extraOrderFragments
 * @return {?}
 */
(extraOrderFragments = []) => gql `
  query GetGuestOrders($cartId: String!) {
    graycoreGuestOrders(cartId: $cartId) {
      items {
        ...order
        ${daffBuildFragmentNameSpread(...extraOrderFragments)}
      }
    }
  }
  ${orderFragment}
  ${daffBuildFragmentDefinition(...extraOrderFragments)}
`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An multi-provider injection token for providing extra GraphQL fragments that will be spread into order queries.
 * This can be used to retrieve additional data that is not covered by the standard Daffodil interfaces.
 * The data will appear in DaffOrder#extra_attributes.
 *
 * Fragment structure is platform-specific and this feature should be used with care.
 * @type {?}
 */
const DaffMagentoExtraOrderFragments = new InjectionToken('DaffMagentoExtraOrderFragments', { factory: (/**
     * @return {?}
     */
    () => []) });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const validateGetOrdersResponse = (/**
 * @param {?} response
 * @return {?}
 */
(response) => {
    if (response.data.graycoreGuestOrders.items) {
        if (response.data.graycoreGuestOrders.items.reduce((/**
         * @param {?} acc
         * @param {?} order
         * @return {?}
         */
        (acc, order) => acc && !!(order.billing_address
            && order.shipping_address
            && order.payment_methods)), true)) {
            return response;
        }
        else {
            throw new DaffOrderInvalidAPIResponseError('One of the orders does not contain required fields.');
        }
    }
    else {
        throw new DaffOrderInvalidAPIResponseError('Get orders response does not contain a valid list of orders.');
    }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const MagentoOrderGraphQlErrorCode = {
    CART_NOT_FOUND: 'graphql-no-such-entity',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DaffOrderMagentoErrorMap = {
    [MagentoOrderGraphQlErrorCode.CART_NOT_FOUND]: DaffCartNotFoundError,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} error
 * @return {?}
 */
function transformMagentoOrderError(error) {
    return daffTransformMagentoError(error, DaffOrderMagentoErrorMap);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A service for making Magento GraphQL queries for orders.
 */
class DaffOrderMagentoService {
    /**
     * @param {?} apollo
     * @param {?} extraOrderFragments
     */
    constructor(apollo, extraOrderFragments) {
        this.apollo = apollo;
        this.extraOrderFragments = extraOrderFragments;
    }
    /**
     * @param {?=} cartId
     * @return {?}
     */
    list(cartId) {
        return this.apollo.query({
            query: getGuestOrders(this.extraOrderFragments),
            variables: {
                cartId
            }
        }).pipe(map(validateGetOrdersResponse), map((/**
         * @param {?} result
         * @return {?}
         */
        result => result.data.graycoreGuestOrders.items.map(daffMagentoTransformOrder))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => throwError(transformMagentoOrderError(err)))));
    }
    /**
     * @param {?} orderId
     * @param {?=} cartId
     * @return {?}
     */
    get(orderId, cartId) {
        return this.list(cartId).pipe(map((/**
         * @param {?} orders
         * @return {?}
         */
        orders => {
            for (const order of orders) {
                if (String(order.id) === String(orderId)) {
                    return order;
                }
            }
            // order not found
            throw new DaffOrderNotFoundError(`Could not find an order with ID ${orderId}`);
        })));
    }
}
DaffOrderMagentoService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderMagentoService.ctorParameters = () => [
    { type: Apollo },
    { type: Array, decorators: [{ type: Inject, args: [DaffMagentoExtraOrderFragments,] }] }
];
/** @nocollapse */ DaffOrderMagentoService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderMagentoService_Factory() { return new DaffOrderMagentoService(ɵɵinject(Apollo), ɵɵinject(DaffMagentoExtraOrderFragments)); }, token: DaffOrderMagentoService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffOrderMagentoService.prototype.apollo;
    /** @type {?} */
    DaffOrderMagentoService.prototype.extraOrderFragments;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffOrderMagentoDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffOrderMagentoDriverModule,
            providers: [
                {
                    provide: DaffOrderDriver,
                    useExisting: DaffOrderMagentoService
                },
            ]
        };
    }
}
DaffOrderMagentoDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
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

export { DaffMagentoExtraOrderFragments, DaffOrderMagentoDriverModule, DaffOrderMagentoService, MagentoOrderItemType, daffMagentoTransformOrder, getGuestOrders, orderAddressFragment, orderFragment, orderInvoiceFragment, orderItemFragment, orderPaymentFragment, orderShipmentFragment, orderShipmentItemFragment, orderShipmentTrackingFragment };
//# sourceMappingURL=daffodil-order-driver-magento-2.4.1.js.map
