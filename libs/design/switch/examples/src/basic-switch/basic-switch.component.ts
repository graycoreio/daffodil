import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_SWITCH_COMPONENTS } from '@daffodil/design/switch';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-switch',
  templateUrl: './basic-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DAFF_SWITCH_COMPONENTS,
  ],
})
export class BasicSwitchComponent {
  on = false;
  changeSwitch() {
    this.on = !this.on;
  }
}
