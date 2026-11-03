import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffPaymentInMemoryDriver } from '../provider';

/**
 * Provides the {@link DaffPaymentInMemoryDriver} as the {@link DaffPaymentDriver}.
 *
 * @deprecated in favor of {@link provideDaffPaymentInMemoryDriver}
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffPaymentInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffPaymentInMemoryDriverModule> {
    return {
      ngModule: DaffPaymentInMemoryDriverModule,
      providers: [
        provideDaffPaymentInMemoryDriver(),
      ],
    };
  }
}
