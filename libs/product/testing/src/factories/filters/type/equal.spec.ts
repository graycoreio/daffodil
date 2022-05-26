import { TestBed } from '@angular/core/testing';

import {
  DaffProductFilterType,
  DaffProductFilterEqual,
} from '@daffodil/product';

import { DaffProductFilterEqualFactory } from './equal';

describe('@daffodil/product/testing | DaffProductFilterEqualFactory', () => {

  let factory: DaffProductFilterEqualFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffProductFilterEqualFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffProductFilterEqual;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a product filter of type equal', () => {
      expect(result.type).toEqual(DaffProductFilterType.Equal);
      expect(result.options).toBeDefined();
      expect(Object.keys(result.options).length).toEqual(0);
    });
  });
});
