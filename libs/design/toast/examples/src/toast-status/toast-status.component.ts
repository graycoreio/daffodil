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
  selector: 'toast-status',
  templateUrl: './toast-status.component.html',
  styleUrls: ['./toast-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastStatusComponent {
  faInfoCircle = faInfoCircle;
  faCheck = faCheck;
  faExclamation = faExclamation;

  statusControl: FormControl = new FormControl('success');
}
