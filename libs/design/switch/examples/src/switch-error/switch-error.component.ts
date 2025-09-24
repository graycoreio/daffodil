import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffErrorMessageComponent } from '@daffodil/design/form-field';
import { DAFF_SWITCH_COMPONENTS } from '@daffodil/design/switch';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'switch-error',
  templateUrl: './switch-error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_SWITCH_COMPONENTS,
    ReactiveFormsModule,
    DaffErrorMessageComponent,
  ],
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
    }
  `],
})
export class SwitchErrorComponent {
  checked = false;
  error = false;
}
