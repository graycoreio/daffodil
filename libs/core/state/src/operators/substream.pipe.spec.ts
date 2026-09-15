import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import {
  ActionSequence,
  substream,
} from './substream.pipe';

describe('@daffodil/core/state | substream', () => {
  let action1: Action;
  let action2: Action;
  let action3: Action;
  let action4: Action;

  let sequence: ActionSequence;

  beforeEach(() => {
    action1 = { type: 'type1' };
    action2 = { type: 'type2' };
    action3 = { type: 'type3' };
    action4 = { type: 'type4' };
  });

  describe('when a list of one single type with no terminators is passed', () => {
    beforeEach(() => {
      sequence = [
        action1.type,
      ];
    });

    describe('and when the actions are emitted multiple times', () => {
      describe('and when the emission order is not interrupted', () => {
        it('should emit the expected list of actions', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            const actions$: Observable<Action> = helpers.hot('--a--a--a--a', { a: action1 });
            const substream$: Observable<Action[]> = actions$.pipe(
              substream(sequence),
            );

            helpers.expectObservable(substream$).toBe('--d--d--d--d', { d: [action1]});
          });
        });
      });
    });

    describe('and when the actions are emitted in the expected order', () => {
      describe('and when the emission order is not interrupted', () => {
        it('should emit the expected list of actions', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            const actions$: Observable<Action> = helpers.hot('--a', { a: action1 });
            const substream$: Observable<Action[]> = actions$.pipe(
              substream(sequence),
            );

            helpers.expectObservable(substream$).toBe('--d', { d: [action1]});
          });
        });
      });
    });
  });

  describe('when a list of types with no terminators is passed', () => {
    beforeEach(() => {
      sequence = [
        action1.type,
        action2.type,
        action3.type,
      ];
    });

    describe('and when the actions are emitted in the expected order multiple times', () => {
      describe('and when the emission order is not interrupted', () => {
        it('should emit the expected list of actions', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            const actions$: Observable<Action> = helpers.hot('--a--b--c--a--b--c', { a: action1, b: action2, c: action3 });
            const substream$: Observable<Action[]> = actions$.pipe(
              substream(sequence),
            );

            helpers.expectObservable(substream$).toBe('--------d--------d', { d: [action1, action2, action3]});
          });
        });
      });

      describe('and when the emission order is interrupted by an unexpected action', () => {
        it('should emit the expected list of actions', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            const actions$: Observable<Action> = helpers.hot('--a--d--b--c--a--d--b--c', { a: action1, b: action2, c: action3, d: action4 });
            const substream$: Observable<Action[]> = actions$.pipe(
              substream(sequence),
            );

            helpers.expectObservable(substream$).toBe('-----------d-----------d', { d: [action1, action2, action3]});
          });
        });
      });
    });

    describe('and when the actions are emitted in the expected order', () => {
      describe('and when the emission order is not interrupted', () => {
        it('should emit the expected list of actions', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            const actions$: Observable<Action> = helpers.hot('--a--b--c', { a: action1, b: action2, c: action3 });
            const substream$: Observable<Action[]> = actions$.pipe(
              substream(sequence),
            );

            helpers.expectObservable(substream$).toBe('--------d', { d: [action1, action2, action3]});
          });
        });
      });

      describe('and when the emission order is interrupted by an unexpected action', () => {
        it('should emit the expected list of actions', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            const actions$: Observable<Action> = helpers.hot('--a--d--b--c', { a: action1, b: action2, c: action3, d: action4 });
            const substream$: Observable<Action[]> = actions$.pipe(
              substream(sequence),
            );

            helpers.expectObservable(substream$).toBe('-----------d', { d: [action1, action2, action3]});
          });
        });
      });
    });

    describe('and when the actions are not emitted in the expected order', () => {
      it('should never emit', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const actions$: Observable<Action> = helpers.hot('--a--c--b', { a: action1, b: action2, c: action3 });
          const substream$: Observable<Action[]> = actions$.pipe(
            substream(sequence),
          );

          helpers.expectObservable(substream$).toBe('---------');
        });
      });
    });
  });

  describe('when a list of types and a terminator are passed', () => {
    let terminator;
    beforeEach(() => {
      sequence = [
        action1.type,
        action2.type,
        action3.type,
      ];
      terminator = action4;
    });

    describe('and when the actions are emitted in the expected order', () => {
      describe('and when the terminator never gets emitted', () => {
        it('should emit the expected list of actions', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            const actions$: Observable<Action> = helpers.hot('--a--b--c', { a: action1, b: action2, c: action3 });
            const substream$: Observable<Action[]> = actions$.pipe(
              substream(sequence, terminator.type),
            );

            helpers.expectObservable(substream$).toBe('--------a', { a: [action1, action2, action3]});
          });
        });
      });

      describe('and when the terminator gets emitted after the expected list', () => {
        // NOTE: this is the expectation that will fail without a skipWhile that always checks the predicate
        // it will re-emit the list on (d) even though it should be skipping at that point
        it('should emit the expected list of actions', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            const actions$: Observable<Action> = helpers.hot('--a--b--c--d', { a: action1, b: action2, c: action3, d: terminator });
            const substream$: Observable<Action[]> = actions$.pipe(
              substream(sequence, terminator.type),
            );

            helpers.expectObservable(substream$).toBe('--------a', { a: [action1, action2, action3]});
          });
        });
      });

      describe('and when the terminator gets emitted before the expected list', () => {
        it('should emit the expected list of actions', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            const actions$: Observable<Action> = helpers.hot('--a--c--d--a--b--c', { a: action1, b: action2, c: action3, d: terminator });
            const substream$: Observable<Action[]> = actions$.pipe(
              substream(sequence, terminator.type),
            );

            helpers.expectObservable(substream$).toBe('-----------------a', { a: [action1, action2, action3]});
          });
        });
      });

      describe('and when the terminator interrupts the expected list', () => {
        it('should never emit', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            const actions$: Observable<Action> = helpers.hot('--a--d--b--c', { a: action1, b: action2, c: action3, d: terminator });
            const substream$: Observable<Action[]> = actions$.pipe(
              substream(sequence, terminator.type),
            );

            helpers.expectObservable(substream$).toBe('------------');
          });
        });
      });
    });
  });

  describe('when a list of types that have some optional types is passed', () => {
    beforeEach(() => {
      sequence = [
        action1.type,
        [
          action2.type,
          action3.type,
        ],
      ];
    });

    describe('and when the actions are emitted in the expected order', () => {
      describe('and when the first optional action is emitted', () => {
        it('should emit the list of actions containing the first optional action', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            const actions$: Observable<Action> = helpers.hot('--a--b', { a: action1, b: action2 });
            const substream$: Observable<Action[]> = actions$.pipe(
              substream(sequence),
            );

            helpers.expectObservable(substream$).toBe('-----a', { a: [action1, action2]});
          });
        });
      });

      describe('and when the second optional action is emitted', () => {
        it('should emit the list of actions containing the second optional action', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            const actions$: Observable<Action> = helpers.hot('--a--c', { a: action1, c: action3 });
            const substream$: Observable<Action[]> = actions$.pipe(
              substream(sequence),
            );

            helpers.expectObservable(substream$).toBe('-----a', { a: [action1, action3]});
          });
        });
      });

      describe('and when neither optional action is emitted', () => {
        it('should never emit', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            const actions$: Observable<Action> = helpers.hot('--a--a--d', { a: action1, d: action4 });
            const substream$: Observable<Action[]> = actions$.pipe(
              substream(sequence),
            );

            helpers.expectObservable(substream$).toBe('---------');
          });
        });
      });
    });
  });
});
