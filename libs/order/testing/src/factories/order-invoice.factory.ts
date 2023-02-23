import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffOrderInvoice } from '@daffodil/order';

import { DaffOrderAddressFactory } from './order-address.factory';
import { DaffOrderPaymentFactory } from './order-payment.factory';
import { DaffOrderShipmentItemFactory } from './order-shipment-item.factory';
import { DaffOrderShippingMethodFactory } from './order-shipping-rate.factory';
import { DaffOrderTotalFactory } from './order-total.factory';

export class MockOrderInvoice implements DaffOrderInvoice {
  items = this.itemFactory.createMany(faker.datatype.number({ min: 1, max: 3 }));
  totals = this.totalFactory.createMany(faker.datatype.number({ min: 1, max: 3 }));
  billing_address = this.addressFactory.create();
  shipping_address = this.addressFactory.create();
  payment = this.paymentFactory.create();
  shipping_method = this.shippingMethodFactory.create();

  constructor(
    private itemFactory: DaffOrderShipmentItemFactory,
    private addressFactory: DaffOrderAddressFactory,
    private paymentFactory: DaffOrderPaymentFactory,
    private totalFactory: DaffOrderTotalFactory,
    private shippingMethodFactory: DaffOrderShippingMethodFactory,
  ) {}
};


@Injectable({
  providedIn: 'root',
})
export class DaffOrderInvoiceFactory extends DaffModelFactory<DaffOrderInvoice> {
  constructor(
    itemFactory: DaffOrderShipmentItemFactory,
    addressFactory: DaffOrderAddressFactory,
    paymentFactory: DaffOrderPaymentFactory,
    totalFactory: DaffOrderTotalFactory,
    shippingMethodFactory: DaffOrderShippingMethodFactory,
  ) {
    super(
      MockOrderInvoice,
      itemFactory,
      addressFactory,
      paymentFactory,
      totalFactory,
      shippingMethodFactory,
    );
  }
}
