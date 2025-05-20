import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

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
  id = faker.string.uuid();
  prices = {
    __typename: 'CartItemPrices',
    price: this.money(),
    row_total: this.money(),
    discounts: this.discounts(faker.number.int({ min: 0, max: 2 })),
  };
  product = this.createProduct();
  quantity = faker.number.int({ min: 1, max: 20 });

  private createProduct(): MagentoCartItemProduct {
    return {
      __typename: 'SimpleProduct',
      id: faker.number.int({ min: 1, max: 1500 }),
      name: faker.lorem.word(),
      url_key: faker.lorem.word(),
      url_suffix: '.html',
      sku: faker.commerce.product(),
      thumbnail: {
        __typename: 'Thumbnail',
        label: faker.lorem.word(),
        url: faker.image.url(),
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
