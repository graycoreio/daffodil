import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffCardModule,
  DaffImageModule,
  DaffButtonModule,
} from '@daffodil/design';

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
