import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffButtonComponent } from './button/basic/button.component';
import { DaffFlatButtonComponent } from './button/flat/flat.component';
import { DaffIconButtonComponent } from './button/icon/icon.component';
import { DaffStrokedButtonComponent } from './button/stroked/stroked.component';

/**
 * @deprecated in favor of {@link DAFF_BUTTON_COMPONENTS}. Deprecated in version 0.78.0. Will be removed in version 1.0.0.
 */
@NgModule({
  imports: [
    CommonModule,
    DaffButtonComponent,
    DaffFlatButtonComponent,
    DaffIconButtonComponent,
    DaffStrokedButtonComponent,
  ],
  exports: [
    DaffButtonComponent,
    DaffFlatButtonComponent,
    DaffIconButtonComponent,
    DaffStrokedButtonComponent,
  ],
})
export class DaffButtonModule { }
