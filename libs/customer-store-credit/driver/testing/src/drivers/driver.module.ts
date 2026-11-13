import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCustomerStoreCreditTestingDriver } from '../provider';

/**
 * Provides the {@link DaffCustomerStoreCreditTestingDriver} as the {@link DaffCustomerStoreCreditDriver}.
 *
 * @deprecated in favor of {@link provideDaffCustomerStoreCreditTestingDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCustomerStoreCreditTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffCustomerStoreCreditTestingDriverModule> {
    return {
      ngModule: DaffCustomerStoreCreditTestingDriverModule,
      providers: [
        provideDaffCustomerStoreCreditTestingDriver(),
      ],
    };
  }
}
