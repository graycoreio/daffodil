import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffContainerComponent } from './container/container.component';

/**
 * @deprecated in favor of {@link DAFF_CONTAINER_COMPONENTS}
 */
@NgModule({
  imports: [
    CommonModule,
    DaffContainerComponent,
  ],
  exports: [
    DaffContainerComponent,
  ],
})
export class DaffContainerModule { }
