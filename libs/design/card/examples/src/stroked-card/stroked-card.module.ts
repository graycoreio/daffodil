import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DaffCardModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffImageModule } from '@daffodil/design/image';

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
