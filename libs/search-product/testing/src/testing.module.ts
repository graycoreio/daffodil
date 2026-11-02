import { NgModule } from '@angular/core';

import { provideDaffSearchProductTesting } from './provider';

/**
 * Provides the default search result factory as a search result type factory.
 *
 * @deprecated in favor of {@link provideDaffSearchProductTesting}
 */
@NgModule({
  providers: [
    provideDaffSearchProductTesting(),
  ],
})
export class DaffSearchProductTestingModule { }
