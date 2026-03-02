import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { DAFF_STROKED_BUTTON_COMPONENTS } from '@daffodil/design/button';

@Component({
  selector: 'stroked-button-example',
  templateUrl: './stroked-button.component.html',
  styleUrl: './stroked-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_STROKED_BUTTON_COMPONENTS,
    FaIconComponent,
  ],
})
export class StrokedButtonExampleComponent {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
}
