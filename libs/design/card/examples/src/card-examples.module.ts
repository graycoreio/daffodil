import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardWithColorModule } from './card-with-color/card-with-color.module';
import { CardWithImageModule } from './card-with-image/card-with-image.module';
import { CARD_EXAMPLES } from './examples';

@NgModule({
  imports: [
    CommonModule,
    CardWithImageModule,
    CardWithColorModule,
  ],
  entryComponents: [
    ...CARD_EXAMPLES,
  ],
})
export class CardExamplesModule { }
