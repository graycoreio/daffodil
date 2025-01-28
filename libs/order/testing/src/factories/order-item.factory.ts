import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffOrderItem,
  DaffOrderItemType,
} from '@daffodil/order';

export class MockOrderItem implements DaffOrderItem {
  id = faker.datatype.uuid();
  image = {
    url: faker.image.imageUrl(),
    id: faker.datatype.uuid(),
    label: faker.random.word(),
  };
  order_id = faker.datatype.uuid();
  qty_ordered = faker.datatype.number({ min: 1, max: 1000 });
  qty_canceled = faker.datatype.number({ min: 1, max: 1000 });
  qty_fulfilled = faker.datatype.number({ min: 1, max: 1000 });
  created_at = faker.date.past().toString();
  updated_at = faker.date.past().toString();
  product_id = faker.datatype.uuid();
  parent_item_id = faker.datatype.uuid();
  sku = faker.random.alphaNumeric(20);
  name = faker.random.word();
  weight = faker.datatype.number({ min: 1, max: 1000 });
  qty = faker.datatype.number({ min: 1, max: 10 });
  price = faker.datatype.number({ min: 1, max: 1000 });
  discount_amount = faker.datatype.number({ min: 1, max: this.price });
  discount_percent = Math.floor(this.discount_amount / this.price * 100);
  tax_percent = faker.datatype.number({ min: 1, max: 10 });
  tax_amount = faker.datatype.number({ min: 1, max: 10 });
  row_total = this.price * this.qty;
  row_total_with_discount = (this.price - this.discount_amount) * this.qty;
  row_weight = faker.datatype.number({ min: 1, max: 100 });
  tax_before_discount = faker.datatype.number({ min: 1, max: 100 });
  type = DaffOrderItemType.Simple;
}

@Injectable({
  providedIn: 'root',
})
export class DaffOrderItemFactory extends DaffModelFactory<DaffOrderItem> {
  constructor() {
    super(MockOrderItem);
  }
}
