import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffModalModule } from '@daffodil/design/modal';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-modal-content',
  templateUrl: './modal-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DaffModalModule, DaffButtonModule],
})
export class BasicModalContentComponent {

}
