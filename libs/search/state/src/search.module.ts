import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { DAFF_SEARCH_STORE_FEATURE_KEY } from './reducers/public_api';
import { DAFF_SEARCH_REDUCERS } from './reducers/token/reducers.token';

/**
 * Creates the search feature store.
 */
@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_SEARCH_STORE_FEATURE_KEY, DAFF_SEARCH_REDUCERS),
  ],
})
export class DaffSearchStateModule {}
