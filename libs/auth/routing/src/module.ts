import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import {
  DaffAuthRoutingConfig,
  DAFF_AUTH_ROUTING_CONFIG,
  DAFF_AUTH_ROUTING_CONFIG_DEFAULT,
} from './config/public_api';
import {
  DaffAuthResetPasswordGuard,
  GuestOnlyGuard,
  MemberOnlyGuard,
} from './guards/public_api';

@NgModule({
  providers: [
    DaffAuthResetPasswordGuard,
    MemberOnlyGuard,
    GuestOnlyGuard,
  ],
})
export class DaffAuthRoutingModule {
  static withConfig(config?: DaffAuthRoutingConfig): ModuleWithProviders<DaffAuthRoutingModule> {
    return {
      ngModule: DaffAuthRoutingModule,
      providers: [
        {
          provide: DAFF_AUTH_ROUTING_CONFIG,
          useValue: config || DAFF_AUTH_ROUTING_CONFIG_DEFAULT,
        },
      ],
    };
  }
}
