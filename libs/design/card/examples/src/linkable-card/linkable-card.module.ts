import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffCardModule,
  DaffImageModule,
  DaffButtonModule,
} from '@daffodil/design';

import { LinkableCardComponent } from './linkable-card.component';

@NgModule({
  declarations: [
    LinkableCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DaffCardModule,
    DaffImageModule,
    DaffButtonModule,
  ],
  exports: [
    LinkableCardComponent,
  ],
})
export class LinkableCardModule { }
