/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffOrderTotalTypeEnum, DaffOrderItemType } from '@daffodil/order';
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
export function daffMagentoTransformOrder(order) {
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
        function (code) { return ({ code: code }); })),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvb3JkZXIvZHJpdmVyL21hZ2VudG8vMi40LjAvIiwic291cmNlcyI6WyJ0cmFuc2Zvcm1zL3Jlc3BvbnNlcy9vcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQVVMLHNCQUFzQixFQUN0QixpQkFBaUIsRUFDbEIsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7QUFhekIsU0FBUyxlQUFlLENBQUMsTUFNeEI7SUFDQyxPQUFPO1FBQ0w7WUFDRSxLQUFLLEVBQUUsYUFBYTtZQUNwQixJQUFJLEVBQUUsc0JBQXNCLENBQUMsVUFBVTtZQUN2QyxLQUFLLEVBQUUsTUFBTSxDQUFDLFdBQVc7WUFDekIsVUFBVSxFQUFFLENBQUM7U0FDZDtRQUNEO1lBQ0UsS0FBSyxFQUFFLFVBQVU7WUFDakIsSUFBSSxFQUFFLHNCQUFzQixDQUFDLFFBQVE7WUFDckMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3RCLFVBQVUsRUFBRSxDQUFDO1NBQ2Q7UUFDRDtZQUNFLEtBQUssRUFBRSxVQUFVO1lBQ2pCLElBQUksRUFBRSxzQkFBc0IsQ0FBQyxRQUFRO1lBQ3JDLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN0QixVQUFVLEVBQUUsQ0FBQztTQUNkO1FBQ0Q7WUFDRSxLQUFLLEVBQUUsS0FBSztZQUNaLElBQUksRUFBRSxzQkFBc0IsQ0FBQyxHQUFHO1lBQ2hDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRztZQUNqQixVQUFVLEVBQUUsQ0FBQztTQUNkO1FBQ0Q7WUFDRSxLQUFLLEVBQUUsVUFBVTtZQUNqQixJQUFJLEVBQUUsc0JBQXNCLENBQUMsUUFBUTtZQUNyQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDdEIsVUFBVSxFQUFFLENBQUM7U0FDZDtLQUNGLENBQUE7QUFDSCxDQUFDOzs7OztBQUVELFNBQVMsYUFBYSxDQUFDLElBQThCO0lBQ25ELE9BQU87UUFDTCxP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Q0wsZ0JBQWdCLEVBQUUsS0FBSztRQUV2QixFQUFFLEVBQUUsS0FBSyxDQUFDLFlBQVk7UUFDdEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1FBQzlCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtRQUM1QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7UUFDNUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1FBRXBCLE1BQU0sRUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQzlCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsRUFBQyxJQUFJLE1BQUEsRUFBQyxDQUFDLEVBQVIsQ0FBUSxFQUFDO1FBQ3hELEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7UUFDckMsaUJBQWlCLEVBQUU7WUFDakIsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztTQUN4QztRQUNELGtCQUFrQixFQUFFO1lBQ2xCLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztTQUN6QztRQUNELFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztRQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUN4QyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7UUFDOUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0tBQzdDLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGFmZk9yZGVyLFxuICBEYWZmT3JkZXJUb3RhbCxcbiAgRGFmZk9yZGVySXRlbSxcbiAgRGFmZk9yZGVyQWRkcmVzcyxcbiAgRGFmZk9yZGVyU2hpcG1lbnQsXG4gIERhZmZPcmRlclNoaXBtZW50SXRlbSxcbiAgRGFmZk9yZGVyU2hpcG1lbnRUcmFja2luZyxcbiAgRGFmZk9yZGVyUGF5bWVudCxcbiAgRGFmZk9yZGVySW52b2ljZSxcbiAgRGFmZk9yZGVyVG90YWxUeXBlRW51bSxcbiAgRGFmZk9yZGVySXRlbVR5cGVcbn0gZnJvbSAnQGRhZmZvZGlsL29yZGVyJztcblxuaW1wb3J0IHtcbiAgTWFnZW50b0dyYXljb3JlT3JkZXIsXG4gIE1hZ2VudG9HcmF5Y29yZU9yZGVySXRlbSxcbiAgTWFnZW50b0dyYXljb3JlT3JkZXJTaGlwbWVudCxcbiAgTWFnZW50b0dyYXljb3JlT3JkZXJBZGRyZXNzLFxuICBNYWdlbnRvR3JheWNvcmVPcmRlclNoaXBtZW50SXRlbSxcbiAgTWFnZW50b0dyYXljb3JlT3JkZXJTaGlwbWVudFRyYWNraW5nLFxuICBNYWdlbnRvR3JheWNvcmVPcmRlclBheW1lbnQsXG4gIE1hZ2VudG9HcmF5Y29yZU9yZGVySW52b2ljZVxufSBmcm9tICcuLi8uLi9tb2RlbHMvcmVzcG9uc2VzL3B1YmxpY19hcGknO1xuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Ub3RhbHModG90YWxzOiB7XG4gIGdyYW5kX3RvdGFsOiBudW1iZXIsXG4gIHN1YnRvdGFsOiBudW1iZXIsXG4gIHNoaXBwaW5nOiBudW1iZXIsXG4gIGRpc2NvdW50OiBudW1iZXIsXG4gIHRheDogbnVtYmVyLFxufSk6IERhZmZPcmRlclRvdGFsW10ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnR3JhbmQgVG90YWwnLFxuICAgICAgdHlwZTogRGFmZk9yZGVyVG90YWxUeXBlRW51bS5HcmFuZFRvdGFsLFxuICAgICAgdmFsdWU6IHRvdGFscy5ncmFuZF90b3RhbCxcbiAgICAgIHNvcnRfb3JkZXI6IDFcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnU3VidG90YWwnLFxuICAgICAgdHlwZTogRGFmZk9yZGVyVG90YWxUeXBlRW51bS5TdWJ0b3RhbCxcbiAgICAgIHZhbHVlOiB0b3RhbHMuc3VidG90YWwsXG4gICAgICBzb3J0X29yZGVyOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ1NoaXBwaW5nJyxcbiAgICAgIHR5cGU6IERhZmZPcmRlclRvdGFsVHlwZUVudW0uU2hpcHBpbmcsXG4gICAgICB2YWx1ZTogdG90YWxzLnNoaXBwaW5nLFxuICAgICAgc29ydF9vcmRlcjogMlxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdUYXgnLFxuICAgICAgdHlwZTogRGFmZk9yZGVyVG90YWxUeXBlRW51bS5UYXgsXG4gICAgICB2YWx1ZTogdG90YWxzLnRheCxcbiAgICAgIHNvcnRfb3JkZXI6IDNcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnRGlzY291bnQnLFxuICAgICAgdHlwZTogRGFmZk9yZGVyVG90YWxUeXBlRW51bS5EaXNjb3VudCxcbiAgICAgIHZhbHVlOiB0b3RhbHMuZGlzY291bnQsXG4gICAgICBzb3J0X29yZGVyOiA0XG4gICAgfVxuICBdXG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUl0ZW0oaXRlbTogTWFnZW50b0dyYXljb3JlT3JkZXJJdGVtKTogRGFmZk9yZGVySXRlbSB7XG4gIHJldHVybiB7XG4gICAgaXRlbV9pZDogbnVsbCxcbiAgICB0eXBlOiBEYWZmT3JkZXJJdGVtVHlwZS5TaW1wbGUsXG4gICAgcXR5X29yZGVyZWQ6IGl0ZW0ucXR5X29yZGVyZWQsXG4gICAgcXR5X2NhbmNlbGVkOiBpdGVtLnF0eV9jYW5jZWxlZCxcbiAgICBxdHlfZnVsZmlsbGVkOiBpdGVtLnF0eV9mdWxmaWxsZWQsXG4gICAgcXR5OiBpdGVtLnF0eSxcbiAgICBpbWFnZToge1xuICAgICAgdXJsOiBpdGVtLmltYWdlLFxuICAgICAgaWQ6IG51bGwsXG4gICAgICBsYWJlbDogbnVsbFxuICAgIH0sXG4gICAgb3JkZXJfaWQ6IE51bWJlcihpdGVtLm9yZGVyX2lkKSxcbiAgICBjcmVhdGVkX2F0OiBpdGVtLmNyZWF0ZWRfYXQsXG4gICAgdXBkYXRlZF9hdDogaXRlbS51cGRhdGVkX2F0LFxuICAgIHByb2R1Y3RfaWQ6IGl0ZW0ucHJvZHVjdF9pZCxcbiAgICBwYXJlbnRfaXRlbV9pZDogbnVsbCxcbiAgICBza3U6IGl0ZW0uc2t1LFxuICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICB3ZWlnaHQ6IGl0ZW0ud2VpZ2h0LFxuICAgIHByaWNlOiBpdGVtLnByaWNlLFxuICAgIGRpc2NvdW50X3BlcmNlbnQ6IGl0ZW0uZGlzY291bnRfcGVyY2VudCxcbiAgICBkaXNjb3VudF9hbW91bnQ6IGl0ZW0uZGlzY291bnRfYW1vdW50LFxuICAgIHRheF9wZXJjZW50OiBpdGVtLnRheF9wZXJjZW50LFxuICAgIHRheF9hbW91bnQ6IGl0ZW0udGF4X2Ftb3VudCxcbiAgICByb3dfdG90YWw6IGl0ZW0ucm93X3RvdGFsLFxuICAgIHJvd190b3RhbF93aXRoX2Rpc2NvdW50OiBpdGVtLnJvd190b3RhbF93aXRoX2Rpc2NvdW50LFxuICAgIHJvd193ZWlnaHQ6IGl0ZW0ucm93X3dlaWdodCxcbiAgICB0YXhfYmVmb3JlX2Rpc2NvdW50OiBpdGVtLnRheF9iZWZvcmVfZGlzY291bnRcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1BZGRyZXNzKGFkZHJlc3M6IE1hZ2VudG9HcmF5Y29yZU9yZGVyQWRkcmVzcyk6IERhZmZPcmRlckFkZHJlc3Mge1xuICByZXR1cm4ge1xuICAgIG9yZGVyX2lkOiBhZGRyZXNzLm9yZGVyX2lkLFxuICAgIHByZWZpeDogYWRkcmVzcy5wcmVmaXgsXG4gICAgc3VmZml4OiBhZGRyZXNzLnN1ZmZpeCxcbiAgICBmaXJzdG5hbWU6IGFkZHJlc3MuZmlyc3RuYW1lLFxuICAgIG1pZGRsZW5hbWU6IGFkZHJlc3MubWlkZGxlbmFtZSxcbiAgICBsYXN0bmFtZTogYWRkcmVzcy5sYXN0bmFtZSxcbiAgICB0ZWxlcGhvbmU6IGFkZHJlc3MudGVsZXBob25lLFxuICAgIGVtYWlsOiBhZGRyZXNzLmVtYWlsLFxuICAgIHN0cmVldDogYWRkcmVzcy5zdHJlZXRbMF0sXG4gICAgc3RyZWV0MjogYWRkcmVzcy5zdHJlZXRbMV0sXG4gICAgY2l0eTogYWRkcmVzcy5jaXR5LFxuICAgIHJlZ2lvbjogYWRkcmVzcy5yZWdpb25faWQsXG4gICAgY291bnRyeTogYWRkcmVzcy5jb3VudHJ5X2NvZGUsXG4gICAgcG9zdGNvZGU6IGFkZHJlc3MucG9zdGNvZGVcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1TaGlwbWVudEl0ZW0oc2hpcG1lbnRJdGVtOiBNYWdlbnRvR3JheWNvcmVPcmRlclNoaXBtZW50SXRlbSk6IERhZmZPcmRlclNoaXBtZW50SXRlbSB7XG4gIHJldHVybiB7XG4gICAgaXRlbTogdHJhbnNmb3JtSXRlbShzaGlwbWVudEl0ZW0uaXRlbSksXG4gICAgcXR5OiBzaGlwbWVudEl0ZW0ucXR5XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtU2hpcG1lbnRUcmFja2luZyh0cmFja2luZzogTWFnZW50b0dyYXljb3JlT3JkZXJTaGlwbWVudFRyYWNraW5nKTogRGFmZk9yZGVyU2hpcG1lbnRUcmFja2luZyB7XG4gIHJldHVybiB7XG4gICAgdHJhY2tpbmdfbnVtYmVyOiB0cmFja2luZy50cmFja2luZ19udW1iZXIsXG4gICAgdHJhY2tpbmdfdXJsOiBudWxsLFxuICAgIGNhcnJpZXI6IHRyYWNraW5nLmNhcnJpZXIsXG4gICAgdGl0bGU6IHRyYWNraW5nLnRpdGxlLFxuICAgIGNhcnJpZXJfbG9nbzogbnVsbCxcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1TaGlwbWVudChzaGlwbWVudDogTWFnZW50b0dyYXljb3JlT3JkZXJTaGlwbWVudCk6IERhZmZPcmRlclNoaXBtZW50IHtcbiAgcmV0dXJuIHtcbiAgICBjYXJyaWVyOiBudWxsLFxuICAgIGNhcnJpZXJfdGl0bGU6IG51bGwsXG4gICAgY29kZTogbnVsbCxcbiAgICBtZXRob2Q6IG51bGwsXG4gICAgbWV0aG9kX2Rlc2NyaXB0aW9uOiBudWxsLFxuICAgIHRyYWNraW5nOiBzaGlwbWVudC50cmFja2luZy5tYXAodHJhbnNmb3JtU2hpcG1lbnRUcmFja2luZyksXG4gICAgaXRlbXM6IHNoaXBtZW50Lml0ZW1zLm1hcCh0cmFuc2Zvcm1TaGlwbWVudEl0ZW0pXG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtUGF5bWVudChwYXltZW50OiBNYWdlbnRvR3JheWNvcmVPcmRlclBheW1lbnQpOiBEYWZmT3JkZXJQYXltZW50IHtcbiAgcmV0dXJuIHtcbiAgICBwYXltZW50X2lkOiBwYXltZW50LnBheW1lbnRfaWQsXG4gICAgb3JkZXJfaWQ6IHBheW1lbnQub3JkZXJfaWQsXG4gICAgY3JlYXRlZF9hdDogbnVsbCxcbiAgICB1cGRhdGVkX2F0OiBudWxsLFxuICAgIG1ldGhvZDogcGF5bWVudC5tZXRob2QsXG4gICAgY2NfdHlwZTogcGF5bWVudC5jY190eXBlLFxuICAgIGNjX2xhc3Q0OiBwYXltZW50LmNjX2xhc3Q0LFxuICAgIGNjX293bmVyOiBwYXltZW50LmNjX293bmVyLFxuICAgIGNjX2V4cF9tb250aDogcGF5bWVudC5jY19leHBfbW9udGgsXG4gICAgY2NfZXhwX3llYXI6IHBheW1lbnQuY2NfZXhwX3llYXJcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1JbnZvaWNlKGludm9pY2U6IE1hZ2VudG9HcmF5Y29yZU9yZGVySW52b2ljZSk6IERhZmZPcmRlckludm9pY2Uge1xuICByZXR1cm4ge1xuICAgIHRvdGFsczogdHJhbnNmb3JtVG90YWxzKGludm9pY2UpLFxuICAgIGJpbGxpbmdfYWRkcmVzczogdHJhbnNmb3JtQWRkcmVzcyhpbnZvaWNlLmJpbGxpbmdfYWRkcmVzcyksXG4gICAgc2hpcHBpbmdfYWRkcmVzczogdHJhbnNmb3JtQWRkcmVzcyhpbnZvaWNlLnNoaXBwaW5nX2FkZHJlc3MpLFxuICAgIHBheW1lbnQ6IHRyYW5zZm9ybVBheW1lbnQoaW52b2ljZS5wYXltZW50KSxcbiAgICBpdGVtczogaW52b2ljZS5pdGVtcy5tYXAodHJhbnNmb3JtU2hpcG1lbnRJdGVtKSxcbiAgICBzaGlwcGluZ19tZXRob2Q6IG51bGxcbiAgfVxufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIE1hZ2VudG9HcmF5Y29yZU9yZGVyIGZyb20gdGhlIG1hZ2VudG8gb3JkZXIgcXVlcnkgaW50byBhIERhZmZPcmRlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRhZmZNYWdlbnRvVHJhbnNmb3JtT3JkZXIob3JkZXI6IE1hZ2VudG9HcmF5Y29yZU9yZGVyKTogRGFmZk9yZGVyIHtcbiAgcmV0dXJuIHtcbiAgICBleHRyYV9hdHRyaWJ1dGVzOiBvcmRlcixcblxuICAgIGlkOiBvcmRlci5vcmRlcl9udW1iZXIsXG4gICAgY3VzdG9tZXJfaWQ6IG9yZGVyLmN1c3RvbWVyX2lkLFxuICAgIGNyZWF0ZWRfYXQ6IG9yZGVyLmNyZWF0ZWRfYXQsXG4gICAgdXBkYXRlZF9hdDogb3JkZXIudXBkYXRlZF9hdCxcbiAgICBzdGF0dXM6IG9yZGVyLnN0YXR1cyxcblxuICAgIHRvdGFsczogdHJhbnNmb3JtVG90YWxzKG9yZGVyKSxcbiAgICBhcHBsaWVkX2NvZGVzOiBvcmRlci5hcHBsaWVkX2NvZGVzLm1hcChjb2RlID0+ICh7Y29kZX0pKSxcbiAgICBpdGVtczogb3JkZXIuaXRlbXMubWFwKHRyYW5zZm9ybUl0ZW0pLFxuICAgIGJpbGxpbmdfYWRkcmVzc2VzOiBbXG4gICAgICB0cmFuc2Zvcm1BZGRyZXNzKG9yZGVyLmJpbGxpbmdfYWRkcmVzcylcbiAgICBdLFxuICAgIHNoaXBwaW5nX2FkZHJlc3NlczogW1xuICAgICAgdHJhbnNmb3JtQWRkcmVzcyhvcmRlci5zaGlwcGluZ19hZGRyZXNzKVxuICAgIF0sXG4gICAgc2hpcG1lbnRzOiBvcmRlci5zaGlwbWVudHMubWFwKHRyYW5zZm9ybVNoaXBtZW50KSxcbiAgICBwYXltZW50OiB0cmFuc2Zvcm1QYXltZW50KG9yZGVyLnBheW1lbnQpLFxuICAgIGludm9pY2VzOiBvcmRlci5pbnZvaWNlcy5tYXAodHJhbnNmb3JtSW52b2ljZSksXG4gICAgY3JlZGl0czogb3JkZXIuY3JlZGl0cy5tYXAodHJhbnNmb3JtSW52b2ljZSksXG4gIH1cbn1cbiJdfQ==