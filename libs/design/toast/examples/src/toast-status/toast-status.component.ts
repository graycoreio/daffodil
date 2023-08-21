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

import {
  DaffToastData,
  DaffToastService,
} from '@daffodil/design/toast';

const status: Record<string, DaffToastData> =  {
  error: {
    title: 'Something went wrong',
    actions: [
      { title: 'Burn it all down.', color: 'theme-contrast', size: 'sm' },
    ],
  },
  success: {
    title: 'Warning!',
    message: 'Hrm...',
    actions: [
      { title: 'Repair', color: 'theme-contrast', size: 'sm' },
    ],
  },
  warn: {
    title: 'Hurrah!',
    message: 'It worked!',
    actions: [
      { title: 'Update', color: 'theme-contrast', size: 'sm' },
    ],
  },
};

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

  constructor(private toastService: DaffToastService) {}

  open() {
    this.toastService.open({
      status: this.statusControl.value,
      ...status[this.statusControl.value],
    });
  }
}
