import * as faker from 'faker/locale/en_US';

import {
  DaffCategoryRangeFilter,
  DaffCategoryFilterType,
} from '@daffodil/category';

export class MockCategoryRangeFilter implements DaffCategoryRangeFilter {
  type: DaffCategoryFilterType.Range = DaffCategoryFilterType.Range;
  label = faker.commerce.productMaterial();
  name = faker.random.uuid();
  min = faker.random.number({ min: 1, max: 10 }).toString();
  max = faker.random.number({ min: 10, max: 200 }).toString();
  options = [];
}
