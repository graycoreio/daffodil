import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffProgressBarComponent } from './progress-bar.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DaffProgressBarComponent,
  ],
  exports: [
    DaffProgressBarComponent,
  ],
})
export class DaffProgressBarModule { }
