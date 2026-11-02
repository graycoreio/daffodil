import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffContactInMemoryDriver } from '../provider';

/**
 * @deprecated in favor of {@link provideDaffContactInMemoryDriver}
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
