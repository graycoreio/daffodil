import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { DAFF_BASIC_BUTTON_COMPONENTS } from '@daffodil/design/button';

@Component({
  selector: 'button-with-suffix-example',
  templateUrl: './button-with-suffix.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_BASIC_BUTTON_COMPONENTS,
    FaIconComponent,
  ],
})
export class ButtonWithSuffixExampleComponent {
  faArrowRight = faArrowRight;
}
