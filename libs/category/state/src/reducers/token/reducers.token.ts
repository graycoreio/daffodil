import { inject } from '@angular/core';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

// these unused imports are a workaround
import { DaffCategory } from '@daffodil/category';
import { createSingleInjectionToken } from '@daffodil/core';
import { daffComposeReducers } from '@daffodil/core/state';

import { DAFF_CATEGORY_EXTRA_REDUCERS } from './extra.token';
import { daffCategoryReducers } from '../category-reducers';
import { DaffCategoryReducersState } from '../category-reducers.interface';

export const {
  /**
   * An internal token to hold the Daffodil category reducers.
   * Includes the extra and standard reducers.
   *
   * @docs-private
   */
  token: DAFF_CATEGORY_REDUCERS,
  /**
   * Provider function for {@link DAFF_CATEGORY_REDUCERS}.
   */
  provider: provideDaffCategoryReducers,
} = createSingleInjectionToken<ActionReducer<DaffCategoryReducersState>>(
  'DAFF_CATEGORY_REDUCERS',
  {
    providedIn: 'any',
    factory: () => daffComposeReducers([
      combineReducers(daffCategoryReducers),
      ...inject(DAFF_CATEGORY_EXTRA_REDUCERS),
    ]),
  },
);
