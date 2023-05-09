import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoOrder } from '@daffodil/order/driver/magento/2.4.1';

import { MagentoOrderAddressFactory } from './order-address.factory';
import { MagentoOrderCreditFactory } from './order-credit.factory';
import { MagentoOrderInvoiceFactory } from './order-invoice.factory';
import { MagentoOrderItemFactory } from './order-item.factory';
import { MagentoOrderPaymentFactory } from './order-payment.factory';
import { MagentoOrderShipmentFactory } from './order-shipment.factory';
import { MagentoOrderTotalFactory } from './order-total.factory';

export class MockOrder implements MagentoOrder {
  __typename: 'GraycoreGuestOrder' = 'GraycoreGuestOrder';
  id = faker.datatype.uuid();
  number = faker.datatype.uuid();
  email = faker.internet.email();
  order_date = faker.date.past().toString();
  status = faker.random.word();
  carrier = faker.random.word();
  shipping_method = faker.random.word();
  total = this.totalFactory.create();
  items = this.itemFactory.createMany(faker.datatype.number({ min: 1, max: 5 }));
  billing_address = this.addressFactory.create();
  shipping_address = this.addressFactory.create();
  shipments = this.shipmentFactory.createMany(faker.datatype.number({ min: 1, max: 3 }));
  payment_methods = this.paymentFactory.createMany(faker.datatype.number({ min: 1, max: 3 }));
  invoices = this.invoiceFactory.createMany(faker.datatype.number({ min: 1, max: 3 }));
  credit_memos = this.creditFactory.createMany(faker.datatype.number({ min: 1, max: 3 }));

  constructor(
    private totalFactory: MagentoOrderTotalFactory,
    private itemFactory: MagentoOrderItemFactory,
    private addressFactory: MagentoOrderAddressFactory,
    private shipmentFactory: MagentoOrderShipmentFactory,
    private paymentFactory: MagentoOrderPaymentFactory,
    private invoiceFactory: MagentoOrderInvoiceFactory,
    private creditFactory: MagentoOrderCreditFactory,
  ) {}
};


@Injectable({
  providedIn: 'root',
})
export class MagentoOrderFactory extends DaffModelFactory<MagentoOrder>{
  constructor(
    totalFactory: MagentoOrderTotalFactory,
    itemFactory: MagentoOrderItemFactory,
    addressFactory: MagentoOrderAddressFactory,
    shipmentFactory: MagentoOrderShipmentFactory,
    paymentFactory: MagentoOrderPaymentFactory,
    invoiceFactory: MagentoOrderInvoiceFactory,
    creditFactory: MagentoOrderCreditFactory,
  ) {
    super(
      MockOrder,
      totalFactory,
      itemFactory,
      addressFactory,
      shipmentFactory,
      paymentFactory,
      invoiceFactory,
      creditFactory,
    );
  }
}
