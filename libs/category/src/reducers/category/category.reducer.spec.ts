import { DaffCategoryFactory } from '@daffodil/category/testing';

import { DaffCategory } from '../../models/category';
import { CategoryReducerState } from './category-reducer-state.interface';
import { DaffCategoryLoad, DaffCategoryLoadSuccess, DaffCategoryLoadFailure } from '../../actions/category.actions';
import { CategoryReducer } from './category.reducer';

describe('Category | Category Reducer', () => {

  let categoryFactory: DaffCategoryFactory;
  let category: DaffCategory;
  let categoryId: string;
  let initialState: CategoryReducerState = {
    category: null,
    loading: false,
    errors: []
  }

  beforeEach(() => {
    categoryFactory = new DaffCategoryFactory();

    category = categoryFactory.create();
    categoryId = category.id;
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = CategoryReducer.reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CategoryLoadAction is triggered', () => {
    let result;

    beforeEach(() => {
      const categoryLoadAction: DaffCategoryLoad = new DaffCategoryLoad(categoryId);

      result = CategoryReducer.reducer(initialState, categoryLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when CategoryLoadSuccessAction is triggered', () => {

    let result;
    let state: CategoryReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }

      const categoryLoadSuccess = new DaffCategoryLoadSuccess(category);
      result = CategoryReducer.reducer(state, categoryLoadSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('sets category to the payload', () => {
      expect(result.category).toEqual(category);
    });
  });

  describe('when CategoryLoadFailureAction is triggered', () => {

    const error = 'error message';
    let result;
    let state: CategoryReducerState;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      const categoryLoadFailure = new DaffCategoryLoadFailure(error);

      result = CategoryReducer.reducer(state, categoryLoadFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });
});
