import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_CHECKBOX_COMPONENTS } from '@daffodil/design/checkbox';

@Component({
  selector: 'checkbox-set-with-hint',
  templateUrl: './checkbox-set-with-hint.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    DaffButtonComponent,
    DAFF_CHECKBOX_COMPONENTS,
  ],
})
export class CheckboxSetWithHintExampleComponent {
  choices = new UntypedFormGroup({
    choiceOne: new UntypedFormControl('', Validators.required),
    choiceTwo: new UntypedFormControl('', Validators.required),
    choiceThree: new UntypedFormControl('', Validators.required),
  });
}
