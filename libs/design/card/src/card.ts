import { DaffCardComponent } from './card/card.component';
import { DaffCardActionsDirective } from './card-actions/card-actions.directive';
import { DaffCardContentDirective } from './card-content/card-content.directive';
import { DaffCardIconDirective } from './card-icon/card-icon.directive';
import { DaffCardImageDirective } from './card-image/card-image.directive';
import { DaffCardTaglineDirective } from './card-tagline/card-tagline.directive';
import { DaffCardTitleDirective } from './card-title/card-title.directive';

export const DAFF_CARD_COMPONENTS = <const>[
  DaffCardComponent,
  DaffCardIconDirective,
  DaffCardImageDirective,
  DaffCardTaglineDirective,
  DaffCardTitleDirective,
  DaffCardContentDirective,
  DaffCardActionsDirective,
];
