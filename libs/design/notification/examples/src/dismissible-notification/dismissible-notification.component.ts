import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'dismissible-notification',
  templateUrl: './dismissible-notification.component.html',
  styles: [`
    :host {
      display: flex;
      justify-content: center;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DismissibleNotificationComponent {
  faInfoCircle = faInfoCircle;

  hidden = false;

  hideNotification() {
    this.hidden = true;
  }
}
