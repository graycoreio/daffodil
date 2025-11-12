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
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'textarea-hint',
  templateUrl: './textarea-hint.component.html',
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
export class TextareaHintComponent {
  control: UntypedFormControl = new UntypedFormControl('');
}
