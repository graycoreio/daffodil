import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { DAFF_BADGE_COMPONENTS } from '@daffodil/design/badge';

@Component({
  selector: 'badge-prefix-example',
  templateUrl: './badge-prefix.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_BADGE_COMPONENTS,
    FaIconComponent,
  ],
})
export class BadgePrefixExampleComponent {
  faCircleCheck = faCircleCheck;
}
