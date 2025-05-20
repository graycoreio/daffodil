import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffOrderItem,
  DaffOrderItemType,
} from '@daffodil/order';

export class MockOrderItem implements DaffOrderItem {
  id = faker.string.uuid();
  image = {
    url: faker.image.url(),
    id: faker.string.uuid(),
    label: faker.lorem.word(),
  };
  order_id = faker.string.uuid();
  qty_ordered = faker.number.int({ min: 1, max: 1000 });
  qty_canceled = faker.number.int({ min: 1, max: 1000 });
  qty_fulfilled = faker.number.int({ min: 1, max: 1000 });
  created_at = faker.date.past().toString();
  updated_at = faker.date.past().toString();
  product_id = faker.string.uuid();
  parent_item_id = faker.string.uuid();
  sku = faker.string.alphanumeric(20);
  name = faker.lorem.word();
  weight = faker.number.int({ min: 1, max: 1000 });
  qty = faker.number.int({ min: 1, max: 10 });
  price = faker.number.int({ min: 1, max: 1000 });
  discount_amount = faker.number.int({ min: 1, max: this.price });
  discount_percent = Math.floor(this.discount_amount / this.price * 100);
  tax_percent = faker.number.int({ min: 1, max: 10 });
  tax_amount = faker.number.int({ min: 1, max: 10 });
  row_total = this.price * this.qty;
  row_total_with_discount = (this.price - this.discount_amount) * this.qty;
  row_weight = faker.number.int({ min: 1, max: 100 });
  tax_before_discount = faker.number.int({ min: 1, max: 100 });
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
