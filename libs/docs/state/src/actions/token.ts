import {
  INJECTABLE_ACTION_MAP_KEY,
  createInjectableActionMap,
} from '@daffodil/core/state';

import {
  DAFF_DOCS_LOAD,
  DAFF_DOCS_LOAD_FAILURE,
  DAFF_DOCS_LOAD_SUCCESS,
  DaffDocsActions,
} from './actions';

export const {
  [INJECTABLE_ACTION_MAP_KEY]: DAFF_DOCS_ACTIONS,
  [DAFF_DOCS_LOAD]: {
    token: DAFF_DOCS_LOAD_ACTIONS,
    provider: provideDaffDocsLoadActions,
  },
  [DAFF_DOCS_LOAD_SUCCESS]: {
    token: DAFF_DOCS_LOAD_SUCCESS_ACTIONS,
    provider: provideDaffDocsLoadSuccessActions,
  },
  [DAFF_DOCS_LOAD_FAILURE]: {
    token: DAFF_DOCS_LOAD_FAILURE_ACTIONS,
    provider: provideDaffDocsLoadFailureActions,
  },
} = createInjectableActionMap<DaffDocsActions>('DAFF_DOCS_ACTIONS', [DAFF_DOCS_LOAD, DAFF_DOCS_LOAD_SUCCESS, DAFF_DOCS_LOAD_FAILURE]);
