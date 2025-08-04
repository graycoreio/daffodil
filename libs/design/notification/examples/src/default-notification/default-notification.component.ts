import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import {
  DAFF_BASIC_BUTTON_COMPONENTS,
  DAFF_FLAT_BUTTON_COMPONENTS,
} from '@daffodil/design/button';
import { DAFF_NOTIFICATION_COMPONENTS } from '@daffodil/design/notification';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'default-notification',
  templateUrl: './default-notification.component.html',
  styleUrls: ['./default-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_NOTIFICATION_COMPONENTS,
    FaIconComponent,
    DAFF_BASIC_BUTTON_COMPONENTS,
    DAFF_FLAT_BUTTON_COMPONENTS,
  ],
})
export class DefaultNotificationComponent {
  faInfoCircle = faInfoCircle;
}
