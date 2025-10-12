import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DAFF_NATIVE_SELECT_COMPONENTS } from '@daffodil/design/native-select';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'native-select-disabled',
  templateUrl: './native-select-disabled.component.html',
  styles: [`
    daff-form-field {
      max-width: 25rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DAFF_NATIVE_SELECT_COMPONENTS,
  ],
})
export class NativeSelectDisabledComponent {
}
