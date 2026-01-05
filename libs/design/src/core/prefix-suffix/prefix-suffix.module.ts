import { NgModule } from '@angular/core';

import { DaffPrefixDirective } from './prefix.directive';
import { DaffSuffixDirective } from './suffix.directive';

/**
 * @deprecated in favor of standalone components. Deprecated in version 0.91.0. Will be removed in version 1.0.0.
 */
@NgModule({
  imports: [
    DaffPrefixDirective,
    DaffSuffixDirective,
  ],
  exports: [
    DaffPrefixDirective,
    DaffSuffixDirective,
  ],
})
export class DaffPrefixSuffixModule {}
