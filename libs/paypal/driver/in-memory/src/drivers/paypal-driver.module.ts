import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';
import { provideDaffPaypalExpressDriver } from '@daffodil/paypal/driver';

import { DaffInMemoryPaypalService } from './paypal.service';
import { DaffInMemoryBackendPaypalService } from '../backend/public_api';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffPaypalInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffPaypalInMemoryDriverModule> {
    return {
      ngModule: DaffPaypalInMemoryDriverModule,
      providers: [
        provideDaffPaypalExpressDriver(DaffInMemoryPaypalService),
        provideDaffInMemoryBackends(DaffInMemoryBackendPaypalService),
      ],
    };
  }
}
