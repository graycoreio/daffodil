import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  createFeatureSelector,
  select,
  Store,
  StoreModule,
} from '@ngrx/store';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import {
  daffOperationInitialState,
  DaffOperationState,
  DaffOperationStateAdapter,
  daffOperationStateSelectorFactory,
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';

import { DaffOperationStateFacade } from './facade';

const selectState = createFeatureSelector<DaffOperationState>('test');

interface TestState {
  test: DaffOperationState;
}

@Injectable({
  providedIn: 'root',
})
class TestFacade extends DaffOperationStateFacade<TestState> {
  constructor(
    store: Store<TestState>,
  ) {
    super(
      store,
      daffOperationStateSelectorFactory(selectState),
    );
  }
}

describe('@daffodil/core/state | DaffOperationStateFacade', () => {
  let adapter: DaffOperationStateAdapter;
  let store: Store;
  let facade: TestFacade;
  let error: DaffStateError;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot<TestState>({
          test: (state = daffOperationInitialState, action) => {
            switch (action.type) {
              case 'resolve':
                return adapter.startResolution(state);

              case 'mutate':
                return adapter.startMutation(state);

              case 'success':
                return adapter.completeOperation(state);

              case 'error':
                return adapter.operationFailed([error], state);

              default:
                return state;
            }
          },
        }),
      ],
    });

    adapter = new DaffOperationStateAdapter();
    store = TestBed.inject(Store);
    facade = TestBed.inject(TestFacade);
    error = { code: 'code', message: 'message' };
  });

  describe('loadingState$', () => {
    let result: Observable<DaffState>;

    beforeEach(() => {
      result = facade.loadingState$;
    });

    it('should return the loading state', () => {
      const expected = hot('a', { a: DaffState.Stable });
      expect(result).toBeObservable(expected);
    });
  });

  describe('loading$', () => {
    let result: Observable<boolean>;

    describe('when the state is not loading', () => {
      beforeEach(() => {
        store.dispatch({ type: 'success' });
        result = facade.loading$;
      });

      it('should return false', () => {
        const expected = hot('a', { a: false });
        expect(result).toBeObservable(expected);
      });
    });

    describe('when the state is loading', () => {
      beforeEach(() => {
        store.dispatch({ type: 'resolve' });
        result = facade.loading$;
      });

      it('should return true', () => {
        const expected = hot('a', { a: true });
        expect(result).toBeObservable(expected);
      });
    });
  });

  describe('resolving$', () => {
    let result: Observable<boolean>;

    describe('when the state is not resolving', () => {
      beforeEach(() => {
        store.dispatch({ type: 'success' });
        result = facade.resolving$;
      });

      it('should return false', () => {
        const expected = hot('a', { a: false });
        expect(result).toBeObservable(expected);
      });
    });

    describe('when the state is resolving', () => {
      beforeEach(() => {
        store.dispatch({ type: 'resolve' });
        result = facade.resolving$;
      });

      it('should return true', () => {
        const expected = hot('a', { a: true });
        expect(result).toBeObservable(expected);
      });
    });
  });

  describe('mutating$', () => {
    let result: Observable<boolean>;

    describe('when the state is not mutating', () => {
      beforeEach(() => {
        store.dispatch({ type: 'success' });
        result = facade.mutating$;
      });

      it('should return false', () => {
        const expected = hot('a', { a: false });
        expect(result).toBeObservable(expected);
      });
    });

    describe('when the state is mutating', () => {
      beforeEach(() => {
        store.dispatch({ type: 'mutate' });
        result = facade.mutating$;
      });

      it('should return true', () => {
        const expected = hot('a', { a: true });
        expect(result).toBeObservable(expected);
      });
    });
  });

  describe('errors$', () => {
    let result: Observable<DaffStateError[]>;

    describe('when the state has no errors', () => {
      beforeEach(() => {
        store.dispatch({ type: 'success' });
        result = facade.errors$;
      });

      it('should return an empty array', () => {
        const expected = hot('a', { a: []});
        expect(result).toBeObservable(expected);
      });
    });

    describe('when the state has errors', () => {
      beforeEach(() => {
        store.dispatch({ type: 'error' });
        result = facade.errors$;
      });

      it('should return those errors', () => {
        const expected = hot('a', { a: [error]});
        expect(result).toBeObservable(expected);
      });
    });
  });

  describe('hasErrors$', () => {
    let result: Observable<boolean>;

    describe('when the state has no errors', () => {
      beforeEach(() => {
        store.dispatch({ type: 'success' });
        result = facade.hasErrors$;
      });

      it('should return false', () => {
        const expected = hot('a', { a: false });
        expect(result).toBeObservable(expected);
      });
    });

    describe('when the state has errors', () => {
      beforeEach(() => {
        store.dispatch({ type: 'error' });
        result = facade.hasErrors$;
      });

      it('should return true', () => {
        const expected = hot('a', { a: true });
        expect(result).toBeObservable(expected);
      });
    });
  });
});
