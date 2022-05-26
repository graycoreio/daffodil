import { TestBed } from '@angular/core/testing';

import { DaffSortOptions } from '@daffodil/core';

import { DaffSortOptionsFactory } from './sort-options.factory';

describe('@daffodil/core/testing | DaffSortOptionsFactory', () => {
  let factory: DaffSortOptionsFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffSortOptionsFactory],
    });

    factory = TestBed.inject(DaffSortOptionsFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffSortOptions;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.default).toBeDefined();
      expect(result.options).toBeDefined();
    });

    it('should pull the default value from its list of options', () => {
      expect(result.options.find(option => option.value === result.default)).toBeTruthy();
    });
  });
});
