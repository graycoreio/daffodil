import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffToastModule } from '@daffodil/design/toast';

import { ToastWithCustomDurationComponent } from './toast-with-custom-duration.component';

@NgModule({
  declarations: [
    ToastWithCustomDurationComponent,
  ],
  imports: [
    CommonModule,
    DaffToastModule,
    DaffButtonModule,
  ],
  exports: [
    ToastWithCustomDurationComponent,
  ],
})
export class ToastWithCustomDurationModule { }
