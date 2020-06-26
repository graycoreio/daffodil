import { Action } from '@ngrx/store';
import { pipe, Observable, MonoTypeOperatorFunction, Operator, TeardownLogic, Subscriber } from 'rxjs';
import { scan } from 'rxjs/operators';

class SkipWhileSubscriber<T> extends Subscriber<T> {
  private skipping = true;
  private index = 0;

  constructor(
    destination: Subscriber<T>,
    private predicate: (value: T, index: number) => boolean
  ) {
    super(destination);
  }

  protected _next(value: T): void {
    const destination = this.destination;

    // call the predicate every time
    // this is the only change from the vanilla rxjs operator
    this.tryCallPredicate(value);

    if (!this.skipping) {
      destination.next(value);
    }
  }

  private tryCallPredicate(value: T): void {
    try {
      const result = this.predicate(value, this.index++);
      this.skipping = Boolean(result);
    } catch (err) {
      this.destination.error(err);
    }
  }
}

class SkipWhileOperator<T> implements Operator<T, T> {
  constructor(private predicate: (value: T, index: number) => boolean) {
  }

  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
  }
}

/**
 * All the skipWhile stuff is copied directly from rxjs/src/internal/operators/skipWhile.ts.
 * The only change is that it will continue to check the predicate even while not skipping.
 */
function skipWhile<T>(predicate: (value: T, index: number) => boolean): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => source.lift(new SkipWhileOperator(predicate));
}

export type ActionType = Action['type'];
export type ActionSequenceStep = ActionType | ActionType[];
export type ActionSequence = ActionSequenceStep[];

const compareActionSequenceStep = (step: ActionSequenceStep, action: Action): boolean => Array.isArray(step)
  ? step.reduce((acc, type) => acc || action.type === type, false)
  : action.type === step

/**
 * Finds and emits a substream of actions.
 *
 * This will find the first occurence of the substream and not necessarily the most concise or recent substream.
 * For example, substream([A, B]) encountering an action stream of [A1, A2, B1] will emit [A1, B1].
 * When a substream is found, the list is reset and it will continue to listen to the action stream.
 *
 * You can indicate that a particular step in the sequence can be matched by mutiple actions by passing an array for that step.
 * For example, if the first step of the sequence could be action A or action B: substream([[A, B], C]).
 * An action stream of [A1, C1] would cause substream to emit [A1, C1].
 * An action stream of [B1, C1] would cause substream to emit [B1, C1].
 * An action stream of [A1, B1, C1] would cause substream to emit [A1, C1].
 *
 * You can optionally pass a list of terminators.
 * If a terminator is encountered in the action stream, any partially matched substream is reset.
 * For example, if substream([A, B], C), an action stream of [A1, C1, B1] would cause substream to not emit.
 *
 * @param sequence The sequence of action types that define the substream to listen for.
 * @param terminators A list of terminators, any of which interrupt and reset a partially matched substream.
 */
export const substream = (sequence: ActionSequence, ...terminators: ActionType[]) => {
  const buildMatchedSequence = (matchedSequence, action) =>
    compareActionSequenceStep(sequence[matchedSequence.length], action)
    ? [
      ...matchedSequence,
      action
    ]
    : matchedSequence

  return pipe(
    scan<Action>((matchedSequence, action) =>
      terminators.indexOf(action.type) > -1
        // terminator found, reset the list
        ? []
        : buildMatchedSequence(
          // check if a full match has been found
          // if so, reset the list
          matchedSequence.length === sequence.length ? [] : matchedSequence,
          action
        ),
    []),
    skipWhile(matchedSequence => matchedSequence.length !== sequence.length)
  )
}
