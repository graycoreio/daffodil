import { TestBed } from "@angular/core/testing";
import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import { DaffCategoryFactory } from '@daffodil/category/testing';

import { DaffCategoryLoadSuccess } from "../actions/category.actions";
import * as fromCategory from './index';
import { DaffCategory } from "../models/category";

describe('selectCategoryState', () => {

  let store: Store<fromCategory.State>;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  let mockCategory: DaffCategory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          category: combineReducers(fromCategory.reducers),
        })
      ]
    });

    mockCategory = categoryFactory.create();
    store = TestBed.get(Store);

    store.dispatch(new DaffCategoryLoadSuccess(mockCategory));
  });

  describe('selectCategoryState', () => {

    describe('selectCategoryLoading', () => {

      it('selects the loading state of the category', () => {
        store.pipe(select(fromCategory.selectCategoryLoading)).subscribe((categoryLoadingState) => {
          expect(categoryLoadingState).toEqual(false);
        });
      });
    });

    describe('selectCategoryErrors', () => {

      it('returns the selected category id', () => {
        store.pipe(select(fromCategory.selectCategoryErrors)).subscribe((categoryErrors) => {
          expect(categoryErrors).toEqual([]);
        });
      });
    });
  });

  describe('selectCategoriesState', () => {

    describe('selectCategoriesLoading', () => {

      it('selects the loading state of the category', () => {
        store.pipe(select(fromCategory.selectCategoriesLoading)).subscribe((categoryLoadingState) => {
          expect(categoryLoadingState).toEqual(false);
        });
      });
    });

    describe('selectCategoriesErrors', () => {

      it('returns the selected category id', () => {
        store.pipe(select(fromCategory.selectCategoriesErrors)).subscribe((categoryErrors) => {
          expect(categoryErrors).toEqual([]);
        });
      });
    });
  });

  describe('CategoryEntitiesState', () => {

    describe('selectIds', () => {

      it('selects category ids', () => {
        store.pipe(select(fromCategory.selectCategoryIds)).subscribe((ids) => {
          expect(ids).toEqual(new Array(mockCategory.id));
        });
      });
    });

    describe('selectEntities', () => {

      it('selects category entities as a dictionary object', () => {
        store.pipe(select(fromCategory.selectCategoryEntities)).subscribe((categories) => {
          expect(categories[mockCategory.id]).toEqual(mockCategory);
        });
      });
    });

    describe('selectAll', () => {

      it('selects all categories as an array', () => {
        store.pipe(select(fromCategory.selectAllCategories)).subscribe((categories) => {
          expect(categories[0]).toEqual(mockCategory);
        });
      });
    });

    describe('selectTotal', () => {

      it('selects the total number of categories', () => {
        store.pipe(select(fromCategory.selectCategoryTotal)).subscribe((numberOfCategories) => {
          expect(numberOfCategories).toEqual(1);
        });
      });
    });

    describe('selectCategory', () => {
      
      it('should select the category of the given id', () => {
        store.pipe(select(fromCategory.selectCategory, {id: mockCategory.id})).subscribe((category) => {
          expect(category).toEqual(mockCategory);
        });
      });
    });
  });
});
