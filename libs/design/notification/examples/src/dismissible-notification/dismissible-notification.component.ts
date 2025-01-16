import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { DaffPrefixSuffixModule } from '@daffodil/design';
import { DAFF_NOTIFICATION_COMPONENTS } from '@daffodil/design/notification';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'dismissible-notification',
  templateUrl: './dismissible-notification.component.html',
  styles: [`
    :host {
      display: flex;
      justify-content: center;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_NOTIFICATION_COMPONENTS,
    FaIconComponent,
    DaffPrefixSuffixModule,
    NgIf,
  ],
})
export class DismissibleNotificationComponent {
  faInfoCircle = faInfoCircle;

  hidden = false;

  hideNotification() {
    this.hidden = true;
  }
}
