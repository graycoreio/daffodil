import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';
import { provideDaffSearchDriver } from '@daffodil/search/driver';
import { DaffSearchTestingModule } from '@daffodil/search/testing';

import { DaffInMemorySearchDriver } from './search.service';
import { DaffInMemoryBackendSearchDriver } from '../backend/search.service';

/**
 * Provides the {@link DaffInMemorySearchDriver} as the {@link DaffSearchDriver}.
 */
@NgModule({
  imports: [
    CommonModule,
    DaffSearchTestingModule,
  ],
})
export class DaffSearchInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffSearchInMemoryDriverModule> {
    return {
      ngModule: DaffSearchInMemoryDriverModule,
      providers: [
        provideDaffSearchDriver(DaffInMemorySearchDriver),
        provideDaffInMemoryBackends(DaffInMemoryBackendSearchDriver),
      ],
    };
  }
}
