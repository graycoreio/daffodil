import {
  createInjectableReducerFactory,
  daffCompleteOperation,
  daffOperationFailed,
  daffStartResolution,
} from '@daffodil/core/state';

import { daffDocsInitialState } from './initial-state';
import { DaffDocsReducerState } from './reducer.interface';
import {
  DAFF_DOCS_LOAD,
  DAFF_DOCS_LOAD_FAILURE,
  DAFF_DOCS_LOAD_SUCCESS,
  DaffDocsActions,
} from '../../actions/public_api';

export const daffDocsReducerFactory = createInjectableReducerFactory<DaffDocsReducerState, DaffDocsActions>(
  daffDocsInitialState,
  {
    [DAFF_DOCS_LOAD]: daffStartResolution,
    [DAFF_DOCS_LOAD_SUCCESS]: daffCompleteOperation,
    [DAFF_DOCS_LOAD_FAILURE]: (state, { payload }) => daffOperationFailed(payload, state),
  },
);
