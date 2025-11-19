import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DaffInputComponent } from '@daffodil/design/input';

@Component({
  selector: 'input-disabled-example',
  templateUrl: './input-disabled.component.html',
  styles: [`
    daff-form-field {
      max-width: 320px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    DaffInputComponent,
    DAFF_FORM_FIELD_COMPONENTS,
  ],
})
export class InputDisabledExampleComponent {
  disabled = new UntypedFormControl({ value : '' , disabled: true });
}
