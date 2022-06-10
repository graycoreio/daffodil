import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffSearchDriver } from '@daffodil/search/driver';
import { DaffSearchTestingModule } from '@daffodil/search/testing';

import { DaffInMemorySearchDriver } from './search.service';

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
        {
          provide: DaffSearchDriver,
          useExisting: DaffInMemorySearchDriver,
        },
      ],
    };
  }
}
