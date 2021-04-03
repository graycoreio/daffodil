import {
  DaffCategoryFilterRangeRequest,
  DaffCategoryFilterType,
  DaffCategoryFilter,
} from '../../../../../models/public_api';
import { daffApplyFilterRange } from './apply';

describe('@daffodil/category | filters | type | range | behaviors | apply', () => {

  it('should apply the filter, when the currently applied filters are empty', () => {
    const request: DaffCategoryFilterRangeRequest = {
      type: DaffCategoryFilterType.RangeNumeric,
      name: 'price',
      value: {
        min: 0,
        max: 20,
      },
    };

    const filter: DaffCategoryFilter = {
      type: DaffCategoryFilterType.RangeNumeric,
      name: 'price',
      label: 'price',
      min: 0,
      max: 200,
      options: {},
    };

    const expected: DaffCategoryFilter = {
      type: DaffCategoryFilterType.RangeNumeric,
      name: 'price',
      label: 'price',
      min: 0,
      max: 200,
      options: {
        '0-20': {
          applied: true,
          min: {
            label: '0',
            value: 0,
          },
          max: {
            label: '20',
            value: 20,
          },
        },
			},
    };

    expect(daffApplyFilterRange(request, filter)).toEqual(expected);
  });

  it('should do nothing if the same filter is already applied', () => {
    const request: DaffCategoryFilterRangeRequest = {
      type: DaffCategoryFilterType.RangeNumeric,
      name: 'price',
      value: {
        min: 0,
        max: 20,
      },
    };

    const filter: DaffCategoryFilter = {
      type: DaffCategoryFilterType.RangeNumeric,
      name: 'price',
      label: 'price',
      min: 0,
      max: 200,
      options: {
        '0-20': {
          applied: true,
          min: {
            label: '0',
            value: 0,
          },
          max: {
            label: '20',
            value: 20,
          },
        },
			},
    };

    const expected: DaffCategoryFilter = {
      type: DaffCategoryFilterType.RangeNumeric,
      name: 'price',
      label: 'price',
      min: 0,
      max: 200,
      options: {
        '0-20': {
          applied: true,
          min: {
            label: '0',
            value: 0,
          },
          max: {
            label: '20',
            value: 20,
          },
        },
			},
    };

    expect(daffApplyFilterRange(request, filter)).toEqual(expected);
  });

  it('should remove the old filter, and apply the new one when an existing filter is already applied', () => {
    const request: DaffCategoryFilterRangeRequest = {
      type: DaffCategoryFilterType.RangeNumeric,
      name: 'price',
      value: {
        min: 0,
        max: 20,
      },
    };

    const filter: DaffCategoryFilter = {
      type: DaffCategoryFilterType.RangeNumeric,
      name: 'price',
      label: 'price',
      min: 0,
      max: 200,
      options: {
        '0-20': {
          applied: true,
          min: {
            label: '0',
            value: 0,
          },
          max: {
            label: '20',
            value: 20,
          },
        },
			},
    };

    const expected: DaffCategoryFilter = {
      type: DaffCategoryFilterType.RangeNumeric,
      name: 'price',
      label: 'price',
      min: 0,
      max: 200,
      options: {
        '0-20': {
          applied: true,
          min: {
            label: '0',
            value: 0,
          },
          max: {
            label: '20',
            value: 20,
          },
        },
			},
    };

    expect(daffApplyFilterRange(request, filter)).toEqual(expected);
  });
});
