import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffOrderItem, DaffOrderItemType } from '@daffodil/order';

import { DaffModelFactory } from '@daffodil/core/testing';

export class MockOrderItem implements DaffOrderItem {
  item_id = faker.random.number({min: 1, max: 1000});
  image = {
    url: faker.image.imageUrl,
    id: faker.random.number({min: 1, max: 1000}),
    label: faker.random.word()
  };
  order_id = faker.random.number({min: 1, max: 1000});
  qty_ordered = faker.random.number({min: 1, max: 1000});
  qty_canceled = faker.random.number({min: 1, max: 1000});
  qty_fulfilled = faker.random.number({min: 1, max: 1000});
  created_at = faker.date.past();
  updated_at = faker.date.past();
  product_id = faker.random.number({min: 1, max: 1000});
  parent_item_id = faker.random.number({min: 1, max: 1000});
  sku = faker.random.alphanumeric(20);
  name = faker.random.word();
  weight = faker.random.number({min: 1, max: 1000});
  qty = faker.random.number({min: 1, max: 10});
  price = faker.random.number({min: 1, max: 1000});
  discount_amount = faker.random.number({min: 1, max: this.price});
  discount_percent = Math.floor(this.discount_amount / this.price * 100);
  tax_percent = faker.random.number({min: 1, max: 10});
  tax_amount = faker.random.number({min: 1, max: 10});
  row_total = this.price * this.qty;
  row_total_with_discount = (this.price - this.discount_amount) * this.qty;
  row_weight = faker.random.number({min: 1, max: 100});
  tax_before_discount = faker.random.number({min: 1, max: 100});
  type = DaffOrderItemType.Simple;
}

@Injectable({
  providedIn: 'root'
})
export class DaffOrderItemFactory extends DaffModelFactory<DaffOrderItem> {

  constructor(){
    super(MockOrderItem);
  }
}
