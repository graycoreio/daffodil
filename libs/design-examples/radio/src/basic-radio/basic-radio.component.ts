import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DAFF_RADIO_COMPONENTS } from '@daffodil/design/radio';

@Component({
  selector: 'basic-radio-example',
  templateUrl: './basic-radio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_RADIO_COMPONENTS,
    ReactiveFormsModule,
  ],
})
export class BasicRadioExampleComponent {
  radioGroup = new UntypedFormGroup({
    race: new UntypedFormControl('Zerg'),
  });

  constructor() {}
}
