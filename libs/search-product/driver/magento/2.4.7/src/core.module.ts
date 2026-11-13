import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { provideDaffSearchProductMagentoCore } from './provider';

/**
 * A module that provides product search query as a cacheable network operation.
 *
 * @deprecated in favor of {@link provideDaffSearchProductMagentoDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
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
