import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DaffSeoCanonicalUrlEffects } from './effects/ngrx-router/canonical.effects';
import { DaffSeoMetaEffects } from './effects/ngrx-router/meta.effects';
import { DaffSeoTitleEffects } from './effects/ngrx-router/title.effects';

/**
 * @deprecated Use {@link provideDaffSeoState} instead.
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
