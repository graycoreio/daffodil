import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { DAFF_TAG_COMPONENTS } from '@daffodil/design/tag';

@Component({

  selector: 'dismissible-tag-example',
  templateUrl: './dismissible-tag.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_TAG_COMPONENTS,
    FaIconComponent,
  ],
})
export class DismissibleTagExampleComponent {
  faCircleCheck = faCircleCheck;

  isHidden = false;

  hideTag() {
    this.isHidden = true;
  }
}
