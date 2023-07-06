import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  faExclamation,
  faExclamationTriangle,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'statusable-button',
  templateUrl: './statusable-button.component.html',
  styleUrls: ['./statusable-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusableButtonComponent {
  faExclamation = faExclamation;
  faExclamationTriangle = faExclamationTriangle;
  faCheckCircle = faCheckCircle;
}
