import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_ALL_CARD_COMPONENTS } from '@daffodil/design/card';

@Component({
  selector: 'elevated-card-example',
  templateUrl: './elevated-card.component.html',
  styleUrls: ['./elevated-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_ALL_CARD_COMPONENTS,
  ],
})
export class ElevatedCardExampleComponent {}
