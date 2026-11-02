import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCustomerTestingDriver } from '../provider';

/**
 * Provides the {@link DaffCustomerTestingDriver} as the {@link DaffCustomerDriver}.
 *
 * @deprecated in favor of {@link provideDaffCustomerTestingDriver}
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCustomerTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffCustomerTestingDriverModule> {
    return {
      ngModule: DaffCustomerTestingDriverModule,
      providers: [
        provideDaffCustomerTestingDriver(),
      ],
    };
  }
}
