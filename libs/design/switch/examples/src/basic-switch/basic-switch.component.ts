import { CommonModule } from '@angular/common';
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
    CommonModule,
  ],
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
    }
  `],
})
export class BasicSwitchComponent {
  checked = false;
  disabled = false;
  loading = true;
  position = 'left';
}
