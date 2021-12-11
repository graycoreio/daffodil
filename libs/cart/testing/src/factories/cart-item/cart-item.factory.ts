import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
  DaffCartItem,
  DaffCartItemInputType,
  DaffCartItemDiscount,
} from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProductImage } from '@daffodil/product';
import { DaffProductImageFactory } from '@daffodil/product/testing';

export class DaffMockCartItem implements DaffCartItem {
	id = faker.datatype.uuid();
	item_id = this.id;
	type = DaffCartItemInputType.Simple;
  product_id = faker.datatype.uuid();
	parent_item_id = faker.datatype.uuid();
	image = <DaffProductImage>new DaffProductImageFactory().create();
  sku = 'sku';
  name = 'Product Name';
  url = `/${faker.internet.domainWord()}.html`;
  qty = faker.datatype.number({ min: 1, max: 100 });
  price = faker.datatype.number({ min: 1, max: 1500 });
  row_total = this.qty * this.price;
	in_stock = true;
  _numberOfDiscounts = faker.datatype.number({ min: 0, max: 2 });
  discounts = this._discounts(this._numberOfDiscounts, Math.floor(this.price / this._numberOfDiscounts));

  private _discounts(number = 2, max = 100): DaffCartItemDiscount[] {
    return new Array(faker.datatype.number(number)).fill(null).map(() => ({
      amount: faker.datatype.number({ min: 1, max }),
      label: faker.random.word(),
    }));
  }
}

@Injectable({
  providedIn: 'root',
})
export class DaffCartItemFactory extends DaffModelFactory<DaffCartItem> {

  constructor(){
    super(DaffMockCartItem);
  }
}
