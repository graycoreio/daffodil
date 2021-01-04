import { Injectable } from '@angular/core';

import {
  DaffOrder,
  DaffOrderAddress,
  DaffOrderCoupon,
  DaffOrderInvoice,
  DaffOrderItem,
  DaffOrderShipmentItem,
  DaffOrderShipmentTracking,
  DaffOrderShipment,
  DaffOrderShippingMethod,
  DaffOrderTotal,
  DaffOrderPayment,
  DaffOrderTotalTypeEnum,
  DaffCompositeOrderItem,
  DaffConfigurableOrderItem
} from '@daffodil/order';
import {
  DaffOrderFactory,
  DaffOrderAddressFactory,
  DaffOrderCouponFactory,
  DaffOrderInvoiceFactory,
  DaffOrderItemFactory,
  DaffOrderShipmentItemFactory,
  DaffOrderShipmentTrackingFactory,
  DaffOrderShipmentFactory,
  DaffOrderShippingMethodFactory,
  DaffOrderTotalFactory,
  DaffOrderPaymentFactory,
  DaffCompositeOrderItemFactory,
  DaffConfigurableOrderItemFactory
} from '@daffodil/order/testing';
import {
  MagentoOrder,
  MagentoOrderAddress,
  MagentoOrderInvoice,
  MagentoOrderPayment,
  MagentoOrderItem,
  MagentoOrderShipmentItem,
  MagentoOrderShipmentTracking,
  MagentoOrderShipment,
  MagentoOrderCredit,
  MagentoOrderCreditItem,
  MagentoOrderInvoiceItem,
  MagentoOrderBundleItem,
  MagentoOrderItemType
} from '@daffodil/order/driver/magento/2.4.1';

import { MagentoOrderTestData } from './test-data.interface';

@Injectable({
  providedIn: 'root'
})
export class MagentoOrderTestDataFactory {
  constructor(
    private daffOrderFactory: DaffOrderFactory,
    private daffOrderAddressFactory: DaffOrderAddressFactory,
    private daffOrderCouponFactory: DaffOrderCouponFactory,
    private daffOrderInvoiceFactory: DaffOrderInvoiceFactory,
    private daffOrderPaymentFactory: DaffOrderPaymentFactory,
    private daffOrderItemFactory: DaffOrderItemFactory,
    private daffOrderCompositeItemFactory: DaffCompositeOrderItemFactory,
    private daffOrderConfigurableItemFactory: DaffConfigurableOrderItemFactory,
    private daffOrderShipmentItemFactory: DaffOrderShipmentItemFactory,
    private daffOrderShipmentTrackingFactory: DaffOrderShipmentTrackingFactory,
    private daffOrderShipmentFactory: DaffOrderShipmentFactory,
    private daffOrderShippingMethodFactory: DaffOrderShippingMethodFactory,
    private daffOrderTotalFactory: DaffOrderTotalFactory,
  ) {}

  create(): MagentoOrderTestData {
    let mockDaffOrder: DaffOrder;
    let mockDaffOrderAddress: DaffOrderAddress;
    let mockDaffOrderCoupon: DaffOrderCoupon;
    let mockDaffOrderInvoice: DaffOrderInvoice;
    let mockDaffOrderPayment: DaffOrderPayment;
    let mockDaffOrderItem: DaffOrderItem;
    let mockDaffOrderCompositeItem: DaffCompositeOrderItem;
    let mockDaffOrderConfigurableItem: DaffConfigurableOrderItem;
    let mockDaffOrderShipmentItem: DaffOrderShipmentItem;
    let mockDaffOrderShipmentTracking: DaffOrderShipmentTracking;
    let mockDaffOrderShipment: DaffOrderShipment;
    let mockDaffOrderShippingMethod: DaffOrderShippingMethod;
    let mockDaffOrderGrandTotal: DaffOrderTotal;
    let mockDaffOrderSubTotal: DaffOrderTotal;
    let mockDaffOrderShippingTotal: DaffOrderTotal;
    let mockDaffOrderTax: DaffOrderTotal;
    let mockDaffOrderDiscount: DaffOrderTotal;

    let mockMagentoOrder: MagentoOrder;
    let mockMagentoOrderAddress: MagentoOrderAddress;
    let mockMagentoOrderInvoice: MagentoOrderInvoice;
    let mockMagentoOrderInvoiceItem: MagentoOrderInvoiceItem;
    let mockMagentoOrderPayment: MagentoOrderPayment;
    let mockMagentoOrderSimpleItem: MagentoOrderItem;
    let mockMagentoOrderBundleItem: MagentoOrderBundleItem;
    let mockMagentoOrderConfigurableItem: MagentoOrderItem;
    let mockMagentoOrderShipmentItem: MagentoOrderShipmentItem;
    let mockMagentoOrderShipmentTracking: MagentoOrderShipmentTracking;
    let mockMagentoOrderShipment: MagentoOrderShipment;
    let mockMagentoOrderCredit: MagentoOrderCredit;
    let mockMagentoOrderCreditItem: MagentoOrderCreditItem;

    mockDaffOrderAddress = this.daffOrderAddressFactory.create({
      email: null
    });
    mockDaffOrderCoupon = this.daffOrderCouponFactory.create();
    mockDaffOrderPayment = this.daffOrderPaymentFactory.create({
      created_at: null,
      updated_at: null,
      payment_id: null
    });
    mockDaffOrderItem = this.daffOrderItemFactory.create({
      image: {
        url: 'url',
        id: null,
        label: null
      },
      parent_item_id: null,
      item_id: null,
      created_at: null,
      product_id: null,
      row_weight: null,
      tax_amount: null,
      tax_before_discount: null,
      tax_percent: null,
      updated_at: null,
      weight: null,
    });
    mockDaffOrderItem.qty_ordered = mockDaffOrderItem.qty;
    mockDaffOrderCompositeItem = this.daffOrderCompositeItemFactory.create({
      image: {
        url: 'url',
        id: null,
        label: null
      },
      parent_item_id: null,
      item_id: null,
      created_at: null,
      product_id: null,
      row_weight: null,
      tax_amount: null,
      tax_before_discount: null,
      tax_percent: null,
      updated_at: null,
      weight: null,
    });
    mockDaffOrderCompositeItem.qty_ordered = mockDaffOrderCompositeItem.qty;
    mockDaffOrderConfigurableItem = this.daffOrderConfigurableItemFactory.create({
      image: {
        url: 'url',
        id: null,
        label: null
      },
      parent_item_id: null,
      item_id: null,
      created_at: null,
      product_id: null,
      row_weight: null,
      tax_amount: null,
      tax_before_discount: null,
      tax_percent: null,
      updated_at: null,
      weight: null,
    });
    mockDaffOrderConfigurableItem.qty_ordered = mockDaffOrderConfigurableItem.qty;
    mockDaffOrderShipmentItem = this.daffOrderShipmentItemFactory.create({
      item: mockDaffOrderItem
    });
    mockDaffOrderShipmentItem.qty = mockDaffOrderItem.qty;
    mockDaffOrderShipmentTracking = this.daffOrderShipmentTrackingFactory.create({
      tracking_url: null,
      carrier_logo: null
    });
    mockDaffOrderShipment = this.daffOrderShipmentFactory.create({
      carrier: null,
      carrier_title: null,
      code: null,
      method: null,
      method_description: null,
      tracking: [mockDaffOrderShipmentTracking],
      items: [mockDaffOrderShipmentItem]
    });
    mockDaffOrderShippingMethod = this.daffOrderShippingMethodFactory.create();
    mockDaffOrderGrandTotal = this.daffOrderTotalFactory.create({
      label: 'Grand Total',
      type: DaffOrderTotalTypeEnum.GrandTotal,
      sort_order: 1
    });
    mockDaffOrderSubTotal = this.daffOrderTotalFactory.create({
      label: 'Subtotal',
      type: DaffOrderTotalTypeEnum.Subtotal,
      sort_order: 0
    });
    mockDaffOrderShippingTotal = this.daffOrderTotalFactory.create({
      label: 'Shipping',
      type: DaffOrderTotalTypeEnum.Shipping,
      sort_order: 2
    });
    mockDaffOrderTax = this.daffOrderTotalFactory.create({
      label: 'Tax',
      type: DaffOrderTotalTypeEnum.Tax,
      sort_order: 3
    });
    mockDaffOrderDiscount = this.daffOrderTotalFactory.create({
      label: 'Discount',
      type: DaffOrderTotalTypeEnum.Discount,
      sort_order: 4
    });
    mockDaffOrderInvoice = this.daffOrderInvoiceFactory.create({
      totals: jasmine.arrayContaining([
        mockDaffOrderGrandTotal,
        mockDaffOrderSubTotal,
        mockDaffOrderShippingTotal,
        mockDaffOrderTax,
        mockDaffOrderDiscount
      ]),
      billing_address: mockDaffOrderAddress,
      shipping_address: mockDaffOrderAddress,
      payment: mockDaffOrderPayment,
      items: [mockDaffOrderShipmentItem],
      shipping_method: null
    });
    mockDaffOrder = this.daffOrderFactory.create({
      totals: jasmine.arrayContaining([
        mockDaffOrderGrandTotal,
        mockDaffOrderSubTotal,
        mockDaffOrderShippingTotal,
        mockDaffOrderTax,
        mockDaffOrderDiscount
      ]),
      applied_codes: [mockDaffOrderCoupon],
      items: [
        mockDaffOrderItem,
        mockDaffOrderCompositeItem,
        mockDaffOrderConfigurableItem
      ],
      billing_addresses: [mockDaffOrderAddress],
      shipping_addresses: [mockDaffOrderAddress],
      shipments: [mockDaffOrderShipment],
      payment: mockDaffOrderPayment,
      invoices: [mockDaffOrderInvoice],
      credits: [mockDaffOrderInvoice],
      customer_id: null,
      updated_at: null
    });
    // magento order IDs are strings, and the type mismatch will cause the equality check to fail
    mockDaffOrder.id = String(mockDaffOrder.id);
    mockDaffOrderAddress.order_id = mockDaffOrder.id;
    mockDaffOrderPayment.order_id = mockDaffOrder.id;
    mockDaffOrderItem.order_id = mockDaffOrder.id;
    mockDaffOrderCompositeItem.order_id = mockDaffOrder.id;
    mockDaffOrderConfigurableItem.order_id = mockDaffOrder.id;

    mockMagentoOrderSimpleItem = {
      __typename: 'OrderItem',
      selected_options: [],
      entered_options: [],
      status: null,
      product_type: MagentoOrderItemType.Simple,
      quantity_ordered: mockDaffOrderItem.qty,
      quantity_canceled: mockDaffOrderItem.qty_canceled,
      quantity_refunded: mockDaffOrderItem.qty_canceled,
      quantity_returned: mockDaffOrderItem.qty_canceled,
      quantity_shipped: mockDaffOrderItem.qty_fulfilled,
      quantity_invoiced: mockDaffOrderItem.qty,
      product_url_key: mockDaffOrderItem.image.url,
      product_sku: mockDaffOrderItem.sku,
      product_name: mockDaffOrderItem.name,
      product_sale_price: {
        __typename: 'Money',
        value: mockDaffOrderItem.price,
        currency: 'USD'
      },
      discounts: [{
        __typename: 'Discount',
        amount: {
          __typename: 'Money',
          value: mockDaffOrderItem.discount_amount,
          currency: 'USD'
        },
        label: 'Discount'
      }],
    };
    mockMagentoOrderBundleItem = {
      __typename: 'BundleOrderItem',
      selected_options: [],
      entered_options: [],
      bundle_options: mockDaffOrderCompositeItem.options.map(a => ({
        __typename: 'ItemSelectedBundleOption',
        label: a.option_label,
        values: [{
          __typename: 'ItemSelectedBundleOptionValue',
          price: {
            value: null,
            currency: 'USD'
          },
          product_name: a.value_label,
          product_sku: null,
          quantity: 1
        }]
      })),
      status: null,
      product_type: MagentoOrderItemType.Bundle,
      quantity_ordered: mockDaffOrderCompositeItem.qty,
      quantity_canceled: mockDaffOrderCompositeItem.qty_canceled,
      quantity_refunded: mockDaffOrderCompositeItem.qty_canceled,
      quantity_returned: mockDaffOrderCompositeItem.qty_canceled,
      quantity_shipped: mockDaffOrderCompositeItem.qty_fulfilled,
      quantity_invoiced: mockDaffOrderCompositeItem.qty,
      product_url_key: mockDaffOrderCompositeItem.image.url,
      product_sku: mockDaffOrderCompositeItem.sku,
      product_name: mockDaffOrderCompositeItem.name,
      product_sale_price: {
        __typename: 'Money',
        value: mockDaffOrderCompositeItem.price,
        currency: 'USD'
      },
      discounts: [{
        __typename: 'Discount',
        amount: {
          __typename: 'Money',
          value: mockDaffOrderCompositeItem.discount_amount,
          currency: 'USD'
        },
        label: 'Discount'
      }],
    };
    mockMagentoOrderConfigurableItem = {
      __typename: 'OrderItem',
      selected_options: mockDaffOrderConfigurableItem.attributes.map(a => ({
        __typename: 'OrderItemOption',
        label: a.attribute_label,
        value: a.value_label
      })),
      entered_options: [],
      status: null,
      product_type: MagentoOrderItemType.Configurable,
      quantity_ordered: mockDaffOrderConfigurableItem.qty,
      quantity_canceled: mockDaffOrderConfigurableItem.qty_canceled,
      quantity_refunded: mockDaffOrderConfigurableItem.qty_canceled,
      quantity_returned: mockDaffOrderConfigurableItem.qty_canceled,
      quantity_shipped: mockDaffOrderConfigurableItem.qty_fulfilled,
      quantity_invoiced: mockDaffOrderConfigurableItem.qty,
      product_url_key: mockDaffOrderConfigurableItem.image.url,
      product_sku: mockDaffOrderConfigurableItem.sku,
      product_name: mockDaffOrderConfigurableItem.name,
      product_sale_price: {
        __typename: 'Money',
        value: mockDaffOrderConfigurableItem.price,
        currency: 'USD'
      },
      discounts: [{
        __typename: 'Discount',
        amount: {
          __typename: 'Money',
          value: mockDaffOrderConfigurableItem.discount_amount,
          currency: 'USD'
        },
        label: 'Discount'
      }],
    };
    mockMagentoOrderAddress = {
      __typename: 'OrderAddress',
      prefix: mockDaffOrderAddress.prefix,
      suffix: mockDaffOrderAddress.suffix,
      firstname: mockDaffOrderAddress.firstname,
      middlename: mockDaffOrderAddress.middlename,
      lastname: mockDaffOrderAddress.lastname,
      telephone: mockDaffOrderAddress.telephone,
      street: [mockDaffOrderAddress.street, mockDaffOrderAddress.street2],
      city: mockDaffOrderAddress.city,
      region_id: String(mockDaffOrderAddress.region),
      region: String(mockDaffOrderAddress.region),
      country_code: mockDaffOrderAddress.country,
      postcode: mockDaffOrderAddress.postcode,
      company: null,
      fax: null
    };
    mockMagentoOrderShipmentTracking = {
      __typename: 'ShipmentTracking',
      number: mockDaffOrderShipmentTracking.tracking_number,
      carrier: mockDaffOrderShipmentTracking.carrier,
      title: mockDaffOrderShipmentTracking.title,
    };
    mockMagentoOrderShipmentItem = {
      __typename: 'ShipmentItem',
      order_item: mockMagentoOrderSimpleItem,
      quantity_shipped: mockDaffOrderShipmentItem.qty
    };
    mockMagentoOrderShipment = {
      __typename: 'OrderShipment',
      tracking: [mockMagentoOrderShipmentTracking],
      items: [mockMagentoOrderShipmentItem]
    };
    mockMagentoOrderPayment = {
      __typename: 'OrderPaymentMethod',
      name: String(mockDaffOrderPayment.payment_id),
      type: mockDaffOrderPayment.method,
      additional_data: [
        {
          __typename: 'KeyValue',
          name: 'cc_type',
          value: mockDaffOrderPayment.cc_type
        },
        {
          __typename: 'KeyValue',
          name: 'cc_last4',
          value: mockDaffOrderPayment.cc_last4
        },
        {
          __typename: 'KeyValue',
          name: 'cc_owner',
          value: mockDaffOrderPayment.cc_owner
        },
        {
          __typename: 'KeyValue',
          name: 'cc_exp_month',
          value: mockDaffOrderPayment.cc_exp_month
        },
        {
          __typename: 'KeyValue',
          name: 'cc_exp_year',
          value: mockDaffOrderPayment.cc_exp_year
        },
      ]
    };
    mockMagentoOrderInvoiceItem = {
      __typename: 'InvoiceItem',
      order_item: mockMagentoOrderSimpleItem,
      quantity_invoiced: mockDaffOrderShipmentItem.qty
    };
    mockMagentoOrderInvoice = {
      __typename: 'Invoice',
      items: [mockMagentoOrderInvoiceItem],
      total: {
        __typename: 'InvoiceTotal',
        grand_total: {
          __typename: 'Money',
          value: mockDaffOrderGrandTotal.value,
          currency: 'USD'
        },
        subtotal: {
          __typename: 'Money',
          value: mockDaffOrderSubTotal.value,
          currency: 'USD'
        },
        total_shipping: {
          __typename: 'Money',
          value: mockDaffOrderShippingTotal.value,
          currency: 'USD'
        },
        total_tax: {
          __typename: 'Money',
          value: mockDaffOrderTax.value,
          currency: 'USD'
        },
        discounts: [{
          __typename: 'Discount',
          amount: {
            __typename: 'Money',
            value: mockDaffOrderDiscount.value,
            currency: 'USD'
          },
          label: 'Discount'
        }],
      },
    };
    mockMagentoOrderCreditItem = {
      __typename: 'CreditMemoItem',
      order_item: mockMagentoOrderSimpleItem,
      quantity_refunded: mockDaffOrderShipmentItem.qty
    };
    mockMagentoOrderCredit = {
      __typename: 'CreditMemo',
      items: [mockMagentoOrderCreditItem],
      total: {
        __typename: 'CreditMemoTotal',
        grand_total: {
          __typename: 'Money',
          value: mockDaffOrderGrandTotal.value,
          currency: 'USD'
        },
        subtotal: {
          __typename: 'Money',
          value: mockDaffOrderSubTotal.value,
          currency: 'USD'
        },
        total_shipping: {
          __typename: 'Money',
          value: mockDaffOrderShippingTotal.value,
          currency: 'USD'
        },
        total_tax: {
          __typename: 'Money',
          value: mockDaffOrderTax.value,
          currency: 'USD'
        },
        discounts: [{
          __typename: 'Discount',
          amount: {
            __typename: 'Money',
            value: mockDaffOrderDiscount.value,
            currency: 'USD'
          },
          label: 'Discount'
        }],
      }
    };
    mockMagentoOrder = {
      __typename: 'GraycoreGuestOrder',
      id: String(mockDaffOrder.id),
      number: String(mockDaffOrder.id),
      order_date: mockDaffOrder.created_at,
      carrier: mockDaffOrderShipment.carrier,
      shipping_method: mockDaffOrderShipment.method,
      total: {
        __typename: 'OrderTotal',
        grand_total: {
          __typename: 'Money',
          value: mockDaffOrderGrandTotal.value,
          currency: 'USD'
        },
        subtotal: {
          __typename: 'Money',
          value: mockDaffOrderSubTotal.value,
          currency: 'USD'
        },
        total_shipping: {
          __typename: 'Money',
          value: mockDaffOrderShippingTotal.value,
          currency: 'USD'
        },
        total_tax: {
          __typename: 'Money',
          value: mockDaffOrderTax.value,
          currency: 'USD'
        },
        discounts: [{
          __typename: 'Discount',
          amount: {
            __typename: 'Money',
            value: mockDaffOrderDiscount.value,
            currency: 'USD'
          },
          label: mockDaffOrderCoupon.code
        }],
      },
      status: mockDaffOrder.status,
      items: [
        mockMagentoOrderSimpleItem,
        mockMagentoOrderBundleItem,
        mockMagentoOrderConfigurableItem
      ],
      billing_address: mockMagentoOrderAddress,
      shipping_address: mockMagentoOrderAddress,
      shipments: [mockMagentoOrderShipment],
      payment_methods: [mockMagentoOrderPayment],
      invoices: [mockMagentoOrderInvoice],
      credit_memos: [mockMagentoOrderCredit]
    };

    mockDaffOrder.extra_attributes = mockMagentoOrder;

    return {
      mockDaffOrder,
      mockMagentoOrder
    }
  }
}
