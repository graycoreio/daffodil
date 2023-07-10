import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'dismissable-notification',
  templateUrl: './dismissable-notification.component.html',
  styles: [`
    :host {
      display: flex;
      justify-content: center;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DismissableNotificationComponent {
  faInfoCircle = faInfoCircle;
}
