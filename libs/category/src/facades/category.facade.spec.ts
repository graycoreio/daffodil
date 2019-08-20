import { TestBed } from '@angular/core/testing';
import { MockStore } from '@ngrx/store/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCategoryFactory } from '@daffodil/category/testing';

import { DaffCategoryFacade } from './category.facade';
import { DaffCategoryLoad, DaffCategoryLoadFailure, DaffCategoryLoadSuccess } from '../actions/category.actions';
import { DaffCategory } from '@daffodil/category';
import { categoryReducers } from '../reducers/category-reducers';
import { CategoryReducersState } from '../reducers/category-reducers.interface';

describe('DaffCategoryFacade', () => {
  let store: MockStore<Partial<CategoryReducersState>>;
  let facade: DaffCategoryFacade;
  let categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  let category: DaffCategory;

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

  describe('category$', () => {
    it('should be null initially', () => {
      const expected = cold('a', { a: null });
      expect(facade.category$).toBeObservable(expected);
    });
  
    it('should be a category after a category is loaded successfully', () => {
      const expected = cold('a', { a: category });
      store.dispatch(new DaffCategoryLoadSuccess(category));
      expect(facade.category$).toBeObservable(expected);
    });
  });

  describe('loading$', () => {
    it('should be false if the category state is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.loading$).toBeObservable(expected);
    });
  
    it('should be true if the category state is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffCategoryLoad("1"));
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
      store.dispatch(new DaffCategoryLoad('id'));
      store.dispatch(new DaffCategoryLoadFailure(error));
      expect(facade.errors$).toBeObservable(expected);
    });
  });
});
