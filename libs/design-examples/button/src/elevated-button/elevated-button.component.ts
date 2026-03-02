import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';

@Component({
  selector: 'elevated-button-example',
  templateUrl: './elevated-button.component.html',
  styleUrl: './elevated-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_BUTTON_COMPONENTS,
  ],
})
export class ElevatedButtonExampleComponent {
}
