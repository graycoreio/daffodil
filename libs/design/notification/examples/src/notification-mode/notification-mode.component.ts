import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'notification-mode',
  templateUrl: './notification-mode.component.html',
  styleUrls: ['./notification-mode.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationModeComponent {
  faInfoCircle = faInfoCircle;

  modeControl: FormControl = new FormControl('inline');

  handleClose() {
    console.log('test');
  }
}
