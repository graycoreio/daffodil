import { TestBed } from '@angular/core/testing';
import { MockStore } from '@ngrx/store/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCategoryFactory, DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';

import { DaffCategoryFacade } from './category.facade';
import { DaffCategoryLoad, DaffCategoryLoadFailure, DaffCategoryLoadSuccess } from '../actions/category.actions';
import { categoryReducers } from '../reducers/category-reducers';
import { CategoryReducersState } from '../reducers/category-reducers.interface';
import { DaffCategory } from '../models/category';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';

describe('DaffCategoryFacade', () => {
  let store: MockStore<Partial<CategoryReducersState>>;
  let facade: DaffCategoryFacade;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const categoryPageConfigurationFactory: DaffCategoryPageConfigurationStateFactory = new DaffCategoryPageConfigurationStateFactory();
  let category: DaffCategory;
  let categoryPageConfigurationState: DaffCategoryPageConfigurationState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          category: combineReducers(categoryReducers),
        })
      ],
      providers: [
        DaffCategoryFacade,
      ]
    })

    category = categoryFactory.create();
    categoryPageConfigurationState = categoryPageConfigurationFactory.create();
    categoryPageConfigurationState.id = category.id;
    store = TestBed.get(Store);
    facade = TestBed.get(DaffCategoryFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = {type: 'SOME_TYPE'};

    facade.dispatch(action);
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('selectedCategory$', () => {
    it('should be undefined initially', () => {
      const expected = cold('a', { a: undefined });
      expect(facade.selectedCategory$).toBeObservable(expected);
    });
  
    it('should be a category after a category is loaded successfully', () => {
      const expected = cold('a', { a: category });
      store.dispatch(new DaffCategoryLoadSuccess({ category: category, categoryPageConfigurationState: categoryPageConfigurationState, products: null }));
      expect(facade.selectedCategory$).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageConfigurationState$', () => {
    it('should be undefined initially', () => {
      const expected = cold('a', { a: undefined });
      expect(facade.selectedCategory$).toBeObservable(expected);
    });
  
    it('should return an observable of the CategoryPageConfigurationState', () => {
      const expected = cold('a', { a: categoryPageConfigurationState });
      store.dispatch(new DaffCategoryLoadSuccess({ category: category, categoryPageConfigurationState: categoryPageConfigurationState, products: null }));
      expect(facade.selectCategoryPageConfigurationState$).toBeObservable(expected);
    });
  });

  describe('loading$', () => {
    it('should be false if the category state is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.loading$).toBeObservable(expected);
    });
  
    it('should be true if the category state is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffCategoryLoad({ id: '1' }));
      expect(facade.loading$).toBeObservable(expected);
    });
  });

  describe('errors$', () => {
    
    it('should be an empty array initially', () => {
      const initial = cold('a', { a: []});
      expect(facade.errors$).toBeObservable(initial);
    });

    it('should be an observable of an array of the current errors', () => {
      const error = 'error1';
      const expected = cold('a', { a: [error]});
      store.dispatch(new DaffCategoryLoad({ id: 'id' }));
      store.dispatch(new DaffCategoryLoadFailure(error));
      expect(facade.errors$).toBeObservable(expected);
    });
  });
});
