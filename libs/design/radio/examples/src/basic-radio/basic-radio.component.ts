import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DaffRadioModule } from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-radio',
  templateUrl: './basic-radio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DaffRadioModule, ReactiveFormsModule],
})
export class BasicRadioComponent {
  radioGroup = new UntypedFormGroup({
    race: new UntypedFormControl('Zerg'),
  });

  constructor() {}
}
