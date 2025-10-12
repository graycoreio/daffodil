import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_ALL_CARD_COMPONENTS } from '@daffodil/design/card';
import { DAFF_IMAGE_COMPONENTS } from '@daffodil/design/image';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'elevated-card',
  templateUrl: './elevated-card.component.html',
  styleUrls: ['./elevated-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_ALL_CARD_COMPONENTS,
    DAFF_IMAGE_COMPONENTS,
  ],
})
export class ElevatedCardComponent {}
