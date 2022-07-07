import { TestBed } from '@angular/core/testing';

import { DaffNumericallyPaginable } from '@daffodil/core';

import { DaffNumericallyPaginableFactory } from './numerically-paginable.factory';

describe('@daffodil/core/testing | DaffNumericallyPaginableFactory', () => {

  let factory: DaffNumericallyPaginableFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffNumericallyPaginableFactory],
    });

    factory = TestBed.inject(DaffNumericallyPaginableFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffNumericallyPaginable;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.currentPage).toBeDefined();
      expect(result.pageSize).toBeDefined();
      expect(result.totalPages).toBeDefined();
    });

    it('should set current page to be less than or equal to total pages', () => {
      expect(result.currentPage).toBeLessThanOrEqual(result.totalPages);
    });
  });
});
