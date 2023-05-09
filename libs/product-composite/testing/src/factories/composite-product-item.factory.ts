import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffCompositeProductItem,
  DaffCompositeProductItemInputEnum,
} from '@daffodil/product-composite';

import { DaffCompositeProductItemOptionFactory } from './composite-product-item-option.factory';

/**
 * Mocked DaffCompositeProductItem object.
 */
export class MockCompositeProductItem implements DaffCompositeProductItem {
  id = faker.datatype.uuid();
  url = `/${faker.internet.domainWord()}.html`;
  required = faker.datatype.boolean();
  title = faker.commerce.productName();
  input_type = DaffCompositeProductItemInputEnum.select;
  options = [
    this.optionFactory.create({
      is_default: true,
    }),
    this.optionFactory.create({
      is_default: false,
    }),
  ];

  constructor(
    protected optionFactory: DaffCompositeProductItemOptionFactory,
  ) {}
}

/**
 * Factory for creating DaffCompositeProductItems.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCompositeProductItemFactory extends DaffModelFactory<DaffCompositeProductItem>{
  constructor(
    optionFactory: DaffCompositeProductItemOptionFactory,
  ) {
    super(MockCompositeProductItem, optionFactory);
  }
}
