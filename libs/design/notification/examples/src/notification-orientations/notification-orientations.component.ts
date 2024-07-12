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

import { DaffPrefixSuffixModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffNotificationModule } from '@daffodil/design/notification';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'notification-orientations',
  templateUrl: './notification-orientations.component.html',
  styleUrls: ['./notification-orientations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffNotificationModule,
    FaIconComponent,
    DaffPrefixSuffixModule,
    DaffButtonModule,
    ReactiveFormsModule,
  ],
})
export class NotificationOrientationsComponent {
  faInfoCircle = faInfoCircle;
  faCheck = faCheck;
  faExclamation = faExclamation;

  orientationControl: UntypedFormControl = new UntypedFormControl('vertical');
}
