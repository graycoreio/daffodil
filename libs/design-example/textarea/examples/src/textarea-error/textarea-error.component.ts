import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DaffTextareaComponent } from '@daffodil/design/textarea';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'textarea-error',
  templateUrl: './textarea-error.component.html',
  styles: [`
    daff-form-field {
      max-width: 320px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DaffTextareaComponent,
    ReactiveFormsModule,
  ],
})
export class TextareaErrorComponent {
  control: UntypedFormControl = new UntypedFormControl('', [
    Validators.required,
  ]);
}
