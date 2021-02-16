import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import { DaffCartItem, DaffCartItemInputType, DaffCartItemDiscount } from '@daffodil/cart';
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
  qty = faker.random.number({min: 1, max: 100});
  price = faker.random.number({min: 1, max: 1500});
  row_total = this.qty * this.price
	in_stock = true;
  _numberOfDiscounts = faker.random.number({min: 0, max: 2});
  discounts = this._discounts(this._numberOfDiscounts, Math.floor(this.price / this._numberOfDiscounts));

  private _discounts(number = 2, max = 100): DaffCartItemDiscount[] {
    return new Array(faker.random.number(number)).fill(null).map(() => ({
      amount: faker.random.number({min: 1, max}),
      label: faker.random.word()
    }))
  }
}

@Injectable({
  providedIn: 'root'
})
export class DaffCartItemFactory extends DaffModelFactory<DaffCartItem> {

  constructor(){
    super(DaffMockCartItem);
  }
}
