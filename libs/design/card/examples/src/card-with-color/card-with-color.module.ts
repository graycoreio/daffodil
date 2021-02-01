import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffCardModule,
  DaffImageModule,
} from '@daffodil/design';

import { CardWithColorComponent } from './card-with-color.component';

@NgModule({
  declarations: [
    CardWithColorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffCardModule,
    DaffImageModule,
  ],
  exports: [
    CardWithColorComponent,
  ],
})
export class CardWithColorModule { }
