import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffGeographyDriver } from '@daffodil/geography';

import { DaffTestingGeographyService } from './geography.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffGeographyTestingDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffGeographyTestingDriverModule,
      providers: [
        {
          provide: DaffGeographyDriver,
          useExisting: DaffTestingGeographyService
        }
      ]
    };
  }
}
