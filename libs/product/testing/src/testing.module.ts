import { NgModule } from '@angular/core';

import { provideDaffProductTesting } from './provider';

/**
 * Provides the default product factory as a product type factory.
 *
 * @deprecated in favor of {@link provideDaffProductTesting} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  providers: [
    provideDaffProductTesting(),
  ],
})
export class DaffProductTestingModule { }
