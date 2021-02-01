import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffGeographyDriver } from '@daffodil/geography/driver';

import { DaffInMemoryGeographyService } from './geography.service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffGeographyInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffGeographyInMemoryDriverModule> {
    return {
      ngModule: DaffGeographyInMemoryDriverModule,
      providers: [
        {
          provide: DaffGeographyDriver,
          useExisting: DaffInMemoryGeographyService,
        },
      ],
    };
  }
}
