import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffContainerComponent } from './container/container.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DaffContainerComponent,
  ],
  exports: [
    DaffContainerComponent,
  ],
})
export class DaffContainerModule { }
