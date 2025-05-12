import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';

import {
  DaffFormFieldModule,
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
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DaffFormFieldModule,
    DaffInputComponent,
  ],
})
export class InputDisabledComponent {
  disabled = new UntypedFormControl({ value : '' , disabled: true });
}
