import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DAFF_SELECT_COMPONENTS } from '@daffodil/design/select';
import { DAFF_SWITCH_COMPONENTS } from '@daffodil/design/switch';

@Component({
  selector: 'switch-label-positions-example',
  templateUrl: './switch-label-positions.component.html',
  styleUrl: './switch-label-positions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_SWITCH_COMPONENTS,
    DAFF_FORM_FIELD_COMPONENTS,
    DAFF_SELECT_COMPONENTS,
    ReactiveFormsModule,
  ],
})
export class SwitchLabelPositionsExampleComponent {
  labelSwitchExample = new UntypedFormControl();

  options = [
    { value: '', label: 'Default' },
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
    { value: 'top', label: 'Top' },
    { value: 'bottom', label: 'Bottom' },
  ];

  labelPositionControl: UntypedFormControl = new UntypedFormControl(this.options[0]);
}
