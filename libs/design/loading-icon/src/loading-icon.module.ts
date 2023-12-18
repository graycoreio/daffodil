import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffLoadingIconComponent } from './loading-icon/loading-icon.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DaffLoadingIconComponent,
  ],
  exports: [
    DaffLoadingIconComponent,
  ],
})
export class DaffLoadingIconModule { }
