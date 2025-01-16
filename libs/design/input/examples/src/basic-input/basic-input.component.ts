import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffInputModule } from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-input',
  templateUrl: './basic-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DaffInputModule],
})
export class BasicInputComponent {

}
