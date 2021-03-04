import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffNavigationDriver } from '@daffodil/navigation/driver';

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
      ],
    };
  }
}
