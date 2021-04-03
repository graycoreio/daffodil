import {
  DaffCategoryFilterType,
  DaffCategoryEqualFilter,
} from '../../../../../models/public_api';
import { daffClearFilterEqual } from './clear';

describe('@daffodil/category | filters | type | equal | behaviors | clear', () => {

  it('should remove any currently applied filter options', () => {
		const originalFilter: DaffCategoryEqualFilter = {
      type: DaffCategoryFilterType.Equal,
      label: 'Color',
      name: 'color',
      options: {
				red: {
          applied: true,
          value: 'red',
          label: 'Red',
          count: 2,
        },
        blue: {
          applied: true,
          value: 'blue',
          label: 'Blue',
          count: 2,
        },
			},
    };
		const expected: DaffCategoryEqualFilter = {
      type: DaffCategoryFilterType.Equal,
      label: 'Color',
      name: 'color',
      options: {
				red: {
          applied: false,
          value: 'red',
          label: 'Red',
          count: 2,
        },
        blue: {
          applied: false,
          value: 'blue',
          label: 'Blue',
          count: 2,
        },
			},
    };

		expect(daffClearFilterEqual(originalFilter)).toEqual(expected);
  });

  it('should do nothing if there are no options currently applied', () => {
		const originalFilter: DaffCategoryEqualFilter = {
      type: DaffCategoryFilterType.Equal,
      label: 'Color',
      name: 'color',
      options: {
				red: {
          applied: false,
          value: 'red',
          label: 'Red',
          count: 2,
        },
        blue: {
          applied: false,
          value: 'blue',
          label: 'Blue',
          count: 2,
        },
			},
    };

		expect(daffClearFilterEqual(originalFilter)).toEqual(originalFilter);
  });
});
