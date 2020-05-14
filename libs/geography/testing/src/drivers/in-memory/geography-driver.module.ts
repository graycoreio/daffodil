import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DaffGeographyDriver,
} from '@daffodil/geography';

import { DaffInMemoryGeographyService } from './geography.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffGeographyInMemoryDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffGeographyInMemoryDriverModule,
      providers: [
        {
          provide: DaffGeographyDriver,
          useExisting: DaffInMemoryGeographyService
        },
      ]
    };
  }
}
