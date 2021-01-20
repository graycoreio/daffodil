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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvb3JkZXIvZHJpdmVyL21hZ2VudG8vMi40LjEvIiwic291cmNlcyI6WyJ0cmFuc2Zvcm1zL3Jlc3BvbnNlcy9vcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RCxPQUFPLEVBVUwsc0JBQXNCLEVBRXRCLGlCQUFpQixFQUdsQixNQUFNLGlCQUFpQixDQUFDO0FBZXpCLE9BQU8sRUFBd0Ysb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7QUFJL0osU0FBUyxlQUFlLENBQUMsTUFBeUI7SUFDaEQsT0FBTztRQUNMO1lBQ0UsS0FBSyxFQUFFLGFBQWE7WUFDcEIsSUFBSSxFQUFFLHNCQUFzQixDQUFDLFVBQVU7WUFDdkMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSztZQUMvQixVQUFVLEVBQUUsQ0FBQztTQUNkO1FBQ0Q7WUFDRSxLQUFLLEVBQUUsVUFBVTtZQUNqQixJQUFJLEVBQUUsc0JBQXNCLENBQUMsUUFBUTtZQUNyQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLO1lBQzVCLFVBQVUsRUFBRSxDQUFDO1NBQ2Q7UUFDRDtZQUNFLEtBQUssRUFBRSxVQUFVO1lBQ2pCLElBQUksRUFBRSxzQkFBc0IsQ0FBQyxRQUFRO1lBQ3JDLEtBQUssRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUs7WUFDbEMsVUFBVSxFQUFFLENBQUM7U0FDZDtRQUNEO1lBQ0UsS0FBSyxFQUFFLEtBQUs7WUFDWixJQUFJLEVBQUUsc0JBQXNCLENBQUMsR0FBRztZQUNoQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLO1lBQzdCLFVBQVUsRUFBRSxDQUFDO1NBQ2Q7UUFDRDtZQUNFLEtBQUssRUFBRSxVQUFVO1lBQ2pCLElBQUksRUFBRSxz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QUFFLEtBQUssRUFBRSxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUM7UUFDaEgsT0FBTyxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBQztLQUMxRSxDQUFBO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRhZmZBZGQsIGRhZmZTdWJ0cmFjdCB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlJztcbmltcG9ydCB7XG4gIERhZmZPcmRlcixcbiAgRGFmZk9yZGVyVG90YWwsXG4gIERhZmZPcmRlckl0ZW0sXG4gIERhZmZPcmRlckFkZHJlc3MsXG4gIERhZmZPcmRlclNoaXBtZW50LFxuICBEYWZmT3JkZXJTaGlwbWVudEl0ZW0sXG4gIERhZmZPcmRlclNoaXBtZW50VHJhY2tpbmcsXG4gIERhZmZPcmRlclBheW1lbnQsXG4gIERhZmZPcmRlckludm9pY2UsXG4gIERhZmZPcmRlclRvdGFsVHlwZUVudW0sXG4gIERhZmZDb21wb3NpdGVPcmRlckl0ZW1PcHRpb24sXG4gIERhZmZPcmRlckl0ZW1UeXBlLFxuICBEYWZmQ29uZmlndXJhYmxlT3JkZXJJdGVtQXR0cmlidXRlLFxuICBEYWZmT3JkZXJDb3Vwb25cbn0gZnJvbSAnQGRhZmZvZGlsL29yZGVyJztcblxuaW1wb3J0IHtcbiAgTWFnZW50b09yZGVyLFxuICBNYWdlbnRvT3JkZXJJdGVtLFxuICBNYWdlbnRvT3JkZXJTaGlwbWVudCxcbiAgTWFnZW50b09yZGVyQWRkcmVzcyxcbiAgTWFnZW50b09yZGVyU2hpcG1lbnRJdGVtLFxuICBNYWdlbnRvT3JkZXJTaGlwbWVudFRyYWNraW5nLFxuICBNYWdlbnRvT3JkZXJQYXltZW50LFxuICBNYWdlbnRvT3JkZXJJbnZvaWNlXG59IGZyb20gJy4uLy4uL21vZGVscy9yZXNwb25zZXMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBNYWdlbnRvT3JkZXJUb3RhbCB9IGZyb20gJy4uLy4uL21vZGVscy9yZXNwb25zZXMvb3JkZXItdG90YWwnO1xuaW1wb3J0IHsgTWFnZW50b09yZGVyQ3JlZGl0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlcy9vcmRlci1jcmVkaXQnO1xuaW1wb3J0IHsgTWFnZW50b09yZGVyQ3JlZGl0SXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9yZXNwb25zZXMvb3JkZXItY3JlZGl0LWl0ZW0nO1xuaW1wb3J0IHsgTWFnZW50b09yZGVyQnVuZGxlSXRlbSwgTWFnZW50b09yZGVyQnVuZGxlSXRlbVNlbGVjdGVkT3B0aW9uLCBNYWdlbnRvT3JkZXJJdGVtT3B0aW9uLCBNYWdlbnRvT3JkZXJJdGVtVHlwZSB9IGZyb20gJy4uLy4uL21vZGVscy9yZXNwb25zZXMvb3JkZXItaXRlbSc7XG5pbXBvcnQgeyBNYWdlbnRvRGlzY291bnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVzcG9uc2VzL2Rpc2NvdW50JztcbmltcG9ydCB7IE1hZ2VudG9PcmRlckludm9pY2VJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlcy9vcmRlci1pbnZvaWNlLWl0ZW0nO1xuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Ub3RhbHModG90YWxzOiBNYWdlbnRvT3JkZXJUb3RhbCk6IERhZmZPcmRlclRvdGFsW10ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnR3JhbmQgVG90YWwnLFxuICAgICAgdHlwZTogRGFmZk9yZGVyVG90YWxUeXBlRW51bS5HcmFuZFRvdGFsLFxuICAgICAgdmFsdWU6IHRvdGFscy5ncmFuZF90b3RhbC52YWx1ZSxcbiAgICAgIHNvcnRfb3JkZXI6IDFcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnU3VidG90YWwnLFxuICAgICAgdHlwZTogRGFmZk9yZGVyVG90YWxUeXBlRW51bS5TdWJ0b3RhbCxcbiAgICAgIHZhbHVlOiB0b3RhbHMuc3VidG90YWwudmFsdWUsXG4gICAgICBzb3J0X29yZGVyOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ1NoaXBwaW5nJyxcbiAgICAgIHR5cGU6IERhZmZPcmRlclRvdGFsVHlwZUVudW0uU2hpcHBpbmcsXG4gICAgICB2YWx1ZTogdG90YWxzLnRvdGFsX3NoaXBwaW5nLnZhbHVlLFxuICAgICAgc29ydF9vcmRlcjogMlxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdUYXgnLFxuICAgICAgdHlwZTogRGFmZk9yZGVyVG90YWxUeXBlRW51bS5UYXgsXG4gICAgICB2YWx1ZTogdG90YWxzLnRvdGFsX3RheC52YWx1ZSxcbiAgICAgIHNvcnRfb3JkZXI6IDNcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnRGlzY291bnQnLFxuICAgICAgdHlwZTogRGFmZk9yZGVyVG90YWxUeXBlRW51bS5EaXNjb3VudCxcbiAgICAgIHZhbHVlOiB0b3RhbHMuZGlzY291bnRzLnJlZHVjZSgoYWNjLCBkaXNjb3VudCkgPT4gZGFmZkFkZChhY2MsIGRpc2NvdW50LmFtb3VudC52YWx1ZSksIDApLFxuICAgICAgc29ydF9vcmRlcjogNFxuICAgIH1cbiAgXVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Db3Vwb25EaXNjb3VudChkaXNjb3VudDogTWFnZW50b0Rpc2NvdW50KTogRGFmZk9yZGVyQ291cG9uIHtcbiAgcmV0dXJuIHtcbiAgICBjb2RlOiBkaXNjb3VudC5sYWJlbCxcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Db25maWd1cmFibGVPcHRpb24ob3B0aW9uOiBNYWdlbnRvT3JkZXJJdGVtT3B0aW9uKTogRGFmZkNvbmZpZ3VyYWJsZU9yZGVySXRlbUF0dHJpYnV0ZSB7XG4gIHJldHVybiB7XG4gICAgYXR0cmlidXRlX2xhYmVsOiBvcHRpb24ubGFiZWwsXG5cdCAgdmFsdWVfbGFiZWw6IG9wdGlvbi52YWx1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUJ1bmRsZU9wdGlvbihvcHRpb246IE1hZ2VudG9PcmRlckJ1bmRsZUl0ZW1TZWxlY3RlZE9wdGlvbik6IERhZmZDb21wb3NpdGVPcmRlckl0ZW1PcHRpb24ge1xuICByZXR1cm4ge1xuICAgIG9wdGlvbl9sYWJlbDogb3B0aW9uLmxhYmVsLFxuXHQgIHZhbHVlX2xhYmVsOiBvcHRpb24udmFsdWVzICYmIG9wdGlvbi52YWx1ZXNbMF0gJiYgb3B0aW9uLnZhbHVlc1swXS5wcm9kdWN0X25hbWVcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1BZGRpdGlvbmFsSXRlbUZpZWxkcyhpdGVtOiBNYWdlbnRvT3JkZXJJdGVtKSB7XG4gIHN3aXRjaCAoaXRlbS5wcm9kdWN0X3R5cGUpIHtcbiAgICBjYXNlIE1hZ2VudG9PcmRlckl0ZW1UeXBlLkJ1bmRsZTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IERhZmZPcmRlckl0ZW1UeXBlLkNvbXBvc2l0ZSxcbiAgICAgICAgb3B0aW9uczogKGl0ZW0gYXMgTWFnZW50b09yZGVyQnVuZGxlSXRlbSkuYnVuZGxlX29wdGlvbnMubWFwKHRyYW5zZm9ybUJ1bmRsZU9wdGlvbilcbiAgICAgIH1cbiAgICBjYXNlIE1hZ2VudG9PcmRlckl0ZW1UeXBlLkNvbmZpZ3VyYWJsZTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IERhZmZPcmRlckl0ZW1UeXBlLkNvbmZpZ3VyYWJsZSxcbiAgICAgICAgYXR0cmlidXRlczogaXRlbS5zZWxlY3RlZF9vcHRpb25zLm1hcCh0cmFuc2Zvcm1Db25maWd1cmFibGVPcHRpb24pXG4gICAgICB9XG4gICAgY2FzZSBNYWdlbnRvT3JkZXJJdGVtVHlwZS5TaW1wbGU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBEYWZmT3JkZXJJdGVtVHlwZS5TaW1wbGVcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHt9XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtSXRlbShpdGVtOiBNYWdlbnRvT3JkZXJJdGVtLCBvcmRlcjogTWFnZW50b09yZGVyLCBxdHk6IG51bWJlcik6IERhZmZPcmRlckl0ZW0ge1xuICBjb25zdCBkaXNjb3VudCA9IGl0ZW0uZGlzY291bnRzLnJlZHVjZSgoYWNjLCBkKSA9PiBkYWZmQWRkKGFjYywgZC5hbW91bnQudmFsdWUpLCAwKTtcbiAgY29uc3Qgcm93VG90YWwgPSBxdHkgKiBpdGVtLnByb2R1Y3Rfc2FsZV9wcmljZS52YWx1ZTtcbiAgY29uc3Qgcm93VG90YWxXaXRoRGlzY291bnQgPSBxdHkgKiBkYWZmU3VidHJhY3QoaXRlbS5wcm9kdWN0X3NhbGVfcHJpY2UudmFsdWUsIGRpc2NvdW50KTtcblxuICByZXR1cm4ge1xuICAgIHR5cGU6IERhZmZPcmRlckl0ZW1UeXBlLlNpbXBsZSxcbiAgICBpdGVtX2lkOiBudWxsLFxuICAgIHF0eV9vcmRlcmVkOiBpdGVtLnF1YW50aXR5X29yZGVyZWQsXG4gICAgcXR5X2NhbmNlbGVkOiBpdGVtLnF1YW50aXR5X2NhbmNlbGVkLFxuICAgIHF0eV9mdWxmaWxsZWQ6IGl0ZW0ucXVhbnRpdHlfc2hpcHBlZCxcbiAgICBxdHksXG4gICAgaW1hZ2U6IHtcbiAgICAgIHVybDogaXRlbS5wcm9kdWN0X3VybF9rZXksXG4gICAgICBpZDogbnVsbCxcbiAgICAgIGxhYmVsOiBudWxsXG4gICAgfSxcbiAgICBvcmRlcl9pZDogb3JkZXIuaWQsXG4gICAgY3JlYXRlZF9hdDogbnVsbCxcbiAgICB1cGRhdGVkX2F0OiBudWxsLFxuICAgIHByb2R1Y3RfaWQ6IG51bGwsXG4gICAgcGFyZW50X2l0ZW1faWQ6IG51bGwsXG4gICAgc2t1OiBpdGVtLnByb2R1Y3Rfc2t1LFxuICAgIG5hbWU6IGl0ZW0ucHJvZHVjdF9uYW1lLFxuICAgIHdlaWdodDogbnVsbCxcbiAgICBwcmljZTogaXRlbS5wcm9kdWN0X3NhbGVfcHJpY2UudmFsdWUsXG4gICAgZGlzY291bnRfcGVyY2VudDogTWF0aC5mbG9vcihkaXNjb3VudCAvIGl0ZW0ucHJvZHVjdF9zYWxlX3ByaWNlLnZhbHVlICogMTAwKSxcbiAgICBkaXNjb3VudF9hbW91bnQ6IGRpc2NvdW50LFxuICAgIHRheF9wZXJjZW50OiBudWxsLFxuICAgIHRheF9hbW91bnQ6IG51bGwsXG4gICAgcm93X3RvdGFsOiByb3dUb3RhbCxcbiAgICByb3dfdG90YWxfd2l0aF9kaXNjb3VudDogcm93VG90YWxXaXRoRGlzY291bnQsXG4gICAgcm93X3dlaWdodDogbnVsbCxcbiAgICB0YXhfYmVmb3JlX2Rpc2NvdW50OiBudWxsLFxuICAgIC4uLnRyYW5zZm9ybUFkZGl0aW9uYWxJdGVtRmllbGRzKGl0ZW0pXG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtQWRkcmVzcyhhZGRyZXNzOiBNYWdlbnRvT3JkZXJBZGRyZXNzLCBvcmRlcjogTWFnZW50b09yZGVyKTogRGFmZk9yZGVyQWRkcmVzcyB7XG4gIHJldHVybiB7XG4gICAgb3JkZXJfaWQ6IG9yZGVyLmlkLFxuICAgIHByZWZpeDogYWRkcmVzcy5wcmVmaXgsXG4gICAgc3VmZml4OiBhZGRyZXNzLnN1ZmZpeCxcbiAgICBmaXJzdG5hbWU6IGFkZHJlc3MuZmlyc3RuYW1lLFxuICAgIG1pZGRsZW5hbWU6IGFkZHJlc3MubWlkZGxlbmFtZSxcbiAgICBsYXN0bmFtZTogYWRkcmVzcy5sYXN0bmFtZSxcbiAgICB0ZWxlcGhvbmU6IGFkZHJlc3MudGVsZXBob25lLFxuICAgIGVtYWlsOiBudWxsLFxuICAgIHN0cmVldDogYWRkcmVzcy5zdHJlZXRbMF0sXG4gICAgc3RyZWV0MjogYWRkcmVzcy5zdHJlZXRbMV0sXG4gICAgY2l0eTogYWRkcmVzcy5jaXR5LFxuICAgIHJlZ2lvbjogYWRkcmVzcy5yZWdpb25faWQsXG4gICAgY291bnRyeTogYWRkcmVzcy5jb3VudHJ5X2NvZGUsXG4gICAgcG9zdGNvZGU6IGFkZHJlc3MucG9zdGNvZGVcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1TaGlwbWVudEl0ZW0oc2hpcG1lbnRJdGVtOiBNYWdlbnRvT3JkZXJTaGlwbWVudEl0ZW0sIG9yZGVyOiBNYWdlbnRvT3JkZXIpOiBEYWZmT3JkZXJTaGlwbWVudEl0ZW0ge1xuICByZXR1cm4ge1xuICAgIGl0ZW06IHRyYW5zZm9ybUl0ZW0oc2hpcG1lbnRJdGVtLm9yZGVyX2l0ZW0sIG9yZGVyLCBzaGlwbWVudEl0ZW0ucXVhbnRpdHlfc2hpcHBlZCksXG4gICAgcXR5OiBzaGlwbWVudEl0ZW0ucXVhbnRpdHlfc2hpcHBlZFxuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVNoaXBtZW50VHJhY2tpbmcodHJhY2tpbmc6IE1hZ2VudG9PcmRlclNoaXBtZW50VHJhY2tpbmcpOiBEYWZmT3JkZXJTaGlwbWVudFRyYWNraW5nIHtcbiAgcmV0dXJuIHtcbiAgICB0cmFja2luZ19udW1iZXI6IHRyYWNraW5nLm51bWJlcixcbiAgICB0cmFja2luZ191cmw6IG51bGwsXG4gICAgY2FycmllcjogdHJhY2tpbmcuY2FycmllcixcbiAgICB0aXRsZTogdHJhY2tpbmcudGl0bGUsXG4gICAgY2Fycmllcl9sb2dvOiBudWxsLFxuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVNoaXBtZW50KHNoaXBtZW50OiBNYWdlbnRvT3JkZXJTaGlwbWVudCwgb3JkZXI6IE1hZ2VudG9PcmRlcik6IERhZmZPcmRlclNoaXBtZW50IHtcbiAgcmV0dXJuIHtcbiAgICBjYXJyaWVyOiBvcmRlci5jYXJyaWVyLFxuICAgIGNhcnJpZXJfdGl0bGU6IG51bGwsXG4gICAgY29kZTogbnVsbCxcbiAgICBtZXRob2Q6IG9yZGVyLnNoaXBwaW5nX21ldGhvZCxcbiAgICBtZXRob2RfZGVzY3JpcHRpb246IG51bGwsXG4gICAgdHJhY2tpbmc6IHNoaXBtZW50LnRyYWNraW5nLm1hcCh0cmFuc2Zvcm1TaGlwbWVudFRyYWNraW5nKSxcbiAgICBpdGVtczogc2hpcG1lbnQuaXRlbXMubWFwKGl0ZW0gPT4gdHJhbnNmb3JtU2hpcG1lbnRJdGVtKGl0ZW0sIG9yZGVyKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1QYXltZW50KHBheW1lbnQ6IE1hZ2VudG9PcmRlclBheW1lbnQsIG9yZGVyOiBNYWdlbnRvT3JkZXIpOiBEYWZmT3JkZXJQYXltZW50IHtcbiAgY29uc3QgZmluZEFkZGl0aW9uYWxEYXRhID0ga2V5ID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHBheW1lbnQuYWRkaXRpb25hbF9kYXRhLmZpbmRJbmRleCgoe25hbWV9KSA9PiBuYW1lID09PSBrZXkpO1xuXG4gICAgcmV0dXJuIGluZGV4ID4gLTEgPyBwYXltZW50LmFkZGl0aW9uYWxfZGF0YVtpbmRleF0udmFsdWUgOiBudWxsXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXltZW50X2lkOiBudWxsLFxuICAgIG9yZGVyX2lkOiBvcmRlci5pZCxcbiAgICBjcmVhdGVkX2F0OiBudWxsLFxuICAgIHVwZGF0ZWRfYXQ6IG51bGwsXG4gICAgbWV0aG9kOiBwYXltZW50LnR5cGUsXG4gICAgY2NfdHlwZTogZmluZEFkZGl0aW9uYWxEYXRhKCdjY190eXBlJyksXG4gICAgY2NfbGFzdDQ6IGZpbmRBZGRpdGlvbmFsRGF0YSgnY2NfbGFzdDQnKSxcbiAgICBjY19vd25lcjogZmluZEFkZGl0aW9uYWxEYXRhKCdjY19vd25lcicpLFxuICAgIGNjX2V4cF9tb250aDogZmluZEFkZGl0aW9uYWxEYXRhKCdjY19leHBfbW9udGgnKSxcbiAgICBjY19leHBfeWVhcjogZmluZEFkZGl0aW9uYWxEYXRhKCdjY19leHBfeWVhcicpXG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtSW52b2ljZUl0ZW0oaW52b2ljZUl0ZW06IE1hZ2VudG9PcmRlckludm9pY2VJdGVtLCBvcmRlcjogTWFnZW50b09yZGVyKTogRGFmZk9yZGVyU2hpcG1lbnRJdGVtIHtcbiAgcmV0dXJuIHtcbiAgICBpdGVtOiB0cmFuc2Zvcm1JdGVtKGludm9pY2VJdGVtLm9yZGVyX2l0ZW0sIG9yZGVyLCBpbnZvaWNlSXRlbS5xdWFudGl0eV9pbnZvaWNlZCksXG4gICAgcXR5OiBpbnZvaWNlSXRlbS5xdWFudGl0eV9pbnZvaWNlZFxuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUludm9pY2UoaW52b2ljZTogTWFnZW50b09yZGVySW52b2ljZSwgb3JkZXI6IE1hZ2VudG9PcmRlciwgcGF5bWVudDogTWFnZW50b09yZGVyUGF5bWVudCk6IERhZmZPcmRlckludm9pY2Uge1xuICByZXR1cm4ge1xuICAgIHRvdGFsczogdHJhbnNmb3JtVG90YWxzKGludm9pY2UudG90YWwpLFxuICAgIGJpbGxpbmdfYWRkcmVzczogdHJhbnNmb3JtQWRkcmVzcyhvcmRlci5iaWxsaW5nX2FkZHJlc3MsIG9yZGVyKSxcbiAgICBzaGlwcGluZ19hZGRyZXNzOiB0cmFuc2Zvcm1BZGRyZXNzKG9yZGVyLnNoaXBwaW5nX2FkZHJlc3MsIG9yZGVyKSxcbiAgICBwYXltZW50OiB0cmFuc2Zvcm1QYXltZW50KHBheW1lbnQsIG9yZGVyKSxcbiAgICBpdGVtczogaW52b2ljZS5pdGVtcy5tYXAoaXRlbSA9PiB0cmFuc2Zvcm1JbnZvaWNlSXRlbShpdGVtLCBvcmRlcikpLFxuICAgIHNoaXBwaW5nX21ldGhvZDogbnVsbFxuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUNyZWRpdEl0ZW0oY3JlZGl0SXRlbTogTWFnZW50b09yZGVyQ3JlZGl0SXRlbSwgb3JkZXI6IE1hZ2VudG9PcmRlcik6IERhZmZPcmRlclNoaXBtZW50SXRlbSB7XG4gIHJldHVybiB7XG4gICAgaXRlbTogdHJhbnNmb3JtSXRlbShjcmVkaXRJdGVtLm9yZGVyX2l0ZW0sIG9yZGVyLCBjcmVkaXRJdGVtLnF1YW50aXR5X3JlZnVuZGVkKSxcbiAgICBxdHk6IGNyZWRpdEl0ZW0ucXVhbnRpdHlfcmVmdW5kZWRcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1DcmVkaXQoY3JlZGl0OiBNYWdlbnRvT3JkZXJDcmVkaXQsIG9yZGVyOiBNYWdlbnRvT3JkZXIpOiBEYWZmT3JkZXJJbnZvaWNlIHtcbiAgcmV0dXJuIHtcbiAgICB0b3RhbHM6IHRyYW5zZm9ybVRvdGFscyhjcmVkaXQudG90YWwpLFxuICAgIGJpbGxpbmdfYWRkcmVzczogdHJhbnNmb3JtQWRkcmVzcyhvcmRlci5iaWxsaW5nX2FkZHJlc3MsIG9yZGVyKSxcbiAgICBzaGlwcGluZ19hZGRyZXNzOiB0cmFuc2Zvcm1BZGRyZXNzKG9yZGVyLnNoaXBwaW5nX2FkZHJlc3MsIG9yZGVyKSxcbiAgICBwYXltZW50OiB0cmFuc2Zvcm1QYXltZW50KG9yZGVyLnBheW1lbnRfbWV0aG9kc1swXSwgb3JkZXIpLFxuICAgIGl0ZW1zOiBjcmVkaXQuaXRlbXMubWFwKGl0ZW0gPT4gdHJhbnNmb3JtQ3JlZGl0SXRlbShpdGVtLCBvcmRlcikpLFxuICAgIHNoaXBwaW5nX21ldGhvZDogbnVsbFxuICB9XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgTWFnZW50b09yZGVyIGZyb20gdGhlIG1hZ2VudG8gb3JkZXIgcXVlcnkgaW50byBhIERhZmZPcmRlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRhZmZNYWdlbnRvVHJhbnNmb3JtT3JkZXIob3JkZXI6IE1hZ2VudG9PcmRlcik6IERhZmZPcmRlciB7XG4gIHJldHVybiB7XG4gICAgZXh0cmFfYXR0cmlidXRlczogb3JkZXIsXG5cbiAgICBpZDogb3JkZXIubnVtYmVyLFxuICAgIGN1c3RvbWVyX2lkOiBudWxsLFxuICAgIHVwZGF0ZWRfYXQ6IG51bGwsXG4gICAgY3JlYXRlZF9hdDogb3JkZXIub3JkZXJfZGF0ZSxcbiAgICBzdGF0dXM6IG9yZGVyLnN0YXR1cyxcblxuICAgIHRvdGFsczogdHJhbnNmb3JtVG90YWxzKG9yZGVyLnRvdGFsKSxcbiAgICBhcHBsaWVkX2NvZGVzOiBvcmRlci50b3RhbC5kaXNjb3VudHMubWFwKHRyYW5zZm9ybUNvdXBvbkRpc2NvdW50KSxcbiAgICBpdGVtczogb3JkZXIuaXRlbXMubWFwKGl0ZW0gPT4gdHJhbnNmb3JtSXRlbShpdGVtLCBvcmRlciwgaXRlbS5xdWFudGl0eV9vcmRlcmVkKSksXG4gICAgYmlsbGluZ19hZGRyZXNzZXM6IFtcbiAgICAgIHRyYW5zZm9ybUFkZHJlc3Mob3JkZXIuYmlsbGluZ19hZGRyZXNzLCBvcmRlcilcbiAgICBdLFxuICAgIHNoaXBwaW5nX2FkZHJlc3NlczogW1xuICAgICAgdHJhbnNmb3JtQWRkcmVzcyhvcmRlci5zaGlwcGluZ19hZGRyZXNzLCBvcmRlcilcbiAgICBdLFxuICAgIHNoaXBtZW50czogb3JkZXIuc2hpcG1lbnRzLm1hcChzaGlwbWVudCA9PiB0cmFuc2Zvcm1TaGlwbWVudChzaGlwbWVudCwgb3JkZXIpKSxcbiAgICBwYXltZW50OiB0cmFuc2Zvcm1QYXltZW50KG9yZGVyLnBheW1lbnRfbWV0aG9kc1swXSwgb3JkZXIpLFxuICAgIC8vIFRPRE86IGZpbmQgb3V0IGlmIHRoZSBpbmRleCBpcyB0aGUgY29ycmVjdCBwYXltZW50IGZvciBpbnZvaWNlXG4gICAgaW52b2ljZXM6IG9yZGVyLmludm9pY2VzLm1hcCgoaW52b2ljZSwgaW5kZXgpID0+IHRyYW5zZm9ybUludm9pY2UoaW52b2ljZSwgb3JkZXIsIG9yZGVyLnBheW1lbnRfbWV0aG9kc1tpbmRleF0pKSxcbiAgICBjcmVkaXRzOiBvcmRlci5jcmVkaXRfbWVtb3MubWFwKGNyZWRpdCA9PiB0cmFuc2Zvcm1DcmVkaXQoY3JlZGl0LCBvcmRlcikpLFxuICB9XG59XG4iXX0=