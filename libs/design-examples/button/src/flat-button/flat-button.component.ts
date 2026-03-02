import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_FLAT_BUTTON_COMPONENTS } from '@daffodil/design/button';

@Component({
  selector: 'flat-button-example',
  templateUrl: './flat-button.component.html',
  styleUrl: './flat-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FLAT_BUTTON_COMPONENTS,
  ],
})
export class FlatButtonExampleComponent {}
