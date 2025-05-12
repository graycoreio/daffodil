import { NgModule } from '@angular/core';

import { DaffErrorMessageComponent } from './error-message.component';

/**
 * @deprecated in favor of standalone components. Deprecated in version 0.84.0. Will be removed in version 1.0.0.
 */
@NgModule({
  exports: [
    DaffErrorMessageComponent,
  ],
  imports: [
    DaffErrorMessageComponent,
  ],
})
export class DaffErrorMessageModule { }
