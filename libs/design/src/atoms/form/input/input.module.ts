import { NgModule } from '@angular/core';

import { DaffInputComponent } from './input.component';

/**
 * @deprecated in favor of standalone components. Deprecated in version 0.84.0. Will be removed in version 1.0.0.
 */
@NgModule({
  imports: [
    DaffInputComponent,
  ],
  exports: [
    DaffInputComponent,
  ],
})
export class DaffInputModule { }
