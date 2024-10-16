import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffSearchInMemoryBackends } from '@daffodil/search/driver/in-memory';

import { DaffSearchProductInMemoryBackendService } from './backend/search.service';

/**
 * Module for providing the {@link DaffSearchProductInMemoryBackendService} as a search in-memory child backend.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffSearchProductInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffSearchProductInMemoryDriverModule> {
    return {
      ngModule: DaffSearchProductInMemoryDriverModule,
      providers: [
        provideDaffSearchInMemoryBackends(DaffSearchProductInMemoryBackendService),
      ],
    };
  }
}
