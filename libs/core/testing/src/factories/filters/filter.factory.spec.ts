import { TestBed } from '@angular/core/testing';

import {
  DaffFilter,
  DaffFilterType,
} from '@daffodil/core';

import { DaffFilterFactory } from './filter.factory';

describe('@daffodil/core/testing | DaffFilterFactory', () => {

  let filterFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffFilterFactory],
    });

    filterFactory = TestBed.inject(DaffFilterFactory);
  });

  it('should be created', () => {
    expect(filterFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffFilter;

    beforeEach(() => {
      result = filterFactory.create();
    });

    describe('when the partial type is equal', () => {
      beforeEach(() => {
        result = filterFactory.create({
          type: DaffFilterType.Equal,
        });
      });

      it('should return an equal filter', () => {
        expect(result.type).toEqual(DaffFilterType.Equal);
      });
    });

    describe('when the partial type is range numeric', () => {
      beforeEach(() => {
        result = filterFactory.create({
          type: DaffFilterType.RangeNumeric,
        });
      });

      it('should return a range numeric filter', () => {
        expect(result.type).toEqual(DaffFilterType.RangeNumeric);
      });
    });

    it('should return a filter of some type', () => {
      expect(result.type).toBeDefined();
    });
  });
});
