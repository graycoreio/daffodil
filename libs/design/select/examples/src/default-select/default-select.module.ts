import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffSelectModule } from '@daffodil/design';

import { DefaultSelectComponent } from './default-select.component';

@NgModule({
  declarations: [
    DefaultSelectComponent,
  ],
  exports: [
    DefaultSelectComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OverlayModule,
    DaffSelectModule,
  ],
})
export class DefaultSelectModule { }
