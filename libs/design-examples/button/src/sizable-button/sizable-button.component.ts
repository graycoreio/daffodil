import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';

@Component({
  selector: 'sizable-button-example',
  templateUrl: './sizable-button.component.html',
  styleUrls: ['./sizable-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_BUTTON_COMPONENTS,
    FaIconComponent,
  ],
})
export class SizeableButtonExampleComponent {
  faPlus = faPlus;
}
