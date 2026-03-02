import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { DaffIconButtonComponent } from '@daffodil/design/button';

@Component({
  selector: 'icon-button-example',
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffIconButtonComponent,
    FaIconComponent,
  ],
})
export class IconButtonExampleComponent {
  faPlus = faPlus;
}
