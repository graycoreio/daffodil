import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffNavbarComponent } from './navbar/navbar.component';

/**
 * @deprecated in favor of {@link DAFF_NAVBAR_COMPONENTS}
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
