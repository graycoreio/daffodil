import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';

import { DaffNavigationLoadSuccess } from '../actions/navigation.actions';
import { selectNavigationTree, selectNavigationLoading, selectNavigationErrors } from './navigation.selector';
import { DaffNavigationTree } from '../models/navigation-tree';
import { NavigationReducersState } from '../reducers/navigation-reducers.interface';
import { navigationReducers } from '../reducers/navigation-reducers';

describe('DaffNavigationSelectors', () => {

  let store: Store<NavigationReducersState>;
  const navigationTreeFactory: DaffNavigationTreeFactory = new DaffNavigationTreeFactory();
  let mockNavigation: DaffNavigationTree;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          navigation: combineReducers(navigationReducers),
        })
      ]
    });

    mockNavigation = navigationTreeFactory.create();
    store = TestBed.get(Store);

    store.dispatch(new DaffNavigationLoadSuccess(mockNavigation));
  });

  describe('selectNavigationState', () => {

    describe('selectNavigationTree', () => {

      it('selects the navigation state', () => {
        const selector = store.pipe(select(selectNavigationTree));
        const expected = cold('a', { a: mockNavigation });
        expect(selector).toBeObservable(expected);
      });
    });

    describe('selectNavigationLoading', () => {

      it('selects the loading state of the navigation', () => {
        const selector = store.pipe(select(selectNavigationLoading));
        const expected = cold('a', { a: false });
        expect(selector).toBeObservable(expected);
      });
    });

    describe('selectNavigationErrors', () => {

      it('returns the selected navigation id', () => {
        const selector = store.pipe(select(selectNavigationErrors));
        const expected = cold('a', { a: [] });
        expect(selector).toBeObservable(expected);
      });
    });
  });
});
