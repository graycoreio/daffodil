import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { DAFF_TAG_COMPONENTS } from '@daffodil/design/tag';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'statusable-tag',
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
export class StatusableTagComponent {
  faCircleCheck = faCircleCheck;
}
