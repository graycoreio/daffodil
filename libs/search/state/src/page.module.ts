import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DaffSearchPageEffects } from './effects/page.effects';
import { DaffSearchStateModule } from './search.module';

/**
 * @deprecated in favor of {@link provideDaffSearchPageState} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    EffectsModule.forFeature([
      DaffSearchPageEffects,
    ]),
    DaffSearchStateModule,
  ],
})
export class DaffSearchPageStateModule {}
