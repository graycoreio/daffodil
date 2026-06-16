import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faCheck,
  faExclamation,
} from '@fortawesome/free-solid-svg-icons';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DAFF_NOTIFICATION_COMPONENTS } from '@daffodil/design/notification';
import { DAFF_SELECT_COMPONENTS } from '@daffodil/design/select';

@Component({
  selector: 'notification-status-example',
  templateUrl: './notification-status.component.html',
  styleUrl: './notification-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_NOTIFICATION_COMPONENTS,
    DAFF_SELECT_COMPONENTS,
    DAFF_FORM_FIELD_COMPONENTS,
    FaIconComponent,
    ReactiveFormsModule,
  ],
})
export class NotificationStatusExampleComponent {
  faCheck = faCheck;
  faExclamation = faExclamation;

  options = [
    {
      value: '',
      label: 'Default',
      title: 'Heads up',
      message: 'Here\'s something you might want to know.',
    },
    {
      value: 'info',
      label: 'Informational',
      title: 'Update available',
      message: 'A new version of the app is ready to install.',
    },
    {
      value: 'success',
      label: 'Success',
      title: 'Changes saved',
      message: 'Your profile details have been updated.',
    },
    {
      value: 'warn',
      label: 'Warn',
      title: 'Low stock',
      message: 'Only a few items left—order soon to avoid missing out.',
    },
    {
      value: 'critical',
      label: 'Critical',
      title: 'Payment failed',
      message: 'We couldn\'t process your payment. Please try another method.',
    },
  ];

  statusControl: UntypedFormControl = new UntypedFormControl(this.options[0]);
}
