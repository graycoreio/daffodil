import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { DemoAuthEffects } from './effects/auth.effects';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      DemoAuthEffects,
    ])
  ]
})
export class DemoAuthStateModule { }
