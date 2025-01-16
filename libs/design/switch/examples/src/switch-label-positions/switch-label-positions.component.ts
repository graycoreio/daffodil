import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DAFF_SWITCH_COMPONENTS } from '@daffodil/design/switch';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'switch-label-positions',
  templateUrl: './switch-label-positions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_SWITCH_COMPONENTS,
    ReactiveFormsModule,
    NgFor,
  ],
})
export class SwitchLabelPositionsComponent {
  labelSwitchExample = new UntypedFormControl();
  labelPositionControl: UntypedFormControl = new UntypedFormControl('daff-left');

  options = [
    { value: 'daff-left', label: 'Left' },
    { value: 'daff-right', label: 'Right' },
    { value: 'daff-top', label: 'Top' },
    { value: 'daff-bottom', label: 'Bottom' },
  ];
}
