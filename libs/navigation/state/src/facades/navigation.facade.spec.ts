import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';

import { runMarbles } from '@daffodil/jasmine';
import { DaffNavigationTree } from '@daffodil/navigation';
import {
  DaffNavigationLoad,
  DaffNavigationLoadFailure,
  DaffNavigationLoadSuccess,
  daffNavigationReducers,
  DaffNavigationStateRootSlice,
  DAFF_NAVIGATION_STORE_FEATURE_KEY,
} from '@daffodil/navigation/state';
import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';

import { DaffNavigationFacade } from './navigation.facade';

describe('DaffNavigationFacade', () => {
  let store: Store<DaffNavigationStateRootSlice<DaffNavigationTree>>;
  let facade: DaffNavigationFacade<DaffNavigationTree>;
  const navigationTreeFactory: DaffNavigationTreeFactory = new DaffNavigationTreeFactory();
  let navigation: DaffNavigationTree;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          [DAFF_NAVIGATION_STORE_FEATURE_KEY]: combineReducers(daffNavigationReducers),
        }),
      ],
      providers: [
        DaffNavigationFacade,
      ],
    });

    navigation = navigationTreeFactory.create();
    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffNavigationFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = { type: 'SOME_TYPE' };

    facade.dispatch(action);
    expect(<any>store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('tree$', () => {
    it('should be null initially', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(facade.tree$).toBe('a', { a: null });
      });
    });

    it('should be a navigation after a navigation is loaded successfully', () => {
      store.dispatch(new DaffNavigationLoadSuccess(navigation));
      runMarbles(({ expectObservable }) => {
        expectObservable(facade.tree$).toBe('a', { a: navigation });
      });
    });
  });

  describe('loading$', () => {
    it('should be false if the navigation state is not loading', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: false });
      });
    });

    it('should be true if the navigation state is loading', () => {
      store.dispatch(new DaffNavigationLoad('1'));
      runMarbles(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: true });
      });
    });
  });

  describe('errors$', () => {

    it('should be an empty array initially', () => {
      runMarbles(({ expectObservable }) => {
        expectObservable(facade.errors$).toBe('a', { a: []});
      });
    });

    it('should be an observable of an array of the current errors', () => {
      const error = { code: 'code', message: 'error message' };
      store.dispatch(new DaffNavigationLoad('1'));
      store.dispatch(new DaffNavigationLoadFailure(error));
      runMarbles(({ expectObservable }) => {
        expectObservable(facade.errors$).toBe('a', { a: [error]});
      });
    });
  });
});
