import {
  DaffCategoryFilterEqualRequest,
  DaffCategoryFilterOption,
  DaffCategoryFilterType,
} from '../../../../models/public_api';
import { applyFilterEqual } from './apply';

describe('@daffodil/category | behaviors | filters | apply | equal', () => {

  it('should not apply any option that do not equal the request value', () => {
    const request: DaffCategoryFilterEqualRequest = {
      type: DaffCategoryFilterType.Equal,
      name: 'name',
      value: ['value'],
    };

    const options: DaffCategoryFilterOption[] = [];

    const expected = [];

    expect(applyFilterEqual(request, options)).toEqual(expected);
  });

  it('should apply an option that does equal the request value', () => {
    const request: DaffCategoryFilterEqualRequest = {
      type: DaffCategoryFilterType.Equal,
      name: 'name',
      value: ['value'],
    };

    const options: DaffCategoryFilterOption[] = [
      {
        applied: false,
        value: 'value',
        label: 'label',
        count: 2,
      },
    ];

    const expected = [
      {
        applied: true,
        value: 'value',
        label: 'label',
        count: 2,
      },
    ];

    expect(applyFilterEqual(request, options)).toEqual(expected);
  });

  it('should apply multiple options if they equal the request values', () => {
    const request: DaffCategoryFilterEqualRequest = {
      type: DaffCategoryFilterType.Equal,
      name: 'name',
      value: ['value2', 'value'],
    };

    const options: DaffCategoryFilterOption[] = [
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
    ];

    const expected = [
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
    ];

    expect(applyFilterEqual(request, options)).toEqual(expected);
  });
});
