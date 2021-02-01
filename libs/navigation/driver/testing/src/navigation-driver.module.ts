import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffNavigationDriver } from '@daffodil/navigation/driver';

import { DaffTestingNavigationService } from './navigation.service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffNavigationTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffNavigationTestingDriverModule> {
    return {
      ngModule: DaffNavigationTestingDriverModule,
      providers: [
        {
          provide: DaffNavigationDriver,
          useExisting: DaffTestingNavigationService,
        },
      ],
    };
  }
}
