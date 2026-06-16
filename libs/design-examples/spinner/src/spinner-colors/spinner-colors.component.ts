import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_SPINNER_COMPONENTS } from '@daffodil/design/spinner';

@Component({
  selector: 'spinner-colors-example',
  templateUrl: './spinner-colors.component.html',
  styleUrl: './spinner-colors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_SPINNER_COMPONENTS,
  ],
})
export class SpinnerColorsExampleComponent {}
