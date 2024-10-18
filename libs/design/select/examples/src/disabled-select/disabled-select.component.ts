import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';

import { DAFF_SELECT_COMPONENTS } from '@daffodil/design/select';

import { SELECT_EXAMPLE_ADDRESSES } from '../models/addresses';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'disabled-select',
  templateUrl: './disabled-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DAFF_SELECT_COMPONENTS,
  ],
})
export class DisabledSelectComponent {
  disabled = new UntypedFormControl({ value : '' , disabled: true });

  options = SELECT_EXAMPLE_ADDRESSES;
}
