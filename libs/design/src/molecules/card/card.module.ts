import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { DaffCardComponent } from './card/card.component';
import { DaffCardTitleDirective } from './card-title/card-title.directive';
import { DaffCardImageDirective } from './card-image/card-image.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffCardComponent,
    DaffCardTitleDirective,
    DaffCardImageDirective
  ],
  exports: [
    DaffCardComponent,
    DaffCardTitleDirective,
    DaffCardImageDirective
  ]
})
export class DaffCardModule { }
