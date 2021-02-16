import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCartItem, DaffCartItemInputType } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProductImageFactory } from '@daffodil/product/testing';
import { DaffProductImage } from '@daffodil/product';

export class DaffMockCartItem implements DaffCartItem {
	item_id = faker.random.uuid();
	type = DaffCartItemInputType.Simple;
  product_id = faker.random.uuid();
	parent_item_id = faker.random.uuid();
	image = <DaffProductImage>new DaffProductImageFactory().create();
  sku = 'sku';
  name = 'Product Name';
  qty = faker.random.number({min:1, max:100});
  price = faker.random.number({min: 1, max: 1500});
  row_total = this.qty * this.price
	in_stock = true;
}

@Injectable({
  providedIn: 'root'
})
export class DaffCartItemFactory extends DaffModelFactory<DaffCartItem> {

  constructor(){
    super(DaffMockCartItem);
  }
}
