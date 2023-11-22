import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffProductImageFactory,
  MockProduct,
} from '@daffodil/product/testing';
import { DaffCompositeProductItemOption } from '@daffodil/product-composite';

/**
 * Mocked DaffCompositeProductItemOption object.
 */
export class MockCompositeProductItemOption extends MockProduct implements DaffCompositeProductItemOption {
  quantity = faker.datatype.number({ min: 1, max: 9 });
  is_default = faker.datatype.boolean();
}

/**
 * Factory for creating DaffCompositeProductItemOptions.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCompositeProductItemOptionFactory extends DaffModelFactory<DaffCompositeProductItemOption>{
  constructor(
    imageFactory: DaffProductImageFactory,
  ) {
    super(MockCompositeProductItemOption, imageFactory);
  }
}
