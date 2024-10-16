import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import {
  DaffProductCompositeRoutingConfig,
  provideDaffProductCompositeRoutingConfig,
} from './config/public_api';
import { DaffProductCompositePageEffects } from './effects/public_api';
import { DaffProductCompositeQueryParamService } from './services/query-param.service';

@NgModule({
  imports: [
    EffectsModule.forFeature([DaffProductCompositePageEffects]),
  ],
  providers: [
    DaffProductCompositeQueryParamService,
  ],
})
export class DaffProductCompositeRoutingModule {
  static withConfig(config?: DaffProductCompositeRoutingConfig): ModuleWithProviders<DaffProductCompositeRoutingModule> {
    return {
      ngModule: DaffProductCompositeRoutingModule,
      providers: [
        provideDaffProductCompositeRoutingConfig(config),
      ],
    };
  }
}
