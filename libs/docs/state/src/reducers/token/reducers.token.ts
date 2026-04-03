import { inject } from '@angular/core';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

import { createSingleInjectionToken } from '@daffodil/core';
import { daffComposeReducers } from '@daffodil/core/state';

import { DAFF_DOCS_EXTRA_REDUCERS } from './extra.token';
import { DAFF_DOCS_ACTIONS } from '../../actions/public_api';
import { daffDocsReducerFactory } from '../docs/reducer';
import { daffDocsEntitiesReducerFactory } from '../entities/public_api';
import { DaffDocsReducersState } from '../reducers.interface';

export const {
  /**
   * An internal token to hold the Daffodil docs reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_DOCS_REDUCERS,
  /**
   * Provider function for {@link DAFF_DOCS_REDUCERS}.
   *
   * @docs-private
   */
  provider: provideDaffDocsReducers,
} = createSingleInjectionToken<ActionReducer<DaffDocsReducersState>>(
  ' DAFF_DOCS_REDUCERS',
  {
    providedIn: 'any',
    factory: () => daffComposeReducers<DaffDocsReducersState>([
      combineReducers({
        docs: daffDocsReducerFactory(inject(DAFF_DOCS_ACTIONS)),
        docsEntities: daffDocsEntitiesReducerFactory(inject(DAFF_DOCS_ACTIONS)),
      }),
      ...inject(DAFF_DOCS_EXTRA_REDUCERS),
    ]),
  },
);
