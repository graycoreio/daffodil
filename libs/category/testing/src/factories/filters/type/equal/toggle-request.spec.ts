import { TestBed } from '@angular/core/testing';

import {
  DaffToggleCategoryFilterEqualRequest,
  DaffCategoryFilterType,
} from '@daffodil/category';

import { DaffCategoryFilterToggleRequestEqualFactory } from './toggle-request';

describe('Category | Testing | Factories | DaffCategoryFilterToggleRequestEqualFactory', () => {

  let factory: DaffCategoryFilterToggleRequestEqualFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    factory = TestBed.inject(DaffCategoryFilterToggleRequestEqualFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffToggleCategoryFilterEqualRequest;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return an equal toggle-request', () => {
      expect(result.value).toBeDefined();
      expect(result.type).toEqual(DaffCategoryFilterType.Equal);
      expect(result.name).toBeDefined();
      expect(typeof result.value).toEqual('string');
    });
  });
});
