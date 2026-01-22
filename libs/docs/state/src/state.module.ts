import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { DAFF_DOCS_STORE_FEATURE_KEY } from './reducers/public_api';
import { DAFF_DOCS_REDUCERS } from './reducers/token/reducers.token';

@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_DOCS_STORE_FEATURE_KEY, DAFF_DOCS_REDUCERS),
  ],
})
export class DaffDocsStateModule {}
