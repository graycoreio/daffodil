import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DAFF_NATIVE_SELECT_COMPONENTS } from '@daffodil/design/native-select';

@Component({
  selector: 'native-select-disabled-example',
  templateUrl: './native-select-disabled.component.html',
  styles: [`
    daff-form-field {
      max-width: 25rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DAFF_NATIVE_SELECT_COMPONENTS,
    ReactiveFormsModule,
  ],
})
export class NativeSelectDisabledExampleComponent {
  control = new UntypedFormControl({ value : '' , disabled: true });
}
