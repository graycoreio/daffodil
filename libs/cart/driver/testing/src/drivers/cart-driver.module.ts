import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCartTestingDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffCartTestingDriver}
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
