import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

import { DAFF_NOTIFICATION_COMPONENTS } from '@daffodil/design/notification';

@Component({
  selector: 'dismissible-notification-example',
  templateUrl: './dismissible-notification.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_NOTIFICATION_COMPONENTS,
    FaIconComponent,
  ],
})
export class DismissibleNotificationExampleComponent {
  faTruck = faTruck;

  hidden = false;

  hideNotification() {
    this.hidden = true;
  }
}
