import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DaffAuthRedirectEffects } from './effects/redirect.effects';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      DaffAuthRedirectEffects,
    ]),
  ],
})
export class DaffAuthRoutingRedirectModule {}
