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
  selector: 'input-disabled',
  templateUrl: './input-disabled.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DaffFormFieldModule, DaffInputModule],
})
export class InputDisabledComponent {

}
