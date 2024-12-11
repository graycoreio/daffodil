import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffPrefixSuffixModule } from '@daffodil/design';

import { DaffButtonComponent } from './button/basic/button.component';
import { DaffFlatButtonComponent } from './button/flat/flat.component';
import { DaffIconButtonComponent } from './button/icon/icon.component';
import { DaffRaisedButtonComponent } from './button/raised/raised.component';
import { DaffStrokedButtonComponent } from './button/stroked/stroked.component';
import { DaffUnderlineButtonComponent } from './button/underline/underline.component';

/**
 * @deprecated in favor of {@link DAFF_BUTTON_COMPONENTS}. Deprecated in version 0.78.0. Will be removed in version 1.0.0.
 */
@NgModule({
  imports: [
    CommonModule,
    DaffButtonComponent,
    DaffFlatButtonComponent,
    DaffIconButtonComponent,
    DaffRaisedButtonComponent,
    DaffStrokedButtonComponent,
    DaffUnderlineButtonComponent,
  ],
  exports: [
    DaffButtonComponent,
    DaffFlatButtonComponent,
    DaffIconButtonComponent,
    DaffRaisedButtonComponent,
    DaffStrokedButtonComponent,
    DaffUnderlineButtonComponent,
    DaffPrefixSuffixModule,
  ],
})
export class DaffButtonModule { }
