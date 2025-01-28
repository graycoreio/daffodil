import {
  daffAdd,
  daffSubtract,
} from '@daffodil/core';
import { MagentoDiscount } from '@daffodil/driver/magento';
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
  DaffCompositeOrderItemOption,
  DaffOrderItemType,
  DaffConfigurableOrderItemAttribute,
  DaffOrderCoupon,
} from '@daffodil/order';
import {
  MagentoOrderTotal,
  MagentoOrderItemOption,
  MagentoOrderBundleItemSelectedOption,
  MagentoOrderItem,
  MagentoOrderItemType,
  MagentoOrderBundleItem,
  MagentoOrderAddress,
  MagentoOrderShipmentItem,
  MagentoOrderShipmentTracking,
  MagentoOrderShipment,
  MagentoOrderPayment,
  MagentoOrderInvoiceItem,
  MagentoOrderInvoice,
  MagentoOrderCreditItem,
  MagentoOrderCredit,
} from '@daffodil/order/driver/magento/2-4-1';

import { MagentoCustomerOrder } from '../../models/public_api';

export function daffMagentoCustomerOrderTransformTotals(totals: MagentoOrderTotal): DaffOrderTotal[] {
  return [
    {
      label: 'Subtotal',
      type: DaffOrderTotalTypeEnum.Subtotal,
      value: totals.subtotal.value,
      sort_order: 0,
    },
    {
      label: 'Discount',
      type: DaffOrderTotalTypeEnum.Discount,
      value: totals.discounts.reduce((acc, discount) => daffAdd(acc, discount.amount.value), 0),
      sort_order: 10,
    },
    {
      label: 'Shipping',
      type: DaffOrderTotalTypeEnum.Shipping,
      value: totals.total_shipping.value,
      sort_order: 20,
    },
    {
      label: 'Tax',
      type: DaffOrderTotalTypeEnum.Tax,
      value: totals.total_tax.value,
      sort_order: 30,
    },
    {
      label: 'Grand Total',
      type: DaffOrderTotalTypeEnum.GrandTotal,
      value: totals.grand_total.value,
      sort_order: 40,
    },
  ];
}

export function daffMagentoCustomerOrderTransformCouponDiscount(discount: MagentoDiscount): DaffOrderCoupon {
  return {
    code: discount.label,
  };
}

export function daffMagentoCustomerOrderTransformConfigurableOption(option: MagentoOrderItemOption): DaffConfigurableOrderItemAttribute {
  return {
    attribute_label: option.label,
    value_label: option.value,
  };
}

export function daffMagentoCustomerOrderTransformBundleOption(option: MagentoOrderBundleItemSelectedOption): DaffCompositeOrderItemOption {
  return {
    option_label: option.label,
    value_label: option.values && option.values[0] && option.values[0].product_name,
  };
}

export function daffMagentoCustomerOrderTransformAdditionalItemFields(item: MagentoOrderItem) {
  switch (item.product_type) {
    case MagentoOrderItemType.Bundle:
      return {
        type: DaffOrderItemType.Composite,
        options: (<MagentoOrderBundleItem>item).bundle_options.map(daffMagentoCustomerOrderTransformBundleOption),
      };
    case MagentoOrderItemType.Configurable:
      return {
        type: DaffOrderItemType.Configurable,
        attributes: item.selected_options.map(daffMagentoCustomerOrderTransformConfigurableOption),
      };
    case MagentoOrderItemType.Simple:
      return {
        type: DaffOrderItemType.Simple,
      };
    default:
      return {};
  }
}

export function daffMagentoCustomerOrderTransformItem(item: MagentoOrderItem, order: MagentoCustomerOrder, qty: number): DaffOrderItem {
  const discount = item.discounts.reduce((acc, d) => daffAdd(acc, d.amount.value), 0);
  const rowTotal = qty * item.product_sale_price.value;
  const rowTotalWithDiscount = qty * daffSubtract(item.product_sale_price.value, discount);

  return {
    type: DaffOrderItemType.Simple,
    id: null,
    qty_ordered: item.quantity_ordered,
    qty_canceled: item.quantity_canceled,
    qty_fulfilled: item.quantity_shipped,
    qty,
    image: {
      url: item.product_url_key,
      id: null,
      label: null,
    },
    order_id: order.id,
    created_at: null,
    updated_at: null,
    product_id: null,
    parent_item_id: null,
    sku: item.product_sku,
    name: item.product_name,
    weight: null,
    price: item.product_sale_price.value,
    discount_percent: Math.floor(discount / item.product_sale_price.value * 100),
    discount_amount: discount,
    tax_percent: null,
    tax_amount: null,
    row_total: rowTotal,
    row_total_with_discount: rowTotalWithDiscount,
    row_weight: null,
    tax_before_discount: null,
    ...daffMagentoCustomerOrderTransformAdditionalItemFields(item),
  };
}

export function daffMagentoCustomerOrderTransformAddress(address: MagentoOrderAddress, order: MagentoCustomerOrder): DaffOrderAddress {
  return {
    order_id: order.id,
    prefix: address.prefix,
    suffix: address.suffix,
    firstname: address.firstname,
    middlename: address.middlename,
    lastname: address.lastname,
    telephone: address.telephone,
    street: address.street[0],
    street2: address.street[1],
    city: address.city,
    region: String(address.region_id),
    region_code: address.region_code,
    country: address.country_code,
    postcode: address.postcode,
  };
}

export function daffMagentoCustomerOrderTransformShipmentItem(shipmentItem: MagentoOrderShipmentItem, order: MagentoCustomerOrder): DaffOrderShipmentItem {
  return {
    item: daffMagentoCustomerOrderTransformItem(shipmentItem.order_item, order, shipmentItem.quantity_shipped),
    qty: shipmentItem.quantity_shipped,
  };
}

export function daffMagentoCustomerOrderTransformShipmentTracking(tracking: MagentoOrderShipmentTracking): DaffOrderShipmentTracking {
  return {
    tracking_number: tracking.number,
    tracking_url: null,
    carrier: tracking.carrier,
    title: tracking.title,
    carrier_logo: null,
  };
}

export function daffMagentoCustomerOrderTransformShipment(shipment: MagentoOrderShipment, order: MagentoCustomerOrder): DaffOrderShipment {
  return {
    carrier: order.carrier,
    carrier_title: null,
    code: null,
    method: order.shipping_method,
    method_description: null,
    tracking: shipment.tracking.map(daffMagentoCustomerOrderTransformShipmentTracking),
    items: shipment.items.map(item => daffMagentoCustomerOrderTransformShipmentItem(item, order)),
  };
}

export function daffMagentoCustomerOrderTransformPayment(payment: MagentoOrderPayment, order: MagentoCustomerOrder): DaffOrderPayment {
  const findAdditionalData = key => {
    const index = payment.additional_data.findIndex(({ name }) => name === key);

    return index > -1 ? payment.additional_data[index].value : null;
  };
  return {
    id: null,
    order_id: order.id,
    created_at: null,
    updated_at: null,
    method: payment.type,
    cc_type: findAdditionalData('cc_type'),
    cc_last4: findAdditionalData('cc_last4'),
    cc_owner: findAdditionalData('cc_owner'),
    cc_exp_month: findAdditionalData('cc_exp_month'),
    cc_exp_year: findAdditionalData('cc_exp_year'),
  };
}

export function daffMagentoCustomerOrderTransformInvoiceItem(invoiceItem: MagentoOrderInvoiceItem, order: MagentoCustomerOrder): DaffOrderShipmentItem {
  return {
    item: daffMagentoCustomerOrderTransformItem(invoiceItem.order_item, order, invoiceItem.quantity_invoiced),
    qty: invoiceItem.quantity_invoiced,
  };
}

export function daffMagentoCustomerOrderTransformInvoice(invoice: MagentoOrderInvoice, order: MagentoCustomerOrder, payment: MagentoOrderPayment): DaffOrderInvoice {
  return {
    totals: daffMagentoCustomerOrderTransformTotals(invoice.total),
    billing_address: daffMagentoCustomerOrderTransformAddress(order.billing_address, order),
    shipping_address: daffMagentoCustomerOrderTransformAddress(order.shipping_address, order),
    payment: daffMagentoCustomerOrderTransformPayment(payment, order),
    items: invoice.items.map(item => daffMagentoCustomerOrderTransformInvoiceItem(item, order)),
    shipping_method: null,
  };
}

export function daffMagentoCustomerOrderTransformCreditItem(creditItem: MagentoOrderCreditItem, order: MagentoCustomerOrder): DaffOrderShipmentItem {
  return {
    item: daffMagentoCustomerOrderTransformItem(creditItem.order_item, order, creditItem.quantity_refunded),
    qty: creditItem.quantity_refunded,
  };
}

export function daffMagentoCustomerOrderTransformCredit(credit: MagentoOrderCredit, order: MagentoCustomerOrder): DaffOrderInvoice {
  return {
    totals: daffMagentoCustomerOrderTransformTotals(credit.total),
    billing_address: daffMagentoCustomerOrderTransformAddress(order.billing_address, order),
    shipping_address: daffMagentoCustomerOrderTransformAddress(order.shipping_address, order),
    payment: daffMagentoCustomerOrderTransformPayment(order.payment_methods[0], order),
    items: credit.items.map(item => daffMagentoCustomerOrderTransformCreditItem(item, order)),
    shipping_method: null,
  };
}

/**
 * Transforms the MagentoCustomerOrder from the magento order query into a DaffOrder.
 */
export function daffMagentoCustomerOrderTransformOrder(order: MagentoCustomerOrder, email: string): DaffOrder {
  return {
    extra_attributes: order,

    id: order.number,
    email,
    customer_id: null,
    updated_at: null,
    created_at: order.order_date,
    status: order.status,

    totals: daffMagentoCustomerOrderTransformTotals(order.total),
    applied_codes: order.total.discounts.map(daffMagentoCustomerOrderTransformCouponDiscount),
    items: order.items.map(item => daffMagentoCustomerOrderTransformItem(item, order, item.quantity_ordered)),
    billing_addresses: [
      daffMagentoCustomerOrderTransformAddress(order.billing_address, order),
    ],
    shipping_addresses: [
      daffMagentoCustomerOrderTransformAddress(order.shipping_address, order),
    ],
    shipments: order.shipments.map(shipment => daffMagentoCustomerOrderTransformShipment(shipment, order)),
    payment: daffMagentoCustomerOrderTransformPayment(order.payment_methods[0], order),
    // TODO: find out if the index is the correct payment for invoice
    invoices: order.invoices.map((invoice, index) => daffMagentoCustomerOrderTransformInvoice(invoice, order, order.payment_methods[index])),
    credits: order.credit_memos.map(credit => daffMagentoCustomerOrderTransformCredit(credit, order)),
  };
}
