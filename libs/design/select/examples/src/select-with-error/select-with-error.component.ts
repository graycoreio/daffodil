import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  FormControl,
  Validators,
} from '@angular/forms';

import { SELECT_EXAMPLE_ADDRESSES } from '../models/addresses';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'select-with-error',
  templateUrl: './select-with-error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectWithErrorComponent {
  control = new FormControl('', [Validators.required]);

  options = SELECT_EXAMPLE_ADDRESSES;
}
