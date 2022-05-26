import { TestBed } from '@angular/core/testing';

import { DaffProductFilterEqualOption } from '@daffodil/product';

import { DaffProductFilterEqualOptionFactory } from './option';

describe('@daffodil/product/testing | DaffProductFilterEqualOptionFactory', () => {

  let factory: DaffProductFilterEqualOptionFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffProductFilterEqualOptionFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffProductFilterEqualOption;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return an equal option', () => {
      expect(result.value).toBeDefined();
      expect(typeof result.value).toEqual('string');
      expect(result.applied).toEqual(false);
      expect(typeof result.count).toEqual('number');
    });
  });
});
