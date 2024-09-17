import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffProduct,
  DaffProductTypeEnum,
} from '@daffodil/product';

import { DaffProductImageFactory } from './product-image.factory';

/**
 * Mocked DaffProduct object.
 */
export class MockProduct implements DaffProduct {
  private stubPrice = faker.datatype.number({ min: 1, max: 1500 });
  private stubDiscount = faker.datatype.number({ min: 0, max: this.stubPrice - 1 });

  type = DaffProductTypeEnum.Simple;
  id = faker.datatype.uuid();
  url = `/${faker.internet.domainWord()}.html`;
  canonicalUrl = faker.internet.url();
  price = this.stubPrice;
  in_stock = true;
  discount = {
    amount: this.stubDiscount,
    percent: Math.floor((this.stubDiscount/this.stubPrice) * 100),
  };
  images = this.imageFactory.createMany(faker.datatype.number({ min: 1, max: 10 }));
  thumbnail = this.imageFactory.create();
  name = faker.commerce.productName();
  brand = faker.company.name();
  description = faker.commerce.productDescription();
  short_description = faker.commerce.productDescription();
  meta_title = faker.commerce.productName();
  meta_description = faker.commerce.productDescription();

  constructor(
    protected imageFactory: DaffProductImageFactory,
  ) {}
}

/**
 * Factory for creating simple `DaffProduct`s of no special kind.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDefaultProductFactory extends DaffModelFactory<DaffProduct> {
  constructor(
    imageFactory: DaffProductImageFactory,
  ) {
    super(MockProduct, imageFactory);
  }
}
