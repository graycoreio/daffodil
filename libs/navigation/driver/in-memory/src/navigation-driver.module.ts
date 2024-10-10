import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';
import { DaffNavigationDriver } from '@daffodil/navigation/driver';

import { DaffInMemoryBackendNavigationService } from './backend/navigation.service';
import { DaffInMemoryNavigationService } from './navigation.service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffNavigationInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffNavigationInMemoryDriverModule> {
    return {
      ngModule: DaffNavigationInMemoryDriverModule,
      providers: [
        {
          provide: DaffNavigationDriver,
          useExisting: DaffInMemoryNavigationService,
        },
        provideDaffInMemoryBackends(DaffInMemoryBackendNavigationService),
      ],
    };
  }
}
