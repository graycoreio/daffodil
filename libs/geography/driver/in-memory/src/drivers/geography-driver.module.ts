import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';
import { provideDaffGeographyDriver } from '@daffodil/geography/driver';

import { DaffInMemoryGeographyService } from './geography.service';
import { DaffInMemoryBackendGeographyService } from '../backend/geography.service';

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
        provideDaffGeographyDriver(DaffInMemoryGeographyService),
        provideDaffInMemoryBackends(DaffInMemoryBackendGeographyService),
      ],
    };
  }
}
