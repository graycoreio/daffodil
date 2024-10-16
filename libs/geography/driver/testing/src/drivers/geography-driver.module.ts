import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffGeographyDriver } from '@daffodil/geography/driver';

import { DaffTestingGeographyService } from './geography.service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffGeographyTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffGeographyTestingDriverModule> {
    return {
      ngModule: DaffGeographyTestingDriverModule,
      providers: [
        provideDaffGeographyDriver(DaffTestingGeographyService),
      ],
    };
  }
}
