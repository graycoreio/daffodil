import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffCardModule } from '@daffodil/design';
import { CARD_EXAMPLES } from './examples';

@NgModule({
  imports: [
    CommonModule,
    DaffCardModule
  ],
  declarations: [
    ...CARD_EXAMPLES
  ]
})
export class CardExamplesModule { }