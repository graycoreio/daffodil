import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faCircleCheck,
  faCircleInfo,
  faCircleXmark,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';

import { DAFF_TAG_COMPONENTS } from '@daffodil/design/tag';

@Component({
  selector: 'statusable-tag-example',
  templateUrl: './statusable-tag.component.html',
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_TAG_COMPONENTS,
    FaIconComponent,
  ],
})
export class StatusableTagExampleComponent {
  faCircleCheck = faCircleCheck;
  faCircleInfo = faCircleInfo;
  faCircleXmark = faCircleXmark;
  faTriangleExclamation = faTriangleExclamation;
}
