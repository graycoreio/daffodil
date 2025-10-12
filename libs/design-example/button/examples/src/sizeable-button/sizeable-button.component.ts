import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'sizeable-button',
  templateUrl: './sizeable-button.component.html',
  styleUrls: ['./sizeable-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_BUTTON_COMPONENTS,
    FaIconComponent,
  ],
})
export class SizeableButtonComponent {
  faPlus = faPlus;
}
