import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design';
import { DAFF_SELECT_COMPONENTS } from '@daffodil/design/select';

import { SELECT_EXAMPLE_ADDRESSES } from '../models/addresses';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'select-with-error',
  templateUrl: './select-with-error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    DAFF_SELECT_COMPONENTS,
    DAFF_FORM_FIELD_COMPONENTS,
  ],
})
export class SelectWithErrorComponent {
  control = new FormControl('', [Validators.required]);

  options = SELECT_EXAMPLE_ADDRESSES;
}
