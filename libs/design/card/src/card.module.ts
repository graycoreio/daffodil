import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffCardComponent } from './card/card.component';
import { DaffCardActionsDirective } from './card-actions/card-actions.directive';
import { DaffCardContentDirective } from './card-content/card-content.directive';
import { DaffCardIconDirective } from './card-icon/card-icon.directive';
import { DaffCardImageDirective } from './card-image/card-image.directive';
import { DaffCardTaglineDirective } from './card-tagline/card-tagline.directive';
import { DaffCardTitleDirective } from './card-title/card-title.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DaffCardComponent,
    DaffCardIconDirective,
    DaffCardImageDirective,
    DaffCardTaglineDirective,
    DaffCardTitleDirective,
    DaffCardContentDirective,
    DaffCardActionsDirective,
  ],
  exports: [
    DaffCardComponent,
    DaffCardIconDirective,
    DaffCardImageDirective,
    DaffCardTaglineDirective,
    DaffCardTitleDirective,
    DaffCardContentDirective,
    DaffCardActionsDirective,
  ],
})
export class DaffCardModule { }
