import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DaffTextareaComponent } from '@daffodil/design/textarea';

@Component({
  selector: 'textarea-hint-example',
  templateUrl: './textarea-hint.component.html',
  styles: [`
    daff-form-field {
      max-width: 20rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DaffTextareaComponent,
    ReactiveFormsModule,
  ],
})
export class TextareaHintExampleComponent {
  control: UntypedFormControl = new UntypedFormControl('');
}
