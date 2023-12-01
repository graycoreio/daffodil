import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { SELECT_EXAMPLE_ADDRESSES } from '../addresses';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'skeleton-select',
  templateUrl: './skeleton-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonSelectComponent {
  control = new FormControl();

  options = SELECT_EXAMPLE_ADDRESSES;
}
