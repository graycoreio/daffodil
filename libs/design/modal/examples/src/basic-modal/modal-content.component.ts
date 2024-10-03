import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';
import { DAFF_MODAL_COMPONENTS } from '@daffodil/design/modal';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-modal-content',
  templateUrl: './modal-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DAFF_MODAL_COMPONENTS,
    DAFF_BUTTON_COMPONENTS,
  ],
})
export class BasicModalContentComponent {

}
