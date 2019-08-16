import { DaffCategoryFactory } from '@daffodil/category/testing';
import { 
  initialState, 
  reducer, 
  State,
  getCategoriesLoading,
  getCategoriesErrors
} from "../reducers/categories.reducer";
import { DaffCategoriesLoad, DaffCategoriesLoadSuccess, DaffCategoriesLoadFailure } from "../actions/categories.actions";
import { DaffCategory } from "../models/category";

describe('Category | Categories Reducer', () => {

  let categoryFactory: DaffCategoryFactory;
  let categories: DaffCategory[];
  let categoryId: string;

  beforeEach(() => {
    categoryFactory = new DaffCategoryFactory();

    categories = categoryFactory.createMany(2);
    categoryId = categories[0].id;
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('when CategoriesLoadAction is triggered', () => {
    let result;

    beforeEach(() => {
      const categoriesLoadAction: DaffCategoriesLoad = new DaffCategoriesLoad();

      result = reducer(initialState, categoriesLoadAction);
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

      const categoriesLoadSuccess = new DaffCategoriesLoadSuccess(categories);
      result = reducer(state, categoriesLoadSuccess);
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

      const categoriesLoadFailure = new DaffCategoriesLoadFailure(error);

      result = reducer(state, categoriesLoadFailure);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('adds an error to state.errors', () => {
      expect(result.errors.length).toEqual(2);
    });
  });

  describe('getCategoriesLoading', () => {
    
    it('returns loading state', () => {
      expect(getCategoriesLoading(initialState)).toEqual(initialState.loading);
    });
  });

  describe('getCategoriesErrors', () => {
    
    it('returns errors state', () => {
      expect(getCategoriesErrors(initialState)).toEqual(initialState.errors);
    });
  });
});
