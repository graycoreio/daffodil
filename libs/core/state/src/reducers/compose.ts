import {
  Action,
  ActionReducer,
} from '@ngrx/store';

/**
 * Creates and returns a composite reducer that invokes each of the passed reducers in turn.
 */
export function daffComposeReducers<
  T,
  V extends Action = Action
>(reducers: ActionReducer<T, V>[]): ActionReducer<T, V> {
  return (state: T, action: V): T =>
    reducers.reduce((nextState, reducer) => reducer(nextState, action), state);
}
