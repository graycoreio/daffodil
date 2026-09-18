import {
  createEntityAdapter,
  EntityAdapter,
  EntityState,
} from '@ngrx/entity';

import { DaffProductCustomAttribute } from '@daffodil/product';

import {
  DaffProductCustomAttributesActions,
  DaffProductCustomAttributesActionTypes,
} from '../actions';

/**
 * Product Custom Attributes Adapter for changing/overwriting entity state.
 */
export const daffProductCustomAttributesEntitiesAdapter = (() => {
  let cache: EntityAdapter<DaffProductCustomAttribute>;
  return (): EntityAdapter<DaffProductCustomAttribute> =>
    cache = cache || createEntityAdapter<DaffProductCustomAttribute>();
})();

/**
 * Reducer function that catches actions and changes/overwrites product custom attributes entity state.
 */
export function daffProductCustomAttributesEntitiesReducer(
  state = daffProductCustomAttributesEntitiesAdapter().getInitialState(),
  action: DaffProductCustomAttributesActions,
): EntityState<DaffProductCustomAttribute> {
  switch (action.type) {
    case DaffProductCustomAttributesActionTypes.ListSuccess:
      return daffProductCustomAttributesEntitiesAdapter().upsertMany(action.payload, state);
    default:
      return state;
  }
}
