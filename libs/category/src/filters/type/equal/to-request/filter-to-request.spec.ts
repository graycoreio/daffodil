import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterEqual,
  DaffCategoryFilterEqualOption,
  DaffCategoryFilterTypeReplacement,
  DaffCategoryFilterEqualRequestReplacement,
  daffCategoryFilterEqualOptionArrayToDict,
} from '@daffodil/category';
import {
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterEqualOptionFactory,
} from '@daffodil/category/testing';

import { daffCategoryFilterEqualToRequest } from './filter-to-request';

describe('@daffodil/category | filters | equal | daffCategoryFilterEqualToRequest', () => {
  let equalFilterFactory: DaffCategoryFilterEqualFactory;
  let equalFilterOptionFactory: DaffCategoryFilterEqualOptionFactory;

  let appliedEqualFilter: DaffCategoryFilterEqual;
  let appliedEqualFilterOption0: DaffCategoryFilterEqualOption;
  let appliedEqualFilterOption1: DaffCategoryFilterEqualOption;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffCategoryFilterEqualFactory);
    equalFilterOptionFactory = TestBed.inject(DaffCategoryFilterEqualOptionFactory);

    [appliedEqualFilterOption0, appliedEqualFilterOption1] = equalFilterOptionFactory.createMany(2, {
      applied: true,
    });
    appliedEqualFilter = equalFilterFactory.create({
      options: daffCategoryFilterEqualOptionArrayToDict([appliedEqualFilterOption0, appliedEqualFilterOption1]),
    });
  });

  describe('when the filter has applied options', () => {
    let result: DaffCategoryFilterEqualRequestReplacement;

    beforeEach(() => {
      result = daffCategoryFilterEqualToRequest(appliedEqualFilter);
    });

    it('should set the request type to equal', () => {
      expect(result.type).toEqual(DaffCategoryFilterTypeReplacement.Equal);
    });

    it('should build the request from the applied options', () => {
      expect(result.name).toEqual(appliedEqualFilter.name);
      expect(result.value).toContain(appliedEqualFilterOption0.value);
      expect(result.value).toContain(appliedEqualFilterOption1.value);
    });
  });
});
