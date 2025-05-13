import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffQuantityFieldComponent } from './quantity-field.component';

/**
 * @deprecated in favor of standalone components. Deprecated in version 0.84.0. Will be removed in version 1.0.0.
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
