import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DAFF_SWITCH_COMPONENTS } from '@daffodil/design/switch';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'checked-switch',
  templateUrl: './checked-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_SWITCH_COMPONENTS,
    ReactiveFormsModule,
  ],
})
export class CheckedSwitchComponent {}
