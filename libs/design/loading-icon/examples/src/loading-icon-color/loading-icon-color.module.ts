import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffLoadingIconModule } from '@daffodil/design/loading-icon';

import { LoadingIconColorComponent } from './loading-icon-color.component';

@NgModule({
  declarations: [
    LoadingIconColorComponent,
  ],
  exports: [
    LoadingIconColorComponent,
  ],
  imports: [
    CommonModule,
    DaffLoadingIconModule,
    ReactiveFormsModule,
  ],
})
export class LoadingIconColorModule { }
