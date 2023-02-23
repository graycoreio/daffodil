import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoBundledProductItemOption } from '@daffodil/product-composite/driver/magento';
import { MagentoSimpleProduct } from '@daffodil/product/driver/magento';
import { MagentoSimpleProductFactory } from '@daffodil/product/driver/magento/testing';


export class MockMagentoBundledProductItemOption implements MagentoBundledProductItemOption {
  constructor(
    private simpleFactory: MagentoSimpleProductFactory,
  ) {}

  uid = faker.datatype.uuid();
  label = faker.random.word();
  quantity = faker.datatype.number({ min: 1, max: 20 });
  is_default = faker.random.boolean();
  position = faker.datatype.number({ min: 1, max: 10 });
  product = this.createProduct();

  protected createProduct(): MagentoSimpleProduct {
    return this.simpleFactory.create();
  }
}

/**
 * A factory for creating stub data for {@link MagentoBundledProduct}s.
 */
@Injectable({
  providedIn: 'root',
})
export class MagentoBundledProductItemOptionFactory extends DaffModelFactory<MagentoBundledProductItemOption> {
  constructor(
    simpleFactory: MagentoSimpleProductFactory,
  ) {
    super(MockMagentoBundledProductItemOption, simpleFactory);
  }
}
