import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffProductImageFactory,
  MockProduct,
  DaffProductCustomAttributeValueFactory,
} from '@daffodil/product/testing';
import { DaffCompositeProductItemOption } from '@daffodil/product-composite';

/**
 * Mocked DaffCompositeProductItemOption object.
 */
export class MockCompositeProductItemOption extends MockProduct implements DaffCompositeProductItemOption {
  quantity = faker.number.int({ min: 1, max: 9 });
  is_default = faker.datatype.boolean();
}

/**
 * Factory for creating DaffCompositeProductItemOptions.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCompositeProductItemOptionFactory extends DaffModelFactory<DaffCompositeProductItemOption, typeof MockCompositeProductItemOption>{
  constructor(
    imageFactory: DaffProductImageFactory,
    customAttributeFactory: DaffProductCustomAttributeValueFactory,
  ) {
    super(MockCompositeProductItemOption, imageFactory, customAttributeFactory);
  }
}
