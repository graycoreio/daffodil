import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DaffSearchPageStateModule } from '@daffodil/search/state';

import { DaffSearchProductStateCoreModule } from './core.module';
import { DaffSearchProductCollectionEffects } from './effects/collection.effects';

/**
 * @deprecated in favor of {@link provideDaffSearchProductPageState}
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
