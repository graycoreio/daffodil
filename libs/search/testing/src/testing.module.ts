import { NgModule } from '@angular/core';

import { provideDaffSearchTesting } from './provider';

/**
 * Provides the default search result factory as a search result type factory.
 *
 * @deprecated in favor of {@link provideDaffSearchTesting}
 */
@NgModule({
  providers: [
    provideDaffSearchTesting(),
  ],
})
export class DaffSearchTestingModule { }
