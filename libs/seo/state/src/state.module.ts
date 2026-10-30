import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DaffSeoCanonicalUrlEffects } from './effects/ngrx-router/canonical.effects';
import { DaffSeoMetaEffects } from './effects/ngrx-router/meta.effects';
import { DaffSeoTitleEffects } from './effects/ngrx-router/title.effects';

/**
 * @deprecated Use {@link provideDaffSeoState} instead. Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    EffectsModule.forFeature([
      DaffSeoTitleEffects,
      DaffSeoMetaEffects,
      DaffSeoCanonicalUrlEffects,
    ]),
  ],
})
export class DaffSeoStateModule {}
