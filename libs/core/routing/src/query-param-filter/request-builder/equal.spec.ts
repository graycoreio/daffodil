import {
  DaffFilterEqualRequest,
  DaffFilterType,
} from '@daffodil/core';

import { daffRoutingQueryParamFilterRequestEqualBuilder } from './equal';

describe('@daffodil/core/routing | daffRoutingQueryParamFilterRequestEqualBuilder', () => {
  let filterName: string;
  let values: string[];
  let result: DaffFilterEqualRequest;

  beforeEach(() => {
    filterName = 'filterName';
    values = ['5', '3'];

    result = daffRoutingQueryParamFilterRequestEqualBuilder(() => values, filterName);
  });

  it('should build an equal filter from the param map', () => {
    expect(result.type).toEqual(DaffFilterType.Equal);
    expect(result.name).toEqual(filterName);
    expect(result.value).toEqual(values);
  });
});
