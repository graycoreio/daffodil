import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { DaffPrefixSuffixModule } from '@daffodil/design';
import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';
import { DAFF_NOTIFICATION_COMPONENTS } from '@daffodil/design/notification';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'default-notification',
  templateUrl: './default-notification.component.html',
  styleUrls: ['./default-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DAFF_NOTIFICATION_COMPONENTS,
    FaIconComponent,
    DaffPrefixSuffixModule,
    DAFF_BUTTON_COMPONENTS,
    NgIf,
  ],
})
export class DefaultNotificationComponent {
  faInfoCircle = faInfoCircle;

  showNotification = false;

  toggleNotification() {
    this.showNotification = !this.showNotification;
  }
}
