import { DaffCategoryFactory } from '@daffodil/category/testing';
import { 
  initialState, 
  reducer, 
  State,
  getCategoryLoading,
  getCategoryErrors
} from "../reducers/category.reducer";
import { DaffCategoryLoad, DaffCategoryLoadSuccess, DaffCategoryLoadFailure } from "../actions/category.actions";
import { DaffCategory } from "../models/category";

describe('Category | Category Reducer', () => {

  let categoryFactory: DaffCategoryFactory;
  let category: DaffCategory;
  let categoryId: string;

  beforeEach(() => {
    categoryFactory = new DaffCategoryFactory();

    category = categoryFactory.create();
    categoryId = category.id;
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CategoryLoadAction is triggered', () => {
    let result;

    beforeEach(() => {
      const categoryLoadAction: DaffCategoryLoad = new DaffCategoryLoad(categoryId);

      result = reducer(initialState, categoryLoadAction);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('when CategoryLoadSuccessAction is triggered', () => {

    let result;
    let state: State;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true
      }

      const categoryLoadSuccess = new DaffCategoryLoadSuccess(category);
      result = reducer(state, categoryLoadSuccess);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });

  describe('when CategoryLoadFailureAction is triggered', () => {

    const error = 'error message';
    let result;
    let state: State;

    beforeEach(() => {
      state = {
        ...initialState,
        loading: true,
        errors: new Array('firstError')
      }

      const categoryLoadFailure = new DaffCategoryLoadFailure(error);

      result = reducer(state, categoryLoadFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('getCategoryLoading', () => {
    
    it('returns loading state', () => {
      expect(getCategoryLoading(initialState)).toEqual(initialState.loading);
    });
  });

  describe('getCategoryErrors', () => {
    
    it('returns errors state', () => {
      expect(getCategoryErrors(initialState)).toEqual(initialState.errors);
    });
  });
});
