import {
  RouterAction,
  ROUTER_NAVIGATED,
} from '@ngrx/router-store';

import { DaffErrorable } from '@daffodil/core/state';

/**
 * A reducer that will clear all errors from state when `ROUTER_NAVIGATED` is dispatched.
 */
export function daffRouterStateNavigatedClearErrorsReducer<T extends DaffErrorable = DaffErrorable>(state: T, action: RouterAction<unknown>): T {
  switch (action.type) {
    case ROUTER_NAVIGATED:
      return {
        ...state,
        daffErrors: [],
      };

    default:
      return state;
  }
}
