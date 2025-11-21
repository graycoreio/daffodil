import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DAFF_SWITCH_COMPONENTS } from '@daffodil/design/switch';

@Component({
  selector: 'basic-switch-example',
  templateUrl: './basic-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_SWITCH_COMPONENTS,
    ReactiveFormsModule,
  ],
})
export class BasicSwitchExampleComponent {}
