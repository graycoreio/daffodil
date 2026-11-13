import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffPaymentTestingDriver } from './provider';

/**
 * Provides the {@link DaffPaymentTestingDriver} as the {@link DaffPaymentDriver}.
 *
 * @deprecated in favor of {@link provideDaffPaymentTestingDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffPaymentTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffPaymentTestingDriverModule> {
    return {
      ngModule: DaffPaymentTestingDriverModule,
      providers: [
        provideDaffPaymentTestingDriver(),
      ],
    };
  }
}
