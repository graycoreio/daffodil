import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffQuantityFieldComponent } from './quantity-field.component';

/**
 * @deprecated in favor of DaffSfQuantityFieldComponent.
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
