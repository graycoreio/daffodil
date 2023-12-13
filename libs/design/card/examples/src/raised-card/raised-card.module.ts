import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffCardModule,
  DaffImageModule,
} from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';

import { RaisedCardComponent } from './raised-card.component';

@NgModule({
  declarations: [
    RaisedCardComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    DaffCardModule,
    DaffImageModule,
    DaffButtonModule,
  ],
  exports: [
    RaisedCardComponent,
  ],
})
export class RaisedCardModule { }
