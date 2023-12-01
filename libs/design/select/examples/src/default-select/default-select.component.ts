import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { SELECT_EXAMPLE_ADDRESSES } from '../addresses';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'default-select',
  templateUrl: './default-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultSelectComponent {
  control = new FormControl();

  options = SELECT_EXAMPLE_ADDRESSES;
}
