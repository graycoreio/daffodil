import { TestBed } from '@angular/core/testing';

import {
  DaffFilterEqual,
  DaffFilterEqualOption,
  DaffFilterType,
  DaffFilterEqualRequest,
  daffFilterEqualOptionArrayToDict,
} from '@daffodil/core';
import {
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
} from '@daffodil/core/testing';

import { daffFilterEqualToRequest } from './filter-to-request';

describe('@daffodil/core | filters | equal | daffFilterEqualToRequest', () => {
  let equalFilterFactory: DaffFilterEqualFactory;
  let equalFilterOptionFactory: DaffFilterEqualOptionFactory;

  let appliedEqualFilter: DaffFilterEqual;
  let appliedEqualFilterOption0: DaffFilterEqualOption;
  let appliedEqualFilterOption1: DaffFilterEqualOption;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffFilterEqualFactory);
    equalFilterOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);

    [appliedEqualFilterOption0, appliedEqualFilterOption1] = equalFilterOptionFactory.createMany(2, {
      applied: true,
    });
    appliedEqualFilter = equalFilterFactory.create({
      options: daffFilterEqualOptionArrayToDict([appliedEqualFilterOption0, appliedEqualFilterOption1]),
    });
  });

  describe('when the filter has applied options', () => {
    let result: DaffFilterEqualRequest;

    beforeEach(() => {
      result = daffFilterEqualToRequest(appliedEqualFilter);
    });

    it('should set the request type to equal', () => {
      expect(result.type).toEqual(DaffFilterType.Equal);
    });

    it('should build the request from the applied options', () => {
      expect(result.name).toEqual(appliedEqualFilter.name);
      expect(result.value).toContain(appliedEqualFilterOption0.value);
      expect(result.value).toContain(appliedEqualFilterOption1.value);
    });
  });
});
