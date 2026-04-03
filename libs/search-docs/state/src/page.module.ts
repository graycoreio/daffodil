import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DaffSearchPageStateModule } from '@daffodil/search/state';

import { DaffSearchDocsStateCoreModule } from './core.module';
import { DaffSearchDocsCollectionEffects } from './effects/collection.effects';

@NgModule({
  imports: [
    DaffSearchDocsStateCoreModule,
    DaffSearchPageStateModule,
    EffectsModule.forFeature([
      DaffSearchDocsCollectionEffects,
    ]),
  ],
})
export class DaffSearchDocsPageStateModule {}
