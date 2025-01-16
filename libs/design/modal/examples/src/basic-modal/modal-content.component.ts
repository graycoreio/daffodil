import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_MODAL_COMPONENTS } from '@daffodil/design/modal';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-modal-content',
  templateUrl: './modal-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_MODAL_COMPONENTS,
    DaffButtonComponent,
  ],
})
export class BasicModalContentComponent {

}
