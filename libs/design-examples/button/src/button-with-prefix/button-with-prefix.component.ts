import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { DAFF_BASIC_BUTTON_COMPONENTS } from '@daffodil/design/button';

@Component({
  selector: 'button-with-prefix-example',
  templateUrl: './button-with-prefix.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_BASIC_BUTTON_COMPONENTS,
    FaIconComponent,
  ],
})
export class ButtonWithPrefixExampleComponent {
  faUser = faUser;
}
