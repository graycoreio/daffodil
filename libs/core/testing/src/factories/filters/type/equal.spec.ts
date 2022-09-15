import { TestBed } from '@angular/core/testing';

import {
  DaffFilterType,
  DaffFilterEqual,
} from '@daffodil/core';

import { DaffFilterEqualFactory } from './equal';

describe('@daffodil/core/testing | DaffFilterEqualFactory', () => {

  let factory: DaffFilterEqualFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffFilterEqualFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffFilterEqual;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a filter of type equal', () => {
      expect(result.type).toEqual(DaffFilterType.Equal);
      expect(result.options).toBeDefined();
      expect(Object.keys(result.options).length).toEqual(0);
    });
  });
});
