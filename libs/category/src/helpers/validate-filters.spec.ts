import { DaffCategoryFilterType } from '@daffodil/category';

import { daffCategoryValidateFilters } from './validate-filters';

describe('Category | Helpers | daffCategoryValidateFilters', () => {
  it('should throw an error when two filters share the same name', () => {
    expect(() => {
      daffCategoryValidateFilters([{
        name: 'name',
        value: ['value'],
        type: DaffCategoryFilterType.Equal,
      },
      {
        name: 'name',
        value: ['value2'],
        type: DaffCategoryFilterType.Equal,
      },
      ]);
    }).toThrowError('More than one category filter of the same name exists. These should' +
						' be combined into a single filter action with multiple values.');
  });
});
