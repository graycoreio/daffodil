import { TestBed } from "@angular/core/testing";
import { StoreModule, combineReducers, Store, select } from "@ngrx/store";
import { cold } from "jasmine-marbles";

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
        const selector = store.pipe(select(DaffCategorySelectors.selectCategory));
        const expected = cold('a', { a: mockCategory });
        expect(selector).toBeObservable(expected);
      });
    });

    describe('selectCategoryLoading', () => {

      it('selects the loading state of the category', () => {
        const selector = store.pipe(select(DaffCategorySelectors.selectCategoryLoading));
        const expected = cold('a', { a: false });
        expect(selector).toBeObservable(expected);
      });
    });

    describe('selectCategoryErrors', () => {

      it('returns the selected category id', () => {
        const selector = store.pipe(select(DaffCategorySelectors.selectCategoryErrors));
        const expected = cold('a', { a: [] });
        expect(selector).toBeObservable(expected);
      });
    });
  });
});
