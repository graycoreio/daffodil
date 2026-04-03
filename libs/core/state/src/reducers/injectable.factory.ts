import {
  Action,
  ActionReducer,
} from '@ngrx/store';

import { InjectableActionMap } from '../actions/public_api';

/**
 * Creates a reducer factory that will create reducers based on a passed {@link InjectableActionMap}.
 *
 * @param initialState The initial state of the reducer.
 * @param handlers The business logic for each type of action that should be handled by this reducer.
 */
export const createInjectableReducerFactory = <TState, TMap extends Record<string, any>>(
  initialState: TState,
  handlers: {[K in keyof TMap]?: (state: TState, payload: TMap[K]) => TState},
) =>
  <Actions extends Action>(actions: InjectableActionMap<TMap, Actions>): ActionReducer<TState, Actions> => {
    const lookup = Object.keys(actions).reduce((acc, key) => {
      Object.keys(actions[key]).forEach((actType) => {
        acc[actType] = key;
      });
      return acc;
    }, {});
    return (state = initialState, action: Actions): TState => {
      const handler = lookup[action.type];
      return handler ? handlers[handler](state, actions[handler][action.type].transform(action)) : state;
    };
  };
