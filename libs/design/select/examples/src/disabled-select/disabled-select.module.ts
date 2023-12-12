import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffSelectModule } from '@daffodil/design/select';

import { DisabledSelectComponent } from './disabled-select.component';

@NgModule({
  declarations: [
    DisabledSelectComponent,
  ],
  exports: [
    DisabledSelectComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffSelectModule,
  ],
})
export class DisabledSelectModule { }
