import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DAFF_SEARCH_IN_MEMORY_BACKENDS } from '@daffodil/search/driver/in-memory';

import { DaffSearchCategoryInMemoryBackendService } from './backend/search.service';

/**
 * Module for providing the {@link DaffSearchProductInMemoryBackendService} as a search in-memory child backend.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffSearchCategoryInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffSearchCategoryInMemoryDriverModule> {
    return {
      ngModule: DaffSearchCategoryInMemoryDriverModule,
      providers: [
        {
          provide: DAFF_SEARCH_IN_MEMORY_BACKENDS,
          useExisting: DaffSearchCategoryInMemoryBackendService,
          multi: true,
        },
      ],
    };
  }
}
