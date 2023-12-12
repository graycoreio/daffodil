import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffSelectModule } from '@daffodil/design/select';

import { SelectWithErrorComponent } from './select-with-error.component';

@NgModule({
  declarations: [
    SelectWithErrorComponent,
  ],
  exports: [
    SelectWithErrorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OverlayModule,
    DaffSelectModule,
  ],
})
export class SelectWithErrorModule { }
