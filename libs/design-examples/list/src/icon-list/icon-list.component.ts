import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faLock,
  faRotateLeft,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';

import { DAFF_LIST_COMPONENTS } from '@daffodil/design/list';

@Component({
  selector: 'icon-list-example',
  templateUrl: './icon-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_LIST_COMPONENTS,
    FaIconComponent,
  ],
})
export class IconListExampleComponent {
  faTruck = faTruck;
  faRotateLeft = faRotateLeft;
  faLock = faLock;
}
