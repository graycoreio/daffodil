import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

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
  let scheduler: TestScheduler;
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
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
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
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.tree$).toBe('a', { a: null });
      });
    });

    it('should be a navigation after a navigation is loaded successfully', () => {
      store.dispatch(new DaffNavigationLoadSuccess(navigation));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.tree$).toBe('a', { a: navigation });
      });
    });
  });

  describe('loading$', () => {
    it('should be false if the navigation state is not loading', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: false });
      });
    });

    it('should be true if the navigation state is loading', () => {
      store.dispatch(new DaffNavigationLoad('1'));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: true });
      });
    });
  });

  describe('errors$', () => {

    it('should be an empty array initially', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.errors$).toBe('a', { a: []});
      });
    });

    it('should be an observable of an array of the current errors', () => {
      const error = { code: 'code', message: 'error message' };
      store.dispatch(new DaffNavigationLoad('1'));
      store.dispatch(new DaffNavigationLoadFailure(error));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.errors$).toBe('a', { a: [error]});
      });
    });
  });
});
