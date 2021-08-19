import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DaffSeoMetaEffects } from './effects/meta.effects';
import { DaffSeoTitleEffects } from './effects/title.effects';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      DaffSeoTitleEffects,
      DaffSeoMetaEffects,
    ]),
  ],
})
export class DaffSeoStateModule {}
