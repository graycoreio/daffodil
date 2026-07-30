import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCustomerOrderMagentoDriver } from './provider';

/**
 * @deprecated prefer {@link provideDaffCustomerOrderMagentoDriver}.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCustomerOrderMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffCustomerOrderMagentoDriverModule> {
    return {
      ngModule: DaffCustomerOrderMagentoDriverModule,
      providers: [
        provideDaffCustomerOrderMagentoDriver(),
      ],
    };
  }
}
