import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DaffSeoTitleEffects } from './effects/title.effects';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      DaffSeoTitleEffects,
    ]),
  ],
})
export class DaffSeoStateModule {}
