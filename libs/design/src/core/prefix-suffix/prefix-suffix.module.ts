import { NgModule } from '@angular/core';

import { DaffPrefixDirective } from './prefix.directive';
import { DaffSuffixDirective } from './suffix.directive';

@NgModule({
  imports: [],
  exports: [
    DaffPrefixDirective,
    DaffSuffixDirective
  ],
  declarations: [
    DaffPrefixDirective,
    DaffSuffixDirective
  ]
})
export class DaffPrefixSuffixModule {}
