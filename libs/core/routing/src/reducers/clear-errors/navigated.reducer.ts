import {
  RouterAction,
  ROUTER_NAVIGATED,
} from '@ngrx/router-store';

import { DaffErrorable } from '@daffodil/core/state';

export function daffRouterStateNavigatedClearErrorsReducer<T extends DaffErrorable = DaffErrorable>(state: T, action: RouterAction<unknown>): T {
  switch (action.type) {
    case ROUTER_NAVIGATED:
      return {
        ...state,
        errors: [],
      };

    default:
      return state;
  }
}
