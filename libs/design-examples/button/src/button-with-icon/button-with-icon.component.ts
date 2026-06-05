import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faArrowRight,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

import { DAFF_BASIC_BUTTON_COMPONENTS } from '@daffodil/design/button';

@Component({
  selector: 'button-with-icon-example',
  templateUrl: './button-with-icon.component.html',
  styleUrl: './button-with-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_BASIC_BUTTON_COMPONENTS,
    FaIconComponent,
  ],
})
export class ButtonWithIconExampleComponent {
  faShoppingCart = faShoppingCart;
  faArrowRight = faArrowRight;
}
