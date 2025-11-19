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

import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';

@Component({
  selector: 'statusable-button-example',
  templateUrl: './statusable-button.component.html',
  styleUrls: ['./statusable-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_BUTTON_COMPONENTS,
    FaIconComponent,
  ],
})
export class StatusableButtonExampleComponent {
  faExclamation = faExclamation;
  faExclamationTriangle = faExclamationTriangle;
  faCheckCircle = faCheckCircle;
}
