import {
  DaffCategoryFilterRangeRequest,
  DaffCategoryFilterType,
  DaffCategoryFilter,
} from '../../../../../models/public_api';
import { daffApplyFilterRange } from './apply';

describe('@daffodil/category | behaviors | filters | range | apply', () => {

  it('should apply the filter, when the currently applied filters are empty', () => {
    const request: DaffCategoryFilterRangeRequest = {
      type: DaffCategoryFilterType.Range,
      name: 'price',
      value: {
        max: '0',
        min: '20',
      },
    };

    const filter: DaffCategoryFilter = {
      type: DaffCategoryFilterType.Range,
      name: 'price',
      label: 'price',
      min: '0',
      max: '200',
      options: [],
    };

    const expected: DaffCategoryFilter = {
      type: DaffCategoryFilterType.Range,
      name: 'price',
      label: 'price',
      min: '0',
      max: '200',
      options: [
        {
          applied: true,
          min: '0',
          max: '20',
        },
      ],
    };

    expect(daffApplyFilterRange(request, filter)).toEqual(expected);
  });

  it('should do nothing if the same filter is already applied', () => {
    const request: DaffCategoryFilterRangeRequest = {
      type: DaffCategoryFilterType.Range,
      name: 'price',
      value: {
        max: '0',
        min: '20',
      },
    };

    const filter: DaffCategoryFilter = {
      type: DaffCategoryFilterType.Range,
      name: 'price',
      label: 'price',
      min: '0',
      max: '200',
      options: [
        {
          applied: true,
          min: '0',
          max: '20',
        },
      ],
    };

    const expected: DaffCategoryFilter = {
      type: DaffCategoryFilterType.Range,
      name: 'price',
      label: 'price',
      min: '0',
      max: '200',
      options: [
        {
          applied: true,
          min: '0',
          max: '20',
        },
      ],
    };

    expect(daffApplyFilterRange(request, filter)).toEqual(expected);
  });

  it('should remove the old filter, and apply the new one when an existing filter is already applied', () => {
    const request: DaffCategoryFilterRangeRequest = {
      type: DaffCategoryFilterType.Range,
      name: 'price',
      value: {
        max: '0',
        min: '20',
      },
    };

    const filter: DaffCategoryFilter = {
      type: DaffCategoryFilterType.Range,
      name: 'price',
      label: 'price',
      min: '0',
      max: '200',
      options: [
        {
          applied: true,
          min: '0',
          max: '200',
        },
      ],
    };

    const expected: DaffCategoryFilter = {
      type: DaffCategoryFilterType.Range,
      name: 'price',
      label: 'price',
      min: '0',
      max: '200',
      options: [
        {
          applied: true,
          min: '0',
          max: '20',
        },
      ],
    };

    expect(daffApplyFilterRange(request, filter)).toEqual(expected);
  });

});
