import { TestBed } from '@angular/core/testing';

import { DaffSortOption } from '@daffodil/core';

import { DaffSortOptionFactory } from './sort-option.factory';

describe('@daffodil/core/testing | DaffSortOptionFactory', () => {
  let factory: DaffSortOptionFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffSortOptionFactory],
    });

    factory = TestBed.inject(DaffSortOptionFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffSortOption;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.value).toBeDefined();
      expect(result.label).toBeDefined();
    });
  });
});
