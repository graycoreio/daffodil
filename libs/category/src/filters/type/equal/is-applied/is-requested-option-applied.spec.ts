import { TestBed } from '@angular/core/testing';

import {
  DaffToggleCategoryFilterEqualRequest,
  DaffCategoryEqualFilter,
  DaffCategoryFilterEqualOption,
  daffCategoryFilterEqualOptionArrayToDict,
} from '@daffodil/category';
import {
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterEqualOptionFactory,
  DaffCategoryFilterToggleRequestEqualFactory,
} from '@daffodil/category/testing';

import { daffIsRequestedFilterEqualOptionApplied } from './is-requested-option-applied';


describe('@daffodil/category | filters | equal | daffIsRequestedFilterEqualOptionApplied', () => {
  let equalFilterFactory: DaffCategoryFilterEqualFactory;
  let equalOptionFactory: DaffCategoryFilterEqualOptionFactory;
  let equalToggleRequestFactory: DaffCategoryFilterToggleRequestEqualFactory;

  let equalFilter: DaffCategoryEqualFilter;
  let equalFilterOption: DaffCategoryFilterEqualOption;
  let filterRequest: DaffToggleCategoryFilterEqualRequest;

  let result: boolean;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffCategoryFilterEqualFactory);
    equalOptionFactory = TestBed.inject(DaffCategoryFilterEqualOptionFactory);
    equalToggleRequestFactory = TestBed.inject(DaffCategoryFilterToggleRequestEqualFactory);
  });

  describe('when the requested filter option does not exist', () => {
    beforeEach(() => {
      equalFilter = equalFilterFactory.create({
        options: {},
      });
      filterRequest = equalToggleRequestFactory.create({
        name: equalFilter.name,
      });

      result = daffIsRequestedFilterEqualOptionApplied(filterRequest, equalFilter);
    });

    it('should return false', () => {
      expect(result).toBeFalse();
    });
  });

  describe('when the requested filter option is not applied', () => {
    beforeEach(() => {
      equalFilterOption = equalOptionFactory.create({ applied: false });
      equalFilter = equalFilterFactory.create({
        options: daffCategoryFilterEqualOptionArrayToDict([equalFilterOption]),
      });
      filterRequest = equalToggleRequestFactory.create({
        name: equalFilter.name,
        value: equalFilterOption.value,
      });

      result = daffIsRequestedFilterEqualOptionApplied(filterRequest, equalFilter);
    });

    it('should return false', () => {
      expect(result).toBeFalse();
    });
  });

  describe('when the requested filter option is applied', () => {
    beforeEach(() => {
      equalFilterOption = equalOptionFactory.create({ applied: true });
      equalFilter = equalFilterFactory.create({
        options: daffCategoryFilterEqualOptionArrayToDict([equalFilterOption]),
      });
      filterRequest = equalToggleRequestFactory.create({
        name: equalFilter.name,
        value: equalFilterOption.value,
      });

      result = daffIsRequestedFilterEqualOptionApplied(filterRequest, equalFilter);
    });

    it('should return true', () => {
      expect(result).toBeTrue();
    });
  });
});
