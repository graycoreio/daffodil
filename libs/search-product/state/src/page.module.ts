import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DaffSearchPageStateModule } from '@daffodil/search/state';

import { DaffSearchProductStateCoreModule } from './core.module';
import { DaffSearchProductCollectionEffects } from './effects/collection.effects';

/**
 * @deprecated in favor of {@link provideDaffSearchProductPageState} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    DaffSearchProductStateCoreModule,
    DaffSearchPageStateModule,
    EffectsModule.forFeature([
      DaffSearchProductCollectionEffects,
    ]),
  ],
})
export class DaffSearchProductPageStateModule {}
