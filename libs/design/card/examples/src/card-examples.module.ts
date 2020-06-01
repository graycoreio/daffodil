import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardWithImageModule } from './card-with-image/card-with-image.module';
import { CardWithColorModule } from './card-with-color/card-with-color.module';


@NgModule({
  imports: [
    CommonModule,
    CardWithImageModule,
    CardWithColorModule
  ]
})
export class CardExamplesModule { }