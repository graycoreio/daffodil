import { Action } from '@ngrx/store';
import { pipe } from 'rxjs';
import { scan, filter } from 'rxjs/operators';

export type ActionType = Action['type'];
export type ActionSequenceStep = ActionType | ActionType[];
export type ActionSequence = ActionSequenceStep[];

const compareActionSequenceStep = (step: ActionSequenceStep, action: Action): boolean => Array.isArray(step)
  ? step.reduce((acc, type) => acc || action.type === type, false)
  : action.type === step

/**
 * Watches for a particular stream of actions in the specified order and
 * emits a list of those actions once all sequence steps have been matched.
 *
 * This will find the first occurence of the substream and not necessarily the most concise or recent substream.
 * For example, substream([A, B]) encountering an action stream of [A1, A2, B1, B2] will emit [A1, B1].
 * When a substream is found and emitted, the list is reset and it will continue to listen to the action stream.
 *
 * You can indicate that a particular step in the sequence can be matched by mutiple actions by passing an array for that step.
 * For example, if the first step of the sequence could be action A or action B: substream([[A, B], C]).
 * An action stream of [A1, C1] would cause substream to emit [A1, C1].
 * An action stream of [B1, C1] would cause substream to emit [B1, C1].
 * An action stream of [A1, B1, C1] would cause substream to emit [A1, C1].
 *
 * You can optionally pass a list of terminators.
 * If a terminator is encountered in the action stream, any partially matched substream is reset.
 * For example, substream([A, B], C) would not emit anything for an action stream of [A1, C1, B1].
 *
 * @param sequence The sequence of action types that define the substream to listen for.
 * @param terminators A list of terminators, any of which interrupt and reset a partially matched substream.
 */
export const substream = (sequence: ActionSequence, ...terminators: ActionType[]) => {
  const isFullMatch = matchedSubstream => matchedSubstream.length === sequence.length;
  const accumulateMatchedSubstream = (matchedSubstream, action) =>
    compareActionSequenceStep(sequence[matchedSubstream.length], action)
      ? [
        ...matchedSubstream,
        action
      ]
      : matchedSubstream;

  return pipe(
    scan<Action>((matchedSubstream, action) =>
      terminators.indexOf(action.type) > -1
        // terminator found, reset the list
        ? []
        : accumulateMatchedSubstream(
          // reset the list if fully matched
          isFullMatch(matchedSubstream) ? [] : matchedSubstream,
          action
        ),
    []),
    filter(isFullMatch)
  )
}
