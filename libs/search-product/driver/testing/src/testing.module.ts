import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffSearchProductTestingDriver } from './provider';

/**
 * Module for providing the product search result factory as a search result kind factory.
 *
 * @deprecated in favor of {@link provideDaffSearchProductTestingDriver}
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffSearchProductTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffSearchProductTestingDriverModule> {
    return {
      ngModule: DaffSearchProductTestingDriverModule,
      providers: [
        provideDaffSearchProductTestingDriver(),
      ],
    };
  }
}
