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
  selector: 'switch-error',
  templateUrl: './switch-error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_SWITCH_COMPONENTS,
    ReactiveFormsModule,
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
