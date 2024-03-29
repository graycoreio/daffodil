import { TestBed } from '@angular/core/testing';

import { DaffCategory } from '@daffodil/category';
import {
  DaffCategoryPageLoadSuccess,
  DaffCategoryLoadSuccess,
} from '@daffodil/category/state';
import { DaffCategoryFactory } from '@daffodil/category/testing';

import { daffCategoryEntitiesAdapter } from './category-entities-adapter';
import { daffCategoryEntitiesReducer } from './category-entities.reducer';

describe('@daffodil/category/state | daffCategoryEntitiesReducer', () => {
  let categoryFactory: DaffCategoryFactory;

  beforeEach(() => {
    categoryFactory = TestBed.inject(DaffCategoryFactory);
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = <any>{};

      const result = daffCategoryEntitiesReducer(daffCategoryEntitiesAdapter<DaffCategory>().getInitialState(), action);

      expect(result).toEqual(daffCategoryEntitiesAdapter<DaffCategory>().getInitialState());
    });
  });

  describe('when CategoryPageLoadSuccessAction is triggered', () => {

    let category: DaffCategory;
    let result;
    let categoryId;

    beforeEach(() => {
      category = categoryFactory.create();
      categoryId = category.id;

      const categoryLoadSuccess = new DaffCategoryPageLoadSuccess({ category, categoryPageMetadata: null, products: null });

      result = daffCategoryEntitiesReducer(daffCategoryEntitiesAdapter<DaffCategory>().getInitialState(), categoryLoadSuccess);
    });

    it('sets expected category on state', () => {
      expect(result.entities[categoryId]).toEqual(category);
    });
  });

  describe('when CategoryLoadSuccessAction is triggered', () => {

    let category: DaffCategory;
    let result;
    let categoryId;

    beforeEach(() => {
      category = categoryFactory.create();
      categoryId = category.id;

      const categoryLoadSuccess = new DaffCategoryLoadSuccess({ category, categoryPageMetadata: null, products: null });

      result = daffCategoryEntitiesReducer(daffCategoryEntitiesAdapter<DaffCategory>().getInitialState(), categoryLoadSuccess);
    });

    it('sets expected category on state', () => {
      expect(result.entities[categoryId]).toEqual(category);
    });
  });
});
