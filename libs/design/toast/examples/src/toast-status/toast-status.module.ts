import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffToastModule } from '@daffodil/design/toast';

import { ToastStatusComponent } from './toast-status.component';

@NgModule({
  declarations: [
    ToastStatusComponent,
  ],
  imports: [
    CommonModule,
    DaffToastModule,
    DaffButtonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  exports: [
    ToastStatusComponent,
  ],
})
export class ToastStatusModule { }
