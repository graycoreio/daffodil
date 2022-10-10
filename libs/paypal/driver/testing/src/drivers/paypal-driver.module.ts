import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffPaypalExpressDriver } from '@daffodil/paypal/driver';

import { DaffTestingPaypalService } from './paypal.service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffPaypalTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffPaypalTestingDriverModule> {
    return {
      ngModule: DaffPaypalTestingDriverModule,
      providers: [
        {
          provide: DaffPaypalExpressDriver,
          useExisting: DaffTestingPaypalService,
        },
      ],
    };
  }
}
