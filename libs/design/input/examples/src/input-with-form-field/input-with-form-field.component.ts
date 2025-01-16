import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import {
  DaffFormFieldModule,
  DaffInputModule,
} from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input-with-form-field',
  templateUrl: './input-with-form-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DaffFormFieldModule, DaffInputModule],
})
export class InputWithFormFieldComponent {

}
