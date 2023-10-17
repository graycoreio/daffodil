import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DAFF_SEARCH_RESULT_KIND_FACTORIES } from '@daffodil/search/testing';
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
        {
          provide: DAFF_SEARCH_RESULT_KIND_FACTORIES,
          useExisting: DaffSearchCategoryResultFactory,
          multi: true,
        },
      ],
    };
  }
}
