import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCustomerMagentoDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffCustomerMagentoDriver}
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCustomerMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffCustomerMagentoDriverModule> {
    return {
      ngModule: DaffCustomerMagentoDriverModule,
      providers: [
        provideDaffCustomerMagentoDriver(),
      ],
    };
  }
}
