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
  selector: 'input-hint',
  templateUrl: './input-hint.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffFormFieldModule,
    DaffInputModule,
  ],
})
export class InputHintComponent {
}
