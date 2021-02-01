import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  DaffCardModule,
  DaffImageModule,
} from '@daffodil/design';

import { CardWithImageComponent } from './card-with-image.component';

@NgModule({
  declarations: [
    CardWithImageComponent,
  ],
  imports: [
    CommonModule,
    DaffCardModule,
    DaffImageModule,
  ],
  exports: [
    CardWithImageComponent,
  ],
})
export class CardWithImageModule { }
