import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  DaffCardModule,
  DaffImageModule,
  DaffButtonModule,
} from '@daffodil/design';

import { StrokedCardComponent } from './stroked-card.component';

@NgModule({
  declarations: [
    StrokedCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    DaffCardModule,
    DaffImageModule,
    DaffButtonModule,
  ],
  exports: [
    StrokedCardComponent,
  ],
})
export class StrokedCardModule { }
