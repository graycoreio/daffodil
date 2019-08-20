import { TestBed } from "@angular/core/testing";
import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import { DaffCategoryFactory } from '@daffodil/category/testing';

import { DaffCategoryLoadSuccess } from "../actions/category.actions";
import { DaffCategorySelectors } from './category.selector';
import { DaffCategory } from "../models/category";
import { CategoryReducersState } from "../reducers/category-reducers.interface";
import { categoryReducers } from "../reducers/category-reducers";

describe('DaffCategorySelectors', () => {

  let store: Store<CategoryReducersState>;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  let mockCategory: DaffCategory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          category: combineReducers(categoryReducers),
        })
      ]
    });

    mockCategory = categoryFactory.create();
    store = TestBed.get(Store);

    store.dispatch(new DaffCategoryLoadSuccess(mockCategory));
  });

  describe('selectCategoryState', () => {

    describe('selectCategory', () => {

      it('selects the category state', () => {
        store.pipe(select(DaffCategorySelectors.selectCategory)).subscribe((categoryState) => {
          expect(categoryState).toEqual(mockCategory);
        });
      });
    });

    describe('selectCategoryLoading', () => {

      it('selects the loading state of the category', () => {
        store.pipe(select(DaffCategorySelectors.selectCategoryLoading)).subscribe((categoryLoadingState) => {
          expect(categoryLoadingState).toEqual(false);
        });
      });
    });

    describe('selectCategoryErrors', () => {

      it('returns the selected category id', () => {
        store.pipe(select(DaffCategorySelectors.selectCategoryErrors)).subscribe((categoryErrors) => {
          expect(categoryErrors).toEqual([]);
        });
      });
    });
  });
});
