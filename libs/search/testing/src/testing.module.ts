import { NgModule } from '@angular/core';

import { provideDaffSearchTesting } from './provider';

/**
 * Provides the default search result factory as a search result type factory.
 *
 * @deprecated in favor of {@link provideDaffSearchTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffSearchTesting(),
  ],
})
export class DaffSearchTestingModule { }
