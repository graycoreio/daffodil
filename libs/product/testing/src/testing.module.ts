import { NgModule } from '@angular/core';

import { provideDaffProductTesting } from './provider';

/**
 * Provides the default product factory as a product type factory.
 *
 * @deprecated in favor of {@link provideDaffProductTesting}
 */
@NgModule({
  providers: [
    provideDaffProductTesting(),
  ],
})
export class DaffProductTestingModule { }
