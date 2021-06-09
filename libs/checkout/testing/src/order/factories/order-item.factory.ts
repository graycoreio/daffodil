import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffOrderItem } from '@daffodil/checkout';
import { DaffModelFactory } from '@daffodil/core/testing';

/**
 * @deprecated
 */
export class MockOrderItem implements DaffOrderItem {
  item_id = faker.datatype.number({ min: 1, max: 1000 });
  image = null;
  quote_id = faker.datatype.number({ min: 1, max: 1000 });
  created_at = new Date();
  updated_at = new Date();
  product_id = faker.datatype.number({ min: 1, max: 1000 });
  parent_item_id = faker.datatype.number({ min: 1, max: 1000 });
  sku = 'sku';
  name = 'Product Name';
  description = 'description';
  weight = faker.datatype.number({ min: 1, max: 1000 });
  qty = faker.datatype.number({ min:1, max:100 });
  price = faker.datatype.number({ min: 1, max: 1000 });
  discount_percent = faker.datatype.number({ min: 1, max: 10 });
  discount_amount = faker.datatype.number({ min: 1, max: 100 });
  tax_percent = faker.datatype.number({ min: 1, max: 10 });
  tax_amount = faker.datatype.number({ min: 1, max: 10 });
  row_total = faker.datatype.number({ min: 1, max: 1000 });
  row_total_with_discount = faker.datatype.number({ min: 1, max: 1000 });
  row_weight = faker.datatype.number({ min: 1, max: 100 });
  tax_before_discount = faker.datatype.number({ min: 1, max: 100 });
}

/**
 * @deprecated
 */
@Injectable({
  providedIn: 'root',
})
export class DaffOrderItemFactory extends DaffModelFactory<DaffOrderItem> {

  constructor(){
    super(MockOrderItem);
  }
}
