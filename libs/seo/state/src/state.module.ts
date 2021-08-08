import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DaffSeoCanonicalUrlEffects } from './effects/canonical.effects';
import { DaffSeoMetaEffects } from './effects/meta.effects';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      DaffSeoCanonicalUrlEffects,
      DaffSeoMetaEffects,
    ]),
  ],
})
export class DaffSeoStateModule {}
