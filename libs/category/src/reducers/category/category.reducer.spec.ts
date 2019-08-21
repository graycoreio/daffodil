import { DaffCategoryFactory } from '@daffodil/category/testing';

import { DaffCategory } from '../../models/category';
import { CategoryReducerState } from './category-reducer-state.interface';
import { DaffCategoryLoad, DaffCategoryLoadSuccess, DaffCategoryLoadFailure } from '../../actions/category.actions';
import { categoryReducer } from './category.reducer';

describe('Category | Category Reducer', () => {

  let categoryFactory: DaffCategoryFactory;
  let category: DaffCategory;
  let categoryId: string;
  const initialState: CategoryReducerState = {
    selectedCategoryId: null,
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

      const result = categoryReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CategoryLoadAction is triggered', () => {
    let result;

    beforeEach(() => {
      const categoryLoadAction: DaffCategoryLoad = new DaffCategoryLoad(categoryId);

      result = categoryReducer(initialState, categoryLoadAction);
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
      result = categoryReducer(state, categoryLoadSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('sets selectedCategoryId from the payload.id', () => {
      expect(result.selectedCategoryId).toEqual(category.id);
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

      result = categoryReducer(state, categoryLoadFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });
});
