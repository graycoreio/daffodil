import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffContentMagentoDriver } from './provider';

/**
 * @deprecated
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffContentMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffContentMagentoDriverModule> {
    return {
      ngModule: DaffContentMagentoDriverModule,
      providers: [
        provideDaffContentMagentoDriver(),
      ],
    };
  }
}
