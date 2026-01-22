import { createInjectableReducerFactory } from '@daffodil/core/state';

import { daffGetDocsAdapter } from './entities-adapter';
import { daffDocsEntitiesInitialState } from './entities-initial-state';
import { DaffDocsEntityState } from './entities-state.interface';
import {
  DAFF_DOCS_LOAD_SUCCESS,
  DaffDocsActions,
} from '../../actions/actions';

/**
 * Reducer function that catches actions and changes/overwrites docs entities state.
 */
export const daffDocsEntitiesReducerFactory = createInjectableReducerFactory<DaffDocsEntityState, DaffDocsActions>(
  daffDocsEntitiesInitialState,
  {
    [DAFF_DOCS_LOAD_SUCCESS]: (state, { payload }) => daffGetDocsAdapter().upsertMany(payload, state),
  },
);
