import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'default-notification',
  templateUrl: './default-notification.component.html',
  styleUrls: ['./default-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultNotificationComponent {
  faInfoCircle = faInfoCircle;

  showNotification = false;

  toggleNotification() {
    this.showNotification = !this.showNotification;
  }
}
