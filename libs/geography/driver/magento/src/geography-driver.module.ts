import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffGeographyDriver } from '@daffodil/geography/driver'

import { DaffGeographyMagentoService } from './geography.service';

@NgModule({
  imports: [
    CommonModule,
  ]
})
export class DaffGeographyMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffGeographyMagentoDriverModule> {
    return {
      ngModule: DaffGeographyMagentoDriverModule,
      providers: [
        {
          provide: DaffGeographyDriver,
          useExisting: DaffGeographyMagentoService
        }
      ]
    };
  }
}
