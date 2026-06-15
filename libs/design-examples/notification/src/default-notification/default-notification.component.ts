import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import {
  DAFF_BASIC_BUTTON_COMPONENTS,
  DAFF_FLAT_BUTTON_COMPONENTS,
} from '@daffodil/design/button';
import { DAFF_NOTIFICATION_COMPONENTS } from '@daffodil/design/notification';

@Component({
  selector: 'default-notification-example',
  templateUrl: './default-notification.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_NOTIFICATION_COMPONENTS,
    FaIconComponent,
    DAFF_BASIC_BUTTON_COMPONENTS,
    DAFF_FLAT_BUTTON_COMPONENTS,
  ],
})
export class DefaultNotificationExampleComponent {
  faHeart = faHeart;
}
