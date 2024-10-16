import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import {
  DaffSearchStateConfig,
  provideDaffSearchStateConfig,
  DAFF_SEARCH_STATE_CONFIG_DEFAULT,
} from './config/public_api';
import { DaffSearchIncrementalEffects } from './effects/incremental.effects';
import { DaffSearchStateModule } from './search.module';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      DaffSearchIncrementalEffects,
    ]),
    DaffSearchStateModule,
  ],
})
export class DaffSearchIncrementalStateModule {
  static withConfig(config: DaffSearchStateConfig = DAFF_SEARCH_STATE_CONFIG_DEFAULT): ModuleWithProviders<DaffSearchIncrementalStateModule> {
    return {
      ngModule: DaffSearchIncrementalStateModule,
      providers: [
        provideDaffSearchStateConfig(config),
      ],
    };
  }
}
