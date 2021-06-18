import {
  Action,
  ActionReducer,
} from '@ngrx/store';

/**
 * Creates a meta reducer that invokes each of the passed reducers in turn.
 */
export function daffCreateMetaReducer<
  T,
  V extends Action = Action
>(reducers: ActionReducer<T, V>[]): ActionReducer<T, V> {
  return (state: T, action: V): T =>
    reducers.reduce((nextState, reducer) => reducer(nextState, action), state);
}
