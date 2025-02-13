import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import {
  DaffAuthRoutingConfig,
  provideDaffAuthRoutingConfig,
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
  static withConfig(config?: Partial<DaffAuthRoutingConfig>): ModuleWithProviders<DaffAuthRoutingModule> {
    return {
      ngModule: DaffAuthRoutingModule,
      providers: [
        provideDaffAuthRoutingConfig(config),
      ],
    };
  }
}
