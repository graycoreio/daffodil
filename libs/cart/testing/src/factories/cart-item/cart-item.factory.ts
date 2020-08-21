import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCartItem, DaffCartItemInputType, DaffCartItemStockEnum } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProductImageFactory } from '@daffodil/product/testing';
import { DaffProductImage } from '@daffodil/product';

export class MockCartItem implements DaffCartItem {
	item_id = faker.random.number({min: 1, max: 1000});
	type = DaffCartItemInputType.Simple;
  product_id = faker.random.number({min: 1, max: 1000});
	parent_item_id = faker.random.number({min: 1, max: 1000});
	image = <DaffProductImage>new DaffProductImageFactory().create();
  sku = 'sku';
  name = 'Product Name';
  qty = faker.random.number({min:1, max:100});
  price = faker.random.number({min: 1, max: 1500});
  row_total = this.qty * this.price
	total_discount = faker.random.number({min: 0, max: this.price - 1});
	stock_status = DaffCartItemStockEnum.InStock;
}

@Injectable({
  providedIn: 'root'
})
export class DaffCartItemFactory extends DaffModelFactory<DaffCartItem> {

  constructor(){
    super(MockCartItem);
  }
}
