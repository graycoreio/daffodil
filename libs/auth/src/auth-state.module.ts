import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { DAFF_AUTH_STORE_FEATURE_KEY, daffAuthReducers } from './reducers/public_api';

@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_AUTH_STORE_FEATURE_KEY, daffAuthReducers),
  ]
})
export class DaffAuthStateModule {}
