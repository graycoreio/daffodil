import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DaffSeoNativeCanonicalUrlEffects } from './effects/router/canonical.effects';
import { DaffSeoNativeMetaEffects } from './effects/router/meta.effects';
import { DaffSeoNativeTitleEffects } from './effects/router/title.effects';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      DaffSeoNativeCanonicalUrlEffects,
      DaffSeoNativeMetaEffects,
      DaffSeoNativeTitleEffects,
    ]),
  ],
})
export class DaffSeoNativeStateModule {}
