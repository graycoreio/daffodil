import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { ActionSequence, substream } from './substream.pipe';

describe('Core | Operators | Substream', () => {
  let action1: Action;
  let action2: Action;
  let action3: Action;
  let action4: Action;

  let sequence: ActionSequence;
  let actions$: Observable<Action>;
  let substream$: Observable<Action[]>;

  beforeEach(() => {
    action1 = {type: 'type1'};
    action2 = {type: 'type2'};
    action3 = {type: 'type3'};
    action4 = {type: 'type4'};
  });

  describe('when a list of types with no terminators are passed', () => {
    beforeEach(() => {
      sequence = [
        action1.type,
        action2.type,
        action3.type
      ];
    });

    describe('and when the actions are emitted in the expected order multiple times', () => {
      describe('and when the emission order is not interrupted', () => {
        beforeEach(() => {
          actions$ = hot('--a--b--c--a--b--c', {a: action1, b: action2, c: action3});
          substream$ = actions$.pipe(
            substream(sequence)
          );
        });

        it('should emit the expected list of actions', () => {
          const expected = cold('--------d--------d', {d: [action1, action2, action3]});

          expect(substream$).toBeObservable(expected);
        });
      });

      describe('and when the emission order is interrupted by an unexpected action', () => {
        beforeEach(() => {
          actions$ = hot('--a--d--b--c--a--d--b--c', {a: action1, b: action2, c: action3, d: action4});
          substream$ = actions$.pipe(
            substream(sequence)
          );
        });

        it('should emit the expected list of actions', () => {
          const expected = cold('-----------d-----------d', {d: [action1, action2, action3]});

          expect(substream$).toBeObservable(expected);
        });
      });
    });

    describe('and when the actions are emitted in the expected order', () => {
      describe('and when the emission order is not interrupted', () => {
        beforeEach(() => {
          actions$ = hot('--a--b--c', {a: action1, b: action2, c: action3});
          substream$ = actions$.pipe(
            substream(sequence)
          );
        });

        it('should emit the expected list of actions', () => {
          const expected = cold('--------d', {d: [action1, action2, action3]});

          expect(substream$).toBeObservable(expected);
        });
      });

      describe('and when the emission order is interrupted by an unexpected action', () => {
        beforeEach(() => {
          actions$ = hot('--a--d--b--c', {a: action1, b: action2, c: action3, d: action4});
          substream$ = actions$.pipe(
            substream(sequence)
          );
        });

        it('should emit the expected list of actions', () => {
          const expected = cold('-----------d', {d: [action1, action2, action3]});

          expect(substream$).toBeObservable(expected);
        });
      });
    });

    describe('and when the actions are not emitted in the expected order', () => {
      beforeEach(() => {
        actions$ = hot('--a--c--b', {a: action1, b: action2, c: action3});
        substream$ = actions$.pipe(
          substream(sequence)
        );
      });

      it('should never emit', () => {
        const expected = cold('---------');

        expect(substream$).toBeObservable(expected);
      });
    });
  });

  describe('when a list of types with a terminator are passed', () => {
    let terminator;
    beforeEach(() => {
      sequence = [
        action1.type,
        action2.type,
        action3.type
      ];
      terminator = action4;
    });

    describe('and when the actions are emitted in the expected order', () => {
      describe('and when the terminator never gets emitted', () => {
        beforeEach(() => {
          actions$ = hot('--a--b--c', {a: action1, b: action2, c: action3});
          substream$ = actions$.pipe(
            substream(sequence, terminator.type)
          );
        });

        it('should emit the expected list of actions', () => {
          const expected = cold('--------a', {a: [action1, action2, action3]});

          expect(substream$).toBeObservable(expected);
        });
      });

      describe('and when the terminator gets emitted after the expected list', () => {
        beforeEach(() => {
          actions$ = hot('--a--b--c--d', {a: action1, b: action2, c: action3, d: terminator});
          substream$ = actions$.pipe(
            substream(sequence, terminator.type)
          );
        });

        // NOTE: this is the expectation that will fail without a skipWhile that always checks the predicate
        // it will re-emit the list on (d) even though it should be skipping at that point
        it('should emit the expected list of actions', () => {
          const expected = cold('--------a', {a: [action1, action2, action3]});

          expect(substream$).toBeObservable(expected);
        });
      });

      describe('and when the terminator gets emitted before the expected list', () => {
        beforeEach(() => {
          actions$ = hot('--a--c--d--a--b--c', {a: action1, b: action2, c: action3, d: terminator});
          substream$ = actions$.pipe(
            substream(sequence, terminator.type)
          );
        });

        it('should emit the expected list of actions', () => {
          const expected = cold('-----------------a', {a: [action1, action2, action3]});

          expect(substream$).toBeObservable(expected);
        });
      });

      describe('and when the terminator interrupts the expected list', () => {
        beforeEach(() => {
          actions$ = hot('--a--d--b--c', {a: action1, b: action2, c: action3, d: terminator});
          substream$ = actions$.pipe(
            substream(sequence, terminator.type)
          );
        });

        it('should never emit', () => {
          const expected = cold('------------');

          expect(substream$).toBeObservable(expected);
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
          action3.type
        ]
      ];
    });

    describe('and when the actions are emitted in the expected order', () => {
      describe('and when the first optional action is emitted', () => {
        beforeEach(() => {
          actions$ = hot('--a--b', {a: action1, b: action2});
          substream$ = actions$.pipe(
            substream(sequence)
          );
        });

        it('should emit the list of actions containing the first optional action', () => {
          const expected = cold('-----a', {a: [action1, action2]});

          expect(substream$).toBeObservable(expected);
        });
      });

      describe('and when the second optional action is emitted', () => {
        beforeEach(() => {
          actions$ = hot('--a--c', {a: action1, c: action3});
          substream$ = actions$.pipe(
            substream(sequence)
          );
        });

        it('should emit the list of actions containing the second optional action', () => {
          const expected = cold('-----a', {a: [action1, action3]});

          expect(substream$).toBeObservable(expected);
        });
      });

      describe('and when neither optional action is emitted', () => {
        beforeEach(() => {
          actions$ = hot('--a--a--d', {a: action1, d: action4});
          substream$ = actions$.pipe(
            substream(sequence)
          );
        });

        it('should never emit', () => {
          const expected = cold('---------');

          expect(substream$).toBeObservable(expected);
        });
      });
    });
  });
});
