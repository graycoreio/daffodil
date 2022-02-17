import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffSearchDriver } from '@daffodil/search/driver';

import { DaffSearchFederatedDriver } from './search.service';

/**
 * Provides the {@link DaffSearchFederatedDriver} as the {@link DaffSearchDriver}.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffSearchFederatedDriverModule {
  static forRoot(): ModuleWithProviders<DaffSearchFederatedDriverModule> {
    return {
      ngModule: DaffSearchFederatedDriverModule,
      providers: [
        {
          provide: DaffSearchDriver,
          useExisting: DaffSearchFederatedDriver,
        },
      ],
    };
  }
}
