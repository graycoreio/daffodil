import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_TAG_COMPONENTS } from '@daffodil/design/tag';

@Component({

  selector: 'dismissible-tag-example',
  templateUrl: './dismissible-tag.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_TAG_COMPONENTS,
  ],
})
export class DismissibleTagExampleComponent {
  isHidden = false;

  hideTag() {
    this.isHidden = true;
  }
}
