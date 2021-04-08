import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffCardComponent } from './card/card.component';
import { DaffCardMediaDirective } from './card-media/card-media.directive';
import { DaffCardTaglineDirective } from './card-tagline/card-tagline.directive';
import { DaffCardTitleDirective } from './card-title/card-title.directive';
import { DaffCardActionsDirective } from './card-actions/card-actions.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DaffCardComponent,
    DaffCardTaglineDirective,
    DaffCardTitleDirective,
    DaffCardMediaDirective,
    DaffCardActionsDirective,
  ],
  exports: [
    DaffCardComponent,
    DaffCardTaglineDirective,
    DaffCardTitleDirective,
    DaffCardMediaDirective,
    DaffCardActionsDirective,
  ],
})
export class DaffCardModule { }
