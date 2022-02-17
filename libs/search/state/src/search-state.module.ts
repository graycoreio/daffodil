import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffSearchEffects } from './effects/search.effects';
import {
  DAFF_SEARCH_STORE_FEATURE_KEY,
  daffSearchReducers,
} from './reducers/public_api';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      DaffSearchEffects,
    ]),
    StoreModule.forFeature(DAFF_SEARCH_STORE_FEATURE_KEY, daffSearchReducers),
  ],
})
export class DaffSearchStateModule {}
