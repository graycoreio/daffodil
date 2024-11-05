import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_SWITCH_COMPONENTS } from '@daffodil/design/switch';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'loading-switch',
  templateUrl: './loading-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DAFF_SWITCH_COMPONENTS,
  ],
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
    }
  `],
})
export class LoadingSwitchComponent {
  checked = false;
  loading = true;
}
