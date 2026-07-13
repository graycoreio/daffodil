import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffBadgeComponent } from '@daffodil/design/badge';

@Component({
  selector: 'basic-badge-example',
  templateUrl: './basic-badge.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffBadgeComponent,
  ],
})
export class BasicBadgeExampleComponent {}
