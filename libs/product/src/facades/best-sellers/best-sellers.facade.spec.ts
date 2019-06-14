import { TestBed } from '@angular/core/testing';

import { MockStore } from '@ngrx/store/testing';

import { DaffBestSellersFacade } from './best-sellers.facade';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { State } from '../../reducers';
import { cold } from 'jasmine-marbles';
import { DaffBestSellersLoad, DaffBestSellersLoadSuccess } from '../../actions/best-sellers.actions';
import { reducers } from '../../reducers';

describe('DaffBestSellersFacade', () => {
  let store: MockStore<{product: Partial<State>}>;
  let facade: DaffBestSellersFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          product: combineReducers(reducers),
        })
      ],
      providers: [
        DaffBestSellersFacade,
      ]
    })

    store = TestBed.get(Store);
    facade = TestBed.get(DaffBestSellersFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    facade.dispatch({ type: 'SOME_TYPE' });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('loading$', () => {
    it('should be false if the bestSellers is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.loading$).toBeObservable(expected);
    });
  
    it('should be true if the bestSellers is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffBestSellersLoad());
      expect(facade.loading$).toBeObservable(expected);
    });
  });

  describe('bestSellers$', () => {
    it('should be initially an empty array', () => {
      const initial = cold('a', { a: [] });
      expect(facade.bestSellers$).toBeObservable(initial);
    });

    it('should be an observable of the list of the best sellers that are added to state', () => {
      const expected = cold('a', { a: [{id: '1', name: 'Some Name'}]});
      store.dispatch(new DaffBestSellersLoadSuccess([{id: '1', name: 'Some Name'}]));
      expect(facade.bestSellers$).toBeObservable(expected);
    })
  })
});
