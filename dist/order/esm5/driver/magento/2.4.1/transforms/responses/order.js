var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { daffAdd, daffSubtract } from '@daffodil/core';
import { DaffOrderTotalTypeEnum, DaffOrderItemType } from '@daffodil/order';
import { MagentoOrderItemType } from '../../models/responses/order-item';
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
            function (acc, discount) { return daffAdd(acc, discount.amount.value); }), 0),
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
    var discount = item.discounts.reduce((/**
     * @param {?} acc
     * @param {?} d
     * @return {?}
     */
    function (acc, d) { return daffAdd(acc, d.amount.value); }), 0);
    /** @type {?} */
    var rowTotal = qty * item.product_sale_price.value;
    /** @type {?} */
    var rowTotalWithDiscount = qty * daffSubtract(item.product_sale_price.value, discount);
    return __assign({ type: DaffOrderItemType.Simple, item_id: null, qty_ordered: item.quantity_ordered, qty_canceled: item.quantity_canceled, qty_fulfilled: item.quantity_shipped, qty: qty, image: {
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
        function (item) { return transformShipmentItem(item, order); }))
    };
}
/**
 * @param {?} payment
 * @param {?} order
 * @return {?}
 */
function transformPayment(payment, order) {
    /** @type {?} */
    var findAdditionalData = (/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var index = payment.additional_data.findIndex((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var name = _a.name;
            return name === key;
        }));
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
        function (item) { return transformInvoiceItem(item, order); })),
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
        function (item) { return transformCreditItem(item, order); })),
        shipping_method: null
    };
}
/**
 * Transforms the MagentoOrder from the magento order query into a DaffOrder.
 * @param {?} order
 * @return {?}
 */
export function daffMagentoTransformOrder(order) {
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
        function (item) { return transformItem(item, order, item.quantity_ordered); })),
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
        function (shipment) { return transformShipment(shipment, order); })),
        payment: transformPayment(order.payment_methods[0], order),
        // TODO: find out if the index is the correct payment for invoice
        invoices: order.invoices.map((/**
         * @param {?} invoice
         * @param {?} index
         * @return {?}
         */
        function (invoice, index) { return transformInvoice(invoice, order, order.payment_methods[index]); })),
        credits: order.credit_memos.map((/**
         * @param {?} credit
         * @return {?}
         */
        function (credit) { return transformCredit(credit, order); })),
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvb3JkZXIvZHJpdmVyL21hZ2VudG8vMi40LjEvIiwic291cmNlcyI6WyJ0cmFuc2Zvcm1zL3Jlc3BvbnNlcy9vcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFVTCxzQkFBc0IsRUFFdEIsaUJBQWlCLEVBR2xCLE1BQU0saUJBQWlCLENBQUM7QUFlekIsT0FBTyxFQUF3RixvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7OztBQUkvSixTQUFTLGVBQWUsQ0FBQyxNQUF5QjtJQUNoRCxPQUFPO1FBQ0w7WUFDRSxLQUFLLEVBQUUsYUFBYTtZQUNwQixJQUFJLEVBQUUsc0JBQXNCLENBQUMsVUFBVTtZQUN2QyxLQUFLLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLO1lBQy9CLFVBQVUsRUFBRSxDQUFDO1NBQ2Q7UUFDRDtZQUNFLEtBQUssRUFBRSxVQUFVO1lBQ2pCLElBQUksRUFBRSxzQkFBc0IsQ0FBQyxRQUFRO1lBQ3JDLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUs7WUFDNUIsVUFBVSxFQUFFLENBQUM7U0FDZDtRQUNEO1lBQ0UsS0FBSyxFQUFFLFVBQVU7WUFDakIsSUFBSSxFQUFFLHNCQUFzQixDQUFDLFFBQVE7WUFDckMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSztZQUNsQyxVQUFVLEVBQUUsQ0FBQztTQUNkO1FBQ0Q7WUFDRSxLQUFLLEVBQUUsS0FBSztZQUNaLElBQUksRUFBRSxzQkFBc0IsQ0FBQyxHQUFHO1lBQ2hDLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUs7WUFDN0IsVUFBVSxFQUFFLENBQUM7U0FDZDtRQUNEO1lBQ0UsS0FBSyxFQUFFLFVBQVU7WUFDakIsSUFBSSxFQUFFLHNCQUFzQixDQUFDLFFBQVE7WUFDckMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTTs7Ozs7WUFBQyxVQUFDLEdBQUcsRUFBRSxRQUFRLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQW5DLENBQW1DLEdBQUUsQ0FBQyxDQUFDO1lBQ3pGLFVBQVUsRUFBRSxDQUFDO1NBQ2Q7S0FDRixDQUFBO0FBQ0gsQ0FBQzs7Ozs7QUFFRCxTQUFTLHVCQUF1QixDQUFDLFFBQXlCO0lBQ3hELE9BQU87UUFDTCxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUs7S0FDckIsQ0FBQTtBQUNILENBQUM7Ozs7O0FBRUQsU0FBUywyQkFBMkIsQ0FBQyxNQUE4QjtJQUNqRSxPQUFPO1FBQ0wsZUFBZSxFQUFFLE1BQU0sQ0FBQyxLQUFLO1FBQzlCLFdBQVcsRUFBRSxNQUFNLENBQUMsS0FBSztLQUN6QixDQUFBO0FBQ0gsQ0FBQzs7Ozs7QUFFRCxTQUFTLHFCQUFxQixDQUFDLE1BQTRDO0lBQ3pFLE9BQU87UUFDTCxZQUFZLEVBQUUsTUFBTSxDQUFDLEtBQUs7UUFDM0IsV0FBVyxFQUFFLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7S0FDL0UsQ0FBQTtBQUNILENBQUM7Ozs7O0FBRUQsU0FBUyw2QkFBNkIsQ0FBQyxJQUFzQjtJQUMzRCxRQUFRLElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDekIsS0FBSyxvQkFBb0IsQ0FBQyxNQUFNO1lBQzlCLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLGlCQUFpQixDQUFDLFNBQVM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLG1CQUFBLElBQUksRUFBMEIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUM7YUFDcEYsQ0FBQTtRQUNILEtBQUssb0JBQW9CLENBQUMsWUFBWTtZQUNwQyxPQUFPO2dCQUNMLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxZQUFZO2dCQUNwQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQzthQUNuRSxDQUFBO1FBQ0gsS0FBSyxvQkFBb0IsQ0FBQyxNQUFNO1lBQzlCLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLGlCQUFpQixDQUFDLE1BQU07YUFDL0IsQ0FBQTtRQUNIO1lBQ0UsT0FBTyxFQUFFLENBQUE7S0FDWjtBQUNILENBQUM7Ozs7Ozs7QUFFRCxTQUFTLGFBQWEsQ0FBQyxJQUFzQixFQUFFLEtBQW1CLEVBQUUsR0FBVzs7UUFDdkUsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTs7Ozs7SUFBQyxVQUFDLEdBQUcsRUFBRSxDQUFDLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQTVCLENBQTRCLEdBQUUsQ0FBQyxDQUFDOztRQUM3RSxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLOztRQUM5QyxvQkFBb0IsR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO0lBRXhGLGtCQUNFLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxNQUFNLEVBQzlCLE9BQU8sRUFBRSxJQUFJLEVBQ2IsV0FBVyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFDbEMsWUFBWSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFDcEMsYUFBYSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFDcEMsR0FBRyxLQUFBLEVBQ0gsS0FBSyxFQUFFO1lBQ0wsR0FBRyxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3pCLEVBQUUsRUFBRSxJQUFJO1lBQ1IsS0FBSyxFQUFFLElBQUk7U0FDWixFQUNELFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUNsQixVQUFVLEVBQUUsSUFBSSxFQUNoQixVQUFVLEVBQUUsSUFBSSxFQUNoQixVQUFVLEVBQUUsSUFBSSxFQUNoQixjQUFjLEVBQUUsSUFBSSxFQUNwQixHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQ3ZCLE1BQU0sRUFBRSxJQUFJLEVBQ1osS0FBSyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQ3BDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQzVFLGVBQWUsRUFBRSxRQUFRLEVBQ3pCLFdBQVcsRUFBRSxJQUFJLEVBQ2pCLFVBQVUsRUFBRSxJQUFJLEVBQ2hCLFNBQVMsRUFBRSxRQUFRLEVBQ25CLHVCQUF1QixFQUFFLG9CQUFvQixFQUM3QyxVQUFVLEVBQUUsSUFBSSxFQUNoQixtQkFBbUIsRUFBRSxJQUFJLElBQ3RCLDZCQUE2QixDQUFDLElBQUksQ0FBQyxFQUN2QztBQUNILENBQUM7Ozs7OztBQUVELFNBQVMsZ0JBQWdCLENBQUMsT0FBNEIsRUFBRSxLQUFtQjtJQUN6RSxPQUFPO1FBQ0wsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtRQUN0QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07UUFDdEIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTO1FBQzVCLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVTtRQUM5QixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7UUFDMUIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTO1FBQzVCLEtBQUssRUFBRSxJQUFJO1FBQ1gsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7UUFDbEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxTQUFTO1FBQ3pCLE9BQU8sRUFBRSxPQUFPLENBQUMsWUFBWTtRQUM3QixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7S0FDM0IsQ0FBQTtBQUNILENBQUM7Ozs7OztBQUVELFNBQVMscUJBQXFCLENBQUMsWUFBc0MsRUFBRSxLQUFtQjtJQUN4RixPQUFPO1FBQ0wsSUFBSSxFQUFFLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsZ0JBQWdCLENBQUM7UUFDbEYsR0FBRyxFQUFFLFlBQVksQ0FBQyxnQkFBZ0I7S0FDbkMsQ0FBQTtBQUNILENBQUM7Ozs7O0FBRUQsU0FBUyx5QkFBeUIsQ0FBQyxRQUFzQztJQUN2RSxPQUFPO1FBQ0wsZUFBZSxFQUFFLFFBQVEsQ0FBQyxNQUFNO1FBQ2hDLFlBQVksRUFBRSxJQUFJO1FBQ2xCLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTztRQUN6QixLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUs7UUFDckIsWUFBWSxFQUFFLElBQUk7S0FDbkIsQ0FBQTtBQUNILENBQUM7Ozs7OztBQUVELFNBQVMsaUJBQWlCLENBQUMsUUFBOEIsRUFBRSxLQUFtQjtJQUM1RSxPQUFPO1FBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1FBQ3RCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLEtBQUssQ0FBQyxlQUFlO1FBQzdCLGtCQUFrQixFQUFFLElBQUk7UUFDeEIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDO1FBQzFELEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLHFCQUFxQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBbEMsQ0FBa0MsRUFBQztLQUN0RSxDQUFBO0FBQ0gsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxPQUE0QixFQUFFLEtBQW1COztRQUNuRSxrQkFBa0I7Ozs7SUFBRyxVQUFBLEdBQUc7O1lBQ3RCLEtBQUssR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQU07Z0JBQUwsY0FBSTtZQUFNLE9BQUEsSUFBSSxLQUFLLEdBQUc7UUFBWixDQUFZLEVBQUM7UUFFekUsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7SUFDakUsQ0FBQyxDQUFBO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRTtRQUNsQixVQUFVLEVBQUUsSUFBSTtRQUNoQixVQUFVLEVBQUUsSUFBSTtRQUNoQixNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUk7UUFDcEIsT0FBTyxFQUFFLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztRQUN0QyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsVUFBVSxDQUFDO1FBQ3hDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7UUFDeEMsWUFBWSxFQUFFLGtCQUFrQixDQUFDLGNBQWMsQ0FBQztRQUNoRCxXQUFXLEVBQUUsa0JBQWtCLENBQUMsYUFBYSxDQUFDO0tBQy9DLENBQUE7QUFDSCxDQUFDOzs7Ozs7QUFFRCxTQUFTLG9CQUFvQixDQUFDLFdBQW9DLEVBQUUsS0FBbUI7SUFDckYsT0FBTztRQUNMLElBQUksRUFBRSxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLGlCQUFpQixDQUFDO1FBQ2pGLEdBQUcsRUFBRSxXQUFXLENBQUMsaUJBQWlCO0tBQ25DLENBQUE7QUFDSCxDQUFDOzs7Ozs7O0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxPQUE0QixFQUFFLEtBQW1CLEVBQUUsT0FBNEI7SUFDdkcsT0FBTztRQUNMLE1BQU0sRUFBRSxlQUFlLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUN0QyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUM7UUFDL0QsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQztRQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztRQUN6QyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQWpDLENBQWlDLEVBQUM7UUFDbkUsZUFBZSxFQUFFLElBQUk7S0FDdEIsQ0FBQTtBQUNILENBQUM7Ozs7OztBQUVELFNBQVMsbUJBQW1CLENBQUMsVUFBa0MsRUFBRSxLQUFtQjtJQUNsRixPQUFPO1FBQ0wsSUFBSSxFQUFFLGFBQWEsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsaUJBQWlCLENBQUM7UUFDL0UsR0FBRyxFQUFFLFVBQVUsQ0FBQyxpQkFBaUI7S0FDbEMsQ0FBQTtBQUNILENBQUM7Ozs7OztBQUVELFNBQVMsZUFBZSxDQUFDLE1BQTBCLEVBQUUsS0FBbUI7SUFDdEUsT0FBTztRQUNMLE1BQU0sRUFBRSxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNyQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUM7UUFDL0QsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQztRQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7UUFDMUQsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsbUJBQW1CLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFoQyxDQUFnQyxFQUFDO1FBQ2pFLGVBQWUsRUFBRSxJQUFJO0tBQ3RCLENBQUE7QUFDSCxDQUFDOzs7Ozs7QUFLRCxNQUFNLFVBQVUseUJBQXlCLENBQUMsS0FBbUI7SUFDM0QsT0FBTztRQUNMLGdCQUFnQixFQUFFLEtBQUs7UUFFdkIsRUFBRSxFQUFFLEtBQUssQ0FBQyxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtRQUM1QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07UUFFcEIsTUFBTSxFQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BDLGFBQWEsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7UUFDakUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQWpELENBQWlELEVBQUM7UUFDakYsaUJBQWlCLEVBQUU7WUFDakIsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUM7U0FDL0M7UUFDRCxrQkFBa0IsRUFBRTtZQUNsQixnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDO1NBQ2hEO1FBQ0QsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsaUJBQWlCLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFsQyxDQUFrQyxFQUFDO1FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQzs7UUFFMUQsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRzs7Ozs7UUFBQyxVQUFDLE9BQU8sRUFBRSxLQUFLLElBQUssT0FBQSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBOUQsQ0FBOEQsRUFBQztRQUNoSCxPQUFPLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxlQUFlLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUE5QixDQUE4QixFQUFDO0tBQzFFLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGFmZkFkZCwgZGFmZlN1YnRyYWN0IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUnO1xuaW1wb3J0IHtcbiAgRGFmZk9yZGVyLFxuICBEYWZmT3JkZXJUb3RhbCxcbiAgRGFmZk9yZGVySXRlbSxcbiAgRGFmZk9yZGVyQWRkcmVzcyxcbiAgRGFmZk9yZGVyU2hpcG1lbnQsXG4gIERhZmZPcmRlclNoaXBtZW50SXRlbSxcbiAgRGFmZk9yZGVyU2hpcG1lbnRUcmFja2luZyxcbiAgRGFmZk9yZGVyUGF5bWVudCxcbiAgRGFmZk9yZGVySW52b2ljZSxcbiAgRGFmZk9yZGVyVG90YWxUeXBlRW51bSxcbiAgRGFmZkNvbXBvc2l0ZU9yZGVySXRlbU9wdGlvbixcbiAgRGFmZk9yZGVySXRlbVR5cGUsXG4gIERhZmZDb25maWd1cmFibGVPcmRlckl0ZW1BdHRyaWJ1dGUsXG4gIERhZmZPcmRlckNvdXBvblxufSBmcm9tICdAZGFmZm9kaWwvb3JkZXInO1xuXG5pbXBvcnQge1xuICBNYWdlbnRvT3JkZXIsXG4gIE1hZ2VudG9PcmRlckl0ZW0sXG4gIE1hZ2VudG9PcmRlclNoaXBtZW50LFxuICBNYWdlbnRvT3JkZXJBZGRyZXNzLFxuICBNYWdlbnRvT3JkZXJTaGlwbWVudEl0ZW0sXG4gIE1hZ2VudG9PcmRlclNoaXBtZW50VHJhY2tpbmcsXG4gIE1hZ2VudG9PcmRlclBheW1lbnQsXG4gIE1hZ2VudG9PcmRlckludm9pY2Vcbn0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlcy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IE1hZ2VudG9PcmRlclRvdGFsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlcy9vcmRlci10b3RhbCc7XG5pbXBvcnQgeyBNYWdlbnRvT3JkZXJDcmVkaXQgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVzcG9uc2VzL29yZGVyLWNyZWRpdCc7XG5pbXBvcnQgeyBNYWdlbnRvT3JkZXJDcmVkaXRJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlcy9vcmRlci1jcmVkaXQtaXRlbSc7XG5pbXBvcnQgeyBNYWdlbnRvT3JkZXJCdW5kbGVJdGVtLCBNYWdlbnRvT3JkZXJCdW5kbGVJdGVtU2VsZWN0ZWRPcHRpb24sIE1hZ2VudG9PcmRlckl0ZW1PcHRpb24sIE1hZ2VudG9PcmRlckl0ZW1UeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlcy9vcmRlci1pdGVtJztcbmltcG9ydCB7IE1hZ2VudG9EaXNjb3VudCB9IGZyb20gJy4uLy4uL21vZGVscy9yZXNwb25zZXMvZGlzY291bnQnO1xuaW1wb3J0IHsgTWFnZW50b09yZGVySW52b2ljZUl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVzcG9uc2VzL29yZGVyLWludm9pY2UtaXRlbSc7XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVRvdGFscyh0b3RhbHM6IE1hZ2VudG9PcmRlclRvdGFsKTogRGFmZk9yZGVyVG90YWxbXSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgbGFiZWw6ICdHcmFuZCBUb3RhbCcsXG4gICAgICB0eXBlOiBEYWZmT3JkZXJUb3RhbFR5cGVFbnVtLkdyYW5kVG90YWwsXG4gICAgICB2YWx1ZTogdG90YWxzLmdyYW5kX3RvdGFsLnZhbHVlLFxuICAgICAgc29ydF9vcmRlcjogMVxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdTdWJ0b3RhbCcsXG4gICAgICB0eXBlOiBEYWZmT3JkZXJUb3RhbFR5cGVFbnVtLlN1YnRvdGFsLFxuICAgICAgdmFsdWU6IHRvdGFscy5zdWJ0b3RhbC52YWx1ZSxcbiAgICAgIHNvcnRfb3JkZXI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnU2hpcHBpbmcnLFxuICAgICAgdHlwZTogRGFmZk9yZGVyVG90YWxUeXBlRW51bS5TaGlwcGluZyxcbiAgICAgIHZhbHVlOiB0b3RhbHMudG90YWxfc2hpcHBpbmcudmFsdWUsXG4gICAgICBzb3J0X29yZGVyOiAyXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ1RheCcsXG4gICAgICB0eXBlOiBEYWZmT3JkZXJUb3RhbFR5cGVFbnVtLlRheCxcbiAgICAgIHZhbHVlOiB0b3RhbHMudG90YWxfdGF4LnZhbHVlLFxuICAgICAgc29ydF9vcmRlcjogM1xuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdEaXNjb3VudCcsXG4gICAgICB0eXBlOiBEYWZmT3JkZXJUb3RhbFR5cGVFbnVtLkRpc2NvdW50LFxuICAgICAgdmFsdWU6IHRvdGFscy5kaXNjb3VudHMucmVkdWNlKChhY2MsIGRpc2NvdW50KSA9PiBkYWZmQWRkKGFjYywgZGlzY291bnQuYW1vdW50LnZhbHVlKSwgMCksXG4gICAgICBzb3J0X29yZGVyOiA0XG4gICAgfVxuICBdXG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUNvdXBvbkRpc2NvdW50KGRpc2NvdW50OiBNYWdlbnRvRGlzY291bnQpOiBEYWZmT3JkZXJDb3Vwb24ge1xuICByZXR1cm4ge1xuICAgIGNvZGU6IGRpc2NvdW50LmxhYmVsLFxuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUNvbmZpZ3VyYWJsZU9wdGlvbihvcHRpb246IE1hZ2VudG9PcmRlckl0ZW1PcHRpb24pOiBEYWZmQ29uZmlndXJhYmxlT3JkZXJJdGVtQXR0cmlidXRlIHtcbiAgcmV0dXJuIHtcbiAgICBhdHRyaWJ1dGVfbGFiZWw6IG9wdGlvbi5sYWJlbCxcblx0ICB2YWx1ZV9sYWJlbDogb3B0aW9uLnZhbHVlXG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtQnVuZGxlT3B0aW9uKG9wdGlvbjogTWFnZW50b09yZGVyQnVuZGxlSXRlbVNlbGVjdGVkT3B0aW9uKTogRGFmZkNvbXBvc2l0ZU9yZGVySXRlbU9wdGlvbiB7XG4gIHJldHVybiB7XG4gICAgb3B0aW9uX2xhYmVsOiBvcHRpb24ubGFiZWwsXG5cdCAgdmFsdWVfbGFiZWw6IG9wdGlvbi52YWx1ZXMgJiYgb3B0aW9uLnZhbHVlc1swXSAmJiBvcHRpb24udmFsdWVzWzBdLnByb2R1Y3RfbmFtZVxuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUFkZGl0aW9uYWxJdGVtRmllbGRzKGl0ZW06IE1hZ2VudG9PcmRlckl0ZW0pIHtcbiAgc3dpdGNoIChpdGVtLnByb2R1Y3RfdHlwZSkge1xuICAgIGNhc2UgTWFnZW50b09yZGVySXRlbVR5cGUuQnVuZGxlOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogRGFmZk9yZGVySXRlbVR5cGUuQ29tcG9zaXRlLFxuICAgICAgICBvcHRpb25zOiAoaXRlbSBhcyBNYWdlbnRvT3JkZXJCdW5kbGVJdGVtKS5idW5kbGVfb3B0aW9ucy5tYXAodHJhbnNmb3JtQnVuZGxlT3B0aW9uKVxuICAgICAgfVxuICAgIGNhc2UgTWFnZW50b09yZGVySXRlbVR5cGUuQ29uZmlndXJhYmxlOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogRGFmZk9yZGVySXRlbVR5cGUuQ29uZmlndXJhYmxlLFxuICAgICAgICBhdHRyaWJ1dGVzOiBpdGVtLnNlbGVjdGVkX29wdGlvbnMubWFwKHRyYW5zZm9ybUNvbmZpZ3VyYWJsZU9wdGlvbilcbiAgICAgIH1cbiAgICBjYXNlIE1hZ2VudG9PcmRlckl0ZW1UeXBlLlNpbXBsZTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IERhZmZPcmRlckl0ZW1UeXBlLlNpbXBsZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge31cbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1JdGVtKGl0ZW06IE1hZ2VudG9PcmRlckl0ZW0sIG9yZGVyOiBNYWdlbnRvT3JkZXIsIHF0eTogbnVtYmVyKTogRGFmZk9yZGVySXRlbSB7XG4gIGNvbnN0IGRpc2NvdW50ID0gaXRlbS5kaXNjb3VudHMucmVkdWNlKChhY2MsIGQpID0+IGRhZmZBZGQoYWNjLCBkLmFtb3VudC52YWx1ZSksIDApO1xuICBjb25zdCByb3dUb3RhbCA9IHF0eSAqIGl0ZW0ucHJvZHVjdF9zYWxlX3ByaWNlLnZhbHVlO1xuICBjb25zdCByb3dUb3RhbFdpdGhEaXNjb3VudCA9IHF0eSAqIGRhZmZTdWJ0cmFjdChpdGVtLnByb2R1Y3Rfc2FsZV9wcmljZS52YWx1ZSwgZGlzY291bnQpO1xuXG4gIHJldHVybiB7XG4gICAgdHlwZTogRGFmZk9yZGVySXRlbVR5cGUuU2ltcGxlLFxuICAgIGl0ZW1faWQ6IG51bGwsXG4gICAgcXR5X29yZGVyZWQ6IGl0ZW0ucXVhbnRpdHlfb3JkZXJlZCxcbiAgICBxdHlfY2FuY2VsZWQ6IGl0ZW0ucXVhbnRpdHlfY2FuY2VsZWQsXG4gICAgcXR5X2Z1bGZpbGxlZDogaXRlbS5xdWFudGl0eV9zaGlwcGVkLFxuICAgIHF0eSxcbiAgICBpbWFnZToge1xuICAgICAgdXJsOiBpdGVtLnByb2R1Y3RfdXJsX2tleSxcbiAgICAgIGlkOiBudWxsLFxuICAgICAgbGFiZWw6IG51bGxcbiAgICB9LFxuICAgIG9yZGVyX2lkOiBvcmRlci5pZCxcbiAgICBjcmVhdGVkX2F0OiBudWxsLFxuICAgIHVwZGF0ZWRfYXQ6IG51bGwsXG4gICAgcHJvZHVjdF9pZDogbnVsbCxcbiAgICBwYXJlbnRfaXRlbV9pZDogbnVsbCxcbiAgICBza3U6IGl0ZW0ucHJvZHVjdF9za3UsXG4gICAgbmFtZTogaXRlbS5wcm9kdWN0X25hbWUsXG4gICAgd2VpZ2h0OiBudWxsLFxuICAgIHByaWNlOiBpdGVtLnByb2R1Y3Rfc2FsZV9wcmljZS52YWx1ZSxcbiAgICBkaXNjb3VudF9wZXJjZW50OiBNYXRoLmZsb29yKGRpc2NvdW50IC8gaXRlbS5wcm9kdWN0X3NhbGVfcHJpY2UudmFsdWUgKiAxMDApLFxuICAgIGRpc2NvdW50X2Ftb3VudDogZGlzY291bnQsXG4gICAgdGF4X3BlcmNlbnQ6IG51bGwsXG4gICAgdGF4X2Ftb3VudDogbnVsbCxcbiAgICByb3dfdG90YWw6IHJvd1RvdGFsLFxuICAgIHJvd190b3RhbF93aXRoX2Rpc2NvdW50OiByb3dUb3RhbFdpdGhEaXNjb3VudCxcbiAgICByb3dfd2VpZ2h0OiBudWxsLFxuICAgIHRheF9iZWZvcmVfZGlzY291bnQ6IG51bGwsXG4gICAgLi4udHJhbnNmb3JtQWRkaXRpb25hbEl0ZW1GaWVsZHMoaXRlbSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1BZGRyZXNzKGFkZHJlc3M6IE1hZ2VudG9PcmRlckFkZHJlc3MsIG9yZGVyOiBNYWdlbnRvT3JkZXIpOiBEYWZmT3JkZXJBZGRyZXNzIHtcbiAgcmV0dXJuIHtcbiAgICBvcmRlcl9pZDogb3JkZXIuaWQsXG4gICAgcHJlZml4OiBhZGRyZXNzLnByZWZpeCxcbiAgICBzdWZmaXg6IGFkZHJlc3Muc3VmZml4LFxuICAgIGZpcnN0bmFtZTogYWRkcmVzcy5maXJzdG5hbWUsXG4gICAgbWlkZGxlbmFtZTogYWRkcmVzcy5taWRkbGVuYW1lLFxuICAgIGxhc3RuYW1lOiBhZGRyZXNzLmxhc3RuYW1lLFxuICAgIHRlbGVwaG9uZTogYWRkcmVzcy50ZWxlcGhvbmUsXG4gICAgZW1haWw6IG51bGwsXG4gICAgc3RyZWV0OiBhZGRyZXNzLnN0cmVldFswXSxcbiAgICBzdHJlZXQyOiBhZGRyZXNzLnN0cmVldFsxXSxcbiAgICBjaXR5OiBhZGRyZXNzLmNpdHksXG4gICAgcmVnaW9uOiBhZGRyZXNzLnJlZ2lvbl9pZCxcbiAgICBjb3VudHJ5OiBhZGRyZXNzLmNvdW50cnlfY29kZSxcbiAgICBwb3N0Y29kZTogYWRkcmVzcy5wb3N0Y29kZVxuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVNoaXBtZW50SXRlbShzaGlwbWVudEl0ZW06IE1hZ2VudG9PcmRlclNoaXBtZW50SXRlbSwgb3JkZXI6IE1hZ2VudG9PcmRlcik6IERhZmZPcmRlclNoaXBtZW50SXRlbSB7XG4gIHJldHVybiB7XG4gICAgaXRlbTogdHJhbnNmb3JtSXRlbShzaGlwbWVudEl0ZW0ub3JkZXJfaXRlbSwgb3JkZXIsIHNoaXBtZW50SXRlbS5xdWFudGl0eV9zaGlwcGVkKSxcbiAgICBxdHk6IHNoaXBtZW50SXRlbS5xdWFudGl0eV9zaGlwcGVkXG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtU2hpcG1lbnRUcmFja2luZyh0cmFja2luZzogTWFnZW50b09yZGVyU2hpcG1lbnRUcmFja2luZyk6IERhZmZPcmRlclNoaXBtZW50VHJhY2tpbmcge1xuICByZXR1cm4ge1xuICAgIHRyYWNraW5nX251bWJlcjogdHJhY2tpbmcubnVtYmVyLFxuICAgIHRyYWNraW5nX3VybDogbnVsbCxcbiAgICBjYXJyaWVyOiB0cmFja2luZy5jYXJyaWVyLFxuICAgIHRpdGxlOiB0cmFja2luZy50aXRsZSxcbiAgICBjYXJyaWVyX2xvZ286IG51bGwsXG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtU2hpcG1lbnQoc2hpcG1lbnQ6IE1hZ2VudG9PcmRlclNoaXBtZW50LCBvcmRlcjogTWFnZW50b09yZGVyKTogRGFmZk9yZGVyU2hpcG1lbnQge1xuICByZXR1cm4ge1xuICAgIGNhcnJpZXI6IG9yZGVyLmNhcnJpZXIsXG4gICAgY2Fycmllcl90aXRsZTogbnVsbCxcbiAgICBjb2RlOiBudWxsLFxuICAgIG1ldGhvZDogb3JkZXIuc2hpcHBpbmdfbWV0aG9kLFxuICAgIG1ldGhvZF9kZXNjcmlwdGlvbjogbnVsbCxcbiAgICB0cmFja2luZzogc2hpcG1lbnQudHJhY2tpbmcubWFwKHRyYW5zZm9ybVNoaXBtZW50VHJhY2tpbmcpLFxuICAgIGl0ZW1zOiBzaGlwbWVudC5pdGVtcy5tYXAoaXRlbSA9PiB0cmFuc2Zvcm1TaGlwbWVudEl0ZW0oaXRlbSwgb3JkZXIpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVBheW1lbnQocGF5bWVudDogTWFnZW50b09yZGVyUGF5bWVudCwgb3JkZXI6IE1hZ2VudG9PcmRlcik6IERhZmZPcmRlclBheW1lbnQge1xuICBjb25zdCBmaW5kQWRkaXRpb25hbERhdGEgPSBrZXkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gcGF5bWVudC5hZGRpdGlvbmFsX2RhdGEuZmluZEluZGV4KCh7bmFtZX0pID0+IG5hbWUgPT09IGtleSk7XG5cbiAgICByZXR1cm4gaW5kZXggPiAtMSA/IHBheW1lbnQuYWRkaXRpb25hbF9kYXRhW2luZGV4XS52YWx1ZSA6IG51bGxcbiAgfVxuICByZXR1cm4ge1xuICAgIHBheW1lbnRfaWQ6IG51bGwsXG4gICAgb3JkZXJfaWQ6IG9yZGVyLmlkLFxuICAgIGNyZWF0ZWRfYXQ6IG51bGwsXG4gICAgdXBkYXRlZF9hdDogbnVsbCxcbiAgICBtZXRob2Q6IHBheW1lbnQudHlwZSxcbiAgICBjY190eXBlOiBmaW5kQWRkaXRpb25hbERhdGEoJ2NjX3R5cGUnKSxcbiAgICBjY19sYXN0NDogZmluZEFkZGl0aW9uYWxEYXRhKCdjY19sYXN0NCcpLFxuICAgIGNjX293bmVyOiBmaW5kQWRkaXRpb25hbERhdGEoJ2NjX293bmVyJyksXG4gICAgY2NfZXhwX21vbnRoOiBmaW5kQWRkaXRpb25hbERhdGEoJ2NjX2V4cF9tb250aCcpLFxuICAgIGNjX2V4cF95ZWFyOiBmaW5kQWRkaXRpb25hbERhdGEoJ2NjX2V4cF95ZWFyJylcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1JbnZvaWNlSXRlbShpbnZvaWNlSXRlbTogTWFnZW50b09yZGVySW52b2ljZUl0ZW0sIG9yZGVyOiBNYWdlbnRvT3JkZXIpOiBEYWZmT3JkZXJTaGlwbWVudEl0ZW0ge1xuICByZXR1cm4ge1xuICAgIGl0ZW06IHRyYW5zZm9ybUl0ZW0oaW52b2ljZUl0ZW0ub3JkZXJfaXRlbSwgb3JkZXIsIGludm9pY2VJdGVtLnF1YW50aXR5X2ludm9pY2VkKSxcbiAgICBxdHk6IGludm9pY2VJdGVtLnF1YW50aXR5X2ludm9pY2VkXG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtSW52b2ljZShpbnZvaWNlOiBNYWdlbnRvT3JkZXJJbnZvaWNlLCBvcmRlcjogTWFnZW50b09yZGVyLCBwYXltZW50OiBNYWdlbnRvT3JkZXJQYXltZW50KTogRGFmZk9yZGVySW52b2ljZSB7XG4gIHJldHVybiB7XG4gICAgdG90YWxzOiB0cmFuc2Zvcm1Ub3RhbHMoaW52b2ljZS50b3RhbCksXG4gICAgYmlsbGluZ19hZGRyZXNzOiB0cmFuc2Zvcm1BZGRyZXNzKG9yZGVyLmJpbGxpbmdfYWRkcmVzcywgb3JkZXIpLFxuICAgIHNoaXBwaW5nX2FkZHJlc3M6IHRyYW5zZm9ybUFkZHJlc3Mob3JkZXIuc2hpcHBpbmdfYWRkcmVzcywgb3JkZXIpLFxuICAgIHBheW1lbnQ6IHRyYW5zZm9ybVBheW1lbnQocGF5bWVudCwgb3JkZXIpLFxuICAgIGl0ZW1zOiBpbnZvaWNlLml0ZW1zLm1hcChpdGVtID0+IHRyYW5zZm9ybUludm9pY2VJdGVtKGl0ZW0sIG9yZGVyKSksXG4gICAgc2hpcHBpbmdfbWV0aG9kOiBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtQ3JlZGl0SXRlbShjcmVkaXRJdGVtOiBNYWdlbnRvT3JkZXJDcmVkaXRJdGVtLCBvcmRlcjogTWFnZW50b09yZGVyKTogRGFmZk9yZGVyU2hpcG1lbnRJdGVtIHtcbiAgcmV0dXJuIHtcbiAgICBpdGVtOiB0cmFuc2Zvcm1JdGVtKGNyZWRpdEl0ZW0ub3JkZXJfaXRlbSwgb3JkZXIsIGNyZWRpdEl0ZW0ucXVhbnRpdHlfcmVmdW5kZWQpLFxuICAgIHF0eTogY3JlZGl0SXRlbS5xdWFudGl0eV9yZWZ1bmRlZFxuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUNyZWRpdChjcmVkaXQ6IE1hZ2VudG9PcmRlckNyZWRpdCwgb3JkZXI6IE1hZ2VudG9PcmRlcik6IERhZmZPcmRlckludm9pY2Uge1xuICByZXR1cm4ge1xuICAgIHRvdGFsczogdHJhbnNmb3JtVG90YWxzKGNyZWRpdC50b3RhbCksXG4gICAgYmlsbGluZ19hZGRyZXNzOiB0cmFuc2Zvcm1BZGRyZXNzKG9yZGVyLmJpbGxpbmdfYWRkcmVzcywgb3JkZXIpLFxuICAgIHNoaXBwaW5nX2FkZHJlc3M6IHRyYW5zZm9ybUFkZHJlc3Mob3JkZXIuc2hpcHBpbmdfYWRkcmVzcywgb3JkZXIpLFxuICAgIHBheW1lbnQ6IHRyYW5zZm9ybVBheW1lbnQob3JkZXIucGF5bWVudF9tZXRob2RzWzBdLCBvcmRlciksXG4gICAgaXRlbXM6IGNyZWRpdC5pdGVtcy5tYXAoaXRlbSA9PiB0cmFuc2Zvcm1DcmVkaXRJdGVtKGl0ZW0sIG9yZGVyKSksXG4gICAgc2hpcHBpbmdfbWV0aG9kOiBudWxsXG4gIH1cbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBNYWdlbnRvT3JkZXIgZnJvbSB0aGUgbWFnZW50byBvcmRlciBxdWVyeSBpbnRvIGEgRGFmZk9yZGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGFmZk1hZ2VudG9UcmFuc2Zvcm1PcmRlcihvcmRlcjogTWFnZW50b09yZGVyKTogRGFmZk9yZGVyIHtcbiAgcmV0dXJuIHtcbiAgICBleHRyYV9hdHRyaWJ1dGVzOiBvcmRlcixcblxuICAgIGlkOiBvcmRlci5udW1iZXIsXG4gICAgY3VzdG9tZXJfaWQ6IG51bGwsXG4gICAgdXBkYXRlZF9hdDogbnVsbCxcbiAgICBjcmVhdGVkX2F0OiBvcmRlci5vcmRlcl9kYXRlLFxuICAgIHN0YXR1czogb3JkZXIuc3RhdHVzLFxuXG4gICAgdG90YWxzOiB0cmFuc2Zvcm1Ub3RhbHMob3JkZXIudG90YWwpLFxuICAgIGFwcGxpZWRfY29kZXM6IG9yZGVyLnRvdGFsLmRpc2NvdW50cy5tYXAodHJhbnNmb3JtQ291cG9uRGlzY291bnQpLFxuICAgIGl0ZW1zOiBvcmRlci5pdGVtcy5tYXAoaXRlbSA9PiB0cmFuc2Zvcm1JdGVtKGl0ZW0sIG9yZGVyLCBpdGVtLnF1YW50aXR5X29yZGVyZWQpKSxcbiAgICBiaWxsaW5nX2FkZHJlc3NlczogW1xuICAgICAgdHJhbnNmb3JtQWRkcmVzcyhvcmRlci5iaWxsaW5nX2FkZHJlc3MsIG9yZGVyKVxuICAgIF0sXG4gICAgc2hpcHBpbmdfYWRkcmVzc2VzOiBbXG4gICAgICB0cmFuc2Zvcm1BZGRyZXNzKG9yZGVyLnNoaXBwaW5nX2FkZHJlc3MsIG9yZGVyKVxuICAgIF0sXG4gICAgc2hpcG1lbnRzOiBvcmRlci5zaGlwbWVudHMubWFwKHNoaXBtZW50ID0+IHRyYW5zZm9ybVNoaXBtZW50KHNoaXBtZW50LCBvcmRlcikpLFxuICAgIHBheW1lbnQ6IHRyYW5zZm9ybVBheW1lbnQob3JkZXIucGF5bWVudF9tZXRob2RzWzBdLCBvcmRlciksXG4gICAgLy8gVE9ETzogZmluZCBvdXQgaWYgdGhlIGluZGV4IGlzIHRoZSBjb3JyZWN0IHBheW1lbnQgZm9yIGludm9pY2VcbiAgICBpbnZvaWNlczogb3JkZXIuaW52b2ljZXMubWFwKChpbnZvaWNlLCBpbmRleCkgPT4gdHJhbnNmb3JtSW52b2ljZShpbnZvaWNlLCBvcmRlciwgb3JkZXIucGF5bWVudF9tZXRob2RzW2luZGV4XSkpLFxuICAgIGNyZWRpdHM6IG9yZGVyLmNyZWRpdF9tZW1vcy5tYXAoY3JlZGl0ID0+IHRyYW5zZm9ybUNyZWRpdChjcmVkaXQsIG9yZGVyKSksXG4gIH1cbn1cbiJdfQ==