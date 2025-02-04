import { DaffCardComponent } from './card/basic/basic.component';
import { DaffRaisedCardComponent } from './card/raised/raised.component';
import { DaffStrokedCardComponent } from './card/stroked/stroked.component';
import { DaffCardActionsDirective } from './card-actions/card-actions.directive';
import { DaffCardContentDirective } from './card-content/card-content.directive';
import { DaffCardIconDirective } from './card-icon/card-icon.directive';
import { DaffCardImageDirective } from './card-image/card-image.directive';
import { DaffCardTaglineDirective } from './card-tagline/card-tagline.directive';
import { DaffCardTitleDirective } from './card-title/card-title.directive';

export const DAFF_CARD_COMPONENTS = <const> [
  DaffCardComponent,
  DaffCardIconDirective,
  DaffCardImageDirective,
  DaffCardTaglineDirective,
  DaffCardTitleDirective,
  DaffCardContentDirective,
  DaffCardActionsDirective,
];

export const DAFF_RAISED_CARD_COMPONENTS = <const> [
  DaffRaisedCardComponent,
  DaffCardIconDirective,
  DaffCardImageDirective,
  DaffCardTaglineDirective,
  DaffCardTitleDirective,
  DaffCardContentDirective,
  DaffCardActionsDirective,
];

export const DAFF_STROKED_CARD_COMPONENTS = <const> [
  DaffStrokedCardComponent,
  DaffCardIconDirective,
  DaffCardImageDirective,
  DaffCardTaglineDirective,
  DaffCardTitleDirective,
  DaffCardContentDirective,
  DaffCardActionsDirective,
];

export const DAFF_ALL_CARD_COMPONENTS = <const> [
  DaffCardComponent,
  DaffRaisedCardComponent,
  DaffStrokedCardComponent,
  DaffCardIconDirective,
  DaffCardImageDirective,
  DaffCardTaglineDirective,
  DaffCardTitleDirective,
  DaffCardContentDirective,
  DaffCardActionsDirective,
];
