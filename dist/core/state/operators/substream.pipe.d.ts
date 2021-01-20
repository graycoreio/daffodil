import { Action } from '@ngrx/store';
export declare type ActionType = Action['type'];
export declare type ActionSequenceStep = ActionType | ActionType[];
export declare type ActionSequence = ActionSequenceStep[];
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
export declare const substream: (sequence: (string | string[])[], ...terminators: string[]) => import("rxjs").UnaryFunction<import("rxjs").Observable<Action>, import("rxjs").Observable<any>>;
