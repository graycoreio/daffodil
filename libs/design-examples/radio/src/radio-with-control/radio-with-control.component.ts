import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DAFF_RADIO_COMPONENTS } from '@daffodil/design/radio';

@Component({
  selector: 'radio-with-control-example',
  templateUrl: './radio-with-control.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_RADIO_COMPONENTS,
    ReactiveFormsModule,
  ],
})
export class RadioWithControlExampleComponent {
  ccType = new UntypedFormControl('visa');
}
