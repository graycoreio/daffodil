import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffProgressIndicatorComponent } from './progress-indicator.component';

@NgModule({
  declarations: [DaffProgressIndicatorComponent],
  imports: [
    CommonModule,
  ],
  exports: [DaffProgressIndicatorComponent],
})
export class DaffProgressIndicatorModule { }
