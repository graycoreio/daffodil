import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoOrderBundleItemSelectedOption } from '@daffodil/order/driver/magento/2-4-1';

import { MagentoOrderBundleItemSelectedOptionValueFactory } from './bundle-order-item-option-value.factory';

export class MockMagentoOrderBundleItemSelectedOption implements MagentoOrderBundleItemSelectedOption {
  label = faker.random.word();
  values = this.valueFactory.createMany(faker.datatype.number({ min: 1, max: 5 }));

  constructor(
    private valueFactory: MagentoOrderBundleItemSelectedOptionValueFactory,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class MagentoOrderBundleItemSelectedOptionFactory extends DaffModelFactory<MagentoOrderBundleItemSelectedOption> {
  constructor(
    valueFactory: MagentoOrderBundleItemSelectedOptionValueFactory,
  ) {
    super(MockMagentoOrderBundleItemSelectedOption, valueFactory);
  }
}
