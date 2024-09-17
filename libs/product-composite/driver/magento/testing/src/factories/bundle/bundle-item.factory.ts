import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  MagentoBundledProductItem,
  MagentoBundledProductItemOption,
} from '@daffodil/product-composite/driver/magento';

import { MagentoBundledProductItemOptionFactory } from './bundle-item-option.factory';


export class MockMagentoBundledProductItem implements MagentoBundledProductItem {
  constructor(
    private optionFactory: MagentoBundledProductItemOptionFactory,
  ) {}
  required = faker.datatype.boolean();
  title = faker.random.word();
  type = faker.random.word();
  options = this.createOptions();
  option_id = faker.datatype.number({ min: 1, max: 9999 });

  protected createOptions(): MagentoBundledProductItemOption[] {
    return this.optionFactory.createMany(faker.datatype.number({ min: 1, max: 5 }));
  }
}

/**
 * A factory for creating stub data for {@link MagentoBundledProduct}s.
 */
@Injectable({
  providedIn: 'root',
})
export class MagentoBundledProductItemFactory extends DaffModelFactory<MagentoBundledProductItem> {
  constructor(
    optionFactory: MagentoBundledProductItemOptionFactory,
  ) {
    super(MockMagentoBundledProductItem, optionFactory);
  }
}
