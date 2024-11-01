import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import { DaffFlatButtonComponent } from '@daffodil/design/button';
import { DAFF_NOTIFICATION_COMPONENTS } from '@daffodil/design/notification';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'notification-with-actions',
  templateUrl: './notification-with-actions.component.html',
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DAFF_NOTIFICATION_COMPONENTS,
    FontAwesomeModule,
    DaffFlatButtonComponent,
  ],
})
export class NotificationWithActionsComponent {
  faExclamationCircle = faExclamationCircle;

  showNotification = false;

  toggleNotification() {
    this.showNotification = !this.showNotification;
  }
}
