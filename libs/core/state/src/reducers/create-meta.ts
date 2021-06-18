import {
  Action,
  ActionReducer,
} from '@ngrx/store';

export function daffCreateMetaReducer<
  T,
  V extends Action = Action
>(reducers: ActionReducer<T, V>[]): ActionReducer<T, V> {
  return (state: T, action: V) =>
    reducers.reduce((nextState, reducer) => reducer(nextState, action), state);
}
