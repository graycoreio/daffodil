import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { DAFF_SELECT_COMPONENTS } from '@daffodil/design/select';

import { SELECT_EXAMPLE_ADDRESSES } from '../models/addresses';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'select-with-error',
  templateUrl: './select-with-error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    DAFF_SELECT_COMPONENTS,
  ],
})
export class SelectWithErrorComponent {
  control = new FormControl('', [Validators.required]);

  options = SELECT_EXAMPLE_ADDRESSES;
}
