import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';

import { runMarbles } from '@daffodil/jasmine';
import { DaffNavigationTree } from '@daffodil/navigation';
import {
  DaffNavigationLoadSuccess,
  DaffNavigationStateRootSlice,
  daffNavigationReducers,
  DAFF_NAVIGATION_STORE_FEATURE_KEY,
} from '@daffodil/navigation/state';
import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';

import { getDaffNavigationSelectors } from './navigation.selector';

describe('DaffNavigationSelectors', () => {

  let store: Store<DaffNavigationStateRootSlice<DaffNavigationTree>>;
  const navigationTreeFactory: DaffNavigationTreeFactory = new DaffNavigationTreeFactory();
  let mockNavigation: DaffNavigationTree;
  const {
    selectNavigationTree,
    selectNavigationLoading,
    selectNavigationErrors,
  } = getDaffNavigationSelectors<DaffNavigationTree>();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_NAVIGATION_STORE_FEATURE_KEY]: combineReducers(daffNavigationReducers),
        }),
      ],
    });

    mockNavigation = navigationTreeFactory.create();
    store = TestBed.inject(Store);

    store.dispatch(new DaffNavigationLoadSuccess(mockNavigation));
  });

  describe('selectNavigationState', () => {

    describe('selectNavigationTree', () => {

      it('selects the navigation state', () => {
        const selector = store.pipe(select(selectNavigationTree));
        runMarbles(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: mockNavigation });
        });
      });
    });

    describe('selectNavigationLoading', () => {

      it('selects the loading state of the navigation', () => {
        const selector = store.pipe(select(selectNavigationLoading));
        runMarbles(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('selectNavigationErrors', () => {

      it('returns the selected navigation id', () => {
        const selector = store.pipe(select(selectNavigationErrors));
        runMarbles(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: []});
        });
      });
    });
  });
});
