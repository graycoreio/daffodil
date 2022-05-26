import { TestBed } from '@angular/core/testing';

import { DaffSortable } from '@daffodil/core';

import { DaffSortableFactory } from './sortable.factory';

describe('@daffodil/core/testing | DaffSortableFactory', () => {
  let factory: DaffSortableFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffSortableFactory],
    });

    factory = TestBed.inject(DaffSortableFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffSortable;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.sort_options).toBeDefined();
      expect(result.applied_sort_direction).toBeDefined();
      expect(result.applied_sort_option).toBeDefined();
    });

    it('should pull the applied value from its list of options', () => {
      expect(result.sort_options.options.find(option => option.value === result.applied_sort_option)).toBeTruthy();
    });
  });
});
