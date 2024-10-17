import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DAFF_SELECT_COMPONENTS } from '@daffodil/design/select';

import { SELECT_EXAMPLE_ADDRESSES } from '../models/addresses';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'skeleton-select',
  templateUrl: './skeleton-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DAFF_SELECT_COMPONENTS,
  ],
})
export class SkeletonSelectComponent {
  control = new FormControl();

  options = SELECT_EXAMPLE_ADDRESSES;
}
