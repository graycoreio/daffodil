import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterEqualToggleRequest,
  DaffProductFilterEqual,
  DaffProductFilterEqualOption,
  daffProductFilterEqualOptionArrayToDict,
} from '@daffodil/product';
import {
  DaffProductFilterEqualFactory,
  DaffProductFilterEqualOptionFactory,
  DaffProductFilterToggleRequestEqualFactory,
} from '@daffodil/product/testing';

import { daffIsEqualToggleRequestAppliedToFilter } from './is-toggle-request-applied-to-filter';


describe('@daffodil/product | filters | equal | daffIsEqualToggleRequestAppliedToFilter', () => {
  let equalFilterFactory: DaffProductFilterEqualFactory;
  let equalOptionFactory: DaffProductFilterEqualOptionFactory;
  let equalToggleRequestFactory: DaffProductFilterToggleRequestEqualFactory;

  let equalFilter: DaffProductFilterEqual;
  let equalFilterOption: DaffProductFilterEqualOption;
  let filterRequest: DaffProductFilterEqualToggleRequest;

  let result: boolean;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffProductFilterEqualFactory);
    equalOptionFactory = TestBed.inject(DaffProductFilterEqualOptionFactory);
    equalToggleRequestFactory = TestBed.inject(DaffProductFilterToggleRequestEqualFactory);
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
        options: daffProductFilterEqualOptionArrayToDict([equalFilterOption]),
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
        options: daffProductFilterEqualOptionArrayToDict([equalFilterOption]),
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
