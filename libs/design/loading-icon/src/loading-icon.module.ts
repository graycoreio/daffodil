import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffLoadingIconComponent } from './loading-icon/loading-icon.component';

/**
 * @deprecated in favor of {@link DAFF_LOADING_ICON_COMPONENTS} Deprecated in version 0.78.0. Will be removed in version 0.81.0.
 */
@NgModule({
  imports: [
    CommonModule,
    DaffLoadingIconComponent,
  ],
  exports: [
    DaffLoadingIconComponent,
  ],
})
export class DaffLoadingIconModule { }
