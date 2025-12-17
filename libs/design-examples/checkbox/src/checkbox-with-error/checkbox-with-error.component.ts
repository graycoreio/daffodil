import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_CHECKBOX_COMPONENTS } from '@daffodil/design/checkbox';

@Component({
  selector: 'checkbox-with-error',
  templateUrl: './checkbox-with-error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_CHECKBOX_COMPONENTS,
  ],
})
export class CheckboxWithErrorExampleComponent {}
