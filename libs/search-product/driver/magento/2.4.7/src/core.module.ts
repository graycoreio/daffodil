import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { provideDaffSearchProductMagentoCore } from './provider';

/**
 * A module that provides product search query as a cacheable network operation.
 *
 * @deprecated in favor of {@link provideDaffSearchProductMagentoDriver}
 */
@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    provideDaffSearchProductMagentoCore(),
  ],
})
export class DaffSearchProductMagentoCoreModule {}
