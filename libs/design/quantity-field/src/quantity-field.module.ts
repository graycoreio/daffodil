import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffQuantityFieldComponent } from './quantity-field.component';

/**
 * @deprecated in favor of DaffSfQuantityFieldComponent. Deprecated in version 0.92.0. Will be removed in version 0.95.0.
 */
@NgModule({
  imports: [
    CommonModule,
    DaffQuantityFieldComponent,
  ],
  exports: [
    DaffQuantityFieldComponent,
  ],
})
export class DaffQuantityFieldModule { }
