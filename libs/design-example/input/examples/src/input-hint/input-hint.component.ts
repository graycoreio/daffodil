import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DaffInputComponent } from '@daffodil/design/input';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input-hint',
  templateUrl: './input-hint.component.html',
  styles: [`
    daff-form-field {
      max-width: 320px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DaffInputComponent,
  ],
})
export class InputHintComponent {
}
