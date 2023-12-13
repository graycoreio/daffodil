import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DaffCardModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffImageModule } from '@daffodil/design/image';

import { LinkableCardComponent } from './linkable-card.component';

@NgModule({
  declarations: [
    LinkableCardComponent,
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
    LinkableCardComponent,
  ],
})
export class LinkableCardModule { }
