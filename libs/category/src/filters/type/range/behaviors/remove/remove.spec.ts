import { DaffCategoryFilter, DaffCategoryFilterRangeRequest, DaffCategoryFilterType } from "libs/category/src/models/public_api";
import { daffRemoveFilterRange } from "./remove";

describe('@daffodil/category | filters | type | range | behaviors | remove', () => {

  it('should remove the filter, when the filter option is the same as the request value', () => {
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
      options: {},
    };

    expect(daffRemoveFilterRange(request, filter)).toEqual(expected);
  });

  it('should do nothing if the same filter is not applied', () => {
    const request: DaffCategoryFilterRangeRequest = {
      type: DaffCategoryFilterType.RangeNumeric,
      name: 'price',
      value: {
        min: 20,
        max: 40,
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

    expect(daffRemoveFilterRange(request, filter)).toEqual(filter);
  });
});
