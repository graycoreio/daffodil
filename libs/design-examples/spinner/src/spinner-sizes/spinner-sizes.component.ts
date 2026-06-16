import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_SPINNER_COMPONENTS } from '@daffodil/design/spinner';

@Component({
  selector: 'spinner-sizes-example',
  templateUrl: './spinner-sizes.component.html',
  styleUrl: './spinner-sizes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_SPINNER_COMPONENTS,
  ],
})
export class SpinnerSizesExampleComponent {}
