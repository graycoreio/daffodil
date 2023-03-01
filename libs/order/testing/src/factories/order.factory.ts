import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffOrder,
  DaffOrderTotal,
  DaffOrderTotalTypeEnum,
} from '@daffodil/order';

import { DaffOrderAddressFactory } from './order-address.factory';
import { DaffOrderCouponFactory } from './order-coupon.factory';
import { DaffOrderInvoiceFactory } from './order-invoice.factory';
import { DaffOrderItemFactory } from './order-item.factory';
import { DaffOrderPaymentFactory } from './order-payment.factory';
import { DaffOrderShipmentFactory } from './order-shipment.factory';
import { DaffOrderTotalFactory } from './order-total.factory';

export class MockOrder implements DaffOrder {
  id = faker.datatype.uuid();
  customer_id = faker.datatype.uuid();
  email = faker.internet.email();
  created_at = faker.date.past().toString();
  updated_at = faker.date.past().toString();
  status = faker.random.word();
  totals = this.createTotals();
  applied_codes = this.couponFactory.createMany(faker.datatype.number({ min: 1, max: 3 }));
  items = this.itemFactory.createMany(faker.datatype.number({ min: 1, max: 5 }));
  billing_addresses = this.addressFactory.createMany(faker.datatype.number({ min: 1, max: 3 }));
  shipping_addresses = this.addressFactory.createMany(faker.datatype.number({ min: 1, max: 3 }));
  shipments = this.shipmentFactory.createMany(faker.datatype.number({ min: 1, max: 3 }));
  payment = this.paymentFactory.create();
  invoices = this.invoiceFactory.createMany(faker.datatype.number({ min: 1, max: 3 }));
  credits = this.invoiceFactory.createMany(faker.datatype.number({ min: 1, max: 3 }));

  constructor(
    private totalFactory: DaffOrderTotalFactory,
    private couponFactory: DaffOrderCouponFactory,
    private itemFactory: DaffOrderItemFactory,
    private addressFactory: DaffOrderAddressFactory,
    private shipmentFactory: DaffOrderShipmentFactory,
    private paymentFactory: DaffOrderPaymentFactory,
    private invoiceFactory: DaffOrderInvoiceFactory,
  ) {}

  private createTotals(): DaffOrderTotal[] {
    return [
      this.totalFactory.create({
        label: 'Grand Total',
        type: DaffOrderTotalTypeEnum.GrandTotal,
        sort_order: 1,
      }),
      this.totalFactory.create({
        label: 'Subtotal',
        type: DaffOrderTotalTypeEnum.Subtotal,
        sort_order: 0,
      }),
      this.totalFactory.create({
        label: 'Shipping',
        type: DaffOrderTotalTypeEnum.Shipping,
        sort_order: 2,
      }),
      this.totalFactory.create({
        label: 'Tax',
        type: DaffOrderTotalTypeEnum.Tax,
        sort_order: 3,
      }),
      this.totalFactory.create({
        label: 'Discount',
        type: DaffOrderTotalTypeEnum.Discount,
        sort_order: 4,
      }),
    ];
  }
};


@Injectable({
  providedIn: 'root',
})
export class DaffOrderFactory extends DaffModelFactory<DaffOrder>{
  constructor(
    totalFactory: DaffOrderTotalFactory,
    couponFactory: DaffOrderCouponFactory,
    itemFactory: DaffOrderItemFactory,
    addressFactory: DaffOrderAddressFactory,
    shipmentFactory: DaffOrderShipmentFactory,
    paymentFactory: DaffOrderPaymentFactory,
    invoiceFactory: DaffOrderInvoiceFactory,
  ) {
    super(
      MockOrder,
      totalFactory,
      couponFactory,
      itemFactory,
      addressFactory,
      shipmentFactory,
      paymentFactory,
      invoiceFactory,
    );
  }
}
