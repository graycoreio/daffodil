import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design';
import { DaffTextareaComponent } from '@daffodil/design/textarea';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'textarea-disabled',
  templateUrl: './textarea-disabled.component.html',
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
export class TextareaDisabledComponent {
  disabled = new UntypedFormControl({ value : '' , disabled: true });
}
