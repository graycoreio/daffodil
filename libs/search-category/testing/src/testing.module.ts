import { NgModule } from '@angular/core';

import { provideDaffSearchCategoryTesting } from './provider';

/**
 * Provides the default search result factory as a search result type factory.
 *
 * @deprecated in favor of {@link provideDaffSearchCategoryTesting}
 */
@NgModule({
  providers: [
    provideDaffSearchCategoryTesting(),
  ],
})
export class DaffSearchCategoryTestingModule { }
