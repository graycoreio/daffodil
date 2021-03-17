import { TestBed } from '@angular/core/testing';

import { DaffStatefulCategoryPageConfigurationState } from '@daffodil/category/state';

import { DaffStatefulCategoryPageConfigurationStateFactory } from './stateful-category-page-configuration-state.factory';

describe('Category | State | Testing | Factories | StatefulCategoryPageConfigurationStateFactory', () => {

  let statefulCategoryPageConfigurationStateFactory: DaffStatefulCategoryPageConfigurationStateFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffStatefulCategoryPageConfigurationStateFactory],
    });

    statefulCategoryPageConfigurationStateFactory = TestBed.inject(DaffStatefulCategoryPageConfigurationStateFactory);
  });

  it('should be created', () => {
    expect(statefulCategoryPageConfigurationStateFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffStatefulCategoryPageConfigurationState;

    beforeEach(() => {
      result = statefulCategoryPageConfigurationStateFactory.create();
    });

    it('should return a StatefulCategoryPageConfigurationState with all required fields defined', () => {
      expect(result.daffState).not.toBeNull();
    });
  });
});
