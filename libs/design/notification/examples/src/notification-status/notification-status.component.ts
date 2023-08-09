import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  faCheck,
  faExclamation,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'notification-status',
  templateUrl: './notification-status.component.html',
  styleUrls: ['./notification-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationStatusComponent {
  faInfoCircle = faInfoCircle;
  faCheck = faCheck;
  faExclamation = faExclamation;

  statusControl: FormControl = new FormControl('success');
}
