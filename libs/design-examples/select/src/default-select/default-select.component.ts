import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DAFF_SELECT_COMPONENTS } from '@daffodil/design/select';

import { SELECT_EXAMPLE_ADDRESSES } from '../models/addresses';

@Component({
  selector: 'default-select-example',
  templateUrl: './default-select.component.html',
  styleUrls: ['./default-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DAFF_SELECT_COMPONENTS,
    DAFF_FORM_FIELD_COMPONENTS,
  ],
})
export class DefaultSelectExampleComponent {
  control = new FormControl();

  options = SELECT_EXAMPLE_ADDRESSES;
}
