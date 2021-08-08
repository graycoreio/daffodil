import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DaffSeoCanonicalUrlEffects } from './effects/canonical.effects';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      DaffSeoCanonicalUrlEffects,
    ]),
  ],
})
export class DaffSeoStateModule {}
