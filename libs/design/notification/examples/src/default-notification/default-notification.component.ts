import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'default-notification',
  templateUrl: './default-notification.component.html',
  styles: [`
    :host {
      display: flex;
      justify-content: center;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultNotificationComponent {
  faInfoCircle = faInfoCircle;
}
