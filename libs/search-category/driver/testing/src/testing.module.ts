import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffSearchResultKindFactories } from '@daffodil/search/testing';
import { DaffSearchCategoryResultFactory } from '@daffodil/search-category/testing';

/**
 * Module for providing the category search result factory as a search result kind factory.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffSearchCategoryTestingDriverModule {
  static forRoot(): ModuleWithProviders<DaffSearchCategoryTestingDriverModule> {
    return {
      ngModule: DaffSearchCategoryTestingDriverModule,
      providers: [
        provideDaffSearchResultKindFactories(DaffSearchCategoryResultFactory),
      ],
    };
  }
}
