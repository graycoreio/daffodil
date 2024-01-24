import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoCustomerOrder } from '@daffodil/customer-order/driver/magento';
import {
  MagentoOrderAddressFactory,
  MagentoOrderInvoiceFactory,
  MagentoOrderItemFactory,
  MagentoOrderPaymentFactory,
  MagentoOrderShipmentFactory,
  MagentoOrderTotalFactory,
  MagentoOrderCreditFactory,
} from '@daffodil/order/driver/magento/2-4-1/testing';

export class MockMagentoCustomerOrder implements MagentoCustomerOrder {
  protected _numberOfSuborders = faker.datatype.number({ min: 1, max: 3 });
  __typename = <const>'CustomerOrder';
  id = faker.datatype.uuid();
  order_date = faker.date.past().toString();
  status = faker.random.word();
  carrier = faker.random.word();
  number = faker.datatype.uuid();
  shipping_method = faker.random.word();
  total = this.totalFactory.create({
    __typename: 'OrderTotal',
  });
  items = this.itemFactory.createMany(faker.datatype.number({ min: 1, max: 5 }));
  billing_address = this.addressFactory.create();
  shipping_address = this.addressFactory.create();
  shipments = this.shipmentFactory.createMany(this._numberOfSuborders);
  payment_methods = this.paymentFactory.createMany(this._numberOfSuborders);
  invoices = this.invoiceFactory.createMany(this._numberOfSuborders);
  credit_memos = this.creditFactory.createMany(faker.datatype.number({ min: 1, max: this._numberOfSuborders }));

  constructor(
    protected totalFactory: MagentoOrderTotalFactory,
    protected itemFactory: MagentoOrderItemFactory,
    protected addressFactory: MagentoOrderAddressFactory,
    protected shipmentFactory: MagentoOrderShipmentFactory,
    protected paymentFactory: MagentoOrderPaymentFactory,
    protected invoiceFactory: MagentoOrderInvoiceFactory,
    protected creditFactory: MagentoOrderCreditFactory,
  ) {}
};


@Injectable({
  providedIn: 'root',
})
export class MagentoCustomerOrderFactory extends DaffModelFactory<MagentoCustomerOrder>{
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
      MockMagentoCustomerOrder,
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
