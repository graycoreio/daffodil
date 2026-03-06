import {
  importProvidersFrom,
  makeEnvironmentProviders,
} from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { DAFFIO_DOCS_SEARCH_STATE_FEATURE_KEY } from './feature-key.const';
import { daffioDocsSearchStoreResultReducers } from './reducers';

export const provideDaffioDocsSearchStoreResult = () => makeEnvironmentProviders([
  importProvidersFrom(StoreModule.forFeature(DAFFIO_DOCS_SEARCH_STATE_FEATURE_KEY, daffioDocsSearchStoreResultReducers)),
]);
