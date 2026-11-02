import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffRelatedProductsTestingDriver } from './provider';

/**
 * Module for providing the related product fields to the product extension factory.
 *
 * @deprecated in favor of {@link provideDaffRelatedProductsTestingDriver}
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffRelatedProductsTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffRelatedProductsTestingDriverModule> {
    return {
      ngModule: DaffRelatedProductsTestingDriverModule,
      providers: [
        provideDaffRelatedProductsTestingDriver(),
      ],
    };
  }
}
