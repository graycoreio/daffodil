import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design/button';
import {
  DaffToastModule,
  provideDaffToastOptions,
} from '@daffodil/design/toast';

import { ToastPositionsComponent } from './toast-positions.component';

@NgModule({
  declarations: [
    ToastPositionsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    DaffToastModule,
    FontAwesomeModule,
    DaffButtonModule,
  ],
  exports: [
    ToastPositionsComponent,
  ],
  providers: [
    provideDaffToastOptions({
      position: {
        vertical: 'top',
        horizontal: 'right',
      },
      useParent: false,
    }),
  ],
})
export class ToastPositionsModule { }
