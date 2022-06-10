import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DaffSearchPageEffects } from './effects/page.effects';
import { DaffSearchStateModule } from './search.module';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      DaffSearchPageEffects,
    ]),
    DaffSearchStateModule,
  ],
})
export class DaffSearchPageStateModule {}
