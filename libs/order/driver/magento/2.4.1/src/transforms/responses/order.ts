import {
  daffAdd,
  daffSubtract,
} from '@daffodil/core';
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

import { MagentoDiscount } from '../../models/responses/discount';
import { MagentoOrderCredit } from '../../models/responses/order-credit';
import { MagentoOrderCreditItem } from '../../models/responses/order-credit-item';
import { MagentoOrderInvoiceItem } from '../../models/responses/order-invoice-item';
import {
  MagentoOrderBundleItem,
  MagentoOrderBundleItemSelectedOption,
  MagentoOrderItemOption,
  MagentoOrderItemType,
} from '../../models/responses/order-item';
import { MagentoOrderTotal } from '../../models/responses/order-total';
import {
  MagentoOrder,
  MagentoOrderItem,
  MagentoOrderShipment,
  MagentoOrderAddress,
  MagentoOrderShipmentItem,
  MagentoOrderShipmentTracking,
  MagentoOrderPayment,
  MagentoOrderInvoice,
} from '../../models/responses/public_api';

function transformTotals(totals: MagentoOrderTotal): DaffOrderTotal[] {
  return [
    {
      label: 'Grand Total',
      type: DaffOrderTotalTypeEnum.GrandTotal,
      value: totals.grand_total.value,
      sort_order: 1,
    },
    {
      label: 'Subtotal',
      type: DaffOrderTotalTypeEnum.Subtotal,
      value: totals.subtotal.value,
      sort_order: 0,
    },
    {
      label: 'Shipping',
      type: DaffOrderTotalTypeEnum.Shipping,
      value: totals.total_shipping.value,
      sort_order: 2,
    },
    {
      label: 'Tax',
      type: DaffOrderTotalTypeEnum.Tax,
      value: totals.total_tax.value,
      sort_order: 3,
    },
    {
      label: 'Discount',
      type: DaffOrderTotalTypeEnum.Discount,
      value: totals.discounts.reduce((acc, discount) => daffAdd(acc, discount.amount.value), 0),
      sort_order: 4,
    },
  ];
}

function transformCouponDiscount(discount: MagentoDiscount): DaffOrderCoupon {
  return {
    code: discount.label,
  };
}

function transformConfigurableOption(option: MagentoOrderItemOption): DaffConfigurableOrderItemAttribute {
  return {
    attribute_label: option.label,
	  value_label: option.value,
  };
}

function transformBundleOption(option: MagentoOrderBundleItemSelectedOption): DaffCompositeOrderItemOption {
  return {
    option_label: option.label,
	  value_label: option.values && option.values[0] && option.values[0].product_name,
  };
}

function transformAdditionalItemFields(item: MagentoOrderItem) {
  switch (item.product_type) {
    case MagentoOrderItemType.Bundle:
      return {
        type: DaffOrderItemType.Composite,
        options: (<MagentoOrderBundleItem>item).bundle_options.map(transformBundleOption),
      };
    case MagentoOrderItemType.Configurable:
      return {
        type: DaffOrderItemType.Configurable,
        attributes: item.selected_options.map(transformConfigurableOption),
      };
    case MagentoOrderItemType.Simple:
      return {
        type: DaffOrderItemType.Simple,
      };
    default:
      return {};
  }
}

function transformItem(item: MagentoOrderItem, order: MagentoOrder, qty: number): DaffOrderItem {
  const discount = item.discounts.reduce((acc, d) => daffAdd(acc, d.amount.value), 0);
  const rowTotal = qty * item.product_sale_price.value;
  const rowTotalWithDiscount = qty * daffSubtract(item.product_sale_price.value, discount);

  return {
    type: DaffOrderItemType.Simple,
    item_id: null,
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
    ...transformAdditionalItemFields(item),
  };
}

function transformAddress(address: MagentoOrderAddress, order: MagentoOrder): DaffOrderAddress {
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
    postcode: address.postcode,
  };
}

function transformShipmentItem(shipmentItem: MagentoOrderShipmentItem, order: MagentoOrder): DaffOrderShipmentItem {
  return {
    item: transformItem(shipmentItem.order_item, order, shipmentItem.quantity_shipped),
    qty: shipmentItem.quantity_shipped,
  };
}

function transformShipmentTracking(tracking: MagentoOrderShipmentTracking): DaffOrderShipmentTracking {
  return {
    tracking_number: tracking.number,
    tracking_url: null,
    carrier: tracking.carrier,
    title: tracking.title,
    carrier_logo: null,
  };
}

function transformShipment(shipment: MagentoOrderShipment, order: MagentoOrder): DaffOrderShipment {
  return {
    carrier: order.carrier,
    carrier_title: null,
    code: null,
    method: order.shipping_method,
    method_description: null,
    tracking: shipment.tracking.map(transformShipmentTracking),
    items: shipment.items.map(item => transformShipmentItem(item, order)),
  };
}

function transformPayment(payment: MagentoOrderPayment, order: MagentoOrder): DaffOrderPayment {
  const findAdditionalData = key => {
    const index = payment.additional_data.findIndex(({ name }) => name === key);

    return index > -1 ? payment.additional_data[index].value : null;
  };
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
    cc_exp_year: findAdditionalData('cc_exp_year'),
  };
}

function transformInvoiceItem(invoiceItem: MagentoOrderInvoiceItem, order: MagentoOrder): DaffOrderShipmentItem {
  return {
    item: transformItem(invoiceItem.order_item, order, invoiceItem.quantity_invoiced),
    qty: invoiceItem.quantity_invoiced,
  };
}

function transformInvoice(invoice: MagentoOrderInvoice, order: MagentoOrder, payment: MagentoOrderPayment): DaffOrderInvoice {
  return {
    totals: transformTotals(invoice.total),
    billing_address: transformAddress(order.billing_address, order),
    shipping_address: transformAddress(order.shipping_address, order),
    payment: transformPayment(payment, order),
    items: invoice.items.map(item => transformInvoiceItem(item, order)),
    shipping_method: null,
  };
}

function transformCreditItem(creditItem: MagentoOrderCreditItem, order: MagentoOrder): DaffOrderShipmentItem {
  return {
    item: transformItem(creditItem.order_item, order, creditItem.quantity_refunded),
    qty: creditItem.quantity_refunded,
  };
}

function transformCredit(credit: MagentoOrderCredit, order: MagentoOrder): DaffOrderInvoice {
  return {
    totals: transformTotals(credit.total),
    billing_address: transformAddress(order.billing_address, order),
    shipping_address: transformAddress(order.shipping_address, order),
    payment: transformPayment(order.payment_methods[0], order),
    items: credit.items.map(item => transformCreditItem(item, order)),
    shipping_method: null,
  };
}

/**
 * Transforms the MagentoOrder from the magento order query into a DaffOrder.
 */
export function daffMagentoTransformOrder(order: MagentoOrder): DaffOrder {
  return {
    extra_attributes: order,

    id: order.number,
    customer_id: null,
    updated_at: null,
    created_at: order.order_date,
    status: order.status,

    totals: transformTotals(order.total),
    applied_codes: order.total.discounts.map(transformCouponDiscount),
    items: order.items.map(item => transformItem(item, order, item.quantity_ordered)),
    billing_addresses: [
      transformAddress(order.billing_address, order),
    ],
    shipping_addresses: [
      transformAddress(order.shipping_address, order),
    ],
    shipments: order.shipments.map(shipment => transformShipment(shipment, order)),
    payment: transformPayment(order.payment_methods[0], order),
    // TODO: find out if the index is the correct payment for invoice
    invoices: order.invoices.map((invoice, index) => transformInvoice(invoice, order, order.payment_methods[index])),
    credits: order.credit_memos.map(credit => transformCredit(credit, order)),
  };
}
