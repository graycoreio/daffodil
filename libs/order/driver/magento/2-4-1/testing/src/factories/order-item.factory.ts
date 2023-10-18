import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoDiscount } from '@daffodil/driver/magento';
import {
  MagentoDiscountFactory,
  MagentoMoneyFactory,
} from '@daffodil/driver/magento/testing';
import {
  MagentoOrderItem,
  MagentoOrderItemType,
  MagentoOrderItemTypenames,
} from '@daffodil/order/driver/magento/2-4-1';

export class MockOrderItem implements MagentoOrderItem {
  __typename = MagentoOrderItemTypenames.OrderItem;
  quantity_canceled = faker.datatype.number({ min: 1, max: 1000 });
  quantity_invoiced = faker.datatype.number({ min: 1, max: 1000 });
  quantity_ordered = faker.datatype.number({ min: 1, max: 1000 });
  quantity_refunded = faker.datatype.number({ min: 1, max: 1000 });
  quantity_returned = faker.datatype.number({ min: 1, max: 1000 });
  quantity_shipped = faker.datatype.number({ min: 1, max: 1000 });
  product_sku = faker.random.alphaNumeric(20);
  product_type = MagentoOrderItemType.Simple;
  selected_options = [];
  entered_options = [];
  status = faker.random.word();
  product_sale_price = this.moneyFactory.create();
  product_name = faker.random.word();
  product_url_key = faker.random.word();
  discounts = this.createDiscounts();

  constructor(
    private discountFactory: MagentoDiscountFactory,
    private moneyFactory: MagentoMoneyFactory,
  ) {}

  private createDiscounts(): MagentoDiscount[] {
    return this.discountFactory.createMany(faker.datatype.number({ min: 1, max: 3 }));
  }
}

@Injectable({
  providedIn: 'root',
})
export class MagentoOrderItemFactory extends DaffModelFactory<MagentoOrderItem> {
  constructor(
    discountFactory: MagentoDiscountFactory,
    moneyFactory: MagentoMoneyFactory,
  ) {
    super(MockOrderItem, discountFactory, moneyFactory);
  }
}
