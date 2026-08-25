import {
  inject,
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {
  combineReducers,
  StoreModule,
} from '@ngrx/store';

import { daffComposeReducers } from '@daffodil/core/state';

import {
  DaffAuthorizeNetStateConfig,
  daffAuthorizeNetStateDefaultConfig,
  provideDaffAuthorizeNetStateConfig,
} from './config/public_api';
import { DaffAuthorizeNetEffects } from './effects/authorize-net.effects';
import { daffAuthorizeNetReducer } from './reducers/authorize-net/authorize-net.reducer';
import { DAFF_AUTHORIZENET_STORE_FEATURE_KEY } from './reducers/authorizenet-store-feature-key';
import { DAFF_AUTHORIZE_NET_EXTRA_REDUCERS } from './reducers/token/extra.token';
import {
  DAFF_AUTHORIZE_NET_REDUCERS,
  provideDaffAuthorizeNetReducersFactory,
} from './reducers/token/reducers.token';

@NgModule({
  imports: [
    StoreModule.forFeature(DAFF_AUTHORIZENET_STORE_FEATURE_KEY, DAFF_AUTHORIZE_NET_REDUCERS),
    EffectsModule.forFeature([DaffAuthorizeNetEffects]),
  ],
  providers: [
    provideDaffAuthorizeNetStateConfig(daffAuthorizeNetStateDefaultConfig),
    provideDaffAuthorizeNetReducersFactory(() => daffComposeReducers([
      combineReducers({
        authorizeNet: daffAuthorizeNetReducer,
      }),
      ...inject(DAFF_AUTHORIZE_NET_EXTRA_REDUCERS),
    ])),
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
