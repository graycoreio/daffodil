import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCustomerStoreCreditTestingDriver } from '../provider';

/**
 * Provides the {@link DaffCustomerStoreCreditTestingDriver} as the {@link DaffCustomerStoreCreditDriver}.
 *
 * @deprecated in favor of {@link provideDaffCustomerStoreCreditTestingDriver}
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
