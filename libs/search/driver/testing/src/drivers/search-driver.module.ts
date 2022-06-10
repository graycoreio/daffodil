import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffSearchDriver } from '@daffodil/search/driver';

import { DaffTestingSearchDriver } from './search.service';

/**
 * Provides the {@link DaffTestingSearchDriver} as the {@link DaffSearchDriver}.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffSearchTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffSearchTestingDriverModule> {
    return {
      ngModule: DaffSearchTestingDriverModule,
      providers: [
        {
          provide: DaffSearchDriver,
          useExisting: DaffTestingSearchDriver,
        },
      ],
    };
  }
}
