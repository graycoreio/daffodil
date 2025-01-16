import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  faCheck,
  faExclamation,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

import { DaffButtonComponent } from '@daffodil/design/button';
import {
  DaffToastData,
  DaffToastService,
} from '@daffodil/design/toast';

const status: Record<string, DaffToastData> =  {
  critical: {
    title: 'Server error',
    message: 'There is a server error.',
  },
  success: {
    title: 'Update complete',
    message: 'The app is now up-to-date with the newest version.',
  },
  warn: {
    title: 'The app is outdated',
    message: 'Update the app now. The version you are using may have security vulnerabilities.',
  },
};

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'toast-status',
  templateUrl: './toast-status.component.html',
  styleUrls: ['./toast-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffButtonComponent,
    ReactiveFormsModule,
  ],
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
    },
    {
      duration: this.statusControl.value === 'critical' ? undefined : 5000,
    },
    );
  }
}
