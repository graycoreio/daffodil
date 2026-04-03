import {
  InjectionToken,
  inject,
} from '@angular/core';
import { Action } from '@ngrx/store';

import { createInjectableAction } from './factory';
import { InjectableActionMap } from './map.type';
import { ActionTransformedInjection } from './transformed.type';

/**
 * The key in which the token for the injectable action map is stored.
 */
export const INJECTABLE_ACTION_MAP_KEY = 'εINJECTABLE_ACTION_MAP_KEY';

/**
 * Creates a map of injectable actions and a token to hold them.
 *
 * @example
 * ```ts
 * export const {
 *   [INJECTABLE_ACTION_MAP_KEY]: MY_ACTION_MAP,
 * 	 myAction1: {
 *     token: MY_ACTION_1
 *     provider: provideMyAction1
 *   },
 *   myAction2: {
 *     token: MY_ACTION_2
 *     provider: provideMyAction2
 *   }
 * } = createInjectableActionMap<{myAction1: {field1: string}, myAction2: {field2: number}}>('MY_ACTION_MAP', ['MY_ACTION_1', 'MY_ACTION_2'])
 * ```
 */
export const createInjectableActionMap = <T extends Record<string, any>>(tokenName: string, actions: Array<keyof T>) => {
  const map = actions.reduce((acc, action) => {
    acc[action] = createInjectableAction<T[typeof action]>(String(action));
    return acc;
  }, <{[K in keyof T]: ReturnType<typeof createInjectableAction<T[K]>>}>{});
  return {
    ...map,
    [INJECTABLE_ACTION_MAP_KEY]: new InjectionToken<InjectableActionMap<T>>(
      tokenName,
      {
        factory: () => {
          const _map = <InjectableActionMap<T>>{};

          for (const k in map) {
            if (Object.hasOwn(map, k)) {
              const tokenVal = inject(map[k].token);
              _map[k] = tokenVal.reduce((acc, injection) => {
                acc[injection.type] = 'transform' in injection ? injection : { type: injection.type, transform: <A extends Action>(action: A) => <T[typeof k]>action };
                return acc;
              }, <Record<string, ActionTransformedInjection<T[typeof k]>>>{});
            }
          }

          return _map;
        },
      },
    ),
  };
};
