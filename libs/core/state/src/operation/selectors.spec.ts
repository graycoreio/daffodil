import { TestBed } from '@angular/core/testing';
import {
  createFeatureSelector,
  select,
  Store,
  StoreModule,
} from '@ngrx/store';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import {
  daffCompleteOperation,
  daffOperationFailed,
  daffOperationInitialState,
  DaffOperationState,
  daffStartMutation,
  daffStartResolution,
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';

import { daffOperationStateSelectorFactory } from './selectors';

interface TestState {
  test: DaffOperationState;
}

const selectState = createFeatureSelector<DaffOperationState>('test');
const {
  selectLoadingState,
  selectLoading,
  selectResolving,
  selectMutating,
  selectErrors,
  selectHasErrors,
} = daffOperationStateSelectorFactory(selectState);

describe('@daffodil/core/state | daffOperationStateSelectorFactory', () => {
  let store: Store;
  let error: DaffStateError;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot<TestState>({
          test: (state = daffOperationInitialState, action) => {
            switch (action.type) {
              case 'resolve':
                return daffStartResolution(state);

              case 'mutate':
                return daffStartMutation(state);

              case 'success':
                return daffCompleteOperation(state);

              case 'error':
                return daffOperationFailed([error], state);

              default:
                return state;
            }
          },
        }),
      ],
    });

    store = TestBed.inject(Store);
    error = { code: 'code', message: 'message' };
  });

  describe('selectLoadingState', () => {
    let result: Observable<DaffState>;

    beforeEach(() => {
      result = store.pipe(select(selectLoadingState));
    });

    it('should return the loading state', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(({ expectObservable }) => {
        expectObservable(result).toBe('a', { a: DaffState.Stable });
      });
    });
  });

  describe('selectLoading', () => {
    let result: Observable<boolean>;

    describe('when the state is not loading', () => {
      beforeEach(() => {
        store.dispatch({ type: 'success' });
        result = store.pipe(select(selectLoading));
      });

      it('should return false', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(({ expectObservable }) => {
          expectObservable(result).toBe('a', { a: false });
        });
      });
    });

    describe('when the state is loading', () => {
      beforeEach(() => {
        store.dispatch({ type: 'resolve' });
        result = store.pipe(select(selectLoading));
      });

      it('should return true', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(({ expectObservable }) => {
          expectObservable(result).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectResolving', () => {
    let result: Observable<boolean>;

    describe('when the state is not resolving', () => {
      beforeEach(() => {
        store.dispatch({ type: 'success' });
        result = store.pipe(select(selectResolving));
      });

      it('should return false', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(({ expectObservable }) => {
          expectObservable(result).toBe('a', { a: false });
        });
      });
    });

    describe('when the state is resolving', () => {
      beforeEach(() => {
        store.dispatch({ type: 'resolve' });
        result = store.pipe(select(selectResolving));
      });

      it('should return true', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(({ expectObservable }) => {
          expectObservable(result).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectMutating', () => {
    let result: Observable<boolean>;

    describe('when the state is not mutating', () => {
      beforeEach(() => {
        store.dispatch({ type: 'success' });
        result = store.pipe(select(selectMutating));
      });

      it('should return false', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(({ expectObservable }) => {
          expectObservable(result).toBe('a', { a: false });
        });
      });
    });

    describe('when the state is mutating', () => {
      beforeEach(() => {
        store.dispatch({ type: 'mutate' });
        result = store.pipe(select(selectMutating));
      });

      it('should return true', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(({ expectObservable }) => {
          expectObservable(result).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectErrors', () => {
    let result: Observable<DaffStateError[]>;

    describe('when the state has no errors', () => {
      beforeEach(() => {
        store.dispatch({ type: 'success' });
        result = store.pipe(select(selectErrors));
      });

      it('should return an empty array', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(({ expectObservable }) => {
          expectObservable(result).toBe('a', { a: []});
        });
      });
    });

    describe('when the state has errors', () => {
      beforeEach(() => {
        store.dispatch({ type: 'error' });
        result = store.pipe(select(selectErrors));
      });

      it('should return those errors', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(({ expectObservable }) => {
          expectObservable(result).toBe('a', { a: [error]});
        });
      });
    });
  });

  describe('selectHasErrors', () => {
    let result: Observable<boolean>;

    describe('when the state has no errors', () => {
      beforeEach(() => {
        store.dispatch({ type: 'success' });
        result = store.pipe(select(selectHasErrors));
      });

      it('should return false', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(({ expectObservable }) => {
          expectObservable(result).toBe('a', { a: false });
        });
      });
    });

    describe('when the state has errors', () => {
      beforeEach(() => {
        store.dispatch({ type: 'error' });
        result = store.pipe(select(selectHasErrors));
      });

      it('should return true', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(({ expectObservable }) => {
          expectObservable(result).toBe('a', { a: true });
        });
      });
    });
  });
});
