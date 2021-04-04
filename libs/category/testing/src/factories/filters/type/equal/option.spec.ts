import { TestBed } from '@angular/core/testing';

import { DaffCategoryFilterEqualOption } from '@daffodil/category';

import { DaffCategoryFilterEqualOptionFactory } from './option';

describe('Category | Testing | Factories | DaffCategoryFilterEqualOptionFactory', () => {

  let factory: DaffCategoryFilterEqualOptionFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffCategoryFilterEqualOptionFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCategoryFilterEqualOption;

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
