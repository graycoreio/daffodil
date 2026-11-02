import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffGeographyEffects } from './effects/geography.effects';
import {
  daffGeographyReducers,
  DAFF_GEOGRAPHY_STORE_FEATURE_KEY,
} from './reducers/public_api';

/**
 * @deprecated in favor of {@link provideDaffGeographyState}
 */
@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_GEOGRAPHY_STORE_FEATURE_KEY, daffGeographyReducers),
    EffectsModule.forFeature([
      DaffGeographyEffects,
    ]),
  ],
})
export class DaffGeographyStateModule {}
