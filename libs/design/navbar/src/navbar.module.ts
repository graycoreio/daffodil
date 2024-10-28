import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffNavbarComponent } from './navbar/navbar.component';

/**
 * @deprecated in favor of {@link DAFF_NAVBAR_COMPONENTS} Deprecated in version 0.78.0. Will be removed in version 0.81.0.
 */
@NgModule({
  imports: [
    CommonModule,
    DaffNavbarComponent,
  ],
  exports: [
    DaffNavbarComponent,
  ],
})
export class DaffNavbarModule { }
