import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BasicCardModule } from './basic-card/basic-card.module';
import { CardThemingModule } from './card-theming/card-theming.module';
import { LinkableCardModule } from './linkable-card/linkable-card.module';
import { RaisedCardModule } from './raised-card/raised-card.module';

@NgModule({
  imports: [
    CommonModule,
    BasicCardModule,
    CardThemingModule,
    RaisedCardModule,
    LinkableCardModule,
  ],
})
export class CardExamplesModule { }
