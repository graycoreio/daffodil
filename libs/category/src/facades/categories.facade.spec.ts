import { TestBed } from '@angular/core/testing';
import { MockStore } from '@ngrx/store/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCategoryFactory } from '@daffodil/category/testing';

import { DaffCategoriesFacade } from './categories.facade';
import { State, reducers } from '../reducers';
import { DaffCategoriesLoad, DaffCategoriesLoadSuccess, DaffCategoriesLoadFailure } from '../actions/categories.actions';

describe('DaffCategoriesFacade', () => {
  let store: MockStore<Partial<State>>;
  let facade: DaffCategoriesFacade;
  let categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          category: combineReducers(reducers),
        })
      ],
      providers: [
        DaffCategoriesFacade,
      ]
    })

    store = TestBed.get(Store);
    facade = TestBed.get(DaffCategoriesFacade);
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

  describe('loading$', () => {
    it('should be false if the categories state is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.loading$).toBeObservable(expected);
    });
  
    it('should be true if the categories state is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffCategoriesLoad("1"));
      expect(facade.loading$).toBeObservable(expected);
    });
  });

  describe('categories$', () => {
    it('should initially be an empty array', () => {
      const initial = cold('a', { a: [] });
      expect(facade.categories$).toBeObservable(initial);
    });

    it('should be an observable of the currently selected categories', () => {
      const categories = categoryFactory.createMany(2);
      const expected = cold('a', { a: categories});
      store.dispatch(new DaffCategoriesLoad('id'));
      store.dispatch(new DaffCategoriesLoadSuccess(categories));
      expect(facade.categories$).toBeObservable(expected);
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
      store.dispatch(new DaffCategoriesLoad('id'));
      store.dispatch(new DaffCategoriesLoadFailure(error));
      expect(facade.errors$).toBeObservable(expected);
    });
  });
});
