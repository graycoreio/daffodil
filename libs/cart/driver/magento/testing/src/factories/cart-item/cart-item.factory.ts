import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
	MagentoCartItem,
	MagentoCartItemTypeEnum
} from '@daffodil/cart/driver/magento';
import { MagentoProduct } from '@daffodil/product';
import { MagentoProductFactory } from '@daffodil/product/testing';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoMoney, MagentoDiscount } from '@daffodil/driver/magento';
import { MagentoMoneyFactory, MagentoDiscountFactory } from '@daffodil/driver/magento/testing';

export class MockMagentoCartItem implements MagentoCartItem {
	__typename = MagentoCartItemTypeEnum.Simple;
  id = faker.random.uuid();
  prices = {
		__typename: 'CartItemPrices',
    price: this.money(),
    row_total: this.money(),
    row_total_including_tax: this.money(),
    discounts: this.discounts(faker.random.number({min: 1, max: 5})),
  };
  product = this.createProduct();
  quantity = faker.random.number({min: 1, max: 20});

  private createProduct(): MagentoProduct {
    return (new MagentoProductFactory()).create()
  }

  private money(): MagentoMoney {
    return (new MagentoMoneyFactory()).create()
  }

  private discounts(amount = 5): MagentoDiscount[] {
    return (new MagentoDiscountFactory()).createMany(amount)
  }
}

@Injectable({
  providedIn: 'root'
})
export class MagentoCartItemFactory extends DaffModelFactory<MagentoCartItem> {

  constructor(){
    super(MockMagentoCartItem);
  }
}
