import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffCardActionsDirective } from './card-actions/card-actions.directive';
import { DaffCardImageDirective } from './card-image/card-image.directive';
import { DaffCardTaglineDirective } from './card-tagline/card-tagline.directive';
import { DaffCardTitleDirective } from './card-title/card-title.directive';
import { DaffCardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DaffCardComponent,
    DaffCardTaglineDirective,
    DaffCardTitleDirective,
    DaffCardImageDirective,
    DaffCardActionsDirective,
  ],
  exports: [
    DaffCardComponent,
    DaffCardTaglineDirective,
    DaffCardTitleDirective,
    DaffCardImageDirective,
    DaffCardActionsDirective,
  ],
})
export class DaffCardModule { }
