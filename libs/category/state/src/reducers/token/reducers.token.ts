import {
  inject,
  InjectionToken,
} from '@angular/core';
import {
  ActionReducer,
  combineReducers,
} from '@ngrx/store';

// these unused imports are a workaround
import { DaffCategory } from '@daffodil/category';
import { daffComposeReducers } from '@daffodil/core/state';

import { DAFF_CATEGORY_EXTRA_REDUCERS } from './extra.token';
import { daffCategoryReducers } from '../category-reducers';
import { DaffCategoryReducersState } from '../category-reducers.interface';

/**
 * An internal token to hold the Daffodil category reducers.
 * Includes the extra and standard reducers.
 *
 * @docs-private
 */
export const DAFF_CATEGORY_REDUCERS = new InjectionToken<ActionReducer<DaffCategoryReducersState>>(
  'DAFF_CATEGORY_REDUCERS',
  {
    providedIn: 'any',
    factory: () => daffComposeReducers([
      combineReducers(daffCategoryReducers),
      ...inject(DAFF_CATEGORY_EXTRA_REDUCERS),
    ]),
  },
);
