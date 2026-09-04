import {
  inject,
  NgModule,
} from '@angular/core';
import {
  combineReducers,
  StoreModule,
} from '@ngrx/store';

import { daffComposeReducers } from '@daffodil/core/state';

import { DAFF_SEARCH_STORE_FEATURE_KEY } from './reducers/public_api';
import { daffSearchReducers } from './reducers/reducers';
import { DAFF_SEARCH_EXTRA_REDUCERS } from './reducers/token/extra.token';
import {
  DAFF_SEARCH_REDUCERS,
  provideDaffSearchReducersFactory,
} from './reducers/token/reducers.token';

/**
 * Creates the search feature store.
 */
@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_SEARCH_STORE_FEATURE_KEY, DAFF_SEARCH_REDUCERS),
  ],
  providers: [
    provideDaffSearchReducersFactory(() => daffComposeReducers([
      combineReducers(daffSearchReducers),
      ...inject(DAFF_SEARCH_EXTRA_REDUCERS),
    ])),
  ],
})
export class DaffSearchStateModule {}
