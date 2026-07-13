import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffBadgeComponent } from '@daffodil/design/badge';

@Component({
  selector: 'badge-statuses-example',
  templateUrl: './badge-statuses.component.html',
  styleUrl: './badge-statuses.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffBadgeComponent,
  ],
})
export class BadgeStatusesExampleComponent {}
