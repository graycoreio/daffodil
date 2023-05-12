import {
  inject,
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { DaffBase64ServiceToken } from '@daffodil/core';

import {
  DaffProductCompositeRoutingConfig,
  daffProductCompositeRoutingConfigDefaultFactory,
  DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG,
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
        {
          provide: DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG,
          useFactory: () => ({
            ...daffProductCompositeRoutingConfigDefaultFactory(inject(DaffBase64ServiceToken)),
            ...config || {},
          }),
        },
      ],
    };
  }
}
