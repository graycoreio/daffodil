import {
  DaffCategoryFilterEqualRequest,
  DaffCategoryFilterOption,
  DaffCategoryFilterType,
  DaffCategoryEqualFilter,
} from '../../../../../models/public_api';
import { daffApplyFilterEqual } from './apply';

fdescribe('@daffodil/category | behaviors | filters | apply | equal', () => {

  it('should not apply any option that do not equal the request value', () => {
    const request: DaffCategoryFilterEqualRequest = {
      type: DaffCategoryFilterType.Equal,
      name: 'name',
      value: ['value'],
    };

    const filter: DaffCategoryEqualFilter = {
      type: DaffCategoryFilterType.Equal,
      label: 'Name',
      name: 'name',
      options: [],
    };

    const expected: DaffCategoryEqualFilter = {
      type: DaffCategoryFilterType.Equal,
      label: 'Name',
      name: 'name',
      options: [],
    };

    expect(daffApplyFilterEqual(request, filter)).toEqual(expected);
  });

  it('should apply an option that does equal the request value', () => {
    const request: DaffCategoryFilterEqualRequest = {
      type: DaffCategoryFilterType.Equal,
      name: 'name',
      value: ['value'],
    };
    const filter: DaffCategoryEqualFilter = {
      type: DaffCategoryFilterType.Equal,
      label: 'Name',
      name: 'name',
      options: [
        {
          applied: false,
          value: 'value',
          label: 'label',
          count: 2,
        },
      ],
    };

    const expected: DaffCategoryEqualFilter = {
      type: DaffCategoryFilterType.Equal,
      label: 'Name',
      name: 'name',
      options: [
        {
          applied: true,
          value: 'value',
          label: 'label',
          count: 2,
        },
      ],
    };

    expect(daffApplyFilterEqual(request, filter)).toEqual(expected);
  });

  it('should apply multiple options if they equal the request values', () => {
    const request: DaffCategoryFilterEqualRequest = {
      type: DaffCategoryFilterType.Equal,
      name: 'name',
      value: ['value2', 'value'],
    };

    const filter: DaffCategoryEqualFilter = {
      type: DaffCategoryFilterType.Equal,
      label: 'Name',
      name: 'name',
      options: [
        {
          applied: false,
          value: 'value2',
          label: 'label',
          count: 2,
        },
        {
          applied: false,
          value: 'value',
          label: 'label',
          count: 2,
        },
      ],
    };

    const expected: DaffCategoryEqualFilter = {
      type: DaffCategoryFilterType.Equal,
      label: 'Name',
      name: 'name',
      options: [
        {
          applied: true,
          value: 'value2',
          label: 'label',
          count: 2,
        },
        {
          applied: true,
          value: 'value',
          label: 'label',
          count: 2,
        },
      ],
    };

    expect(daffApplyFilterEqual(request, filter)).toEqual(expected);
  });
});
