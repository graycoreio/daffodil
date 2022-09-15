import { TestBed } from '@angular/core/testing';

import { DaffFilterEqualOption } from '@daffodil/core';

import { DaffFilterEqualOptionFactory } from './option';

describe('@daffodil/core/testing | DaffFilterEqualOptionFactory', () => {

  let factory: DaffFilterEqualOptionFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffFilterEqualOptionFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffFilterEqualOption;

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
