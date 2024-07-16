import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faExclamation,
  faExclamationTriangle,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

import { DaffButtonModule } from '@daffodil/design/button';


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'statusable-button',
  templateUrl: './statusable-button.component.html',
  styleUrls: ['./statusable-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DaffButtonModule, FaIconComponent],
})
export class StatusableButtonComponent {
  faExclamation = faExclamation;
  faExclamationTriangle = faExclamationTriangle;
  faCheckCircle = faCheckCircle;
}
