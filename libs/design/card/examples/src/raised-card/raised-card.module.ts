import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
    RouterModule,
    DaffCardModule,
    DaffImageModule,
    DaffButtonModule,
  ],
  exports: [
    RaisedCardComponent,
  ],
})
export class RaisedCardModule { }
