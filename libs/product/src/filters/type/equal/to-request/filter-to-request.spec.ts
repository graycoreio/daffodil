import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterEqual,
  DaffProductFilterEqualOption,
  DaffProductFilterType,
  DaffProductFilterEqualRequest,
  daffProductFilterEqualOptionArrayToDict,
} from '@daffodil/product';
import {
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
} from '@daffodil/product/testing';

import { daffProductFilterEqualToRequest } from './filter-to-request';

describe('@daffodil/product | filters | equal | daffProductFilterEqualToRequest', () => {
  let equalFilterFactory: DaffProductFilterEqualFactory;
  let equalFilterOptionFactory: DaffProductFilterEqualOptionFactory;

  let appliedEqualFilter: DaffProductFilterEqual;
  let appliedEqualFilterOption0: DaffProductFilterEqualOption;
  let appliedEqualFilterOption1: DaffProductFilterEqualOption;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffProductFilterEqualFactory);
    equalFilterOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);

    [appliedEqualFilterOption0, appliedEqualFilterOption1] = equalFilterOptionFactory.createMany(2, {
      applied: true,
    });
    appliedEqualFilter = equalFilterFactory.create({
      options: daffProductFilterEqualOptionArrayToDict([appliedEqualFilterOption0, appliedEqualFilterOption1]),
    });
  });

  describe('when the filter has applied options', () => {
    let result: DaffProductFilterEqualRequest;

    beforeEach(() => {
      result = daffProductFilterEqualToRequest(appliedEqualFilter);
    });

    it('should set the request type to equal', () => {
      expect(result.type).toEqual(DaffProductFilterType.Equal);
    });

    it('should build the request from the applied options', () => {
      expect(result.name).toEqual(appliedEqualFilter.name);
      expect(result.value).toContain(appliedEqualFilterOption0.value);
      expect(result.value).toContain(appliedEqualFilterOption1.value);
    });
  });
});
