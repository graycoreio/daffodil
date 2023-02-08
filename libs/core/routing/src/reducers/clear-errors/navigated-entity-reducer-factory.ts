import {
  createEntityAdapter,
  EntityAdapter,
  EntityState,
} from '@ngrx/entity';
import {
  RouterAction,
  ROUTER_NAVIGATED,
} from '@ngrx/router-store';

import { DaffErrorable } from '@daffodil/core/state';

export function daffRouterStateNavigatedClearEntityErrorsReducerFactory<T extends DaffErrorable = DaffErrorable>(adapter: EntityAdapter<T> = createEntityAdapter<T>()) {
  return (state: EntityState<T>, action: RouterAction<unknown>): EntityState<T> => {
    switch (action.type) {
      case ROUTER_NAVIGATED:
        return adapter.map(
          (entity) => ({
            ...entity,
            errors: [],
          }),
          state,
        );

      default:
        return state;
    }
  };
}
