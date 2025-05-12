import { NgModule } from '@angular/core';

import { DaffFormLabelDirective } from './form-label.directive';

/**
 * @deprecated in favor of standalone components. Deprecated in version 0.84.0. Will be removed in version 1.0.0.
 */
@NgModule({
  exports: [
    DaffFormLabelDirective,
  ],
  imports: [
    DaffFormLabelDirective,
  ],
})

export class DaffFormLabelModule {}
