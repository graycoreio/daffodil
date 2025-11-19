import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_SWITCH_COMPONENTS } from '@daffodil/design/switch';

@Component({
  selector: 'disabled-switch-example',
  templateUrl: './disabled-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_SWITCH_COMPONENTS,
  ],
})
export class DisabledSwitchExampleComponent {}
