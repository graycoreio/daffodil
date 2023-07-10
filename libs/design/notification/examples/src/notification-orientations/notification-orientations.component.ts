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
  selector: 'notification-orientations',
  templateUrl: './notification-orientations.component.html',
  styleUrls: ['./notification-orientations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationOrientationsComponent {
  faInfoCircle = faInfoCircle;
  faCheck = faCheck;
  faExclamation = faExclamation;

  orientationControl: FormControl = new FormControl('vertical');
}
