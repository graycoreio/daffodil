import * as faker from 'faker/locale/en_US';

import {
  DaffCategoryEqualFilter,
  DaffCategoryFilterType,
} from '@daffodil/category';

export class MockCategoryEqualFilter implements DaffCategoryEqualFilter {
  type: DaffCategoryFilterType.Equal = DaffCategoryFilterType.Equal;
  label = faker.commerce.productMaterial();
  name = faker.random.uuid();
  options = [
    ...faker.random.arrayElements(faker.random.number({ min: 1, max: 5 })).map(() => ({
      label: faker.commerce.productAdjective(),
      value: faker.random.uuid(),
      count: 1,
      applied: false,
    })),
  ];
}
