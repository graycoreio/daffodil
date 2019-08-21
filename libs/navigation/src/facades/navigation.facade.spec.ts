import { TestBed } from '@angular/core/testing';
import { MockStore } from '@ngrx/store/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';

import { DaffNavigationFacade } from './navigation.facade';
import { DaffNavigationLoad, DaffNavigationLoadFailure, DaffNavigationLoadSuccess } from '../actions/navigation.actions';
import { navigationReducers } from '../reducers/navigation-reducers';
import { NavigationReducersState } from '../reducers/navigation-reducers.interface';

describe('DaffNavigationFacade', () => {
  let store: MockStore<Partial<NavigationReducersState>>;
  let facade: DaffNavigationFacade;
  const navigationTreeFactory: DaffNavigationTreeFactory = new DaffNavigationTreeFactory();
  let navigation: DaffNavigationTree;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          navigation: combineReducers(navigationReducers),
        })
      ],
      providers: [
        DaffNavigationFacade,
      ]
    })

    navigation = navigationTreeFactory.create();
    store = TestBed.get(Store);
    facade = TestBed.get(DaffNavigationFacade);
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

  describe('navigation$', () => {
    it('should be null initially', () => {
      const expected = cold('a', { a: null });
      expect(facade.navigation$).toBeObservable(expected);
    });
  
    it('should be a navigation after a navigation is loaded successfully', () => {
      const expected = cold('a', { a: navigation });
      store.dispatch(new DaffNavigationLoadSuccess(navigation));
      expect(facade.navigation$).toBeObservable(expected);
    });
  });

  describe('loading$', () => {
    it('should be false if the navigation state is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.loading$).toBeObservable(expected);
    });
  
    it('should be true if the navigation state is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffNavigationLoad("1"));
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
      store.dispatch(new DaffNavigationLoad('id'));
      store.dispatch(new DaffNavigationLoadFailure(error));
      expect(facade.errors$).toBeObservable(expected);
    });
  });
});
