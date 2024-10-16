import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffPaymentDriver } from '@daffodil/payment/driver';

import { DaffPaymentTestingDriver } from './payment.service';

/**
 * Provides the {@link DaffPaymentTestingDriver} as the {@link DaffPaymentDriver}.
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
        provideDaffPaymentDriver(DaffPaymentTestingDriver),
      ],
    };
  }
}
