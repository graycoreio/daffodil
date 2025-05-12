import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';

import {
  DAFF_FORM_FIELD_COMPONENTS,
  DaffInputComponent,
} from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input-disabled',
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
export class InputDisabledComponent {
  disabled = new UntypedFormControl({ value : '' , disabled: true });
}
