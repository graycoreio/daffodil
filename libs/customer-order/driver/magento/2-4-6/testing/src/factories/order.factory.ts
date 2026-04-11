import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import {
  DaffModelFactory,
  IDaffModelFactory,
} from '@daffodil/core/testing';
import { MagentoCustomerOrder } from '@daffodil/customer-order/driver/magento/2-4-6';
import {
  MagentoOrderAddress,
  MagentoOrderCredit,
  MagentoOrderInvoice,
  MagentoOrderItem,
  MagentoOrderPayment,
  MagentoOrderShipment,
  MagentoOrderTotal,
} from '@daffodil/order/driver/magento/2-4-1';
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
  protected _numberOfSuborders = faker.number.int({ min: 1, max: 3 });
  __typename = <const>'CustomerOrder';
  id = faker.string.uuid();
  order_date = faker.date.past().toString();
  status = faker.lorem.word();
  carrier = faker.lorem.word();
  // eslint-disable-next-line id-blacklist
  number = faker.string.uuid();
  shipping_method = faker.lorem.word();
  total = this.totalFactory.create({
    __typename: 'OrderTotal',
  });
  items = this.itemFactory.createMany(faker.number.int({ min: 1, max: 5 }));
  billing_address = this.addressFactory.create();
  shipping_address = this.addressFactory.create();
  shipments = this.shipmentFactory.createMany(this._numberOfSuborders);
  payment_methods = this.paymentFactory.createMany(this._numberOfSuborders);
  invoices = this.invoiceFactory.createMany(this._numberOfSuborders);
  credit_memos = this.creditFactory.createMany(faker.number.int({ min: 1, max: this._numberOfSuborders }));

  constructor(
    protected totalFactory: IDaffModelFactory<MagentoOrderTotal>,
    protected itemFactory: IDaffModelFactory<MagentoOrderItem>,
    protected addressFactory: IDaffModelFactory<MagentoOrderAddress>,
    protected shipmentFactory: IDaffModelFactory<MagentoOrderShipment>,
    protected paymentFactory: IDaffModelFactory<MagentoOrderPayment>,
    protected invoiceFactory: IDaffModelFactory<MagentoOrderInvoice>,
    protected creditFactory: IDaffModelFactory<MagentoOrderCredit>,
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
