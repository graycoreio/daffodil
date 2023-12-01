import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffSelectModule } from '@daffodil/design';

import { SkeletonSelectComponent } from './skeleton-select.component';

@NgModule({
  declarations: [
    SkeletonSelectComponent,
  ],
  exports: [
    SkeletonSelectComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffSelectModule,
  ],
})
export class SkeletonSelectModule { }
