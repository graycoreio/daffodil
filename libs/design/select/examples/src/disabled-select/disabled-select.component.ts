import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { SELECT_EXAMPLE_ADDRESSES } from '../models/addresses';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'disabled-select',
  templateUrl: './disabled-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledSelectComponent {
  control = new FormControl();

  options = SELECT_EXAMPLE_ADDRESSES;
}
