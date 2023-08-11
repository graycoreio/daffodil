import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import {
  DaffAuthorizeNetStateConfig,
  daffAuthorizeNetStateDefaultConfig,
  provideDaffAuthorizeNetStateConfig,
} from './config/public_api';
import { DaffAuthorizeNetEffects } from './effects/authorize-net.effects';
import { DAFF_AUTHORIZENET_STORE_FEATURE_KEY } from './reducers/authorizenet-store-feature-key';
import { DAFF_AUTHORIZE_NET_REDUCERS } from './reducers/token/reducers.token';

@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_AUTHORIZENET_STORE_FEATURE_KEY, DAFF_AUTHORIZE_NET_REDUCERS),
    EffectsModule.forFeature([DaffAuthorizeNetEffects]),
  ],
})
export class DaffAuthorizeNetStateModule {
  static withConfig(config: Partial<DaffAuthorizeNetStateConfig> = {}): ModuleWithProviders<DaffAuthorizeNetStateModule> {
    return {
      ngModule: DaffAuthorizeNetStateModule,
      providers: [
        provideDaffAuthorizeNetStateConfig({
          ...daffAuthorizeNetStateDefaultConfig,
          ...config,
        }),
      ],
    };
  }
}
