import { NgIf } from '@angular/common';
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
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

import { DAFF_NOTIFICATION_COMPONENTS } from '@daffodil/design/notification';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'notification-status',
  templateUrl: './notification-status.component.html',
  styleUrls: ['./notification-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_NOTIFICATION_COMPONENTS,
    NgIf,
    FaIconComponent,
    ReactiveFormsModule,
  ],
})
export class NotificationStatusComponent {
  faInfoCircle = faInfoCircle;
  faCheck = faCheck;
  faExclamation = faExclamation;

  statusControl: UntypedFormControl = new UntypedFormControl('success');
}
