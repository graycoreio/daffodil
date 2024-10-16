import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffSearchResultKindFactories } from '@daffodil/search/testing';
import { DaffSearchProductResultFactory } from '@daffodil/search-product/testing';

/**
 * Module for providing the product search result factory as a search result kind factory.
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
        provideDaffSearchResultKindFactories(DaffSearchProductResultFactory),
      ],
    };
  }
}
