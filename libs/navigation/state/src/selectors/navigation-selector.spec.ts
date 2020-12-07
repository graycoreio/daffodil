import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';
import { DaffNavigationLoadSuccess, DaffNavigationReducersState, daffNavigationReducers, DAFF_NAVIGATION_STORE_FEATURE_KEY } from '@daffodil/navigation/state';

import { getDaffNavigationSelectors } from './navigation.selector';

describe('DaffNavigationSelectors', () => {

  let store: Store<DaffNavigationReducersState<DaffNavigationTree>>;
  const navigationTreeFactory: DaffNavigationTreeFactory = new DaffNavigationTreeFactory();
	let mockNavigation: DaffNavigationTree;
	const {
		selectNavigationTree,
		selectNavigationLoading,
		selectNavigationErrors
	} = getDaffNavigationSelectors<DaffNavigationTree>();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_NAVIGATION_STORE_FEATURE_KEY]: combineReducers(daffNavigationReducers),
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
