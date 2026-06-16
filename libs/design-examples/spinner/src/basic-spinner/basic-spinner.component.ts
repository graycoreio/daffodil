import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DAFF_SPINNER_COMPONENTS } from '@daffodil/design/spinner';

@Component({
  selector: 'basic-spinner-example',
  templateUrl: './basic-spinner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_SPINNER_COMPONENTS,
    ReactiveFormsModule,
  ],
})
export class BasicSpinnerExampleComponent {}
