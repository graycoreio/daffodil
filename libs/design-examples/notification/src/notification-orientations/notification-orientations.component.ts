import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DAFF_NOTIFICATION_COMPONENTS } from '@daffodil/design/notification';
import { DAFF_SELECT_COMPONENTS } from '@daffodil/design/select';

@Component({
  selector: 'notification-orientations-example',
  templateUrl: './notification-orientations.component.html',
  styleUrl: './notification-orientations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_NOTIFICATION_COMPONENTS,
    DAFF_SELECT_COMPONENTS,
    DAFF_FORM_FIELD_COMPONENTS,
    FaIconComponent,
    ReactiveFormsModule,
  ],
})
export class NotificationOrientationsExampleComponent {
  faCheck = faCheck;

  options = [
    { value: '', label: 'Default' },
    { value: 'horizontal', label: 'Horizontal' },
    { value: 'vertical', label: 'Vertical' },
  ];

  orientationControl: UntypedFormControl = new UntypedFormControl(this.options[0]);
}
