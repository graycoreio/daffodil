import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffCardImageDirective } from './card-image/card-image.directive';
import { DaffCardTitleDirective } from './card-title/card-title.directive';
import { DaffCardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DaffCardComponent,
    DaffCardTitleDirective,
    DaffCardImageDirective,
  ],
  exports: [
    DaffCardComponent,
    DaffCardTitleDirective,
    DaffCardImageDirective,
  ],
})
export class DaffCardModule { }
