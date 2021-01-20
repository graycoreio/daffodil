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
/**
 * @param {?} totals
 * @return {?}
 */
function transformTotals(totals) {
    return [
        {
            label: 'Grand Total',
            type: DaffOrderTotalTypeEnum.GrandTotal,
            value: totals.grand_total,
            sort_order: 1
        },
        {
            label: 'Subtotal',
            type: DaffOrderTotalTypeEnum.Subtotal,
            value: totals.subtotal,
            sort_order: 0
        },
        {
            label: 'Shipping',
            type: DaffOrderTotalTypeEnum.Shipping,
            value: totals.shipping,
            sort_order: 2
        },
        {
            label: 'Tax',
            type: DaffOrderTotalTypeEnum.Tax,
            value: totals.tax,
            sort_order: 3
        },
        {
            label: 'Discount',
            type: DaffOrderTotalTypeEnum.Discount,
            value: totals.discount,
            sort_order: 4
        }
    ];
}
/**
 * @param {?} item
 * @return {?}
 */
function transformItem(item) {
    return {
        item_id: null,
        type: DaffOrderItemType.Simple,
        qty_ordered: item.qty_ordered,
        qty_canceled: item.qty_canceled,
        qty_fulfilled: item.qty_fulfilled,
        qty: item.qty,
        image: {
            url: item.image,
            id: null,
            label: null
        },
        order_id: Number(item.order_id),
        created_at: item.created_at,
        updated_at: item.updated_at,
        product_id: item.product_id,
        parent_item_id: null,
        sku: item.sku,
        name: item.name,
        weight: item.weight,
        price: item.price,
        discount_percent: item.discount_percent,
        discount_amount: item.discount_amount,
        tax_percent: item.tax_percent,
        tax_amount: item.tax_amount,
        row_total: item.row_total,
        row_total_with_discount: item.row_total_with_discount,
        row_weight: item.row_weight,
        tax_before_discount: item.tax_before_discount
    };
}
/**
 * @param {?} address
 * @return {?}
 */
function transformAddress(address) {
    return {
        order_id: address.order_id,
        prefix: address.prefix,
        suffix: address.suffix,
        firstname: address.firstname,
        middlename: address.middlename,
        lastname: address.lastname,
        telephone: address.telephone,
        email: address.email,
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
 * @return {?}
 */
function transformShipmentItem(shipmentItem) {
    return {
        item: transformItem(shipmentItem.item),
        qty: shipmentItem.qty
    };
}
/**
 * @param {?} tracking
 * @return {?}
 */
function transformShipmentTracking(tracking) {
    return {
        tracking_number: tracking.tracking_number,
        tracking_url: null,
        carrier: tracking.carrier,
        title: tracking.title,
        carrier_logo: null,
    };
}
/**
 * @param {?} shipment
 * @return {?}
 */
function transformShipment(shipment) {
    return {
        carrier: null,
        carrier_title: null,
        code: null,
        method: null,
        method_description: null,
        tracking: shipment.tracking.map(transformShipmentTracking),
        items: shipment.items.map(transformShipmentItem)
    };
}
/**
 * @param {?} payment
 * @return {?}
 */
function transformPayment(payment) {
    return {
        payment_id: payment.payment_id,
        order_id: payment.order_id,
        created_at: null,
        updated_at: null,
        method: payment.method,
        cc_type: payment.cc_type,
        cc_last4: payment.cc_last4,
        cc_owner: payment.cc_owner,
        cc_exp_month: payment.cc_exp_month,
        cc_exp_year: payment.cc_exp_year
    };
}
/**
 * @param {?} invoice
 * @return {?}
 */
function transformInvoice(invoice) {
    return {
        totals: transformTotals(invoice),
        billing_address: transformAddress(invoice.billing_address),
        shipping_address: transformAddress(invoice.shipping_address),
        payment: transformPayment(invoice.payment),
        items: invoice.items.map(transformShipmentItem),
        shipping_method: null
    };
}
/**
 * Transforms the MagentoGraycoreOrder from the magento order query into a DaffOrder.
 * @param {?} order
 * @return {?}
 */
function daffMagentoTransformOrder(order) {
    return {
        extra_attributes: order,
        id: order.order_number,
        customer_id: order.customer_id,
        created_at: order.created_at,
        updated_at: order.updated_at,
        status: order.status,
        totals: transformTotals(order),
        applied_codes: order.applied_codes.map((/**
         * @param {?} code
         * @return {?}
         */
        code => ({ code }))),
        items: order.items.map(transformItem),
        billing_addresses: [
            transformAddress(order.billing_address)
        ],
        shipping_addresses: [
            transformAddress(order.shipping_address)
        ],
        shipments: order.shipments.map(transformShipment),
        payment: transformPayment(order.payment),
        invoices: order.invoices.map(transformInvoice),
        credits: order.credits.map(transformInvoice),
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderItemFragment = gql `
  fragment orderItem on GraycoreOrderItem {
    qty_ordered
    image
    qty_canceled
    qty_fulfilled
    order_id
    created_at
    updated_at
    product_id
    sku
    name
    weight
    qty
    price
    discount_percent
    discount_amount
    tax_percent
    tax_amount
    row_total
    row_total_with_discount
    row_weight
    tax_before_discount
  }
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderAddressFragment = gql `
  fragment orderAddress on GraycoreOrderAddress {
    order_id
    prefix
    suffix
    firstname
    middlename
    lastname
    telephone
    email
    street
    city
    region
    region_id
    country_code
    postcode
  }
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderShipmentItemFragment = gql `
  fragment orderShipmentItem on GraycoreOrderShipmentItem {
    qty
    item {
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
  fragment orderShipmentTracking on GraycoreOrderShipmentTracking {
    tracking_number
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
  fragment orderShipment on GraycoreOrderShipment {
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
  fragment orderPayment on GraycoreOrderPayment {
    payment_id
    order_id
    method
    cc_type
    cc_last4
    cc_owner
    cc_exp_month
    cc_exp_year
  }
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderInvoiceFragment = gql `
  fragment orderInvoice on GraycoreOrderInvoice {
    items {
      ...orderShipmentItem
    }
    grand_total
    subtotal
    shipping
    discount
    tax
    billing_address {
      ...orderAddress
    }
    shipping_address {
      ...orderAddress
		}
		payment {
			...orderPayment
		}
  }
  ${orderShipmentItemFragment}
  ${orderAddressFragment}
  ${orderPaymentFragment}
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const orderFragment = gql `
  fragment order on GraycoreOrder {
    id
    order_number
    customer_id
    created_at
    updated_at
    grand_total
    subtotal
    shipping
    discount
    tax
    status
    applied_codes
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
    payment {
      ...orderPayment
    }
    invoices {
      ...orderInvoice
    }
    credits {
      ...orderInvoice
    }
  }
  ${orderItemFragment}
  ${orderShipmentFragment}
  ${orderPaymentFragment}
  ${orderInvoiceFragment}
  ${orderAddressFragment}
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
      orders {
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
    if (response.data.graycoreGuestOrders.orders) {
        if (response.data.graycoreGuestOrders.orders.reduce((/**
         * @param {?} acc
         * @param {?} order
         * @return {?}
         */
        (acc, order) => acc && !!(order.billing_address
            && order.shipping_address
            && order.payment)), true)) {
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
        result => result.data.graycoreGuestOrders.orders.map(daffMagentoTransformOrder))), catchError((/**
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

export { DaffMagentoExtraOrderFragments, DaffOrderMagentoDriverModule, DaffOrderMagentoService, daffMagentoTransformOrder, getGuestOrders, orderAddressFragment, orderFragment, orderInvoiceFragment, orderItemFragment, orderPaymentFragment, orderShipmentFragment, orderShipmentItemFragment, orderShipmentTrackingFragment };
//# sourceMappingURL=daffodil-order-driver-magento-2.4.0.js.map
