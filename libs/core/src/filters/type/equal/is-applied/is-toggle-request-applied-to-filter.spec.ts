import { TestBed } from '@angular/core/testing';

import {
  DaffFilterEqualToggleRequest,
  DaffFilterEqual,
  DaffFilterEqualOption,
  daffFilterEqualOptionArrayToDict,
} from '@daffodil/core';
import {
  DaffFilterEqualFactory,
  DaffFilterEqualOptionFactory,
  DaffFilterToggleRequestEqualFactory,
} from '@daffodil/core/testing';

import { daffIsEqualToggleRequestAppliedToFilter } from './is-toggle-request-applied-to-filter';


describe('@daffodil/core | filters | equal | daffIsEqualToggleRequestAppliedToFilter', () => {
  let equalFilterFactory: DaffFilterEqualFactory;
  let equalOptionFactory: DaffFilterEqualOptionFactory;
  let equalToggleRequestFactory: DaffFilterToggleRequestEqualFactory;

  let equalFilter: DaffFilterEqual;
  let equalFilterOption: DaffFilterEqualOption;
  let filterRequest: DaffFilterEqualToggleRequest;

  let result: boolean;

  beforeEach(() => {
    equalFilterFactory = TestBed.inject(DaffFilterEqualFactory);
    equalOptionFactory = TestBed.inject(DaffFilterEqualOptionFactory);
    equalToggleRequestFactory = TestBed.inject(DaffFilterToggleRequestEqualFactory);
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
        options: daffFilterEqualOptionArrayToDict([equalFilterOption]),
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
        options: daffFilterEqualOptionArrayToDict([equalFilterOption]),
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
