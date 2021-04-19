import { TestBed } from '@angular/core/testing';

import {
  DaffCategoryFilterEqualToggleRequest,
  DaffCategoryFilterEqual,
  DaffCategoryFilterEqualOption,
  daffCategoryFilterEqualOptionArrayToDict,
} from '@daffodil/category';
import {
  DaffCategoryFilterEqualFactory,
  DaffCategoryFilterEqualOptionFactory,
  DaffCategoryFilterToggleRequestEqualFactory,
} from '@daffodil/category/testing';

import { daffIsEqualToggleRequestAppliedToFilter } from './is-toggle-request-applied-to-filter';


describe('@daffodil/category | filters | equal | daffIsEqualToggleRequestAppliedToFilter', () => {
  let equalFilterFactory: DaffCategoryFilterEqualFactory;
  let equalOptionFactory: DaffCategoryFilterEqualOptionFactory;
  let equalToggleRequestFactory: DaffCategoryFilterToggleRequestEqualFactory;

  let equalFilter: DaffCategoryFilterEqual;
  let equalFilterOption: DaffCategoryFilterEqualOption;
  let filterRequest: DaffCategoryFilterEqualToggleRequest;

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

      result = daffIsEqualToggleRequestAppliedToFilter(filterRequest, equalFilter);
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

      result = daffIsEqualToggleRequestAppliedToFilter(filterRequest, equalFilter);
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

      result = daffIsEqualToggleRequestAppliedToFilter(filterRequest, equalFilter);
    });

    it('should return true', () => {
      expect(result).toBeTrue();
    });
  });
});
