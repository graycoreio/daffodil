import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffCartStoreCreditDriver } from '@daffodil/cart-store-credit/driver';

import { DaffCartStoreCreditTestingDriver } from './store-credit.service';

/**
 * Provides the {@link DaffCartStoreCreditTestingDriver} as the {@link DaffCartStoreCreditDriver}.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCartStoreCreditTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffCartStoreCreditTestingDriverModule> {
    return {
      ngModule: DaffCartStoreCreditTestingDriverModule,
      providers: [
        {
          provide: DaffCartStoreCreditDriver,
          useExisting: DaffCartStoreCreditTestingDriver,
        },
      ],
    };
  }
}
