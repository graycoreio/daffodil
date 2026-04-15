import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_ALL_CARD_COMPONENTS } from '@daffodil/design/card';
import { DAFF_IMAGE_COMPONENTS } from '@daffodil/design/image';

@Component({
  selector: 'basic-cards-example',
  templateUrl: './basic-cards.component.html',
  styleUrls: ['./basic-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_ALL_CARD_COMPONENTS,
    DAFF_IMAGE_COMPONENTS,
    FaIconComponent,
    DaffButtonComponent,
  ],
})
export class BasicCardsExampleComponent {
  faMapMarked = faMapMarked;
}
