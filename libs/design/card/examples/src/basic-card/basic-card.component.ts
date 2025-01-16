import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_CARD_COMPONENTS } from '@daffodil/design/card';
import { DAFF_IMAGE_COMPONENTS } from '@daffodil/design/image';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_CARD_COMPONENTS,
    DAFF_IMAGE_COMPONENTS,
    FaIconComponent,
    DaffButtonComponent,
  ],
})
export class BasicCardComponent {
  faMapMarked = faMapMarked;
}
