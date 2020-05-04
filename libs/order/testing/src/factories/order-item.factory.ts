import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffOrderItem } from '@daffodil/order';

import { DaffModelFactory } from '@daffodil/core/testing';

export class MockOrderItem implements DaffOrderItem {
  item_id = faker.random.number(1000);
  image = null;
  quote_id = faker.random.number(1000);
  created_at = new Date();
  updated_at = new Date();
  product_id = faker.random.number(1000);
  parent_item_id = faker.random.number(1000);
  sku = 'sku';
  name = 'Product Name';
  description = 'description';
  weight = faker.random.number(1000);
  qty = faker.random.number({min:1, max:100});
  price = faker.random.number(1000);
  discount_percent = faker.random.number(10);
  discount_amount = faker.random.number(100);
  tax_percent = faker.random.number(10);
  tax_amount = faker.random.number(10);
  row_total = faker.random.number(1000);
  row_total_with_discount = faker.random.number(1000);
  row_weight = faker.random.number(100);
  tax_before_discount = faker.random.number(100);
}

@Injectable({
  providedIn: 'root'
})
export class DaffOrderItemFactory extends DaffModelFactory<DaffOrderItem> {

  constructor(){
    super(MockOrderItem);
  }
}
