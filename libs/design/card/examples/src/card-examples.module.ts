import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BasicCardModule } from './basic-card/basic-card.module';
import { CardThemingModule } from './card-theming/card-theming.module';
import { CARD_EXAMPLES } from './examples';
import { RaisedCardModule } from './raised-card/raised-card.module';

@NgModule({
  imports: [
    CommonModule,
    BasicCardModule,
    CardThemingModule,
    RaisedCardModule,
  ],
  entryComponents: [
    ...CARD_EXAMPLES,
  ],
})
export class CardExamplesModule { }
