import { NgModule } from '@angular/core';

import { DaffPrefixDirective } from './prefix.directive';
import { DaffSuffixDirective } from './suffix.directive';

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
