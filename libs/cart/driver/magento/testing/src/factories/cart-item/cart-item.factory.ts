import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import {
  MagentoCartItem,
  MagentoCartItemTypeEnum,
  MagentoCartItemProduct,
} from '@daffodil/cart/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';
import {
  MagentoMoney,
  MagentoDiscount,
} from '@daffodil/driver/magento';
import {
  MagentoMoneyFactory,
  MagentoDiscountFactory,
} from '@daffodil/driver/magento/testing';
import { MagentoProductStockStatusEnum } from '@daffodil/product/driver/magento';

export class MockMagentoCartItem implements MagentoCartItem {
  __typename = MagentoCartItemTypeEnum.Simple;
  id = faker.datatype.uuid();
  prices = {
    __typename: 'CartItemPrices',
    price: this.money(),
    row_total: this.money(),
    discounts: this.discounts(faker.datatype.number({ min: 0, max: 2 })),
  };
  product = this.createProduct();
  quantity = faker.datatype.number({ min: 1, max: 20 });

  private createProduct(): MagentoCartItemProduct {
    return {
      __typename: 'SimpleProduct',
      id: faker.datatype.number({ min: 1, max: 1500 }),
      name: faker.random.word(),
      url_key: faker.random.word(),
      url_suffix: '.html',
      sku: faker.commerce.product(),
      thumbnail: {
        __typename: 'Thumbnail',
        label: faker.random.word(),
        url: faker.random.image(),
      },
      stock_status: MagentoProductStockStatusEnum.InStock,
    };
  }

  private money(): MagentoMoney {
    return (new MagentoMoneyFactory()).create();
  }

  private discounts(number = 2): MagentoDiscount[] {
    return (new MagentoDiscountFactory()).createMany(number);
  }
}

@Injectable({
  providedIn: 'root',
})
export class MagentoCartItemFactory extends DaffModelFactory<MagentoCartItem> {

  constructor(){
    super(MockMagentoCartItem);
  }
}
