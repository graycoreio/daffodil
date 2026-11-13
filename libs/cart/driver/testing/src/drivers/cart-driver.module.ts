import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCartTestingDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffCartTestingDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffTestingCartDriverModule {
  static forRoot(): ModuleWithProviders<DaffTestingCartDriverModule> {
    return {
      ngModule: DaffTestingCartDriverModule,
      providers: [
        provideDaffCartTestingDriver(),
      ],
    };
  }
}
