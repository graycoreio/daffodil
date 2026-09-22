import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffProductCompositeTestingDriver } from './provider';

/**
 * Module for providing the composite product factory to the product kind factory.
 *
 * @deprecated in favor of {@link provideDaffProductCompositeTestingDriver}
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCompositeProductTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffCompositeProductTestingDriverModule> {
    return {
      ngModule: DaffCompositeProductTestingDriverModule,
      providers: [
        provideDaffProductCompositeTestingDriver(),
      ],
    };
  }
}
