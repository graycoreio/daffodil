import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MockMagentoCustomerOrder } from '@daffodil/customer-order/driver/magento/testing';
import { MagentoCustomerOrderWithStoreCredit } from '@daffodil/customer-store-credit/driver/magento';
import { MagentoMoneyFactory } from '@daffodil/driver/magento/testing';
import {
  MagentoOrderTotalFactory,
  MagentoOrderItemFactory,
  MagentoOrderAddressFactory,
  MagentoOrderShipmentFactory,
  MagentoOrderPaymentFactory,
  MagentoOrderInvoiceFactory,
  MagentoOrderCreditFactory,
} from '@daffodil/order/driver/magento/2.4.1/testing';

export class MockMagentoCustomerOrderWithStoreCredit extends MockMagentoCustomerOrder implements MagentoCustomerOrderWithStoreCredit {
  total = {
    ...this.totalFactory.create(),
    total_store_credit: this.moneyFactory.create(),
  };

  constructor(
    totalFactory: MagentoOrderTotalFactory,
    itemFactory: MagentoOrderItemFactory,
    addressFactory: MagentoOrderAddressFactory,
    shipmentFactory: MagentoOrderShipmentFactory,
    paymentFactory: MagentoOrderPaymentFactory,
    invoiceFactory: MagentoOrderInvoiceFactory,
    creditFactory: MagentoOrderCreditFactory,
    protected moneyFactory: MagentoMoneyFactory,
  ) {
    super(
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

@Injectable({
  providedIn: 'root',
})
export class MagentoCustomerOrderWithStoreCreditFactory extends DaffModelFactory<MagentoCustomerOrderWithStoreCredit> {
  constructor(
    totalFactory: MagentoOrderTotalFactory,
    itemFactory: MagentoOrderItemFactory,
    addressFactory: MagentoOrderAddressFactory,
    shipmentFactory: MagentoOrderShipmentFactory,
    paymentFactory: MagentoOrderPaymentFactory,
    invoiceFactory: MagentoOrderInvoiceFactory,
    creditFactory: MagentoOrderCreditFactory,
    moneyFactory: MagentoMoneyFactory,
  ) {
    super(
      MockMagentoCustomerOrderWithStoreCredit,
      totalFactory,
      itemFactory,
      addressFactory,
      shipmentFactory,
      paymentFactory,
      invoiceFactory,
      creditFactory,
      moneyFactory,
    );
  }
}
