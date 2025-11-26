import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffErrorMessageComponent } from '@daffodil/design/form';
import { DAFF_SWITCH_COMPONENTS } from '@daffodil/design/switch';

@Component({
  selector: 'switch-sizes-example',
  templateUrl: './switch-sizes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_SWITCH_COMPONENTS,
    ReactiveFormsModule,
    DaffErrorMessageComponent,
  ],
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  `],
})
export class SwitchSizesExampleComponent {}
