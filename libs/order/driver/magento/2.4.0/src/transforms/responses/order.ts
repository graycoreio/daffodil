import {
  DaffOrder,
  DaffOrderTotal,
  DaffOrderItem,
  DaffOrderAddress,
  DaffOrderShipment,
  DaffOrderShipmentItem,
  DaffOrderShipmentTracking,
  DaffOrderPayment,
  DaffOrderInvoice,
  DaffOrderTotalTypeEnum,
  DaffOrderItemType,
} from '@daffodil/order';

import {
  MagentoGraycoreOrder,
  MagentoGraycoreOrderItem,
  MagentoGraycoreOrderShipment,
  MagentoGraycoreOrderAddress,
  MagentoGraycoreOrderShipmentItem,
  MagentoGraycoreOrderShipmentTracking,
  MagentoGraycoreOrderPayment,
  MagentoGraycoreOrderInvoice,
} from '../../models/responses/public_api';

function transformTotals(totals: {
  grand_total: number;
  subtotal: number;
  shipping: number;
  discount: number;
  tax: number;
}): DaffOrderTotal[] {
  return [
    {
      label: 'Grand Total',
      type: DaffOrderTotalTypeEnum.GrandTotal,
      value: totals.grand_total,
      sort_order: 1,
    },
    {
      label: 'Subtotal',
      type: DaffOrderTotalTypeEnum.Subtotal,
      value: totals.subtotal,
      sort_order: 0,
    },
    {
      label: 'Shipping',
      type: DaffOrderTotalTypeEnum.Shipping,
      value: totals.shipping,
      sort_order: 2,
    },
    {
      label: 'Tax',
      type: DaffOrderTotalTypeEnum.Tax,
      value: totals.tax,
      sort_order: 3,
    },
    {
      label: 'Discount',
      type: DaffOrderTotalTypeEnum.Discount,
      value: totals.discount,
      sort_order: 4,
    },
  ];
}

function transformItem(item: MagentoGraycoreOrderItem): DaffOrderItem {
  return {
    id: null,
    type: DaffOrderItemType.Simple,
    qty_ordered: item.qty_ordered,
    qty_canceled: item.qty_canceled,
    qty_fulfilled: item.qty_fulfilled,
    qty: item.qty,
    image: {
      url: item.image,
      id: null,
      label: null,
    },
    order_id: item.order_id,
    created_at: item.created_at,
    updated_at: item.updated_at,
    product_id: String(item.product_id),
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
    tax_before_discount: item.tax_before_discount,
  };
}

function transformAddress(address: MagentoGraycoreOrderAddress): DaffOrderAddress {
  return {
    order_id: String(address.order_id),
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
    region_code: address.region,
    country: address.country_code,
    postcode: address.postcode,
  };
}

function transformShipmentItem(shipmentItem: MagentoGraycoreOrderShipmentItem): DaffOrderShipmentItem {
  return {
    item: transformItem(shipmentItem.item),
    qty: shipmentItem.qty,
  };
}

function transformShipmentTracking(tracking: MagentoGraycoreOrderShipmentTracking): DaffOrderShipmentTracking {
  return {
    tracking_number: tracking.tracking_number,
    tracking_url: null,
    carrier: tracking.carrier,
    title: tracking.title,
    carrier_logo: null,
  };
}

function transformShipment(shipment: MagentoGraycoreOrderShipment): DaffOrderShipment {
  return {
    carrier: null,
    carrier_title: null,
    code: null,
    method: null,
    method_description: null,
    tracking: shipment.tracking.map(transformShipmentTracking),
    items: shipment.items.map(transformShipmentItem),
  };
}

function transformPayment(payment: MagentoGraycoreOrderPayment): DaffOrderPayment {
  return {
    id: String(payment.payment_id),
    order_id: String(payment.order_id),
    created_at: null,
    updated_at: null,
    method: payment.method,
    cc_type: payment.cc_type,
    cc_last4: payment.cc_last4,
    cc_owner: payment.cc_owner,
    cc_exp_month: payment.cc_exp_month,
    cc_exp_year: payment.cc_exp_year,
  };
}

function transformInvoice(invoice: MagentoGraycoreOrderInvoice): DaffOrderInvoice {
  return {
    totals: transformTotals(invoice),
    billing_address: transformAddress(invoice.billing_address),
    shipping_address: transformAddress(invoice.shipping_address),
    payment: transformPayment(invoice.payment),
    items: invoice.items.map(transformShipmentItem),
    shipping_method: null,
  };
}

/**
 * Transforms the MagentoGraycoreOrder from the magento order query into a DaffOrder.
 */
export function daffMagentoTransformOrder(order: MagentoGraycoreOrder): DaffOrder {
  return {
    extra_attributes: order,

    id: String(order.order_number),
    email: order.billing_address?.email,
    customer_id: String(order.customer_id),
    created_at: order.created_at,
    updated_at: order.updated_at,
    status: order.status,

    totals: transformTotals(order),
    applied_codes: order.applied_codes.map(code => ({ code })),
    items: order.items.map(transformItem),
    billing_addresses: [
      transformAddress(order.billing_address),
    ],
    shipping_addresses: [
      transformAddress(order.shipping_address),
    ],
    shipments: order.shipments.map(transformShipment),
    payment: transformPayment(order.payment),
    invoices: order.invoices.map(transformInvoice),
    credits: order.credits.map(transformInvoice),
  };
}
