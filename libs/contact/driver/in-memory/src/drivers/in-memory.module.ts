import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffContactInMemoryDriver } from '../provider';

/**
 * @deprecated in favor of {@link provideDaffContactInMemoryDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [CommonModule],
})
export class DaffContactInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffContactInMemoryDriverModule> {
    return {
      ngModule: DaffContactInMemoryDriverModule,
      providers: [
        provideDaffContactInMemoryDriver(),
      ],
    };
  }
}
